<template>
  <div>
    <v-toolbar :color="getColor()">
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text">{{
        submissions.title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <th>Contestant name</th>
            <td>{{ submissions.by }}</td>
          </tr>
          <tr>
            <th>Language</th>
            <td>{{ submissions.language }}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{{ submissions.status }}</td>
          </tr>
          <tr>
            <th>Time</th>
            <td>{{ submissions.time }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn @click="$router.back()" :color="getColor()" block large>Back</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submissions: {},
    };
  },
  methods: {
    getColor() {
      return this.submissions.status == "Answered" ? "primary" : "error";
    },
  },
  mounted() {
    this.submissions = this.$store.getters.getSubmissions;
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
