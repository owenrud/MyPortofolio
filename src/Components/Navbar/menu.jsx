"use client"

import Link from "next/link"
import { useState } from "react";
import { useSelectedLayoutSegment } from 'next/navigation'


const Menu = () =>{
    const segment = useSelectedLayoutSegment()
     const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  const [active, setActive] = useState("Home");
    return(
       <nav className="sticky top-4 z-50 backdrop-blur-xl bg-color-secondary/50 text-color-accent md:text-lg p-1 mt-12 mx-auto md:mt-24 border border-color-accent2 rounded-full font-bold max-w-xs md:max-w-xl shadow-lg">
  <div className="flex relative">
    {/* Sliding background */}
    <div
      className="absolute top-1 bottom-1 bg-color-secondary rounded-full transition-transform duration-300 ease-in-out ml-1"
      style={{
        width: `${100 / navItems.length -0.75}%`,
        transform: `translateX(${navItems.findIndex((item) => item.name === active) * 100}%)`,
      }}
    />
    {/* Nav Buttons */}
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setActive(item.name)}
        className={`relative z-10 w-full text-center px-3.5 py-2 rounded-full transition-colors duration-300 ${
          active === item.name ? "text-color-primary" : "hover:text-color-accent2 hover:scale-105 transition-all duration-150 ease-out"

        }`}
      >
        {item.name}
      </Link>
    ))}
  </div>
</nav>

    )
}

export default Menu