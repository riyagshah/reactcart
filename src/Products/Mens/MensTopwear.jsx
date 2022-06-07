import React, { useEffect, useState } from "react";
import styles from "./Menstopwear.module.css";
import { Link } from "react-router-dom";

const MensTopwear = () => {

    const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(" http://localhost:3010/menstopwear")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
     products.map((el, index) => (
        <div className={styles.productbox} key={index}>
        <Link to={`/products/${el.id}`}>  <img className={styles.img}  src={el.img_1}/>
            <p className={styles.title}>{el.title}</p>
            <p className={styles.desc}>{el.description}</p>
            <div className={styles.pricediv}>
                <p className={styles.price}>{el.price}$</p>
                <s className={styles.sprice}>{el.strikedoffprice}$</s>
                <p className={styles.discount}>{el.discount}% off</p>
            </div>
            </Link>
        </div>
    ))
  );
};

export default MensTopwear;
