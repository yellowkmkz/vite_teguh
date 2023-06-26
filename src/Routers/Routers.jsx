import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Menu from "../Menu";
import Order from "../Order";
import AboutUs from "../Aboutus";

export default function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App  />} />
        <Route path="/menu" element={<Menu  />} />
        <Route path="/order" element={<Order  />} />
        <Route path="/aboutus" element={<AboutUs  />} />
      </Routes>
    </BrowserRouter>
  )
}