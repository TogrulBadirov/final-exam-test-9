import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";

const PopularCourses = () => {
  const [courses, setCourses] = useState(null);
  const getAllCourses = async () => {
    const resp = await axios("http://localhost:3000/");
    setCourses(resp.data);
  };
  useEffect(() => {
    getAllCourses();
  }, []);

  const { wishlist, addToWishlist, isInWishlist } = useContext(WishlistContext);
  const { basket, addToBasket, isInBasket, removeBasket, updateCount, total } =
    useContext(BasketContext);
  return (
    <section id="PopularCourses">
      <div className="container">
        <div className="sectionHeader">
          <div className="yellow-bar"></div>
          <h2>Popular Courses</h2>
        </div>

        <div className="courses">
          <div className="row">
            {courses &&
              courses.map((item) => (
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
  );
};

export default PopularCourses;
