<template>
  <div>
    <ReturnButton/>
    <ResultRatioDisplay :point="Point"/>
    <ResultHeart :point = "Point"/>
    <ResultTextArea :text="Text"/>
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
  components: {ResultTextArea, ResultHeart, ResultRatioDisplay, ShareButtons,  ReturnButton},
  data() {
    return{
      Point: 0,
      Text: "",
    }
  },
  methods () {
    //ここにテキスト生成の処理をかく？ここかStore
  },
  created() {
    this.Point = this.$store.getters['Favo/getEmotionPoint']
    this.Text = this.$store.getters['Favo/getEmotionTxt']
  }
}
</script>

<style scoped>

</style>
