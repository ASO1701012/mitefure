<template>
  <div class="header-style">
    <ReturnButton class="return-position"/>
    <span class="header-title">ミテフレ</span>
  </div>
</template>

<script>
import ReturnButton from "@/components/ReturnButton"
export default {
name: "Header",
  components: {ReturnButton}
}
</script>

<style scoped>
.return-position {
  float: left;
  position: absolute;
  top: 20%;

}
.header-title{
  font-size: 2rem;
  display: inline-block;
}
.header-style{
  position: relative;
  text-align: center;
  background-color: #69ff8b;
  top: 0%;
}
</style>
