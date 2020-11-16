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
        props: ['resultText'],
    }
</script>

<style scoped>
  dd {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
