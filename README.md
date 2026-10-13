# Academic Personal Website

A personal academic website built with Vue 3 + Vite, deployed to GitHub Pages via a custom domain.

## Tech Stack

- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Build tool:** Vite
- **Styling:** Custom CSS (no framework)
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

All page copy lives in **`src/content.js`** — bio, paper details, links, photos. Both page styles read from it, so content is edited in one place.

```
src/
  content.js              all site copy and links
  layouts/
    ModernLayout.vue      cards, top nav, sans-serif
    AcademicLayout.vue    serif, flat, sticky sidebar
  components/
    ProfileLinks.vue      email / Scholar / CV / LinkedIn icons
    VisitorMap.vue        ClustrMaps widgets
  composables/
    useRabbitVotes.js     shared vote tally
  App.vue                 style switcher + active layout
```

## Site Sections

| Section | Status | Notes |
|---|---|---|
| About / Biography | Real | Bio is a draft written from the paper abstract — needs rewriting in the author's own voice |
| Job Market Paper | Real | Title, abstract, and SSRN link |
| Working Papers | Empty | `workingPapers` is `[]`; the section and its nav link hide themselves until entries exist |
| Blog | Placeholder | Still generic text |
| Visitors | Live | ClustrMaps map + globe; only render on the real domain, not localhost |
| My Rabbit | Live | Shape voting, backed by the Abacus counter API |

The CV link is a placeholder (`#`) until a PDF exists.

## Features

### Two switchable styles

A control in the top right toggles between **Modern** and **Academic** layouts. The choice persists in `localStorage`. Both render the same content from `content.js`.

This is a comparison aid, not a finished feature — remove the switcher in `App.vue` once a style is chosen.

### Rabbit voting

Visitors vote on the shape of the rabbit (oval / hexagon / rectangle). Counts are stored in the free [Abacus](https://abacus.jasoncameron.dev) counter API under the namespace defined in `useRabbitVotes.js`.

Abacus needs **no account and no API key**, so nothing secret ships in the bundle. Reading is `GET /get/<namespace>/<key>` and voting is `GET /hit/<namespace>/<key>`.

Counter admin keys (needed only to reset a count, never by the site) are kept in `abacus-admin-keys.txt`, which is gitignored.

> This replaced an earlier GitHub Gist backend. That approach required a personal access token, and because Vite inlines `VITE_*` variables as literals at build time, the token was published in the public JavaScript bundle. Avoid reintroducing any browser-side API that needs a credential.

### Visitor map

Two ClustrMaps widgets — a flat map and a 3D globe — injected on mount in `VisitorMap.vue`, since Vue does not execute `<script>` tags in templates. They only render on the registered domain, so the section looks empty in local development.

## Local Development

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`, or the next free port. No environment variables or secrets are required.

```sh
npm run build     # production build into dist/
```

## Deployment

Push to `main`; GitHub Actions builds and deploys to GitHub Pages. The workflow is `.github/workflows/deploy.yml` and needs no repository secrets.

**GitHub Pages requires a public repository on the GitHub Free plan.** Making the repo private unpublishes the site — the domain starts returning a 404 and Pages is disabled entirely. Restoring it means making the repo public again, then re-selecting **GitHub Actions** as the source under Settings → Pages (it resets to "Deploy from a branch"), re-entering the custom domain, and re-running the workflow. Serving Pages from a private repository requires GitHub Pro or higher.

While the repo is private, pushes still work and the build step still passes — only the deploy step fails.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
