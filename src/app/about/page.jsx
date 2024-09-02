import Image from "next/image";
import srcImage from "@/app/img_about.jpg";
import HtmlImage from "@/app/logoHTML.png";
import MySQLImage from "@/app/MySQL.png";
import PHPImage from "@/app/logoPHP.png";
import NJSImage from "@/app/logoNJS.png";
import PyImage from "@/app/logoPy.png";
import FlutterImage from "@/app/logoFlutter.png";
import JavaImage from "@/app/Java.png";
import GolangImage from "@/app/Golang.png";
import CPlusImage from "@/app/C+.png";
import CSharpImage from "@/app/CSharp.png";

const Page = () => {
  return (
    <>
      <div className="flex-1 flex-col justify-center items-center bg-gradient-to-br from-color-winterGradient to-color-secondary min-h-screen pt-4 p-4">
        <h1 className="text-2xl md:text-4xl p-2 font-bold text-color-winter pt-16 pb-8 mt-8 text-center">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center md:items-start md:flex-row bg-gradient-to-br from-color-winterSecondaryGradient   p-4 md:p-12 rounded-lg space-x-4 space-y-4">
          <Image
            id="menu1"
            className="rounded-xl"
            src={srcImage}
            width={200}
            height={300}
            alt="Owen Rudiyanto So Photo"
          ></Image>
          <Image
            id="menu2"
            className="flex rounded-xl"
            src={srcImage}
            width={200}
            height={200}
            alt="Owen Rudiyanto So Photo"
          ></Image>
          <div className="flex flex-col p-4 space-y-2">
            <h2 className="text-2xl font-semibold text-justify text-color-winter mb-4">
              I’m a Person That Always Combine My Great Time Management & Typing
              Speed to Always Fulfill My Tasks Before Deadline. I’m Also a
              Person That Have Strong Problem Solving & Logic Skills, Great
              Teamplay in Team, I’m Attracted in the field of
              IT Software & Hardware, especially Programming World. My Hobby is Playing Games.
            </h2>
            <div className="mb-1 text-3xl font-semibold text-color-secondary md:text-left text-center">
              My Skills
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-xl font-semibold text-color-winter dark:text-white">
                    <Image src={HtmlImage} width={40} height={40} alt="..."/>
                    HTML & CSS & JS
                  </span>
                  <span className="flex text-xl font-semibold text-color-winter items-end text-center dark:text-white">
                    83%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "83%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white ">
                    <Image src={PHPImage} width={40} height={40} alt="..." />
                    <p className="mt-2 mx-1">PHP</p>
                  </span>
                  <span className="flex text-xl font-semibold text-color-winter dark:text-white items-end">
                    90%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white">
                    <Image src={NJSImage} width={40} height={40} alt="..." />
                    Next.JS
                  </span>
                  <span className="flex text-xl font-semibold text-color-winter items-end dark:text-white">
                    40%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white">
                    <Image
                      src={PyImage}
                      width={40}
                      height={40}
                      alt="..."
                    />
                    Python
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    25%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex flex-col text-xl font-semibold text-color-winter dark:text-white space-y-2">
                    <Image src={MySQLImage} width={40} height={40} alt="..."/>
                    <h1>MySQL</h1>
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    90%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex flex-col space-y-2 text-xl font-semibold text-color-winter dark:text-white">
                  <Image src={FlutterImage} width={40} height={40} alt="..."/>
                    <h1>Flutter</h1>
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    50%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white">
                  <Image src={JavaImage} width={40} height={40} alt="..." />
                    Java
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    30%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white">
                  <Image src={CPlusImage} width={40} height={40} alt="..."/>
                    C++
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    10%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white">
                  <Image src={CSharpImage} width={40} height={40} alt="..."/>
                    C#
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    25%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xl font-semibold text-color-winter dark:text-white">
                  <Image src={GolangImage} width={40} height={40} alt="..."/>
                    Golang
                  </span>
                  <span className="flex items-end text-xl font-semibold text-color-winter dark:text-white">
                    5%
                  </span>
                </div>
                <div className="w-full bg-color-winter rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gradient-to-r from-color-winterDark to-color-winterGradient h-2.5 rounded-full"
                    style={{ width: "5%" }}
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
