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
    <level-select></level-select>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import MessageCard from "@/components/MessageCard"
  import LevelSelect from "@/components/LevelSelect"

  export default {
    name: "Description",
    components: {LevelSelect:LevelSelect, Header,MessageCard:MessageCard}
  }
</script>

<style scoped>

</style>
