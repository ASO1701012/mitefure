<template>
  <button v-on:click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "NormalButton.vue"
  }
</script>

<style scoped>

</style>
