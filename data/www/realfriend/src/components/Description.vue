<template>
  <div>
    <Header/>
    <MessageCard>
      シナリオ・・・
    </MessageCard>
    <br>
    <MessageCard>
      ミッション・・・
    </MessageCard>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import MessageCard from "@/components/MessageCard"

  export default {
    name: "Description",
    components: {Header,MessageCard:MessageCard}
  }
</script>

<style scoped>

</style>
