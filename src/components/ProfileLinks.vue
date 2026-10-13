<template>
  <div class="profile-links">
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
</template>

<script setup>
import { computed } from 'vue'
import { profile } from '@/content'

const links = computed(() =>
  [
    { label: 'Email', icon: 'fas fa-envelope', href: `mailto:${profile.email}` },
    { label: 'Google Scholar', icon: 'ai ai-google-scholar', href: profile.scholar },
    { label: 'CV', icon: 'ai ai-cv', href: profile.cv },
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

.profile-links a {
  color: inherit;
  text-decoration: none;
  border-bottom: none;
  opacity: 0.75;
  transition: opacity 0.2s, transform 0.2s;
}

.profile-links a:hover {
  opacity: 1;
  transform: translateY(-2px);
}
</style>
