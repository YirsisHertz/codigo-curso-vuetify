<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todo.store";

const { todo } = defineProps(["todo"]);

const { completedTodo } = useTodoStore();

const completedDialog = ref(false);

const handleCompleted = (todo: any) => {
  completedTodo(todo);
  completedDialog.value = false;
};
</script>

<template>
  <v-dialog
    v-if="!todo.status"
    persistent
    v-model="completedDialog"
    width="auto"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        color="teal-lighten-2"
        icon="mdi-check-bold"
      ></v-btn>
    </template>

    <v-card>
      <v-card-title> ¿Quieres completar esta tarea? </v-card-title>
      <v-card-actions>
        <v-btn color="success" @click="handleCompleted(todo)"> Si </v-btn>
        <v-btn color="red" @click="completedDialog = false"> No </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
