import { NavLink } from "react-router-dom"
import "./index.scss"
import { useContext, useState } from "react"
import { WishlistContext } from "../../context/WishlistContext"
import { BasketContext } from "../../context/BasketContext"
import { current } from "@reduxjs/toolkit"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const { wishlist, addToWishlist, isInWishlist } = useContext(WishlistContext);
    const { basket, addToBasket, isInBasket, removeBasket, updateCount, total } =
    useContext(BasketContext);
  return (
    <nav>
        <div id="desktop-nav">
           <div className="logo">
           <NavLink to={"/"} className={"link"}>
           <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h2>COURSE</h2>
           </NavLink>
            </div> 
            <div className="pages">
                <ul>
                    <li><NavLink className={"link"} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={"link"} to={"/AddPage"}>AddPage</NavLink></li>
                    <li><NavLink className={"link"} to={"/Basket"}>Basket{basket.length > 0 && `(${basket.reduce((acc,current)=>acc+current.count,0)})`}</NavLink></li>
                    <li><NavLink className={"link"} to={"/Wishlist"}>Wishlist{wishlist.length > 0 ? "(" + wishlist.length + ")":"" }</NavLink></li>
                </ul>
            </div>
            <div className="contact">
                <p>+43 4566 7788 2457
</p>
            </div>
        </div>
        <div id="mobile-nav">
       <div className="top-nav">
       <div className="logo">
           <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h2>COURSE</h2>
            </div> 
            <div className="burger-icon">
            <i onClick={()=>setIsNavOpen(!isNavOpen)} className="fa-solid fa-bars"></i>
            </div>
       </div>
            <div className={`pages ${isNavOpen ? "active" : ""}`}>
                <ul>
                    <li><NavLink className={"link"} to={"/"}>Home</NavLink></li>
                    <li><NavLink className={"link"} to={"/AddPage"}>AddPage</NavLink></li>
                    <li><NavLink className={"link"} to={"/Basket"}>Basket{basket.length > 0 && `(${basket.reduce((acc,current)=>acc+current.count,0)})`}</NavLink></li>
                    <li><NavLink className={"link"} to={"/Wishlist"}>Wishlist{wishlist.length > 0 ? "(" + wishlist.length + ")":"" }</NavLink></li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar