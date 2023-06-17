<template>
  <div>
    <nav-component />
    <div style="display: flex; justify-content: center; width: 100vw; margin-bottom: 20px;">
      <input type="text" v-model="inputValue" style="margin-right: 20px;"/>
      <button @click="addTask">Add</button>
    </div>
    <div v-for="(task, index) in getTasks" :key="index" style="width: 100vw; display: flex; justify-content: center;">
      <task-component :task="task" />
    </div>
  </div>
</template>

<script>
import NavComponent from "../components/Navigation.vue";
import TaskComponent from "../components/Task.vue";

export default {
  name: "TaskList",
  components: {
    NavComponent,
    TaskComponent,
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    addTask() {
      if (this.inputValue) {
        this.$store.commit("addTask", this.inputValue);
      } else {
        alert("Enter task");
      }
      this.inputValue = "";
    },
    todos() {
      this.allTasks = this.getTasks;
    },
  },
};
</script>

<style></style>
