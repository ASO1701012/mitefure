<template>
  <!--本来であればgamefooterで処理されるべきだが、div内にコンポーネントされているためfooterとして認識されていない
      文字などでなく画像のためfavogaugeのulが高さを認識しない。
      そのためコンポーネントとして呼び出しているGameBody内で画像を設定している。-->
  <div class="gamebody" :style="{ 'background-image': 'url(' + backgroundImageSrc + ')' }">
    <MenuReturn class="menu-return-position"></MenuReturn>
    <camera @updateMsg="updateFaceapiMsg"></camera>
    <StatusMsg ref="statusMsg" :receiveMsg="fromFaceapiMsg" class="status-position"></StatusMsg>
    <!-- input v-modelで宣言した値を入れている-->
    <GameFooter :favo-gauge-data="favoGaugeData" :agesage-data="fromFaceapiMsg"></GameFooter>
  </div>
</template>

<script>
    import GameHeader from "@/components/GameHeader";
    import GameFooter from "@/components/GameFooter"
    import FavoGauge from "@/components/FavoGauge";
    import Camera from "@/components/Camera";
    import StatusMsg from "@/components/StatusMsg";
    import MenuReturn from "@/components/MenuReturn"

    export default {
        name: "GameBody",
        components: {
            GameHeader: GameHeader,
            GameFooter: GameFooter,
            FavoGauge: FavoGauge,
            Camera: Camera,
            StatusMsg: StatusMsg,
            MenuReturn:MenuReturn,
        },
        data() {
            return {
                favoGaugeData: 0,
                agesageData: 0,
                fromFaceapiMsg: 0,
                backgroundImageSrc: require("@/assets/ゲーム背景候補.jpg")
            }
        },
        methods: {
            updateFaceapiMsg(msg) {
                this.fromFaceapiMsg = msg
                this.$refs.statusMsg.statusMsgAdd();
            },
            heartCount(sum){
                this.favoGaugeData=Math.floor(sum/200)
            },
        }
    };
</script>

<style scoped>
  .gamebody{
    /*gamebodyのサイズをちょうど画面と同じにする。*/
    height:100vh;
    background-size: cover;
    position: relative;
  }
  .status-position{
    position: absolute; top:45vh; left:0px;width: 100%;
  }
  .menu-return-position{
    width: 100%;
  }

</style>
