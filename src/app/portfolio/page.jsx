"use client";

import { Button, Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import img1 from "@/app/portfolio-1.png";
import img2 from "@/app/portfolio-2.png";
import img3 from "@/app/portfolio-3.png";
import img4 from "@/app/portfolio-4.png";
import img5 from "@/app/portfolio-5.png";
import img6 from "@/app/portfolio-6.png";
import img7 from "@/app/portfolio-7.png";
import Image from "next/image";

const tabsContent = {
  All: [
    {
      title: "Shuttle Bus Website",
      image: img1,
      description: "Shuttle Bus Website",
      category: "Next.js",
    },
    {
      title: "Volunteer Recruitment Website",
      image: img2,
      description: "Volunteer Recruitment Website",
      category: "Laravel",
    },
    {
      title: "Prototype Game",
      image: img3,
      description: "Prototype Game",
      category: "Next.js",
    },
    {
      title: "Company Profile",
      image: img4,
      description: "Company Profile",
      category: "Laravel",
    },
    {
      title: "Anime List",
      image: img5,
      description: "Anime List",
      category: "Next.js",
    },
    {
      title: "System Registration Digital Event",
      image: img6,
      description: "System Registration Digital Event",
      category: "Laravel",
    },
    {
      title: "Health & Clinic Website",
      image: img7,
      description: "Health & Clinic Website",
      category: "Next.js",
    },
  ],
  Laravel: [
    {
      title: "Volunteer Recruitment Website",
      image: img2,
      description: "Volunteer Recruitment Website",
      category: "Laravel",
    },
    {
      title: "Company Profile",
      image: img4,
      description: "Company Profile",
      category: "Laravel",
    },
    {
      title: "System Registration Digital Event",
      image: img6,
      description: "System Registration Digital Event",
      category: "Laravel",
    },
  ],
  "Next.js": [
    {
      title: "Shuttle Bus Website",
      image: img1,
      description: "Shuttle Bus Website",
      category: "Next.js",
    },

    {
      title: "Anime List",
      image: img5,
      description: "Anime List",
      category: "Next.js",
    },
    {
      title: "Health & Clinic Website",
      image: img7,
      description: "Health & Clinic Website",
      category: "Next.js",
    },
  ],
  "Game Development": [
    {
      title: "Prototype Game",
      image: img3,
      description: "Prototype Game",
      category: "Next.js",
    },
  ],
};
const Page = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <div className="h-screen p-8 bg-gradient-to-br from-color-winterGradient to-color-secondary overflow-auto">
        <h1 className="text-3xl text-center text-white py-10">My Portfolio</h1>

        <div className="mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
            {Object.keys(tabsContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm md:text-lg font-semibold transition-colors md:mx-16 ${
                  activeTab === tab
                    ? "bg-color-winter text-color-secondary"
                    : "bg-color-winterGradient text-color-winter"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {tabsContent[activeTab].map((item, index) => (
            <div key={index} className="relative flex flex-col justify-center items-center">
              <Image
                className="rounded-lg"
                src={item.image}
                width={1000}
                height={1000}
                
                alt={item.title}
              />
              <h1 className="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-color-winterSecondaryGradient bg-opacity-75 text-color-winter text-lg md:text-2xl font-semibold text-center justify-center  items-center rounded w-full h-10 md:h-16">
                {item.description}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
