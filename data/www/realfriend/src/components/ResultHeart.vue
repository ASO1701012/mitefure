<template>
  <div class="icon1">
    <svg  version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px" viewBox="0 0 512 512" style="width: 100%; height: 256px; opacity: 1;" xml:space="preserve">
    <g>
    <path class="st0" d="M380.63,32.196C302.639,33.698,264.47,88.893,256,139.075c-8.47-50.182-46.638-105.378-124.63-106.879
      C59.462,30.814,0,86.128,0,187.076c0,129.588,146.582,189.45,246.817,286.25c3.489,3.371,2.668,3.284,2.668,3.284
      c1.647,2.031,4.014,3.208,6.504,3.208v0.011c0,0,0.006,0,0.011,0c0,0,0.006,0,0.011,0v-0.011c2.489,0,4.856-1.177,6.503-3.208
      c0,0-0.821,0.086,2.669-3.284C365.418,376.526,512,316.664,512,187.076C512,86.128,452.538,30.814,380.63,32.196z"
          style="fill:url(#icon2);stroke: #000000;stroke-width: 0.5em;"></path>
      <!-- strokeを書き換えると枠組みの色を変更することができます。--->
    </g>
      <defs>
        <linearGradient id="icon2" gradientTransform="rotate(90)" class="parallax1">
          <stop offset="0%" stop-color="#dcdcdc"/>
          <stop :offset=heartPoint stop-color="#dcdcdc" /> <!-- stop-colorで内部の色の変更ができます。このstopタグをうまく使うとグラデーションを作ることもできます。 -->
          <stop :offset=heartPoint stop-color="#e83929" />
          <stop offset="100%" stop-color="#e83929"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ResultHeart",
  data(){
    return{
      heartPoint:100-(this.point)+"%",
    }
  },
  props: ['point'],
}
</script>

<style scoped>
/*アニメーション用CSSとりあえずコメントアウト
  path{
    animation: hello 3s ease-in forwards;
  }
 @keyframes hello {
    0% {
      stroke-dashoffset: 2000;
      /*fill: transparent; !*透過*!*/

/*
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      /*fill: #333;*/
/*
      opacity: 1;
    }
  }
*/


</style>
