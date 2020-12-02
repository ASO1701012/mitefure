<template>
  <div>
    <div class="textback">
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
  .textback {
    max-width:500px;
    position: relative;
    background: #99dddd;
  }
</style>
