import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Menu from "../Menu";
import Order from "../Order";
import AboutUs from "../AboutUs";

export default function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App  />} />
        <Route path="/menu" element={<Menu  />} />
        <Route path="/order" element={<Order  />} />
        <Route path="/AboutUs" element={<AboutUs  />} />
      </Routes>
    </BrowserRouter>
  )
}