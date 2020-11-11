<template>
  <div>
   <a :href="url" target="_blank">
      <img src="/static/twitter_icon.svg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: "TwitterShareButton",
  data(){
    return{
      url:"",
    }
  },
  created() {
    let url = new URL("https://twitter.com/share")
    url.searchParams.set("url","https://realfriend.online/")
    url.searchParams.set("text",this.$store.getters['Favo/getResultText'])
    this.url = url
  },
}
</script>

<style scoped>

</style>
