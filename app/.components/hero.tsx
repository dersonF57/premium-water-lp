import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen Premium Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image - Premium luxury water bottle (VOSS style) */}
        <Image
          src="/hero-water.jpg" 
          alt="Premium artesian water in elegant glass bottles"
          fill
          priority
          className="object-cover brightness-[0.65]" // Subtle darkening for text contrast
        />

        {/* Dark overlay for premium luxury feel */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center text-white">
          {/* Main Headline - Elegant and large */}
          <h1 className="max-w-5xl text-5xl font-extralight tracking-widest md:text-7xl lg:text-8xl uppercase">
            Pure Mountain Water
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl text-lg font-light tracking-wide md:text-2xl">
            Sourced from a protected artesian aquifer, with natural purity and perfect mineral balance.
          </p>

          {/* CTA Buttons with shadcn */}
          <div className="flex flex-col gap-6 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-10 py-7 text-lg font-medium transition"
            >
              Buy Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink text-black hover:bg-white/10 px-10 py-7 text-lg font-medium backdrop-blur-sm transition"
            >
              Learn More
            </Button>
          </div>

          {/* Subtle tagline */}
          <p className="mt-16 text-sm uppercase tracking-widest opacity-70">
            Premium • Natural • Exceptional
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
}