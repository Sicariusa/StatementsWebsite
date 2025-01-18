import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Loader } from 'lucide-react';


// Lazy load pages
const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })));
const Services = lazy(() => import('@/pages/Services').then(module => ({ default: module.Services })));
const Clients = lazy(() => import('@/pages/Clients').then(module => ({ default: module.Clients })));
const About = lazy(() => import('@/pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('@/pages/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <Navbar />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[80vh]">
            <Loader className="w-8 h-8 text-amber-500" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;