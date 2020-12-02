<template>
  <div>
    <div class="text-back">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageCard"
  }
</script>

<style scoped>
  .text-back {
    max-width:500px;
    position: relative;
    background: #99dddd;
  }
</style>
