<template>
  <div>
    <a :href=element.url>
      <img :src=element.icon alt="表示失敗">
    </a>
  </div>
</template>

<script>
export default {
  name: "ChildShareButton",
  props: {
    element: {
      type: Object
    }
  }


}
</script>

<style scoped>

</style>
