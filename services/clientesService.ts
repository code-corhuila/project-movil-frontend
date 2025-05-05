import axios from 'axios'
import { API_BASE_URL } from './api-config'

const CLIENTE_API_URL = `${API_BASE_URL}/clientes`

// Interfaz del cliente según el JSON proporcionado
export interface ClienteData {
  nombre: string
  telefono: number
  status: boolean
}

// Obtener todos los clientes
export const getAllClientes = async (): Promise<ClienteData[]> => {
  try {
    const { data } = await axios.get(CLIENTE_API_URL)
    // Filtramos los clientes donde deleteAt es null
    const clientesActivos = data.data.filter((cliente: any) => cliente.deletedAt === null)
    return clientesActivos
  } catch (error) {
    console.error('Error al obtener clientes:', error)
    throw error
  }
}


// Buscar cliente por ID
export const findClienteById = async (id: number): Promise<ClienteData> => {
  try {
    const { data } = await axios.get(`${CLIENTE_API_URL}/${id}`)
    return data
  } catch (error) {
    console.error(`Error al obtener cliente ID ${id}:`, error)
    throw error
  }
}

// Crear nuevo cliente
export const saveCliente = async (clienteData: ClienteData): Promise<any> => {
  try {
    const { data } = await axios.post(CLIENTE_API_URL, clienteData)
    return data
  } catch (error) {
    console.error('Error al guardar cliente:', error)
    throw error
  }
}

// Actualizar cliente existente
export const updateCliente = async (clienteData: ClienteData, id: number): Promise<any> => {
  try {
    const { data } = await axios.put(`${CLIENTE_API_URL}/${id}`, clienteData)
    return data
  } catch (error) {
    console.error(`Error al actualizar cliente ID ${id}:`, error)
    throw error
  }
}

// Eliminar cliente por ID
export const deleteCliente = async (id: number): Promise<any> => {
  try {
    const { data } = await axios.delete(`${CLIENTE_API_URL}/${id}`)
    return data
  } catch (error) {
    console.error(`Error al eliminar cliente ID ${id}:`, error)
    throw error
  }
}
