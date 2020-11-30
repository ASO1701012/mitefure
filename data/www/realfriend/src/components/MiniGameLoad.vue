<template>
  <div>
    <div class="img-size">
      <img src="/static/mitefure.png" class="img-style">
    </div>
    <div class="loading loading-style">
      <span>診</span>
      <span>断</span>
      <span>中</span>
      <span>・</span>
      <span>・</span>
      <span>・</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MiniGameLoad"
  }
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .img-style {
    width: 50%;
  }
}

/*スマホサイズでない場合に反映される*/
@media screen and (min-width: 481px) {
  .img-style {
    width: 20%;
  }
}

.loading-style {
  /*縦並びでの表示*/
  writing-mode: vertical-rl;
  /*中央ぞろえ*/
  margin: 0 auto;
  /*文字の大きさ*/
  font-size: xx-large;
  display: inline-block;
}


/*文字表示でのアニメーション設定*/
.loading span {
  display: inline-block;
  margin: 0 -.075em;
  animation: loading .7s infinite alternate;
}

.loading span:nth-child(2) {
  animation-delay: .1s;
}

.loading span:nth-child(3) {
  animation-delay: .2s;
}

.loading span:nth-child(4) {
  animation-delay: .3s;
}

.loading span:nth-child(5) {
  animation-delay: .4s;
}

.loading span:nth-child(6) {
  animation-delay: .5s;
}

@keyframes loading {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
