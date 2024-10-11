import React from "react";
import TopBar from './Componentes/TopBar.jsx';
import Hero from './Componentes/Hero.jsx';
import Productos from './Componentes/Productos.jsx';
import ContactForm from './Componentes/contactForm.jsx';
import CyclingCommunity from './Componentes/cyclingCommunity.jsx';
import CommunityHighlights from './Componentes/communityHighlights.jsx';
import "./style.css";

export default function App() {
  return (
    <div>
      <TopBar/>
      <Hero/>
			<Productos/>
      <ContactForm/>
      <CyclingCommunity/>
      <CommunityHighlights/>
    </div>
  );
}
