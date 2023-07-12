<script lang="ts" setup>
import AvatarSidebar from "./AvatarSidebar.vue";
import NavSidebar from "./NavSidebar.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <avatar-sidebar />

      <NavSidebar />

      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>
