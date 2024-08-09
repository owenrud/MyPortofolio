"use client";
import Image from "next/image";
import coverImg from "@/app/bg_cover.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:justify-center md:items-center  md:text-5xl p-4 space-y-4">
        <Image
          loading="lazy"
          src={coverImg}
          fill={true}
          objectFit="cover"
        ></Image>
        <h1 className="text-3xl text-center text-color-winter max-h-40 pt-16">
          Hi! I Am{" "}
        </h1>
        <TypeAnimation
          style={{ position: "relative", zIndex: "10" }}
          className="bg-gradient-to-r from-color-accent to-color-primary text-transparent bg-clip-text text-3xl font-bold text-color-accent text-center"
          sequence={["Owen Rudiyanto So", 2000]}
          speed={20}
        />
        <h2 className="text-3xl text-center text-color-winter">
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
        <h3 className="text-md md:text-2xl font-bold text-color-winterGradient p-8">
          I'm a Back End Developer with 4 years experience, I love to discuss
          about back end topic, love to learn new tech stack to expand my
          knowledge of Back End tech from other programming language.
        </h3>
      </div>
    </>
  );
};

export default Home;
