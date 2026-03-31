import "./tailwind.init.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Offer from "./pages/Offer";
import Services from "./pages/Services";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
