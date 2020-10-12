<template>
  <div class="parent">
    <div class="icon_list">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">
        <img src="../../static/twitter_icon.svg" alt="">
      </a>
    </div>
    <div class="icon_list">
      <a href="#">
        <img src="../../static/discord_icon.svg" alt="読み込み失敗">
      </a>
    </div>
    <div class="icon_list">
      <a href="#">
        <img src="../../static/instagram_icon.svg" alt="読み込み失敗">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnsShareButton"
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

/*!*.parent > a{*!*/
/*!*  flex-direction: row;*!*/
/*!*}*!*/

/*.parent > img {*/
/*  width: 40%;*/
/*}*/
</style>
