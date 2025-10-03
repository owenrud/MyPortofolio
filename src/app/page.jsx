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
import uimg1 from "@/app/ubuntu1.png";
import uimg2 from "@/app/ubuntu2.png";
import f1 from "@/app/feo1.png";
import f2 from "@/app/feo2.png";
import f3 from "@/app/feo3.png";
import a1 from "@/app/arch1.png";
import a2 from "@/app/arch2.png";
import a3 from "@/app/arch3.png";
import Linux from "@/app/linux.png"
import { BuildingOffice, Envelope, FileArrowDown, GithubLogo, HandWaving, LinkedinLogo,CaretLeft,CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import NavbarComponent from "@/Components/Navbar";
import React, { useState,useRef, useEffect } from "react"
import StarBackground from "@/Components/Misc";



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
      hasModal : false,
    },
    {
      id: 3,
      title: "Prototype Educational Game",
      description: "Prototype educational game inspired by Persona.",
      category: "Game Development",
      languages: ["Unity", "C#", "3D Rendering", "Blender"],
      image: img3,
      hasModal : false,
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "My portfolio website to showcase my projects and skills.",
      category: "Web Development",
      languages: ["Next.js", "React", "TailwindCSS"],
      image: img8,
      hasModal : false,
    },
    {
      id : 5,
      title: "Volunteer Recruitment Website",
      description: "Volunteer Recruitment is a platform for university students who seeking a volunteer job in university, having features similar to popular job site.",
      category: "Web Development",
      languages: ["Laravel", "Bootstrap", "Javascript","MySQL","CSS"],
      image: img4,
      hasModal : false,
    },
    {
      id : 6,
      title: "Shuttle Bus Website",
      description: "Shuttle Bus is a platform that allow users freely to choose and booking a shuttle bus with their needs.",
      category: "Web Development",
      languages: ["Laravel", "Bootstrap", "Javascript","MySQL","CSS"],
      image: img1,
      hasModal : false,
    },
    { id : 7,
      title: "Ubuntu OS",
      description: "Learning and Exploring Ubuntu OS",
      category: "Linux",
      languages: ["Ubuntu","Linux"],
      image: uimg1,
      hasModal : true,
      modalImages:[
        {src :uimg1, description : "Ubuntu Installed"},
      { src: uimg2, description: "Exploring Ubuntu OS" },
      ] ,
    },
    {
      id : 8,
      title: "Feodora OS",
      description: "Exploring and Customizing Feodora OS",
      category: "Linux",
      languages: ["Feodora","Linux"],
      image: f1,
      hasModal : true,
      modalImages:[
        {src :f1, description : "Feodora Installed"},
      { src: f2, description: "Exploring Feodora OS" },
      {src: f3, description : "Customizing Feodora OS"},
      ] ,
    },
    {
      id : 9,
      title: "Arch Linux",
      description: "Learning and Exploring Arch Linux",
      category: "Linux",
      languages: ["Arch Linux","Linux"],
      image: a1,
      hasModal : true,
      modalImages:[
        {src :a1, description : "Arch Linux + Hyprland Installed"},
      { src: a2, description: "Exploring Hyprland" },
      {src : a3, description: "Customizing Hyprland"}
      ] ,
    }
    // ... add more projects
  ];

  const categories = ["All", "Data Analyst", "Game Development", "Web Development","Linux"];

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

const prevImage = () => {
  setCurrentModalIndex((prev) =>
    prev === 0
      ? filteredProjects[currentIndex].modalImages.length - 1
      : prev - 1
  );
};

const nextImage = () => {
  setCurrentModalIndex((prev) =>
    prev === filteredProjects[currentIndex].modalImages.length - 1
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

    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1); // 0 → 1
      setScrollY(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
    
      <div className="bg-gradient-to-t from-color-secondary to-color-primary justify-center items-center h-screen overflow-auto">
      <NavbarComponent/>
      <StarBackground/>
      { /*Parent div for this section*/} <section className="flex flex-col shadow-md bg-color-secondary/20 rounded-xl backdrop-blur-sm md:p-12 md:flex-row space-x-4 justify-center items-center md:mt-12 md:w-8/12 md:mx-auto" id="home">
        <div className="flex flex-col pt-12 space-y-2">
        <div className="flex p-4 md:p-0 space-x-2 mt-6">
            <h1 className="bg-gradient-to-r from-color-primary to-color-accent2 bg-clip-text inline-block text-transparent font-bold text-3xl md:text-3xl">hi owen here </h1><HandWaving className="text-color-primary" size={50}/>
            </div>
          <div className="flex-1 md:space-x-2 p-4 md:p-0">
  <h3 className="text-color-primary font-semibold md:text-xl">
    23歳(years) Graduate from Information System Major, got{" "}
    <span className="bg-gradient-to-r from-color-primary to-color-accent2 bg-clip-text inline-block text-transparent font-bold">
      Bachelor of Computer Science (B.C.S)
    </span>
    , A Data science and Back-end developer Enthusiast from Indonesia{" "}
    <Image
      src={Indonesia}
      width={20}
      height={20}
      alt="Indonesia Flag"
      className="inline-block ml-1"
      style={{ objectFit: "contain" }}
    />
  </h3>
</div>

          
          <p className="text-color-primary font-semibold md:pt-4 p-4 md:p-0 md:text-lg">I'm enjoy to develop a full-stack website, while have love and hate relationship with analyzing data, also frequently got sudden problem solving idea from my gaming session.</p>
          <h1 className="text-color-accent2 md:pt-4 p-4 md:p-0 md:text-xl font-bold">Fun Fact about me</h1>
          <ol className="text-color-primary md:text-lg font-semibold space-y-2">
            <li>Got TOEFL prediction score 550 not even fully lock in.</li>
            <li>Ambitious boy, who want to pursue <span className="bg-gradient-to-r from-color-primary to-color-accent2 bg-clip-text inline-block text-transparent font-bold"> Master Degree of Computer Science</span> (because i got accepted in Information System Degree, it's still not enough from what i expected)</li>
            <li>Have 2 different personality, the difference is like between heaven and earth.</li>
            <li>A secret keeper, my mouth really tight to spill out my friends secret :D .</li>
            <li>Having High GPA 3.69/4.00 equivalent to 2:1 in UK Terms, while still Looking for Work (anyone maybe who interested on me ('-')b)</li>
            <li>Easy-going Person, if i'm knowing you in-person very well.</li>
            <li>A "nerd" gamer / tech savvy(?) . </li>
          </ol>
          <div className="flex text-color-primary space-x-4 md:pt-4 ml-4 pb-8 md:ml-0 md:pb-0 items-center">
            <div className="bg-gradient-to-r from-color-primary via-color-accent2 to-color-accent font-bold p-0.5 rounded-lg bg-[length:400%_400%] animate-gradient-fancy">
              <a className="flex flex-row font-bold gap-2 justify-center items-center w-full bg-color-secondary rounded p-2" href="./Resume.pdf" target="_blank">
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
            
           <div className="relative flex bg-color-secondary/25 backdrop-blur-sm rounded-full border border-color-accent2 p-2.5 w-10/12 md:w-8/12 mx-auto overflow-hidden">
      {/* Sliding background */}
      <div
        className="absolute top-1 bottom-1 bg-color-secondary rounded-full transition-transform duration-300 ease-in-out w-[48.25%] md:w-[49%]"
        style={{
          transform: isEducation ? "translateX(100%)" : "translateX(0%)",
        }}
      />

      {/* Buttons */}
      <button
        className={`relative z-10 rounded-xl font-semibold text-xl w-full transition-colors duration-300 ${
          !isEducation ? "text-color-primary" : "text-color-accent hover:text-color-accent2 hover:scale-105 transition-all duration-150 ease-out"
        }`}
        onClick={() => handleContent("work")}
      >
        Work
      </button>

      <button
        className={`relative z-10 rounded-xl font-semibold text-xl w-full transition-colors duration-300 ${
          isEducation ? "text-color-primary" : "text-color-accent hover:text-color-accent2 hover:scale-105 transition-all duration-150 ease-out"
        }`}
        onClick={() => handleContent("education")}
      >
        Education
      </button>
    </div>
            <div className="bg-gradient-to-r from-color-primary via-color-accent2 to-color-accent p-0.5 mx-auto md:w-8/12 rounded-lg bg-[length:400%_400%] animate-gradient-fancy">
            <div className="flex flex-col bg-color-secondary backdrop-blur-sm space-x-4 space-y-4 rounded-lg p-4 md:p-8 mx-auto">
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
             <p className="text-color-accent2 text-sm md:text-lg">Aug 2020 - Jul 2024</p>
             <p className="text-color-accent text-lg">Universitas Kristen Duta Wacana</p>
             <p className="bg-gradient-to-r from-color-primary to-color-accent text-transparent bg-clip-text text-md md:text-lg font-bold">Sarjana Komputer (S.Kom) = Bachelor of Computer Science (B.C.S)</p>
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
<h1 className="mt-8 text-color-accent md:text-lg">Tech Used</h1>
<div className="flex flex-row gap-8 max-w-md mt-4">
<Image src={PHPImage} width={32} height={32} alt="PHP"/>
 <Image  src={MySQLImage} width={32} height={32} alt="MySQL"/>
 <Image  src={FlutterImage} width={32} height={32} alt="Dart"/>
</div>
</div>
</div>
/* End of Work Content */
)}
             
              {/*Content */}
              
            <div>
              
            </div>
            </div>
            </div>
            <div className="flex-col mx-auto bg-gradient-to-b from-color-primary to-color-accent2 font-bold text-transparent bg-clip-text md:w-8/12">
              <p className="p-2 text-3xl font-bold mb-4">Tech Stack</p>
              <div className="grid p-4 bg-color-secondary/20 border border-color-accent2 shadow-lg text-color-primary backdrop-blur-sm rounded-xl grid-cols-2 md:grid-cols-6 gap-4">
                <div className="flex flex-row items-center space-x-2">
              <Image src={PHPImage} width={72} height={72} alt="PHP"/>
                <p>PHP</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={MySQLImage} width={72} height={72} alt="MySQL"/>
                <p >MySQL</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={PyImage} width={72} height={72} alt="Python"/>
                <p >Python</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={JavaImage} width={72} height={72} alt="Java"/>
                <p >Java</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={CSharpImage} width={72} height={72} alt="C#"/>
                <p >C#</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={FlutterImage} width={72} height={72} alt="Dart"/>
                <p >Dart</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={GolangImage} width={72} height={72} alt="Go"/>
                <p >Go</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image src={NJSImage} width={72} height={72} alt="Next.js"/>
                <p >Next.js</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                <Image  src={Linux} width={72} height={72} alt="Linux"/>
                <p >Linux</p>
                </div>
              </div>

            </div>
            { /*Parent div for this section*/} </div>
         
        </section>
        {/* End of About Section*/}
        
        {/*Portfolio Section */}
        <section id="portfolio" className="md:w-7/12 mx-auto">
        <div className="pt-24">
            <h1 className="bg-gradient-to-b from-color-accent to-color-accent2 text-transparent bg-clip-text font-bold text-3xl text-center">Projects</h1>
        </div>
    

 <nav className="relative bg-color-secondary/25 backdrop-blur-sm text-color-accent2 text-sm md:text-lg p-1.5 mt-12 mx-auto md:mt-16 border border-color-accent rounded-xl font-bold max-w-sm md:max-w-3xl">
      <div className="flex justify-evenly relative">
        {/* Sliding Indicator */}
        <div
          className="absolute top-1 bottom-1 bg-color-secondary rounded-lg transition-all ease-in-out duration-300"
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
  className={`relative z-10 w-16 md:w-48 text-center px-1 py-1
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
      <div className="backdrop-blur-sm flex grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center p-6 mt-4 md:p-12">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="flex flex-col h-full border border-color-accent bg-gradient-to-b from-color-accent to-color-secondary rounded-lg p-1">
            {/* Special Coffee Sales with Modal */}
            {project.hasModal ? (
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

            <h1 className="bg-gradient-to-b from-color-accent to-color-accent2 font-bold text-transparent bg-clip-text text-2xl p-2">{project.title}</h1>
            <h6 className="bg-gradient-to-b from-color-primary to-color-accent2 font-bold text-transparent bg-clip-text p-2">{project.description}</h6>
            <h2 className="bg-gradient-to-r from-color-primary to-color-secondary font-bold text-transparent bg-clip-text text-lg p-2">{project.category}</h2>

            <div className="grid grid-cols-3 p-4 mt-4 mb-2 gap-4 justify-center items-center text-center">
              {project.languages.map((lang) => (
                <div key={lang} className="bg-gradient-to-b from-color-accent to-color-accent2 text-color-secondary font-semibold shadow-xl rounded-lg p-1">
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
  src={filteredProjects[currentIndex].modalImages[currentModalIndex].src}
  alt={filteredProjects[currentIndex].modalImages[currentModalIndex].description}
  width={1000}
  height={800}
  className="rounded-lg object-contain w-full h-auto"
/>


      {/* Image description */}
      <p className="text-white text-2xl text-center mt-4 px-4 max-w-2xl">
        {filteredProjects[currentIndex].modalImages[currentModalIndex].description}
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
