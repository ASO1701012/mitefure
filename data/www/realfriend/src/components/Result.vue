<template>
  <div>
    <ReturnButton class="return-position"/>
    <ResultRatioDisplay class="ratio-position" :point="point"/>
    <ResultHeart class="heart-position" :point="point"/>
    <ResultTextArea class="text-position" :point="point"/>
    <ShareButtons class="button-position"/>
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
@media screen and (max-width: 480px) {
  .button-position{
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
}
/*スマホサイズでない場合に反映される*/
@media screen and (min-width: 481px) {
  .button-position{
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
}
.return-position{
  float:left;
  position: absolute;
}
.ratio-position{
  font-size: x-large;
}
.heart-position{

}
.text-position{
  margin: auto;padding-top: 5%;line-height: 2em;
}
.button-position{
  float: right;
}
</style>
