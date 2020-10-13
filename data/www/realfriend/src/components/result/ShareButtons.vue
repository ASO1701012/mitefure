<template>
  <div class="parent">
    <TwitterShareButton/>
    <InstagramShareButton/>
    <DiscordShareButton/>
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
  display: flex;
  width: 20%;
  justify-content: space-around;
}

.parent * {
  width: 30vh;
}

</style>
