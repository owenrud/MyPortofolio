"use client";
import Image from "next/image";
import coverImg from "@/app/bg_cover.jpg";
import MySQLImage from "@/app/MySQL.png";
import PHPImage from "@/app/logoPHP.png";
import NJSImage from "@/app/logoNJS.png";
import PyImage from "@/app/logoPy.png";
import FlutterImage from "@/app/logoFlutter.png";
import JavaImage from "@/app/Java.png";
import GolangImage from "@/app/Golang.png";
import CSharpImage from "@/app/CSharp.png";
import Indonesia from "@/app/indonesia.png"
import UKDW from "@/app/UKDW.jpg";
import img1 from "@/app/portfolio-1.png";
import img2 from "@/app/portfolio-2.png";
import img3 from "@/app/portfolio-3.png";
import img4 from "@/app/portfolio-4.png";
import img5 from "@/app/portfolio-5.png";
import img6 from "@/app/portfolio-6.png";
import img7 from "@/app/portfolio-7.png";
import img8 from "@/app/portfolio_personal.png";
import { BuildingOffice, Envelope, FileArrowDown, GithubLogo, HandWaving, LinkedinLogo, } from "@phosphor-icons/react";
import Link from "next/link";
import NavbarComponent from "@/Components/Navbar";
import React, { useState } from "react"


const Home = () => {
  const [isEducation,setIsEducation] = useState(false)
   const handleContent = (type) => {
    
    // Set the state based on the button clicked
    if (type === "education") {
      setIsEducation(true);
    } else {
      setIsEducation(false);
    }
  }
  return (
    <>
    
      <div className="bg-color-primary justify-center items-center h-screen overflow-auto">
      <NavbarComponent/>
      { /*Parent div for this section*/} <section className="flex flex-col md:flex-row space-x-4 justify-center items-center md:mt-12 md:w-6/12 md:mx-auto" id="home">
        <div className="flex flex-col  space-y-2">
        <div className="flex p-4 md:p-0 space-x-2 mt-6">
            <h1 className="text-color-accent font-bold text-3xl md:text-3xl">hi owen here </h1><HandWaving className="text-color-accent" size={48}/>
            </div>
          <div className="flex-1 md:space-x-2 p-4 md:p-0">
          <h3 className="text-color-accent md:text-lg">22-years old Fresh Graduate, Back-end developer from Indonesia </h3> <Image src={Indonesia} width={24} height={24} style={{objectFit:"contain"}}/>
          </div>
          
          <p className="text-color-accent md:pt-4 p-4 md:p-0 md:text-lg">I like to develop full-stack, drink coffee and get sudden coding idea from my gaming session or while listening music.</p>
          <div className="flex text-color-accent space-x-4 md:pt-4 ml-4 pb-8 md:ml-0 md:pb-0 items-center">
            <div className="border px-3 py-1.5 rounded-lg">
              <a className="flex flex-row font-bold gap-2 justify-center items-center" href="./Resume.pdf" target="_blank">
              Resume <FileArrowDown size={32}></FileArrowDown>
              </a>
            </div>
          <Link target="_blank" href="https://www.linkedin.com/in/owruso/"><LinkedinLogo  size={32}></LinkedinLogo></Link>
          <Link target="_blank" href="https://github.com/owenrud"><GithubLogo  size={32}></GithubLogo></Link>
          <Link target="_blank" href="mailto:owenrudiantoso@gmail.com"><Envelope size={32}></Envelope></Link>
          </div>
        </div>
            
          <Image src={coverImg} width={265} height={265} style={{objectFit:"contain"}} className="rounded-lg"/>

          { /*Parent div for this section*/} </section>

{/* About*/}
        <section className="mt-20 w-full" id="about">
          
        { /*Parent div for this section*/}<div className="flex-col justify-center items-center space-y-4">

            <div className="flex bg-color-secondary space-x-4 rounded-lg p-1 w-9/12 md:w-6/12 mx-auto">
            <button
        className={`${
          !isEducation
            ? "bg-color-primary text-color-accent"  // Default button class for Work
            : "bg-color-secondary text-color-accent" // Altered button class for Education state
        } rounded-lg px-3 py-0.5 font-semibold text-xl w-full`}
        onClick={() => handleContent("work")}
      >
        Work
      </button>

      {/* Button for Education - dynamic className based on isEducation state */}
      <button
        className={`${
          isEducation
            ? "bg-color-primary text-color-accent"  // Default button class for Education
            : "bg-color-secondary text-color-accent" // Altered button class for Work state
        } rounded-lg px-3 py-0.5 font-semibold text-xl w-full`}
        onClick={() => handleContent("education")}
      >
        Education
      </button>
            </div>
            
            <div className="flex flex-col border border-color-accent space-x-4 space-y-4 rounded-lg p-4 md:p-8 md:w-6/12 mx-auto">
              {/*Content */}
              {isEducation ? 
              (
                /* Education Content */
                <div className="flex flex-row justify-evenly gap-6 pl-4">
   
                {/* Left Side */}
                <div>
             <Image className="mt-4 rounded-full" style={{objectFit:"contain"}} src={UKDW} width={100} height={100}/>
             </div>
             {/* Right SIde */}
             <div className="flex flex-col">
             <p className="text-color-accent2 text-sm">Aug 2020 - Jul 2024</p>
             <p className="text-color-accent text-lg">University Christian Duta Wacana</p>
             <p className="text-color-accent2 text-md">Bachelor Degree in Information System</p>
             <ul className="text-color-accent space-y-4">
              <li>Major in Information Systems</li>
              <li>Graduated at July 2024 with Cumlaude Honour.</li>
              <li>Group leader of Project in Software Engineer & Game Design Course, successfully lead 6+ students</li>
             </ul>
             </div>
             </div>
             /* End  of Education Content */ 
            )
               : 
              (
                /* Work Content */
              <div className="flex flex-row justify-evenly gap-6 pl-4">
   
   {/* Left Side */}<div>
<BuildingOffice className="text-color-accent border p-3 rounded-full" size={64}/>
</div>
{/* Right SIde */}
<div className="flex flex-col">
<p className="text-color-accent2 text-sm">Aug 2023 - Feb 2024</p>
<p className="text-color-accent text-lg">PT. Jawatha Pura Media Utama</p>
<p className="text-color-accent2 text-md">Back-end Developer</p>
<ul className="text-color-accent  space-y-4">
 <li>Designed and executed a comprehensive database optimization strategy to improve system performance, reducing response times by 30% and increasing overall efficiency</li>
 <li>Developed and optimized backend systems for applications, including RESTful API, resulting in a 30% increase in system efficiency and a 20% reduction in response time.</li>
 <li>Collaborated with frontend developers to integrate new features and functionalities into existing applications, resulting in completed project 1 week ahead of schedule</li>
</ul>
</div>
</div>
/* End of Work Content */
)}
             
              {/*Content */}
              
            <div>
              
            </div>
            </div>
            <div className="flex-col mx-auto text-color-accent p-8 md:p-0 md:w-6/12">
              <p className="text-2xl font-bold mb-4">Tech Stack</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="flex flex-row items-center space-x-2">
              <Image className="ImagesBW" src={PHPImage} width={32} height={32}/>
                <p className="text-color-accent">PHP</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={MySQLImage} width={32} height={32}/>
                <p className="text-color-accent">MySQL</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={PyImage} width={32} height={32}/>
                <p className="text-color-accent">Python</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={JavaImage} width={32} height={32}/>
                <p className="text-color-accent">Java</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={CSharpImage} width={32} height={32}/>
                <p className="text-color-accent">C#</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={FlutterImage} width={32} height={32}/>
                <p className="text-color-accent">Dart</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={GolangImage} width={32} height={32}/>
                <p className="text-color-accent">Go</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="bg-color-accent" src={NJSImage} width={32} height={32}/>
                <p className="text-color-accent">Next.js</p>
                </div>
              </div>

            </div>
            { /*Parent div for this section*/} </div>
         
        </section>
        {/* End of About Section*/}
        
        {/*Portfolio Section */}
        <section id="portfolio" className="mt-6 md:w-7/12 mx-auto">
          <h1 className="text-color-accent font-bold text-3xl text-center">Projects</h1>
          <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center  p-12">
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img1} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Shuttle Bus Booking</h1>
              <h6 className="text-color-accent p-2">Shuttle Bus is a platform that allow users freely to choose and booking a shuttle bus with their needs.</h6>
              <h2 className="text-color-accent text-lg p-2"> For University Project</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Laravel</div>
                <div className="bg-color-accent rounded-lg p-1 ">Bootstrap</div>
                <div className="bg-color-accent rounded-lg p-1 ">MySQL</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img8} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Personal Portfolio</h1>
              <h6 className="text-color-accent p-2">This is my Personal Portfolio, where i showcase my projects and skills.</h6>
              <h2 className="text-color-accent text-lg p-2"> For Owen Rudiyanto So</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Next.js</div>
                <div className="bg-color-accent rounded-lg p-1 ">React</div>
                <div className="bg-color-accent rounded-lg p-1 ">TailwindCSS</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img2} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Volunteer Recruitment Website</h1>
              <h6 className="text-color-accent p-2 ">Volunteer Recruitment is a platform for university students who seeking a volunteer job in university, having features similar to popular job site.</h6>
              <h2 className="text-color-accent text-lg p-2"> For University Project</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Laravel</div>
                <div className=" bg-color-accent rounded-lg p-1">CSS</div>
                <div className="bg-color-accent rounded-lg p-1">Bootstrap</div>
                <div className=" bg-color-accent rounded-lg p-1">Javascript</div>
                <div className="bg-color-accent rounded-lg p-1">MySQL</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img3} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Prototype Educational Game</h1>
              <h6 className="text-color-accent p-2 ">This is my Prototype Educational Game, Inspired by popular game title named Persona.</h6>
              <h2 className="text-color-accent text-lg p-2"> For University Project</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Unity</div>
                <div className=" bg-color-accent rounded-lg p-1 ">C#</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">3D Rendering</div>
                <div className=" bg-color-accent rounded-lg p-1">Blender</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img4} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Company profile</h1>
              <h6 className="text-color-accent p-2 ">Company Profile for a introduction of the company</h6>
              <h2 className="text-color-accent text-lg p-2"> For PT. Jawatha Pura Media Utama branch company</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Laravel</div>
                <div className=" bg-color-accent rounded-lg p-1 ">CSS</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">Bootstrap</div>
                <div className=" bg-color-accent rounded-lg p-1">Javascript</div>
                <div className=" bg-color-accent rounded-lg p-1">MySQL</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img5} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Anime List</h1>
              <h6 className="text-color-accent p-2 ">This is my Personal Anime List to learn using Next.js</h6>
              <h2 className="text-color-accent text-lg p-2"> For Owen Rudiyanto So</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Next.js</div>
                <div className=" bg-color-accent rounded-lg p-1 ">TailwindCSS</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">React</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img6} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Digital Registration Event Management System</h1>
              <h6 className="text-color-accent p-2 ">This is my Thesis Project, This a cross-platform project allow event organizer using web platform to manage their events, And allow guest using mobile platform to see, register, absence events,
                 And Print out Certificate of the events.</h6>
              <h2 className="text-color-accent text-lg p-2"> For Owen Rudiyanto So</h2>
              <div className="grid grid-cols-3  p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Laravel</div>
                <div className=" bg-color-accent rounded-lg p-1 ">TailwindCSS</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">Javascript</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">MySQL</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">RESTful API</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">Flutter</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">Dart</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">Payment Gateway</div>
              </div>
            </div>
            <div className="flex flex-col h-full border rounded-lg p-1">
              <Image src={img7} width={500} height={500}/>
              <h1 className="text-color-accent text-2xl p-2">Sydney Speech Clinic</h1>
              <h6 className="text-color-accent p-2 ">This is Competition UI/UX Redesign for Sydney Speech Clinic at Freelancer website.</h6>
              <h2 className="text-color-accent text-lg p-2"> For Sydney Speech Clinic</h2>
              <div className="grid grid-cols-3 p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
                <div className="bg-color-accent rounded-lg p-1 ">Next.js</div>
                <div className=" bg-color-accent rounded-lg p-1 ">React</div>
                <div className="flex-1 bg-color-accent rounded-lg p-1 ">TailwindCSS</div>
              </div>
            </div>
          </div>
        </section>
        {/*End of Portfolio Section */}
        
         </div>
    </>
  );
};

export default Home;
