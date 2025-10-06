import React, { useContext } from "react";
import CircularGallery from "./ProjectCircular";
import { AppContext } from "../../context/datacontext";
import prof from "../../assets/images/project_bg-01-01.png";
import pers from "../../assets/images/personal_bg-01.png";
import SplitText from "../SplitText";
const ProjectsAll = () => {
  const { projects } = useContext(AppContext);
  const professionalProjects = projects || [];
  const items = professionalProjects.map((item) => {
    return {
      image: `${item.category === "Professional" ? prof : pers}`,
      text: item.text,
      path: `/projects/case-study/${item.slug}`,
    };
  });

 
  return (
    <>
      <div>
        <h2 className="text-4xl flex justify-center items-center font-bold px-8 text-center  pt-20">
          <SplitText
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            className=""
            text="Professional Journey"
          />
        </h2>
        <CircularGallery items={items} textColor={`#ff7700`} />
      </div>
    </>
  );
};

export default ProjectsAll;
