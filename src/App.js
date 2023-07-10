import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import OrderList from './pages/Order';
import Customers from './pages/Customers';
import ColorList from './pages/Colorlist';
import ProductCatList from './pages/Product-cat';
import ProductList from './pages/ProductList';
import BrandList from './pages/BrandList';
import BlogCatlist from './pages/Blogcatlist';
import Forgotpassword from './pages/Forgotpassword';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}> 
          <Route index element ={<Dashboard />}/>
          <Route path='enquiries' element ={<Enquiries />}/>
          <Route path='blog-list' element ={<Bloglist />}/>
          <Route path='blog-category-list' element ={<BlogCatlist />}/>
          <Route path='orders' element ={<OrderList />}/>
          <Route path='customers' element ={<Customers />}/>
          <Route path='color-list' element ={<ColorList />}/>
          <Route path='product-cat' element ={<ProductCatList />}/>
          <Route path='product-list' element ={<ProductList />}/>
          <Route path='brand-list' element ={<BrandList />}/>
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
