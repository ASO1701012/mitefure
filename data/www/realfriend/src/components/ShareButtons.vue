<template>
  <div class="parent">
    <TwitterShareButton class="twitter-share-style"/>
<!--    <InstagramShareButton/>-->
<!--    <DiscordShareButton/>-->
  </div>
</template>

<script>
import TwitterShareButton from "./TwitterShareButton"
import InstagramShareButton from "./InstagramShareButton"
import DiscordShareButton from "./DiscordShareButton"

export default {
  name: "ShareButtons",
  components: {DiscordShareButton, InstagramShareButton, TwitterShareButton}
}
</script>

<style scoped>
.parent {
  /*display: flex;*/
  /*width: 150px;*/
  /*justify-content: space-around;*/
}
.twitter-share-style{
  border: solid;
  border-color: #00b0ff;
  border-radius: 8px;
}

.parent * {
  width: 30vh;
}

</style>
