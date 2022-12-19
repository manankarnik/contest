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
      :headers="computeHeaders"
      :items="items"
      :search="search"
      class="table"
    >
      <template v-slot:header>
        <thead class="center">
          <tr>
            <th colspan="4">Questions ===></th>
            <th colspan="4">A</th>
            <th colspan="4">B</th>
            <th colspan="4">C</th>
            <th colspan="4">D</th>
            <th colspan="4">E</th>
          </tr>
          <tr>
            <td><v-icon>mdi-filter</v-icon></td>
            <td>
              <v-select
                v-model="name"
                :items="items.map((item) => item.name)"
                clearable
                clear-icon="$clear"
                >selection box
              </v-select>
            </td>
            <td></td>
            <td></td>
            <td colspan="4" v-for="(ans, idx) in answers" :key="idx">
              <v-select
                v-model="ans.answered"
                :items="['Answered', 'Unanswered']"
                clearable
                clear-icon="$clear"
                >selection box
              </v-select>
            </td>
          </tr>
        </thead>
      </template>
      <template
        v-for="val in [
          'aAnswered',
          'bAnswered',
          'cAnswered',
          'dAnswered',
          'eAnswered',
        ]"
        v-slot:[`item.`+val]="{ item }"
      >
        <v-simple-checkbox
          :key="val"
          v-model="item[val]"
          disabled
        ></v-simple-checkbox>
      </template>
      <template
        v-for="val in [
          { key: 'aDetails', disabled: 'aAnswered' },
          { key: 'bDetails', disabled: 'bAnswered' },
          { key: 'cDetails', disabled: 'cAnswered' },
          { key: 'dDetails', disabled: 'dAnswered' },
          { key: 'eDetails', disabled: 'eAnswered' },
        ]"
        v-slot:[`item.`+val.key]="{ item }"
      >
        <v-btn :key="val.key" color="primary" :disabled="!item[val.disabled]"
          >View</v-btn
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      name: "",
      answers: [
        { col: 6, answered: "" },
        { col: 10, answered: "" },
        { col: 14, answered: "" },
        { col: 18, answered: "" },
        { col: 22, answered: "" },
      ],
      headers: [],
      items: [],
    };
  },
  mounted() {
    this.items = this.$store.getters.getScoreboardItems;
  },
  methods: {
    async updateHeaders() {
      this.headers = await this.$store.getters.getScoreboardHeaders;
      this.headers[1]["filter"] = (value) => {
        if (!this.name) return true;
        return value == this.name;
      };
      for (let ans of this.answers) {
        this.headers[ans.col]["filter"] = (value) => {
          if (!ans.answered) return true;
          return ans.answered == "Answered" ? value : !value;
        };
      }
    },
  },
  computed: {
    computeHeaders() {
      this.updateHeaders();
      return this.headers;
    },
  },
};
</script>

<style>
.table tbody tr td {
  border-left: 1px solid lightgray !important;
  white-space: pre-wrap;
}

.center tr th,
.center tr td,
.center + thead th {
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  text-align: center !important;
}
</style>
