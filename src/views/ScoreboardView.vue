<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search"
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
            <th colspan="3">A</th>
            <th colspan="3">B</th>
            <th colspan="3">C</th>
            <th colspan="3">D</th>
            <th colspan="3">E</th>
          </tr>
        </thead>
      </template>
      <template v-slot:[`item.aAnswered`]="{ item }">
        <v-simple-checkbox
          v-model="item.aAnswered"
          disabled
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.bAnswered`]="{ item }">
        <v-simple-checkbox
          v-model="item.bAnswered"
          disabled
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.cAnswered`]="{ item }">
        <v-simple-checkbox
          v-model="item.cAnswered"
          disabled
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.dAnswered`]="{ item }">
        <v-simple-checkbox
          v-model="item.dAnswered"
          disabled
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.eAnswered`]="{ item }">
        <v-simple-checkbox
          v-model="item.eAnswered"
          disabled
        ></v-simple-checkbox>
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
