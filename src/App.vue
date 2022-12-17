<template>
  <v-app>
    <NavbarVue />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarVue from "@/components/NavbarVue.vue";
export default {
  name: "App",
  components: { NavbarVue },
};
</script>
