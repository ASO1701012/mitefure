<template>
  <div>
    <img src="/static/reallogo.png">
    <h2>REAL FRIEND</h2>
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
            if (this.getTextBoxText != '') {
                this.$store.dispatch('Friend/nameSet', this.getTextBoxText)
                this.$router.push('/game')
            } else {
                alert('名前を入力してください！')
            }
      }
    },
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
