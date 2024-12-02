import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  client: string;
  duration: string;
  technologies: string;
  liveLink: string;
  github: string;
  image: string;
}

interface ProjectProps {
  project: Project;
  next: () => void;
  prev: () => void;
}
export const Project: React.FC<ProjectProps> = ({ project, next, prev }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 leading-8 tracking-wide">
      <div className="p-5 w-full">
        <Image
          width={400}
          height={400}
          layout="responsive"
          src={project.image}
          alt="project.title"
        />
      </div>
      <div className="p-5 block space-x-4">
        <h2 className="dm-mono-medium ml-4 dark:text-white">{project.title}</h2>
        <p className="dm-mono-light-italic dark:text-white">
          {project.description}
        </p>
        <span className="text-custom-red dark:text-custom-orange dm-mono-regular-italic">
          Project Info
        </span>
        <div className="grid grid-cols-1">
          <div className="border-y border-slate-900 flex justify-between py-3">
            <p className="dark:text-white text-custom-red pr-2">Client</p>
            <p className="dark:text-custom-white ">{project.client}</p>
          </div>
          <div className="border-y border-slate-900 flex justify-between py-3">
            <p className="dark:text-white text-custom-red pr-2">Duration</p>
            <p className="dark:text-custom-white ">{project.duration}</p>
          </div>
          <div className="border-y border-slate-900 flex justify-between py-3">
            <p className="dark:text-white text-custom-red pr-2">Technologies</p>
            <p className="dark:text-custom-white ">{project.technologies}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between py-3 cursor-pointer place-items-end">
          <a
            href={project.liveLink}
            target="blank"
            className="flex space-x-1 p-3 border-b border-slate-800 dark:border-custom-white dark:text-custom-white"
          >
            <span>Live Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            href={project.github}
            target="blank"
            className="flex space-x-1 dark:text-custom-white p-3 border-b border-slate-800 dark:border-custom-white"
          >
            <svg
              className="w-6 h-6 text-slate-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Github</span>
          </a>

          <div className="flex space-x-2">
            <div
              className="rounded-full size-fit p-3 bg-deep-green dark:bg-custom-green hover:opacity-50"
              onClick={() => prev()}
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </div>
            <div
              className="rounded-full size-fit p-3 bg-deep-green dark:bg-custom-green hover:opacity-50"
              onClick={() => next()}
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
