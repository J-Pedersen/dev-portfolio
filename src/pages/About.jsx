import { useState } from "react";
import { History } from "lucide-react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

import PageHeader from "../components/PageHeader.jsx";
import Timeline from "../components/Timeline.jsx";
import { timelineItems } from "../data/timeline.js";

const About = () => {
  const [openTimeline, setOpenTimeline] = useState(false);
  const dragControls = useDragControls();

  return (
    <div className="space-y-8 relative">
      <PageHeader
        kicker="About"
        title="Hello, I'm Jeff. I like to write code and create structure where there is none."
      >
        I consider myself a life long learner of software development and programming concepts.
        I enjoy building applications, websites and learning about new technologies and 
        techniques to use which will increase my understanding and skillset. I also enjoy 
        the project management side of software development and creating the artifacts that
        support the development process such as architecture diagrams, WBS, risk registers, and the
        rest of the project backbone.
      </PageHeader>

      {/* MOBILE TIMELINE BUTTON */}
      <button
        onClick={() => setOpenTimeline(true)}
        className="
          fixed bottom-6 right-6 z-40 md:hidden
          bg-brand text-white px-4 py-2 rounded-full shadow-lg
          flex items-center gap-2 text-sm font-medium
        "
      >
        <History size={16} />
        Timeline
      </button>

      {/* MOBILE SLIDE-OUT TIMELINE */}
      <AnimatePresence>
        {openTimeline && (
          <>
            {/* Backdrop */}
            <motion.div
              key="timeline-backdrop"
              onClick={() => setOpenTimeline(false)}
              className="
                fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Drawer */}
            <motion.div
              key="timeline-drawer"
              className="
                fixed top-0 right-0 h-full w-80 max-w-full z-50 md:hidden
                bg-white dark:bg-slate-900
                border-l border-slate-300 dark:border-slate-700
                shadow-2xl flex flex-col
                overflow-hidden
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              drag="x"
              dragControls={dragControls}
              dragListener={false}
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.2 }}
              dragMomentum={false}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80 || info.velocity.x > 500) {
                  setOpenTimeline(false);
                }
              }}
            >
              {/* Drag / Close Header */}
              <button
                type="button"
                onPointerDown={(e) => dragControls.start(e)}
                onClick={() => setOpenTimeline(false)}
                className="
                  shrink-0 relative overflow-hidden

                  bg-brand dark:bg-brand-soft
                  text-white dark:text-slate-950

                  border-b border-brand-soft

                  px-4 py-4

                  flex items-center justify-center

                  font-semibold tracking-wide text-sm

                  cursor-grab active:cursor-grabbing
                  touch-pan-x

                  transition
                  hover:brightness-110
                  active:scale-[0.98]
                "
              >
                {/* Optional drag handle */}
                <span
                  className="
                    absolute top-2 left-1/2 -translate-x-1/2
                    h-1 w-12 rounded-full
                    bg-white/40 dark:bg-slate-950/20
                  "
                />

                <span className="pointer-events-none">
                  Close Timeline
                </span>

                <span
                  className="
                    absolute right-4 text-lg leading-none
                    opacity-80
                  "
                >
                  ✕
                </span>
              </button>

              {/* Vertical Scroll Content */}
              <div
                className="
                  flex-1 min-h-0 overflow-y-auto overflow-x-hidden
                  overscroll-contain touch-pan-y p-4
                "
              >
                <Timeline items={timelineItems} mobile />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP LAYOUT */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-10">
        <section className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            I started out in my development journey really having no idea just how much I would 
            need to learn in order to create anything useful. All I knew was that some people were 
            capable of making amazing things using just code and I wanted to know how to do it.
          </p>
          <p>  
            I began my learning with the basics of HTML, CSS, JavaScript, Java, SQL, and other web development 
            fundamentals such as JSON, AJAX, and jQuery. From there, I moved on to learning how to build full-stack
            applications using Spring Boot, React, and various types of databases.
          </p>
          <p>
            Over time, I have found that I really enjoy not just writing the code, but also understanding how all the pieces 
            will fit together to create a functional and efficient system.
            Project management and artifact creation are a more recent interest but I have discovered that I
            actually enjoy the planning side of figuring out how the work gets broken down and the
            who does what of it all.
          </p>
          <p>
            My approach to software development is that of continuous improvement.
            I am still learning and I hope that I will always feel like there is a lot more to know and discover 
            because I think if I were ever to get to the point of feeling like I know all there is to know and I can 
            no longer improve then it would be time to find a new path to focus my efforts on. 
          </p>
          <p>
            Self improvement is the whole point of life otherwise you're just waiting for it to be over.
          </p>
          <p>
            I like clear communication, realistic plans that don’t over promise and under reach, and code that someone
            else can understand without effort. Because of that I will typically comment my code 
            so that it is clear to even someone that knows nothing about writing code can understand 
            what I am doing and why.
          </p>

          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              I have a lot of irons in the fire but what I’m focusing on right now is learning more about.
            </h2>

            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
              <li>Building and refining full-stack Spring Boot + React apps.</li>
              <li>Getting more comfortable with AWS services and cloud architecture.</li>
              <li>Strengthening cloud and deployment skills (CI/CD, containers).</li>
              <li>Improving documentation so it’s useful, not just a checkbox.</li>
              <li>Learning more about DevOps practices and tools.</li>
              <li>Exploring advanced database concepts and optimization techniques.</li>
              <li>
                Kotlin, which is a bit difficult to learn after using Java for almost a decade
                and having to adjust to the abbreviated syntax— but I’ll get there.
              </li>
            </ul>
          </section>
        </section>

        <div className="hidden md:block">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  );
};

export default About;