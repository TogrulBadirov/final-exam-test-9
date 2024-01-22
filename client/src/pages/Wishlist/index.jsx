import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./index.scss";
const Wishlist = () => {


  const { wishlist, addToWishlist, isInWishlist } = useContext(WishlistContext);
  const { basket, addToBasket, isInBasket, removeBasket, updateCount, total } =
    useContext(BasketContext);
  return (
    <>
    <div><Toaster/></div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="Wishlist">
      <div className="container">
        <div className="sectionHeader">
          <div className="yellow-bar"></div>
          <h2>Wishlist</h2>
        </div>

        <div className="courses">
          <div className="row">
          {wishlist.length < 1 ? "wishlist is empty!" : ""}
            {wishlist &&
              wishlist.map((item) => (
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
                    <button onClick={()=>addToBasket(item)}>
                      <i className="fa-solid fa-basket-shopping"></i>
                    </button>
                    {/* <button><i className="fa-solid fa-heart"></i></button> */}
                  </p>
                  <p><button onClick={() => addToWishlist(item)}>Remove From Wishlist</button></p>
                  <div className="author">
                    <div className="image">
                      <img src={item.authorImage} alt="" />
                    </div>
                    <p>
                      {item.author}, <span>Author</span>
                    </p>
                    <div className="price">
                      <span>${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Wishlist;
