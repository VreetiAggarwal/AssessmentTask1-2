import { useEffect, useState } from "react";
import classes from "./JsonDisplay.module.css";

//TASK 1 ---> Fetch Json from URL and Displaying it in Browser.
//Opens with /display

export default function Display() {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);

  //function to sort data acc to popularity
  const desc = products.sort((a, b) => {
    const dataA = parseFloat(a.popularity, 10);
    const dataB = parseFloat(b.popularity, 10);
    return dataA > dataB ? -1 : 1;
  });

  //using Fetch API and Map data structure
  useEffect(() => {
    (async () => {
      const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";
      const response = await fetch(url);
      try {
        const parsed = await response.json();
        setData(parsed);
        if (parsed.products) {
          setProducts(Object.values(parsed.products));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className={classes.table}>
      <div className={classes.flex}>
        <div className={classes.title}>Title</div>
        <div className={classes.title}>Subcategory</div>
        <div className={classes.title}>Price</div>
        <div className={classes.title}>Popularity</div>
      </div>
      <div>
        {products.map((product, index) => (
          <div className={classes.flex}>
            <div className={classes.col} key={index}>
              {product.title}
            </div>
            <div className={classes.col} key={index}>
              {product.subcategory}
            </div>
            <div className={classes.col} key={index}>
              {product.price}
            </div>
            <div className={classes.col} key={index}>
              {product.popularity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
