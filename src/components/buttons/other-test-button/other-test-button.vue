<template>
  <q-btn color="primary" :label="label"></q-btn>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: String
  }
});
</script> 