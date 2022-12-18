<template>
  <div>
    <v-text-field
      v-model="search"
      label="search"
      append-icon="mdi-magnify"
      hide-details
    >
    </v-text-field>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="table"
    >
      <template v-slot:header>
        <thead class="center">
          <tr>
            <th colspan="4">Questions ===></th>
            <th colspan="2">A</th>
            <th colspan="2">B</th>
            <th colspan="2">C</th>
            <th colspan="2">D</th>
            <th colspan="2">E</th>
          </tr>
        </thead>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [],
      items: [],
    };
  },
  mounted() {
    this.headers = this.$store.getters.getScoreboardHeaders;
    this.items = this.$store.getters.getScoreboardItems;
  },
};
</script>

<style>
.table tbody tr td {
  border-left: 1px solid lightgray !important;
  white-space: pre-wrap;
}

.center tr th {
  border-top: 1px solid lightgray;
}

.center tr th,
.center + thead th {
  border-left: 1px solid lightgray;
  text-align: center !important;
}
</style>
