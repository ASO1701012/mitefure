<template>
  <p>{{ result }}</p>
</template>

<script>
export default {
  name: "ResultRatioDisplay",
  // data() {
  //   return {
  //     result: 10
  //   }
  // }
  props:{
    result:{
      type:Number
    }
  }
}
</script>

<style scoped>

</style>
