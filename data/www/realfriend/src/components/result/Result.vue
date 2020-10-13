<template>
  <div>
    <ReturnButton/>
    <ResultBody/>
    <ShareButtons/>
  </div>
</template>

<script>
import ReturnButton from "./ReturnButton";
import ResultBody from "./ResultBody";
import ShareButtons from "./ShareButtons";

export default {
  name: "Result",
  components: {ShareButtons, ResultBody, ReturnButton}
}
</script>

<style scoped>

</style>
