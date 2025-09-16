import React, { useContext } from "react";
import CircularGallery from "./ProjectCircular";
import { AppContext } from "../../context/datacontext";
import sliderImp from "../../assets/images/project_bg-01.png"
const ProjectsAll = () => {
  const { projects } = useContext(AppContext);
  const professionalProjects = projects || [];
  console.log("Professional Projects:", professionalProjects);
  const items = professionalProjects.map(item => {
    return {
      image: sliderImp,
      text: item.text,
      path: `/projects/case-study/${item.slug}`,
    };
  });

  console.log(items)
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center pt-20">Professional Journey</h2>
        <CircularGallery items={items} textColor={`#ff7700`} />
      </div>
    </>
  );
};

export default ProjectsAll;
