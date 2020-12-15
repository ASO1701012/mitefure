<template>
  <div class="line-bc" :style="{ backgroundImage: 'url(' + backImage + ')' }">
    <Header/>
    <MessageCard>
      {{missionText}}
    </MessageCard>
    <PastLevelSelect></PastLevelSelect>
    <MessageCard>
      {{resultText}}
    </MessageCard>
  </div>
</template>

<script>
    import Header from "@/components/Header"
    import PastLevelSelect from "@/components/PastLevelSelect"
    import MessageCard from "@/components/MessageCard"

    export default {
        name: "MiniGameResult",
        components: {PastLevelSelect, Header, MessageCard},
        data() {
            return {
                scenarioText: "",
                missionText: "",
                resultText: "",
                backImage:"",
            }
        },
        methods: {
            confirmSave(event) {
                event.returnValue = "本当に遷移してもよろしいですか？"
            },
        },
        created() {
            const adviceText = ["1", "2", "3", "4", "5", "6", "7"]
            this.resultText = adviceText[0]
            const gameText = this.$store.getters['MiniGame/getGameText']
            this.missionText = gameText[1]
            window.addEventListener("beforeunload", this.confirmSave)
            this.backImage=gameText[2]
        },
        destroyed() {
            window.removeEventListener("beforeunload", this.confirmSave)
        },
        beforeRouteLeave(to, from, next) {
            if (to.name === "Title") {
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
    height: 100vh;
    background-repeat: no-repeat;
  }
</style>
