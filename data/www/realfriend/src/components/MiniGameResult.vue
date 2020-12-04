<template>
  <div>
    <Header/>
    <PastLevelSelect></PastLevelSelect>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import PastLevelSelect from "@/components/PastLevelSelect"
  export default {
    name: "MiniGameResult",
    components: {PastLevelSelect, Header}
  }
</script>

<style scoped>

</style>
