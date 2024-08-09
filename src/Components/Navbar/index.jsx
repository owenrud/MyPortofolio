 import Link from "next/link"
import Menu from "./menu"
const Navbar = () =>{
    
    return(
        <nav className="bg-color-primary text-color-accent border border-color-secondary shadow-xl">
        <div className="flex flex-col space-y-2 md:flex-row justify-evenly items-center mb-2 p-2">
            <div className="flex-1 max-w-64 max-h-12 text-lg md:text-2xl font-bold text-color-secondaryAccent">
                Owen Rudiyanto So
            </div>
        <Menu></Menu>
               
        
        </div>
        </nav>
    )
}

export default Navbar