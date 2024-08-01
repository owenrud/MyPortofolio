 import Link from "next/link"
const Navbar = () =>{
    return(
        <nav>
        <div className=" flex md:flex-row flex-col justify-center items-center mb-2 ">
        <Link href="#home"  className="text-xl font-bold whitespace-nowrap text-color-primary dark:text-color-primary p-4 hover:text-blue-800">Home</Link>
        <Link href="#about" className="text-xl font-bold whitespace-nowrap text-color-primary p-4 hover:text-blue-800">About</Link>
        <Link href="/" className="text-xl font-bold whitespace-nowrap text-color-primary p-4 hover:text-blue-800">Portofolio</Link>
        <Link href="/" className="text-xl font-bold whitespace-nowrap text-color-primary p-4 hover:text-blue-800">Contact</Link>
        </div>
        </nav>
    )
}

export default Navbar