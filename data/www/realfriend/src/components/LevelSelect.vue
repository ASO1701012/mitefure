<template>
  <div class="button-back">
    <button v-on:click="saveEasyLevel">易</button>
    <button v-on:click="saveNormalLevel">普</button>
    <button v-on:click="saveDifficultLevel">難</button>
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
    background: #99dddd;
  }
</style>
