<template>
  <div>
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

    export default {
        name: "Description",
        components: {Header, MessageCard: MessageCard},
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

</style>
