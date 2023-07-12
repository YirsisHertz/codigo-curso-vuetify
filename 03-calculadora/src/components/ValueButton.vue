<script setup lang="ts">
const props = defineProps({
  value: {
    required: true,
    type: [Number, String],
  },
  handleAdd: {
    required: true,
    type: Function,
  },
});
</script>

<template>
  <v-col class="text-center my-5" cols="3">
    <v-btn
      @click="props.handleAdd"
      rounded
      variant="text"
      size="x-large"
      class="font-weight-bold"
    >
      {{ props.value }}
    </v-btn>
  </v-col>
</template>
