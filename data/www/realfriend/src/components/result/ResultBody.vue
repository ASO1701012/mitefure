<template>
  <div>
  <ResultRatioDisplay :result="number"/>
  <ResultHeart/>
  <TextArea1/>
  </div>
</template>

<script>
import ResultHeart from "./ResultHeart";
import ResultRatioDisplay from "./ResultRatioDisplay";
import TextArea1 from "./TextArea";
export default {
  name: "ResultBody",
  components: {TextArea1, ResultRatioDisplay, ResultHeart},
  data () {
    return {
      number:10
    }
  }
}
</script>

<style scoped>

</style>
