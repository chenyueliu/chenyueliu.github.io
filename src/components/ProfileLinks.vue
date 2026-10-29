<template>
  <div>
    <div class="profile-links">
      <button
        type="button"
        class="email-toggle"
        title="Email me"
        aria-label="Email me"
        @click="openMail"
      >
        <i class="fas fa-envelope" aria-hidden="true"></i>
      </button>
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        :title="link.label"
        :aria-label="link.label"
        :target="link.external ? '_blank' : null"
        :rel="link.external ? 'noopener' : null"
      >
        <i :class="link.icon" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { profile } from '@/content'

// Decode the obfuscated address only on click, so it never appears in the page
function openMail() {
  const address = profile.email
    .replace(/\s*\[a t\]\s*/g, '@')
    .replace(/\s*\[d o t\]\s*/g, '.')
  window.location.href = `mailto:${address}`
}

const links = computed(() =>
  [    { label: 'Google Scholar', icon: 'ai ai-google-scholar', href: profile.scholar },
    { label: 'LinkedIn', icon: 'fab fa-linkedin', href: profile.linkedin },
  ].map(link => ({ ...link, external: link.href.startsWith('http') })),
)
</script>

<style scoped>
.profile-links {
  display: flex;
  justify-content: center;
  gap: var(--profile-icon-gap, 1.1rem);
  font-size: var(--profile-icon-size, 1.5rem);
  line-height: 1;
}

.profile-links a,
.email-toggle {
  color: inherit;
  text-decoration: none;
  border-bottom: none;
  opacity: 0.75;
  transition: opacity 0.2s, transform 0.2s;
}

.email-toggle {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
}

.profile-links a:hover,
.email-toggle:hover {
  opacity: 1;
  transform: translateY(-2px);
}
</style>
