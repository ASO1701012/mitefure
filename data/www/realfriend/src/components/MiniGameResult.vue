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
    components: {PastLevelSelect, Header},
    methods: {
      confirmSave(event) {
        event.returnValue = "本当に遷移してもよろしいですか？"
      },
    },
    created() {
      window.addEventListener("beforeunload", this.confirmSave)
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

</style>
