import Image from "next/image";
import coverImg from "@/app/bg_cover.jpg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-5xl p-4 space-y-4">
        <Image loading="lazy" src={coverImg} fill={true} objectFit="fill"></Image>
        <h1 className="text-color-accent">
          Hi! I Am{" "}
          <span className="font-bold text-color-accent">
            Owen Rudiyanto So
          </span>
        </h1>
        <h2 className="text-color-accent">
          I'm{" "}
          <span className="font-bold text-color-accent underline decoration-color-secondaryAccent">
            Back End Developer
          </span>
        </h2>
        <h3 className="text-2xl font-bold text-color-accent">
          I'm a Back End Developer with 4 years experience, I love to discuss
          about back end topic, love to learn new tech stack to expand my
          knowledge of Back End tech from other programming language.
        </h3>
      </div>
    </>
  );
};

export default Home;
