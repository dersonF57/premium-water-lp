import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "./.components/about"; 
import Products from "./.components/Products";
import Hero from "./.components/hero";
import Footer from "./.components/footer";

export default function Home() {
 return (
  <>
    <Hero />
    <About />
    <Products />
    <Footer />
  </>
);
}