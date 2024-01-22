import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";
import Wishlist from "./pages/Wishlist";
import NoPage from "./pages/NoPage";
import MainLayout from "./layout/MainLayout";

function App() {

  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/AddPage" element={<AddPage />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
