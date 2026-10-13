import { ref, computed } from 'vue'
import { rabbit } from '@/content'

const API = 'https://abacus.jasoncameron.dev'
const NAMESPACE = 'chenyueliu-rabbit'

const shapeKeys = rabbit.shapes.map(s => s.key)

const selectedShape = ref(null)
const votes = ref(Object.fromEntries(shapeKeys.map(k => [k, 0])))
const message = ref('')
const showResults = ref(false)
const submitting = ref(false)

async function readCount(key) {
  const res = await fetch(`${API}/get/${NAMESPACE}/${key}`)
  const { value } = await res.json()
  return value
}

async function fetchVotes() {
  try {
    const counts = await Promise.all(shapeKeys.map(readCount))
    votes.value = Object.fromEntries(shapeKeys.map((k, i) => [k, counts[i]]))
  } catch (e) {
    console.error('Failed to load rabbit votes', e)
  }
}

fetchVotes()

const totalVotes = computed(() => shapeKeys.reduce((sum, k) => sum + votes.value[k], 0))

function selectShape(shape) {
  selectedShape.value = shape
  message.value = ''
}

async function submitVote() {
  if (!selectedShape.value || submitting.value) return

  submitting.value = true
  try {
    const res = await fetch(`${API}/hit/${NAMESPACE}/${selectedShape.value}`)
    if (!res.ok) throw new Error(`Vote failed with status ${res.status}`)
    await fetchVotes()

    message.value = `You voted for ${rabbit.shapes.find(s => s.key === selectedShape.value).label}!`
    showResults.value = true
  } catch (e) {
    console.error('Failed to submit vote', e)
    message.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}

export function useRabbitVotes() {
  return {
    selectedShape,
    votes,
    message,
    showResults,
    submitting,
    totalVotes,
    selectShape,
    submitVote,
  }
}
