<template>
  <div>
<!--    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-text="aaaaaaaa">-->
<!--      <img src="/static/twitter_icon.svg" alt="">-->
<!--    </a>-->
    <a :href="finalurl">
      <img src="/static/twitter_icon.svg" alt="">
    </a>
<!--    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
  </div>
</template>

<script>
export default {
  name: "TwitterShareButton",
  data(){
    return{
      aaurl: "https://twitter.com/share?url=https://realfriend.online/&text=",
      aatext: "aaaaaaa",
      finalurl: this.aaurl + this.aatext,
    }
  },
  created() {
    console.log(this.finalurl,this.aaurl,this.aatext)
  }
}
</script>

<style scoped>

</style>
