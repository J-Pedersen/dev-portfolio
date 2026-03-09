export const projects = [
  // -----------------------------------------
  // FEATURED PROJECTS
  // -----------------------------------------
  {
    slug: 'little-lemon-react',
    title: 'Little Lemon',
    shortDescription:
      'React-based version of the Little Lemon website with reusable components and routing.',
    role: 'React Developer',
    techStack: ['React', 'JavaScript'],
    type: 'featured',
    githubUrl: 'https://github.com/J-Pedersen/little-lemon-react',
    demoUrl: 'https://j-pedersen.github.io/little-lemon-react/',
    icon: 'little_lemon-icon',
    tags: ['React', 'Bootstrap', 'JavaScript', 'Coursera'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/little-lemon-react-demo.mp4`,

    longDescription:
      'Little Lemon (React) is a React-based version of the restaurant site that turns the original static layout into a component-driven application. It uses reusable components, props, and routing to structure the UI. This project helped bridge the gap between static pages and modern single-page applications.',

    problem:
      'The static version of the site was clean, but it didn’t demonstrate component composition, props, or client-side routing. I needed a React implementation to practice these patterns using a familiar design.',

    solution:
      'I rebuilt the site in React, splitting sections into components, wiring up navigation, and handling state where needed. The goal was not to rebuild the world, but to show that even a simple site benefits from React patterns when it grows.',

    architecture: `
React App
↓
Routing (if used) / top-level layout
↓
Section Components (header, hero, menu, etc.)
↓
Presentational components (cards, buttons, etc.)
    `,

    decisions: [
      'Use functional components and hooks rather than class components.',
      'Break the layout into logical components that mirror the page sections.',
      'Keep state minimal and push as much as possible into props and composition.'
    ],

    challenges: [
      'Keeping components small and focused instead of letting them bloat.',
      'Maintaining parity with the static version while improving structure.',
      'Ensuring the React build deployed cleanly to GitHub Pages.'
    ],

    outcome:
      'The React version of Little Lemon shows that I can move from static layouts to a component-based architecture and reason about how to carve up a UI cleanly.'
  },


  {
    slug: 'book-club-springboot',
    title: 'Bookclub Application',
    shortDescription:
      'A Spring Boot application modeling a book club with server-side Java, templated views, and persistent data.',
    role: 'Full-Stack Developer',
    techStack: ['Java', 'Spring Boot', 'Thymeleaf', 'MongoDB', 'HTML', 'CSS'],
    type: 'featured',
    githubUrl: 'https://github.com/J-Pedersen/bookclub',
    icon: 'bookclub-icon',
    tags: ['Java', 'Spring Boot', 'Server-Side'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/bookclub-demo.mp4`,

    longDescription:
      'Book Club is a Spring Boot application that models the core flows of a book club: displaying books, managing lists, and working with server-rendered views. It uses Spring MVC controllers with Thymeleaf templates to deliver HTML pages backed by Java models and persistent data. This project gave me a chance to practice structuring a full-stack Java application rather than a single script or stand-alone assignment.',

    problem:
      'Simple static sites dont handle state, persistence, or realistic user flows very well. I wanted a project that made me work through structured controllers, templates, and a persistence layer while still being small enough to reason about as a single developer.',

    solution:
      'I built a layered Spring Boot application where controllers handle routing, models encapsulate book data, and views render server-side templates. The project focuses on clear separation of concerns between the HTTP layer, domain logic, and presentation. It also emphasizes readability and predictable routing rather than clever tricks.',

    architecture: `
Browser (Thymeleaf-rendered pages)
↓
Spring MVC Controllers (@Controller / @GetMapping / @PostMapping)
↓
Service / Model Layer (Book/domain classes)
↓
Persistence (simple backing data source for books)
    `,

    decisions: [
      'Use Spring Boot with Spring MVC and Thymeleaf instead of a pure REST API plus a separate SPA.',
      'Keep the domain model small and focused on book and list concepts to avoid over engineering.',
      'Use conventional controller and template naming to keep navigation predictable.',
      'Favor clear, readable Java methods over clever one-liners or dense logic.'
    ],

    challenges: [
      'Reasoning through how data flows from controller methods into Thymeleaf templates.',
      'Keeping templates simple while still showing meaningful book information.',
      'Balancing course requirements with how I would structure the project in real life.'
    ],

    outcome:
      'This project solidified my comfort with Spring MVC, server-side rendering, and the basics of organizing a full-stack Java application. It also gave me a nice reference point for future Spring Boot work.'
  },

  {
    slug: 'gradebook-javafx',
    title: 'Grade Book Application',
    shortDescription:
      'A JavaFX desktop application for managing student grades, featuring modular design and CSV persistence.',
    role: 'Java Developer',
    techStack: ['Java', 'JavaFX', 'CSS', 'CSV'],
    type: 'featured',
    githubUrl:
      'https://github.com/J-Pedersen/cis-505/tree/main/Module_12/GradeBookApp',
    icon: 'gradebook-icon',
    tags: ['Java', 'JavaFX', 'CSS', 'CSV'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/grade-book-demo.mp4`,

    longDescription:
      'Grade Book App is a JavaFX desktop application that collects and displays student grade data. It started as a single-file UI project and grew into an exercise in separation of concerns, event handling, file storage, and UI refinement. The app persists entries to CSV and presents them in a table so the user can see the full dataset at a glance.',

    problem:
      'The early version of the app had everything in one place—UI layout, event handlers, data model, and CSV logic. It technically worked, but it was hard to maintain, awkward to extend, and not something I would want to scale beyond a basic demo.',

    solution:
      'I refactored the application into a simple layered structure: model classes for student data, a service for CSV I/O, a controller for event logic, and the JavaFX application class for layout and styling only. That structure makes it easier to reason about changes and to test pieces in isolation.',

    architecture: `
JavaFX UI (GradeBookApp)
↓
Controller (event handlers, form logic)
↓
Service (CSV read/write operations)
↓
CSV File Storage
    `,

    decisions: [
      'Split responsibilities across Student, GradeBookService, GradeBookController, and GradeBookApp.',
      'Use CSV as a simple, human-readable persistence mechanism rather than pulling in a database.',
      'Implement a responsive layout that adjusts as the window size changes.',
      'Add theme support and a bit of visual personality without making the UI noisy.'
    ],

    challenges: [
      'Untangling tightly coupled UI and data logic from the original all-in-one implementation.',
      'Keeping the layout flexible while still readable at different screen sizes.',
      'Ensuring CSV operations behave predictably and don’t corrupt data.'
    ],

    outcome:
      'Grade Book App became a practical example of how I like to structure JavaFX applications: UI in one place, logic in another, and persistence pushed into a dedicated service. It’s a small project with real architectural lessons behind it.'
  },

  {
    slug: 'moffat-bay-marina-java',
    title: 'Moffat Bay Marina',
    shortDescription:
      'This was a group capstone project which used marina management logic built in Java to simulate boat rentals, scheduling, and customer workflows.',
    role: 'Java Developer',
    techStack: ['Java', 'CSS', 'HTML'],
    type: 'featured',
    githubUrl: 'https://github.com/J-Pedersen/moffat-bay-marina-java',
    icon: 'moffat_bay_marina-icon',
    tags: ['Java', 'Jakarta EE', 'CSS', 'Server-Side'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/moffat-bay-marina-java-demo.mp4`,

    longDescription:
      'Moffat Bay Marina (Java) is a console-based Java group project that models a marina’s business logic: boat rentals, customer information, and scheduling. The project emphasizes object-oriented design, basic data structures, and control flow rather than UI. It serves as a good example of how I approach requirements-driven business logic in a pure Java environment.',

    problem:
      'The goal was to design and implement a simple but realistic domain model for a marina, including customers and rentals, without relying on a heavy UI or framework. The main challenge was keeping the logic understandable while still covering the required scenarios.',

    solution:
      'We modeled the marina with plain Java classes and collections, using methods to represent typical actions such as creating rentals, listing available boats, and tracking customer usage. Inputs and outputs are text-based, which keeps the focus on the underlying logic.',

    architecture: `
Console UI (text prompts and output)
↓
Domain Model (boats, customers, rentals)
↓
In-Memory Collections (lists/maps)
    `,

    decisions: [
      'Focus on clean object-oriented modeling instead of UI libraries.',
      'Use in-memory collections to represent boats and reservations.',
      'Keep method names and flows close to the business language (rent, return, list, etc.).'
    ],

    challenges: [
      'Avoiding “god classes” that tried to handle too many responsibilities at once.',
      'Keeping logic readable as more scenarios and conditions were added.',
      'Dealing with edge cases in reservations and availability.'
    ],

    outcome:
      'The project demonstrates my ability to turn a problem description into a maintainable Java domain model. It also reinforced good habits around naming, structure, and testable units of logic.'
  },

  {
    slug: 'little-lemon-html',
    title: 'Little Lemon',
    shortDescription:
      'A responsive restaurant site created using semantic HTML, modern CSS, and JavaScript.',
    role: 'Front-End Developer',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    type: 'featured',
    githubUrl: 'https://github.com/J-Pedersen/little-lemon-html',
    demoUrl: 'https://j-pedersen.github.io/little-lemon-html/',
    icon: 'little_lemon-icon',
    tags: ['HTML', 'CSS', 'JavaScript', 'Coursera'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/little-lemon-html-demo.mp4`,

    longDescription:
      'Little Lemon (HTML/CSS/JavaScript) is a responsive restaurant website built using semantic HTML, modern CSS, and a bit of JavaScript. It focuses on layout, accessibility basics, and content structure without the overhead of a framework. It’s a good snapshot of my early front-end work using the core building blocks of the web.',

    problem:
      'The goal was to create a restaurant site that looked clean on desktop and mobile while staying within the boundaries of plain HTML, CSS, and JavaScript. No frameworks, just core browser technologies.',

    solution:
      'I designed a small multi-section layout using semantic tags, responsive CSS, and simple JavaScript enhancements. The site adapts to different screen widths and demonstrates how much can be done before reaching for a framework.',

    architecture: `
Browser
↓
Static HTML (semantic structure)
↓
CSS (responsive layout, typography, color)
↓
JavaScript (light enhancements where needed)
    `,

    decisions: [
      'Use semantic HTML elements to keep the markup meaningful and accessible.',
      'Rely on CSS for layout, spacing, and responsiveness instead of heavy JS.',
      'Keep JavaScript minimal to support performance and readability.'
    ],

    challenges: [
      'Getting the layout to feel balanced at multiple breakpoints.',
      'Keeping styles organized so adjustments were easy to make.',
      'Making the site feel polished without over complicating the stack.'
    ],

    outcome:
      'This project demonstrates my baseline front-end skills without any frameworks attached—just HTML, CSS, and JavaScript working together in a clean, responsive layout.'
  },

  {
    slug: 'bacchus-winery-python',
    title: 'Bacchus Winery',
    shortDescription:
      'This introductory Python course group project focused on managing inventory and winery operations.',
    role: 'Python Developer',
    techStack: ['Python', 'SQL'],
    type: 'featured',
    githubUrl:
      'https://github.com/J-Pedersen/csd-310/tree/main/module_12',
    icon: 'bacchus_winery-icon',
    tags: ['Python', 'SQL'],
    videoUrl: '',

    longDescription:
      'Bacchus Winery is a Python group project built around managing a winery’s inventory, operations and producing reports. It focuses on modular design, functions, and structured data handling. The project highlights how I approach small business-domain logic using Python modules.',

    problem:
      'The project needed to model winery operations—bottles, inventory, and basic transactions—in a way that was clear and maintainable. The main challenge was organizing the code so it didn’t turn into one long script.',

    solution:
      'I split the logic into functions and modules, working with basic data structures to track inventory and operations. The goal was to balance clarity with enough structure to extend the project later if needed.',

    architecture: `
Python Modules
↓
Functions handling business logic (inventory, updates, queries)
↓
Data Structures (lists/dicts representing records)
    `,

    decisions: [
      'Use separate modules and functions to avoid a single monolithic script.',
      'Represent inventory using simple Python collections for readability.',
      'Keep calculations and updates encapsulated inside clear, named functions.'
    ],

    challenges: [
      'Keeping the logic understandable as more operations were added.',
      'Avoiding duplicate code when dealing with similar inventory flows.',
      'Making sure calculations and updates stayed consistent over time.'
    ],

    outcome:
      'The project shows how I use Python to model a small domain and keep logic modular. It also supports later extensions, like swapping in a database or a UI layer if needed.'
  },

  // -----------------------------------------
  // COURSEWORK / CODE BUNDLES
  // -----------------------------------------
  {
    slug: 'cis-505-coursework',
    title: 'Intermediate Java Programming',
    shortDescription:
      'Collection of Java assignments and the final JavaFX GradeBook project.',
    role: 'Java Developer',
    techStack: ['Java', 'JavaFX', 'CSS'],
    type: 'course',
    githubUrl: 'https://github.com/J-Pedersen/cis-505',
    icon: 'java-icon',
    tags: ['Java', 'JavaFX', 'CSS'],
    videoUrl: '',

    longDescription:
      'CIS 505 coursework includes a range of Java assignments and the final JavaFX GradeBook application. The course built on core Java fundamentals and introduced more complex topics such as modular design, file I/O, basic GUIs, and object-oriented patterns. The GitHub repo collects all of these pieces in one place.',

    problem:
      'The goal of the course was to move beyond basic syntax and into practical, object-oriented Java programming that could support real applications rather than isolated examples.',

    solution:
      'Throughout the course I implemented console programs, class-based designs, and a JavaFX application. The work emphasized clean coding habits, separation of concerns, and steadily layering new concepts onto a solid Java foundation.',

    architecture: `
Multiple Assignments
↓
Console Apps, Class Libraries, and JavaFX UI
↓
Focus on OOP, I/O, and modular structure
    `,

    decisions: [
      'Treat each assignment as an opportunity to refine naming, structure, and testability.',
      'Focus on readability and maintainable patterns instead of clever shortcuts.',
      'Use GitHub to keep work organized and versioned.'
    ],

    challenges: [
      'Balancing new concepts (like JavaFX) with existing Java fundamentals.',
      'Keeping code organized as assignments accumulated.',
      'Refactoring earlier work once patterns became clearer.'
    ],

    outcome:
      'The CIS 505 work gave me a stronger grasp of Java, especially in the context of building maintainable programs and GUIs. It also laid the groundwork for projects like the Grade Book App.'
  },

  {
    slug: 'csd-340-coursework',
    title: 'Web Development Fundamentals',
    shortDescription:
      'Assignments for CSD 340 including early HTML structure, CSS styling, and static web design.',
    role: 'Front-End Developer',
    techStack: ['HTML', 'CSS'],
    type: 'course',
    githubUrl: 'https://github.com/J-Pedersen/csd-340',
    icon: 'html-icon',
    tags: ['HTML', 'CSS'],
    videoUrl: '',

    longDescription:
      'CSD 340 coursework focuses on the foundations of web development using HTML and CSS. The repo includes assignments that cover semantic markup, basic layouts, responsive behavior, and incremental styling improvements. These exercises established the base skills I now use across my front-end work.',

    problem:
      'The course needed to introduce web fundamentals in a structured way so that later JavaScript and framework work had something solid to build on.',

    solution:
      'I worked through a series of assignments that built up from plain HTML pages to styled, multi-page sites. Along the way, I practiced semantic markup, class naming, and responsive-friendly layouts.',

    architecture: `
Static HTML Pages
↓
CSS Stylesheets (typography, layout, color)
↓
Incremental enhancements across assignments
    `,

    decisions: [
      'Use semantic tags instead of dumping everything into <div> elements.',
      'Keep CSS organized and readable so changes were easy to make.',
      'Pay attention to layout and spacing even on simple pages.'
    ],

    challenges: [
      'Learning how small CSS changes affect layout at different viewport sizes.',
      'Managing style changes across multiple pages.',
      'Finding the balance between simple design and readability.'
    ],

    outcome:
      'The CSD 340 work gave me a solid base in HTML/CSS that makes later framework work more grounded. It also produced a set of small but complete web pages I can reference as early portfolio pieces.'
  },

  {
    slug: 'csd-310-coursework',
    title: 'Python Programming',
    shortDescription:
      'Python exercises and module-based work including the Bacchus Winery project.',
    role: 'Python Developer',
    techStack: ['Python'],
    type: 'course',
    githubUrl: 'https://github.com/J-Pedersen/csd-310',
    icon: 'python-icon',
    tags: ['Python', 'SQL'],
    videoUrl: '',

    longDescription:
      'CSD 310 coursework focuses on Python basics and intermediate concepts using a mix of exercises and small projects. This includes work with functions, modules, control flow, data structures, and domain-focused assignments like Bacchus Winery.',

    problem:
      'The course needed to move from “toy examples” to practical, structured Python code that could model real scenarios.',

    solution:
      'I implemented a variety of scripts and modules, taking care to break logic into functions and reusable pieces rather than writing everything in one file. The Bacchus Winery project, in particular, helped reinforce modular design.',

    architecture: `
Python Scripts and Modules
↓
Functions and Data Structures
↓
Domain-focused exercises (like Bacchus Winery)
    `,

    decisions: [
      'Treat even small exercises as practice for clean structure and naming.',
      'Use functions and modules to keep logic isolated and testable.',
      'Favor readability so the code remains understandable later.'
    ],

    challenges: [
      'Keeping earlier assignments aligned with patterns I learned later in the course.',
      'Organizing files and modules so the repo didn’t become a mess.',
      'Managing slightly different approaches across multiple exercises.'
    ],

    outcome:
      'The CSD 310 work improved my comfort level with Python as a general-purpose language. It also strengthened habits around structure and modularity.'
  },

  // -----------------------------------------
  // ANDROID
  // -----------------------------------------
  {
    slug: 'meta-android-developer',
    title: 'Meta Android Developer',
    shortDescription:
      'Course project files for the Meta Android Developer specialization.',
    role: 'Android/Java Learner',
    techStack: ['Java', 'Android'],
    type: 'android',
    githubUrl: 'https://github.com/J-Pedersen/Meta_Android_Developer',
    icon: 'meta-icon',
    tags: ['Android', 'Java', 'Coursera'],
    videoUrl: '',

    longDescription:
      'This repository contains coursework for the Meta Android Developer specialization. It includes Android Studio projects that cover layouts, activities, basic navigation, and simple data handling on mobile.',

    problem:
      'Desktop and web development don’t automatically translate into mobile skills. I needed guided practice with Android-specific patterns, tools, and lifecycle concepts.',

    solution:
      'I worked through the course projects using Java and Android Studio, learning how to design layouts, wire events, and manage activity lifecycles. The focus was on small, focused apps rather than a single large project.',

    architecture: `
Android Studio Projects
↓
Activities, Layout XML, and Java Code
↓
Basic data handling and navigation flows
    `,

    decisions: [
      'Follow standard Android patterns instead of improvising my own.',
      'Use the coursework to get comfortable with the tooling and project structure.',
      'Keep code readable so I can revisit and extend projects later if I choose.'
    ],

    challenges: [
      'Adjusting to the Android lifecycle and how it differs from desktop/web.',
      'Managing project configuration and build issues inside Android Studio.',
      'Thinking about UI with limited space and different interaction patterns.'
    ],

    outcome:
      'This specialization gave me a baseline understanding of Android app structure and development workflows, which adds another dimension to my Java experience.'
  },

  // -----------------------------------------
  // WEB PROJECTS
  // -----------------------------------------
  {
    slug: 'diy-computer-assembly',
    title: 'DIY Computer Assembly',
    shortDescription:
      'A static multi-page HTML site explaining DIY PC assembly steps.',
    role: 'Front-End Developer',
    techStack: ['HTML', 'CSS'],
    type: 'web',
    githubUrl:
      'https://github.com/J-Pedersen/diy-computer-assembly-html-tabbed',
    icon: 'circuit-icon',
    tags: ['HTML', 'CSS'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/diy-pc-building-demo.mp4`,

    longDescription:
      'DIY Computer Assembly is a multi-page HTML/CSS site that walks through the steps of building a PC. It uses simple navigation and content sections to break the process into understandable pieces. This project reflects my ability to take a technical topic and present it clearly using core web technologies.',

    problem:
      'The challenge was to explain a multi-step technical process in a way that felt approachable, while also practicing multi-page navigation, consistent styling, and layout.',

    solution:
      'I built a small static site with separate pages or sections for each step, using clear headings, structured content, and simple CSS layouts. The result is straightforward to read and easy to extend.',

    architecture: `
Static HTML Pages
↓
CSS (layout, typography, spacing)
↓
Multi-page navigation between steps
    `,

    decisions: [
      'Use a simple structure so readers can follow each assembly step.',
      'Keep styling minimal but consistent so the focus remains on the content.',
      'Organize content into logical sections that mirror the real workflow.'
    ],

    challenges: [
      'Balancing the amount of text on each page or section.',
      'Keeping navigation intuitive for readers moving between steps.',
      'Ensuring the site stayed readable on different screen sizes.'
    ],

    outcome:
      'The project demonstrates both communication and basic web design skills: explaining a technical process and delivering it in a clean, static site.'
  },

  {
    slug: 'moffat-bay-marina-php',
    title: 'Moffat Bay Marina',
    shortDescription:
      'PHP implementation of the Moffat Bay Marina project with server-side rendering.',
    role: 'Full-Stack Developer',
    techStack: ['PHP', 'HTML', 'CSS'],
    type: 'php',
    githubUrl: 'https://github.com/J-Pedersen/moffat-bay-marina-php',
    icon: 'moffat_bay_marina-icon',
    tags: ['PHP', 'HTML', 'CSS', 'Server-Side'],
    videoUrl: '',

    longDescription:
      'Moffat Bay Marina (PHP) is a server-side implementation of the marina concept using PHP, HTML, and CSS. It moves the business logic into PHP scripts and renders HTML on the server, which gives the project a different flavor compared to the Java version.',

    problem:
      'I wanted to re-implement the marina logic in a web context, using a different language and runtime. This meant handling requests, rendering HTML, and tying forms or links back into the business logic.',

    solution:
      'I used PHP scripts to handle inputs, run the underlying marina logic, and output HTML. CSS provides basic styling so the pages are readable and structured. The result is a small, server-rendered application without relying on a framework.',

    architecture: `
Browser
↓
PHP Scripts (request handling, business logic)
↓
HTML Output + CSS Styling
    `,

    decisions: [
      'Use plain PHP rather than a heavy framework to stay close to the basics.',
      'Keep logic structured and readable so it’s easy to trace from request to response.',
      'Reuse the core marina concepts from the Java version but adapt them to a web flow.'
    ],

    challenges: [
      'Managing state across requests in a simple PHP environment.',
      'Keeping script logic from becoming tangled as more cases were added.',
      'Ensuring HTML output stayed consistent as features were iterated.'
    ],

    outcome:
      'This project shows that I can port logic from one language into another runtime and adapt it to server-rendered web development.'
  },

  {
    slug: 'my-bio-html-responsive',
    title: 'My Single Page Bio Website',
    shortDescription:
      'A responsive personal bio page with basic layout and CSS styling.',
    role: 'Front-End Developer',
    techStack: ['HTML', 'CSS'],
    type: 'web',
    githubUrl: 'https://github.com/J-Pedersen/my-bio-html-responsive',
    icon: 'biography-icon',
    tags: ['HTML', 'CSS'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/my-bio-responsive-demo.mp4`,

    longDescription:
      'My Bio is a simple responsive HTML/CSS page that introduces who I am and what I do. It focuses on clean layout, typography, and basic responsiveness without any framework overhead.',

    problem:
      'I needed a small personal page that could serve as an early bio and also function as practice for responsive layout work.',

    solution:
      'I built a single-page layout using semantic HTML and CSS that adapts to different widths. The content is straightforward: a short introduction, some basic details, and a structure that leaves room to grow.',

    architecture: `
Single HTML Page
↓
CSS (layout, typography, spacing)
↓
Responsive behavior via simple media queries
    `,

    decisions: [
      'Use semantic structure so the page remains accessible and easy to extend.',
      'Focus on spacing and typography to keep the page comfortable to read.',
      'Keep the codebase small so it’s easy to update later.'
    ],

    challenges: [
      'Balancing simplicity with a design that still feels intentional.',
      'Tweaking spacing and font sizes for smaller screens.',
      'Deciding what information belongs on a minimal bio page.'
    ],

    outcome:
      'My Bio serves as a simple but useful example of responsive HTML/CSS work and an early step toward the more polished portfolio you’re looking at now.'
  },

  {
    slug: 'biosite-csd340',
    title: "Terri's Bio Website",
    shortDescription:
      'Multi-page biography site created for web development coursework.',
    role: 'Front-End Developer',
    techStack: ['HTML', 'CSS'],
    type: 'web',
    githubUrl: 'https://github.com/J-Pedersen/bioSite',
    icon: 'biography-icon',
    tags: ['HTML', 'CSS'],
    videoUrl: `${import.meta.env.BASE_URL}/videos/terri-bio-responsive-demo.mp4`,

    longDescription:
      'bioSite is a multi-page biography site built as part of CSD 340 coursework. It uses static HTML and CSS to tell the story of a selected person, with an emphasis on structure, consistent styling, and navigation.',

    problem:
      'The assignment required building a small site that presented biographical information in a clear way while practicing HTML/CSS across multiple pages.',

    solution:
      'I structured the site into logical sections—introduction, background, and other relevant details—and wired them together with simple navigation. CSS keeps the visual style consistent across pages.',

    architecture: `
Multiple HTML Pages
↓
Shared CSS Stylesheet
↓
Simple navigation between sections
    `,

    decisions: [
      'Use repeated layout patterns so the site feels cohesive.',
      'Keep content structured with headings and paragraphs for readability.',
      'Minimize complexity to keep focus on core HTML/CSS skills.'
    ],

    challenges: [
      'Maintaining consistent styling across multiple pages.',
      'Ensuring content doesn’t feel cramped or overly sparse.',
      'Making navigation easy for someone unfamiliar with the subject.'
    ],

    outcome:
      'bioSite is a good example of early multi-page site work and shows how I structure content-driven pages with plain HTML and CSS.'
  }
];