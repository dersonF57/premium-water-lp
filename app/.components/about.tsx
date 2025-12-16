import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 bg-gray-50 md:py-32" id="about">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grid layout: Text on one side, Image on the other */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extralight tracking-wider uppercase md:text-5xl">
              About Our Water
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              Sourced from a protected artesian aquifer deep in the pristine mountains of Norway-inspired landscapes, our water is naturally filtered through layers of ancient rock, emerging with exceptional purity and a balanced mineral profile.
            </p>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              Committed to sustainability, we use recyclable glass bottles designed for elegance and environmental responsibility. Every sip delivers the essence of untouched nature, bottled at the source for unparalleled freshness.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Natural artesian source
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Low TDS for crisp taste
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Eco-friendly packaging
              </li>
            </ul>
          </div>

          {/* Image - Premium water source or bottle */}
          <div className="relative h-96 md:h-[600px]"> {/* Explicit heights to avoid height 0 warning */}
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/about-water.jpg`}
              alt="Pristine mountain water source"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" // Fixes missing sizes warning - adjusts based on screen
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}