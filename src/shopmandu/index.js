import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductContainer from "./ProductContainer";

export default function Shopmandu() {
  const [productList, setProductList] = useState([]);
  const [toggleCart, setToggleCart] = useState(true);

  const [userCart, setUserCart] = useState([]);
  const [countItem, setCountItem] = useState(0);

  const fetchProduct = async () => {
    let response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    if (response?.data?.data?.product) {
      setProductList(response.data.data.product);
    }
  };

  const updateCart = (item, count) => {
    // if(item){
    // let newPrice = item.price.slice(1,item.price.length);
    // console.log(newPrice)
    // // item.price = Number(newPrice) * 119;

    // }
    let newCart = userCart.map((product) => {
      if (product.id === item.id) {
        return {...product,count: product.count + 1};
      }else{
        return product;
      }
    });
    // console.log(newCart)

    if (count !== 0) {
      setUserCart(newCart);
    } else {
      setUserCart([...userCart]);
    }
    // count !== 0 ? setUserCart([...userCart, item]) : setUserCart([...userCart]);
    setCountItem(countItem + count);
    item.count = count;

    console.log(userCart);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  // console.log(productList)

  // console.log(toggleCart)

  // console.log(userCart);

  return (
    <>
      <Navbar
        countItem={countItem}
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
      />
      <ProductContainer
        setUserCart={setUserCart}
        userCart={userCart}
        updateCart={updateCart}
        productList={productList}
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
        setCountItem={setCountItem}
        countItem={countItem}
        setProductList = {setProductList}
      />
    </>
  );
}
