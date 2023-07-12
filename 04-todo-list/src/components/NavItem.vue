<script setup lang="ts">
const props = defineProps({
  to: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <v-list-item
    :to="props.to"
    :title="props.title"
    :value="props.title.toLowerCase()"
    active-class="bg-grey-lighten-5"
    link
  />
</template>
