import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [productOrders, setProductOrders] = useState([]);

  useEffect(() => {
    fetchProductOrders();
  }, []);

  const fetchProductOrders = async () => {
    try {
      const response = await axios.get('http://localhost:4000/productorder');
      setProductOrders(response.data.productOrders);
    } catch (error) {
      console.error('Error fetching product orders:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/productorder/${id}`);
      setProductOrders(productOrders.filter(order => order._id !== id));
      al('Product order deleted successfully');
    } catch (error) {
      console.error('Error deleting product order:', error);
    }
  };

  return (
    <div>
      <h1>Product Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Comments</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productOrders.map(order => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.comments}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
