"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BOOKING TICKECT",
    description: "Project created using React.js, CSS, Python, and Django REST API.",
    image: "/images/projects/novair.png",
    tag: ["All", "Web"],
    gitUrl: "https://novair.am/",
    previewUrl: "https://novair.am/",
  },
  {
    id: 2,
    title: "GOOD LACK Website",
    description: "Project created using HTML, JS, CSS",
    image: "/images/projects/good_lack.png",
    tag: ["All", "Web"],
    gitUrl: "https://goodlack.vercel.app/",
    previewUrl: "https://goodlack.vercel.app/",
  },
  {
    id: 5,
    title: "FAST FOOD",
    description: "REACT JS and TAILWIND.css",
    image: "/images/projects/food.png",
    tag: ["All", "Web"],
    gitUrl: "https://food-lime-nu.vercel.app/",
    previewUrl: "https://food-lime-nu.vercel.app/",
  },
   {
    id: 6,
    title: "HTML BOSSTRAP JS Roadmap",
    description: "CRUD operations",
    image: "/images/projects/crud.png",
    tag: ["All", "Web"],
    gitUrl: "https://crud-js-amber.vercel.app/",
    previewUrl: "https://crud-js-amber.vercel.app/",
  },
  {
    id: 3,
    title: "Motors",
    description: "This test booking site was created with react js for the styles used scss.The data is stored on the server json locally This project was scss with",
    image: "/images/projects/motors.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Artak6254/Motors",
    previewUrl: "https://github.com/Artak6254/Motors",
  },
  {
    id: 4,
    title: "TOUR DESTINACION",
    description: "This test booking site was created with react js for the styles used scss.The data is stored on the server json locally This project was scss with",
    image: "/images/projects/shelby.png",
    tag: ["All"],
    gitUrl: "https://github.com/Artak6254/shelby",
    previewUrl: "https://github.com/Artak6254/shelby",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
