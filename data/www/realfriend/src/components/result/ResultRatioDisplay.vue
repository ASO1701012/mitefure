<template>
  <p>{{result}}%</p>
</template>

<script>
export default {
  name: "ResultRatioDisplay",
  data() {
    return {
    }
  },
  computed: {
    result: function () {
      return this.$store.getters["Favo/getFavoJudge1"]
        +this.$store.getters["Favo/getFavoJudge2"]
        +this.$store.getters["Favo/getFavoJudge3"]
    }
  }
}
</script>

<style scoped>

</style>
