import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import NewsAndEvents from './pages/NewsAndEvents';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import About from './pages/About'; 
import Team from './pages/Team';
import Gallery from './pages/Gallery';


import RegistrationPage from './pages/RegistrationPage'; // 1. Import your new page

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      
      <Header /> 
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news-events" element={<NewsAndEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          
          <Route path="/membership" element={<Membership />} />
          
          <Route path="/contact" element={<Contact />} />
          
          {/* 2. Add the registration route here */}
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;