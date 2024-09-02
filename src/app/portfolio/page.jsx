
import { Carousel } from "flowbite-react";
import img1 from "@/app/portfolio-1.png"
import img2 from "@/app/portfolio-2.png"
import img3 from "@/app/portfolio-3.png"
import img4 from "@/app/portfolio-4.png"
import img5 from "@/app/portfolio-5.png"
import img6 from "@/app/portfolio-6.png"
import img7 from "@/app/portfolio-7.png"
import Image from "next/image";

const Page = () => {
    return(
        <>
        <div className="h-screen p-8 bg-color-primary overflow-auto">
            <h1 className=" text-3xl text-center text-color-secondary pt-20 xl:pt-20 md:pl-4 min-[1921px]:pt-20 min-[1921px]:text-5xl">My Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center mt-8 mx-8">
                <div className="relative flex flex-col">
                <Image className=" mx-auto" src={img1} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex  items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Shuttle Bus Website</h1>
                <h1 className="ContentImgMobile px-4 py-1.5 bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Shuttle Bus Website</h1>
                </div>
                <div className="relative flex flex-col">
                <Image  className="mx-auto" src={img2} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex bg-color-secondary items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Volunteer Recruitment Website</h1>
                <h1 className="ContentImgMobile px-4 py-1.5  bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Volunteer Recruitment Website</h1>
                </div>
                <div className="relative flex flex-col">
                <Image className="mx-auto" src={img3} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex bg-color-secondary items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Prototype Game</h1>
                <h1 className="ContentImgMobile px-4 py-1.5 bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Prototype Game</h1>
                </div>
                <div className="relative flex flex-col">
                <Image  className="mx-auto" src={img4} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex bg-color-secondary items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Company Profile</h1>
                <h1 className="ContentImgMobile px-4 py-1.5 bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Company Profile</h1>
                </div>
                <div className="relative flex flex-col">
                <Image  className="mx-auto" src={img5} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex bg-color-secondary items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Anime List</h1>
                <h1 className="ContentImgMobile px-4 py-1.5 bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Anime List</h1>
                </div>
                <div className="relative flex flex-col">
                <Image  className="mx-auto" src={img6} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex bg-color-secondary items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">System Registration Digital Event</h1>
                <h1 className="ContentImgMobile px-4 py-1.5 bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">System Registration Digital Event</h1>
                </div>
                <div className="relative flex flex-col">
                <Image  className="mx-auto" src={img7} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
                <h1 className="absolute ContentImg flex bg-color-secondary items-center justify-center text-xl md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Health & Clinic Website</h1>
                <h1 className="ContentImgMobile px-4 py-1.5 bg-color-gray bg-opacity-75 text-base md:text-4xl font-semibold text-center text-color-accent hover:cursor-pointer">Health & Clinic Website</h1>
                </div>
        
       
       
       
       
        
      </div>
    </div>
        </>
    )
}

export default Page