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
        components: {GameStatus, GameCamera}
    }
</script>

<style scoped>

</style>
