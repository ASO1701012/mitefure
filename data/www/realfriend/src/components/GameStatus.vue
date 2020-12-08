<template>
  <div style="width:90%; height:20%;  background:linear-gradient(to bottom, rgba(255, 255, 255, 0.10), #ff7f00);border-radius:10px;">
    <div class="text-style">
      {{statusMessage}}
    </div>
    <div class="text-style" style="font-size: 4.5rem">
      {{countStart}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "GameStatus",
        data() {
            return {
              statusMessage:null,
              countDown : 3,
              countStart:"3",
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
            if(this.countDown > -2) {
              setTimeout(() => {
                if (this.countDown==0){
                  this.countDown -= 1
                  console.log("if文には入ってる")
                  this.countStart="スタート"
                  console.log(this.countStart)
                  this.countDownTimer()
                }
                else {
                this.countDown -= 1
                this.countStart=String(this.countDown)
                  console.log(this.countDown)
                this.countDownTimer()
              }}, 1000)
            }
            if(this.countDown===-2){
              this.countStart=null
              this.statusMessage="顔を映してください"
            }
          },
            changeStatusMessage() {
                let x = this.$store.getters['Favo/getMaxEmotion'] //xに最大値のキーを代入
                let friendName = this.$store.getters['Friend/nameGet']//フレンドの名前を取得
                if(x !=null || friendName !=null){
                  this.countStart=null
                }
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

@media screen and (min-width: 481px) {
  .text-style{
    font-size: 2rem;
    color: white;
    word-break: break-all;
  }

}
@media screen and (max-width: 481px) {
  .text-style{
    font-size: x-large;
    color: white;
    word-break: break-all;

  }

}
</style>
