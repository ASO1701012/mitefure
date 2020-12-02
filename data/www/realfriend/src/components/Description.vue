<template>
    <div class="line-bc">
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
.line-bc {
  text-align: right;
  font-size: 14px;
  background: #7da4cd;
  height: 100vh;
}
</style>
