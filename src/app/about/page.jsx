import Image from "next/image"
import srcImage from "@/app/img_about.jpg"
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
           
            
<div class="flex justify-between mb-1">
  <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
  <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-color-primary h-2.5 rounded-full" style={{ width : '75%' }}></div>
</div>


        </div>
        </>
    )
}

export default Page