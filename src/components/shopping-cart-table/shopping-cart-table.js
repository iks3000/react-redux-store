import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart } from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total.toFixed(2)}</td>
        <td className="text-center">
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm shadow-none">
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm shadow-none">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm shadow-none">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  }

  const SumTotal = () => {
    const sum = items
      .map((el) => (el.count * el.total))
      .reduce((accumulator, current) => accumulator + current, 0);

    return (
      <div className="total">
        Total: ${sum.toFixed(2)}
      </div>
    )
  }

  return (
    <div className="shopping-cart-table mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Your Order</h2>
        <SumTotal />
      </div>
      <table className="table table-bordered m-0">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemoveFromCart,
  onDelete: allBooksRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
