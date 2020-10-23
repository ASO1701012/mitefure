<template>
  <div>
    <ReturnButton/>
    <ResultRatioDisplay :point="point"/>
    <ResultHeart :point="point"/>
    <ResultTextArea :point="point"/>
    <ShareButtons/>
  </div>
</template>

<script>
import ReturnButton from "./ReturnButton"
import ShareButtons from "./ShareButtons"
import ResultRatioDisplay from "./ResultRatioDisplay"
import ResultHeart from "./ResultHeart"
import ResultTextArea from "./ResultTextArea"

export default {
  name: "Result",
  components: {ResultTextArea, ResultHeart, ResultRatioDisplay, ShareButtons, ReturnButton},
  data() {
    return {
      point: 0,
      // Text: "",
    }
  },
  methods() {

  },
  created() {
    this.point = this.$store.getters['Favo/getEmotionPoint']
  }
}
</script>

<style scoped>

</style>
