import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Features from "@/components/sections/Features";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import DevOps from "@/components/sections/DevOps";
import Container from "./Container";
import Stepper from "./sections/Stepper";
import Blog from "./sections/BlogCard";
import Footer from "./Footer";
import HeroSection from "./sections/HeroSection";
import HeroSection2 from "./sections/HeroSection2";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
