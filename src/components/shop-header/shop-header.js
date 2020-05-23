import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({ numItem, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">BookStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart d-flex align-items-center h-100">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItem} item (${total})
      </div>
      </Link>
    </header>
  )
};

export default ShopHeader;
