import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Features from "@/components/sections/Features";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import DevOps from "@/components/sections/DevOps";
import Container from "./Container";
import Stepper from "./sections/Stepper";
import Blog from "./sections/Blog";
import Footer from "./Footer";
import HeroSection from "./sections/HeroSection";

export default function Layout() {
  return (
    <div>
      <Cursor />
      <Header />
      <Container>
        <HeroSection />
        <DevOps />
        <Features />
        <Stepper />
        <Blog />
      </Container>
      <Footer />
    </div>
  );
}
