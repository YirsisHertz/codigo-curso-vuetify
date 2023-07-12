<script setup lang="ts">
import NavItem from "./NavItem.vue";
</script>

<template>
  <v-navigation-drawer permanent>
    <v-list>
      <NavItem to="/" title="ToDo" />
      <NavItem to="/report" title="Report" />
    </v-list>
  </v-navigation-drawer>
</template>
