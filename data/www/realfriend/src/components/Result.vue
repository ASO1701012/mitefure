<template>
  <div>
    <ReturnButton class="return-position"/>
    <div v-if="error" class="error">
      うまく顔を認識出来ませんでした。<br>
      顔を近づける、または、少し離すことで改善されるかも。<br>
      もう一度、タイトル画面からやり直してください。
    </div>
    <div v-else>
      <ResultRatioDisplay class="ratio-position" :point="point"/>
      <ResultHeart class="heart-position" :point="point"/>
      <ResultTextArea class="text-position" :result-text="resultText"/>
      <ShareButtons class="button-position"/>
    </div>
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
                resultText: "",
                error: false
            }
        },
        created() {
            this.point = this.$store.getters['Favo/getEmotionPoint']
            this.resultText = this.$store.getters['Favo/getResultText']
            this.checkError(this.point)
            window.addEventListener("beforeunload", this.confirmSave)
        },
        destroyed() {
            window.removeEventListener("beforeunload", this.confirmSave)
        },
        beforeRouteLeave(to, from, next) {
            if (to.name === "Title") {
                next()
            } else {
                next(false)
            }
        },
        methods: {
            confirmSave(event) {
                event.returnValue = "本当に遷移してもよろしいですか？"
            },
            checkError: function (point) {
                if (point === -1) {
                    this.error = true
                }
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

  .ratio-position {
    font-size: x-large;
  }

  .heart-position {

  }

  .text-position {
    margin: auto;
    padding-top: 5%;
    line-height: 2em;
  }

  .error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  /*.button-position{*/
  /*  float: right;*/
  /*}*/
</style>
