import { onMounted, reactive, ref } from "vue";
import { defineStore } from "pinia";

import { v4 as uuid } from "uuid";

import type { ITodo } from "../interfaces/ITodo";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = reactive({
    value: [
      {
        id: uuid() as string,
        text: "Learn Vue",
        status: false,
      },
      {
        id: uuid() as string,
        text: "Learn Angular",
        status: false,
      },
      {
        id: uuid() as string,
        text: "Learn Laravel",
        status: false,
      },
    ],
  });

  const addTodo = (todo: ITodo) => {
    todos.value.push({ id: uuid(), ...todo });
    // saveTodos();
  };

  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((todo: any) => todo.id !== id);
  };

  const completedTodo = (todo: ITodo) => {
    todo.status = true;
    saveTodos();
  };

  const readAllTodos = () => {
    const values = JSON.parse(localStorage.getItem("todos") || `[]`);

    return values;
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  };

  onMounted(() => {
    const values = readAllTodos();

    if (values.length !== 0) {
      todos.value = values;
    }

    saveTodos();
  });

  return { todos, addTodo, removeTodo, completedTodo, readAllTodos };
});
