<template>
  <div>
    <img src="/static/heart.svg" alt="表示失敗" class="heart">
  </div>
</template>

<script>
export default {
  name: "ResultHeart",
  // data(){
  //   return{
  //     Point:0
  //   }
  // },
  props:['Point'],
  methods:{
    //ここに渡された値によってハートのCSSを変更する処理を書く
  }
}
</script>

<style scoped>
.heart {
  width: 50px;
}

</style>
