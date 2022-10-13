import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './App/components/layout/header/Header';
import Home from './App/pages/Home';
import About from './App/pages/About';
import HowItWorks from './App/pages/HowItWorks';
import ContactUs from './App/pages/ContactUs';
import NoPage from "./App/pages/NoPage";

function MainPage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="HowItWorks" element={<HowItWorks />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
