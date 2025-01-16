
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
import Copyright from './pages/services/IPRServies/Copyright';
import Patent from './pages/services/IPRServies/Patent';
import Treademark from './pages/services/IPRServies/Treademark';
import DesignRights from './pages/services/IPRServies/DesignRights';
import DatabaseRights from './pages/services/IPRServies/DatabaseRights';
import UtilityModelDesign from './pages/services/IPRServies/UtilityModelDesign';
import GeographicalIndecation from './pages/services/IPRServies/GeographicalIndecation';
import TradeSecretes from './pages/services/IPRServies/TradeSecretes';


function App() {


  return (
    <div>
      
     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ipr-services" element={<IPRServices />} />
        <Route path="/product-prototype" element={<ProductPrototype />} />
        <Route path="/3d-printing" element={<PrintingDesign />} />
        <Route path="/hardware-development" element={<HardwareDevelopment />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/components-sales" element={<ComponentSales />} />
        <Route path="/engineering-projects" element={<EngineeringProjects />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/patent" element={<Patent />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/treademark" element={<Treademark />} />
        <Route path="/design-rights" element={<DesignRights />} />
        <Route path="/utility-model-design" element={<UtilityModelDesign />} />
        <Route path="/geographical-indecation" element={<GeographicalIndecation />} />
        <Route path="/trade-secretes" element={<TradeSecretes />} />
        <Route path="/database-rights" element={<DatabaseRights />} />
      </Routes>
      <Footer />
    </ div>
  )
}

export default App
