// terminalCommands.js
import AnimatedWelcome from '../components/AnimatedWelcome';

export const TERMINAL_INTRO = ['WELCOME_ANIMATED'];

const professionalExperiences = [
  {
    title: "Shiawase",
    period: "2024-Present",
    role: "Co-Founder & UX/UI Developer",
    about: "Japanese Pop Culture Mystery Box E-commerce",
    achievements: [
      "Developed and maintained the Shiawase storefront using Wix & Velo (JavaScript-based CMS), optimizing UX for mobile and desktop",
      "Designed multiple mystery box lines (Panta, Kuma, Fugu, Kame) with unique visual identity and product curation",
      "Implemented custom checkout logic in Velo to handle promo codes, user tracking, and A/B testing",
      "Built automations for email marketing, stock updates, and user onboarding via Wix Automations & Velo scripts",
      "Managed influencer partnerships, increasing organic traffic by 35%",
      "Created product listing modules using Velo datasets and dynamic pages for scalability"
    ],
    technologies: ["Wix", "Velo", "JavaScript", "E-commerce", "UI/UX Design"]
  },
  {
    title: "OfficeRiders",
    period: "2022-2024",
    role: "FullStack Developer",
    about: "Online platform for professional space rentals (seminars, meetings, events).",
    achievements: [
      "Designed and implemented a custom search algorithm to match users with optimal spaces based on location, capacity, and equipment — improving booking efficiency by 40%",
      "Led development on v2 of the platform, with a focus on performance optimization, UI/UX consistency, and SEO best practices",
      "Participated in a full migration from Meteor to Next.js, refactoring the codebase into a modular architecture with API routes, SSR, and static optimization",
      "Worked in Agile (Scrum), contributing to sprint planning, code reviews, and feature testing",
      "Integrated third-party services including Stripe, Sendinblue, and Algolia to enhance platform capabilities and scalability"
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "GraphQL", "Stripe", "Sendinblue", "Algolia"]
  },
  {
    title: "Deezin Studio",
    period: "2022-2023",
    role: "Founder & Front-End Developer",
    about: "Boutique agency offering web design & development for creatives and small businesses",
    achievements: [
      "Designed and deployed websites using Wix, WordPress, and Shopify with performance-first mindset",
      "Developed custom Velo/Liquid/JS scripts to manage forms, dynamic content, and booking systems",
      "Built reusable UI kits and component libraries for scalable design",
      "Led client discovery workshops and translated needs into wireframes and dev specs",
      "Managed full project lifecycles with integrated feedback and analytics"
    ],
    technologies: ["Wix", "WordPress", "Shopify", "JavaScript", "UI/UX Design", "Project Management"]
  }
];

const personalExperiences = [
  {
    "title": "Fitness App",
    "period": "2025-Present",
    "role": "UX/UI Developer",
    "about": "Fitness & Nutrition Coaching App with Modern Gamified Experience",
    "achievements": [
      "Designed and developed a modern, gamified mobile app using React Native, focusing on fitness and nutrition coaching",
      "Created adaptive nutrition templates for training and rest days with dynamic meal suggestions and macros tracking",
      "Integrated Firebase for real-time user data management, enabling smooth progress tracking and notifications",
      "Developed a highly interactive hydration tracking system with dynamic, user-friendly UI",
      "Implemented a bottom sheet system for easy access to exercise and meal libraries, enhancing user experience",
      "Optimized app performance and responsiveness, ensuring an enjoyable experience across various devices"
    ],
    "technologies": ["React Native", "Firebase", "JavaScript", "UI/UX Design", "Gamification"]
  },
  {
    "title": "Social Link App",
    "period": "2021",
    "role": "Developer for school project",
    "about": "QR Code-based Social Link Sharing App",
    "achievements": [
      "Designed and developed a cross-platform mobile app for generating custom QR codes linked to social profiles",
      "Implemented real-time data updates for user profiles and QR codes",
      "Optimized user interface with intuitive design for seamless QR code creation and scanning",
      "Introduced customizable themes and colors for personalizing QR codes, enhancing brand identity"
    ],
    "technologies": ["React Native", "MongoDB", "UI/UX Design"]
  }
];

const skillsCategories = [
  {
    title: "Front-end Skills",
    icon: "🖥️",
    skills: [
      "HTML / CSS",
      "React / React Native",
      "Next.js",
      "Liquid/Velo",
      "Flutter",
      "E-commerce platforms"
    ]
  },
  {
    title: "Back-end Skills",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Javascript",
      "GraphQL",
      "MongoDB"
    ]
  },
  {
    title: "Other Skills",
    icon: "🔧",
    skills: [
      "Git",
      "APIs",
      "Docker",
      "IA Tools",
      "Photoshop",
      "Blender"
    ]
  }
];

const commands = {
  experience: `<div class="command-section">
    <div class="command-header">💼 Experience</div>
    <div class="command-options">
      <span class="command-option">professional</span> — View my professional journey
      <span class="command-option">personal</span> — Explore my personal projects
    </div>
  </div>`,

  skills: `<div class="command-section">
    <div class="command-header">🧠 Skills</div>
    <div class="command-options">
      <span class="command-option">skills</span> — Browse my technical expertise
    </div>
  </div>`,

  help: `<div class="command-section">
    <div class="command-header">🆘 Quick Help</div>
    <div class="command-options">
      <span class="command-option">menu</span> — Show all available commands
      <span class="command-option">experience</span> — View my experience
      <span class="command-option">skills</span> — Check my skills
      <span class="command-option">clear</span> — Reset the terminal
    </div>
    <div class="command-hint">💡 Keep exploring... you might find something special</div>
  </div>`,

  menu: `<div class="command-section">
    <div class="command-header">📜 Command Menu</div>
    <div class="command-options">
      <span class="command-option">experience</span> — View my professional & personal journey
      <span class="command-option">skills</span> — Explore my technical expertise
      <span class="command-option">upload</span> — Download my CV
      <span class="command-option">help</span> — Quick navigation guide
      <span class="command-option">clear</span> — Reset the terminal
    </div>
    <div class="command-hint">💡 Some commands are hidden in plain sight...</div>
  </div>`,

  secret: "Launching...",
};

// Format experience data for popup
function formatExperiences(experiences, emoji) {
  return experiences.map(exp => (
    `<div class='experience-section'>
      <div class='experience-section-title' style='font-size:1.1em;'>${emoji} <b>${exp.title}</b> <span style='font-size:0.9em;'>(${exp.period})</span></div>
      <div class='experience-item'><b>${exp.role}</b> — <i>${exp.about}</i></div>
      <div class='experience-section-title'>🏆 Achievements:</div>
      <ul style='margin-left:1em;'>${exp.achievements.map(a => `<li>✨ ${a}</li>`).join('')}</ul>
      <div class='experience-section-title'>🛠️ Technologies:</div>
      <div class='experience-skills'>${exp.technologies.map(t => `<span class='skill-tag'>${t}</span>`).join(' ')}</div>
    </div>`
  )).join('<hr />');
}

// Format skills data for popup
function formatSkills(skillsCategories) {
  return skillsCategories.map(cat => (
    `<div class='experience-section'>
      <div class='experience-section-title'>${cat.icon} <b>${cat.title}</b></div>
      <div class='experience-skills'>${cat.skills.map(s => `<span class='skill-tag'>${s}</span>`).join(' ')}</div>
    </div>`
  )).join('<hr />');
}

export const allCommands = {
  ...commands,
  professionalExperiences,
  personalExperiences,
  skillsCategories,
  formatExperiences,
  formatSkills
};