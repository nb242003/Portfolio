"use client";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import proj1 from "../assests/hos.jpg";
import proj2 from "../assests/sor.png";
import proj3 from "../assests/todo.png";

const projects = [
  {
    title: "Hospital-Management-System",
    desc: "The project Hospital Management system includes registration of patients, storing their details into the system. The software has the facility to give a unique id for every patient and stores the details of every patient",
    devStack: "HTML, CSS, React, MySQL, PHP",
    git: "https://github.com/nb242003/Hospital-Management-System",
    src: proj1
  },
  {
      "title": "Sorting Visualizer",
      "desc": "A web-based application that visually demonstrates different sorting algorithms. Users can interact with the interface to see how various algorithms like Bubble Sort, Quick Sort, and Merge Sort work in real-time",
      "devStack": "HTML, CSS, Javascript",
      "git": "https://github.com/nb242003/Sorting-visualizer",
      "src": proj2     
  },
  {
      "title": "To-Do List",
      "desc": "A simple and interactive To-Do List application that allows users to add, edit, and delete tasks. The application helps manage daily tasks efficiently, with a clean user interface and real-time updates",
      "devStack": "HTML, CSS, React",
      "git": "https://github.com/nb242003/To-Do-List-React-",
      "src": proj3
  },
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-16 px-4 sm:px-6 lg:px-8 mt-16" id="portfolio">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold text-center my-12">
         <span className="text-orange-400">Projects</span>
      </h1>

      <div className="space-y-24 max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col-reverse md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-12 md:gap-16`}
          >
            <div className="space-y-4 max-w-full md:max-w-[550px] text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl md:text-7xl text-white/70">{`0${index + 1}`}</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{project.title}</h3>
              <p className="text-base sm:text-lg text-white/70">{project.desc}</p>
              <p className="text-lg sm:text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href={project.git} className="text-sm md:text-base text-gray-300 hover:text-white">
                  Git
                </a>
              </div>
            </div>

            <div className="w-full md:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative">
              <Image
                src={project.src}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg border border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
