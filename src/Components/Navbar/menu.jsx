"use client"
import { AddressBook, ClipboardText, House, UserRectangle } from "@phosphor-icons/react"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'


const Menu = () =>{
    const segment = useSelectedLayoutSegment()
    return(
        <>
   
        <nav className="text-color-accent md:space-x-8 md:text-lg p-4 mt-12 mx-auto md:mt-24 border border-color-accent rounded-full font-bold max-w-sm md:max-w-lg">
            <div className="flex justify-evenly">
        <Link className="hover:text-color-primary hover:bg-color-accent rounded-full px-3.5 py-2" href="/">Home</Link>
        <Link className={segment == 'about' ? "bg-color-accent text-color-primary rounded-full px-3.5 py-2":"hover:text-color-primary hover:bg-color-accent rounded-full px-3.5 py-2"} href="#about">About</Link>
        <Link className={segment == 'portfolio' ? "bg-color-accent text-color-primary rounded-full px-3.5 py-2":"hover:text-color-primary hover:bg-color-accent rounded-full px-3.5 py-2"} href="#portfolio">Portfolio</Link>
                </div> 
        
        </nav>
       
       
        </>
    )
}

export default Menu