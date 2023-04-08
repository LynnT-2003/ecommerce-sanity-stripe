import React from "react";

const Home = () => {
  return (
    <>
      Hero Banner
      <div>
        <h2>Best Selling Headphone</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>{["Product_1", "Product_2"].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
