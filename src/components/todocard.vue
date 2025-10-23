<template>
  <div class="card">
    <h3>{{ todo.title }}</h3>
    <p :class="todo.completed ? 'completed' : 'pending'">
      {{ todo.completed ? 'Completed' : 'Pending' }}
    </p>
    <router-link :to="`/task/${todo.id}`" class="view-btn">View More</router-link>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from '../types';
defineProps<{ todo: Todo }>();
</script>

<style scoped>
.card {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.completed { color: green; font-weight: bold; }
.pending { color: red; font-weight: bold; }
.view-btn {
  background: #4b0082;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 6px;
}
</style>
