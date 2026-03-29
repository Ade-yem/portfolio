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
import { WebsiteDevelopment } from "@/components/icons/web";
import { Database } from "@/components/icons/database";
import { Api } from "@/components/icons/api";
import { PerformanceOptimization } from "@/components/icons/performance";
import { Fintech } from "@/components/icons/fintech";
import { AI } from "@/components/icons/ai";

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
              <WebsiteDevelopment />
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
              <Database />
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
              <Api />
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
              <AI />
              <h3 className="dm-mono-medium text-lg dark:text-white">
                Integrating AI
              </h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Boost your applications with AI for improved efficiency,
                automation, and enhanced user experience
              </p>
            </div>
            <div className="card rounded-md inline-block space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group">
              <PerformanceOptimization />
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
              <Fintech />
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

        <section
          id="resume"
          className="card dark:bg-dark-bg bg-white rounded-md p-4"
        >
          <div className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse space-x-2">
            <ul className="list-disc">
              <li>Education</li>
            </ul>
          </div>
          <h2 className="text-black dark:text-white text-3xl p-5">Education</h2>
          <div className="">
            <BorderedList data={details.education} />
          </div>
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
