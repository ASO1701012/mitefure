<template>
  <div>
    <ReturnButton class="return-position"/>
    <ResultRatioDisplay class="rario-position" :point="point"/>
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

  created() {
    this.point = this.$store.getters['Favo/getEmotionPoint']
    window.addEventListener("beforeunload", this.confirmSave)
  },
  destroyed() {
    window.removeEventListener("beforeunload", this.confirmSave)
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "Title"){
      next()
    }else{
      let answer = window.confirm("このページから移動しますか？ 入力したデータは保存されません。")
      if (answer) {
        next()
      } else {
        next(false)
      }
    }

  },
  methods: {
    confirmSave(event) {
      event.returnValue = "本当に遷移してもよろしいですか？"
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .button-position {
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
}

/*スマホサイズでない場合に反映される*/
@media screen and (min-width: 481px) {
  .button-position {
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
}

.return-position {
  float: left;
  position: absolute;
}

.rario-position {
  font-size: x-large;
}

.heart-position {

}

.text-position {
  margin: auto;
  padding-top: 5%;
  line-height: 2em;
}

.button-position {
  float: right;
}
</style>
