import Image from "next/image";
import coverImg from "@/app/bg-backend.jpg"

const Home =()=> {  
  return (
    <>
    <div id="home" className="homeImage flex flex-col bg-blue-100 justify-center items-center text-5xl p-4 space-y-4">
      <Image src={coverImg} fill={true}></Image> 
    <h1 className="text-color-primary">Hi! I Am <span className="font-bold text-color-primary">Owen Rudiyanto So</span></h1>
    <h2 className="text-color-primary">I'm <span className="font-bold text-color-primary underline decoration-color-secondary">Back End Developer</span></h2>
    <h3 className="text-2xl font-bold text-color-primary">I'm a Back End Developer with 4 years experience, I love to discuss about back end topic, love to learn new tech stack to expand my
      knowledge of Back End tech from other programming language.
    </h3>
    </div>
    <div id="about" className="flex flex-col bg-color-accent">
    <h1 className="flex text-4xl justify-center p-4 font-bold">About Me</h1>
    <h2 className="flex justify-center text-xl p-4">Saya memiliki manajemen waktu yang baik sehingga selalu memenuhi deadline . Mengikuti kepanitiaan di
kampus. Tertarik di bidang IT Software & Hardware, mengikuti perkembangan industri IT.
</h2>
    </div>
    

    </>
    
  )
}

export default Home