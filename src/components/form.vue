<!-- filepath: src/components/CustomerForm.vue -->
<template>
  <div class="form-group">
    <label for="name">Nombre:</label>
    <input type="text" id="name" v-model="customer.name" required />
  </div>
  <div class="form-group">
    <label for="contact">Contacto:</label>
    <input type="text" id="contact" v-model="customer.contact" required />
  </div>
  <button type="submit">Enviar</button>
</template>

<script>
export default {
name: "FormularioCliente",
data() {
  return {
    customer: {
      name: "",
      contact: "",
    },
  };
},
methods: {
  submitForm() {
    this.$emit("submit", this.customer);
  },
},
};
</script>

<style scoped>
form {
display: flex;
flex-direction: column;
gap: 15px;
background-color: #ffffff;
padding: 20px;
border: 1px solid #dddddd;
border-radius: 10px;
box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.form-group {
display: flex;
flex-direction: column;
gap: 5px;
}

label {
font-weight: bold;
color: #7b2cbf; /* Change to a pleasant purple */
}

input {
padding: 10px;
border: 1px solid #cccccc;
border-radius: 5px;
font-size: 16px;
background-color: #f9f9f9;
color: black;
transition: border-color 0.3s;
}

input:focus {
border-color: #7b2cbf; /* Change to a pleasant purple */
outline: none;
}

button {
padding: 10px;
background-color: #7b2cbf; /* Change to a pleasant purple */
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s;
}

button:hover {
background-color: #5a189a; /* Darker purple */
}
</style>