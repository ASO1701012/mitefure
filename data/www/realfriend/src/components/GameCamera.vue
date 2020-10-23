<template>
  <div>
    <video ref="video" id="video" width="500" height="500" autoplay muted></video>
    <!--    canvasを表示しないようにする-->
    <canvas ref="canvas" id="canvas" hidden></canvas>
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

            }
        }

    }
</script>

<style scoped>

</style>
