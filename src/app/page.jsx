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
import img9 from "@/app/portfolio-8-1.png";
import img9sub1 from "@/app/portfolio-8-2.png";
import img9sub2 from "@/app/portfolio-8-3.png";
import img9sub3 from "@/app/portfolio-8-4.png";
import { BuildingOffice, Envelope, FileArrowDown, GithubLogo, HandWaving, LinkedinLogo,CaretLeft,CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import NavbarComponent from "@/Components/Navbar";
import React, { useState,useRef, useEffect } from "react"



const Home = () => {
  const [isEducation,setIsEducation] = useState(false)
   const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  
  const btnRefs = useRef([]);
  
  useEffect(() => {
    const index = categories.indexOf(selectedCategory);
    const btn = btnRefs.current[index];
    if (btn) {
      setIndicatorStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      });
    }
  }, [selectedCategory]);

  const projects = [
    {
      id: 1,
      title: "Coffee Sales",
      description: "Showcase Data Analyst & Visualization skills.",
      category: "Data Analyst",
      languages: ["PowerBI", "Python", "Data Analyst"],
      image: img9,
      hasModal : true,
      modalImages: [
      {src :img9, description : "Data Visualization using Power BI"},
      { src: img9sub1, description: "Another Data Visualization when clicking other colors at the Dashboard" },
      { src: img9sub2, description: "Another Data Visualization when clicking other colors at the Dashboard" },
      { src: img9sub3, description: "Data Cleaning and Feature Selection Process in Python using Pandas" },
      ],
    },
    {
      id: 2,
      title: "Digital Registration Event Management System",
      description: "Thesis Project: Event management cross-platform system.",
      category: "Web Development",
      languages: ["Laravel", "TailwindCSS", "Javascript", "MySQL", "Flutter", "Dart"],
      image: img6,
    },
    {
      id: 3,
      title: "Prototype Educational Game",
      description: "Prototype educational game inspired by Persona.",
      category: "Game Development",
      languages: ["Unity", "C#", "3D Rendering", "Blender"],
      image: img3
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "My portfolio website to showcase my projects and skills.",
      category: "Web Development",
      languages: ["Next.js", "React", "TailwindCSS"],
      image: img8,
    },
    {
      id : 5,
      title: "Volunteer Recruitment Website",
      description: "Volunteer Recruitment is a platform for university students who seeking a volunteer job in university, having features similar to popular job site.",
      category: "Web Development",
      languages: ["Laravel", "Bootstrap", "Javascript","MySQL","CSS"],
      image: img4,
    },
    {
      id : 6,
      title: "Shuttle Bus Website",
      description: "Shuttle Bus is a platform that allow users freely to choose and booking a shuttle bus with their needs.",
      category: "Web Development",
      languages: ["Laravel", "Bootstrap", "Javascript","MySQL","CSS"],
      image: img1,
    }
    // ... add more projects
  ];

  const categories = ["All", "Data Analyst", "Game Development", "Web Development"];

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchTech =
      selectedTech === "All" || project.languages.includes(selectedTech);

    return matchCategory && matchTech;
  });

// Inside your component state
const [currentIndex, setCurrentIndex] = useState(0); // project index
const [currentModalIndex, setCurrentModalIndex] = useState(0); // image index
const [isOpen, setIsOpen] = useState(false);

// Open modal
const openModal = (index) => {
  setCurrentIndex(index);
  setCurrentModalIndex(0); // start with first image
  setIsOpen(true);
};

// Close modal
const closeModal = () => {
  setIsOpen(false);
};

// Prev / Next navigation
const prevImage = () => {
  setCurrentModalIndex((prev) =>
    prev === 0
      ? projects[currentIndex].modalImages.length - 1
      : prev - 1
  );
};

const nextImage = () => {
  setCurrentModalIndex((prev) =>
    prev === projects[currentIndex].modalImages.length - 1
      ? 0
      : prev + 1
  );
};


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
        <div className="flex flex-col pt-12 space-y-2">
        <div className="flex p-4 md:p-0 space-x-2 mt-6">
            <h1 className="text-color-accent font-bold text-3xl md:text-3xl">hi owen here </h1><HandWaving className="text-color-accent" size={48}/>
            </div>
          <div className="flex-1 md:space-x-2 p-4 md:p-0">
          <h3 className="text-color-accent md:text-lg">23歳(years) Bachelor of Information System (B.C.S), A Data science and Back-end developer Enthusiast from Indonesia </h3> <Image src={Indonesia} width={24} height={24} style={{objectFit:"contain"}}/>
          </div>
          
          <p className="text-color-accent md:pt-4 p-4 md:p-0 md:text-lg">I'm enjoy to develop a full-stack website, while have love and hate relationship with analyzing data, also frequently got sudden problem solving idea from my gaming session.</p>
          <h1 className="text-color-accent md:pt-4 p-4 md:p-0 md:text-xl font-bold">Fun Fact about me</h1>
          <ol className="text-color-accent space-y-2">
            <li>Got TOEFL prediction score 550 not even fully lock in.</li>
            <li>Ambitious boy, who want to pursue <span className="font-bold"> Master Degree of Computer Science</span> (because i got accepted in Information System Degree, it's still not enough from what i expected)</li>
            <li>Have 2 different personality, the difference is like between heaven and earth.</li>
            <li>A secret keeper, my mouth really tight to spill out my friends secret :D .</li>
            <li>Having High GPA 3.69/4.00 equivalent to 2:1 in UK Terms, while still Looking for Work (anyone maybe who interested on me ('-')b)</li>
            <li>Easy-going Person, if i'm knowing you in-person very well.</li>
            <li>A "nerd" gamer / tech savvy(?) . </li>
          </ol>
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
            
          <Image src={coverImg} width={265} height={265} style={{objectFit:"contain"}} alt="cover_img" className="rounded-lg"/>

          { /*Parent div for this section*/} </section>

{/* About*/}
        <section className="pt-20 w-full" id="about">
          
        { /*Parent div for this section*/}<div className="flex-col justify-center items-center space-y-4">

           <div className="relative flex bg-color-secondary rounded-lg p-1.5 w-10/12 md:w-6/12 mx-auto overflow-hidden">
      {/* Sliding background */}
      <div
        className="absolute top-1 bottom-1 bg-color-primary rounded-lg transition-transform duration-300 ease-in-out w-[48.25%] md:w-[49.25%]"
        style={{
          transform: isEducation ? "translateX(100%)" : "translateX(0%)",
        }}
      />

      {/* Buttons */}
      <button
        className={`relative z-10 rounded-xl font-semibold text-xl w-full transition-colors duration-300 ${
          !isEducation ? "text-color-accent" : "text-color-accent/70"
        }`}
        onClick={() => handleContent("work")}
      >
        Work
      </button>

      <button
        className={`relative z-10 rounded-xl font-semibold text-xl w-full transition-colors duration-300 ${
          isEducation ? "text-color-accent" : "text-color-accent/70"
        }`}
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
             <Image className="mt-4 rounded-full" style={{objectFit:"contain"}} src={UKDW} width={100} height={100} alt="Campus_logo_UKDW"/>
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
              <Image className="ImagesBW" src={PHPImage} width={32} height={32} alt="PHP"/>
                <p className="text-color-accent">PHP</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={MySQLImage} width={32} height={32} alt="MySQL"/>
                <p className="text-color-accent">MySQL</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={PyImage} width={32} height={32} alt="Python"/>
                <p className="text-color-accent">Python</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={JavaImage} width={32} height={32} alt="Java"/>
                <p className="text-color-accent">Java</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={CSharpImage} width={32} height={32} alt="C#"/>
                <p className="text-color-accent">C#</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={FlutterImage} width={32} height={32} alt="Dart"/>
                <p className="text-color-accent">Dart</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="ImagesBW" src={GolangImage} width={32} height={32} alt="Go"/>
                <p className="text-color-accent">Go</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image className="bg-color-accent" src={NJSImage} width={32} height={32} alt="Next.js"/>
                <p className="text-color-accent">Next.js</p>
                </div>
              </div>

            </div>
            { /*Parent div for this section*/} </div>
         
        </section>
        {/* End of About Section*/}
        
        {/*Portfolio Section */}
        <section id="portfolio" className="md:w-7/12 mx-auto">
        <div className="pt-24">
            <h1 className="text-color-accent font-bold text-3xl text-center">Projects</h1>
        </div>
    

 <nav className="relative text-color-accent text-sm md:text-lg p-1.5 mt-12 mx-auto md:mt-16 border border-color-accent rounded-xl font-bold max-w-xs md:max-w-3xl">
      <div className="flex justify-evenly relative">
        {/* Sliding Indicator */}
        <div
          className="absolute top-1 bottom-1 bg-color-accent rounded-lg transition-all ease-in-out duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />

        {/* Buttons */}
        {categories.map((cat, i) => (
        <button
  key={cat}
  ref={(el) => (btnRefs.current[i] = el)}
  onClick={() => setSelectedCategory(cat)}
  className={`relative z-10 w-16 md:w-32 text-center px-1 py-1
              whitespace-normal break-words leading-tight md:leading-normal
              ${
                selectedCategory === cat
                  ? "text-color-primary"
                  : "hover:text-color-accent"
              }`}
>
  {cat}
</button>

        ))}
      </div>
    </nav>




      {/* Projects Grid */}
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center p-12">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="flex flex-col h-full border rounded-lg p-1">
            {/* Special Coffee Sales with Modal */}
            {project.id === 1 ? (
              <div
                onClick={() => openModal(index)}
                className="relative cursor-pointer group"
              >
                <Image
                  src={project.image}
                  width={500}
                  height={500}
                  alt={project.title}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    Click for more details
                  </span>
                </div>
              </div>
            ) : (
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={project.title}
                className="rounded-lg"
              />
            )}

            <h1 className="text-color-accent text-2xl p-2">{project.title}</h1>
            <h6 className="text-color-accent p-2">{project.description}</h6>
            <h2 className="text-color-accent text-lg p-2">{project.category}</h2>

            <div className="grid grid-cols-3 p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
              {project.languages.map((lang) => (
                <div key={lang} className="bg-color-accent rounded-lg p-1">
                  {lang}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Coffee Sales */}
     {/* Modal for Coffee Sales */}
{isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    {/* Close button */}
    <button
      onClick={closeModal}
      className="absolute top-5 right-5 text-white text-3xl"
    >
      &times;
    </button>
{/* Prev button */}
      <button
        onClick={prevImage}
        className="absolute z-10 left-1 md:left-12 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-black p-2 rounded-full"
      >
        <CaretLeft size={24} weight="bold"/>
      </button>
    <div className="relative w-[90%] max-w-4xl flex flex-col items-center">
      

      {/* Main Image */}
      <Image
        src={projects[currentIndex].modalImages[currentModalIndex].src}
        alt={projects[currentIndex].modalImages[currentModalIndex].description}
        width={1000}
        height={800}
        className="rounded-lg object-contain w-full h-auto"
      />

      {/* Image description */}
      <p className="text-white text-2xl text-center mt-4 px-4 max-w-2xl">
        {projects[currentIndex].modalImages[currentModalIndex].description}
      </p>
    </div>
    
      {/* Next button */}
      <button
        onClick={nextImage}
        className="absolute z-10 right-1 md:right-12 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 text-black p-2 rounded-full"
      >
        <CaretRight size={24} weight="bold"/>
      </button>
  </div>
)}


    </section>
        {/*End of Portfolio Section */}
        
         </div>
    </>
  );
};

export default Home;
