<template>
  <div style="display: flex; justify-content: space-between; width: 200px;">
    <span contenteditable="true">{{ task.name }}</span>
    <button @click="removeTask(task)">remove</button>
  </div>
</template>

<script>
export default {
  name: "TaskComponent",
  props: ["task"],
  methods: {
    removeTask(task) {
      this.$store.commit("removeTask", task);
    },
  },
};
</script>

<style></style>
