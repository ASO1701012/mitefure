<template>
  <div>
    <img src="/static/reallogo.png" class="img-size">
    <div class="loading loading-style">
      <span>診</span>
      <span>断</span>
      <span>中</span>
      <span>・</span>
      <span>・</span>
      <span>・</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Load.vue",
        data() {
            return {
                goodEmotions: [],
                badEmotions: [],
                neutral: 0,
                goodSum: 0,
                badSum: 0,
                resultText: ''
            }
        },
        created() {
            this.goodEmotions = this.$store.getters['Favo/getGoodEmotions']
            this.badEmotions = this.$store.getters['Favo/getBadEmotions']
            this.neutral = this.$store.getters['Favo/getNeutral']
            this.textGeneration(this.goodEmotions, this.badEmotions, this.neutral)
        },
        methods: {
            textGeneration: function (goods, bads, neutral) {
                this.goodSum = this.sumScore(goods)
                this.badSum = this.sumScore(bads)

                if (neutral >= 2) {
                    this.$store.dispatch("Favo/changeEmotionPoint", 0.5)
                    this.resultText = '普通の顔です'
                } else if (this.goodSum >= this.badSum) {
                    const top_emotion = this.getTopEmotion(goods)
                    this.resultText = this.createGoodText(top_emotion)
                } else {
                    const top_emotion = this.getTopEmotion(bads)
                    this.resultText = this.createBadText(top_emotion)
                }
                //Textをstoreに保存する処理
                this.$store.dispatch("Favo/changeResultText", this.resultText)
            },
            getTopEmotion: function (array) {
                let top_emotion = []

                array.sort(function (a, b) {
                    return (b[1] - a[1])
                })

                for (let cnt = 0; cnt < 2; cnt++) {
                    top_emotion.push(array[cnt][0])
                }
                return top_emotion
            },
            sumScore: function (array) {
                let sum = 0
                for (let i = 0; i < array.length; i++) {
                    sum += array[i][1]
                }
                return sum
            },
            createGoodText: function (array) {
                const score = 0.5 + (array[0][1] + array[1][1]) / 8
                this.$store.dispatch("Favo/changeEmotionPoint", score)
                let resultText = ''
                if (score >= 0.75) {
                    if (array[0][0] === 'happiness') {
                        resultText = 'happy,surprise'
                    } else {
                        resultText = 'surprise,happy'
                    }
                } else {
                    if (array[0][0] === 'happiness') {
                        resultText = 'happy,surprise'
                    } else {
                        resultText = 'happy,surprise'
                    }
                }
                return resultText
            },
            createBadText: function (array) {
                const score = 0.5 - (array[0][1] + array[1][1]) / 8
                this.$store.dispatch("Favo/changeEmotionPoint", score)
                let resultText = ''
                if (score <= 0.25) {
                    if (array[0][0] === 'anger') {
                        if (array[1][0] === 'contempt') {
                            resultText = 'anger,contempt'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'anger,disgust'
                        } else if (array[1][0] === 'fear') {
                            resultText = 'anger,fear'
                        } else {
                            resultText = 'anger,sadness'
                        }
                    } else if (array[0][0] === 'contempt') {
                        if (array[1][0] === 'anger') {
                            resultText = 'contempt,anger'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'contempt,disgust'
                        } else if (array[1][0] === 'fear') {
                            resultText = 'contempt,fear'
                        } else {
                            resultText = 'contempt,sadness'
                        }
                    } else if (array[0][0] === 'disgust') {
                        if (array[1][0] === 'anger') {
                            resultText = 'disgust,anger'
                        } else if (array[1][0] === 'contempt') {
                            resultText = 'disgust,contempt'
                        } else if (array[1][0] === 'fear') {
                            resultText = 'disgust,fear'
                        } else {
                            resultText = 'disgust,sadness'
                        }
                    } else if (array[0][0] === 'fear') {
                        if (array[1][0] === 'anger') {
                            resultText = 'fear,anger'
                        } else if (array[1][0] === 'contempt') {
                            resultText = 'fear,contempt'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'fear,disgust'
                        } else {
                            resultText = 'fear,sadness'
                        }
                    } else {
                        if (array[1][0] === 'anger') {
                            resultText = 'sadness,anger'
                        } else if (array[1][0] === 'contempt') {
                            resultText = 'sadness,contempt'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'sadness,disgust'
                        } else {
                            resultText = 'sadness,fear'
                        }
                    }
                } else {
                    if (array[0][0] === 'anger') {
                        if (array[1][0] === 'contempt') {
                            resultText = 'anger,contempt'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'anger,disgust'
                        } else if (array[1][0] === 'fear') {
                            resultText = 'anger,fear'
                        } else {
                            resultText = 'anger,sadness'
                        }
                    } else if (array[0][0] === 'contempt') {
                        if (array[1][0] === 'anger') {
                            resultText = 'contempt,anger'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'contempt,disgust'
                        } else if (array[1][0] === 'fear') {
                            resultText = 'contempt,fear'
                        } else {
                            resultText = 'contempt,sadness'
                        }
                    } else if (array[0][0] === 'disgust') {
                        if (array[1][0] === 'anger') {
                            resultText = 'disgust,anger'
                        } else if (array[1][0] === 'contempt') {
                            resultText = 'disgust,contempt'
                        } else if (array[1][0] === 'fear') {
                            resultText = 'disgust,fear'
                        } else {
                            resultText = 'disgust,sadness'
                        }
                    } else if (array[0][0] === 'fear') {
                        if (array[1][0] === 'anger') {
                            resultText = 'fear,anger'
                        } else if (array[1][0] === 'contempt') {
                            resultText = 'fear,contempt'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'fear,disgust'
                        } else {
                            resultText = 'fear,sadness'
                        }
                    } else {
                        if (array[1][0] === 'anger') {
                            resultText = 'sadness,anger'
                        } else if (array[1][0] === 'contempt') {
                            resultText = 'sadness,contempt'
                        } else if (array[1][0] === 'disgust') {
                            resultText = 'sadness,disgust'
                        } else {
                            resultText = 'sadness,fear'
                        }
                    }
                }
                return resultText
            }
        }
    }
</script>

<style scoped>

  .loading-style {
    /*縦並びでの表示*/
    writing-mode: vertical-rl;
    /*中央ぞろえ*/
    margin: 0 auto;
    /*文字の大きさ*/
    font-size: xx-large;
  }


  /*文字表示でのアニメーション設定*/
  .loading span {
    display: inline-block;
    margin: 0 -.075em;
    animation: loading .7s infinite alternate;
  }

  .loading span:nth-child(2) {
    animation-delay: .1s;
  }

  .loading span:nth-child(3) {
    animation-delay: .2s;
  }

  .loading span:nth-child(4) {
    animation-delay: .3s;
  }

  .loading span:nth-child(5) {
    animation-delay: .4s;
  }

  .loading span:nth-child(6) {
    animation-delay: .5s;
  }

  @keyframes loading {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }

</style>
