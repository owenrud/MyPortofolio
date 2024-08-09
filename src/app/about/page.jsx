import Image from "next/image"
import srcImage from "@/app/img_about.jpg"
import { Progress } from "flowbite-react";
const Page = () =>{
    return(
        <>
        <div className="flex-1 flex-col justify-center items-center bg-color-accent pt-4">
            <h1 className="text-2xl md:text-4xl p-2 font-bold text-color-primary">About Me</h1>
            <div className="flex flex-col justify-center items-center md:flex-row bg-color-primary p-4 md:p-12 rounded-lg space-x-4 space-y-4">
                <Image id="menu1" className="rounded-xl" src={srcImage} width={200} height={300} ></Image>
                <Image id="menu2" className="flex rounded-xl" src={srcImage} width={200} height={200} ></Image>
                <div className="flex md:flex-col">
                <h2 className="text-xl p-2 text-justify text-color-accent">I’m a Person That Always Combine My Great Time Management & Typing Speed to Always Fulfill My Tasks Before Deadline. I’m Also a Person That Have Strong Problem Solving & Logic Skills, Great Teamplay in Team, Eventhough I Have Some Weakness Like Difficult to Build Relationship With New People, If Only The Person Is Not Making Me Comfortable When Talking. I’m Attracted in the field of IT Software & Hardware, especially Programming World.
                </h2>
                </div>
            </div>
           
            
            <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Flowbite"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />


        </div>
        </>
    )
}

export default Page