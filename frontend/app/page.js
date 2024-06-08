"use client"

import Header from "@/components/Header";
import HeroSection from "@/containers/HeroSection";
import About from './../containers/About';
import Footer from './../components/Footer';
import Contact from './../components/Contact';

function LandingPage() {

    return (
        <>
            <Header />
            <HeroSection />
            <About />
            <Contact />
            <Footer />
        </>
    );
}
export default LandingPage;
