 import Link from "next/link"
const Navbar = () =>{
    return(
        <nav className="bg-color-primary text-color-accent border border-color-secondary shadow-xl">
        <div className=" flex flex-row justify-evenly  items-center mb-2 p-2">
            <div className="flex max-w-64 max-h-12 text-2xl font-bold text-color-secondaryAccent">
                Owen Rudiyanto So
            </div>
                <Link href="/"  className="text-2xl font-bold whitespace-nowrap  hover:text-color-secondaryAccent">Home</Link>
        <Link href="/about" className="text-2xl font-bold whitespace-nowrap hover:text-color-secondaryAccent">About Me</Link>
        <Link href="/" className="text-2xl font-bold whitespace-nowrap hover:text-color-secondaryAccent">My Portofolio</Link>
        <Link href="/" className="text-2xl font-bold whitespace-nowrap hover:text-color-secondaryAccent">Contact</Link>

        
        </div>
        </nav>
    )
}

export default Navbar