<template>
  <div class="title-style">
    <img src="/static/mitefure.png" class="img-style">
    <h1>好感度診断　ミテフレ</h1>
    <div class="container mx-auto container-style">
      <div class="justify-content-center input-style">

        <NormalTextBox
          v-model="getTextBoxText"
          placeholder="相手の名前を入れてね"
          name="textBoxInput"
          type="text"
          class="text-style border border-dark"></NormalTextBox>

        <NormalButton class="buttonInput btn btn-outline-secondary" v-on:click="start">診断</NormalButton>

      </div>
    </div>


    <NormalTextArea class="text-wrap text-area-style">
      説明文：診断アプリ【ミテフレ】は相手の表情から感情を読み取る事が出来ます。
      名前入力後、診断を押すと3秒後にカメラが起動し、感情を読み取り始めます。
      15秒ほど読み取った後、感情を元に好感度をスコア化して表示します。
      友人や気になる人との会話で診断し、どんな感情なのか調べてみましょう！
    </NormalTextArea>
    <NormalButton  @click="nextDescription" class="minigame-button btn btn-outline-secondary">ミニゲーム</NormalButton>
    <div class="follow-button">
      <a class="twitter-follow-button" href="https://twitter.com/Asomitefure" data-size="large" target="_blank"
         rel="noopener">
        <img src="/static/公式Twitter.png" class="share-twitter-img" alt="">
        ミテフレ公式Twitter</a>
    </div>
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

                if (this.getTextBoxText.length <= 10) {
                    if (this.getTextBoxText != '') {
                        EXECUTE()
                    } else {
                        alert('名前を入力してください！')
                    }
                } else {
                    alert('名前を10文字以内にしてください')
                }


            },
          nextDescription(){
            this.$router.push('/description')
          },
        },
        beforeRouteLeave(to, from, next) {
            if (to.name === "Game" || to.name === "Description") {
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
        },

    }
</script>

<style scoped>

  .container-style {
    width: 100%;
    padding-top: 3%
  }

  .text-area-style {
    margin: auto;
    padding-top: 3%;
    line-height: 2em;
  }

  /*スマホサイズ時に反映される*/
  @media screen and (max-width: 480px) {
    .text-wrap {
      width: 100%;
    }
    .img-style{
      width: 50%;
    }
    .text-style {
      width: 50%;
      display: inline-block;
    }
  }

  /*スマホサイズでない場合に反映される*/
  @media screen and (min-width: 481px) {
    .text-wrap {
      width: 50%;
    }
    .img-style{
      width: 20%;
    }
  }


  .follow-button {
    background-color: white;
    width: 30vh;
    height: 4vh;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0%;
  }

  .follow-button a {
    display: block;
    width: 100%;
    height: 100%;
    color: #007bff;
    border: solid;
    border-color: #007bff;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .share-twitter-img{
    width: 1rem;
  }
  .title-style{
    height: 100vh;
  }
</style>
