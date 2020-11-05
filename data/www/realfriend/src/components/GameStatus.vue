<template>
  <div class="text-style">
    {{statusMessage}}
  </div>
</template>

<script>
    export default {
        name: "GameStatus",
        data() {
            return {
                statusMessage:null,
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
  background-color: #ce86c06e;
  padding-bottom: 5%;
  padding-right: 20%;
  font-size: x-large;
  border: solid;
  border-color: pink;
  border-radius: 8px;
  color: white;
}

</style>
