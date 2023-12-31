import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./JsonDisplay.module.css";

//TASK 2 --> Page for displaying the output of the file contents

export default function OutputFile() {
  const location = useLocation();
  const fetchedData = location.state.data;
  const select = location.state.select;
  const [data, setData] = useState(null);

  //function for sorting data by popularity
  const desc =
    data && data.products
      ? Object.keys(data.products).sort((a, b) => {
          const dataA = parseFloat(data.products[a].popularity, 10);
          const dataB = parseFloat(data.products[b].popularity, 10);
          return dataA > dataB ? -1 : 1;
        })
      : [];

  useEffect(() => {
    if (fetchedData) {
      try {
        const parsedData = JSON.parse(fetchedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    }
  }, [fetchedData]);

  return (
    <div>
      <div>
        <div className={classes.flex}>
          <div className={classes.title}>
            {select.includes("Title") ? <div>Title</div> : <></>}
          </div>
          <div className={classes.title}>
            {select.includes("Subcategory") ? <div>Subcategory</div> : <></>}
          </div>
          <div className={classes.title}>
            {select.includes("Price") ? <div>Price</div> : <></>}
          </div>
          <div className={classes.title}>
            {select.includes("Popularity") ? <div>Popularity</div> : <></>}
          </div>
        </div>
      </div>
      {desc.map((productId) => {
        const product = data.products[productId];

        return (
          <div className={classes.flex} key={productId}>
            {select.includes("Title") ? (
              <div className={classes.col}>{product.title}</div>
            ) : (
              <></>
            )}
            {select.includes("Subcategory") ? (
              <div className={classes.col}>{product.subcategory}</div>
            ) : (
              <></>
            )}
            {select.includes("Price") ? (
              <div className={classes.col}>{product.price}</div>
            ) : (
              <></>
            )}
            {select.includes("Popularity") ? (
              <div className={classes.col}>{product.popularity}</div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}
