<template>
  <div>
  <img src="/static/reallogo.png" class="img-size">
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
  name: "Load.vue"
}
</script>

<style scoped>

.loading-style{
  /*縦並びでの表示*/
  writing-mode: vertical-rl;
  /*中央ぞろえ*/
  margin: 0 auto;
  /*文字の大きさ*/
  font-size: xx-large;
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
