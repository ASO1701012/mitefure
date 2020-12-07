<template>
  <div class="line-bc">
    <Header/>
    <MessageCard>
      シナリオ
      <br>
      {{ scenarioText }}
    </MessageCard>
    <br>
    <MessageCard>
      ミッション
      <br>
      {{ missionText }}
    </MessageCard>
    <LevelSelect></LevelSelect>
    </div>
</template>

<script>
  import Header from "@/components/Header"
  import MessageCard from "@/components/MessageCard"
  import LevelSelect from "@/components/LevelSelect"

  export default {
    name: "Description",
    components: {LevelSelect: LevelSelect, Header, MessageCard: MessageCard},
    data() {
      return {
        scenarioText: "",
        missionText: ""
      }
    },
    methods: {
      confirmSave(event) {
        event.returnValue = "本当に遷移してもよろしいですか？"
      },
    },
    created() {
      const gameText = this.$store.getters['MiniGame/getGameText']
      this.scenarioText = gameText[0]
      this.missionText = gameText[1]
      window.addEventListener("beforeunload", this.confirmSave)
    },
    destroyed() {
      window.removeEventListener("beforeunload", this.confirmSave)
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
  .line-bc {
    text-align: right;
    font-size: 14px;
    background: #7da4cd;
    height: 100vh;
  }
</style>
