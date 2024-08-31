"use client";
import Image from "next/image";
import coverImg from "@/app/bg_cover.jpg";
import { TypeAnimation } from "react-type-animation";
import Page from "./about/page";

const Home = () => {
  return (
    <>
      <div className="bg-color-primary flex flex-wrap justify-evenly h-screen md:text-5xl p-4 space-y-4 overflow-auto">
      <div className="h-64 w-96 relative">
          <div className="absolute top-28 left-20 md:top-36 md:left-40 min-h-56 w-56 rounded-full bg-color-accent shadow-xl shadow-color-gray"></div>
          <Image className="makeImageCircular absolute top-12 md:top-20 right-2 md:left-28 rounded-full p-16" src={coverImg} alt="..." width={700} height={700} style={{objectFit:"cover"}}/>
          
        </div>
        <div className="flex flex-col md:w-5/12 p-8 space-y-4 text-center md:text-justify">
        <h1 className="text-3xl text-color-winter max-h-40 pt-16">
          Hi! I Am{" "}
        </h1>
        <TypeAnimation
          className="bg-gradient-to-r from-color-accent to-color-primary text-transparent bg-clip-text text-3xl font-bold text-color-accent"
          sequence={["Owen Rudiyanto So", 2000]}
          speed={20}
        />
        <h2 className="text-3xl text-color-winter">
          I'm a{" "}
          <TypeAnimation
            className="underline decoration-color-winterGradient"
            sequence={[
              "Back End Developer",
              2000,
              "Game Developer",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </h2>
        <h3 className="text-md md:text-2xl font-bold text-color-winterGradient">
          I'm a Back End Developer with 4 years experience, I love to discuss
          about back end topic, love to learn new tech stack to expand my
          knowledge of Back End tech from other programming language.
        </h3>
        </div>
        
      </div>
    </>
  );
};

export default Home;
