import { Helmet } from "react-helmet-async"
import "./index.scss"
import Header from "../../components/Header"
import PopularCourses from "../../components/PopularCourses"
import { Toaster } from "react-hot-toast"
import Register from "../../components/Register"
import OurServices from "../../components/OurServices"

const Home = () => {
  return (
    <>
    <div><Toaster/></div>
    <Helmet>
    <title>Home</title>
  </Helmet>
  <Header/>
  <PopularCourses/>
  <Register/>
  <OurServices/>
  {/* <UpcomingEvents/> */}
  </>
  )
}

export default Home