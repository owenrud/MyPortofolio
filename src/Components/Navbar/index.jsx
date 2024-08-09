 import Link from "next/link"
import Menu from "./menu"
const Navbar = () =>{
    
    return(
        <nav className="bg-color-primary text-color-accent border border-color-gray shadow-xl">
        <div className="flex flex-col space-y-2 md:flex-row justify-evenly items-center mb-2 p-2">
            <Link href="/" className="flex-1 max-w-64 max-h-12 text-lg md:text-2xl bg-gradient-to-br font-bold from-color-accent to-color-secondaryAccent inline-block text-transparent bg-clip-text">
                Owen Rudiyanto So
            </Link>
        <Menu></Menu>
               
        
        </div>
        </nav>
    )
}

export default Navbar