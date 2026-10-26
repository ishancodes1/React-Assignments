import React, { useEffect, useState } from "react";

const Task26Oct = () => {
  const categories = ["beauty", "fragrances", "furniture", "groceries", "all"];
  const [allProducts, setAllProducts] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("all");
  const [shownProducts, setShownProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setShownProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (chosenCategory == "all") {
      setShownProducts(allProducts);
      return;
    }
    setShownProducts(
      allProducts.filter((product) => product.category == chosenCategory),
    );
  }, [chosenCategory]);

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        {categories.map((category) => (
          <div key={category} style={{ display: "inline" }}>
            <button
              style={{
                margin: 5,
                backgroundColor: "red",
                color: "white",
                padding: 7,
                border: "3px solid skyblue",
                borderRadius: 5,
              }}
              onClick={() => setChosenCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
        }}
      >
        {shownProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "skyblue",
              border: "3px solid red",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <img src={product.images[0]} style={{ width: 200, height: 200 }} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task26Oct;
