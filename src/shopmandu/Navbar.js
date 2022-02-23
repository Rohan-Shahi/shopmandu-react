import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
// import ""

export default function Navbar(props) {
  const {countItem,toggleCart,setToggleCart} = props;
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Shopmandu</a>
       
            <ul className="navbar-list">
              <li>Home</li>
              <li>
                <i className="bi bi-cart2" onClick={()=>{setToggleCart(!toggleCart)}}>  </i>
                <span>{countItem}</span>
              </li>
              <li><img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="user" /></li>
            </ul>
    
        </div>
      </nav>
    </>
  );
}
