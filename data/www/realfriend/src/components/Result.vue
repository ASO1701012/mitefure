<template>
  <div>
    <ReturnButton v-if="!error" class="return-position"/>
    <ResultRatioDisplay v-if="!error" class="ratio-position" :point="point"/>
    <ResultHeart v-if="!error" class="heart-position" :point="point"/>
    <ResultTextArea v-if="!error" class="text-position" :result-text="resultText"/>
    <ShareButtons v-if="!error" class="button-position"/>
    <div v-if="error" class="error">
      うまく顔を認識出来ませんでした。<br>
      顔を近づける、または、少し離すことで改善されるかも。
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
    margin-top: 20%;
  }

  /*.button-position{*/
  /*  float: right;*/
  /*}*/
</style>
