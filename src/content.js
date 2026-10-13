import profilePhoto from '@/assets/profile-4.jpg'
import rabbitOval from '@/assets/rabbit_oval.png'
import rabbitHexagon from '@/assets/rabbit_hexagon.png'
import rabbitRectangle from '@/assets/rabbit_rectangle.png'

export const profile = {
  name: 'Chenyue Liu',
  title: 'PhD Candidate in Economics',
  affiliation: 'University of Toronto',
  photo: profilePhoto,
  email: 'chenyue.liu@mail.utoronto.ca',
  scholar: 'https://scholar.google.com/citations?user=k_pi_QMAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/chenyuel/',
  cv: '#',
  cvLabel: 'Download my curriculum vitae (placeholder link).',
}

// DRAFT — written from the job market paper's abstract. Chenyue should rewrite
// this in her own voice before the site is shared.
export const bio = [
  'I am a PhD candidate in the Department of Economics at the University of Toronto. My research is in econometrics, where I work on the identification of dynamic treatment effects — how to credibly measure the causal effect of the past on present outcomes when those effects unfold over time.',
  'My job market paper develops a unified framework for dynamic treatment effects, extending the dynamic potential outcome model. It introduces a graphical representation and an accompanying algorithm that make the framework computationally tractable beyond binary variables. I apply it to the Survey of Income and Program Participation to study the long-term scarring effect of unemployment.',
]

export const jobMarketPaper = {
  title: 'Non-parametric Identification of Dynamic Treatment Effects: a Graphical Approach to Causality',
  url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6517978',
  meta: 'Chenyue Liu. 71 pages. Available at SSRN.',
  abstract: [
    'This paper proposes a unified framework to study different types of dynamic treatment effects (DTE), extending the dynamic potential outcome (DPO) framework developed by Torgovitsky (2019). The DPO framework is used to study the causal effect of the immediate preceding past on the present in his paper. In this paper, I first show that DTE such as the causal effect of the distant past on the present can be non-parametrically identified in a DPO framework which does not necessarily assume that the distant past enters the function of the present potential response.',
    'I then develop an algorithm leveraging a novel graphical representation of the DPO model. This graph-based algorithm provides a computationally tractable means of scaling the DPO framework beyond binary variables to multi-valued variables, circumventing the curse of dimensionality inherent in dynamic treatment effect studies. An application to the 2008 Survey of Income and Program Participation (SIPP) sheds further light on the long-term scarring effect of unemployment.',
  ],
  lastUpdated: 'September 25, 2026',
}

// TODO: add real working papers; the placeholder entries were removed so nothing
// invented appears on the live site.
export const workingPapers = []

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
  ...(workingPapers.length ? [{ href: '#working-papers', label: 'Working Papers' }] : []),
]
