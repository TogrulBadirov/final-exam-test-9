import { Helmet } from "react-helmet-async";
import "./index.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
import { Toaster } from "react-hot-toast";
const Basket = () => {


  const { wishlist, addToWishlist, isInWishlist } = useContext(WishlistContext);
  const { basket, addToBasket, isInBasket, removeBasket, updateCount, total } =
    useContext(BasketContext);
  return (
    <>
    <div><Toaster/></div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="Basket">
      <div className="container">
        <div className="sectionHeader">
          <div className="yellow-bar"></div>
          <h2>Basket</h2>
        </div>

        <div className="courses">
          <div className="row">
            {basket.length < 1 ? "basket is empty!" : ""}
            {basket &&
              basket.map((item) => (
                <div key={item._id} className="col-lg-4 col-md-6 col-12 course">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <Link className="link" to={`/Detail/${item._id}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.desc}</p>
                  <p>
                    <button onClick={() => addToWishlist(item)}>
                      <i
                        className={`${
                          isInWishlist(item)
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                        }`}
                      ></i>
                    </button>
                    {/* <button><i className="fa-solid fa-heart"></i></button> */}
                  </p>
                  <h5>Count: <button onClick={()=>updateCount(item,-1)}>-</button> {item.count} <button onClick={()=>updateCount(item,1)}>+</button></h5>
                  <h5>Price: ${item.price}</h5>
                  <h5>Product Total: ${item.count * item.price}</h5>
                  <p><button onClick={() => removeBasket(item)}>Remove From Basket</button></p>
                  <div className="author">
                    <div className="image">
                      <img src={item.authorImage} alt="" />
                    </div>
                    <p>
                      {item.author}, <span>Author</span>
                    </p>
                    <div className="price">
                     
                    </div>
                  </div>
                </div>
              ))}
              <h3>Basket Total: ${total}</h3>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Basket;
