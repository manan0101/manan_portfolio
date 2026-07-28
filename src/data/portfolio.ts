export const profile = {
  name: "Manan Maluka",
  title: "Machine Learning Developer",
  subtitles: ["Python Developer", "AI Enthusiast"],
  tagline:
    "I'm an MCA student passionate about Machine Learning, Data Science, and Python development. I enjoy building AI-powered applications and solving real-world problems through technology.",
  about:
    "I am an MCA student at GLS University with a strong interest in Machine Learning, Artificial Intelligence, Data Science, and Full-Stack Development. I enjoy building intelligent applications that solve real-world problems through AI and modern software technologies.\n\nI have developed projects ranging from AI-powered web applications to IoT-based security systems, gaining hands-on experience with Python, FastAPI, Scikit-learn, SQL, React, Next.js, and Git. I continuously learn new technologies and enjoy turning ideas into practical, scalable solutions.\n\nI am currently seeking opportunities as a Machine Learning or Python Developer where I can contribute, learn, and grow as a software engineer.",
  email: "mananmaluka01@gmail.com",
  emailHref: "mailto:mananmaluka01@gmail.com",
  phone: "9033887588",
  location: "Ahmedabad, Gujarat",
  github: "https://github.com/manan0101",
  linkedin: "https://www.linkedin.com/in/manan-maluka-54a672319/",
  resumeUrl: "/resume/resume.pdf",
  photoUrl: "/profile/profile.jpg",
  status: "Open to ML / Python roles",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "C", "C++"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "FastAPI"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Cursor AI"],
  },
  {
    category: "Deployment",
    items: ["Render"],
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mindpulse",
    name: "MindPulse",
    description:
      "AI-powered mental health prediction platform with analytics dashboard.",
    technologies: ["Python", "FastAPI", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/manan0101/mindpulse",
    demo: "https://mindpulse-obzf.onrender.com/",
    featured: true,
  },
  {
    slug: "vanish",
    name: "Vanish",
    description:
      "Privacy-focused, real-time chat application without storing any user data, enabling secure communication with a clean user experience. Supports instant messaging, voice & video calls over WebSockets on a full-stack architecture.",
    technologies: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    status: "Ongoing College Mini Project",
    featured: true,
  },
  {
    slug: "pii-sanitizer-detect",
    name: "PII-Sanitizer Detect",
    description:
      "A solution to identify and sanitize Personally Identifiable Information from textual data, improving data privacy and security.",
    technologies: ["Python", "NLP"],
    github: "https://github.com/manan0101/Hackathon",
    featured: true,
  },
  {
    slug: "smart-door-lock",
    name: "Smart Door Lock & Alert System",
    description: "Arduino-based RFID smart security system with GSM alerts.",
    technologies: ["Arduino", "C++", "RFID", "GSM Module"],
  },
  {
    slug: "food-ordering-website",
    name: "Food Ordering Website",
    description: "Restaurant ordering website with a full admin panel.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/manan0101/delight12",
  },
];

export type Experience = {
  role: string;
  organization: string;
  duration: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    role: "Applied AI Intern",
    organization: "CSRBOX Foundation in association with AICTE & IBM SkillsBuild",
    duration: "2025 – 2026 (6 Weeks)",
    type: "Virtual Internship",
    responsibilities: [
      "Developed AI-powered applications using Python and Machine Learning.",
      "Worked with data preprocessing, model training, and prediction workflows.",
      "Built REST APIs using FastAPI for integrating Machine Learning models.",
      "Explored real-world AI use cases and gained hands-on experience in end-to-end AI application development.",
      "Strengthened skills in Python, Scikit-learn, Pandas, NumPy, and AI solution development.",
    ],
    technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "Git"],
  },
  {
    role: "Front-End Web Development Intern",
    organization: "CSRBOX Foundation with IBM SkillsBuild",
    duration: "2024 (6 Weeks)",
    type: "Virtual Internship",
    responsibilities: [
      "Developed responsive and user-friendly web interfaces.",
      "Built modern web pages using HTML, CSS, JavaScript, and Bootstrap.",
      "Improved understanding of UI/UX principles and responsive design.",
      "Worked on front-end development best practices and project-based assignments.",
      "Enhanced problem-solving and collaborative development skills.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
  },
];

export type Education = {
  degree: string;
  institution: string;
  duration: string;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GLS University",
    duration: "2025 – 2027",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shree Swaminarayan College of Computer Science",
    duration: "2022 – 2025",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: string;
  summary: string;
  imageUrl: string;
  pageDescription?: string;
};

const certificateAsset = (fileName: string) => encodeURI(`/certificates/${fileName}`);

export const certifications: Certification[] = [
  {
    title: "Applied AI Internship",
    issuer: "CSRBOX Foundation + AICTE + IBM SkillsBuild",
    year: "2025–2026",
    category: "Internship",
    summary: "Hands-on AI application development, model workflows, and Python-based problem solving.",
    imageUrl: certificateAsset("CSRBOX Foundation + AICTE + IBM SkillsBuild_certificate.png"),
    pageDescription: "Applied AI Internship certificate issued for project-based learning, model workflows, and practical AI development.",
  },
  {
    title: "Front-End Web Development Internship",
    issuer: "CSRBOX Foundation + IBM SkillsBuild",
    year: "2024",
    category: "Internship",
    summary: "Responsive interfaces, UI fundamentals, and project-based front-end development.",
    imageUrl: certificateAsset("IBM SkillsBuild Front end Web Development Summer Internship\u00A0Certificate.png"),
    pageDescription: "Front-end web development internship certificate covering responsive UI building and practical web development exercises.",
  },
  {
    title: "HackaMINed Hackathon",
    issuer: "Nirma University",
    year: "March,2026",
    category: "Hackathon",
    summary: "Collaborative build sprint focused on practical problem solving and delivery.",
    imageUrl: certificateAsset("hackathon_certificate.png"),
    pageDescription: "HackaMINed hackathon participation certificate from Nirma University.",
  },
  {
    title: "Hour of AI Workshop",
    issuer: "GLS ACM Student Chapter",
    year: "Jan, 2026",
    category: "Workshop",
    summary: "Introductory AI learning experience with practical concepts and demos.",
    imageUrl: certificateAsset("ACM_AI_Workshop_Certificate.png"),
    pageDescription: "AI workshop participation certificate focused on foundational AI learning and demos.",
  },
  {
    title: "DevOps Mastery Workshop",
    issuer: "Workshop Certificate",
    year: "Feb, 2026",
    category: "Workshop",
    summary: "DevOps concepts, deployment workflows, and tooling fundamentals.",
    imageUrl: certificateAsset("DevOps_Mastery_workshop_certificate.png"),
    pageDescription: "Workshop certificate covering DevOps workflows, tooling, and delivery concepts.",
  },
  {
    title: "SQL Workshop",
    issuer: "Workshop Certificate",
    year: "Feb, 2026",
    category: "Workshop",
    summary: "Querying, filtering, joins, and database problem solving with SQL.",
    imageUrl: certificateAsset("SQL_Workshop.png"),
    pageDescription: "SQL workshop certificate for database querying, joins, and data handling fundamentals.",
  },
  {
    title: "Generative AI Mastermind Workshop",
    issuer: "Workshop Certificate",
    year: "April, 2026",
    category: "Workshop",
    summary: "Generative AI workflows, prompt thinking, and emerging use cases.",
    imageUrl: certificateAsset("Generative_ai_Mastermind_Workshop.png"),
    pageDescription: "Generative AI workshop certificate for prompt strategy, workflows, and practical use cases.",
  },
];

export const achievements: string[] = [
  "First Prize – Flash 2K24 Project Exhibition for Smart Door Lock & Alert System",
  "Team Leader in first Hackathon participation",
  "Developed Machine Learning, Web Development, and IoT projects",
  "Successfully completed industry-oriented AI and Front-End internships",
  "Built and deployed web applications and Machine Learning projects",
  "Actively improving problem-solving and software development skills through continuous learning",
];

export const stats = [
  { label: "Projects shipped", value: "5+" },
  { label: "Internships completed", value: "2" },
  { label: "Core stack", value: "Python / ML" },
  { label: "Status", value: "Open to work" },
];
