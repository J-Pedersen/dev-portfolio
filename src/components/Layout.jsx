import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen flex flex-col
        bg-white text-slate-900
        dark:bg-slate-950 dark:text-slate-100
        transition-colors
      "
    >
      {/* Refined, layered dual-theme glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">

        {/* Light Mode Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_20%_0%,rgba(79,70,229,0.08),transparent_60%)]
            md:bg-[radial-gradient(circle_at_30%_-10%,rgba(79,70,229,0.10),transparent_70%)]
            dark:hidden
          "
        />

        {/* Dark Mode Glow (layered) */}
        <div className="hidden dark:block absolute inset-0">
          
          {/* Top atmospheric glow */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_30%_-20%,rgba(79,70,229,0.25),transparent_70%)]
            "
          />

          {/* Bottom grounding glow */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_70%_120%,rgba(79,70,229,0.15),transparent_70%)]
            "
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main className="flex-1 px-4 sm:px-8 lg:px-16 py-8 max-w-6xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;