<template>
  <nav class="navbar">
    <h1 class="logo">Todo</h1>
    <div class="nav-links">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/add-task" exact-active-class="active">Add Tasks</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4b0082;
  color: white;
  padding: 1rem 2rem;
}
.nav-links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
}
.active {
  background: #220044;
  border-radius: 5px;
}
</style>
