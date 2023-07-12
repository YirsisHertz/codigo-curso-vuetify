<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo.store";

import CompleteButton from "../components/CompleteButton.vue";

const { readAllTodos, todos } = useTodoStore();

const deleteDialog = ref(false);
const createFormDialog = ref(false);
</script>

<template>
  <div class="text-center">
    <h1>ToDo List</h1>
    <v-divider />

    <div class="d-flex my-10 justify-space-between">
      <h2>ToDo's</h2>
      <v-btn color="primary">
        Create ToDo
        <v-icon class="ml-2" icon="mdi-plus-circle" />
      </v-btn>
    </div>

    <v-table>
      <thead>
        <tr>
          <th class="text-start">Description</th>
          <th class="text-start">Status</th>
          <th class="text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos.value" :key="todo.id" class="text-start">
          <td>{{ todo.text }}</td>

          <td :class="todo.status ? 'bg-success' : 'bg-red'">
            {{ todo.status ? "Completed" : "Incompleted" }}
          </td>

          <td class="d-flex justify-space-evenly">
            <CompleteButton :todo="todo" />
            <v-btn color="deep-orange-darken-1" icon="mdi-delete"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
