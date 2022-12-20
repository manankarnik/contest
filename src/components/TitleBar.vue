<template>
  <v-toolbar :color="color">
    <v-spacer></v-spacer>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  props: ["color", "title"],
};
</script>
