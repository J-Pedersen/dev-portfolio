// src/pages/Gallery.jsx
import PageHeader from "../components/PageHeader.jsx";

const base = import.meta.env.BASE_URL;

const images = [
  // -------- WeightMate --------
  { src: `${base}screenshots/weightmate/WeightMate-Main.jpg`, title: "WeightMate Main Screen" },
  { src: `${base}screenshots/weightmate/WeightMate-Profile.jpg`, title: "WeightMate Profile" },
  { src: `${base}screenshots/weightmate/WeightMate-History.jpg`, title: "WeightMate History" },
  { src: `${base}screenshots/weightmate/WeightMate-Weight-Entry.jpg`, title: "Weight Entry" },
  { src: `${base}screenshots/weightmate/WeightMate-Welcome.jpg`, title: "Welcome Screen" },

  // -------- BookClub --------
  { src: `${base}screenshots/bookclub/bookclub-Home1.jpg`, title: "BookClub Home" },
  { src: `${base}screenshots/bookclub/bookclub-about1.jpg`, title: "About Page" },
  { src: `${base}screenshots/bookclub/bookclub-monthly-books1.jpg`, title: "Monthly Books" },
  { src: `${base}screenshots/bookclub/bookclub-wishlist1.jpg`, title: "Wishlist" },
  { src: `${base}screenshots/bookclub/bookclub-wishlist-add1.jpg`, title: "Add to Wishlist" },

  // -------- GradeBook --------
  { src: `${base}screenshots/gradebook/gradebook1.jpg`, title: "GradeBook Main Screen" },
  { src: `${base}screenshots/gradebook/gradebook-view-grades1.jpg`, title: "View Grades" },
  { src: `${base}screenshots/gradebook/gradebook-update1.jpg`, title: "Update Grades" },
  { src: `${base}screenshots/gradebook/gradebook-export-csv1.jpg`, title: "Export CSV" },

  // -------- Little Lemon React --------
  { src: `${base}screenshots/little-lemon-react/Little-Lemon-React-Home1.jpg`, title: "Little Lemon React Home" },
  { src: `${base}screenshots/little-lemon-react/Little-Lemon-React-Menu1.jpg`, title: "React Menu" },
  { src: `${base}screenshots/little-lemon-react/Little-Lemon-React-Login1.jpg`, title: "Login Page" },

  // -------- Little Lemon HTML --------
  { src: `${base}screenshots/little-lemon-html/Little-Lemon-HTML-Home1.jpg`, title: "Little Lemon HTML Home" },
  { src: `${base}screenshots/little-lemon-html/Little-Lemon-HTML-Menu1.jpg`, title: "HTML Menu" },
  { src: `${base}screenshots/little-lemon-html/Little-Lemon-HTML-Reservation1.jpg`, title: "Reservation Page" },

  // -------- Moffat Bay Marina --------
  { src: `${base}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Account1.jpg`, title: "Create Account" },
  { src: `${base}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Reservation1.jpg`, title: "Create Reservation" },
  { src: `${base}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Reservation Lookup1.jpg`, title: "Reservation Lookup" },

  // -------- CAREWare --------
  { src: `${base}screenshots/careware/Careware-project-charter1.jpg`, title: "Project Charter" },
  { src: `${base}screenshots/careware/Careware-RFP1.jpg`, title: "RFP Document" },
  { src: `${base}screenshots/careware/Careware-WBS1.jpg`, title: "Work Breakdown Structure" },
  { src: `${base}screenshots/careware/Careware-Quality-Management-Plan1.jpg`, title: "Quality Management Plan" },

  // -------- Zelda ASP.NET --------
  { src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-home1.jpg`, title: "Zelda Fansite Home" },
  { src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-Games1.jpg`, title: "Games Page" },
  { src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-Items1.jpg`, title: "Items Page" },
  { src: `${base}screenshots/zelda-fansite-asp.net/Zelda-Fansite-ASP.net(VB)-Maps1.jpg`, title: "Maps Page" },
];

const videos = [
  {
    src: `${base}videos/weight-tracker-demo.mp4`,
    title: "WeightMate Demo",
  },
  {
    src: `${base}videos/bookclub-demo.mp4`,
    title: "BookClub Demo",
  },
  {
    src: `${base}videos/diy-pc-building-demo.mp4`,
    title: "DIY PC Building Demo",
  },
  {
    src: `${base}videos/grade-book-demo.mp4`,
    title: "Grade Book Demo",
  },
  {
    src: `${base}videos/image-carousel-demo.mp4`,
    title: "Image Carousel Demo",
  },
  {
    src: `${base}videos/lightbox-demo.mp4`,
    title: "Lightbox Demo",
  },
  {
    src: `${base}videos/little-lemon-html-demo.mp4`,
    title: "Little Lemon HTML Demo",
  },
  {
    src: `${base}videos/little-lemon-react-demo.mp4`,
    title: "Little Lemon React Demo",
  },
  {
    src: `${base}videos/moffat-bay-marina-java-demo.mp4`,
    title: "Moffat Bay Marina Java Demo",
  },
  {
    src: `${base}videos/my-bio-responsive-demo.mp4`,
    title: "My Bio Demo",
  },
  {
    src: `${base}videos/terri-bio-responsive-demo.mp4`,
    title: "Terri's Bio Demo",
  },
  {
    src: `${base}videos/zelda-fansite-asp.net-demo.mp4`,
    title: "Zelda Fansite ASP.NET Demo",
  },
  {
    src: `${base}videos/CareWare-WBS Dictionary.mp4`,
    title: "CareWare WBS Dictionary",
  },
];

const Gallery = () => {
  return (
    <div className="space-y-10">
      <PageHeader kicker="Gallery" title="Media Showcase">
        A collection of screenshots and demo videos from my projects.
      </PageHeader>

      {/* IMAGES */}
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Screenshots
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="
                group rounded-2xl overflow-hidden
                bg-brand-soft/30
                dark:hover:text-brand-soft-soft
                border-b border-brand-soft
                transition
                shadow-card dark:shadow-card-dark hover:shadow-card-hover
              "
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-3 text-sm text-slate-700 dark:text-slate-300 text-center">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
          Videos
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {videos.map((video, i) => (
            <div
              key={i}
              className="
                rounded-2xl overflow-hidden
                bg-brand-soft/30
                dark:hover:text-brand-soft-soft
                border-b border-brand-soft
                shadow-card dark:shadow-card-dark hover:shadow-card-hover
                p-3
              "
            >
              <video
                controls
                preload="metadata"
                className="w-full rounded-lg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <p className="mt-2 text-sm text-center text-slate-700 dark:text-slate-300">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;