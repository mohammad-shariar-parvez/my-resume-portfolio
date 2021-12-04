import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Mailer from './Mailer/Mailer';
import Footer from './Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './AboutMe/AboutMe';
import ProductDetails from './ProductDetails/ProductDetails';
import Blogs from './Blogs/Blogs';
import Header from './Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mailer" element={<Mailer />} />
          <Route path="/aboutMe/*" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
        </Routes>


        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
