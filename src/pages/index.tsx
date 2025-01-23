import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import DevOps from "@/components/sections/DevOps";
import Blog from "./blogs";
import Features from "@/components/sections/Features";
import BlogCard from "@/components/sections/BlogCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      {/* <HeroSection2 /> */}

      <HeroSection />
      <DevOps />
      <Features />
      {/* <Stepper /> */}
      <BlogCard />
    </Layout>
  );
}
