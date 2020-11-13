<template>
<!--  <div>-->
<!--   <a :href="url" target="_blank">-->
<!--      <img src="/static/twitter_icon.svg" alt="">-->
<!--    </a>-->
<!--  </div>-->
  <div class="follow-button">
    <a class="twitter-follow-button" :href="url" data-size="large" target="_blank" rel="noopener">
      結果をシェア
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

.follow-button {
  background-color: #00b0ff;
  width: 30vh;
  height: 4vh;
  margin: auto;
  position: relative;
}
.follow-button a{
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
}
</style>
