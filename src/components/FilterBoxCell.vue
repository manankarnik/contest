<template>
  <th :colspan="colspan">
    <v-select
      @change="selectionChanged"
      :items="items"
      clearable
      clear-icon="$clear"
    >
      Filter box
    </v-select>
  </th>
</template>

<script>
export default {
  props: { items: {}, colspan: { default: 1 } },
  methods: {
    selectionChanged(event) {
      this.$emit("selection-changed", event);
    },
  },
};
</script>
