import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductContainer from "./ProductContainer";

export default function Shopmandu() {
  const [productList, setProductList] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [countItem, setCountItem] = useState(0);

  const fetchProduct = async () => {
    let response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    if (response?.data?.data?.product) {
      setProductList(response.data.data.product);
      setFilterProduct(response.data.data.product);
    }
  };

  const updateCart = (item, count) => {
    //try 3
    if (count !== 0) {
      let index = userCart.findIndex((product) => product.id === item.id);

      if (index < 0) {
        item.count = count;
        setUserCart([...userCart, item]);
      } else {
        userCart[index].count += count;
        setUserCart([...userCart]);
      }
      setCountItem(countItem + count);
    }

    //try 2
    // let check = false;

    // let newCart = userCart.map((product)=>{
    //   console.log(product)
    //   if(product.id === item.id){
    //     check = true;
    //     return {product , count : product.count + count};

    //   }else{
    //     return({product , count: count})

    //   }
    // })

    // console.log(newCart)

    // if(userCart.length === 0){
    //   count > 0 ? setUserCart([item]) : setUserCart([])
    // }else if(check){
    //   setUserCart([...newCart])
    //   console.log('me')
    // }else{
    //   setUserCart([...newCart,item])
    //   console.log("i am here")
    // }
    // setCountItem(countItem + count);

    // try 1
    // if(item){
    // let newPrice = item.price.slice(1,item.price.length);
    // console.log(newPrice)
    // // item.price = Number(newPrice) * 119;
    // }
    // let newCart;
    // if(userCart.length !== 0){
    //    newCart = userCart.map((product) => {
    //     if (product.id === item.id) {
    //       return [{...product,count: product.count + 1}];
    //     }else{
    //       return product;
    //     }
    //   });
    // }else{
    //     newCart = item;
    // }

    // console.log(userCart)
    // console.log(newCart)

    // if (count !== 0) {
    //   setUserCart(newCart);
    // } else {
    //   setUserCart([...userCart]);
    // }
    // count !== 0 ? setUserCart([...userCart, item]) : setUserCart([...userCart]);
    // setCountItem(countItem + count);
    // item.count = count;
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar
        countItem={countItem}
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
      />
      <ProductContainer
        setUserCart={setUserCart}
        filterProduct={filterProduct}
        userCart={userCart}
        updateCart={updateCart}
        productList={productList}
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
        setCountItem={setCountItem}
        countItem={countItem}
        setProductList={setProductList}
      />
    </>
  );
}
