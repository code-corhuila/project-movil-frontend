<template>
  <div class="date-picker">
    <label for="reservation-datetime">Selecciona fecha y hora:</label>
    <input
      type="datetime-local"
      id="reservation-datetime"
      v-model="selectedDateTime"
      @change="emitDateTime"
    />
  </div>
</template>

<script>
export default {
  name: "SeleccionFecha",
  data() {
    return {
      selectedDateTime: "",
    };
  },
  methods: {
    emitDateTime() {
      this.$emit("update:datetime", this.selectedDateTime);
    },
  },
};
</script>

<style scoped>
.date-picker {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
  color: #7b2cbf; /* Change to a pleasant purple */
}

input[type="datetime-local"] {
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: black; /* Set input text color to black */
  transition: border-color 0.3s;
}

input[type="datetime-local"]:focus {
  border-color: #7b2cbf; /* Change to a pleasant purple */
  outline: none;
}
</style>