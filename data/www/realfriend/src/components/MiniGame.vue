<template>
  <div class="game-style" ref="game">
    <MiniGameCamera ref="camera" class="camera-style"></MiniGameCamera>
    <MiniGameStatus ref="status" class="status-style"></MiniGameStatus>
  </div>
</template>

<script>
    import MiniGameCamera from "@/components/MiniGameCamera"
    import MiniGameStatus from "@/components/MiniGameStatus"

    export default {
        name: "MiniGame",
        components: {MiniGameStatus, MiniGameCamera},
        mounted() {
            setTimeout(this.$refs.camera.videoStart, 3000)
            this.$refs.status.countDownTimer()
            let vh = window.innerHeight
            this.$refs.game.style.height = vh + 'px'
        },

  }
</script>

<style scoped>
  .camera-style {
    z-index: 1;
  }

  .status-style {
    width: 80%;
    position: absolute;
    z-index: 2;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
  }

  .game-style {
    background-color: #000000;
    height: 100vh;
  }
</style>
