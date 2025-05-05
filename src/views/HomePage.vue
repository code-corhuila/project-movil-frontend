<template>
  <div id="layout">
    <div id="container">
      <h1 class="title">Reservas Realizadas</h1>
      <div v-if="reservations.length" class="reservations-list">
        <div v-for="reservation in reservations" :key="reservation.id" class="reservation-card">
          <h2>Mesa {{ reservation.table }}</h2>
          <p><strong class="attribute-name">Fecha y Hora:</strong> {{ reservation.datetime }}</p>
          <p><strong class="attribute-name">Cliente:</strong> {{ reservation.customer.name }}</p>
          <p><strong class="attribute-name">Contacto:</strong> {{ reservation.customer.contact }}</p>
        </div>
      </div>
      <div v-else>
        <p>No hay reservas realizadas.</p>
      </div>
      <button class="redirect-button" @click="goToGestionReservasPage">
        Ir a Gestión de Reservas
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const reservations = [
  { id: 1, table: 2, datetime: '2023-10-10T19:00', customer: { name: 'Laura', contact: '123456789' } },
  { id: 2, table: 3, datetime: '2023-10-11T20:00', customer: { name: 'Fernanda', contact: '987654321' } },
];

const goToGestionReservasPage = () => {
  router.push({ path: '/gestion-reservas' }).then(() => {
    router.go(0); // Reload the page after navigation
  });
};
</script>

<style scoped>
#layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f4f8;
}

#container {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
}

.title {
  color: #7b2cbf; /* Same purple as the button */
}

.reservations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.reservation-card {
  background-color: #f9f9f9;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.reservation-card h2 {
  color: black;
  margin-bottom: 10px;
}

.reservation-card p {
  margin: 5px 0;
  color: black;
}

.redirect-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #7b2cbf; /* Change to a pleasant purple */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.redirect-button:hover {
  background-color: #5a189a; /* Darker purple */
}

.attribute-name {
  color: #7b2cbf; /* Same purple as the button */
}
</style>
