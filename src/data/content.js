// All site copy and links live here.

export const PROFILE = {
  name: 'Dev Satish',
  title: 'Product, strategy and engineering',
  summary: 'Studying at BITS Pilani. I like turning problems into things people use.',
  location: 'BITS Pilani, Rajasthan, India',
  email: 'devsatish08@gmail.com',
  phone: '+91 75068 57789',
  phoneHref: 'tel:+917506857789',
  // Drop your PDF at public/resume.pdf. The contact section's résumé button stays hidden until it exists.
  resume: 'resume.pdf',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Dev-Satish-02' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dev-satish' },
  { label: 'Twitter', href: 'https://x.com/devsatish08' },
];

// From the latest résumé (public/resume.pdf). Most recent first.
export const EXPERIENCE = [
  {
    role: 'AI Engineering Intern',
    company: 'Callistra AI',
    date: 'Mar 2026 to Aug 2026',
    domain: 'Financial AI',
    about: 'AI-native research workspace helping public-market financial analysts evaluate companies faster',
    logo: null,
    bullets: [
      'Spearheaded an AI research workspace for financial analysts, processing 10,000+ documents and cutting analysis time by 40%.',
      'Translated analyst workflows into real-time product features with sub-500 ms responses, accelerating analyst research decisions.',
      'Automated event-driven document and notebook workflows, removing manual hand-offs and improving responsiveness for users.',
    ],
    tags: [],
  },
  {
    role: 'Python Intern',
    company: 'Sysstra',
    date: 'Jul 2025 to Nov 2025',
    domain: 'Fintech',
    about: 'Fintech firm building systematic trading strategies',
    logo: 'images/logos/sysstra.png',
    bullets: [
      'Built dividend-based trading strategies that rebalance portfolios systematically.',
      'Designed the data pipeline (Redis, AWS S3) behind high-frequency analysis, cutting its latency.',
    ],
    tags: ['Python', 'Redis', 'AWS S3'],
  },
  {
    role: 'Operations Intern',
    company: 'Aditya Birla Group',
    date: 'May 2025 to Jul 2025',
    domain: 'Manufacturing',
    about: '60B+ global conglomerate operating across 40+ countries and multiple industries',
    logo: 'images/logos/aditya-birla.png',
    bullets: [
      'Optimized sulphuric acid plant operations by analyzing 10+ KPIs and driving process changes, cutting energy use by 10%.',
      'Evaluated crystallization and MSFE configurations to boost throughput and system reliability, sustaining 98–99% recovery rates.',
      'Championed fouling management improvements, saving about 100 m³ of water a day and raising equipment uptime across the plant.',
    ],
    tags: [],
  },
  {
    role: "Founder's Office",
    company: 'Anitum',
    date: 'Dec 2024 to Jan 2025',
    domain: 'Applied AI',
    about: 'AI-driven intelligence platform transforming workplaces with real-time analytics, reducing inefficiencies',
    logo: 'images/logos/anitum.png',
    bullets: [
      'Accelerated issue identification and response by 20–30% across multi-industry client deployments by streamlining operations.',
      'Defined the product, turning live operational data into actionable insights that guided decisions across 4+ client deployments.',
      'Drove product adoption by aligning engineering teams and client stakeholders, improving throughput across operational settings.',
    ],
    tags: [],
  },
];

export const POSITIONS = [
  {
    role: 'Coordinator',
    company: 'Placement Unit, BITS Pilani',
    date: 'Nov 2025 to Present',
    about: 'A student-led body overseeing campus recruitment, acting as interface between the institute and recruiters',
    logo: 'images/logos/bits.png',
    bullets: [
      'Orchestrated campus placements for 700+ students by coordinating institute stakeholders and engaging 50+ hiring companies.',
      'Built PU Outreach, an AI tool that auto-logs leads and drafts pitch emails, cutting per-company time from 2.25 min to 10s.',
      'Supervised 80+ recruitment drives end-to-end, ensuring seamless execution for top firms such as P&G, KPMG and Deloitte.',
    ],
  },
  {
    role: 'Events & Outreach Head',
    company: 'Alumni Relations Cell, BITS Pilani',
    date: 'Apr 2025 to Present',
    about: "The institute's official organization fostering long-term student–alumni networks",
    logo: 'images/logos/bits.png',
    bullets: [
      'Spearheaded alumni engagement by hosting on-campus talks with 50+ alumni, building mentorship access for 1,000+ students.',
      'Led the launch of the Yearbook Portal & TagYourSnap, driving 700+ snaps and enabling interaction across 80%+ of the batch.',
      'Executed Batch Snaps, a flagship 2-day event, coordinating 500+ students and 50+ faculty with the Alumni Relations office.',
    ],
  },
  {
    role: 'Project Lead',
    company: 'Nirmaan Organization',
    date: 'Dec 2024 to Jul 2025',
    about: 'NGO focused on community development through education, and women empowerment',
    logo: 'images/logos/nirmaan.png',
    bullets: [
      'Mobilized 30+ volunteers across 11+ projects, optimizing resource allocation for streamlined execution and on-time delivery.',
      'Spearheaded 25+ community initiatives, mobilizing volunteers and raising 1M+ in funds to benefit 500+ underserved people.',
      'Introduced a data-driven volunteer certification from field visits, strengthening accountability and clarifying performance metrics.',
    ],
  },
];

// Each project is told as Situation and Task (`about`), then Action and Result (`bullets`), with the
// numbers that matter. The Yearbook, TagYourSnap and PU Outreach figures come from the latest résumé;
// the rest from each project's own repository and live site.
export const PROJECTS = [
  {
    name: 'Synex',
    kind: 'Finalist, ContextCon 05 (Crustdata x YC)',
    blurb: 'An 8-stage AI agent that replaces an expert-network call: it sources former employees, applies compliance rules and returns a cited answer.',
    metric: 'Finalist, 80–94% cheaper',
    bullets: [
      'Built an 8-stage AI agent replacing expert-network calls (GLG): it sources ex-employees, applies 7 compliance rules and returns a cited answer in minutes, not days.',
      'Cut research cost by ~80–94%: ₹8,000 per answered question against ~$500–1,500 per GLG call hour; a 5-question case cost ~$0.28 in AI and data credits.',
      'Finalist among the top 8–12 teams at ContextCon 05 (BITS Pilani): built in 7 hours, with every answer cited and confidence scored from 1 to 3+ independent experts.',
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'Claude Haiku 4.5', 'Crustdata'],
    links: [{ label: 'Live', href: 'https://synex-web.onrender.com/' }, { label: 'GitHub', href: 'https://github.com/team-ananya-dev/Synex' }],
  },
  {
    name: 'Yearbook Portal',
    kind: 'BITS Pilani Alumni Relations Cell',
    blurb: 'An online yearbook for the whole batch: profiles, quotes written on friends’ walls, and an opt-in for the physical copy.',
    about:
      'Yearbook submissions and the final physical yearbook were put together by hand. The task was to move submissions online and get the whole batch to take part.',
    metric: 'INR 7L+ revenue, 9,000+ quotes',
    bullets: [
      'Led the portal launch: students log in with their BITS email, add a picture and quote, write on friends’ walls and opt in for the physical yearbook.',
      'Doubled engagement (2×) in one week by shipping new interactive features, prioritized through rapid user feedback loops.',
      'Onboarded 80% of the batch, generated INR 7L+ in revenue and cut manual effort by 90%+, scaling adoption to 9,000+ quotes through digitized workflows and targeted student outreach.',
    ],
    stack: [],
    links: [{ label: 'Yearbook Portal', href: 'https://yearbook.bits-sarc.in/' }],
  },
  {
    name: 'TagYourSnap',
    kind: 'BITS Pilani Alumni Relations Cell',
    blurb: 'A login, recognise and tag flow for the photos from Batch Snaps, the flagship 2-day event.',
    about:
      'Batch Snaps is the Alumni Relations Cell’s flagship 2-day event, with formal department snaps with professors and informal snaps across campus. The task was to help students find and tag themselves in the photos.',
    metric: '700+ snaps, 500+ students',
    bullets: [
      'Led the TagYourSnap launch alongside the Yearbook Portal, built around a simple login, recognise and tag flow.',
      'Executed Batch Snaps end to end with the Alumni Relations office, coordinating 500+ students and 50+ faculty over 2 days.',
      'Drove 700+ snaps and enabled interaction across 80%+ of the batch.',
    ],
    stack: [],
    links: [{ label: 'TagYourSnap', href: 'https://snaps-dun.vercel.app/' }],
  },
  {
    name: 'PU Outreach',
    kind: 'BITS Pilani Placement Unit',
    blurb: 'Screenshot a LinkedIn profile, get a tracker row and a Gmail draft; a person reviews and sends every email.',
    about:
      'Inviting a company to campus placements meant finding a contact on LinkedIn, copying the details into a tracker and pasting the same email again, about 2.25 minutes per company. The task was to remove that repetition without letting an AI send email.',
    metric: '2.25 min to 10 s, 13× faster',
    bullets: [
      'Built PU Outreach: a screenshot goes through local OCR into a Google Sheets row and a drafted pitch email, and the tool never sends mail by itself.',
      'Kept a person in charge of every email, so each message is reviewed before it leaves.',
      'Cut per-company outreach time from 2.25 min to 10 s, about 13× faster, for the Placement Unit.',
    ],
    stack: ['Python', 'Google Apps Script', 'Tesseract OCR'],
    links: [{ label: 'GitHub', href: 'https://github.com/Dev-Satish-02/PU-Outreach' }],
  },
  {
    name: 'NEXUS',
    kind: 'Smart India Hackathon 2026, SIH26123',
    blurb: 'Decentralized coordination for warehouse robots: each robot plans with its neighbours, with no central traffic controller.',
    about:
      'Warehouse robots usually queue behind a central traffic controller or zone locks. The problem statement asked for edge-AI coordination of autonomous mobile robots without one.',
    metric: '35.9% faster, 66% fewer stops',
    bullets: [
      'Built a peer-to-peer agent that every robot runs, sharing position and intent with its neighbours, plus a multi-robot simulator, a live control room and a benchmark harness.',
      'Benchmarked it against classical zone locking across 9 scenarios and 3 random seeds each.',
      'Cut total task completion time by 35.9%, with 66% fewer full stops and zero collisions in every run; the 12-robot intersection finished in 362 s against 476 s.',
    ],
    stack: ['Python'],
    links: [
      { label: 'Live demo', href: 'https://amr-smart-warehouse.onrender.com/' },
      { label: 'GitHub', href: 'https://github.com/Dev-Satish-02/AMR-smart-warehouse' },
    ],
  },
  {
    name: 'Stadium Evacuation Models',
    kind: 'Crowd-flow simulation',
    blurb: 'A Python framework comparing four crowd-flow models on the same stadiums, crowds and scenarios.',
    about:
      'Evacuation results depend heavily on which crowd model is used. The task was to compare models fairly, changing only the model, on stadiums with tens of thousands of people.',
    metric: '4 models, 41,355-person crowd',
    bullets: [
      'Built 3 parametric stadiums (a 41,355-person football bowl, a 40,603-person cricket oval and a 7,771-person arena) with seeded crowds and mobility classes.',
      'Ran 4 models on identical crowds: hydraulic, cellular automaton, social force and queueing network.',
      'Ran 24 evacuations in which everyone got out, and found the fastest and slowest models differed by 11 to 30% in an emergency and up to 42% with two gates blocked.',
    ],
    stack: ['Python', 'Numba'],
    links: [{ label: 'GitHub', href: 'https://github.com/Dev-Satish-02/stadium-evac' }],
  },
  {
    name: 'Corrosion Detector',
    kind: 'Computer vision',
    blurb: 'A browser app that flags pipe corrosion from live camera feeds.',
    about: 'Pipe corrosion in a plant needs constant inspection. The task was to flag it automatically from camera feeds.',
    metric: '4,000+ training images',
    bullets: [
      'Trained a corrosion-detection model on 4,000+ images.',
      'Built a browser app that runs it on live camera feeds and flags defects as they appear.',
    ],
    stack: ['TensorFlow.js', 'Python', 'OpenCV'],
    links: [
      { label: 'Live', href: 'https://rust-detector.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Dev-Satish-02/rust-detector' },
    ],
  },
  {
    name: 'BITS Mess Portal',
    kind: 'Campus product',
    blurb: 'Menus, ratings and feedback for the BITS Pilani mess, launched to the whole campus.',
    about: 'The BITS Pilani mess menu and student feedback needed a campus-wide home online. The task was to launch one for everyone.',
    metric: '2,000+ users in 7 days',
    bullets: [
      'Built and launched a web app with menus, ratings and feedback.',
      'Reached 2,000+ users within 7 days of launch.',
    ],
    stack: ['React', 'REST API'],
    links: [
      { label: 'Live', href: 'https://mess-menu-seven.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Dev-Satish-02/mess-dev' },
    ],
  },
  {
    name: 'Nirmaan Pilani website',
    kind: 'Nirmaan Organization, Pilani chapter',
    blurb: 'The chapter’s official site, showing its programmes and impact.',
    about: 'Nirmaan runs education, community development and women-empowerment projects around Pilani, and needed an official site that shows its work.',
    metric: '2,000+ beneficiaries shown',
    bullets: [
      'Built the chapter’s official website in Angular and TypeScript, presenting its 3 programme areas.',
      'The site shows the chapter’s impact: 2,000+ beneficiaries, 150+ regular volunteers and 15+ areas reached.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind'],
    links: [
      { label: 'Live', href: 'https://www.nirmaan-pilani.org/' },
      { label: 'GitHub', href: 'https://github.com/Dev-Satish-02/bits-nirmaan' },
    ],
  },
  {
    name: 'Readmebot',
    kind: 'Developer tool on npm',
    blurb: 'A command-line tool that reads a codebase and writes a polished README.md with AI.',
    about: 'Writing a good README is slow and often skipped. The task was to generate one from the code itself.',
    metric: 'Published on npm',
    bullets: [
      'Built a command-line tool that analyzes a project and generates a structured README.md with AI.',
      'Published it on npm, where anyone can run it with one command.',
    ],
    stack: ['Node.js', 'OpenAI'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/readmebot' },
      { label: 'GitHub', href: 'https://github.com/Dev-Satish-02/readmebot' },
    ],
  },
];

// The npm package GitHub's Packages tab shows, with live download counts.
export const PACKAGES = [{ name: 'readmebot', repo: 'readmebot' }];

// [who, what, logo]
export const ACHIEVEMENTS = [
  ['Procter & Gamble', 'Top 47 among 5k+ students across India for the P&G Spotlight Program; offered a summer internship.', 'images/logos/pg.png'],
  ['Siemens', 'Top 10 at BITS Pilani in the AI for the Real World Hackathon; invited to Siemens Innovation Day 2026, New Delhi.', 'images/logos/siemens.svg'],
  ['Student Faculty Council', 'Built a feedback system, drove policy improvements and increased student–faculty engagement by 40%.', 'images/logos/bits.png'],
  ['Team Robocon', 'Won the 20K Maze-Solving Competition, building drones, a quadruped and IoT systems while leading tech initiatives.', 'images/logos/robocon.png'],
  ['CEL, Bedrock', 'Third in Bedrock, a one-day marketing event, with a 500% increase in sales revenue (Rs. 70,000).', null],
];

// [name, issuer, logo]
export const CERTIFICATIONS = [
  ['Machine Learning Specialization', 'Stanford University, DeepLearning.AI', 'images/logos/stanford.png'],
  ['AWS DevOps', 'Amazon Web Services', 'images/logos/aws.png'],
];

export const EDUCATION = [
  { degree: 'B.E. Mechanical Engineering', school: 'BITS Pilani', date: 'Since Aug 2023' },
  { degree: 'M.Sc. Biological Sciences', school: 'BITS Pilani', date: 'Since Aug 2023' },
];

// Edit freely: the first group comes from what you've written about and shipped.
export const SKILL_GROUPS = [
  { title: 'Product & strategy', items: ['Product launches', 'Roadmapping', 'Go-to-market planning', 'Launch metrics', 'Writing'] },
  { title: 'Data & analysis', items: ['Python', 'SQL (PostgreSQL, MySQL)', 'Machine learning', 'Data visualisation (D3.js, Chart.js)'] },
  { title: 'Engineering', items: ['JavaScript / TypeScript', 'React', 'Node.js', 'Flask', 'AWS', 'C / C++', 'Java'] },
  { title: 'Certifications', items: ['Machine Learning Specialization (Stanford, DeepLearning.AI)', 'AWS DevOps'] },
];

// What the LinkedIn window shows, matching the live profile.
export const LINKEDIN = {
  headline: 'Placement Unit | Alumni Relations | BITS Pilani',
  pronouns: 'He/Him',
  location: 'Mumbai, Maharashtra, India',
  connections: '500+ connections',
  school: 'Birla Institute of Technology and Science, Pilani',
  // banner: "Bits Clock tower" by JRDkg, CC BY-SA 4.0, via Wikimedia Commons (cropped to 4:1)
  banner: 'images/bits-clock-tower.jpg',
  bannerCredit: { text: 'Photo: JRDkg, CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Bits_Clock_tower.jpg' },
};

// The profile photo the LinkedIn, X and GitHub windows use.
export const AVATAR = 'images/dev.jpg';

// What the X window shows, matching the live profile.
export const X_PROFILE = {
  name: 'dev',
  joined: 'September 2024',
  following: 2,
  followers: 1,
};

// GitHub: pinned repositories, in the order the profile shows them, and a few profile extras.
export const GITHUB = {
  pinned: ['bits-nirmaan', 'mess-dev', 'snaps', 'meshery', 'meshery.io', 'readmebot'],
  website: 'https://dev-satish-02.github.io/',
  achievements: [
    ['Pair Extraordinaire', '🫛', '#7fc96b'],
    ['Quickdraw', '🤠', '#f2a65a'],
    ['YOLO', '🎉', '#f28bb3'],
    ['Pull Shark', '🦈', '#4a7bd8'],
  ],
};

// Dev's Spotify: the public playlists on his profile, with covers saved in public/images/spotify.
export const SPOTIFY = {
  name: 'dev',
  profile: 'https://open.spotify.com/user/1oziia7t09x2x1hqyuyktwo8w',
  playlists: [
    { id: '3cjbiVfQnwuxAZF4lajryx', title: 'desi rap' },
    { id: '0CbcBhHjPfjDtyGNTFVYda', title: 'jazz' },
    { id: '1rCSTiDZP6chFton6pg21K', title: 'haseena zulfonwale' },
    { id: '2MJQZPxgBubwz9v0KKzfHy', title: 'lock in' },
    { id: '2mbHULN4Ah0msLKTaIhgJE', title: 'my mind' },
    { id: '4Qtb2nfpa3ByU53Mi8QqxG', title: 'arunachalam' },
  ],
};

// The Photos app. Each picture is tied to the part of the résumé it shows; `note` opens that part in Notes.
export const GALLERY = [
  {
    id: 'contextcon-synex',
    title: 'ContextCon 05, Crustdata x Y Combinator',
    caption: 'Building Synex at ContextCon 05, BITS Pilani. We made the finals, among the top 8–12 teams.',
    date: 'Nov 2026',
    place: 'BITS Pilani',
    note: 'projects',
  },
  {
    id: 'siemens-innovation-day',
    title: 'Siemens Innovation Day 2026',
    caption: 'Invited to Siemens Innovation Day 2026 in New Delhi after placing in the top 10 at BITS Pilani in the AI for the Real World Hackathon.',
    date: '2026',
    place: 'New Delhi',
    note: 'skills',
  },
  {
    id: 'pg-spotlight',
    title: 'P&G Spotlight Program, Season 4',
    caption: 'Top 47 among 5k+ students across India in the P&G Spotlight Program, which led to a summer internship offer.',
    date: null,
    place: null,
    note: 'skills',
  },
  {
    id: 'placement-unit',
    title: 'Placement Unit, BITS Pilani',
    caption: 'With the Placement Unit, where I coordinate campus placements for 700+ students and 50+ hiring companies.',
    date: 'Since Nov 2025',
    place: 'BITS Pilani',
    note: 'experience',
  },
  {
    id: 'sarc',
    title: 'Student Alumni Relations Cell',
    caption: 'With the Alumni Relations Cell, where I lead events and outreach: alumni talks for 1,000+ students, the Yearbook Portal and TagYourSnap.',
    date: 'Since Apr 2025',
    place: 'BITS Pilani',
    note: 'experience',
  },
];
