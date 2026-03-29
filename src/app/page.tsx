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
import { AI } from "@/components/icons/ai";

export default function Home() {
  return (
    <div className="max-w-[1000px] py-6 px-4 mx-auto flex flex-col space-y-3 tracking-wide justify-center">
      <Header />
      <main id="main-content" className="w-full rounded-md space-y-2">

        {/* ── Hero / About ─────────────────────────────────────── */}
        <section
          id="about"
          aria-label="About Adeyemi Adejumo"
          className="dark:bg-dark-bg bg-white rounded-md min-h-screen shadow-xl"
        >
          <Hero />
        </section>

        {/* ── Stats ────────────────────────────────────────────── */}
        <section
          aria-label="Career statistics"
          className="dark:bg-dark-bg bg-white rounded-md card shadow-xl"
          id="stats"
        >
          <div className="[background-size:_20px_20px;] p-4 bg-grid-like mx-auto grid grid-cols-1 base:grid-cols-3 gap-5 bg-center place-items-center min-h-64 w-full">
            <Counter icon={<Experience />} text="Years Experience" duration={2000} start={0} end={3} />
            <Counter icon={<Projects />} text="Projects Completed" duration={2000} start={0} end={15} />
            <Counter icon={<Clients />} text="Satisfied Customers" duration={2000} start={0} end={10} />
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section
          className="flex shadow-xl flex-col justify-center items-center card dark:bg-dark-bg bg-white rounded-md space-y-4 p-[3em]"
          id="services"
          aria-labelledby="services-heading"
        >
          <p className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse" aria-hidden="true">
            ● Services
          </p>
          <h2
            id="services-heading"
            className="text-black text-wrap dark:text-white text-2xl md:text-3xl p-2 font-bold text-center"
          >
            Designing solutions{" "}
            <span className="text-slate-400 dark:text-custom-white font-normal">
              customized to meet your requirements
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2" role="list">
            <article className="card rounded-md space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group transition-transform" role="listitem">
              <WebsiteDevelopment aria-hidden="true" />
              <h3 className="dm-mono-medium text-lg dark:text-white">Web Development</h3>
              <p className="text-sm text-slate-800 dm-mono-light dark:text-custom-white text-wrap">
                Crafting visually appealing and user-friendly interfaces using{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">HTML</strong>,{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">CSS</strong>,{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">JavaScript</strong>, and modern frameworks like{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">React</strong> and{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">NextJS</strong>.
              </p>
            </article>

            <article className="card rounded-md space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group transition-transform" role="listitem">
              <Database aria-hidden="true" />
              <h3 className="dm-mono-medium text-lg dark:text-white">Database Management</h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Designing and managing databases with SQL and NoSQL technologies such as{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">MySQL</strong>,{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">Redis</strong>, and{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">MongoDB</strong>.
              </p>
            </article>

            <article className="card rounded-md space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group transition-transform" role="listitem">
              <Api aria-hidden="true" />
              <h3 className="dm-mono-medium text-lg dark:text-white">API Development</h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Creating and integrating{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">RESTful APIs</strong>{" "}
                to enable smooth communication between front-end and back-end systems.
              </p>
            </article>

            <article className="card rounded-md space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group transition-transform" role="listitem">
              <AI aria-hidden="true" />
              <h3 className="dm-mono-medium text-lg dark:text-white">Integrating AI</h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Boost your applications with AI for improved efficiency, automation, and enhanced user experience.
              </p>
            </article>

            <article className="card rounded-md space-y-3 px-4 py-6 hover:-translate-y-3 shadow-md group transition-transform" role="listitem">
              <PerformanceOptimization aria-hidden="true" />
              <h3 className="dm-mono-medium text-lg dark:text-white">Performance Optimization</h3>
              <p className="text-sm text-slate-800 dark:text-custom-white text-wrap">
                Improving the speed and performance of web applications to provide a better user experience. Work with{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">Nodejs</strong>,{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">Express</strong>,{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">Flask</strong> and{" "}
                <strong className="text-custom-blue dark:text-custom-red font-semibold">Django</strong>.
              </p>
            </article>
          </div>

          <p className="text-center dark:text-white">
            Excited to take on new projects and collaborate. Let&apos;s chat about your ideas.{" "}
            <a href="#contact" className="text-custom-blue dark:text-custom-red underline underline-offset-2">
              Reach out!
            </a>
          </p>
        </section>

        {/* ── Resume / Education ───────────────────────────────── */}
        <section
          id="resume"
          aria-labelledby="education-heading"
          className="card shadow-xl dark:bg-dark-bg bg-white rounded-md p-4"
        >
          <p className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse" aria-hidden="true">
            ● Education
          </p>
          <h2 id="education-heading" className="text-black dark:text-white text-3xl p-5 font-bold">
            Education
          </h2>
          <div>
            <BorderedList data={details.education} />
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────────── */}
        <section
          aria-labelledby="skills-heading"
          className="card shadow-xl dark:bg-dark-bg bg-white rounded-md flex flex-col"
        >
          <p className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse" aria-hidden="true">
            ● Skills
          </p>
          <h2
            id="skills-heading"
            className="dm-mono-medium text-3xl text-black dark:text-white text-center font-bold"
          >
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:divide-x md:grid-cols-2 p-4 base:p-10">
            <div className="p-4 base:p-10 flex flex-col justify-center space-y-4" aria-label="Technology stack logos">
              <StackCarousel maxSize="400px" p="p-4" />
              <ReverseCarousel />
            </div>
            <div className="p-4 base:p-10">
              <dl className="leading-loose space-y-2">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-black dark:text-white font-bold shrink-0">Languages:</dt>
                  <dd className="text-slate-700 dark:text-slate-200">TypeScript, JavaScript, Python, SQL</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-black dark:text-white font-bold shrink-0">Frontend:</dt>
                  <dd className="text-slate-700 dark:text-slate-200">React.js, Next.js, Tailwind CSS, Shadcn UI</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-black dark:text-white font-bold shrink-0">Backend &amp; AI:</dt>
                  <dd className="text-slate-700 dark:text-slate-200">Node.js, Express.js, LangChain (LLM Orchestration), RAG Architecture</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-black dark:text-white font-bold shrink-0">Database &amp; ORMs:</dt>
                  <dd className="text-slate-700 dark:text-slate-200">PostgreSQL, MongoDB, Redis, MySQL, Prisma, Mongoose, Supabase</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-black dark:text-white font-bold shrink-0">DevOps &amp; Tools:</dt>
                  <dd className="text-slate-700 dark:text-slate-200">Docker, Git, AWS (SES/EC2), Vercel, Render, CI/CD Pipelines</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-black dark:text-white font-bold shrink-0">Others:</dt>
                  <dd className="text-slate-700 dark:text-slate-200">RESTful APIs, Agile Methodologies</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────── */}
        <section
          className="card shadow-xl dark:bg-dark-bg bg-white rounded-md p-6 inline-block w-full"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <p className="text-base flex justify-center items-center p-2 dark:text-custom-green text-deep-green animate-pulse" aria-hidden="true">
            ● Projects
          </p>
          <h2 id="projects-heading" className="text-black dark:text-white text-3xl p-5 font-bold">
            My Recent Works
          </h2>
          <ProjectsCarousel projectList={projects} />
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section
          className="card shadow-xl dark:bg-dark-bg bg-white rounded-md p-4"
          id="contact"
          aria-label="Contact Adeyemi Adejumo"
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
