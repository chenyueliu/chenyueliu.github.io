<template>
  <div>
    <div class="style-switch">
      <button
        v-for="option in styleOptions"
        :key="option.key"
        class="style-switch__button"
        :class="{ active: activeStyle === option.key }"
        @click="activeStyle = option.key"
      >
        {{ option.label }}
      </button>
    </div>

    <ModernLayout v-if="activeStyle === 'modern'" />
    <AcademicLayout v-else />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ModernLayout from '@/layouts/ModernLayout.vue'
import AcademicLayout from '@/layouts/AcademicLayout.vue'

const STORAGE_KEY = 'site-style-v1'

const styleOptions = [
  { key: 'modern', label: 'Modern' },
  { key: 'academic', label: 'Academic' },
]

const stored = localStorage.getItem(STORAGE_KEY)
const activeStyle = ref(styleOptions.some(o => o.key === stored) ? stored : 'modern')

watch(activeStyle, value => localStorage.setItem(STORAGE_KEY, value))
</script>

<style scoped>
.style-switch {
  position: fixed;
  top: 0.85rem;
  right: 1rem;
  z-index: 100;
  display: flex;
  gap: 2px;
  padding: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
}

.style-switch__button {
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 999px;
  background: none;
  font-family: system-ui, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: #4b5563;
  cursor: pointer;
}

.style-switch__button:hover {
  color: #111827;
}

.style-switch__button.active {
  background: #1f2937;
  color: #ffffff;
}
</style>
