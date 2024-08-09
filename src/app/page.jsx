import Image from "next/image";
import coverImg from "@/app/bg_cover.jpg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:justify-center md:items-center  md:text-5xl p-4 space-y-4">
        <Image loading="lazy" src={coverImg} fill={true} objectFit="cover"></Image>
        <h1 className="text-3xl text-color-accent">
          Hi! I Am{" "}
          <span className="text-3xl font-bold text-color-accent">
            Owen Rudiyanto So
          </span>
        </h1>
        <h2 className="text-3xl text-color-accent">
          I'm{" "}
          <span className="text-3xl font-bold text-color-accent underline decoration-color-secondaryAccent">
            Back End Developer
          </span>
        </h2>
        <h3 className="text-md md:text-2xl font-bold text-color-accent">
          I'm a Back End Developer with 4 years experience, I love to discuss
          about back end topic, love to learn new tech stack to expand my
          knowledge of Back End tech from other programming language.
        </h3>
      </div>
    </>
  );
};

export default Home;
