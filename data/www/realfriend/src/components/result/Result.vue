<template>
  <div>
    <ReturnButton/>
    <ResultRatioDisplay :result="number"/>
    <ResultHeart/>
    <ResultTextArea/>
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
  data () {
    return {
      number:10
    }
  }
}
</script>

<style scoped>

</style>
