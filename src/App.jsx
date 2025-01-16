
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";
import IPRServices from "./pages/services/IPRServices";
import ProductPrototype from "./pages/services/ProductPrototype";
import PrintingDesign from "./pages/services/PrintingDesign";
import HardwareDevelopment from "./pages/services/HardwareDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import ComponentSales from "./pages/services/ComponentSales";
import EngineeringProjects from "./pages/services/EngineeringProjects";
import Footer from "./components/Footer";
import RequestQuote from './pages/RequestQuote';

function App() {


  return (
    <div>
      {/* this is a comment */}
     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ipr-services" element={<IPRServices />} />
        <Route path="/product-prototype" element={<ProductPrototype />} />
        <Route path="/3d-printing" element={<PrintingDesign />} />
        <Route path="/services/hardware-development" element={<HardwareDevelopment />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/components-sales" element={<ComponentSales />} />
        <Route path="/services/engineering-projects" element={<EngineeringProjects />} />
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
      <Footer />
    </ div>
  )
}

export default App
