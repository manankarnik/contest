<template>
  <div>
    <title-bar color="primary" title="Scoreboard" />
    <v-text-field v-model="search" label="Search" append-icon="mdi-magnify">
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
            <th
              v-for="data in ['Questions', 'A', 'B', 'C', 'D', 'E']"
              :key="data"
              colspan="4"
            >
              {{ data }}
            </th>
          </tr>
          <tr>
            <th><v-icon>mdi-filter</v-icon></th>
            <filter-box-cell
              @selection-changed="(event) => (name = event)"
              :items="items.map((item) => item.name)"
            />
            <th></th>
            <th></th>
            <filter-box-cell
              colspan="4"
              v-for="(ans, idx) in answers"
              :key="idx"
              @selection-changed="(event) => (ans.answered = event)"
              :items="['Answered', 'Unanswered']"
            />
          </tr>
        </thead>
      </template>
      <template
        v-for="question in questionsNos"
        v-slot:[`item.`+question+`Answered`]="{ item }"
      >
        <v-simple-checkbox
          :key="question"
          v-model="item[question]"
          disabled
        ></v-simple-checkbox>
      </template>
      <template
        v-for="question in questionsNos"
        v-slot:[`item.`+question+`Details`]="{ item, index }"
      >
        <v-btn
          :key="question"
          :color="item[question.concat('Answered')] ? 'primary' : 'error'"
          @click="showDetails(index, question)"
        >
          View
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import FilterBoxCell from "@/components/FilterBoxCell.vue";
export default {
  data() {
    return {
      search: "",
      name: "",
      questionsNos: ["a", "b", "c", "d", "e"],
      answers: [
        { col: 6, answered: "" },
        { col: 10, answered: "" },
        { col: 14, answered: "" },
        { col: 18, answered: "" },
        { col: 22, answered: "" },
      ],
      questions: [],
      headers: [],
      items: [],
    };
  },
  mounted() {
    this.items = this.$store.getters.getScoreboardItems;
    this.questions = this.$store.getters.getQuestions;
  },
  components: { TitleBar, FilterBoxCell },
  methods: {
    showDetails(index, questionNo) {
      let question = this.questions.filter(
        (item) => item.question == questionNo
      )[0];
      this.$store.commit("submissions", {
        time: this.items[index][questionNo + "Time"],
        status: this.items[index][questionNo + "Answered"]
          ? "Answered"
          : "Not answered",
        by: this.items[index].name,
        title: question.title,
        language: question.language,
      });
      this.$router.push("/submissions");
    },
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
