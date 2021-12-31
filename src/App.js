import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from './Components/AboutUs';
import Products from './Components/Products/Products';
import ProductForm from './Components/Products/ProductForm';

function App() {
  return (
    <Router>

   <div>
     <NavBar/>
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path="/aboutus" element={<AboutUs/>}/>
     <Route path="/products/addnewproduct" element={<ProductForm/>}/>
     <Route path="/products/edit/:id" element={<ProductForm/>}/>
     
     </Routes>
   </div>
   
    </Router>
  );
}

export default App;
