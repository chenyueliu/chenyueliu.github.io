import profilePhoto from '@/assets/profile-1.jpg'
import rabbitOval from '@/assets/rabbit_oval.png'
import rabbitHexagon from '@/assets/rabbit_hexagon.png'
import rabbitRectangle from '@/assets/rabbit_rectangle.png'

export const profile = {
  name: 'Chenyue Liu',
  title: 'Ph.D Candidate in Economics',
  affiliation: 'University of Toronto',
  photo: profilePhoto,
  // Written out instead of a mailto link so scrapers can't harvest it
  email: 'chenyue [d o t] liu [a t] mail [d o t] utoronto [d o t] ca',
  scholar: 'https://scholar.google.com/citations?user=k_pi_QMAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/chenyuel/',
  cv: '#',
  cvLabel: 'Download my curriculum vitae (placeholder link).',
}

export const bio = [
  'Welcome! I am a Ph.D candidate in the Department of Economics at the University of Toronto. I mainly do research in econometrics with a focus on treatment effects and nonparametric identification, and topics in labor economics.',
]

export const jobMarketPaper = {
  title: 'Non-parametric Identification of Dynamic Treatment Effects: a Graphical Approach to Causality',
  url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6517978',
  meta: 'Chenyue Liu. 71 pages. Available at SSRN.',
  abstract: [
    'This paper proposes a unified framework to study different types of dynamic treatment effects (DTE), extending the dynamic potential outcome (DPO) framework developed by Torgovitsky (2019). The DPO framework is used to study the causal effect of the immediate preceding past on the present in his paper. In this paper, I first show that DTE such as the causal effect of the distant past on the present can be non-parametrically identified in a DPO framework which does not necessarily assume that the distant past enters the function of the present potential response. I then develop an algorithm leveraging a novel graphical representation of the DPO model. This graph-based algorithm provides a computationally tractable means of scaling the DPO framework beyond binary variables to multi-valued variables, circumventing the curse of dimensionality inherent in dynamic treatment effect studies. An application to the 2008 Survey of Income and Program Participation (SIPP) sheds further light on the long-term scarring effect of unemployment.',
  ],
  lastUpdated: 'September 25, 2026',
}

// Each entry: { title, url, meta, lastUpdated }. While empty, the section shows
// "Coming soon."
export const workingPapers = []

// Each entry: { course, role, term }, e.g.
// { course: 'ECO 101: Principles of Microeconomics', role: 'Teaching Assistant', term: 'Fall 2025' }
export const teaching = []

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
  { href: '#working-papers', label: 'Working Papers' },
  { href: '#teaching', label: 'Teaching' },
]
