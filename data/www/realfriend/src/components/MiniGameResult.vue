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
            }
        },
        created() {
            const adviceText = [
                "怒り顔とは、眉間にしわをよせ、口角を下げている顔が一般的です。これらを意識して再チャレンジしてみましょう。",
                "真顔で静かに怒ると、それっぽくなります！こんな人だったとは！と心の底から嫌う気持ちを出すことが大切です！",
                "嫌な顔とは、目を細め、口角を下げたような顔です。嫌いな物が目の前にあると思いながら、練習するとよいでしょう。",
                "恐怖は難しい表情ですが、目を大きく開くことを意識するとよいでしょう。先ほどの表情からさらに目を開いてみましょう！",
                "もう少し、口角をあげると笑顔に近づきます。もっと言うと、口角を上げるだけでも相手は喜んでいると感じるでしょう。",
                "何も考えてはいけません。心を無にし、感情をなくすのです。。。そうすれば、おのずと表情にも真剣になるでしょう。",
                "悲しい顔は泣いている顔をイメージすると、一番わかりやすいかと思います。眉を下げるところがポイントですよ！",
                "コツは、目と口を大きく開けることです。友達などを驚かせてみて、その反応を真似するといいかもしれませんね！"
            ]
            if (this.$store.getters['MiniGame/getJudgmentResult']) {
                this.resultText = "チャレンジ成功です！この調子で表情を練習してみましょう！"
            } else {
                this.resultText = 'ミッション失敗です。'
                this.resultText += adviceText[this.$store.getters['MiniGame/answerGet']]
            }
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
