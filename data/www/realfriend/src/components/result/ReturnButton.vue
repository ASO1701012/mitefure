<template>
  <div>
    <router-link to="/">
      <img src="/static/return.svg" alt="読み取り失敗" class="returnimg">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ReturnButton"
}
</script>

<style scoped>
.returnimg {
  transform: rotate(-90deg);
  width: 50px;
}
</style>
