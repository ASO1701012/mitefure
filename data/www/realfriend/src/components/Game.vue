<template>
  <div>
    <GameCamera></GameCamera>
    <GameStatus></GameStatus>
  </div>
</template>

<script>
    import GameCamera from "./GameCamera"
    import GameStatus from "./GameStatus"

    export default {
        name: "Game.vue",
        components: {GameStatus, GameCamera},
      created() {
          window.addEventListener("beforeunload", this.confirmSave)
      },
      destroyed() {
          window.removeEventListener("beforeunload", this.confirmSave)
      },
      beforeRouteLeave (to, from, next) {
          if (this.$store.getters['Flag/videoFlagGet']) {
              if (to.name === "Load") {
                  next()
              } else {
                  next(false)
              }
          } else {
              next()
          }
      },
      methods:{
          confirmSave(event){
            event.returnValue = "本当に遷移してもよろしいですか？"
          }
      },

    }
</script>

<style scoped>

</style>
