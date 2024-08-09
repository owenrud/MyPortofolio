import { AddressBook, ClipboardText, House, UserRectangle } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"


const Menu = () =>{
    return(
        <>
        <div  className="flex flex-row gap-8">
            <Link href="/"  className="text-sm md:text-2xl font-bold whitespace-nowrap  hover:text-color-secondaryAccent"><House size={24} /></Link>
            <Link href="/about" className="text-sm md:text-2xl font-bold whitespace-nowrap hover:text-color-secondaryAccent"><UserRectangle size={24} /></Link>
            <Link href="/portfolio" className="text-sm md:text-2xl font-bold whitespace-nowrap hover:text-color-secondaryAccent"><ClipboardText size={24} /></Link>
            <Link href="/contact" className="text-sm md:text-2xl font-bold whitespace-nowrap hover:text-color-secondaryAccent"><AddressBook size={24} /></Link>
            </div>
        </>
    )
}

export default Menu