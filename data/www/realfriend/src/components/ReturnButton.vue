<template>
  <div>
    <router-link to="/" @click="resetFavoState()">
      <img src="/static/return.svg" alt="読み取り失敗" class="return-img">
    </router-link>
  </div>
</template>

<script>
export default {
    name: "ReturnButton",
    methods: {
        resetFavoState() {
            this.$store.dispatch("Favo/resetFavoState")
        }

    }
}

</script>

<style scoped>
.return-img {
  transform: rotate(-90deg);
  width: 30px;
}
</style>
