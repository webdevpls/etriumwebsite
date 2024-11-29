import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar.tsx'
import Home from './components/home/home.tsx'
import About from './components/about/about.tsx'
import Whyus from './components/whyus/whyus.tsx'
import Services from './components/services/services.tsx'
import Planos from './components/planos/planos.tsx'
import Contact from './components/contact/contat.tsx'
import Footer from './components/footer/footer.tsx'
import PoliticaPrivacidade from './components/termos/politica.tsx' // Página de Política de Privacidade

function App() {
  return (
    <>
      <Navbar />
      {/* Conteúdo da Página Principal */}
      <Home />
      <About />
      <Whyus />
      <Services />
      <Planos />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Página Principal */}
        <Route path="/" element={<App />} />
        {/* Rota para a Política de Privacidade */}
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
