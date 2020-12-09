<template xmlns="http://www.w3.org/1999/html">
  <div class="mycomment">
    <p>
      <!-- class名は変えてください-->
      {{levelMsg}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "PastLevelSelect",
    data() {
      return {
        level: null,
        levelMsg: null,
      }
    },
    methods: {
      createLevelMsg() {
        switch (this.level) {
          case 0:
            this.levelMsg = '易'
            break
          case 1:
            this.levelMsg = '普'
            break
          case 2:
            this.levelMsg = '難'
            break
        }
      }
    },
    created() {
      this.level = this.$store.getters['MiniGame/levelGet']
      this.createLevelMsg()
    }
  }
</script>

<style scoped>
.mycomment {
  margin: 10px 0;
}
.mycomment p {
  display: inline-block;
  position: relative;
  margin: 0 25px 0 0;
  padding: 8px;
  max-width: 250px;
  border-radius: 12px;
  background: #edf1ee;
  font-size: 15px;
}

.mycomment p:after {
  content: "";
  position: absolute;
  top: 3px;
  right: -19px;
  border: 8px solid transparent;
  border-left: 18px solid #edf1ee;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
}
p{
  text-align: center;
}
</style>
