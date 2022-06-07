import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3010/menstopwear/${id}`)
        .then((res) => res.json())
        .then((res) => setProduct(res));
    }
  }, [id]);

  return (
    <div>
      <div className={styles.productbox} key={product.id}>
          <img className={styles.img}  src={product.img_1} />
        
        <div className={styles.text}>
          <p className={styles.title}>Brand: {product.title}</p>
          <p className={styles.desc}>Description: {product.description}</p>
          <p className={styles.price}>Price: {product.price}$</p>
          <p className={styles.sprice}>Original Price: <s>{product.strikedoffprice}</s>$</p>
          <p className={styles.discount}>Discount: {product.discount}% off</p>
          <p className={styles.color}>Color: {product.color}</p>
          <p className={styles.cate}>Category: {product.category}</p>
          <p className={styles.cc}>Type: {product.Ccategory}</p>
          <p className={styles.c1}>{product.c1 ? product.c1 : ""}</p>
          <button className={styles.btn}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
