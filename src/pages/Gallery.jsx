import PageHeader from "../components/PageHeader.jsx";
import ScreenshotGrid from "../components/ScreenshotGrid.jsx";
import { galleryItems } from "../data/galleryItems.js";

const Gallery = () => {
  return (
    <div className="space-y-10">
      <PageHeader
        kicker="Screenshots"
        title="A visual look at my projects and coursework"
      >
        This gallery brings together screenshots from my applications,
        coursework exercises, case studies, and UI mockups. It’s a quick way
        to browse the things I’ve built.
      </PageHeader>

      <ScreenshotGrid items={galleryItems} />
    </div>
  );
};

export default Gallery;