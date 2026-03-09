import { useState } from "react";
import { History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PageHeader from "../components/PageHeader.jsx";
import Timeline from "../components/Timeline.jsx";
import { timelineItems } from "../data/timeline.js";

const About = () => {
  const [openTimeline, setOpenTimeline] = useState(false);

  return (
    <div className="space-y-8 relative">
      <PageHeader
        kicker="About"
        title="Hi, I'm Jeff. I like to write code, create structure where there is none, and overdeliver."
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

      {/* MOBILE SLIDE-OUT TIMELINE WITH SWIPE / DRAG-TO-CLOSE */}
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
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              drag="x"
              dragElastic={0.2}
              dragMomentum
              onDragEnd={(_, info) => {
                // If user swipes / drags to the right far or fast enough, close
                if (info.offset.x > 80 || info.velocity.x > 500) {
                  setOpenTimeline(false);
                }
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenTimeline(false)}
                className="
                  p-3 text-sm text-slate-700 dark:text-slate-300
                  border-b border-slate-300 dark:border-slate-700
                  flex justify-between items-center
                "
              >
                <span>Close timeline</span>
                <span className="text-lg leading-none">✕</span>
              </button>

              {/* Content */}
              <div className="overflow-y-auto p-4">
                <Timeline items={timelineItems} mobile />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP LAYOUT */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-10">
        {/* LEFT COLUMN */}
        <section className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            I started out in my development journey really having no idea just how much I would 
            need to learn in order to create anything useful. All I knew was that some people were 
            capable of making amazing things using just code and I wanted to know how to do it.
          </p>
          <p>  
            I began by learning the basic skillset of Java, SQL, and web
            fundamentals. From there, I moved into building full-stack
            applications using Spring Boot, React, and various types of databases.
          </p>
          <p>
            Over time, I found that I really enjoy not just writing code, but also understanding how all the pieces 
            fit together to create a functional and efficient system.
            Along the way, I leaned into project management and discovered I
            actually enjoy the planning side—figuring out how work breaks down,
            who does what, and how the pieces fit together.  
          </p>
          <p>
            My approach to software development is grounded in a desire for continuous improvement.
            I am still learning and I hope that I always will feel like there is a lot more to know and discover 
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

        {/* RIGHT COLUMN — Desktop Timeline */}
        <div className="hidden md:block">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  );
};

export default About;