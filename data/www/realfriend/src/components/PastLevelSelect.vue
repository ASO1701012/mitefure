<template>
  <div class="button-back">
    <div class="botanhuu-sikaku">
      <!-- class名は変えてください-->
      {{levelMsg}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "PastLevelSelect",
    data() {
      return {
        level: null,
        levelMsg: null,
      }
    },
    methods: {
      createLevelMsg() {
        switch (this.level) {
          case 0:
            this.levelMsg = '易'
            break
          case 1:
            this.levelMsg = '普'
            break
          case 2:
            this.levelMsg = '難'
            break
        }
      }
    },
    created() {
      this.level = this.$store.getters['MiniGame/levelGet']
      this.createLevelMsg()
    }
  }
</script>

<style scoped>
  .button-back{
    max-width:500px;
    position: relative;
    background: #99dddd;
  }
  .botanhuu-sikaku{
    max-width:200px;
    position: relative;
    background: red;
  }
</style>
