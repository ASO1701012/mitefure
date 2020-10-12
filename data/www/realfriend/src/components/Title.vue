<template>
  <div>
    <img src="/static/reallogo.png">
    <h2>REAL FRIEND</h2>
    <div>

      <NormalTextBox
        v-model="getTextBoxText"
        placeholder="相手の名前を入れてね"
        name="textBoxInput"
        type="text"
      ></NormalTextBox>

      <NormalButton class="buttonInput" v-on:click="test">診断</NormalButton>
      <NormalTextArea>
        説明文：（例）このアプリは相手の表情や声などをもとにその人の感情を調べ、
        あなたと話しているときの反応を調べ好感度を表示するアプリです。
        友達や気になるあの人と気軽に診断してみよう!
      </NormalTextArea>
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
      test() {
        if (this.getTextBoxText != '') {
          this.$store.dispatch('Friend/nameSet',this.getTextBoxText)
          alert(this.$store.getters['Friend/nameGet'])
        }
      }
    },

  }
</script>

<style scoped>

</style>
