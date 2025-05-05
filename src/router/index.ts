import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import GestionReservasPage from '../views/GestionReservasPage.vue';
import GestionClientesPage from '../views/GestionClientes.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/gestion-reservas',
    name: 'GestionReservas',
    component: GestionReservasPage
  },
  {
    path: '/gestion-clientes',
    name: 'GestionClientes',
    component: GestionClientesPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;




