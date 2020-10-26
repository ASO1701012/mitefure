<template>
  <div>
    <video ref="video" id="video" width="500" height="500" autoplay muted></video>
    <!--    canvasを表示しないようにする-->
    <canvas ref="canvas" id="canvas" width="500" height="500" hidden></canvas>
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
                timer: null, //インターバル用のタイマー

                postUrl: 'https://abwp9ub4n8.execute-api.ap-northeast-1.amazonaws.com/realfriend/emotion',
            }
        },
        mounted() {
            //画面が開いてから３秒後にカメラを起動
            setTimeout(this.videoStart, 3000)
        },
        methods: {
            faceApi() {
                let me = this
                
                //faceApiに顔データを送信
                this.axios.post(this.postUrl, {
                    image: String(this.image),
                },).then(function (response) {
                    console.log(response.status)
                    if (response.status == 200) {
                        console.log(response)
                        me.$store.dispatch("Favo/addEmotions", response.data)
                    } else {
                        console.log(response)
                    }
                }).catch(function (error) {
                    console.log(error)
                })
            },
            capture(){
                console.log("captureに入りました")
                //カメラが写っている範囲を指定し、その領域を画像として切り取る
                this.canvas = this.$refs.canvas
                this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480)
                //画像データをbase64にエンコード
                this.image = this.canvas.toDataURL("image/jpeg")
                this.image = this.image.substr(23)
                this.faceApi()
            },
            videoStart() {
                this.video = this.$refs.video
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                        this.video.srcObject = stream
                        this.video.play()


                        this.timer =setInterval(this.capture, 3000)

                        //14秒後に撮影を終了する
                        setTimeout(this.captureStop, 14000)
                        //20秒後にカメラを停止する
                        setTimeout(this.videoStop, 20000)
                    })
                } else {
                    console.log("getUserMedia not support")
                }
            },
            captureStop() {
                clearInterval(this.timer)
                this.$router.push('/load')
            },
            videoStop() {
                console.log("ストップ")
                this.video.srcObject.getTracks().forEach(track => track.stop())
                this.$router.push('/result')
            }
        }

    }
</script>

<style scoped>

</style>
