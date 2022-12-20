<template>
  <div>
    <title-bar :title="submissions.title" :color="getColor()" />
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
import TitleBar from "@/components/TitleBar.vue";
export default {
  data() {
    return {
      submissions: {},
    };
  },
  components: { TitleBar },
  methods: {
    getColor() {
      return this.submissions.status == "Answered" ? "primary" : "error";
    },
  },
  mounted() {
    this.submissions = this.$store.getters.getSubmissions;
    if (!this.submissions.title) {
      this.$router.push("/scoreboard");
    }
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
