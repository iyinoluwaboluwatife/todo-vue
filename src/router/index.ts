import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/homepage.vue';
import AddTaskPage from '../pages/addtaskpage.vue';
import ViewMorePage from '../pages/viewmorepage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/add-task', component: AddTaskPage },
  { path: '/task/:id', component: ViewMorePage, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
