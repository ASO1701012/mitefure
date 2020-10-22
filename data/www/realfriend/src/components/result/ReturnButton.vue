<template>
  <div>
    <router-link to="/">
      <img src="/static/return.svg" alt="読み取り失敗" class="return_img">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ReturnButton"
}
</script>

<style scoped>
.return_img {
  transform: rotate(-90deg);
  width: 50px;
}
</style>
