<template>
  <div class="balloon6">
    <div class="faceicon">
      <img src="/static/mitefure.png" alt="">
    </div>
    <div class="chatting">
      <div class="says">
      <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageCard"
  }
</script>

<style scoped>
.balloon6 {
  width: 100%;
  margin: 10px 0;
  overflow: hidden;
}

.balloon6 .faceicon {
  float: left;
  margin-right: -50px;
  width: 40px;
}

.balloon6 .faceicon img{
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.balloon6 .chatting {
  width: 100%;
  text-align: left;
}
.says {
  display: inline-block;
  position: relative;
  margin: 0 0 0 50px;
  padding: 10px;
  max-width: 250px;
  border-radius: 12px;
  background: #edf1ee;
}

.says:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 3px;
  left: -19px;
  border: 8px solid transparent;
  border-right: 18px solid #edf1ee;
  -webkit-transform: rotate(35deg);
  transform: rotate(35deg);
}
.says p {
  margin: 0;
  padding: 0;
}

</style>
