<template>
  <div>
<!--buttonがbootstrapの影響で独自のCSSが反映されているので修正する。-->
    <button v-on:click="resetFavoState">
      <img src="/static/return.svg" alt="読み取り失敗" class="return-img">
    </button>

  </div>
</template>

<script>
export default {
    name: "ReturnButton",
    methods: {
        resetFavoState() {
            this.$store.dispatch("Favo/resetFavoStore")
            this.$router.push('/')
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
