import profilePhoto from '@/assets/profile-1.jpg'
import rabbitOval from '@/assets/rabbit_oval.png'
import rabbitHexagon from '@/assets/rabbit_hexagon.png'
import rabbitRectangle from '@/assets/rabbit_rectangle.png'

export const profile = {
  name: 'Chenyue Liu',
  title: 'Ph.D Candidate in Economics',
  affiliation: 'University of Toronto',
  photo: profilePhoto,
  // Obfuscated so scrapers can't harvest it; ProfileLinks decodes it into a
  // mailto link only when the envelope is clicked
  email: 'chenyue [d o t] liu [a t] mail [d o t] utoronto [d o t] ca',
  scholar: 'https://scholar.google.com/citations?user=k_pi_QMAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/chenyuel/',
}

export const bio = [
  'Welcome! I am a Ph.D candidate in the Department of Economics at the University of Toronto. I mainly do research in econometrics with a focus on treatment effects and nonparametric identification, and topics in labor economics.',
]

export const jobMarketPaper = {
  title: 'Non-parametric Identification of Dynamic Treatment Effects: a Graphical Approach to Causality',
  url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6517978',
  meta: 'Chenyue Liu. 70 pages. Available at SSRN.',
  abstract: [
    'This paper proposes a unified framework to study different types of dynamic treatment effects (DTE), extending the dynamic potential response (DPR) framework in Torgovitsky (2019). The DPR framework is used to study the causal effect of the immediate preceding past on the present in his paper. In this paper, I first show that DTE, such as the causal effect of the distant past on the present, can be non-parametrically identified in a DPR framework which excludes the distant past from directly entering the function of the present potential response. I then develop an algorithm leveraging a novel graphical representation of the DPR model. This graph-based algorithm provides a computationally tractable means of scaling the DPR framework beyond binary variables to multi-valued variables, circumventing the curse of dimensionality inherent in dynamic treatment effect studies. An application to the 2008 Survey of Income and Program Participation (SIPP) sheds further light on the long-term scarring effect of unemployment.',
  ],
  lastUpdated: 'October 19, 2026',
}

// Each entry: { title, url?, meta?, abstract?, lastUpdated? }. While empty, the
// section shows "Coming soon."
export const workingPapers = [
  {
    title: 'Identifying Local Quantile Treatment Effects With an Imperfect Instrument',
    abstract: [
      'This paper explores how to complement an imperfect instrument using time. Full exogeneity of the instrument can be hard to argue in treatment effect studies. When the full exogeneity assumption does not fully hold, a weaker assumption, referred to as selection-on-type, may still be valid. Given an imperfect instrument that only satisfies this weaker assumption, researchers are left with a finite mixture of potential outcome distributions, which poses challenges in identifying the quantile treatment effects for each response type. This paper proposes a method to amplify the identifying power of an imperfect instrument through the crossing point of counterfactual mappings identified from time-homogeneous unobserved heterogeneity of outcomes. The crossing point is estimated using a GMM estimator, with the formulation of objective functions motivated by the quantile regression method. Given the estimates of the crossing point, the potential outcome distribution of each response type can be estimated from the finite mixture. The method proposed by this paper is further illustrated with an application to the Job Training Partnership Act (JTPA) program.',
    ],
  },
]

// Each entry: { role, courses: [{ course, years }] }. While empty, the section
// shows "Coming soon."
export const teaching = [
  {
    role: 'Course Instructor, University of Toronto',
    courses: [
      { course: 'Data Analysis and Applied Econometrics in Practice', years: '2024' },
    ],
  },
  {
    role: 'Teaching Assistant, University of Toronto',
    courses: [
      { course: 'Econometrics I (PhD)', years: '2025' },
      { course: 'Machine Learning and Data Mining (MA)', years: '2023' },
      { course: 'Economic Applications of Machine Learning', years: '2023' },
      { course: 'Program Evaluation (MPP)', years: '2023' },
      { course: 'Applied Econometrics II', years: '2024, 2025, 2026' },
      { course: 'Applied Econometrics I', years: '2022, 2023, 2026' },
      { course: 'Foundation of Econometrics', years: '2021, 2022, 2023' },
    ],
  },
]

export const blog = {
  intro:
    'This is a placeholder for blog posts or informal notes. You can link to an external blog, or later render a list of posts generated from a Markdown directory or another system.',
}

export const rabbit = {
  prompt: 'What is the shape of my rabbit?',
  shapes: [
    { key: 'oval', label: 'Oval', image: rabbitOval },
    { key: 'hexagon', label: 'Hexagon', image: rabbitHexagon },
    { key: 'rectangle', label: 'Rectangle', image: rabbitRectangle },
  ],
}

export const navLinks = [
  { href: '#about', label: 'Home' },
  { href: '#job-market-paper', label: 'Job Market Paper' },
  { href: '#working-papers', label: 'Working Paper' },
  { href: '#teaching', label: 'Teaching' },
]
