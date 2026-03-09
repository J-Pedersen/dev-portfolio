import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import CaseStudyBookClub from './pages/case-studies/CaseStudyBookClub.jsx';
import CaseStudyGradeBook from './pages/case-studies/CaseStudyGradeBook.jsx';
import CaseStudyCareWare from './pages/case-studies/CaseStudyCareWare.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Playground from './pages/Playground.jsx';
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white text-slate-900
        dark:bg-slate-900 dark:text-slate-200
        transition-colors duration-300
      "
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/bookclub" element={<CaseStudyBookClub />} />
          <Route path="/case-studies/gradebook" element={<CaseStudyGradeBook />} />
          <Route path="/case-studies/careware" element={<CaseStudyCareWare />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Blog route will be added later */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;