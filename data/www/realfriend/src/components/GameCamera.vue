<template>
  <div>
    <video ref="video" id="video" width="500" height="500" autoplay muted></video>
    <!--    canvasを表示しないようにする-->
    <canvas ref="canvas" id="canvas" hidden></canvas>
    <button v-on:click="videoStart">カメラ起動</button>
  </div>
</template>

<script>
    export default {
        name: "GameCamera",
        data() {
            return {
                image: null, //顔データを保存する
                video: {},   //streamを保持させる
                canvas: {},  //canvas領域

                postUrl: 'https://abwp9ub4n8.execute-api.ap-northeast-1.amazonaws.com/realfriend/emotion',
            }
        },
        methods: {
            faceApi() {
                //faceApiに顔データを送信
                this.axios.post(this.postUrl, {
                    image: String(this.image),
                },).then(function (response) {
                    console.log(response.status)
                    if (response.status == 200) {
                        console.log(response)
                    } else {
                        console.log(response)
                    }
                }).catch(function (error) {
                    console.log(error)
                })
            },
            capture(){
                //カメラが写っている範囲を指定し、その領域を画像として切り取る
                this.canvas = this.$refs.canvas
                this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480)
                //画像データをbase64にエンコード
                this.image = this.canvas.toDataURL("image/jpeg")
                this.image = this.image.substr(23)
            },
            videoStart() {
                this.video = this.$refs.video
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                        this.video.srcObject = stream
                        this.video.play()
                    })
                } else {
                    console.log("getUserMedia not support")
                }
            }
        }

    }
</script>

<style scoped>

</style>
