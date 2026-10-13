<template>
  <div class="page">
    <!-- Top navigation bar -->
    <header class="top-nav">
      <div class="top-nav__inner">
        <div class="top-nav__brand">
          <a href="#about" class="brand-name">{{ profile.name }}</a>
        </div>
        <nav class="top-nav__links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
<!--          <a href="#work-in-progress">Work in Progress</a>-->
<!--          <a href="#collaborative-research">Collaborative Research</a>-->
<!--          <a href="#rabbit">Others</a>-->
        </nav>
      </div>
    </header>

    <!-- Main content wrapper -->
    <main class="content">
      <!-- About / Biography section -->
      <section id="about" class="section section--about">
        <div class="about-grid">
          <!-- Left: photo and basic info -->
          <div class="about-left">
            <div class="profile-photo-wrap">
              <img class="profile-photo" :src="profile.photo" :alt="profile.name" />
            </div>
            <div class="about-name-block">
              <h1 class="about-name">{{ profile.name }}</h1>
              <p class="about-title">{{ profile.title }}</p>
              <p class="about-affiliation">{{ profile.affiliation }}</p>
            </div>
            <ProfileLinks class="about-icons" />
          </div>

          <!-- Right: biography text -->
          <div class="about-right">
            <h2 class="section-heading">Biography</h2>
            <p v-for="(para, i) in bio" :key="i">{{ para }}</p>
            <p class="cv-link-row">
              <span class="cv-icon">📄</span>
              <a id="cv" :href="profile.cv" class="cv-link">{{ profile.cvLabel }}</a>
            </p>
          </div>
        </div>
      </section>

      <!-- Job Market Paper section -->
      <section id="job-market-paper" class="section section--two-col">
        <div class="section-label-col">
          <h2 class="section-heading">Job Market Paper</h2>
        </div>
        <div class="section-main-col">
          <h3 class="paper-title">
            <a :href="jobMarketPaper.url" target="_blank" rel="noopener">{{ jobMarketPaper.title }}</a>
          </h3>
          <p class="paper-meta">{{ jobMarketPaper.meta }}</p>
          <p v-for="(para, i) in jobMarketPaper.abstract" :key="i">{{ para }}</p>
          <p class="last-updated">Last updated on {{ jobMarketPaper.lastUpdated }}.</p>
        </div>
      </section>

      <!-- Working Papers section -->
      <section v-if="workingPapers.length" id="working-papers" class="section">
        <h2 class="section-heading">Working Papers</h2>

        <article v-for="paper in workingPapers" :key="paper.title" class="paper-entry">
          <h3 class="paper-entry__title">
            <a :href="paper.url">{{ paper.title }}</a>
          </h3>
          <p class="paper-entry__meta">{{ paper.meta }}</p>
          <p class="paper-entry__update">Last updated on {{ paper.lastUpdated }}.</p>
        </article>
      </section>

      <!-- Simple blog placeholder -->
      <section id="blog" class="section">
        <h2 class="section-heading">Blog</h2>
        <p>{{ blog.intro }}</p>
      </section>

      <!-- Visitors section -->
      <section id="visitors" class="section">
        <h2 class="section-heading">Visitors</h2>
        <VisitorMap />
      </section>

      <!-- Rabbit Section -->
      <section id="rabbit" class="section">
        <h2 class="section-heading">My Rabbit</h2>
        <p>{{ rabbit.prompt }}</p>

        <div class="rabbit-gallery">
          <div v-for="shape in rabbit.shapes" :key="shape.key" class="rabbit-item">
            <img :src="shape.image" :alt="`Rabbit ${shape.label}`" />
            <p class="rabbit-caption">{{ shape.label }}</p>
            <button
                class="rabbit-choice-button"
                :class="{ selected: selectedShape === shape.key }"
                @click="selectShape(shape.key)"
            >
              Choose this shape
            </button>
          </div>
        </div>

        <!-- Submit + message -->
        <div class="rabbit-actions">
          <button
              class="rabbit-submit-button"
              :disabled="!selectedShape || submitting"
              @click="submitVote"
          >
            {{ submitting ? 'Submitting…' : 'Submit vote' }}
          </button>
          <p v-if="message" class="rabbit-message">
            {{ message }}
          </p>
        </div>

        <!-- Previous / accumulated results -->
        <div class="rabbit-results" v-if="showResults && totalVotes > 0">
          <h3>Previous votes</h3>
          <ul>
            <li v-for="shape in rabbit.shapes" :key="shape.key">
              {{ shape.label }}: {{ votes[shape.key] }}
            </li>
            <li>Total votes: {{ totalVotes }}</li>
          </ul>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { profile, bio, jobMarketPaper, workingPapers, blog, rabbit, navLinks } from '@/content'
import { useRabbitVotes } from '@/composables/useRabbitVotes'
import VisitorMap from '@/components/VisitorMap.vue'
import ProfileLinks from '@/components/ProfileLinks.vue'

const {
  selectedShape,
  votes,
  message,
  showResults,
  submitting,
  totalVotes,
  selectShape,
  submitVote,
} = useRabbitVotes()
</script>

<style scoped>
.page {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  sans-serif;
  background: #f5f5f5;
  color: #1f2933;
}

/* Top navigation bar, similar spirit to the reference site */

.top-nav {
  background: #1f4f7b; /* deep blue */
  color: #ffffff;
  padding: 0.75rem 0;
}

.top-nav__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
}

.top-nav__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  font-size: 0.95rem;
  margin-right: 150px; /* clears the fixed style switcher */
}

.top-nav__links a {
  color: #e5e7eb;
  text-decoration: none;
}

.top-nav__links a:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Main content wrapper */

.content {
  max-width: 1100px;
  margin: 2.5rem auto 3rem;
  padding: 0 1.5rem 3rem;
}

.section {
  background: #ffffff;
  border-radius: 0.4rem;
  padding: 1.75rem 2rem;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}

.section + .section {
  margin-top: 2.25rem;
}

.section-heading {
  margin: 0 0 1.1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

/* About / biography layout */

.section--about {
  padding-top: 2.25rem;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
  gap: 2.5rem;
  align-items: flex-start;
}

.about-left {
  text-align: center;
}

.profile-photo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
}

.profile-photo {
  width: 220px;
  height: 220px;
  border-radius: 999px;
  object-fit: cover;
}

.about-name-block {
  margin-bottom: 0.75rem;
}

.about-name {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
}

.about-title {
  margin: 0.35rem 0 0.15rem;
  font-size: 0.95rem;
  color: #4b5563;
}

.about-affiliation {
  margin: 0;
  font-size: 0.95rem;
  color: #1f4f7b;
}

.about-icons {
  margin-top: 0.9rem;
  color: #1f4f7b;
}

.about-right p {
  margin: 0 0 0.75rem;
  line-height: 1.7;
  color: #374151;
}

.cv-link-row {
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cv-icon {
  font-size: 1rem;
}

.cv-link {
  color: #1f4f7b;
  text-decoration: none;
}

.cv-link:hover {
  text-decoration: underline;
}

/* Two-column sections (Job Market Paper) */

.section--two-col {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.6fr);
  gap: 2.5rem;
}

.section-label-col {
  border-right: 1px solid #e5e7eb;
}

.section-label-col .section-heading {
  margin-top: 0.25rem;
}

.section-main-col {
  font-size: 0.98rem;
  color: #374151;
}

.section-main-col p {
  margin: 0 0 0.8rem;
  line-height: 1.7;
}

.paper-title {
  margin: 0 0 0.4rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.paper-title a {
  color: #1f4f7b;
  text-decoration: none;
}

.paper-title a:hover {
  text-decoration: underline;
}

.paper-meta {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.last-updated {
  margin-top: 0.4rem;
  font-size: 0.85rem;
  color: #9ca3af;
}

/* Paper / project entry styling used for many sections */

.paper-entry + .paper-entry {
  margin-top: 1.5rem;
}

.paper-entry__title {
  margin: 0 0 0.3rem;
  font-size: 1.05rem;
}

.paper-entry__title a {
  color: #1f4f7b;
  text-decoration: none;
}

.paper-entry__title a:hover {
  text-decoration: underline;
}

.paper-entry__meta {
  margin: 0 0 0.35rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.paper-entry__note {
  margin: 0;
  font-size: 0.95rem;
  color: #374151;
}

.paper-entry__update {
  margin: 0;
  font-size: 0.85rem;
  color: #9ca3af;
}

/* Responsive tweaks */

@media (max-width: 900px) {
  .top-nav__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .top-nav__links {
    margin-right: 0;
  }

  .about-grid,
  .section--two-col {
    grid-template-columns: minmax(0, 1fr);
  }

  .section-label-col {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 1.3rem;
    padding-bottom: 0.8rem;
  }
}

@media (max-width: 640px) {
  .content {
    padding: 0 1rem 2.5rem;
  }

  .section {
    padding: 1.4rem 1.25rem;
  }

  .profile-photo {
    width: 190px;
    height: 190px;
  }
}

.rabbit-photo-wrap {
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
}

.rabbit-photo {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.rabbit-gallery {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* widened cards */
  gap: 1.6rem; /* slightly larger spacing */
  justify-content: center; /* center the grid if total width is smaller */
}

.rabbit-item img {
  width: 100%;
  height: 250px;
  border-radius: 0.6rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

.rabbit-caption {
  margin-top: 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: #374151;
}

@media (max-width: 700px) {
  .rabbit-gallery {
    grid-template-columns: 1fr;
  }
}

.rabbit-choice-button {
  display: block;
  margin: 0.6rem auto 0;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  font-size: 0.85rem;
  cursor: pointer;
}

.rabbit-choice-button.selected {
  border-color: #1f4f7b;
  background: #e0ecff;
  font-weight: 600;
}

.rabbit-choice-button:hover {
  background: #edf2ff;
}

.rabbit-actions {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.rabbit-submit-button {
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  border: none;
  background: #1f4f7b;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
}

.rabbit-submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.rabbit-message {
  font-size: 0.9rem;
  color: #374151;
}

.rabbit-results {
  margin-top: 1.2rem;
  font-size: 0.9rem;
}

.rabbit-results ul {
  margin: 0.4rem 0 0;
  padding-left: 1.2rem;
}

</style>
