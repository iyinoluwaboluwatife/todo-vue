<template>
  <div class="form">
    <h2>Add New Task</h2>
    <form @submit.prevent="addTask">
      <label>Task Name</label>
      <input v-model="title" required placeholder="e.g. Make breakfast" />

      <label>Completed</label>
      <select v-model="completed">
        <option :value="true">True</option>
        <option :value="false">False</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('');
const completed = ref(false);
const router = useRouter();

function addTask() {
  console.log('New Task:', { title: title.value, completed: completed.value });
  router.push('/');
}
</script>

<style scoped>
.form {
  background: white;
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
button {
  background: purple;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
}
</style>
