<template xmlns="http://www.w3.org/1999/html">
  <div class="mycomment">
  <div class="button-back">
    <p>
    <button v-on:click="saveEasyLevel">易</button>
    <button v-on:click="saveNormalLevel">普</button>
    <button v-on:click="saveDifficultLevel">難</button>
    </p>
  </div>
  </div>
</template>

<script>
  export default {
    name: "LevelSelect.vue",
    data() {
      return {}
    },
    methods: {
      /*ストアにレベルのデータを保存*/
      saveEasyLevel() {
        this.$store.dispatch('MiniGame/changeLevel', 0)
        this.nextMiniGame()
      },
      saveNormalLevel() {
        this.$store.dispatch('MiniGame/changeLevel', 1)
        this.nextMiniGame()
      },
      saveDifficultLevel() {
        this.$store.dispatch('MiniGame/changeLevel', 2)
        this.nextMiniGame()
      },

      /*ミニゲーム画面への遷移*/
      nextMiniGame() {
        this.$router.push('/minigame')
      },
    },

  }
</script>

<style scoped>
  .button-back {
    float: right;
    max-width: 500px;
  }
  .mycomment {
    margin: 10px 0;
  }
  .mycomment p {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    padding: 8px;
    max-width: 250px;
    border-radius: 12px;
    background: #edf1ee;
    font-size: 15px;
  }

  .mycomment p:after {
    content: "";
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-left: 18px solid #edf1ee;
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }
</style>
