<template>
  <div class="game-style">
    <GameCamera ref="camera" class="camera-style"></GameCamera>
    <GameStatus ref="status" class="status-style"></GameStatus>
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
      mounted() {
        setTimeout(this.$refs.camera.videoStart, 3000)
        this.$refs.status.countDownTimer()
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
.camera-style{
  z-index:1;
}
.status-style{
  width: 80%;
  position: absolute;
  z-index:2;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}
.game-style{
  height: 100vh;
  background-color: #000000;
}
</style>
