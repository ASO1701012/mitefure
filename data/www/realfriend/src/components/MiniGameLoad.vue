<template>
  <div>
    <div class="img-size">
      <img src="/static/mitefure.png" class="img-style">
    </div>
    <div class="loading loading-style">
      <span>診</span>
      <span>断</span>
      <span>中</span>
      <span>・</span>
      <span>・</span>
      <span>・</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MiniGameLoad",
    data() {
      return {
        answer:0,
        level:0,
        point:0,
        boundary:0
      }
    },
    created() {
      this.answer = this.$store.getters['MiniGame/answerGet']
      this.level = this.$store.getters['MiniGame/levelGet']
      this.boundary = this.levelBoundary(this.level)
      this.point = this.emotionPointGet(this.answer)
      this.$store.dispatch('MiniGame/changeJudgmentResult',this.emotionalJudgment(this.point,this.boundary))
      window.addEventListener("beforeunload", this.confirmSave)
    },
    destroyed() {
      window.removeEventListener("beforeunload", this.confirmSave)
    },
    beforeRouteLeave(to, from, next) {
      if (to.name === "MiniGameResult") {
        next()
      } else {
        next(false)
      }
    },
    methods:{
      levelBoundary:function (level){
        // console.log(level)
        if (level === 0){
          return 0.5
        }else if (level === 1){
          return 0.7
        }else if (level === 2){
          return 0.8
        }
      },
      emotionPointGet:function (answer){
        // console.log(answer)
        if (answer === 0){
          return this.$store.getters['Favo/getAnger']
        }else if (answer === 1){
          return this.$store.getters['Favo/getContempt']
        }else if(answer === 2){
          return this.$store.getters['Favo/getDisgust']
        }else if (answer === 3){
          return this.$store.getters['Favo/getFear']
        }else if (answer === 4){
          return this.$store.getters['Favo/getHappiness']
        }else if (answer === 5){
          return this.$store.getters['Favo/getNeutral']
        }else if (answer === 6){
          return this.$store.getters['Favo/getSadness']
        }else if (answer === 7){
          return this.$store.getters['Favo/getSurprise']
        }
      },
      emotionalJudgment: function (point, boundary){
        let  judgmentCondition = 4 * boundary
        // console.log(point,boundary,judgmentCondition)
        return judgmentCondition <= point
      },
      confirmSave(event) {
        event.returnValue = "本当に遷移してもよろしいですか？"
      },

    }
  }
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .img-style {
    width: 50%;
  }
}

/*スマホサイズでない場合に反映される*/
@media screen and (min-width: 481px) {
  .img-style {
    width: 20%;
  }
}

.loading-style {
  /*縦並びでの表示*/
  writing-mode: vertical-rl;
  /*中央ぞろえ*/
  margin: 0 auto;
  /*文字の大きさ*/
  font-size: xx-large;
  display: inline-block;
}


/*文字表示でのアニメーション設定*/
.loading span {
  display: inline-block;
  margin: 0 -.075em;
  animation: loading .7s infinite alternate;
}

.loading span:nth-child(2) {
  animation-delay: .1s;
}

.loading span:nth-child(3) {
  animation-delay: .2s;
}

.loading span:nth-child(4) {
  animation-delay: .3s;
}

.loading span:nth-child(5) {
  animation-delay: .4s;
}

.loading span:nth-child(6) {
  animation-delay: .5s;
}

@keyframes loading {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
