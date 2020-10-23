<template>
  <div class="icon1">
    <!--    <img src="/static/heart.svg" alt="表示失敗" class="heart">-->
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px" viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1;" xml:space="preserve">
<!--    <style type="text/css">-->
<!--      .st0 {-->
<!--        fill: #4B4B4B;-->
<!--      }-->
<!--  </style>-->
    <g>
    <path class="st0" d="M380.63,32.196C302.639,33.698,264.47,88.893,256,139.075c-8.47-50.182-46.638-105.378-124.63-106.879
      C59.462,30.814,0,86.128,0,187.076c0,129.588,146.582,189.45,246.817,286.25c3.489,3.371,2.668,3.284,2.668,3.284
      c1.647,2.031,4.014,3.208,6.504,3.208v0.011c0,0,0.006,0,0.011,0c0,0,0.006,0,0.011,0v-0.011c2.489,0,4.856-1.177,6.503-3.208
      c0,0-0.821,0.086,2.669-3.284C365.418,376.526,512,316.664,512,187.076C512,86.128,452.538,30.814,380.63,32.196z"
          style="fill:url(#icon2);stroke: #000000"></path>
    </g>
      <defs>
        <linearGradient id="icon2" gradientTransform="rotate(90)">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#e83929"/>
          <stop offset="100%" stop-color="#e83929"/>
        </linearGradient>
      </defs>
<!--    <rect x="0" y="0" width="100px" height="100px" fill="url(#icon2)"/>-->
    </svg>
  </div>
</template>

<script>
// import LogIn from "../old/LogIn";
export default {
  name: "ResultHeart",
  // components: {LogIn},
  // data(){
  //   return{
  //     Point:0
  //   }
  // },
  props: ['Point'],
  methods: {
    //ここに渡された値によってハートのCSSを変更する処理を書く
  }
}
</script>

<style scoped>
/*.heart {*/
/*  width: 50px;*/
/*  background: linear-gradient(to bottom, #ff0000 0%, #ff0000 50%, #0000ff 50%, #0000ff 100%);*/
/*  },*/
/*.icon1 {*/
/*  fill: linear-gradient(to bottom, #ff0000 0%, #ff0000 50%, #0000ff 50%, #0000ff 100%);*/
/*}*/


</style>
