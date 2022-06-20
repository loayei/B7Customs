import React from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/contactSection/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import ServicesSection from "../components/services/ServicesSection";
import TeamSection from "../components/team/TeamSection";
import Gallery from "../components/Gallery";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Gallery />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
