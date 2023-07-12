<script setup lang="ts">
const props = defineProps({
  handleResult: {
    required: true,
    type: Function,
  },
});
</script>
<template>
  <v-col class="text-center my-5" cols="6">
    <v-btn
      @click="props.handleResult"
      rounded
      variant="flat"
      size="x-large"
      color="orange-accent-4"
      class="font-weight-bold w-100"
    >
      =
    </v-btn>
  </v-col>
</template>
