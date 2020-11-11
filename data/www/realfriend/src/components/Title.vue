<template>
  <div>
    <img src="/static/reallogo.png">
    <h1>REALFRIEND</h1>
    <div class="container mx-auto container-style">
      <div class="d-inline input-style">

      <NormalTextBox
        v-model="getTextBoxText"
        placeholder="相手の名前を入れてね"
        name="textBoxInput"
        type="text"
        class="text-style border border-dark"      ></NormalTextBox>

        <NormalButton class="buttonInput btn btn-outline-secondary" v-on:click="start">診断</NormalButton>

      </div>
    </div>


      <NormalTextArea class="text-wrap text-area-style">
        説明文：このアプリは相手の表情もとにその人の感情を調べ、
        あなたと話しているときの反応を調べ好感度を表示するアプリです。
        友達や気になるあの人を気軽に診断してみよう!
      </NormalTextArea>
  </div>
</template>

<script>
    import NormalTextArea from "./NormalTextArea"
    import NormalTextBox from "./NormalTextBox"
    import NormalButton from "./NormalButton"

    export default {
    name: "Title",
    components: {NormalTextBox: NormalTextBox, NormalTextArea: NormalTextArea, NormalButton: NormalButton},
    data() {
      return {
        getTextBoxText: '',
      }
    },
    methods: {
        start() {

            const EXECUTE = async () => {
                const setFriendName = () => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            this.$store.dispatch('Friend/nameSet', this.getTextBoxText)
                            console.log("セットフレンドネーム")
                            resolve()
                        }, 100)
                    })
                }

                const startGame = () => {
                    return new Promise(((resolve, reject) => {
                        setTimeout(() => {
                            console.log("移動します")
                            this.$router.push('/game')
                            resolve()
                        }, 100)
                    }))
                }

                await setFriendName()
                await startGame()
            }

            if (this.getTextBoxText != '') {
                EXECUTE()
            } else {
                alert('名前を入力してください！')
            }
      }
    },
      beforeRouteLeave(to, from, next) {
        if (to.name === "Game") {
          next()
        } else {
          next(false)
          // let answer = window.confirm("このページから移動しますか？ 入力したデータは保存されません。")
          // if (answer) {
          //   next()
          // } else {
          //   next(false)
          // }
        }
      }
  }
</script>

<style scoped>

.container-style{
  width: 100%;padding-top: 5%
}
.text-area-style{
  margin: auto;padding-top: 5%;line-height: 2em;
}

/*スマホサイズ時に反映される*/
@media screen and (max-width: 480px) {
  .text-wrap{
    width: 100%;
  }
  .text-style{
    width: 50%;
    display: inline-block;
  }
}
/*スマホサイズでない場合に反映される*/
@media screen and (min-width: 481px) {
  .text-wrap{
    width: 50%;
  }
}
</style>
