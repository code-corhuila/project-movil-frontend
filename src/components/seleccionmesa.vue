<template>
  <div class="table-selector">
    <label for="table">Selecciona una mesa:</label>
    <select id="table" v-model="selectedTable" @change="emitTable">
      <option v-for="table in tables" :key="table.id" :value="table.id">
        Mesa {{ table.id }} - {{ table.capacity }} personas
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TableSelector",
  props: {
    tables: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTable: null,
    };
  },
  methods: {
    emitTable() {
      this.$emit("update:table", this.selectedTable);
    },
  },
};
</script>

<style scoped>
.table-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
  color: #7b2cbf; /* Change to a pleasant purple */
}

select {
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: black; /* Set select text color to black */
  transition: border-color 0.3s;
}

select:focus {
  border-color: #7b2cbf; /* Change to a pleasant purple */
  outline: none;
}
</style>