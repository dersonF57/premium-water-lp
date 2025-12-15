import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "./.components/about"; 
import Products from "./.components/Products";
import Footer from "./.components/footer"

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero-water.jpg"
          alt="Água mineral premium cristalina em garrafa de vidro"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center text-white">
          <h1 className="max-w-5xl text-5xl font-extralight tracking-widest md:text-7xl lg:text-8xl uppercase">
            Água Pura das Montanhas
          </h1>

          <p className="max-w-3xl text-lg font-light tracking-wide md:text-2xl">
            Proveniente de uma fonte artesiana protegida, com pureza natural e equilíbrio mineral perfeito.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-10 py-7 text-lg font-medium transition">
              Comprar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-medium backdrop-blur-sm transition">
              Saiba Mais
            </Button>
          </div>

          <p className="mt-16 text-sm uppercase tracking-widest opacity-70">
            Premium • Natural • Excepcional
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <About />

      {/* Products (com data-aos nos cards) */}
      <Products />
      <Footer/>
    </>
  );
}