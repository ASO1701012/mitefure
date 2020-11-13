<template>
  <div>
   <a :href="url" target="_blank" class="twitter-url">
     <div class="share-twitter">
       <div class="share-twitter-img">
         <img src="/static/twitter_icon.svg" alt="">
       </div>
       <div class="share-twitter-txt">
         結果をシェア
       </div>
     </div>
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
.share-twitter{
  display: flex;
  justify-content: space-around;
}

.share-twitter-img{
  width: 10vh;
}

.share-twitter-txt{
  margin: auto;
}

.twitter-url{
  text-decoration: none;
  color: #00aaec;
}
</style>
