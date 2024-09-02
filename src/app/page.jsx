"use client";
import Image from "next/image";
import coverImg from "@/app/bg_cover.jpg";
import { TypeAnimation } from "react-type-animation";
import Page from "./about/page";
import HtmlImage from "@/app/logoHTML.png";
import MySQLImage from "@/app/MySQL.png";
import PHPImage from "@/app/logoPHP.png";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-color-winterGradient to-color-secondary flex flex-col justify-evenly h-screen md:text-5xl space-y-4 overflow-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="makeCircle  rounded-full bg-color-accent shadow-xl shadow-color-gray relative mt-24">
            <Image
              className="makeImageCircular absolute "
              src={coverImg}
              alt="..."
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-col md:w-5/12 p-8 space-y-4 text-center md:text-justify">
            <h1 className="text-3xl text-color-winter max-h-40 pt-16">
              Hi! I Am{" "}
            </h1>
            <TypeAnimation
              className="bg-gradient-to-r from-color-winterDark to-color-winterSecondaryGradient text-transparent bg-clip-text text-3xl font-bold text-color-accent"
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
            <h3 className="text-md md:text-2xl font-bold text-color-winter">
              I'm a Back End Developer with 4 years experience, I love to
              discuss about back end topic, love to learn new tech stack to
              expand my knowledge of Back End tech from other programming
              language.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-3 items-center justify-center text-center font-bold gap-8 bg-gradient-to-l from-color-winterSecondaryGradient w-full py-6">
          <div className="flex flex-wrap md:flex-col text-color-winter text-4xl mx-4 text-wrap ">
            <h1>{"< 1 Year Professional Experience"}</h1> 
          </div>
          <div className="flex flex-col text-color-winter  text-4xl mx-4 text-wrap">
            <h1>5+ Projects Completed</h1>
          </div>
          <div className="flex flex-col text-color-winter  text-4xl mx-4 text-wrap">
            <h1>Best At</h1>
                <div className="flex justify-center items-center mt-8 space-x-4">
                  <Image className="border rounded-lg bg-color-winterGradient px-2 py-1.5" src={HtmlImage} width={92} height={92}/>
                  <Image className="border rounded-lg bg-color-winterGradient px-2 py-1.5" src={PHPImage} width={75} height={75}/>
                  <Image  className="border rounded-lg bg-color-winterGradient px-2 py-1.5" src={MySQLImage} width={75} height={75}/>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
