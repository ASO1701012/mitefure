<template>
  <div>
    <ReturnButton/>
    <ResultRatioDisplay :point="point"/>
    <ResultHeart :point="point"/>
    <ResultTextArea :resultText="resultText"/>
    <ShareButtons/>
  </div>
</template>

<script>
    import ReturnButton from "./ReturnButton"
    import ShareButtons from "./ShareButtons"
    import ResultRatioDisplay from "./ResultRatioDisplay"
    import ResultHeart from "./ResultHeart"
    import ResultTextArea from "./ResultTextArea"

    export default {
        name: "Result",
        components: {ResultTextArea, ResultHeart, ResultRatioDisplay, ShareButtons, ReturnButton},
        data() {
            return {
                point: 0,
                resultText: ""
            }
        },
        created() {
            this.point = this.$store.getters['Favo/getEmotionPoint']
            this.resultText = this.$store.getters['Favo/getResultText']
        },
    }
</script>

<style scoped>

</style>
