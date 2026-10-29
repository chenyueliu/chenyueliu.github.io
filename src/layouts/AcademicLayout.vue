<template>
  <div class="academic-page">
    <div class="wrapper">
      <section class="main">
        <h1>{{ profile.name }}</h1>
        <p class="subtitle">
          {{ profile.title }}<br />
          {{ profile.affiliation }}
        </p>

        <h3 id="about" class="label">About</h3>
        <p v-for="(para, i) in bio" :key="i">{{ para }}</p>

        <h3 id="job-market-paper" class="label">Job Market Paper</h3>
        <p class="entry-title">
          <a :href="jobMarketPaper.url" target="_blank" rel="noopener">{{ jobMarketPaper.title }}</a>
        </p>
        <p class="meta">{{ jobMarketPaper.meta }}</p>
        <p v-for="(para, i) in jobMarketPaper.abstract" :key="i">{{ para }}</p>
        <p class="meta">Last updated on {{ jobMarketPaper.lastUpdated }}.</p>

        <h3 id="working-papers" class="label">Working Paper</h3>
        <template v-for="paper in workingPapers" :key="paper.title">
          <p class="entry-title">
            <a v-if="paper.url" :href="paper.url" target="_blank" rel="noopener">{{ paper.title }}</a>
            <template v-else>{{ paper.title }}</template>
          </p>
          <p v-if="paper.meta" class="meta">{{ paper.meta }}</p>
          <p v-for="(para, i) in paper.abstract" :key="i">{{ para }}</p>
          <p v-if="paper.lastUpdated" class="meta">Last updated on {{ paper.lastUpdated }}.</p>
        </template>
        <p v-if="!workingPapers.length" class="meta">Coming soon.</p>

        <h3 id="teaching" class="label">Teaching</h3>
        <template v-for="group in teaching" :key="group.role">
          <p class="entry-title">{{ group.role }}</p>
          <ul class="teaching-list">
            <li v-for="item in group.courses" :key="item.course">
              <span>{{ item.course }}</span>
              <span class="teaching-years">{{ item.years }}</span>
            </li>
          </ul>
        </template>
        <p v-if="!teaching.length" class="meta">Coming soon.</p>

        <h3 id="rabbit" class="label">My Rabbit</h3>
        <p>{{ rabbit.prompt }}</p>

        <div class="rabbit-gallery">
          <div v-for="shape in rabbit.shapes" :key="shape.key" class="rabbit-item">
            <img :src="shape.image" :alt="`Rabbit ${shape.label}`" />
            <button
              class="rabbit-choice"
              :class="{ selected: selectedShape === shape.key }"
              @click="selectShape(shape.key)"
            >
              {{ shape.label }}
            </button>
          </div>
        </div>

        <div class="rabbit-actions">
          <button class="rabbit-submit" :disabled="!selectedShape || submitting" @click="submitVote">
            {{ submitting ? 'Submitting…' : 'Submit vote' }}
          </button>
          <span v-if="message" class="meta">{{ message }}</span>
        </div>

        <div v-if="showResults && totalVotes > 0" class="rabbit-results">
          <ul>
            <li v-for="shape in rabbit.shapes" :key="shape.key">
              {{ shape.label }}: {{ votes[shape.key] }}
            </li>
            <li>Total votes: {{ totalVotes }}</li>
          </ul>
        </div>
      </section>

      <aside class="sidenav">
        <img :src="profile.photo" :alt="profile.name" />
        <ProfileLinks class="sidenav-icons" />
        <a href="#about">About</a>
        <a href="#job-market-paper">Job Market Paper</a>
        <a href="#working-papers">Working Paper</a>
        <a href="#teaching">Teaching</a>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { profile, bio, jobMarketPaper, workingPapers, teaching, rabbit } from '@/content'
import { useRabbitVotes } from '@/composables/useRabbitVotes'
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
.academic-page {
  min-height: 100vh;
  background: #faf8f5;
  color: #1a1a1a;
  font-family: 'Spectral', Georgia, 'Times New Roman', serif;
  font-size: 16px;
  line-height: 1.7;
  padding: 2rem;
}

.wrapper {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
  gap: 2rem;
  max-width: 62.4rem;
  margin: 0 auto;
  align-items: start;
}

.main {
  padding-right: 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.01em;
  margin: 0 0 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  color: #666;
  margin: 0.25rem 0 1rem;
}

/* Quiet uppercase section markers with a hairline rule above */
.label {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #888;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  margin: 1.75rem 0 0.5rem;
}

p {
  margin: 0 0 0.75rem;
}

a {
  color: #1f5a5a;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

a:hover {
  border-bottom-color: currentColor;
}

.entry-title {
  font-weight: 600;
  color: #1f5a5a;
  margin-bottom: 0.25rem;
}

.meta {
  display: block;
  font-size: 0.85rem;
  color: #888;
}

.papers {
  margin: 0 0 0.75rem;
  padding-left: 1.2rem;
}

.papers li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.teaching-list {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
}

.teaching-list li {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  line-height: 1.7;
}

.teaching-years {
  flex-shrink: 0;
  color: #888;
}

/* Sidebar: sticky nav plus portrait */

.sidenav {
  background: #ebf0ef;
  border-radius: 8px;
  padding: 1.5rem;
  position: sticky;
  top: 2rem;
}

.sidenav img {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1rem;
}

.sidenav-icons {
  --profile-icon-size: 1.25rem;
  --profile-icon-gap: 0.9rem;
  color: #666;
  margin-bottom: 1.25rem;
}

.sidenav a {
  display: block;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #666;
  line-height: 1.8;
  border-bottom: none;
  border-radius: 4px;
  transition: color 0.2s;
}

.sidenav a:hover {
  color: #1a1a1a;
}

/* Rabbit voting, flattened to match the rest of the page */

.rabbit-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.rabbit-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
}

.rabbit-choice,
.rabbit-submit {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888;
  background: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0.25rem 0.6rem;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.rabbit-choice {
  display: block;
  width: 100%;
  margin-top: 0.5rem;
}

.rabbit-choice:hover,
.rabbit-submit:hover:not(:disabled) {
  color: #1a1a1a;
  border-color: #999;
}

.rabbit-choice.selected {
  color: #1f5a5a;
  border-color: #1f5a5a;
}

.rabbit-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.rabbit-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.rabbit-results ul {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
  }

  .main {
    padding-right: 0;
  }

  .sidenav {
    position: static;
  }
}

@media (max-width: 640px) {
  .academic-page {
    padding: 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  .rabbit-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
