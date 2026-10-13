<template>
  <div class="visitors-widgets">
    <div ref="mapContainer"></div>
    <div ref="globeContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const CLUSTRMAPS_ID = 'bT_tAPetY_RshkA8QMbQeGEXIquM1b37cLwu7OUVq_A'

const mapContainer = ref(null)
const globeContainer = ref(null)

function injectScript(container, id, src) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.id = id
  script.src = src
  container.appendChild(script)
}

onMounted(() => {
  injectScript(
    mapContainer.value,
    'clustrmaps',
    `//clustrmaps.com/map_v2.js?d=${CLUSTRMAPS_ID}&cl=ffffff&w=a`,
  )
  injectScript(globeContainer.value, 'clstr_globe', `//clustrmaps.com/globe.js?d=${CLUSTRMAPS_ID}`)
})
</script>

<style scoped>
.visitors-widgets {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1.5rem;
}
</style>
