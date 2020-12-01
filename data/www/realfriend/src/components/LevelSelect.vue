<template>
  <div class="buttonback">
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
      /*ストアにデータの保村もしくはProps*/
      saveEasyLevel() {
        this.$store.dispatch('MiniGame/changeLevel', 0)
        setTimeout(() => {
          this.nextMiniGame()
        }, 100)
      },
      saveNormalLevel() {
        this.$store.dispatch('MiniGame/changeLevel', 1)
        setTimeout(() => {
          this.nextMiniGame()
        }, 100)
      },
      saveDifficultLevel() {
        this.$store.dispatch('MiniGame/changeLevel', 2)
        setTimeout(() => {
          this.nextMiniGame()
        }, 100)
      },

      /*ミニゲーム破面への遷移*/
      nextMiniGame() {
        this.$router.push('/minigame')
      },
    },
    beforeRouteLeave(to, from, next) {
      if (to.name === "MiniGame") {
        next()
      } else {
        next(false)
      }
    },
  }
</script>

<style scoped>
  .buttonback {
    float: right;
    max-width: 500px;
    background: #99dddd;
  }
</style>
