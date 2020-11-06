<template>
  <div class="game-style">
    <GameCamera class="camera-style"></GameCamera>
    <GameStatus class="status-style"></GameStatus>
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
        if (to.name === "Load"){
          next()
        }else{
          let answer = window.confirm("このページから移動しますか？ 入力したデータは保存されません。")
          if (answer) {
            next()
          } else {
            next(false)
          }
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
  background-color: #000000;
}
</style>
