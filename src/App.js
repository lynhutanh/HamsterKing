import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Component/Interface_component/Header_component/Header.component';
import HomePage from './Component/HomePage_component/HomePage.component';
import Footer from './Component/Interface_component/Footer_component/Footer.component';
import ContactPage from './Component/ContactPage_component/ContactPage.component';
import ProductPage from './Component/ProductPage_component/ProductPage.component';
import AboutPage from './Component/AboutPage_component/AboutPage.component';
import BlogPage from './Component/BlogPage_component/BlogPage.component';
import LoginPage from './Component/LoginPage_component/LoginPage.component';
import CartPage from './Component/CartPage_component/CartPage.component';
import RegistrationPage from './Component/RegistrationPage_component/RegistrationPage.component';
import HamsterPage from './Component/ProductPage_component/ProductHamster_component/HamsterPage.component';
import CagePage from './Component/ProductPage_component/ProductCage_component/HamsterCage.component';
import FoodPage from './Component/ProductPage_component/ProductFood_component/HamsterFood.component';
import ToyPage from './Component/ProductPage_component/ProductToy_component/HamsterToy.component';
import { CartProvider } from './Component/CartContext.component/CartContext.component';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/homePage" />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/hamsterPage" element={<HamsterPage />} />
          <Route path="/cagePage" element={<CagePage />} />
          <Route path="/toyPage" element={<ToyPage />} />
          <Route path="/foodPage" element={<FoodPage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/homePage" />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
