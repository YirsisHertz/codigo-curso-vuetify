<script setup lang="ts">
import { reactive } from "vue";

import ActionButton from "./components/ActionButton.vue";
import ValueButton from "./components/ValueButton.vue";
import ResultButton from "./components/ResultButton.vue";

const data = reactive({
  result: "",
  operation: "0",
});

const handleAdd = (value: number | string) => {
  if (data.operation === "0" && value !== ".") {
    data.operation = `${value}`;
    return;
  }

  data.operation += value;
};

const handleAddOperator = (operator: "/" | "*" | "+" | "-") => {
  if (
    data.operation.endsWith(operator) ||
    data.operation.charAt(data.operation.length - 1).includes(operator)
  ) {
    handleRemove();
  }

  data.operation += operator;
};

const handleClear = () => {
  data.operation = "0";
};

const handleRemove = () => {
  const newValue = data.operation.slice(0, -1);

  if (!newValue) {
    data.operation = "0";
    return;
  }

  data.operation = newValue;
};

const handleResult = () => {
  data.result = data.operation;

  if (data.operation.includes("%")) {
    const values = data.operation.split("%");

    const firstValue = eval(values[0]);
    const secondValue = eval(values[1]);

    data.operation = `${(firstValue * (secondValue / 100)).toPrecision(5)}`;

    return;
  }

  data.operation = `${eval(data.operation)}`;
};

const handlePercent = () => {
  data.operation += "%";
};
</script>

<template>
  <div class="w-50 mx-auto my-10">
    <v-card>
      <v-card-text>
        <div class="d-flex justify-space-between align-baseline">
          <div>
            <img
              class="bg-indigo-lighten-1 rounded pa-2"
              width="100"
              src="./assets/logo.svg"
            />
          </div>
          <div>
            <div class="text-h6 text-end text-grey-lighten-1">
              {{ data.result }}
            </div>
            <div class="text-h3">{{ data.operation }}</div>
          </div>
        </div>
        <v-divider></v-divider>
        <v-container>
          <v-row no-gutters>
            <ActionButton :handleAction="() => handleClear()">AC</ActionButton>
            <ActionButton :handleAction="() => handleRemove()">
              <v-icon icon="mdi-backspace-outline"></v-icon>
            </ActionButton>
            <ActionButton :handleAction="() => handlePercent()">
              &percnt;
            </ActionButton>
            <ActionButton :handleAction="() => handleAddOperator('/')">
              &divide;
            </ActionButton>
            <ValueButton :handleAdd="() => handleAdd(7)" :value="7" />
            <ValueButton :handleAdd="() => handleAdd(8)" :value="8" />
            <ValueButton :handleAdd="() => handleAdd(9)" :value="9" />
            <ActionButton :handleAction="() => handleAddOperator('*')">
              &times;
            </ActionButton>
            <ValueButton :handleAdd="() => handleAdd(4)" :value="4" />
            <ValueButton :handleAdd="() => handleAdd(5)" :value="5" />
            <ValueButton :handleAdd="() => handleAdd(6)" :value="6" />
            <ActionButton :handleAction="() => handleAddOperator('-')">
              -
            </ActionButton>
            <ValueButton :handleAdd="() => handleAdd(1)" :value="1" />
            <ValueButton :handleAdd="() => handleAdd(2)" :value="2" />
            <ValueButton :handleAdd="() => handleAdd(3)" :value="3" />
            <ActionButton :handleAction="() => handleAddOperator('+')">
              +
            </ActionButton>
            <ValueButton :handleAdd="() => handleAdd(0)" :value="0" />
            <ValueButton :handleAdd="() => handleAdd('.')" :value="'.'" />
            <ResultButton :handleResult="() => handleResult()" :value="'.'" />
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>
