<template>
  <div class="view">
    <router-link to="/" class="back">← Go back</router-link>
    <div class="card">
      <h3>Task</h3>
      <p>{{ todo?.title }}</p>

      <h3>Completion Status</h3>
      <p>{{ todo?.completed ? 'Completed' : 'Not Completed' }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { Todo } from '../types';
import { useRoute } from 'vue-router';

const route = useRoute();
const todo = ref<Todo | null>(null);

onMounted(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`);
  todo.value = await res.json();
});
</script>

<style scoped>
.view {
  background: #f3e8ff;
  min-height: 100vh;
  padding: 2rem;
}
.card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.back {
  text-decoration: none;
  color: purple;
}
</style>
