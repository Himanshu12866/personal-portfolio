import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/datacontext'
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { projects } = useContext(AppContext);
  const [projectData, setProjectData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (projects && projects.length > 0) {
      const data = projects.find(item => item.slug === slug);
      setProjectData(data || null);
    }
  }, [slug, projects]);
  console.log("Project Data:", projectData, slug);
  return (
    <div>CaseStudy</div>
  )
}

export default CaseStudy