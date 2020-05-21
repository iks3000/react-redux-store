/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './shop-header.css';

const ShopHeader = ({ numItem, total }) => {
  return (
    <header className="shop-header row">
      <a href="#" className="logo text-dark">BookStore</a>
      <a href="#" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItem} item (${total})
      </a>
    </header>
  )
};

export default ShopHeader;
