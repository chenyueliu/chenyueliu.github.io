<template>
  <ModernLayout v-if="activeStyle === 'modern'" />
  <AcademicLayout v-else />
</template>

<script setup>
import ModernLayout from '@/layouts/ModernLayout.vue'
import AcademicLayout from '@/layouts/AcademicLayout.vue'

const STYLES = ['modern', 'academic']

// Chance that a page load shows the academic style; the rest show modern
const ACADEMIC_SHARE = 0.7

// A random style on every page load. Adding ?style=modern or ?style=academic
// to the URL shows that one instead.
function pickStyle() {
  const requested = new URLSearchParams(window.location.search).get('style')
  if (STYLES.includes(requested)) return requested
  return Math.random() < ACADEMIC_SHARE ? 'academic' : 'modern'
}

const activeStyle = pickStyle()
</script>
