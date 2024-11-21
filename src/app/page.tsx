import Aboutbottomimage from "@/components/about-sec/about-bottom-image/Aboutbottomimage";
import About from "@/components/about-sec/About";
import Header from "@/components/header/Header";
import Herosection from "@/components/herosection/Herosection";
import Portfolio from "@/components/portfolio/Portfolio";
import React from "react"
import Services from "@/components/service-sec/services";
import Testimonial from "@/components/testimonials/Testimonial";
import Contactus from "@/components/Contactus/Contactus";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
    <Header/>
    <Herosection/>
    <About/>
    <Aboutbottomimage/>
    <Portfolio/>
    <Services/>
    <Testimonial/>
    <Contactus/>
    <Footer/>

    </div>
  );
}
