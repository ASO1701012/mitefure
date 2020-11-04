<template>
  <div>
    <GameCamera><GameCamera>
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

</style>
