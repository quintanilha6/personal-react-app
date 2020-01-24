import Mock from "../mock";

const database = {
  information: {
    name: 'João Quintanilha',
    aboutContent: "With a MSc in Computer and Telematics Engineering, I consider myself as a person who is easily integrated on a team, with natural talent to fit and deal with new and unusual situations. I am dynamic, resourceful, proactive and an understanding person who dedicated a vast life-part on knowledge expansion through self-learning. Together with outstanding communication skills, I have a great ability to adapt on multicultural environments with an organizational knowledge and strategic thinking.",
    miniAboutContent: "I am a Blockchain enthusiast who loves to code and deliver Backend services as well as decentralized applications.",
    age: 26,
    phone: '',
    nationality: 'Portuguese',
    language: 'Portuguese, English, Spanish, French',
    email: 'jpquintanilha@protonmail.com',
    address: 'Urb. dos Camarinhos lt 57, Parceiros, Leiria',
    phone: "+351 912451500",
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/quintanilha.joao.9?ref=bookmarks',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-quintanilha-24486a136/',
      dribbble: '',
      github: 'https://github.com/quintanilha6',
      instagram: 'https://www.instagram.com/quintanilha6/'
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
      details: "Traditional web and microservices using REST API practices, security patterns and ORMs."
    },
    {
      title: "Decentralized applications",
      icon: 'certificate',
      details: "Smart-contract development and usage for different Blockchain environments."
    },
    {
      title: "Full-stack Development",
      icon: 'color-pallet', //mobile
      details: "Develop frontends to consume REST APIs or provide dApps resources for Blockchain interaction."
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
      },
    },
    {
      id: 6,
      content: "João is a very optimistic, helpful and skilled developer. He takes all his efforts to organize small events to gather Ubiwhere's team, which proves his genuine interest to keep a healthy social working environment.",
      author: {
        name: 'Ana Rodrigues',
        designation: 'Human Resources @ Ubiwhere',
        role: 'People and Culture Manager'
      },
    }
  ],
  skills: [
    {
      title: "Python (Falcon, Django)",
      value: 89
    },
    {
      title: "Solidity",
      value: 82
    },
    {
      title: "Java (Spring)",
      value: 78
    },
    {
      title: "Javascript (Node, ReactJS)",
      value: 71
    },
    {
      title: "Docker / Docker-compose",
      value: 70
    },
    {
      title: "Linux OS (Bash)",
      value: 70
    },
    {
      title: "LaTeX",
      value: 65
    },
    {
      title: "HTML/CSS",
      value: 57
    }
  ],
  portfolios: [
    {
      id: 1,
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
      id: 2,
      title: "Dyagora",
      subtitle: "Zenithwings @ H2020 Blockchers project.",
      imageUrl: "/images/storywine.jpg",
      largeImageUrl: [
        "/images/storywine-lg.png"
      ],
      url: 'https://zenithwings.com/projects/dyagora-blockchers'
    },
    {
      id: 3,
      title: "My website",
      subtitle: "Personal website with ReactJS.",
      imageUrl: "/images/mywebsite.jpg",
      largeImageUrl: [
        "/images/mywebsite-lg.png"
      ],
      url: 'https://github.com/quintanilha6/personal-react-app'
    },
    {
      id: 4,
      title: "Crowdfunding with Ethereum",
      subtitle: "Vote-based crowdfunding system supported by Ethereum Blockchain and smart-contracts",
      imageUrl: "/images/crowdfundingethereum.jpg",
      url: 'https://github.com/quintanilha6/ETHEREUM-crowdfunding-project'
    },
    {
      id: 6,
      title: "Springboot template initializers",
      subtitle: "Series of spring boot useful templates to not start from scratch entirely",
      imageUrl: "/images/springboot.png",
      url: 'https://github.com/quintanilha6/spring-boot'
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      subtitle: "Autonomous agent that learns and profits against casino's Blackjack",
      imageUrl: "/images/aibj.jpg",
      url: 'https://github.com/quintanilha6/artificial_intelligence_blackjack'
    },
    {
      id: 8,
      title: "Master Thesis",
      subtitle: "Multi-agent loyalty program over Blockchain",
      imageUrl: "/images/ua.jpg",
      url: 'https://ria.ua.pt/'
    },
    {
      id: 9,
      title: "Bachelor Project",
      subtitle: "Patient managment platform for a post-stroke clinic. Partnership with Rovisco Pais",
      imageUrl: "/images/ua.jpg",
      url: 'https://github.com/quintanilha6/avc_project'
    }

  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Backend & Blockchain Developer",
        company: "Ubiwhere",
        details: "Responsible for most Blockchain components (from core to high level) \
        and respective interaction services. Create decentralized architectures for \
        smart-contract interoperable platforms, and produce RESTful APIs to serve different client application"
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
        certificate: "Ethereum and Solidity: The complete Developer’s Guide",
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
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
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