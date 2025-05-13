<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Clientes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- Formulario -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ editando ? 'Editar Cliente' : 'Nuevo Cliente' }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Nombre</ion-label>
            <ion-input v-model="cliente.nombre" placeholder="Ingrese el nombre"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Teléfono</ion-label>
            <ion-input v-model.number="cliente.telefono" type="tel" placeholder="Ingrese el teléfono"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Status</ion-label>
            <ion-toggle v-model="cliente.status"></ion-toggle>
          </ion-item>

          <ion-button expand="block" @click="guardarCliente">
            {{ editando ? 'Actualizar' : 'Guardar' }}
          </ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Lista de clientes -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Listado de Clientes</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="cli in clientes" :key="cli.id">
              <ion-label>
                <h2>{{ cli.nombre }}</h2>
                <p>Teléfono: {{ cli.telefono }} | Estado: {{ cli.status ? 'Activo' : 'Inactivo' }}</p>
              </ion-label>
              <ion-button color="warning" @click="editarCliente(cli)">Editar</ion-button>
              <ion-button color="danger" @click="eliminarCliente(cli.id)">Eliminar</ion-button>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonButton,
  IonList,
  toastController,
} from '@ionic/vue'
import {
  getAllClientes,
  saveCliente,
  updateCliente,
  deleteCliente,
} from '../../services/clientesService'
import type { ClienteData } from '../../services/clientesService'
const cliente = ref<ClienteData>({ nombre: '', telefono: 0, status: true })
const clientes = ref<(ClienteData & { id: number })[]>([])
const editando = ref(false)
const idEditando = ref<number | null>(null)
const mostrarToast = async (mensaje: string, color: 'success' | 'danger') => {
  const toast = await toastController.create({
    message: mensaje,
    duration: 2000,
    color,
    position: 'top',
  })
  await toast.present()
}
const cargarClientes = async () => {
  try {
    clientes.value = await getAllClientes()
  } catch {
    await mostrarToast('Error al cargar clientes', 'danger')
  }
}
const guardarCliente = async () => {
  try {
    if (editando.value && idEditando.value !== null) {
      await updateCliente(cliente.value, idEditando.value)
      await mostrarToast('Cliente actualizado', 'success')
    } else {
      await saveCliente(cliente.value)
      await mostrarToast('Cliente guardado', 'success')
    }
    clearData()
    cargarClientes()
  } catch {
    await mostrarToast('Error al guardar cliente', 'danger')
  }
}
const editarCliente = (cli: ClienteData & { id: number }) => {
  cliente.value = { nombre: cli.nombre, telefono: cli.telefono, status: cli.status }
  editando.value = true
  idEditando.value = cli.id
}
const eliminarCliente = async (id: number) => {
  try {
    await deleteCliente(id)
    await mostrarToast('Cliente eliminado', 'success')
    cargarClientes()
  } catch {
    await mostrarToast('Error al eliminar cliente', 'danger')
  }
}
// Función para limpiar los datos y el formulario
const clearData = () => {
  cliente.value = { nombre: '', telefono: 0, status: true }
  editando.value = false
  idEditando.value = null
}
onMounted(() => {
  cargarClientes()
})
</script>

<style scoped>
ion-card {
  margin-top: 20px;
}
ion-item {
  --inner-padding-end: 10px;
}
</style>