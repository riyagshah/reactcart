import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Cart.module.css"

const Cart = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>Cart </div>
  )
}

export default Cart