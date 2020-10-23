<template>
  <div>
    <dl>
      <dt>解説文</dt>
      <dd>{{ resultText }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props:['point'],
  data() {
    return {
      resultText: "",
      tmpText:this.point
    }
  },
  created() {
    this.textGeneration(this.tmpText)
  },
  methods: {
      textGeneration:function (value){
        if (value === 0){
          this.resultText = 'あなたの運勢は0です！！！'
        }else if (value === 100){
          this.resultText = 'あなたの運勢は100です！！！'
        }else{
          this.resultText = 'わかりませんでした！！'
        }
      }
 }
}
</script>

<style scoped>

</style>
