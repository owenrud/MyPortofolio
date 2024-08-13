
import { Carousel } from "flowbite-react";
import img1 from "@/app/portfolio-1.png"
import img2 from "@/app/portfolio-2.png"
import img3 from "@/app/portfolio-3.png"
import img4 from "@/app/portfolio-4.png"
import img5 from "@/app/portfolio-5.png"
import img6 from "@/app/portfolio-6.png"
import Image from "next/image";

const Page = () => {
    return(
        <>
        <div className="h-screen p-8 bg-color-primary overflow-auto">
            <h1 className="text-3xl text-center text-color-secondary pt-20 md:pt-12 mb-4">My Portfolio</h1>
            <Carousel className="absolute md:left-96 md:w-6/12 md:h-6/12 bottom-8  left-0.5 right-2 p-4 md:p-0" slideInterval={3000}>
        <Image src={img1} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
        <Image src={img2} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
        <Image src={img3} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
        <Image src={img4} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
        <Image src={img5} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
        <Image src={img6} width={1000} height={1000} style={{objectFit: "scale-down"}}></Image>
      </Carousel>
    </div>
        </>
    )
}

export default Page