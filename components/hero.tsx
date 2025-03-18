"use client";
import { useScroll, useTransform } from "motion/react";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const products = [
    {
      title: "Moonbeam",
      thumbnail:
        "/V5-002.webp",
    },
    {
      title: "Cursor",
      thumbnail:
        "/yordan-stoyanov-NKCxN-KJ4Lc-unsplash.jpg",
    },
    {
      title: "Rogue",
      thumbnail:
        "/maximalfocus-MHvVnKKloxk-unsplash.jpg",
    },
   
    {
      title: "Editorially",
      thumbnail:
        "/jelleke-vanooteghem-6NUlOHM40w8-unsplash.jpg",
    },
    {
      title: "Editrix AI",
      thumbnail:
        "/still-one.jpg",
    },
    {
      title: "Pixel Perfect",
      thumbnail:
        "/opt-lasers-7NvkRlTzLZE-unsplash.jpg",
    },
   
    {
      title: "Algochurn",
      thumbnail:
        "/maximalfocus-MHvVnKKloxk-unsplash.jpg",
    },
    {
      title: "Aceternity UI",
      thumbnail:
        "/jelleke-vanooteghem-6NUlOHM40w8-unsplash.jpg",
    },
    {
      title: "Tailwind Master Kit",
      thumbnail:
        "/yordan-stoyanov-NKCxN-KJ4Lc-unsplash.jpg",
    },
    {
      title: "SmartBridge",
      thumbnail:
        "/Generator-less-shadow.webp",
    },
    {
      title: "Renderwork Studio",
      thumbnail:
        "/maximalfocus-MHvVnKKloxk-unsplash.jpg",
    },
   
    {
      title: "Creme Digital",
      thumbnail:
        "/jelleke-vanooteghem-6NUlOHM40w8-unsplash.jpg",
    },
    {
      title: "Golden Bells Academy",
      thumbnail:
        "/yordan-stoyanov-NKCxN-KJ4Lc-unsplash.jpg",
    },
    {
      title: "Invoker Labs",
      thumbnail:
        "/maximalfocus-MHvVnKKloxk-unsplash.jpg",
    },
    {
      title: "E Free Invoice",
      thumbnail:
        "/jelleke-vanooteghem-6NUlOHM40w8-unsplash.jpg",
    },
  ];

  return (
    
    <>
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
    <HeroParallax products={products} />
    </div>
    
    <AppleCardsCarouselDemo/>
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />

    </div>
    </>

  );
};

export default Hero;
