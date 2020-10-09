<template>
  <div>
    <img v-bind:src="logoImageSrc">
    <h2>REAL FRIEND</h2>
  </div>
</template>

<script>

  export default {
    name: "Title",
    data() {
      return {
        logoImageSrc: require("@/assets/realogo.png"),
      }
    },
  }
</script>

<style scoped>

</style>
