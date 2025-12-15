
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Products() {
  return (
    <section className="py-24 bg-white md:py-32" id="products">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extralight tracking-wider uppercase md:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium artesian water, available in still and sparkling varieties, bottled in elegant glass for ultimate purity and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Product Card 1: Still Water */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/product-still.jpg" // Place image in public/product-still.jpg (e.g., VOSS still bottle)
                alt="Premium Still Water"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-light uppercase">Still Water</h3>
              <p className="text-gray-600 font-light">
                Crisp, pure, and naturally balanced. Available in 375ml and 800ml glass bottles.
              </p>
              <p className="text-xl font-medium">$4.99 - $7.99</p>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Buy Now
              </Button>
            </div>
          </div>

          {/* Product Card 2: Sparkling Water */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/product-sparkling.jpg" // Place image in public/product-sparkling.jpg (e.g., VOSS sparkling bottle)
                alt="Premium Sparkling Water"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-light uppercase">Sparkling Water</h3>
              <p className="text-gray-600 font-light">
                Effervescent and refreshing with fine bubbles. Available in 375ml and 800ml glass bottles.
              </p>
              <p className="text-xl font-medium">$5.49 - $8.49</p>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Buy Now
              </Button>
            </div>
          </div>

          {/* Product Card 3: Variety Pack */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/product-variety.jpg" // Place image in public/product-variety.jpg (e.g., assortment of bottles)
                alt="Variety Pack"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-light uppercase">Variety Pack</h3>
              <p className="text-gray-600 font-light">
                A mix of still and sparkling in 375ml bottles. Perfect for trying our premium range.
              </p>
              <p className="text-xl font-medium">$24.99 (6-pack)</p>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}