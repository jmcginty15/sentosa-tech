import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import ConsultingServices from './components/consulting-services/ConsultingServices';
import About from './components/about/About';
import Reports from './components/reports/Reports';
import Publishing from './components/publishing/Publishing';
import ProductOfferings from './components/product-offerings/ProductOfferings';
import TechnologyPartners from './components/technology-partners/TechnologyPartners';
import OntologyWorks from './components/ontology-works/OntologyWorks';
import Jobs from './components/jobs/Jobs';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/consulting-services" element={<ConsultingServices />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/publishing" element={<Publishing />} />
            <Route exact path="/product-offerings" element={<ProductOfferings />} />
            <Route exact path="/technology-partners" element={<TechnologyPartners />} />
            <Route exact path="/ontology-works" element={<OntologyWorks />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
