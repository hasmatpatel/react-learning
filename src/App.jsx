import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "styled-components";

import Header from './App/components/layout/header/Header';
import Footer from './App/components/layout/footer/Footer';
import Home from './App/pages/Home';
import About from './App/pages/About';
import HowItWorks from './App/pages/HowItWorks';
import ContactUs from './App/pages/ContactUs';
import NoPage from "./App/pages/NoPage";
import { GlobalStyle } from "./App/components/elements/GlobalStyle";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function App() {
  const theme = {
    main: {
      bgColor: "#fafafa",
      bgDarkColor: "#fafafa",
      textColor: "#222",
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="HowItWorks" element={<HowItWorks />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
