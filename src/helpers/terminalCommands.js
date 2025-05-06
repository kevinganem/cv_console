// terminalCommands.js
const PROMPT_MESSAGE = "🌌 <b>Enter</b> <i>menu</i> or <i>help</i> to start or try a <i>secret</i> command if you're a real hacker...";

export const TERMINAL_INTRO = [
  "<b>👾 Welcome</b> to the terminal of Kevin AKA <i>🥤 kevin_ganem 🥤</i>!",
  "",
  PROMPT_MESSAGE,
];

const experienceCommands = {
  professional: `<b>🚀 _Professional_</b>
    ➤ FullStack Developer at <b>OfficeRiders</b> <i>(2022 - 2024)</i>
    ➤ <u>About:</u>
    ➤ Online platform for professional space rentals (seminars, meetings, events). 
    ➤ <u>Key achievements:</u>
    ➤ Designed and implemented a **custom search algorithm** to match users with optimal spaces based on location, capacity, and equipment, improving booking efficiency by 40%.  
    ➤ Played a key role in building and deploying **v2 of the platform**, with a focus on **performance optimization, UI/UX consistency**, and SEO best practices.  
    ➤ Participated in a full **migration from Meteor to Next.js**, refactoring the codebase into a modular architecture with **API routes, SSR, and static optimization**.  
    ➤ Collaborated with the product team using Agile methodology (Scrum), and contributed to sprint planning, code reviews, and feature testing.  
    ➤ Integrated third-party services (Stripe, Sendinblue, Algolia) to enhance the platform’s scalability and service offering.\n
  ${PROMPT_MESSAGE}`,

  personal: `<b>🛠️ _Personal_</b>
    ➤ Co-Founder & UX/UI Developer at <b>Shiawase</b> <i>(2024 - Present)</i>
    ➤ <u>About:</u>
    ➤ Japanese Pop Culture Mystery Box E-commerce
    ➤ <u>Key achievements:</u>
    ➤ Developed and maintained the **Shiawase storefront using Wix & Velo (JavaScript-based CMS)**, optimizing UX for mobile and desktop users.  
    ➤ Designed multiple mystery box lines (Panta, Kuma, Fugu, Kame) with unique visual identity and product selection strategy.  
    ➤ Implemented **custom checkout logic in Velo** to handle promotional codes, user tracking, and A/B testing.  
    ➤ Built automations for **email marketing, stock updates**, and user onboarding via Wix Automations & custom Velo scripts.  
    ➤ Managed influencer outreach pipeline, increasing monthly organic traffic by 35% through strategic partnerships.  
    ➤ Created product listing modules using dynamic pages and Velo datasets for scalability and fast iteration.\n
    ➤ Founder & Front-End Developer at <b>Deezin Studio</b> <i>(2024 - Present)</i>
    ➤ <u>About:</u>
    ➤ Boutique agency offering website design & development for creative entrepreneurs and small businesses. 
    ➤ <u>Key achievements:</u>
    ➤ Designed and deployed client websites using **Wix, WordPress, and Shopify**, ensuring performance, accessibility, and responsive UI.  
    ➤ Developed **custom Velo/Liquid/JS scripts** to handle dynamic content, contact forms, and booking systems tailored to each client.  
    ➤ Built reusable **design systems and UI kits** to streamline development across multiple projects.  
    ➤ Led client discovery workshops and translated business needs into technical specs and design wireframes.  
    ➤ Managed full project lifecycles from concept to launch, integrating feedback loops and performance tracking.\n
  ${PROMPT_MESSAGE}`,
};

const skillsCommands = {
  frontend: `<b>🖥️ _Front-end Skills_</b>
    ➤ HTML / CSS
    ➤ React / React Native
    ➤ Next.js
    ➤ Liquid/Velo
    ➤ Flutter (beginner)
    ➤ E-commerce platforms (Wix, Shopify, Wordpress)\n
  ${PROMPT_MESSAGE}`,

  backend: `<b>⚙️ _Back-end Skills_</b>
    ➤ Node.js
    ➤ Javascript
    ➤ GraphQL
    ➤ Python (beginner)
    ➤ MongoDB\n
  ${PROMPT_MESSAGE}`,

  other: `<b>🔧 _Other Skills_</b>
    ➤ Git
    ➤ APIs
    ➤ Docker
    ➤ IA (ChatGPT, MidJourney)
    ➤ Photoshop
    ➤ Blender\n
  ${PROMPT_MESSAGE}`,
};

const commands = {
  experience: `<b>💼 _Experience Overview_</b>
    ➤ Type <i>professional, personal</i> to see specific experiences.\n`,

  skills: `<b>🧠 _Skills Overview_</b>
    ➤ Type <i>frontend, backend,</i> or <i>other</i> to see specific skills.\n`,

  help: `<b>🆘 _Help Center_</b>
    ➤ Type <i>menu</i> to see all available commands.
    ➤ Try: <i>experience, skills, clear</i>\n`,

  menu: `<b>📜 _Command Menu_</b>
    ➤ Type <i>experience</i>: See my secret operations
    ➤ Type <i>skills</i>: View my skills
    ➤ Type <i>upload</i>: Download my CV
    ➤ Type <i>help</i>: Quick help
    ➤ Type <i>clear</i>: Clear the terminal\n`,

  secret: "Launching...",
};

export const allCommands = {
  ...commands,
  ...experienceCommands,
  ...skillsCommands,
};