"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Substitui os "cards" por um carrossel simples, sem bibliotecas externas.
 * - Autoplay (pausa ao passar o mouse / tocar)
 * - Inicia autoplay somente quando o carrossel está visível (IntersectionObserver)
 * - Suporte à navegação por botões, dots, teclado e swipe/touch
 * - Leve e acessível
 *
 * Coloque as imagens em /public (product-still.jpg, product-sparkling.jpg, product-variety.jpg)
 */

const slides = [
  {
    id: 1,
    title: "Still Water",
    src: "/product-still.jpg",
    alt: "Premium Still Water",
  },
  {
    id: 2,
    title: "Sparkling Water",
    src: "/product-sparkling.jpg",
    alt: "Premium Sparkling Water",
  },
  {
    id: 3,
    title: "Variety Pack",
    src: "/product-variety.png",
    alt: "Variety Pack",
  },
];

export default function Products() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Drag/swipe state
  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const SLIDE_INTERVAL = 4000;
  const SWIPE_THRESHOLD = 50; // px

  // IntersectionObserver: só ativa autoplay quando visível
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = containerRef.current;
    if (!el) {
      setInView(true); // fallback
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.4 } // quando 40% visível
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused || !inView) return;

    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(t);
  }, [isPaused, inView]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Pointer / touch handlers for swipe
  const onPointerDown = (e: React.PointerEvent) => {
    const x = e.clientX;
    dragStartX.current = x;
    dragCurrentX.current = x;
    isDragging.current = true;
    // capture pointer to keep receiving moves
    (e.target as Element).setPointerCapture(e.pointerId);
    setIsPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || dragStartX.current == null) return;
    dragCurrentX.current = e.clientX;
    const dx = dragCurrentX.current - dragStartX.current;
    if (trackRef.current) {
      // translateX for visual drag
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(${ -index * 100 }% + ${dx}px))`;
    }
  };

  const endDrag = (e?: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = (dragCurrentX.current ?? 0) - (dragStartX.current ?? 0);
    isDragging.current = false;
    dragStartX.current = null;
    dragCurrentX.current = null;

    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = "";
    }

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }

    setTimeout(() => setIsPaused(false), 200); // pequeno delay antes de reativar autoplay
  };

  return (
    <section
      ref={containerRef}
      id="products"
      className="py-12 md:py-20 bg-white"
      aria-label="Produtos"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extralight uppercase md:text-4xl">Our Products</h2>
            <p className="text-sm text-gray-600">Passe para ver mais — ou use os controles</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Slide anterior"
              onClick={() => { prev(); setIsPaused(true); setTimeout(() => setIsPaused(false), 2000); }}
              className="p-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            >
              ◀
            </button>
            <button
              aria-label="Próximo slide"
              onClick={() => { next(); setIsPaused(true); setTimeout(() => setIsPaused(false), 2000); }}
              className="p-2 rounded bg-gray-100 hover:bg-gray-200"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div
          className="relative overflow-hidden rounded-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* track */}
          <div
            ref={trackRef}
            className="flex w-full"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={(e) => endDrag(e)}
            onPointerCancel={(e) => endDrag(e)}
            onPointerLeave={(e) => {
              // se o usuário soltar fora do elemento, finalize
              if (isDragging.current) endDrag(e);
            }}
            role="list"
            style={{
              transform: `translateX(${ -index * 100 }%)`,
              transition: "transform 600ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id}
                role="listitem"
                aria-hidden={i !== index}
                className="min-w-full flex-shrink-0 relative bg-gray-50"
              >
                <div className="relative h-80 md:h-[520px] w-full">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>

                {/* overlay content */}
                <div className="absolute left-6 bottom-6 bg-black/50 text-white rounded-md px-4 py-3">
                  <h3 className="text-xl font-medium">{s.title}</h3>
                  <div className="mt-2 flex gap-3">
                    <Button size="sm" className="bg-white text-black hover:bg-gray-100 px-4 py-2">Comprar</Button>
                    <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/10 px-4 py-2">Saiba mais</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2 w-8 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}
