import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Analytics } from "@vercel/analytics/react"
import './styles/premium.css';
import './styles/statements.css';
import './styles/modern.css';
import './styles/cyberpunk.css';
import { ThemeSwitcher } from './components/ThemeSwitcher';


export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
     
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}