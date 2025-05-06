// terminalCommands.js
const PROMPT_MESSAGE = "🌌 <b>Enter</b> <i>menu</i> or <i>help</i> to start or try a <i>secret</i> command if you're a real hacker...";

export const TERMINAL_INTRO = [
  "<b>👾 Welcome</b> to the terminal of Kevin AKA <i>🥤 kevin_ganem 🥤</i>!",
  "",
  PROMPT_MESSAGE,
];

const experienceCommands = {
  professional: `<b>🚀 _Professional_</b><br>
  ➤ <b>FullStack Developer at OfficeRiders</b> <i>(2022 - 2024)</i><br>
  <u>About:</u> Online platform for professional space rentals (seminars, meetings, events).
  <u>Key achievements:</u>
  &emsp;➤ Designed and implemented a <b>custom search algorithm</b> to match users with optimal spaces based on location, capacity, and equipment — improving booking efficiency by 40%.
  &emsp;➤ Led development on <b>v2 of the platform</b>, with a focus on performance optimization, UI/UX consistency, and SEO best practices.
  &emsp;➤ Participated in a full migration from <b>Meteor to Next.js</b>, refactoring the codebase into a modular architecture with API routes, SSR, and static optimization.
  &emsp;➤ Worked in Agile (Scrum), contributing to sprint planning, code reviews, and feature testing.
  &emsp;➤ Integrated third-party services including <b>Stripe, Sendinblue, and Algolia</b> to enhance platform capabilities and scalability.<br>

${PROMPT_MESSAGE}`,

  personal: `<b>🛠️ _Personal_</b><br>
  ➤ <b>Co-Founder & UX/UI Developer at Shiawase</b> <i>(2024 - Present)</i><br>
  <u>About:</u> Japanese Pop Culture Mystery Box E-commerce
  <u>Key achievements:</u>
  &emsp;➤ Developed and maintained the <b>Shiawase storefront using Wix & Velo</b> (JavaScript-based CMS), optimizing UX for mobile and desktop.
  &emsp;➤ Designed multiple mystery box lines (Panta, Kuma, Fugu, Kame) with unique visual identity and product curation.
  &emsp;➤ Implemented <b>custom checkout logic in Velo</b> to handle promo codes, user tracking, and A/B testing.
  &emsp;➤ Built automations for <b>email marketing, stock updates</b>, and user onboarding via Wix Automations & Velo scripts.
  &emsp;➤ Managed influencer partnerships, increasing organic traffic by 35%.
  &emsp;➤ Created product listing modules using <b>Velo datasets and dynamic pages</b> for scalability.<br>
  
  ➤ <b>Founder & Front-End Developer at Deezin Studio</b> <i>(2024 - Present)</i><br>
  <u>About:</u> Boutique agency offering web design & development for creatives and small businesses.
  <u>Key achievements:</u>
  &emsp;➤ Designed and deployed websites using <b>Wix, WordPress, and Shopify</b> with performance-first mindset.
  &emsp;➤ Developed <b>custom Velo/Liquid/JS scripts</b> to manage forms, dynamic content, and booking systems.
  &emsp;➤ Built reusable <b>UI kits and component libraries</b> for scalable design.
  &emsp;➤ Led client discovery workshops and translated needs into <b>wireframes and dev specs</b>.
  &emsp;➤ Managed full project lifecycles with integrated feedback and analytics.<br>
  
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