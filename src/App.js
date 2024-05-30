import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Magazine from './pages/Magazine/Magazine';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import EventDetails from './pages/EventDetails/EventDetails';
import MagazineDetails from './pages/MagazineDetails/MagazineDetails';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="magazine" element={<Magazine />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="magazines/:id" element={<MagazineDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
