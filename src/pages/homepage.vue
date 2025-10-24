<template>
  <section class="home">
    <HeroSection />
    <div class="tasks">
      <h2>Tasks</h2>
      <input v-model="search" placeholder="Search todos..." />

      <div class="filters">
        <button @click="filter = 'all'">All</button>
        <button @click="filter = 'completed'">Completed</button>
        <button @click="filter = 'pending'">Not Completed</button>
      </div>

      <div class="cards">
        <TodoCard
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import TodoCard from '../components/todocard.vue';
import HeroSection from '../components/herosection.vue';
import type { Todo } from '../types';

const todos = ref<Todo[]>([]);
const search = ref('');
const filter = ref<'all' | 'completed' | 'pending'>('all');

onMounted(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  todos.value = await res.json();
});

const filteredTodos = computed(() => {
  return todos.value.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(search.value.toLowerCase());
    const matchesFilter =
      filter.value === 'all' ||
      (filter.value === 'completed' && todo.completed) ||
      (filter.value === 'pending' && !todo.completed);
    return matchesSearch && matchesFilter;
  });
});
</script>

<style scoped>
.home {
  background: #f3e8ff;
  min-height: 100vh;
  padding: 2rem;
  text-align:center;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.filters button {
  margin-right: 0.5rem;
  background: #4b0082;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  margin-bottom:20px;
  
}
input {
  margin: 1rem 0;
  padding: 0.5rem;
  width: 250px;
}
</style>
