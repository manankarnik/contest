import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    submissions: {
      time: "",
      status: "",
      by: "",
      title: "",
      language: "",
    },
    questions: [
      {
        question: "a",
        title: "Merge sort the given array: [43, 24, 16, 58, 20, 12, 15, 21]",
        language: "Python",
      },
      {
        question: "b",
        title: "Create a CRUD application",
        language: "React",
      },
      {
        question: "c",
        title: "Implement binary search tree data structure",
        language: "C",
      },
      {
        question: "d",
        title: "Create tic-tac-toe application",
        language: "Flutter",
      },
      {
        question: "e",
        title: "Fetch data from weather API",
        language: "Javascript",
      },
    ],
    scoreboard: {
      headers: [
        { text: "Rank", value: "rank", align: "center" },
        { text: "Name", value: "name", align: "center" },
        { text: "Score", value: "score", align: "center" },
        { text: "Penalty", value: "penalty", align: "center" },
        { text: "Score", value: "aScore", align: "center" },
        { text: "Time", value: "aTime", align: "center" },
        { text: "Answered", value: "aAnswered", align: "center" },
        { text: "Details", value: "aDetails", align: "center" },
        { text: "Score", value: "bScore", align: "center" },
        { text: "Time", value: "bTime", align: "center" },
        { text: "Answered", value: "bAnswered", align: "center" },
        { text: "Details", value: "bDetails", align: "center" },
        { text: "Score", value: "cScore", align: "center" },
        { text: "Time", value: "cTime", align: "center" },
        { text: "Answered", value: "cAnswered", align: "center" },
        { text: "Details", value: "cDetails", align: "center" },
        { text: "Score", value: "dScore", align: "center" },
        { text: "Time", value: "dTime", align: "center" },
        { text: "Answered", value: "dAnswered", align: "center" },
        { text: "Details", value: "dDetails", align: "center" },
        { text: "Score", value: "eScore", align: "center" },
        { text: "Time", value: "eTime", align: "center" },
        { text: "Answered", value: "eAnswered", align: "center" },
        { text: "Details", value: "eDetails", align: "center" },
      ],
      items: [
        {
          rank: 1,
          name: "John",
          score: 50,
          penalty: 0,
          aScore: 10,
          aTime: "11:47 am",
          aAnswered: true,
          bScore: 10,
          bTime: "12:02 pm",
          bAnswered: true,
          cScore: 10,
          cTime: "12:17 pm",
          cAnswered: true,
          dScore: 10,
          dTime: "12:32 pm",
          dAnswered: true,
          eScore: 10,
          eTime: "12:46 pm",
          eAnswered: true,
        },
        {
          rank: 2,
          name: "David",
          score: 40,
          penalty: 0,
          aScore: 5,
          aTime: "3:33 pm",
          aAnswered: true,
          bScore: 7,
          bTime: "3:47 pm",
          bAnswered: true,
          cScore: 8,
          cTime: "3:55 pm",
          cAnswered: true,
          dScore: 10,
          dTime: "4:12 pm",
          dAnswered: true,
          eScore: 10,
          eTime: "4:22 pm",
          eAnswered: true,
        },
        {
          rank: 3,
          name: "Steve",
          score: 23,
          penalty: 5,
          aScore: 8,
          aTime: "5:20 pm",
          aAnswered: true,
          bScore: 10,
          bTime: "5:32 pm",
          bAnswered: true,
          cScore: 0,
          cTime: "-",
          cAnswered: false,
          dScore: 0,
          dTime: "-",
          dAnswered: false,
          eScore: 10,
          eTime: "6:02 pm",
          eAnswered: true,
        },
        {
          rank: 4,
          name: "Alex",
          score: 20,
          penalty: 10,
          aScore: 0,
          aTime: "-",
          aAnswered: false,
          bScore: 10,
          bTime: "12:33 pm",
          bAnswered: true,
          cScore: 10,
          cTime: "12:46 pm",
          cAnswered: true,
          dScore: 10,
          dTime: "1:12 pm",
          dAnswered: true,
          eScore: 0,
          eTime: "-",
          eAnswered: false,
        },
        {
          rank: 5,
          name: "Carl",
          score: 8,
          penalty: 0,
          aScore: 0,
          aTime: "-",
          aAnswered: false,
          bScore: 0,
          bTime: "-",
          bAnswered: false,
          cScore: 10,
          cTime: "-",
          cAnswered: false,
          dScore: 0,
          dTime: "-",
          dAnswered: false,
          eScore: 8,
          eTime: "2:22 pm",
          eAnswered: true,
        },
      ],
    },
  },
  getters: {
    getScoreboardHeaders: (state) => state.scoreboard.headers,
    getScoreboardItems: (state) => state.scoreboard.items,
    getQuestions: (state) => state.questions,
    getSubmissions: (state) => state.submissions,
  },
  mutations: {
    submissions(state, payload) {
      state.submissions = payload;
    },
  },
  actions: {},
  modules: {},
});
