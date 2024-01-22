import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import "./index.scss"
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Detail = () => {
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const getCourse = async ()=>{
        const resp = await axios(`http://localhost:3000/${id}`)
        setCourse(resp.data)
        setLoading(false)
    }

    useEffect(() => {
        getCourse()
    }, [])
    const { wishlist, addToWishlist, isInWishlist } = useContext(WishlistContext);
    const { basket, addToBasket, isInBasket, removeBasket, updateCount, total } =
      useContext(BasketContext);
  return (
   <>
   <div><Toaster/></div>
    <Helmet>
    <title>Detail</title>
  </Helmet>
  <section id='detail'>
    <div className="container">
      {loading?
      "loading..."
    :
    <div className="row">
      <div className="col-lg-6 col-md-12 col-12 left-side">
        <img src={course && course.image} alt="" />
      </div>
      <div className="col-lg-6 col-md-12 col-12 course">
        <div className="container">
          <h3>{course && course.title}</h3>
          <p>{course && course.desc}</p>
          <p>Author:{course && course.author}</p>
          <p>Author:{course && course.authorImage}</p>
          <p>Price: ${course && course.price}</p>
          <p>
                    <button onClick={() => addToWishlist(course)}>
                      <i
                        className={`${
                          isInWishlist(course)
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                        }`}
                      ></i>
                    </button>
                    <button onClick={()=>addToBasket(course)}>
                      <i className="fa-solid fa-basket-shopping"></i>
                    </button>
                    {/* <button><i className="fa-solid fa-heart"></i></button> */}
                  </p>
        </div>
      </div>
    </div>
    }
    </div>
  </section>
   </>
  )
}

export default Detail