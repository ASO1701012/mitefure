<template>
  <div>
    <dl>
      <dt>解説文</dt>
      <dd>{{ Text }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props:['Text'],
  // data() {
  //   return {
  //     resultText: "aaaaaaaaaaaaaaaaaaaaaa"
  //   }
  // },
  methods: {}
}
</script>

<style scoped>

</style>
