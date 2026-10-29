<template>
  <ModernLayout v-if="activeStyle === 'modern'" />
  <AcademicLayout v-else />
</template>

<script setup>
import ModernLayout from '@/layouts/ModernLayout.vue'
import AcademicLayout from '@/layouts/AcademicLayout.vue'

const STORAGE_KEY = 'site-style-v1'
const STYLES = ['modern', 'academic']

// Each visitor gets a random style on their first visit and keeps it after.
// Adding ?style=modern or ?style=academic to the URL previews one without
// changing what is remembered.
function pickStyle() {
  const requested = new URLSearchParams(window.location.search).get('style')
  if (STYLES.includes(requested)) return requested

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (STYLES.includes(stored)) return stored
  } catch {
    // Storage unavailable (e.g. private browsing): fall through to a random pick
  }

  const style = STYLES[Math.floor(Math.random() * STYLES.length)]
  try {
    localStorage.setItem(STORAGE_KEY, style)
  } catch {
    // Not remembered; the next visit picks again
  }
  return style
}

const activeStyle = pickStyle()
</script>
