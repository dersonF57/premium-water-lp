"use client";

import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export function AosInit() {

   useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });

    // opcional: refresh se components forem adicionados dinamicamente depois
    // AOS.refresh();
  }, []);

  return null;
}