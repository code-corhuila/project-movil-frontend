import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import GestionClientesPage from '../views/GestionClientes.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/gestion-clientes'
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