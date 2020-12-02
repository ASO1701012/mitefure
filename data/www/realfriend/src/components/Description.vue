<template>
    <div class="line-bc">
      <Header/>
    <MessageCard>
      {{ scenarioText }}
    </MessageCard>
    <br>
    <MessageCard>
      {{ missionText }}
    </MessageCard>
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
        created() {
            const gameText = this.$store.getters['MiniGame/getGameText']
            this.scenarioText = gameText[0]
            this.missionText = gameText[1]
        }
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
