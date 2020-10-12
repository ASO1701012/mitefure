<template>
  <div class="parent">
    <ChildShareButton :element="twitter" class="icon_list"/>
    <ChildShareButton :element="instagram" class="icon_list"/>
    <ChildShareButton :element="discord" class="icon_list"/>
  </div>
</template>

<script>
import ChildShareButton from "./ChildShareButton";

export default {
  name: "SnsShareButton",
  components: {ChildShareButton},
  data() {
    return {
      twitter: {
        url: 'https://twitter.com/share?ref_src=twsrc%5Etfw',
        icon: '/static/twitter_icon.svg'
      },
      instagram: {
        url: '#',
        icon: '/static/instagram_icon.svg'
      },
      discord: {
        url: '#',
        icon: 'static/discord_icon.svg'
      },
    }
  }
}

</script>

<style scoped>
.parent {
  display: flex;
  justify-content: space-around;
  width: 20%;
}

.icon_list {
  width: 30vh;
}

</style>
