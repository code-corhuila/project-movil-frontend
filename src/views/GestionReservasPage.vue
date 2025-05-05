<template>
  <div id="layout">
    <div class="gestion-reservas-page">
      <h1 class="header-text">Gestión de Reservas</h1>
      <div class="card">
        <SeleccionMesa 
          :tables="tables" 
          @update:table="updateSelectedTable" 
        />
        <SeleccionFecha 
          @update:datetime="updateSelectedDateTime" 
        />
        <FormularioCliente 
          @submit="handleFormSubmit" 
        />
        <div v-if="reservationSummary" class="summary">
          <h2>Resumen de la Reserva</h2>
          <p><strong>Mesa:</strong> {{ reservationSummary.table }}</p>
          <p><strong>Fecha y Hora:</strong> {{ reservationSummary.datetime }}</p>
          <p><strong>Cliente:</strong> {{ reservationSummary.customer.name }}</p>
          <p><strong>Contacto:</strong> {{ reservationSummary.customer.contact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SeleccionMesa from '@/components/seleccionmesa.vue';
import SeleccionFecha from '@/components/seleccionfecha.vue';
import FormularioCliente from '@/components/formulario.vue';

interface Customer {
  name: string;
  contact: string;
}

interface ReservationSummary {
  table: number | null;
  datetime: string;
  customer: Customer;
}

const tables = [
  { id: 1, capacity: 4 },
  { id: 2, capacity: 6 },
  { id: 3, capacity: 2 },
];

let selectedTable: number | null = null;
let selectedDateTime = '';
let reservationSummary: ReservationSummary | null = null;

const updateSelectedTable = (tableId: number) => {
  selectedTable = tableId;
};

const updateSelectedDateTime = (datetime: string) => {
  selectedDateTime = datetime;
};

const handleFormSubmit = (customer: Customer) => {
  reservationSummary = {
    table: selectedTable,
    datetime: selectedDateTime,
    customer,
  };
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

.gestion-reservas-page {
  font-family: Arial, sans-serif;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.header-text {
  color: #7b2cbf; /* Change to a pleasant purple */
  margin-bottom: 20px;
  text-align: center;
}

.summary {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #7b2cbf; /* Change to a pleasant purple */
  border-radius: 8px;
  background-color: #f3e8ff; /* Light purple background */
}

.summary h2 {
  color: #5a189a; /* Darker purple */
  margin-bottom: 10px;
}

.summary p {
  margin: 5px 0;
  color: black; /* Ensure text is black */
}

select, input {
  color: black; /* Set input text color to black */
}
</style>
