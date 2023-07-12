<script setup lang="ts">
const props = defineProps({
  handleAction: {
    required: true,
    type: Function,
  },
});
</script>

<template>
  <v-col class="text-center my-5" cols="3">
    <v-btn
      @click="props.handleAction"
      rounded
      variant="text"
      size="x-large"
      color="orange-accent-4"
      class="font-weight-bold"
    >
      <slot></slot>
    </v-btn>
  </v-col>
</template>
