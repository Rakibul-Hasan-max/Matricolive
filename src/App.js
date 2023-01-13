import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import About from "./Pages/About/About";
import Footer from "./Pages/Components/Footer/Footer";
import Navigation from "./Pages/Components/Navigation/Navigation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop smooth height="20" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
