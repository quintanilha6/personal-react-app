import Mock from "../mock";

const database = {
  information: {
    name: 'João Quintanilha',
    aboutContent: "With an MSc in Computer and Telematics Engineering, I consider myself as a person who is easily integrated on a team, with a natural talent to fit and deal with new and unusual situations. I am dynamic, resourceful, proactive and an understanding person who dedicated a vast life-part on knowledge expansion through self-learning. Together with outstanding communication skills, I have a great ability to adapt to multicultural environments with organizational knowledge and strategic thinking.",
    miniAboutContent: "A Software Developer who loves to code and deliver Full-stack services as well as Blockchain applications.",
    age: 27,
    nationality: 'Portuguese',
    language: 'Portuguese, English, Spanish, French',
    email: 'jpquintanilha6@gmail.com',
    address: 'Urb. dos Camarinhos lt 57, Parceiros, Leiria',
    phone: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/quintanilha.joao.9?ref=bookmarks',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-quintanilha-24486a136/',
      dribbble: '',
      github: 'https://github.com/quintanilha6',
      instagram: 'https://www.instagram.com/quintanilha6/',
      stack: 'https://ethereum.stackexchange.com/users/51252/joão-quintanilha'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/CV.pdf'
  },
  services: [
    {
      title: "Backend Development",
      icon: 'code',
      details: "Traditional services using common RESTful API practices and security patterns."
    },
    {
      title: "Full-stack Development",
      icon: 'color-pallet', //mobile
      details: "Develop web applications to consume different RESTful APIs and services."
    },
    {
      title: "Decentralized applications",
      icon: 'certificate',
      details: "Smart-contract development and usage for different Blockchain environments."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "I can say that João is surely a key member in every team. He is talkative, easy-going, takes genuine care for people and is at the same time very professional in his way of socializing.",
      author: {
        name: 'Eng. Pedro Marques',
        designation: 'Software Engineer @ CERN',
        role: ''
      }
    },
    {
      id: 2,
      content: "Demonstrated a proactive and organizational attitude by taking all his available time to foresee possible issues coming from both his job and his Master Thesis.",
      author: {
        name: 'Prof. Dr. Telmo Fernandes',
        designation: 'Professor @ Polytechnical Institute of Leiria',
        role: ''
      }
    },
    {
      id: 3,
      content: "I was impressed by his pro-activity when addressing existing software, like Blockchain tech: his questions were always backed-up by a careful study of the case, accompanied by solutions proposals.",
      author: {
        name: 'Prof. Dr. Hélder Gomes',
        designation: 'Professor @ University of Aveiro',
        role: 'Master Thesis Coordinator'
      },
    },
    {
      id: 4,
      content: "A very efforted and talented developer, always willing to help his colleagues. João demonstrated huge technological growth while working under my projects and never missed a deadline.",
      author: {
        name: 'Eng. Pedro Diogo',
        designation: 'Project Manager @ Ubiwhere',
        role: ''
      },
    },
    {
      id: 5,
      content: "João's Master Thesis presented an enormous value to the loyalty program's field for its innovative approach and quality KPIs.",
      author: {
        name: 'Prof. Dr. Filipe Correia',
        designation: 'Professor @ University of Porto',
        role: 'Main jury of Master Thesis defense'
      }
    }
  ],
  skills: [
    {
      title: "Python (Falcon, Django)",
      value: 90
    },
    {
      title: "Solidity",
      value: 90
    },
    {
      title: "Java (Spring)",
      value: 80
    },
    {
      title: "Javascript (Node, ReactJS)",
      value: 80
    },
    {
      title: "Docker & Docker-compose",
      value: 80
    },
    {
      title: "Linux OS (Bash)",
      value: 80
    },
    {
      title: "Databases & ORMs (PostgreSQL, MySQL, SQLAlchemy)",
      value: 80
    },
    {
      title: "Testing Frameworks (Junit, Mockito, Robot, Mocha, Chai, etc.)",
      value: 80
    },
    {
      title: "Nginx & Apache",
      value: 70
    },
    {
      title: "HTML & CSS",
      value: 70
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Leirifisio website",
      subtitle: "Website to promote a nacional small-sized Physiotherapy center.",
      imageUrl: "/images/leirifisio.png",
      url: 'https://www.leirifisio.com/'
    },
    {
      id: 2,
      title: "Medium Article",
      subtitle: "Blockchain for non-tech-savvy — Part I.",
      imageUrl: "/images/medium.png",
      url: 'https://medium.com/ubigen/blockchain-for-non-tech-savvy-part-i-562f24712a23'
    },
    {
      id: 3,
      title: "drEVen",
      subtitle: "Ubiwhere @ H2020 Vicinity project.",
      imageUrl: "/images/dreven.jpg",
      largeImageUrl: [
        "/images/dreven-lg.jpg",
        "/images/dreven-lg1.jpg",
        "/images/dreven-lg3.jpg",
        "/images/dreven-lg2.jpg",
        "/images/dreven-lg4.jpg"
      ],
      url: 'https://vicinity2020.eu/vicinity/content/pilots/dreven/overview'
    },
    {
      id: 4,
      title: "Dyagora",
      subtitle: "Zenithwings @ H2020 Blockchers project.",
      imageUrl: "/images/storywine.jpg",
      largeImageUrl: [
        "/images/storywine-lg.png"
      ],
      url: 'https://www.zenithwings.com/dyagora/'
    },
    {
      id: 5,
      title: "My website",
      subtitle: "Personal website with ReactJS.",
      imageUrl: "/images/mywebsite.jpg",
      largeImageUrl: [
        "/images/mywebsite-lg.png"
      ],
      url: 'https://github.com/quintanilha6/personal-react-app'
    },
    {
      id: 6,
      title: "Crowdfunding with Ethereum",
      subtitle: "Vote-based crowdfunding system supported by Ethereum Blockchain and smart-contracts.",
      imageUrl: "/images/crowdfundingethereum.jpg",
      url: 'https://github.com/quintanilha6/ETHEREUM-crowdfunding-project'
    },
    {
      id: 7,
      title: "Springboot template initializers",
      subtitle: "Series of spring boot useful templates to not start from scratch entirely.",
      imageUrl: "/images/springboot.png",
      url: 'https://github.com/quintanilha6/spring-boot'
    },
    {
      id: 8,
      title: "Artificial Intelligence",
      subtitle: "Autonomous agent that learns and profits against casino's Blackjack.",
      imageUrl: "/images/aibj.jpg",
      url: 'https://github.com/quintanilha6/artificial_intelligence_blackjack'
    },
    {
      id: 9,
      title: "Master Thesis",
      subtitle: "Multi-agent loyalty program over Blockchain.",
      imageUrl: "/images/ua.jpg",
      url: 'https://ria.ua.pt/handle/10773/29434'
    },
    {
      id: 10,
      title: "Bachelor Project",
      subtitle: "Patient managment platform for a post-stroke clinic. Partnership with Rovisco Pais.",
      imageUrl: "/images/ua.jpg",
      url: 'https://github.com/quintanilha6/avc_project'
    }

  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Current",
        position: "Software Developer",
        company: "Bosch Security Systems",
        details: "Part of Bosch Smart Home team, I am responsible to integrate the different Bosch services and devices with Bosch Home device, providing interoperability across a new and improved IoT ecosystem."
      },
      {
        id: 2,
        year: "2018 - 2020",
        position: "Backend & Blockchain Developer",
        company: "Ubiwhere",
        details: "Create decentralized architectures for smart-contract interoperable platforms. Develop dApps using Solidity, Truffle and Web3 with a solid HTTPS connection with Public Ethereum Clients. Produce RESTful APIs to serve different client applications using Python and Java Frameworks like Falcon and Spring. Environment virtualization of multiple Backend services, Middlewares and Databases (Postgres and MySQL) using Docker tools. Data balance definition for hybrid applications, Database-Blockchain."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2013 - 2019",
        graduation: "Bachelor & Master of Science",
        university: "University of Aveiro",
        details: "Computer and Telematics Engineering"
      },
      {
        id: 2,
        year: "2017 - 2018",
        graduation: "Master of Science - Exchange programme",
        university: "University of Zagreb",
        details: "Software Engineering and Information Systems"
      },
      {
        id: 3,
        year: "2016 - 2017",
        graduation: "Bachelor of Science - Exchange programm",
        university: "University of Silesia",
        details: "Information Technologies"
      }
    ],
    certificates: [

      {
        id: 1,
        year: "2019",
        certificate: "Basic Life Support",
        issuingEntity: "UNAVE - Professional Training Association"
      },
      {
        id: 2,
        year: "2019",
        certificate: "Springboot Development",
        issuingEntity: "Udemy - Online Learning Platform"
      },
      {
        id: 3,
        year: "2018",
        certificate: "Blockchain Development on Hyperledger Fabric using Composer",
        issuingEntity: "Udemy - Online Learning Platform"
      },
      {
        id: 4,
        year: "2017",
        certificate: "Ethereum and Solidity: Developer’s Guide",
        issuingEntity: "Udemy - Online Learning Platform"
      },
      {
        id: 5,
        year: "2015",
        certificate: "First Certificate in English",
        issuingEntity: "Royal School of Languages - Private School of Languages and Translations"
      }
    ]
  },
  hobbies: {
    sports: {
      handball: {
        year: "1998 - Current",
        details: "Handball has been part of my life for more than two decades. Because of it, I made friends for life and had the opportunity to play with and against European and Portuguese first-class teams and players.",
        teams: ["Juve Lis, ", "São Bernardo, ", "PPD Zagreb, ", "University of Aveiro"],
        titles: ["Nacional University Champion, ",
          "8º Place European Championship, ",
          "2x Runner-up of Nacional University Champion, ",
          "Final 4 Junior Championship of Portuguese First Division, ",
          "Final 4 Main Championship of Portuguese Second Division"
        ],
        imageUrl: "/images/1place.jpg",
        advantages: "Teamwork, commitment, social involvement, work under pressure"
      },
      surflongboard: {
        year: "2012- Current",
        details: "",
        imageUrl: ""
      },
      marathons: {
        year: "2017 - Current",
        details: "Running elevates my mind-state to a productive point. While I'm running I love hearing tech podcasts and learn about many different topics. It keeps my mind saint and my lifestyle healthy. I love challenging my body to do extreme activities, like running and biking marathons, keeping my body aware that my mind is always in charge of myself.",
        competitions: [
          "Geneva Harmony Marathon, ",
          "EDP Lisbon Marathon, ",
          "Aveiro Half Marathon, ",
          "Ovar Half Marathon",
        ],
        imageUrl: "/images/marathon.jpg",
        advantages: "Discipline, persistence, hard work"
      },
      hikes: {
        year: "2005 - Current",
        details: "some detail",
        hikes: ["nz"],
        imageUrl: "/images/hike.jpg"
      }
    },
    trips:
    {
      year: "2014 - Current",
      visitedContries: [
        "Austria, ",
        "Belgium, ",
        "Bosnia and Herzegovina, ",
        "China, ",
        "Croatia, ",
        "Czech Republic, ",
        "Denmark, ",
        "Estonia, ",
        "Finland, ",
        "France, ",
        "Germany, ",
        "Hong Kong, ",
        "Hungary, ",
        "Iceland, ",
        "Ireland, ",
        "Italy, ",
        "Macao, ",
        "Monaco, ",
        "Netherlands, ",
        "New Zealand, ",
        "Norway, ",
        "Poland, ",
        "Portugal, ",
        "Slovakia, ",
        "Slovenia, ",
        "Spain, ",
        "Sweden, ",
        "Switzerland, ",
        "Ukraine, ",
        "United Kingdom"
      ],
      details: "Travelling was always a passion of mine. As soon as I turned 18 and was allowed to travel, I bought myself an Interrail ticket and managed to travel across many cities in Europe. The passion kept being fed by the amazing experiences I had. Years later, coming to today I have managed to travel around 30 countries, having the opportunity to learn about many different cultures, people and behaviors.",
      imageUrl: "/images/travel.jpg",
      videoUrl: "url para video",
      advantages: "Self-conscience, organizational thinking, budget management, problem-solving"
    },
    music:
    {
      year: "2005 - Current",
      details: "I remember watching my father playing the guitar when I was young. His music felt right to my hears, making me always wonder if I could play it myself. When I was 11, he offered me my first guitar, where I started practicing every day after school. After 15 years, I can say I am a talented self-taught musician,  having played in many different small concerts and weddings.",
      instruments: [
        "Guitar, ",
        "Ukulele, ",
        "Piano"],
      imageUrl: "/images/music.jpg",
      advantages: "Self-learning, commitment, patience, perseverance, work under pressure"
    }
    ,
  },
  volunteering: {
    esn: {
      year: "2013 - 2017",
      details: "Because I was always fascinated by foreign cultures, as soon as I joined college I searched for international activities. Erasmus Student Network offered me a position as a Staff and Erasmus buddy, where I was in charge of helping many different foreign students as well as to organize some of their events.",
      location: "University of Aveiro",
      imageUrl: "/images/esn.jpg"
    },
    bancoAlimentar: {
      year: "2012 - 2014",
      details: "Banco Alimentar is a profitless association that gathers food for the less fortunate, fighting every day for a better future to them. At Banco Alimentar, I was responsible to manually filter and store the different food types we collected from the community.",
      location: "Parceiros, Leiria",
      imageUrl: "/images/ba.jpg"
    },
    waiter: {
      year: "2014 - Current",
      details: "Most of my college summers were spent working and helping family businesses. Adega do Luís is a family business, a lovely rustic restaurant, where I worked as a waiter during summer and also on bigger festive days, like new years evening.",
      location: "Porto de Mós, Leiria",
      imageUrl: "/images/adegadoluis.jpeg"
    }
  },

  contactInfo: {
    phoneNumbers: ['+351 912451500'],
    emailAddress: ['jpquintanilha@protonmail.com', 'jpquintanilha6@gmail.com'],
    address: "Urb. dos Camarinhos lt 57, Parceiros, Leiria"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});

Mock.onGet("/api/hobbies").reply(config => {
  const response = database.hobbies;
  return [200, response];
});

Mock.onGet("/api/volunteering").reply(config => {
  const response = database.volunteering;
  return [200, response];
});
