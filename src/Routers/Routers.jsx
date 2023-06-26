import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Menu from "../Menu";
import Order from "../Order";
import Aboutus from "../Aboutus";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers