<template>
  <div>
<!--    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-text="aaaaaaaa">-->
<!--      <img src="/static/twitter_icon.svg" alt="">-->
<!--    </a>-->
    <a :href="url">
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
      url:"",
      text: "aaa"
    }
  },
  created() {
    console.log(this.finalurl,this.aaurl,this.aatext)
    let url = new URL("https://twitter.com/share")
    url.searchParams.set("url","https://realfriend.online/")
    url.searchParams.set("text",this.text)
    this.url = url
  },
  methods: {
    urlGenerate: function (){
      this.$store.getters[]
    }
  }
}
</script>

<style scoped>

</style>
