/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Parth's Portfolio",
  description:
    "A passionate individual with a strong interest in applying computers and technology to complex global problems.",
  og: {
    title: "Parth Raut's Portfolio",
    type: "website",
    url: "https://parthraut.github.io",
  },
};

//Home Page
const greeting = {
  title: "Parth Raut",
  logo_name: "Parth Raut",
  nickname: "Passionate For Innovation",
  subTitle:
    "A hard-working individual with a strong interest in applying computers and technology to complex global problems.",
  resumeLink:
    "https://drive.google.com/file/d/1dX2okx0EbhB1Qh5qUPbUuzNYotLd2xvI/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/parthraut",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/parthraut",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/parthraut/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCVbTxfjNVVt1uk6HwhN50RQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:praut@umich.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Embedded Systems - Designing an EV Motor Controler",
      imagePath: 'supermilleage1.jpg',
      skills: [
        "⚡ Designed embedded system circuits and programs with a team, building an ultra-efficient motor controller from scratch",
        "⚡ Led the team in overhauling current design, increasing accuracy while exceeding set goals and deadlines",
        "⚡ Strengthened technical skills in programing, designing circuits, and constructing PCB boards through collaboration",
      ],
      softwareSkills: [
        {
          skillName: "C/C++",
          fontAwesomeClassname: "bxl:c-plus-plus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Altium Designer",
          fontAwesomeClassname: "simple-icons:altiumdesigner",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MATLAB Simulink",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ARM Micocontrollers",
          fontAwesomeClassname: "file-icons:assembly-arm",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Desktop Computer Application in Quantitative 3D Cell Imaging Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Worked closely with professors and graduate students to develop a desktop computer application in MATLAB",
        "⚡ Solely created and implemented desktop application, reducing time spent on reading images by over 500%",
        "⚡ Program helped other teams make new breakthroughs in angiogenesis biomedical research",
      ],
      softwareSkills: [
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "eos-icons:machine-learning",
        },
        {
          skillName: "Biotechnology App Development",
          fontAwesomeClassname: "flat-color-icons:biotech",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Advanced Statistical Analysis",
          fontAwesomeClassname: "akar-icons:statistic-up",

        },
      ],
    },
    {
      title: "Educator of Computer Science and Math",
      imagePath: 'umich_coe.jpeg',
      skills: [
        "⚡ Experienced Instructional Aide (Teaching Assistant) for EECS 370 - Computer Organization",
        "⚡ Student Instructor for Multivariable and Vector Calculus for 2+ years",
        "⚡ Taught and Tutored 250+ students at the University of Michigan",
      ],
      softwareSkills: [
        {
          skillName: "Taught University Courses",
          fontAwesomeClassname: "zondicons:education",
        },
        {
          skillName: "Experienced Educator",
          fontAwesomeClassname: "iwwa:year",
        },
        {
          skillName: "Worked With Large Teams",
          fontAwesomeClassname: "fluent:people-team-20-regular",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/praut1",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      profileLink: "https://www.udemy.com/user/parth-raut-8/",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Michigan College of Engineering",
      subtitle: "B.S.E in Computer Science Engineering (GPA: 4.00)",
      logo_path: "umich_logo.png",
      duration: "Sept 2018 - May 2023",
      descriptions: [
        "⚡ Advanced Courses, including Data Structures and Algorithms, Embedded Systems, Machine Learning, Operating Systems, Quantum Computing.",
        "⚡ Awards include James B. Angell Scholar, Dean's List, University Honors.",
        "⚡ Instructional Aide (Teaching Assistant) for EECS 370 - Computer Organization.",
      ],
      website_link: "https://cse.engin.umich.edu/academics/undergraduate/computer-science-eng/",
    },
    {
      title: "University of Michigan College of Engineering",
      subtitle: "B.S.E in Biomedical Engineering (GPA: 3.99)",
      logo_path: "umich_logo.png",
      duration: "Sept 2018 - May 2023",
      descriptions: [
        "⚡ Advanced Courses, including Biomechanics, Circuits and Systems, Fluid Mechanics, Python Statistical Analysis, Computer Aided Project Design.",
        "⚡ Awards include James B. Angell Scholar, Dean's List, University Honors.",
        "⚡ Instructional Aide (Teaching Assistant) for BME 231 - Biomechanics.",
      ],
      website_link: "https://bme.umich.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Engineering Project Teams",
  description:
    "I have worked as an educator in the Computer Science, Mathematics, and Biomedical Engineering Department at the Univesity of Michigan College of Engineering for many years. I have also worked as an R&D intern to develop novel biomedical sterilization technology.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Instructional Aide (Teaching Assistant) for EECS 370 - Computer Organization",
          company: "University of Michigan College of Engineering",
          company_url: "https://cse.engin.umich.edu/academics/undergraduate/computer-science-eng/",
          logo_path: "umich_logo.png",
          duration: "May 2022 - June 2022",
          location: "Ann Arbor, MI",
          description:
            "Responsible for running discussions, office hours, and course logistics. Develop assignments, slides, and exams for the class. Strengthened communication and teamwork skills by helping to teach large lectures with over 100 students.",
          color: "#0879bf",
        },
        {
          title: "Teacher, Discussion Leader, and Tutor at Engineering Center for Academic Success",
          company: "University of Michigan College of Engineering",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "umich_logo.png",
          duration: "Aug 2020 - May 2022",
          location: "Ann Arbor, MI",
          description:
            "Plan lessons, teach concepts, and lead discussions to help students better understand Multivariable Calculus. Taught and tutored over 250 students, while leading discussions with large groups of over 35 people. Led the consistently most attended class through focus on acquiring feedback and adapting to fit students needs.",
          color: "#9b1578",
        },
        {
          title: "Instructional Aide (Teaching Assistant) for BIOMEDE 231 - Biomechanics",
          company: "University of Michigan College of Engineering",
          company_url: "https://bme.umich.edu/",
          logo_path: "umich_logo.png",
          duration: "May 2022 - June 2022",
          location: "Ann Arbor, MI",
          description:
            "Worked closely with professors and teaching staff to plan lectures, discussions, and exam material. Led large, interactive discussions with over 20 people to help students understand Biomechanics fundamentals. Strengthened communication and teamwork skills by helping to teach large lectures with over 100 students.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Prototyping and R&D Intern",
          company: "Somnio Global LLC",
          company_url: "https://somnioglobal.com/",
          logo_path: "somnio.jpeg",
          duration: "July 2019 - August 2019",
          location: "Novi, MI",
          description:
            "Managed sourcing for specialty parts for the physical manufacturing of an innovative ozone medical sterilizer. Consistently pushed new ideas in the official design while working closely with both designers and manufacturers.",
        },
      ],
    },
    {
      title: "Engineering Project Teams",
      experiences: [
        {
          title: "Head Electric Motor Control Engineer",
          company: "University of Michigan Supermileage",
          company_url: "https://umsm.engin.umich.edu/",
          logo_path: "umsm_group.jpeg",
          duration: "August 2021 - Present",
          location: "Ann Arbor, MI",
          description:
             "Designed embedded system circuits and programs with a team, building an ultra-efficient motor controller fromscratch. Led the team in overhauling current design, increasing accuracy while exceeding set goals and deadlines. Strengthened technical skills in programing, designing circuits, and constructing PCB boards through collaboration.",
          //color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects involve fun applications of software engineering, embedded systems, and biomedical engineering.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published publications shown below.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "parth_profile.jpeg",
    description:
      "Please reach out to me, I would love to connect with you!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I love to write about my passions and spiritual journey.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "425 S 5th Ave, Ann Arbor, MI 48104",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/S+5th+Ave,+Ann+Arbor,+MI+48104/@42.2767968,-83.7484618,17z/data=!3m1!4b1!4m5!3m4!1s0x883cae395e526b29:0x5a0ebe8db001b12f!8m2!3d42.2767968!4d-83.7462678",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "248-619-6621",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
