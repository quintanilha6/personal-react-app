const siteData = {
  information: {
    name: "Joao Quintanilha",
    aboutContent: "I'm Joao Quintanilha, a 32-year-old Software Developer with an MSc in Computer and Telematics Engineering. I could list all the usual buzzwords - proactive, problem-solver, dynamic, resourceful - but let's be honest, ChatGPT already does that better than anyone. In reality, I'm just a simple guy who enjoys building things that work, solving real problems, and helping a team stay balanced and happy along the way. I may not be a rocket scientist, but you can count on me to work hard and aim for something meaningful. Ping me if you'd like to know more - I'm always up for a good chat.",
    miniAboutContent: "A Software Developer who loves to code, create and learn new technologies. Experienced in Backend, Full-Stack, and Decentralized applications development.",
    birthDate: "1993-04-05",
    nationality: "Portuguese",
    language: "Portuguese, English, French, Spanish",
    email: "jpquintanilha@protonmail.com",
    address: "Murten, Switzerland",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/quintanilha6/",
      github: "https://github.com/quintanilha6",
      stack: "https://ethereum.stackexchange.com/users/51252/joao-quintanilha"
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/CV.pdf"
  },
  services: [
    {
      title: "Backend Development",
      icon: "fa-solid fa-code",
      details: "Building reliable backend services with Java, Spring Boot, Python, and SQL-backed systems. My work has ranged from Swiss Post shipment platforms to CERN operational tools, with a strong focus on APIs, integrations, testing, and production-ready maintainability."
    },
    {
      title: "Full-stack Development",
      icon: "fa-solid fa-palette",
      details: "Designing and evolving web applications end to end, from backend services and database flows to user-facing features. I have worked across enterprise platforms, internal tools, and customer products, always aiming for solutions that are clean, practical, and easy to grow."
    },
    {
      title: "Decentralized Applications",
      icon: "fa-solid fa-certificate",
      details: "Developing blockchain-based solutions with Solidity, Web3, and smart-contract architectures. This includes dApps, hybrid systems connecting traditional backends with blockchain networks, and research-driven work around interoperability and decentralized product design."
    },
    {
      title: "Leadership",
      icon: "fa-solid fa-compass-drafting",
      details: "Often acting as a technical lead in practice, helping teams make sound architectural decisions, choose the right technologies, and keep implementations aligned. I enjoy driving discussions around design patterns, code quality, team balance, and long-term maintainability."
    },
    {
      title: "Hiring & Mentoring",
      icon: "fa-solid fa-people-group",
      details: "Contributing beyond delivery by interviewing developer candidates, supporting hiring decisions, and helping new teammates ramp up effectively. I value the people side of engineering just as much as the technical one, especially when building healthy and reliable teams."
    },
    {
      title: "Architecture",
      icon: "fa-solid fa-diagram-project",
      details: "Frequently involved in architectural decision making, from shaping business-oriented solution flows to choosing the right technical direction. This includes evaluating AWS services, defining integration approaches, and helping teams make design choices that stay practical, scalable, and maintainable over time."
    }
  ],
  skills: [
    { title: "Java (Spring)", value: 5 },
    { title: "Python (Falcon, Django)", value: 4 },
    { title: "Solidity", value: 4 },
    { title: "Javascript/Typescript (Node, ReactJS, Angular)", value: 4 },
    { title: "Containerization and Orchestration (Docker, Docker Compose, Kubernetes)", value: 5 },
    { title: "AWS Services", value: 4 },
    { title: "Stream Processing (Kafka)", value: 4 },
    { title: "Databases and ORMs (PostgreSQL, Oracle, MySQL, SQLAlchemy, Hibernate)", value: 5 },
    { title: "Testing Frameworks (JUnit, Mockito, Robot Framework)", value: 5 },
    { title: "CI/CD (Jenkins, GitLab, GitHub)", value: 5 },
    { title: "Nginx and Apache", value: 3 },
    { title: "HTML and Styling (CSS, Sass, Bootstrap)", value: 4 }
  ],
  portfolios: [
    { id: 1, title: "Frachtbrief Online", subtitle: "Online platform to create international waybills for Swiss Post.", imageUrl: ["/images/post.png"], url: "https://apps.post.ch/fb" },
    { id: 2, title: "CMS Online Platform", subtitle: "Control systems for the Compact Muon Solenoid experiment.", imageUrl: ["/images/cmsonline.png"], url: "https://cmsonline.cern.ch/" },
    { id: 3, title: "Leirifisio Website", subtitle: "Website to promote a national small-sized physiotherapy center.", imageUrl: ["/images/leirifisio.png"], url: "https://www.leirifisio.com/" },
    { id: 4, title: "Bosch Smart Home", subtitle: "IoT network for home devices.", imageUrl: ["/images/boschhome2.jpg"], largeImageUrl: ["/images/boschhome.png", "/images/boschhome2.jpg"], url: "https://www.youtube.com/@BoschSmartHome" },
    { id: 5, title: "Medium Article", subtitle: "Blockchain for non-tech-savvy - Part I.", imageUrl: ["/images/medium.png"], url: "https://medium.com/ubigen/blockchain-for-non-tech-savvy-part-i-562f24712a23" },
    { id: 6, title: "drEVen", subtitle: "Ubiwhere @ H2020 Vicinity project.", imageUrl: ["/images/dreven.jpg"], largeImageUrl: ["/images/dreven-lg.jpg", "/images/dreven-lg1.jpg", "/images/dreven-lg3.jpg", "/images/dreven-lg2.jpg", "/images/dreven-lg4.jpg"], url: "https://vicinity2020.eu/vicinity/content/pilots/dreven/overview" },
    { id: 7, title: "Dyagora", subtitle: "Zenithwings @ H2020 Blockchers project.", imageUrl: ["/images/storywine.jpg"], largeImageUrl: ["/images/storywine-lg.png"], url: "https://www.zenithwings.com/dyagora/" },
    { id: 8, title: "My Website", subtitle: "Personal website with ReactJS.", imageUrl: ["/images/mywebsite.jpg"], largeImageUrl: ["/images/mywebsite-lg.png"], url: "https://github.com/quintanilha6/personal-react-app" },
    { id: 9, title: "Crowdfunding with Ethereum", subtitle: "Vote-based crowdfunding system supported by Ethereum blockchain and smart contracts.", imageUrl: ["/images/crowdfundingethereum.jpg"], url: "https://github.com/quintanilha6/ETHEREUM-crowdfunding-project" },
    { id: 10, title: "Spring Boot Template Initializers", subtitle: "A series of Spring Boot templates so new projects do not start from scratch.", imageUrl: ["/images/springboot.png"], url: "https://github.com/quintanilha6/spring-boot" },
    { id: 11, title: "Artificial Intelligence", subtitle: "Autonomous agent that learns and profits against casino Blackjack.", imageUrl: ["/images/aibj.jpg"], url: "https://github.com/quintanilha6/artificial_intelligence_blackjack" },
    { id: 12, title: "Master Thesis", subtitle: "Multi-agent loyalty program over blockchain.", imageUrl: ["/images/ua.jpg"], url: "https://ria.ua.pt/handle/10773/29434" },
    { id: 13, title: "Bachelor Project", subtitle: "Patient management platform for a post-stroke clinic in partnership with Rovisco Pais.", imageUrl: ["/images/ua.jpg"], url: "https://github.com/quintanilha6/avc_project" }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2023-Current",
        position: "Software Developer",
        company: "Swiss Post",
        details: "At PostIT, I am part of the International Mail and Parcels team, developing and maintaining services that handle international shipments. Our core product, Frachtbrief Online, is built with Java and Spring Boot, deployed on AWS using Docker containers, and used daily by thousands of customers to create international waybills. I actively participate in all stages of the software development lifecycle, from requirements analysis to deployment and production monitoring. In addition to backend development, I contribute to improving CI/CD pipelines with Jenkins and GitHub, maintain an extensive test automation suite in Robot Framework, and support team processes through activities such as recruitment, onboarding, and Scrum Master deputization."
      },
      {
        id: 2,
        year: "2021-2023",
        position: "Software Developer",
        company: "CERN",
        details: "Within CERN's Experimental Physics Department, I worked on the control systems of the Compact Muon Solenoid experiment, one of the world's largest and most complex detectors. I was responsible for maintaining and enhancing several web applications in the cmsonline ecosystem, used for monitoring, operations, and access management across CMS subsystems. My work focused on backend development with Java and Oracle Application Development Framework, deploying to Oracle WebLogic servers. I also contributed to the gradual migration of legacy components to Spring Boot and provided technical support to users, troubleshooting issues and clarifying operational questions."
      },
      {
        id: 3,
        year: "2020-2021",
        position: "Software Developer",
        company: "Bosch Security Systems",
        details: "As part of the first international team for Bosch Smart Home outside Germany, I contributed to building interoperability between Bosch home devices and third-party ecosystems. I developed integrations enabling voice control features, such as opening or closing shutters and door locks, through Google Assistant and Amazon Alexa. Most of the work was done with Spring and Vert.x, within a large-scale CI/CD environment powered by Jenkins. I collaborated closely with cross-functional teams following Scrum to deliver production-ready features in an IoT context."
      },
      {
        id: 4,
        year: "2018-2020",
        position: "Backend and Blockchain Developer",
        company: "Ubiwhere",
        details: "At Ubiwhere, I helped design and develop decentralized architectures and smart-contract-based platforms for blockchain interoperability. I built dApps using Solidity, Truffle, and Web3, integrating them with public Ethereum networks over HTTPS. I also designed and implemented REST APIs in Python and Java, containerized backend services and databases with Docker, and contributed to defining data synchronization strategies between traditional databases and blockchain ledgers for hybrid applications."
      }
    ],
    educationExperience: [
      { id: 1, year: "2013-2019", graduation: "Bachelor and Master of Science", university: "University of Aveiro", details: "Computer and Telematics Engineering" },
      { id: 2, year: "2017-2018", graduation: "Master of Science - Exchange Programme", university: "University of Zagreb", details: "Software Engineering and Information Systems" },
      { id: 3, year: "2016-2017", graduation: "Bachelor of Science - Exchange Programme", university: "University of Silesia", details: "Information Technologies" }
    ],
    certificates: [
      { id: 1, year: "2023", certificate: "First Aid - Life Saving Actions", issuingEntity: "CERN" },
      { id: 2, year: "2022", certificate: "Professional Scrum Master I (PSM I)", issuingEntity: "Scrum.org" },
      { id: 3, year: "2020", certificate: "Docker Mastery: with Kubernetes + Swarm", issuingEntity: "Udemy" },
      { id: 4, year: "2020", certificate: "Spring Boot Development", issuingEntity: "Udemy" },
      { id: 5, year: "2019", certificate: "Basic Life Support", issuingEntity: "UNAVE" },
      { id: 6, year: "2018", certificate: "Blockchain Development on Hyperledger Fabric Using Composer", issuingEntity: "Udemy" },
      { id: 7, year: "2018", certificate: "Ethereum and Solidity: Developer's Guide", issuingEntity: "Udemy" },
      { id: 8, year: "2014", certificate: "First Certificate in English", issuingEntity: "Royal School of Languages" }
    ]
  },
  hobbies: {
    sports: {
      handball: {
        year: "1998-2020",
        details: "Handball has been part of my life for more than two decades. Because of it, I made friends for life and had the opportunity to play with and against European and Portuguese first-class teams and players.",
        teams: ["Juve Lis", "Sao Bernardo", "PPD Zagreb", "University of Aveiro"],
        titles: ["National University Champion", "8th Place European Championship", "2x Runner-up of National University Championship", "Final 4 Junior Championship of the Portuguese First Division", "Final 4 Main Championship of the Portuguese Second Division"],
        imageUrl: "/images/1place.jpg",
        advantages: "Teamwork, commitment, social involvement, work under pressure"
      },
      marathons: {
        year: "2017-Current",
        details: "Running elevates my mind-state to a productive point. While I'm running I love hearing tech podcasts and learning about many different topics. It keeps my mind sane and my lifestyle healthy. I love challenging my body with extreme activities like running and biking marathons, keeping my body aware that my mind is always in charge.",
        competitions: ["Geneva Harmony Marathon", "EDP Lisbon Marathon", "Aveiro Half Marathon", "Ovar Half Marathon"],
        imageUrl: "/images/marathon.jpg",
        advantages: "Discipline, persistence, hard work"
      }
    },
    trips: {
      year: "2014-Current",
      visitedCountries: ["Austria", "Belgium", "Bosnia and Herzegovina", "China", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Hong Kong", "Hungary", "Iceland", "Ireland", "Italy", "Macao", "Monaco", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom"],
      details: "Travelling was always a passion of mine. As soon as I turned 18 and was allowed to travel, I bought myself an Interrail ticket and managed to travel across many cities in Europe. The passion kept being fed by the amazing experiences I had. Years later, I have managed to travel around 30 countries, learning about many different cultures, people, and behaviours.",
      imageUrl: "/images/travel.jpg",
      advantages: "Self-awareness, organization, budget management, problem-solving"
    },
    music: {
      year: "2005-Current",
      details: "I remember watching my father playing the guitar when I was young. His music felt right to my ears, making me always wonder if I could play it myself. When I was 11, he offered me my first guitar, and I started practicing every day after school. After 15 years, I can say I am a talented self-taught musician who has played in many small concerts and weddings.",
      instruments: ["Guitar", "Ukulele", "Piano"],
      imageUrl: "/images/music.jpg",
      advantages: "Self-learning, commitment, patience, perseverance, work under pressure"
    }
  },
  volunteering: {
    esn: {
      year: "2013-2017",
      details: "Because I was always fascinated by foreign cultures, as soon as I joined college I searched for international activities. Erasmus Student Network offered me a position as a staff member and Erasmus buddy, where I helped foreign students and organised events.",
      location: "University of Aveiro",
      imageUrl: "/images/esn.jpg"
    },
    bancoAlimentar: {
      year: "2012-2014",
      details: "Banco Alimentar is a non-profit association that gathers food for people in need, fighting every day for a better future. There I was responsible for manually filtering and storing the different food types collected from the community.",
      location: "Parceiros, Leiria",
      imageUrl: "/images/ba.jpg"
    },
    waiter: {
      year: "2014-Current",
      details: "Most of my college summers were spent working and helping family businesses. Adega do Luis is a lovely rustic family restaurant where I worked as a waiter during summers and on larger festive days, such as New Year's Eve.",
      location: "Porto de Mos, Leiria",
      imageUrl: "/images/adegadoluis.jpeg"
    }
  },
  contactInfo: {
    phoneNumbers: ["+351 91 245 150 0", "+41 76 20 30 416"],
    emailAddress: ["jpquintanilha@protonmail.com", "jpquintanilha6@gmail.com"],
    address: "Murten, Switzerland"
  }
};

const pageIds = ["home", "about", "resume", "portfolios", "volunteering", "hobbies", "contact"];
const galleries = new Map();
const lightboxState = { galleryId: null, index: 0 };

function assetPath(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `.${path.startsWith("/") ? "/public" + path : "/" + path}`;
}

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }
  return age;
}

function registerGallery(id, images) {
  galleries.set(id, images.map(assetPath));
}

function createSectionTitle(title) {
  return `
    <div class="mi-sectiontitle">
      <h2>${title}</h2>
      <span>${title}</span>
    </div>
  `;
}

function createPillList(items) {
  return `<ul class="mi-pill-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function createResumeItems(items) {
  return items.map((item) => `
    <div class="mi-resume">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">${item.year}</h6>
      </div>
      <div class="mi-resume-details">
        <h5>${item.position || item.graduation || item.certificate}</h5>
        <h6 class="mi-resume-company">${item.company || item.university || item.issuingEntity}</h6>
        ${item.details ? `<p>${item.details}</p>` : ""}
      </div>
    </div>
  `).join("");
}

function createProgressItems(items) {
  return items.map((skill) => `
    <div class="col-lg-6">
      <div class="mi-skill-card">
        <div class="mi-skill-card-head">
          <h6 class="mi-progress-title">${skill.title}</h6>
          <span class="mi-skill-level">Level ${skill.value}/5</span>
        </div>
        <div class="mi-progress-container" aria-label="${skill.title} level ${skill.value} out of 5">
          ${Array.from({ length: 5 }, (_, index) => {
            const level = index + 1;
            const filled = level <= skill.value ? "is-filled" : "";
            return `<div class="mi-progress-bar ${filled}"><span>${level}</span></div>`;
          }).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function createPortfolioItems(items) {
  return items.map((portfolio) => {
    const galleryId = `portfolio-${portfolio.id}`;
    const preview = assetPath(portfolio.imageUrl[0]);
    const hasGallery = Array.isArray(portfolio.largeImageUrl) && portfolio.largeImageUrl.length > 0;
    if (hasGallery) {
      registerGallery(galleryId, portfolio.largeImageUrl);
    }

    return `
      <div class="col-lg-4 col-md-6 col-12 mt-30">
        <article class="mi-portfolio">
          <div class="mi-portfolio-image">
            <img src="${preview}" alt="${portfolio.title}">
            <ul>
              ${hasGallery ? `
                <li>
                  <button type="button" class="gallery-trigger" data-gallery-id="${galleryId}" data-gallery-index="0" aria-label="Open image gallery for ${portfolio.title}">
                    <i class="fa-solid fa-magnifying-glass-plus"></i>
                  </button>
                </li>
              ` : ""}
              ${portfolio.url ? `
                <li>
                  <a href="${portfolio.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${portfolio.title}">
                    <i class="fa-solid fa-link"></i>
                  </a>
                </li>
              ` : ""}
            </ul>
          </div>
          <h5>${portfolio.url ? `<a href="${portfolio.url}" target="_blank" rel="noopener noreferrer">${portfolio.title}</a>` : portfolio.title}</h5>
          ${portfolio.subtitle ? `<h6>${portfolio.subtitle}</h6>` : ""}
        </article>
      </div>
    `;
  }).join("");
}

function createSocialLinks() {
  const icons = {
    linkedin: "fa-brands fa-linkedin-in",
    github: "fa-brands fa-github",
    stack: "fa-brands fa-stack-overflow"
  };

  return `
    <ul class="mi-socialicons mi-socialicons-bordered">
      ${Object.entries(siteData.information.socialLinks).map(([key, value]) => `
        <li>
          <a href="${value}" target="_blank" rel="noopener noreferrer" aria-label="${key}">
            <i class="${icons[key]}"></i>
          </a>
        </li>
      `).join("")}
    </ul>
  `;
}

function createSplitBlock(title, description, items, imageUrl, extraMarkup = "") {
  return `
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="mi-about-content">
          <h3><span class="color-theme">${title}</span></h3>
          <p>${description}</p>
          <ul>
            ${items.map(([label, value]) => `<li><b>${label}</b> ${value}</li>`).join("")}
          </ul>
          ${extraMarkup}
        </div>
      </div>
      <div class="col-lg-6">
        <div class="mi-about-image">
          <img src="${assetPath(imageUrl)}" alt="${title}">
        </div>
      </div>
    </div>
  `;
}

function renderHome() {
  document.getElementById("home").innerHTML = `
    <div class="mi-home-area mi-padding-top">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-12">
            <div class="mi-home-content">
              <h1>Hi, I am <span class="color-theme">${siteData.information.name}</span></h1>
              <p>${siteData.information.miniAboutContent}</p>
              ${createSocialLinks()}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAbout() {
  registerGallery("about-image", [siteData.information.aboutImageLg]);
  document.getElementById("about").innerHTML = `
    <div class="mi-about-area mi-padding-top">
      <div class="container">
        ${createSectionTitle("About Me")}
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mi-about-image">
              <img src="${assetPath(siteData.information.aboutImage)}" alt="About Joao Quintanilha">
              <button type="button" class="mi-about-image-button gallery-trigger" data-gallery-id="about-image" data-gallery-index="0" aria-label="Open portrait">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mi-about-content">
              <h3>I am <span class="color-theme">${siteData.information.name}</span></h3>
              <p>${siteData.information.aboutContent}</p>
              <ul>
                <li><b>Age</b> ${calculateAge(siteData.information.birthDate)} Years</li>
                <li><b>Nationality</b> ${siteData.information.nationality}</li>
                <li><b>Languages</b> ${siteData.information.language}</li>
                <li><b>Email</b> ${siteData.information.email}</li>
                <li><b>Address</b> ${siteData.information.address}</li>
              </ul>
              <a class="mi-button" href="${assetPath(siteData.information.cvfile)}" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mi-padding-top mi-padding-bottom">
      <div class="container">
        ${createSectionTitle("Services")}
        <div class="row mt-30-reverse">
          ${siteData.services.map((service) => `
            <div class="col-lg-4 col-md-6 col-12 mt-30">
              <article class="mi-service">
                <span class="mi-service-icon"><i class="${service.icon}"></i></span>
                <h5>${service.title}</h5>
                <p>${service.details}</p>
              </article>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderResume() {
  document.getElementById("resume").innerHTML = `
    <div class="mi-padding-top">
      <div class="container">
        ${createSectionTitle("My Skills")}
        <div class="mi-skill-guide">
          <p><span>1</span> Academic</p>
          <p><span>2</span> Online and certified training</p>
          <p><span>3</span> Personal project experience</p>
          <p><span>4</span> Professional experience</p>
          <p><span>5</span> 5+ years of personal and professional experience</p>
        </div>
        <div class="row">
          ${createProgressItems(siteData.skills)}
        </div>
      </div>
    </div>
    <div class="mi-padding-top mi-padding-bottom">
      <div class="container">
        ${createSectionTitle("Resume")}
        <div class="mi-smalltitle"><span class="mi-smalltitle-icon"><i class="fa-solid fa-briefcase"></i></span><h4>Working Experience</h4></div>
        <div class="mi-resume-wrapper">${createResumeItems(siteData.experience.workingExperience)}</div>
        <div class="mt-30"></div>
        <div class="mi-smalltitle"><span class="mi-smalltitle-icon"><i class="fa-solid fa-book"></i></span><h4>Educational Qualifications</h4></div>
        <div class="mi-resume-wrapper">${createResumeItems(siteData.experience.educationExperience)}</div>
        <div class="mt-30"></div>
        <div class="mi-smalltitle"><span class="mi-smalltitle-icon"><i class="fa-solid fa-certificate"></i></span><h4>Certificates</h4></div>
        <div class="mi-resume-wrapper">${createResumeItems(siteData.experience.certificates)}</div>
      </div>
    </div>
  `;
}

function renderPortfolios() {
  document.getElementById("portfolios").innerHTML = `
    <div class="mi-padding-top mi-padding-bottom">
      <div class="container">
        ${createSectionTitle("Portfolios")}
        <div class="row mt-30-reverse">
          ${createPortfolioItems(siteData.portfolios)}
        </div>
      </div>
    </div>
  `;
}

function renderVolunteering() {
  const { esn, bancoAlimentar, waiter } = siteData.volunteering;
  document.getElementById("volunteering").innerHTML = `
    <div class="mi-padding-top mi-padding-bottom">
      <div class="container">
        ${createSectionTitle("Volunteering")}
        ${createSplitBlock("Erasmus Student Network", esn.details, [["Year", esn.year], ["Location", esn.location]], esn.imageUrl)}
        <div class="mt-30"></div>
        ${createSplitBlock("Banco Alimentar", bancoAlimentar.details, [["Year", bancoAlimentar.year], ["Location", bancoAlimentar.location]], bancoAlimentar.imageUrl)}
        <div class="mt-30"></div>
        ${createSplitBlock("Adega do Luis Restaurant", waiter.details, [["Year", waiter.year], ["Location", waiter.location]], waiter.imageUrl)}
      </div>
    </div>
  `;
}

function renderHobbies() {
  const { handball, marathons } = siteData.hobbies.sports;
  const { trips, music } = siteData.hobbies;
  document.getElementById("hobbies").innerHTML = `
    <div class="mi-padding-top mi-padding-bottom">
      <div class="container">
        ${createSectionTitle("Sports")}
        ${createSplitBlock("Handball", handball.details, [["Year", handball.year], ["Teams", handball.teams.join(", ")], ["Titles", handball.titles.join(", ")], ["Soft skills", handball.advantages]], handball.imageUrl)}
        <div class="mt-30"></div>
        ${createSplitBlock("Run", marathons.details, [["Year", marathons.year], ["Competitions", marathons.competitions.join(", ")], ["Soft skills", marathons.advantages]], marathons.imageUrl)}
        <div class="mt-30"></div>
        ${createSectionTitle("Travel")}
        ${createSplitBlock("Travel", trips.details, [["Year", trips.year], ["Countries", `${trips.visitedCountries.length}+ visited`], ["Soft skills", trips.advantages]], trips.imageUrl, createPillList(trips.visitedCountries))}
        <div class="mt-30"></div>
        ${createSectionTitle("Music")}
        ${createSplitBlock("Music", music.details, [["Year", music.year], ["Instruments", music.instruments.join(", ")], ["Soft skills", music.advantages]], music.imageUrl)}
      </div>
    </div>
  `;
}

function renderContact() {
  document.getElementById("contact").innerHTML = `
    <div class="mi-padding-top mi-padding-bottom">
      <div class="container">
        ${createSectionTitle("Contact Me")}
        <div class="row">
          <div class="col-lg-7">
            <div class="mi-contact-info">
              <div class="mi-contact-infoblock">
                <span class="mi-contact-infoblock-icon"><i class="fa-regular fa-envelope"></i></span>
                <div class="mi-contact-infoblock-content">
                  <h6>Email</h6>
                  ${siteData.contactInfo.emailAddress.map((email) => `<p><a href="mailto:${email}">${email}</a></p>`).join("")}
                </div>
              </div>
              <div class="mi-contact-infoblock">
                <span class="mi-contact-infoblock-icon"><i class="fa-solid fa-phone"></i></span>
                <div class="mi-contact-infoblock-content">
                  <h6>Phone</h6>
                  ${siteData.contactInfo.phoneNumbers.map((phone) => `<p><a href="tel:${phone.replace(/\s+/g, "")}">${phone}</a></p>`).join("")}
                </div>
              </div>
              <div class="mi-contact-infoblock">
                <span class="mi-contact-infoblock-icon"><i class="fa-solid fa-location-dot"></i></span>
                <div class="mi-contact-infoblock-content">
                  <h6>Address</h6>
                  <p>${siteData.contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateActivePage() {
  const currentHash = window.location.hash.replace("#", "") || "home";
  const currentPage = pageIds.includes(currentHash) ? currentHash : "home";

  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("is-active", section.dataset.page === currentPage);
  });

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === currentPage);
  });

  const nav = document.getElementById("site-nav");
  nav.classList.remove("is-visible");
  document.querySelector("#nav-toggle i").className = "fa-solid fa-bars";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLightbox(galleryId, index) {
  const images = galleries.get(galleryId);
  if (!images || images.length === 0) return;
  lightboxState.galleryId = galleryId;
  lightboxState.index = index;
  renderLightboxImage();
  document.getElementById("lightbox").classList.add("is-open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderLightboxImage() {
  const images = galleries.get(lightboxState.galleryId) || [];
  document.getElementById("lightbox-image").src = images[lightboxState.index] || "";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("is-open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function stepLightbox(direction) {
  const images = galleries.get(lightboxState.galleryId) || [];
  if (images.length < 2) return;
  lightboxState.index = (lightboxState.index + direction + images.length) % images.length;
  renderLightboxImage();
}

function bindEvents() {
  document.getElementById("nav-toggle").addEventListener("click", () => {
    const nav = document.getElementById("site-nav");
    nav.classList.toggle("is-visible");
    document.querySelector("#nav-toggle i").className = nav.classList.contains("is-visible")
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".gallery-trigger");
    if (trigger) {
      openLightbox(trigger.dataset.galleryId, Number(trigger.dataset.galleryIndex || 0));
    }
  });

  window.addEventListener("hashchange", updateActivePage);
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightbox-next").addEventListener("click", () => stepLightbox(1));

  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    const lightboxOpen = document.getElementById("lightbox").classList.contains("is-open");
    if (!lightboxOpen) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });
}

function initSite() {
  document.getElementById("brand-image").src = assetPath(siteData.information.brandImage);
  renderHome();
  renderAbout();
  renderResume();
  renderPortfolios();
  renderVolunteering();
  renderHobbies();
  renderContact();
  bindEvents();
  updateActivePage();
}

initSite();
