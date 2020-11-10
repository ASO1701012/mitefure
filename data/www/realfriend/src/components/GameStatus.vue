<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="svg-style">
      <rect width="100%" height="100%" rx="10" ry="10" stroke-width="3" class="frame-style"/>
      <text x="10" y="21" pointer-events="none" class="text-style text--white">
        {{statusMessage}}
      </text>
    </svg>
  </div>
</template>

<script>
    export default {
        name: "GameStatus",
        data() {
            return {
                statusMessage:"3",
              countDown : 3,
            }
        },
        mounted() {
            this.$store.subscribe((mutation, state) => {
                if (mutation.type === 'Favo/setMaxEmotion') {
                    this.changeStatusMessage()
                }
            })
        },
        methods:{
          //カウントダウン用
          countDownTimer() {
            if(this.countDown > 0) {
              setTimeout(() => {
                this.countDown -= 1
                this.statusMessage=String(this.countDown)
                this.countDownTimer()
              }, 1000)
            }
            if(this.countDown===0){
              this.statusMessage="撮影開始"
            }
          },
            changeStatusMessage() {
                let x = this.$store.getters['Favo/getMaxEmotion'] //xに最大値のキーを代入
                let friendName = this.$store.getters['Friend/nameGet']//フレンドの名前を取得
                // this.statusMessage = this.$store.getters['Favo/getMaxEmotion']
                if (x == 0) {
                    //anger
                    this.statusMessage = friendName + "は少し怒っているかも"
                } else if (x == 1) {
                    //contempt
                    this.statusMessage = friendName + "は軽蔑な感情を抱いていそう"
                } else if (x == 2) {
                    //disgust
                    this.statusMessage = friendName + "は嫌悪している"
                } else if (x == 3) {
                    //fear
                    this.statusMessage = friendName + "は恐れているようだ"
                } else if (x == 4) {
                    //happiness
                    this.statusMessage = friendName + "は幸せそうに会話している"
                } else if (x == 5) {
                    //neutral
                    this.statusMessage = friendName + "は自然体である"
                } else if (x == 6) {
                    //sadness
                    this.statusMessage = friendName + "は悲しんでいるかも"
                } else if (x == 7) {
                    //surprise
                    this.statusMessage = friendName + "は驚いた感情を持っている"
                } else {
                    //予期しない値が入った場合
                    this.statusMessage = "うまく感情を読み取れなかったよ"
                }
            }
        }
    }
</script>

<style scoped>

.text-style{
  font-size: x-large;
  fill: white;
  word-break: break-all;
}
.frame-style{
  fill: pink;
  stroke: #ff87e0;
  stroke-width: 3;
}
.svg-style{
  width: 100%;
}
</style>
