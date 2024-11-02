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
    ➤ Professional Space Rental Platform
    ➤ <u>Key achievements:</u>
    ➤ Developed a complex search algorithm to optimize the matching
      of professional spaces for seminars, meetings, and events,
      enhancing user experience and booking efficiency.
    ➤ Contributed to the development of the site’s second version,
      improving both performance and user interface.
    ➤ Assisted in migrating the platform from Meteor to Next.js,
      ensuring a smoother, more scalable architecture for future growth.\n
  ${PROMPT_MESSAGE}`,

  personal: `<b>🛠️ _Personal_</b>
    ➤ Co-Founder & Designer at <b>Shiawase</b> <i>(2024 - present)</i>
    ➤ <u>About:</u>
    ➤ Japanese Pop Culture Mystery Box E-commerce
    ➤ <u>Key achievements:</u>
    ➤ Created and managed the Shiawase website using Wix,
      catering to fans of Japanese pop culture and anime.
    ➤ Designed all mystery box themes, each featuring
      unique products and curated aesthetics.
    ➤ Built partnerships with influencers to drive brand
      awareness and engagement in the anime and Japanese
      pop culture communities.\n
    ➤ Founder & Web Designer at <b>Deezin Studio</b> <i>(2024 - present)</i>
    ➤ <u>About:</u>
    ➤ Website Development Agency
    ➤ <u>Key achievements:</u>
    ➤ Created and launched websites on platforms such as Wix,
      WordPress, and Shopify, tailored to client needs and brand identity.
    ➤ Managed end-to-end project development, including design,
      functionality customization, and client feedback integration.
    ➤ Provided ongoing support and updates to ensure long-term client
      satisfaction and website performance.\n
  ${PROMPT_MESSAGE}`,
};

const skillsCommands = {
  frontend: `<b>🖥️ _Front-end Skills_</b>
    ➤ HTML / CSS
    ➤ React/React Native
    ➤ Next.js
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