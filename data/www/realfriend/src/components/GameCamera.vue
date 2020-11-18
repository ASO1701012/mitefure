<template>
  <div>
    <video style="display: none;" ref="video" width="100" height="100" playsinline="true" autoplay muted></video>
    <!--    canvasを表示しないようにする-->
    <div class="wrapper">
    <canvas ref="canvasVideo" width="100" height="100"></canvas>
    <canvas ref="canvasEffect" width="100" height="100"></canvas>
    </div>
    <canvas ref="canvasCapture" width="100" height="100" hidden></canvas>
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
                video_timer:null,//canvas-video用のインターバルタイマー
                effectImage:new Image,
                landscapeImagePath : [
                  '/static/angry.png',
                  '/static/bad.png',
                  '/static/bad.png',
                  '/static/fear.png',
                  '/static/happy.png',
                  '/static/neutral.png',
                  '/static/sad.png',
                  '/static/surprise.png'
                ],//display用のエフェクト
                count: 0,  //シャッター用のカウント

                postUrl: 'https://abwp9ub4n8.execute-api.ap-northeast-1.amazonaws.com/realfriend/emotion',
            }
        },
        mounted() {
            this.$store.subscribe((mutation) => {
                if (mutation.type === 'Flag/changeVideoFlag') {
                    this.$router.push('/')
                }
            })
        },
        methods: {
            faceApi() {
                let me = this

                //faceApiに顔データを送信
                this.axios.post(this.postUrl, {
                    image: String(this.image),
                },).then(function (response) {
                    console.log(response.status)
                    if (response.status === 200) {
                        console.log(response)
                        me.$store.dispatch("Favo/addEmotions", response.data)
                        me.$store.dispatch("Favo/setMaxEmotion", response.data)
                    } else {
                        console.log(response)
                    }
                }).catch(function (error) {
                    console.log(error)
                })
            },
            capture(){
                console.log("captureに入りました")
                if(this.count<4){
                    //カメラが写っている範囲を指定し、その領域を画像として切り取る
                  this.canvas = this.$refs.canvasCapture
                  this.canvas_resize(this.video,this.canvas,this.canvas)
                    //画像データをbase64にエンコード
                    this.image = this.canvas.toDataURL("image/jpeg")
                    this.image = this.image.substr(23)
                    this.faceApi()
                    this.count++
                }
            },
          computeFrame() {
              // this.video = this.$refs.video
            this.c1 = this.$refs.canvasVideo
            this.ctx1 = this.c1.getContext("2d")
            this.canvas_resize(this.video,this.c1,this.c1)
            //エフェクト描写始まり（必要以上に繰り返しているので、あとでwatchでstoreを監視する方式に変えるべき）
            this.c1 = this.$refs.canvasEffect
            this.ctx1 = this.c1.getContext("2d")
            this.ctx1.clearRect(0, 0, this.canvas.width, this.canvas.height)
            let i=this.$store.getters["Favo/getMaxEmotion"]
            //エフェクトのサイズ確認用に入れている。
            if(i!==null){
              this.effectImage.src = this.landscapeImagePath[i]
              //エフェクト描写処理終わり
              this.canvas_resize(this.effectImage,this.c1,this.c1)
            }


          },
           canvas_resize(video_id,canvas_id,image_id){
               //canvasとdrawImageを全画面表示する
               let theCanvas = canvas_id
               let windowInnerWidth=window.innerWidth
               let windowInnerHeight=window.innerHeight
               theCanvas.setAttribute('width',windowInnerWidth)
               theCanvas.setAttribute('height',windowInnerHeight)
             theCanvas = image_id
             windowInnerWidth=window.innerWidth
             windowInnerHeight=window.innerHeight
             theCanvas.getContext("2d").drawImage(video_id, 0, 0 ,windowInnerWidth, windowInnerHeight)
               },
          videoStart() {
                this.video = this.$refs.video
              if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                  navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}}).then(stream => {
                      this.video.srcObject = stream
                      this.video.play()
                      console.log(this.canvas)
                      this.video_timer=setInterval(this.computeFrame,16)
                      this.timer =setInterval(this.capture, 3000)

                      //14秒後に撮影を終了する
                      setTimeout(this.captureStop, 14000)
                      //20秒後にカメラを停止する
                      setTimeout(this.videoStop, 20000)
                    }).catch(err => {
                        //カメラが認識できなかった場合
                        console.log(err)
                        this.$store.dispatch('Flag/changeVideoFlag')
                        alert("カメラが検知できませんでした。\nタイトル画面に戻ります")
                    })
                } else {
                    //mediaDevices.getUserMediaがブラウザに対応していない場合
                    this.$store.dispatch('Flag/changeVideoFlag')
                    console.log("getUserMedia not support")
                    alert("お使いのブラウザには対応していません。")
                }
            },
            captureStop() {
                clearInterval(this.timer)
                clearInterval(this.video_timer)
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

canvas { position: absolute; }
#canvas-effect { z-index: 2; }
#canvas-video { z-index: 1; }
.wrapper{
  position: absolute;
}

</style>
