"use client"
import { AddressBook, ClipboardText, House, UserRectangle } from "@phosphor-icons/react"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'


const Menu = () =>{
    const segment = useSelectedLayoutSegment()
    return(
        <>
         <Navbar className="bg-transparent text-color-winter max-w-full p-4">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl text-color-winter md:text-3xl font-semibold dark:text-white">Owen Rudiyanto So</span>
      </NavbarBrand>
      <NavbarToggle className="text-color-winterGradient focus:ring-color-winterGradient hover:bg-gradient-to-br hover:from-color-secondary hover:to-color-winterGradient hover:text-color-winter" />
      <NavbarCollapse style={{textAlign:"right"}} >
        
        <NavbarLink as={Link}  className={segment == null ? "text-color-winterGradient border-0":"text-color-acccent hover:text-color-winterGradient  border-0"} href="/">
        <div dir="rtl" className="px-1.5">
        <House size={24} />
        </div>   
          Home
        </NavbarLink>
        <NavbarLink as={Link} className={segment == 'about' ? "text-color-winterGradient  border-0":"text-color-acccent hover:text-color-winterGradient  border-0 "} href="/about">
        <div dir="rtl"  className="px-1.5">
        <UserRectangle size={24} />
        </div>
          About
        </NavbarLink>
        <NavbarLink as={Link} className={segment == 'portfolio' ? "text-color-winterGradient  border-0":"text-color-acccent hover:text-color-winterGradient  border-0"}  href="/portfolio"><div dir="rtl"  className="px-1.5"><ClipboardText size={24} /></div>
        Portofolio</NavbarLink>
        <NavbarLink  as={Link} className={segment == 'contact' ? "text-color-winterGradient  border-0":"text-color-acccent hover:text-color-winterGradient  border-0"} href="/contact"><div dir="rtl"  className="px-1.5"><AddressBook size={24} /></div>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
        </>
    )
}

export default Menu