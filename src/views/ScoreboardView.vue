<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="table">
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
      headers: [
        { text: "Rank", value: "rank", align: "center" },
        { text: "Name", value: "name", align: "center" },
        { text: "Score", value: "score", align: "center" },
        { text: "Penalty", value: "penalty", align: "center" },
        { text: "Score", value: "aScore", align: "center" },
        { text: "Time", value: "aTime", align: "center" },
        { text: "Score", value: "bScore", align: "center" },
        { text: "Time", value: "bTime", align: "center" },
        { text: "Score", value: "cScore", align: "center" },
        { text: "Time", value: "cTime", align: "center" },
        { text: "Score", value: "dScore", align: "center" },
        { text: "Time", value: "dTime", align: "center" },
        { text: "Score", value: "eScore", align: "center" },
        { text: "Time", value: "eTime", align: "center" },
      ],
      items: [
        {
          rank: "1",
          name: "Alex",
          score: 40,
          penalty: 10,
          aScore: 10,
          aTime: "5 mins",
          bScore: 10,
          bTime: "5 mins",
          cScore: 10,
          cTime: "5 mins",
          dScore: 10,
          dTime: "5 mins",
          eScore: 10,
          eTime: "5 mins",
        },
        {
          rank: "2",
          name: "John",
          score: 40,
          penalty: 10,
          aScore: 10,
          aTime: "5 mins",
          bScore: 10,
          bTime: "5 mins",
          cScore: 10,
          cTime: "5 mins",
          dScore: 10,
          dTime: "5 mins",
          eScore: 10,
          eTime: "5 mins",
        },
        {
          rank: 3,
          name: "Steve",
          score: 40,
          penalty: 10,
          aScore: 10,
          aTime: "5 mins",
          bScore: 10,
          bTime: "5 mins",
          cScore: 10,
          cTime: "5 mins",
          dScore: 10,
          dTime: "5 mins",
          eScore: 10,
          eTime: "5 mins",
        },
        {
          rank: "4",
          name: "David",
          score: 40,
          penalty: 10,
          aScore: 10,
          aTime: "5 mins",
          bScore: 10,
          bTime: "5 mins",
          cScore: 10,
          cTime: "5 mins",
          dScore: 10,
          dTime: "5 mins",
          eScore: 10,
          eTime: "5 mins",
        },
      ],
    };
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
