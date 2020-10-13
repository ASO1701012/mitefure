<template>
  <div>
    <ReturnButton/>
    <ResultBody/>
  </div>
</template>

<script>
import ReturnButton from "./ReturnButton";
import ResultBody from "./ResultBody";

export default {
  name: "Result",
  components: {ResultBody, ReturnButton}
}
</script>

<style scoped>

</style>
