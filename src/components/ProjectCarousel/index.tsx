import { useEffect, useState } from "react";
import { Project } from "./Works";

export default function ProjectsCarousel ({projectList}: {projectList: Project[]}) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const length = projectList.length;
    const intervalID = setInterval(() => {
      if (index === length - 1) setIndex(0);
      else setIndex(prev => prev + 1);
    }, 5000)
    return() => clearInterval(intervalID);
  }, [index, projectList]);
  const next = () => {
    if (index >= length - 1) setIndex(0);
    else setIndex((prev) => prev + 1);
  }
  const prev = () => {
    if (index === 0) setIndex(length - 1);
    else setIndex((prev) => prev - 1);
  }
  return (
    <div>
      <Project project={projectList[index]} next={next} prev={prev} />
    </div>
  )
}