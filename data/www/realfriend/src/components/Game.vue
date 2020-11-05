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
        components: {GameStatus, GameCamera}
    }
</script>

<style scoped>
.camera-style{
  z-index:1;
}
.status-style{
  position: absolute;
  z-index:2;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
