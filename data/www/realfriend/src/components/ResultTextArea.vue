<template>
  <h2>{{sum}}%</h2>
</template>

<script>
export default {
name: "ResultTextArea",
  data(){
  return{

  }
  },
computed: {
  sum: function () {
    return this.$store.getters["Favo/getFavoJudge1"]+this.$store.getters["Favo/getFavoJudge2"]+this.$store.getters["Favo/getFavoJudge3"]
  }
}
}
</script>

<style scoped>

</style>
