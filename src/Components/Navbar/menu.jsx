"use client"
import { AddressBook, ClipboardText, House, UserRectangle } from "@phosphor-icons/react"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation'


const Menu = () =>{
    const segment = useSelectedLayoutSegment()
    return(
        <>
         <Navbar className="bg-color-primary text-color-accent border border-color-gray shadow-xl max-w-full p-4" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl md:text-3xl font-semibold dark:text-white">Owen Rudiyanto So</span>
      </NavbarBrand>
      <NavbarToggle className="text-color-accent focus:ring-color-accent hover:bg-color-accent hover:text-color-winter" />
      <NavbarCollapse >
        
        <NavbarLink as={Link} className={segment == null ? "text-color-secondary":"text-color-acccent hover:text-color-secondary"} href="/">
        <div className="px-1.5">
        <House size={24} />
        </div>   
          Home
        </NavbarLink>
        <NavbarLink as={Link} className={segment == 'about' ? "text-color-secondary":"text-color-acccent hover:text-color-secondary"} href="/about">
        <div className="px-1.5">
        <UserRectangle size={24} />
        </div>
          About
        </NavbarLink>
        <NavbarLink as={Link} className={segment == 'portfolio' ? "text-color-secondary":"text-color-acccent hover:text-color-secondary"}  href="/portfolio"><div className="px-1.5"><ClipboardText size={24} /></div>
        Portofolio</NavbarLink>
        <NavbarLink  as={Link} className={segment == 'contact' ? "text-color-secondary":"text-color-acccent hover:text-color-secondary"} href="/contact"><div className="px-1.5"><AddressBook size={24} /></div>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
        </>
    )
}

export default Menu