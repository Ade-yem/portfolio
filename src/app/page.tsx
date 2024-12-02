"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Contact } from "@/components/ui/Contact";
import { Counter } from "@/components/ui/Counter";
import { Clients, Experience, Projects } from "@/components/ui/icons";
import { ReverseCarousel, StackCarousel } from "@/components/ui/stackCarousel";
import details from "@/services/education.json";
import { BorderedList } from "@/components/borderedList";
import projects from "@/services/projects.json";
import ProjectsCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <div className="max-w-[1000px] py-6 px-4 mx-auto flex flex-col space-y-3 tracking-wide justify-center">
      <Header />
      <main className="w-full rounded-md space-y-2">
        <section
          id="about"
          className="dark:bg-dark-bg bg-white rounded-md min-h-screen"
        >
          <Hero />
        </section>
        <section
          className="dark:bg-dark-bg bg-white rounded-md card"
          id="resume"
        >
          <div className="[background-size:_20px_20px;] p-4 bg-grid-like mx-auto grid grid-cols-1 base:grid-cols-3 gap-5 bg-center place-items-center min-h-64 w-full">
            <Counter
              icon={<Experience />}
              text="Years Experience"
              duration={2000}
              start={0}
              end={3}
            />
            <Counter
              icon={<Projects />}
              text="Projects Completed"
              duration={2000}
              start={0}
              end={15}
            />
            <Counter
              icon={<Clients />}
              text="Satisfied Customers"
              duration={2000}
              start={0}
              end={10}
            />
          </div>
        </section>
        <section
          className="flex flex-col justify-center items-center card dark:bg-dark-bg bg-white rounded-md space-y-4 p-[3em]"
          id="services"
        >
          <div className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse space-x-2">
            <ul className="list-disc">
              <li>Services</li>
            </ul>
          </div>
          <div className="text-black text-wrap dark:text-white text-lg p-2">
            <span>Designing solutions </span>
            <span className="text-slate-400 dark:text-custom-white">
              customized to meet your requirements
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <div>
                <svg
                  className="stroke-1 stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                  version="1.1"
                  id="Icons"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  width="40px"
                  height="40px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect
                      x="3"
                      y="5"
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      width="26"
                      height="22"
                    ></rect>{" "}
                    <line
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      x1="13"
                      y1="8"
                      x2="13"
                      y2="8"
                    ></line>{" "}
                    <line
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      x1="10"
                      y1="8"
                      x2="10"
                      y2="8"
                    ></line>{" "}
                    <line
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      x1="7"
                      y1="8"
                      x2="7"
                      y2="8"
                    ></line>{" "}
                    <line
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      x1="3"
                      y1="11"
                      x2="29"
                      y2="11"
                    ></line>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="dm-mono-medium text-lg dark:text-white">
                Web Development
              </h3>
              <p className="text-sm text-slate-800 dm-mono-light dark:text-custom-white text-wrap">
                Crafting visually appealing and user-friendly interfaces using
                <span className="text-custom-blue dark:text-custom-red">
                  {" "}
                  HTML
                </span>
                ,{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  CSS
                </span>
                ,{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  JavaScript
                </span>
                , and modern frameworks like{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  React
                </span>{" "}
                and
                <span className="text-custom-blue dark:text-custom-red">
                  NextJS
                </span>
                .
              </p>
            </div>
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <div>
                <svg
                  className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                  height="40px"
                  width="40px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 58 58"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M55.985,56.293l-6.798-6.797l6.483-3.242l-17.637-6.498l6.498,17.638l3.242-6.484l6.797,6.797 C54.767,57.902,55.022,58,55.278,58s0.512-0.098,0.707-0.293C56.376,57.316,56.376,56.684,55.985,56.293z M41.409,43.131 l9.232,3.402l-3.887,1.943l-1.943,3.888L41.409,43.131z"></path>{" "}
                      <path d="M26.722,41.185c-0.827,0-1.637-0.016-2.432-0.044c-0.483-0.018-0.95-0.049-1.422-0.076c-0.296-0.017-0.6-0.028-0.891-0.049 c-0.626-0.045-1.234-0.103-1.835-0.165c-0.118-0.012-0.242-0.021-0.359-0.034c-0.688-0.075-1.358-0.161-2.012-0.257 c-0.021-0.003-0.044-0.006-0.066-0.009c-3.382-0.5-6.284-1.261-8.554-2.167c-0.014-0.006-0.03-0.011-0.044-0.017 c-0.417-0.167-0.807-0.34-1.18-0.516c-0.045-0.021-0.093-0.042-0.138-0.064c-0.334-0.161-0.644-0.327-0.94-0.494 c-0.072-0.041-0.146-0.081-0.216-0.122c-0.258-0.151-0.493-0.306-0.718-0.461c-0.087-0.061-0.177-0.121-0.259-0.182 c-0.19-0.141-0.361-0.282-0.524-0.425c-0.09-0.079-0.18-0.157-0.261-0.237c-0.134-0.129-0.252-0.26-0.363-0.391 c-0.078-0.092-0.153-0.185-0.219-0.277c-0.088-0.123-0.163-0.246-0.23-0.369c-0.054-0.099-0.102-0.198-0.143-0.297 c-0.049-0.121-0.088-0.242-0.116-0.362c-0.038-0.162-0.079-0.325-0.079-0.485v-8.207c0.028,0.026,0.063,0.051,0.092,0.077 c0.219,0.191,0.44,0.382,0.69,0.566c3.767,2.85,11.301,5.063,22.219,5.063c10.873,0,18.386-2.196,22.169-5.028 c0.302-0.22,0.574-0.447,0.83-0.678c0,0,0,0,0,0l0,3.707c0,0.553,0.447,1,1,1s1-0.447,1-1v-7v-0.5v-12v-0.5 c0-0.162-0.047-0.309-0.115-0.444C50.417,3.769,39.916,0,26.722,0C13.527,0,3.026,3.769,1.837,8.74 C1.769,8.875,1.722,9.022,1.722,9.185v0.5v12v0.5v11.5v0.5v12c0,0.161,0.042,0.313,0.115,0.448 c1.139,4.833,10.691,7.68,19.81,8.364C21.672,54.999,21.697,55,21.723,55c0.519,0,0.957-0.399,0.996-0.925 c0.041-0.551-0.371-1.031-0.922-1.072c-11.114-0.834-17.591-4.219-18.043-6.98c-0.008-0.045-0.019-0.088-0.032-0.131v-8.414 c0.028,0.026,0.063,0.051,0.092,0.077c0.219,0.191,0.44,0.382,0.69,0.566c3.767,2.85,11.301,5.063,22.219,5.063 c0.553,0,1-0.447,1-1S27.274,41.185,26.722,41.185z M4.323,13.981c0.3,0.236,0.624,0.469,0.975,0.696 c0.073,0.047,0.155,0.093,0.231,0.14C5.823,15,6.134,15.18,6.461,15.355c0.121,0.065,0.242,0.129,0.368,0.193 c0.365,0.186,0.748,0.366,1.151,0.542c0.066,0.029,0.126,0.059,0.192,0.087c0.469,0.199,0.967,0.389,1.486,0.572 c0.143,0.051,0.293,0.099,0.44,0.149c0.412,0.139,0.838,0.272,1.279,0.401c0.159,0.046,0.315,0.094,0.478,0.139 c0.585,0.162,1.189,0.316,1.823,0.458c0.087,0.02,0.181,0.037,0.269,0.056c0.559,0.122,1.139,0.235,1.735,0.34 c0.202,0.036,0.407,0.07,0.613,0.104c0.567,0.093,1.151,0.179,1.75,0.257c0.154,0.02,0.302,0.042,0.457,0.062 c0.744,0.09,1.513,0.167,2.305,0.233c0.195,0.016,0.398,0.028,0.596,0.042c0.633,0.046,1.28,0.084,1.942,0.114 c0.241,0.011,0.481,0.022,0.727,0.03c0.863,0.03,1.74,0.05,2.65,0.05s1.788-0.021,2.65-0.05c0.245-0.008,0.485-0.02,0.727-0.03 c0.662-0.03,1.309-0.068,1.942-0.114c0.198-0.015,0.401-0.026,0.596-0.042c0.791-0.065,1.561-0.143,2.305-0.233 c0.156-0.019,0.303-0.042,0.457-0.062c0.599-0.078,1.182-0.164,1.75-0.257c0.206-0.034,0.411-0.068,0.613-0.104 c0.596-0.105,1.176-0.218,1.735-0.34c0.088-0.019,0.182-0.036,0.269-0.056c0.634-0.142,1.238-0.296,1.823-0.458 c0.163-0.045,0.319-0.092,0.478-0.139c0.441-0.128,0.867-0.262,1.279-0.401c0.147-0.05,0.297-0.098,0.44-0.149 c0.518-0.184,1.017-0.374,1.486-0.572c0.067-0.028,0.127-0.059,0.192-0.087c0.403-0.176,0.786-0.356,1.151-0.542 c0.125-0.064,0.247-0.128,0.368-0.193c0.327-0.175,0.638-0.354,0.932-0.538c0.076-0.047,0.158-0.093,0.231-0.14 c0.351-0.227,0.675-0.459,0.975-0.696c0.075-0.06,0.142-0.12,0.214-0.18c0.13-0.108,0.267-0.215,0.387-0.324v8.207 c0,0.161-0.041,0.323-0.079,0.485c-0.028,0.121-0.067,0.241-0.116,0.362c-0.04,0.099-0.089,0.198-0.143,0.297 c-0.067,0.123-0.142,0.246-0.23,0.369c-0.066,0.092-0.141,0.185-0.219,0.277c-0.111,0.13-0.229,0.261-0.363,0.391 c-0.082,0.08-0.171,0.158-0.261,0.237c-0.163,0.143-0.334,0.284-0.524,0.425c-0.082,0.061-0.172,0.121-0.259,0.182 c-0.225,0.155-0.46,0.31-0.718,0.461c-0.069,0.041-0.144,0.082-0.216,0.122c-0.296,0.167-0.606,0.333-0.94,0.494 c-0.045,0.022-0.093,0.043-0.138,0.064c-0.373,0.176-0.763,0.349-1.18,0.516c-0.014,0.006-0.03,0.011-0.044,0.017 c-2.27,0.906-5.172,1.667-8.554,2.167c-0.021,0.003-0.044,0.005-0.066,0.009c-0.653,0.096-1.324,0.182-2.012,0.257 c-0.117,0.013-0.241,0.021-0.359,0.034c-0.602,0.062-1.21,0.12-1.835,0.165c-0.291,0.021-0.595,0.032-0.891,0.049 c-0.471,0.027-0.938,0.059-1.422,0.076c-0.795,0.028-1.605,0.044-2.432,0.044s-1.637-0.016-2.432-0.044 c-0.483-0.018-0.95-0.049-1.422-0.076c-0.296-0.017-0.6-0.028-0.891-0.049c-0.626-0.045-1.234-0.103-1.835-0.165 c-0.118-0.012-0.242-0.021-0.359-0.034c-0.688-0.075-1.358-0.161-2.012-0.257c-0.021-0.003-0.044-0.006-0.066-0.009 c-3.382-0.5-6.284-1.261-8.554-2.167c-0.014-0.006-0.03-0.011-0.044-0.017c-0.417-0.167-0.807-0.34-1.18-0.516 c-0.045-0.021-0.093-0.042-0.138-0.064c-0.334-0.161-0.644-0.327-0.94-0.494c-0.072-0.041-0.146-0.081-0.216-0.122 c-0.258-0.151-0.493-0.306-0.718-0.461c-0.087-0.061-0.177-0.121-0.259-0.182c-0.19-0.141-0.361-0.282-0.524-0.425 c-0.09-0.079-0.18-0.157-0.261-0.237c-0.134-0.129-0.252-0.26-0.363-0.391c-0.078-0.092-0.153-0.185-0.219-0.277 c-0.088-0.123-0.163-0.246-0.23-0.369c-0.054-0.099-0.102-0.198-0.143-0.297c-0.049-0.121-0.088-0.242-0.116-0.362 c-0.038-0.162-0.079-0.325-0.079-0.485v-8.207c0.12,0.109,0.257,0.216,0.387,0.324C4.181,13.861,4.248,13.922,4.323,13.981z M26.722,2c13.555,0,23,4.05,23,7.685c0,3.548-9.445,7.5-23,7.5s-23-3.952-23-7.5C3.722,6.05,13.167,2,26.722,2z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="dm-mono-medium text-lg dark:text-white">
                Database Management
              </h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Designing and managing databases with SQL and NoSQL technologies
                such as{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  MySQL
                </span>
                ,{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  Redis
                </span>
                , and{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  MongoDB
                </span>
                .
              </p>
            </div>
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <div>
                <svg
                  className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                  width="40px"
                  height="40px"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      id="api_2_"
                      d="M12.44,15.996c-0.42,0-0.721-0.112-0.903-0.336s-0.296-0.504-0.343-0.84h-0.07 c-0.159,0.448-0.42,0.784-0.784,1.008s-0.798,0.336-1.302,0.336c-0.766,0-1.36-0.196-1.785-0.588s-0.637-0.924-0.637-1.596 c0-0.681,0.25-1.204,0.749-1.568c0.499-0.364,1.276-0.546,2.331-0.546h1.428v-0.714c0-0.513-0.14-0.905-0.42-1.176 C10.424,9.705,9.995,9.57,9.416,9.57c-0.439,0-0.805,0.098-1.099,0.294s-0.539,0.457-0.735,0.784l-0.672-0.63 c0.196-0.392,0.508-0.726,0.938-1.001c0.429-0.275,0.97-0.413,1.624-0.413c0.877,0,1.559,0.214,2.044,0.643s0.728,1.024,0.728,1.788 v3.967h0.826v0.994C13.07,15.996,12.44,15.996,12.44,15.996z M9.22,15.211c0.28,0,0.537-0.032,0.77-0.098 c0.233-0.065,0.434-0.159,0.602-0.28c0.168-0.121,0.299-0.261,0.392-0.42s0.14-0.331,0.14-0.518v-1.19H9.64 c-0.644,0-1.113,0.093-1.407,0.28c-0.294,0.187-0.441,0.457-0.441,0.812v0.294c0,0.354,0.128,0.63,0.385,0.826 C8.434,15.114,8.781,15.211,9.22,15.211z M14.666,8.771h1.12v1.163h0.056c0.187-0.453,0.459-0.788,0.819-1.005 c0.359-0.217,0.791-0.326,1.295-0.326c0.448,0,0.854,0.089,1.219,0.266c0.363,0.177,0.674,0.429,0.931,0.756s0.452,0.724,0.588,1.19 c0.135,0.467,0.203,0.99,0.203,1.568s-0.068,1.101-0.203,1.568c-0.136,0.467-0.331,0.863-0.588,1.19s-0.567,0.579-0.931,0.756 s-0.771,0.266-1.219,0.266c-0.98,0-1.685-0.443-2.114-1.331h-0.056v3.962h-1.12C14.666,18.794,14.666,8.771,14.666,8.771z M17.648,15.169c0.635,0,1.134-0.199,1.498-0.598s0.546-0.921,0.546-1.569v-1.238c0-0.647-0.182-1.17-0.546-1.569 s-0.863-0.598-1.498-0.598c-0.252,0-0.492,0.035-0.721,0.105c-0.229,0.072-0.427,0.168-0.595,0.29s-0.301,0.27-0.399,0.443 c-0.098,0.174-0.147,0.359-0.147,0.556v2.702c0,0.234,0.049,0.443,0.147,0.626c0.098,0.183,0.231,0.338,0.399,0.464 s0.366,0.223,0.595,0.289C17.156,15.137,17.396,15.169,17.648,15.169z M23.346,7.078c-0.242,0-0.418-0.058-0.524-0.175 c-0.107-0.117-0.161-0.269-0.161-0.455V6.266c0-0.187,0.054-0.338,0.161-0.455c0.106-0.117,0.282-0.175,0.524-0.175 c0.243,0,0.418,0.058,0.525,0.175s0.161,0.269,0.161,0.455v0.182c0,0.187-0.054,0.338-0.161,0.455S23.589,7.078,23.346,7.078z M22.786,8.771h1.12v7.224h-1.12V8.771z M31,31.36H1v-0.72h30V31.36z M31,24.36H1c-0.199,0-0.36-0.161-0.36-0.36V1 c0-0.199,0.161-0.36,0.36-0.36h30c0.199,0,0.36,0.161,0.36,0.36v23C31.36,24.199,31.199,24.36,31,24.36z M1.36,23.64h29.28V1.36 H1.36V23.64z"
                    ></path>{" "}
                    <rect
                      id="_Transparent_Rectangle"
                      style={{ fill: "none" }}
                      width="32"
                      height="32"
                    ></rect>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="dm-mono-medium text-lg dark:text-white">
                API Development
              </h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Creating and integrating{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  RESTful APIs
                </span>{" "}
                to enable smooth communication between front-end and back-end
                systems.
              </p>
            </div>
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <div>
                <svg
                  className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                  width="40px"
                  height="40px"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568"
                      className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                      strokeOpacity="0.9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="dm-mono-medium text-lg dark:text-white">
                Integrating AI
              </h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Boost your applications with AI for improved efficiency,
                automation, and enhanced user experience
              </p>
            </div>
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <div>
                <svg
                  className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                  width="40px"
                  height="40px"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      style={{
                        strokeWidth: "1",
                        strokeDasharray: "none",
                      }}
                      transform="translate(-71.217 -81.133) scale(1.79263)"
                    >
                      {" "}
                      <path
                        d="M108 109s31-22 26-51c-29-4-50 26-50 26l-19 1-13 21 4 5 16-4 14 14-5 14 5 5 21.173-11.946z"
                        className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                        style={{
                          fill: "none",
                          strokeWidth: "6.69408",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeDasharray: "none",
                          strokeOpacity: "1",
                        }}
                      ></path>{" "}
                      <circle
                        cx="118.676"
                        cy="73.434"
                        r="6.527"
                        className="fill-slate-900 dark:fill-white group-hover:fill-custom-green"
                        style={{
                          display: "inline",
                          fillOpacity: 1,
                          stroke: "none",
                          strokeWidth: "1.30539",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 5,
                          strokeDasharray: "none",
                          strokeOpacity: "1",
                        }}
                      ></circle>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="dm-mono-medium text-lg dark:text-white">
                Performance Optimization
              </h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Improving the speed and performance of web applications to
                provide a better user experience. Work with{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  Nodejs
                </span>
                ,{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  Express
                </span>
                ,{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  Flask
                </span>{" "}
                and{" "}
                <span className="text-custom-blue dark:text-custom-red">
                  Django
                </span>
                .
              </p>
            </div>
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <div>
                <svg
                  className="stroke-slate-900 stroke-1 dark:stroke-white group-hover:stroke-custom-green"
                  width="40px"
                  height="40px"
                  viewBox="0 0 64 64"
                  id="Layer_1"
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"> </style>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path
                          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                          d="M43,30.7v15.5c0,1.5-1.2,2.7-2.7,2.7H14.7c-1.5,0-2.7-1.2-2.7-2.7V30.7c0-1.5,1.2-2.7,2.7-2.7h25.6 C41.8,28,43,29.2,43,30.7z"
                        ></path>{" "}
                        <line
                          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                          x1="12"
                          x2="43"
                          y1="33.5"
                          y2="33.5"
                        ></line>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path
                          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                          d="M20.1,24l1.9-7c0.4-1.5,1.9-2.3,3.4-1.9L50,21.7c1.5,0.4,2.3,1.9,1.9,3.4l-4,15"
                        ></path>{" "}
                        <line
                          className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                          x1="21.2"
                          x2="51.2"
                          y1="19.7"
                          y2="27.7"
                        ></line>{" "}
                      </g>{" "}
                    </g>{" "}
                    <circle
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      cx="37"
                      cy="43"
                      r="2"
                    ></circle>{" "}
                    <circle
                      className="stroke-slate-900 dark:stroke-white group-hover:stroke-custom-green"
                      cx="33"
                      cy="43"
                      r="2"
                    ></circle>{" "}
                  </g>
                </svg>
              </div>
              <h3 className="dm-mono-medium text-lg dark:text-white">
                Fintech Solutions
              </h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Developing scalable and secure payment solutions for fintech
                platforms tailored to your business needs
              </p>
            </div>
          </div>
          <p className="text-center dark:text-white">
            Excited to take on new projects and collaborate. Let&#39;s chat
            about your ideas.{" "}
            <span className="text-custom-blue dark:text-custom-red">
              Reach out!
            </span>
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4" id="resume">
          <article className="card dark:bg-dark-bg bg-white rounded-md p-4">
            <div className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse space-x-2">
              <ul className="list-disc">
                <li>Education</li>
              </ul>
            </div>
            <h2 className="text-black dark:text-white text-3xl p-5">
              Education
            </h2>
            <div className="">
              <BorderedList data={details.education} />
            </div>
          </article>
          <article className="card dark:bg-dark-bg bg-white rounded-md p-4">
            <div className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse space-x-2">
              <ul className="list-disc">
                <li>Research</li>
              </ul>
            </div>
            <h2 className="text-black dark:text-white text-3xl p-5">Research</h2>
            <div className="">
              <BorderedList data={details.research} />
            </div>
          </article>
        </section>
        <section className="card dark:bg-dark-bg bg-white rounded-md flex flex-col">
          <div className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse space-x-2">
            <ul className="list-disc">
              <li>Skills</li>
            </ul>
          </div>
          <span className="dm-mono-medium text-3xl text-black dark:text-white text-center">
            My Skills
          </span>
          <div className="grid grid-cols-1 md:divide-x md:grid-cols-2 p-4 base:p-10">
            <div className="p-4 base:p-10 flex flex-col justify-center space-y-4">
              <StackCarousel maxSize="400px" p="p-4" />
              <ReverseCarousel />
            </div>
            <div className="p-4 base:p-10 space-x-4">
              <ul className="list-disc marker:text-slate-800 leading-loose">
                <li className="whitespace-nowrap">
                  <span className="text-black dark:text-white">
                    Front-End:{" "}
                  </span>
                  <span className="text-slate-700 dark:text-slate-200 ">
                    HTML, CSS, JavaScript, React, Nextjs
                  </span>
                </li>
                <li className="text-wrap">
                  <span className="text-black dark:text-white">Back-End: </span>
                  <span className="text-slate-700 dark:text-slate-200">
                    Node.js, Express, Python, Django, Flask
                  </span>
                </li>
                <li className="text-wrap">
                  <span className="text-black dark:text-white">
                    Databases:{" "}
                  </span>
                  <span className="text-slate-700 dark:text-slate-200">
                    MySQL, Redis, MongoDB
                  </span>
                </li>
                <li className="text-wrap">
                  <span className="text-black dark:text-white">
                    Tools & Platforms:
                  </span>
                  <span className="text-slate-700 dark:text-slate-200">
                    Git, Netlify, Vercel, Render
                  </span>
                </li>
                <li className="text-wrap">
                  <span className="text-black dark:text-white">Others: </span>
                  <span className="text-slate-700 dark:text-slate-200">
                    RESTful APIs, Agile Methodologies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          className="card dark:bg-dark-bg bg-white rounded-md p-6 inline-block w-full"
          id="portfolio"
        >
          <div className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse space-x-2">
            <ul className="list-disc">
              <li>Projects</li>
            </ul>
          </div>
          <h2 className="text-black dark:text-white text-3xl p-5">
            My Recent Works
          </h2>
          <ProjectsCarousel projectList={projects} />
        </section>
        <section
          className="card dark:bg-dark-bg bg-white rounded-md p-4"
          id="contact"
        >
          <div className="m-auto">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
