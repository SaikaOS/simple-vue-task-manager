<template>
  <nav style="display: flex; justify-content: space-around; width: 200px">
    <router-link style="color: black; text-decoration: none" to="/"
      >Home</router-link
    >
    <router-link style="color: black; text-decoration: none" to="/tasks"
      >Tasks</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style></style>
