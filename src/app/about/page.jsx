import Image from "next/image";
import srcImage from "@/app/img_about.jpg";

const Page = () => {
  return (
    <>
      <div className="flex-1 flex-col justify-center items-center bg-color-primary min-h-screen pt-4">
        <h1 className="text-2xl md:text-4xl p-2 font-bold text-color-secondary pt-16 pb-8 mt-8 text-center">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row bg-gradient-to-br from-color-gray  to-color-secondaryAccent p-4 md:p-12 rounded-lg space-x-4 space-y-4">
          <Image
            id="menu1"
            className="rounded-xl"
            src={srcImage}
            width={200}
            height={300}
          ></Image>
          <Image
            id="menu2"
            className="flex rounded-xl"
            src={srcImage}
            width={200}
            height={200}
          ></Image>
          <div className="flex flex-col p-4 space-y-2">
            <h2 className="text-xl  text-justify text-color-accent mb-4">
              I’m a Person That Always Combine My Great Time Management & Typing
              Speed to Always Fulfill My Tasks Before Deadline. I’m Also a
              Person That Have Strong Problem Solving & Logic Skills, Great
              Teamplay in Team, Eventhough I Have Some Weakness Like Difficult
              to Build Relationship With New People, If Only The Person Is Not
              Making Me Comfortable When Talking. I’m Attracted in the field of
              IT Software & Hardware, especially Programming World.
            </h2>
            <div className="mb-1 text-xl font-medium text-color-secondary md:text-left text-center">
              Skills
            </div>
            <div className="flex md:flex-row space-x-16">
              <div className="flex-1 md:flex-col space-y-4">

                <div class="flex justify-between mb-1">
                  <span class="text-xs md:text-base font-medium text-color-accent dark:text-white">
                    HTML & CSS & JS
                  </span>
                  <span class="text-sm font-medium text-color-accent dark:text-white">
                    83%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-color-secondary to-color-accent h-2.5 rounded-full"
                    style={{ width: "83%" }}
                  ></div>
                </div>

                <div class="flex justify-between mb-1">
                  <span class="text-base font-medium text-color-accent dark:text-white">
                    PHP
                  </span>
                  <span class="text-sm font-medium text-color-accent dark:text-white">
                    90%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-color-secondary to-color-accent h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div class="flex justify-between mb-1">
                  <span class="text-base font-medium text-color-accent dark:text-white">
                    Next.JS
                  </span>
                  <span class="text-sm font-medium text-color-accent dark:text-white">
                    40%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-color-secondary to-color-accent h-2.5 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>

              </div>

              <div className="flex-1 md:flex-col space-y-4">
              <div class="flex justify-between mb-1">
                  <span class="text-base font-medium text-color-accent dark:text-white">
                    MySQL
                  </span>
                  <span class="text-sm font-medium text-color-accent dark:text-white">
                    90%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-color-secondary to-color-accent h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div class="flex justify-between mb-1">
                  <span class="text-base font-medium text-color-accent dark:text-white">
                    Flutter
                  </span>
                  <span class="text-sm font-medium text-color-accent dark:text-white">
                    50%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-color-secondary to-color-accent h-2.5 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div class="flex justify-between mb-1">
                  <span class="text-base font-medium text-color-accent dark:text-white">
                    Java
                  </span>
                  <span class="text-sm font-medium text-color-accent dark:text-white">
                    30%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-gradient-to-r from-color-secondary to-color-accent h-2.5 rounded-full"
                    style={{ width: "30%" }}
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
