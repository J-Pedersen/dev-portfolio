export const caseStudies = [
  {
    slug: "weightmate",
    category: "technical",
    categoryLabel: "Technical",
    title: "WeightMate",
    icon: "weightmate-icon",
    summary:
      "A multi-screen Android application for tracking weight progress, managing user profiles, and handling persistent data with SQLite and local image storage. This case study highlights mobile UI design, data persistence strategies, and handling real-world application complexity on Android.",
    role: "Mobile App Developer",
    techStack: ["Java", "Android", "SQLite", "XML", "UI/UX Design", "Photoshop", "Inkscape" ],
    tags: ["Java", "Android", "SQLite", "XML", "UI/UX Design", "Photoshop", "Inkscape" ],
    cardTech: ["Java", "Android", "SQLite", "XML", "UI/UX Design", "Photoshop" ],
    githubUrl: "https://github.com/J-Pedersen/weight-tracker-android",
    demoUrl: "",
    media: [
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}videos/weight-tracker-demo.mp4`,
        title: "WeightMate Demo",
        poster: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-Main.jpg`,
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-Welcome.jpg`,
        title: "Welcome Screen",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Name.jpg`,
        title: "Profile Creation – Name",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Age.jpg`,
        title: "Profile Creation – Age",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Gender.jpg`,
        title: "Profile Creation – Gender",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Height.jpg`,
        title: "Profile Creation – Height",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Weight.jpg`,
        title: "Profile Creation – Current Weight",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Target-Weight.jpg`,
        title: "Profile Creation – Target Weight",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Target-Date.jpg`,
        title: "Profile Creation – Target Date",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Image.jpg`,
        title: "Profile Creation – Profile Image",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-CP-Confirmation.jpg`,
        title: "Profile Creation – Confirmation",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-Main.jpg`,
        title: "Dashboard / Home Screen",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-Weight-Entry.jpg`,
        title: "Weight Entry",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-History.jpg`,
        title: "Weight History",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/weightmate/WeightMate-Profile.jpg`,
        title: "User Profile",
      },
    ],
    architecture: `Android Application
↓
Java Business Logic
↓
XML UI Layouts
↓
SQLite Database
↓
Local Image Storage`,
  },

  {
    slug: "moffat-bay-marina-java",
    category: "technical",
    categoryLabel: "Technical",

    title: "Moffat Bay Marina",
    icon: "moffat_bay_marina-icon",

    summary:
      "A collaborative Java capstone project focused on modeling marina reservation workflows, customer management, scheduling, and business logic using object-oriented design principles.",

    role: "Java Developer",

    techStack: [
      "Java",
      "Jakarta EE",
      "HTML",
      "CSS",
      "Server-Side",
      "Git",
      "GitHub",
      "Photoshop",
      "Inkscape",
      "Microsoft Office",
    ],

    tags: [
      "Java",
      "Jakarta EE",
      "HTML",
      "CSS",
      "Server-Side",
      "Git",
      "GitHub",
      "Photoshop",
      "Inkscape",
      "Microsoft Office",
    ],

    cardTech: [
      "Java",
      "Jakarta EE",
      "HTML",
      "CSS",
      "Server-Side",
      "GitHub",
    ],

    githubUrl:
      "https://github.com/J-Pedersen/moffat-bay-marina-java",

    demoUrl: "",

    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Account1.jpg`,
        title: "Create Account",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Reservation1.jpg`,
        title: "Create Reservation",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Reservation Lookup1.jpg`,
        title: "Reservation Lookup",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Upcoming Reservations1.jpg`,
        title: "Upcoming Reservations",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Waitlist Add1.jpg`,
        title: "Waitlist Add",
      },
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}videos/moffat-bay-marina-java-demo.mp4`,
        title: "Demo Video",
        poster: `${import.meta.env.BASE_URL}screenshots/moffat-bay-marina-java/Moffat-Bay-Marina - Java - Create Reservation1.jpg`,
      },
    ],

    architecture: `Console / Server-Side Workflow
  ↓
  Java Domain Models
  (Customers, Boats, Reservations)
  ↓
  Business Logic Services
  ↓
  In-Memory Collections & Scheduling`,
  },

  {
    slug: "bookclub",
    category: "technical",
    categoryLabel: "Technical",
    title: "BookClub",
    icon: "bookclub-icon",
    summary:
      "A full-stack Java/Spring Boot application for managing a book club using REST APIs, DAO architecture, MongoDB documents, and external OpenLibrary integration. This case study covers architectural decisions, validation challenges, JSONPath handling, and solving real debugging issues.",
    role: "Full Stack Developer",
    techStack: [ "Java", "Spring Boot", "MongoDB", "ThymeLeaf", "REST APIs", "JSON", "Photoshop", "Inkscape", "UI/UX Design" ],
    tags: [ "Java", "Spring Boot", "MongoDB", "ThymeLeaf", "REST APIs", "JSON", "Photoshop", "Inkscape", "UI/UX Design" ],
    cardTech: [ "Java", "Spring Boot", "MongoDB", "ThymeLeaf", "REST APIs", "UI/UX Design"],
    githubUrl: "https://github.com/J-Pedersen/bookclub/tree/main/bookclub",
    demoUrl: "",
    media: [
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}videos/bookclub-demo.mp4`,
        title: "BookClub Demo",
        poster: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-Home1.jpg`,
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-Home1.jpg`,
        title: "Home Page",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-about1.jpg`,
        title: "About Page",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-Contact1.jpg`,
        title: "Contact Page",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-monthly-books1.jpg`,
        title: "Monthly Books",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-book-of-the-month-details1.jpg`,
        title: "Book Details",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-wishlist1.jpg`,
        title: "Wishlist",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-wishlist2.jpg`,
        title: "Wishlist Part 2",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/bookclub/bookclub-wishlist-add1.jpg`,
        title: "Add to Wishlist",
      },
    ],
    architecture: `Spring Boot Application
↓
Spring MVC Controllers
↓
DAO Interfaces
↓
MongoDB / REST / Memory Implementations
↓
Thymeleaf Views + External OpenLibrary API`,
  },

  {
    slug: "gradebook",
    category: "technical",
    categoryLabel: "Technical",
    title: "Grade Book",
    icon: "gradebook-icon",
    summary:
      "A JavaFX desktop application built with clean separation of concerns, dynamic layout handling, CSV storage, and light/dark theme switching. This case study highlights UI architecture, controller/service refactoring, responsive layout strategies, and modular animated UI components.",
    role: "Desktop App Developer",
    techStack: ["Java", "JavaFX", "CSV", "CSS", "UI/UX Design", "Photoshop" ],
    tags: ["Java", "JavaFX", "CSV", "CSS", "UI/UX Design", "Photoshop" ],
    cardTech: ["Java", "JavaFX", "CSV", "CSS", "UI/UX Design", "Photoshop" ],
    githubUrl:
      "https://github.com/J-Pedersen/cis-505/tree/main/Module_12/GradeBookApp",
    demoUrl: "",
    media: [
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}videos/grade-book-demo.mp4`,
        title: "GradeBook Application Demo",
        poster: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook1.jpg`,
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook1.jpg`,
        title: "Main Application Interface",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook-view-grades1.jpg`,
        title: "View Student Grades",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook-update1.jpg`,
        title: "Update Student Record",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/gradebook/gradebook-export-csv1.jpg`,
        title: "Export Data to CSV",
      },
    ],
    architecture: `JavaFX Desktop App
↓
UI Layer (GradeBookApp)
↓
Controller (Events)
↓
Service (CSV Logic)
↓
Student Model`,
  },

  {
    slug: "careware",
    category: "technical",
    categoryLabel: "Project Management",
    title: "CAREWare",
    icon: "careware-icon",
    summary:
      "A complete suite of project management deliverables for a CAREWare-style support system modernization effort. Includes the project charter, WBS, WBS dictionary, network diagrams, risk register, RFP, and quality management plan for a multi-phase implementation.",
    role: "Project Manager / Business Analyst",
    techStack: [ "Project Charters", "WBS Dictionaries", "Network Diagrams", "Risk Registers", "Quality Management", "RFPs" ],
    tags: [ "Project Charters", "WBS Dictionaries", "Network Diagrams", "Risk Registers", "Quality Management", "RFPs" ],
    cardTech: [ "Project Charters", "WBS Dictionaries", "Network Diagrams", "Risk Registers", "Quality Management", "RFPs" ],
    githubUrl: "",
    demoUrl: "",
    media: [
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}videos/CareWare-WBS Dictionary.mp4`,
        title: "WBS Dictionary Demo",
        poster: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary1.jpg`,
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks1.jpg`,
        title: "Identified Risks (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks2.jpg`,
        title: "Identified Risks (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks3.jpg`,
        title: "Identified Risks (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks4.jpg`,
        title: "Identified Risks (4)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Identified-risks5.jpg`,
        title: "Identified Risks (5)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Precedence-Diagramming_Method1.jpg`,
        title: "Precedence Diagramming Method",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter1.jpg`,
        title: "Project Charter (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter2.jpg`,
        title: "Project Charter (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter3.jpg`,
        title: "Project Charter (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter4.jpg`,
        title: "Project Charter (4)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter5.jpg`,
        title: "Project Charter (5)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter6.jpg`,
        title: "Project Charter (6)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter7.jpg`,
        title: "Project Charter (7)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter8.jpg`,
        title: "Project Charter (8)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-project-charter9.jpg`,
        title: "Project Charter (9)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan1.jpg`,
        title: "Quality Management Plan (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan2.jpg`,
        title: "Quality Management Plan (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan3.jpg`,
        title: "Quality Management Plan (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan4.jpg`,
        title: "Quality Management Plan (4)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan5.jpg`,
        title: "Quality Management Plan (5)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan6.jpg`,
        title: "Quality Management Plan (6)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Quality-Management-Plan7.jpg`,
        title: "Quality Management Plan (7)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP1.jpg`,
        title: "Request for Proposal (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP2.jpg`,
        title: "Request for Proposal (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP3.jpg`,
        title: "Request for Proposal (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP4.jpg`,
        title: "Request for Proposal (4)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP5.jpg`,
        title: "Request for Proposal (5)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-RFP6.jpg`,
        title: "Request for Proposal (6)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering1.jpg`,
        title: "Risk Gathering (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering2.jpg`,
        title: "Risk Gathering (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering3.jpg`,
        title: "Risk Gathering (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering4.jpg`,
        title: "Risk Gathering (4)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-Risk-Gathering5.jpg`,
        title: "Risk Gathering (5)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-scope-statement1.jpg`,
        title: "Scope Statement (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-scope-statement2.jpg`,
        title: "Scope Statement (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-scope-statement3.jpg`,
        title: "Scope Statement (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary1.jpg`,
        title: "WBS Dictionary (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary2.jpg`,
        title: "WBS Dictionary (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary3.jpg`,
        title: "WBS Dictionary (3)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS-dictionary4.jpg`,
        title: "WBS Dictionary (4)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS1.jpg`,
        title: "Work Breakdown Structure (1)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS2.jpg`,
        title: "Work Breakdown Structure (2)",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}screenshots/careware/Careware-WBS3.jpg`,
        title: "Work Breakdown Structure (3)",
      },
    ],
    architecture: `CAREWare PM Package
↓
Project Charter
↓
WBS + WBS Dictionary
↓
Network Diagram + Critical Path
↓
Risk Register + Quality Plan
↓
RFP for Support & Training`,
  },
];