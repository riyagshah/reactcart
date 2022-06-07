import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Mens from "./Mens/Mens";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Faq from "./FAQ/Faq";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Job from "./Job/Job";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/FAQ" element={<Faq />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/*<Route path="/cart/:id" element={<Cart />}></Route>*/}
        <Route path="/jobs" element={<Job />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
