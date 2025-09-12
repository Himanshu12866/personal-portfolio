import React, { useContext } from "react";
import CircularGallery from "./ProjectCircular";
import { AppContext } from "../../context/datacontext";

const ProjectsAll = () => {
  const { darkMode, projects } = useContext(AppContext);
  const professionalProjects = projects?.professinalprojects || [];
  console.log("Professional Projects:", professionalProjects);
  const items = professionalProjects.map(item => {
    return {
      image: item.image,
      text: item.text,
      path: item.path
    };
  });

console.log(items)
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center pt-20">Professional Journey</h2>
        <CircularGallery  items={items} textColor={`#ff7700`} />
      </div>
    </>
  );
};

export default ProjectsAll;
