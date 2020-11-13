<template>
  <div>
    <div class="img-size">
    <img src="/static/reallogo.png">
    </div>
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
                friendName: '',
                resultText: ''
            }
        },
        created() {
            this.goodEmotions = this.$store.getters['Favo/getGoodEmotions']
            this.badEmotions = this.$store.getters['Favo/getBadEmotions']
            this.neutral = this.$store.getters['Favo/getNeutral']
            this.friendName = this.$store.getters['Friend/nameGet']
            this.textGeneration(this.goodEmotions, this.badEmotions, this.neutral)
            window.addEventListener("beforeunload", this.confirmSave)
        },
        destroyed() {
            window.removeEventListener("beforeunload", this.confirmSave)
        },
        beforeRouteLeave(to, from, next) {
            if (to.name === "Result") {
                next()
            } else {
                next(false)
            }
        },
        methods: {
            textGeneration: function (goods, bads, neutral) {
                this.goodSum = this.sumScore(goods)
                this.badSum = this.sumScore(bads)

                if (neutral >= 3.5) {
                    this.$store.dispatch("Favo/changeEmotionPoint", 50)
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
                    top_emotion.push(array[cnt])
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
                const score = Math.round((0.5 + Math.floor((array[0][1] + array[1][1]) / 8 * 100) / 100) * 100)
                this.$store.dispatch("Favo/changeEmotionPoint", score)
                let resultText = ''
                if (score >= 0.75) {
                    if (array[0][0] === 'happiness') {
                        resultText = `これまでに無いぐらい幸せな感情で溢れています！\n${this.friendName}はあなたとのいることに全く抵抗は無さそう！\n自信を持って親友と言えるでしょう。`
                    } else {
                        resultText = `${this.friendName}さんはとても驚いています！\nサプライズ効果があったみたいです。\nこの時間でより友情を深めることができました。\n親友になれたのではないでしょうか。`
                    }
                } else {
                    if (array[0][0] === 'happiness') {
                        resultText = `${this.friendName}さんは喜んでいるかも。\nあなたに対して、まんざらでもない反応を示しています。\n一押しするだけでお願い事を聞いてくれるかも？ 色々頼んでみよう！`
                    } else {
                        resultText = `${this.friendName}さんは驚いています。\n何かびっくりさせるようなことでもいいましたか？\nたまには驚かせるだけではなく、純粋な笑顔も見てみたいですよね。\nもっとお話しして色々な表情を見てみましょう。`
                    }
                }
                return resultText
            },
            createBadText: function (array) {
                const score = Math.round((0.5 - Math.floor((array[0][1] + array[1][1]) / 8 * 100) / 100) * 100)
                this.$store.dispatch("Favo/changeEmotionPoint", score)
                let resultText = ''
                if (score <= 0.25) {
                    if (array[0][0] === 'anger') {
                        if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはとても怒っています。\n何か失礼なことでもいいましたか？\n親しき仲にも礼儀あり、相手が怒るようなことはあまり言わないほうがいいかもしれせんね。\nお互いに冷静になりましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `あなたは嫌われています！\n${this.friendName}さんはあなたとはもうかかわりたくないみたい。\n今までの自分の行動を振り返って改善していきましょう。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたに対して怒っているかも。\nまた、あなたの事が怖くてそれを言い出せずにいるような気がします。\n付き合い方を見直した方がいいかも。`
                        } else {
                            resultText = `${this.friendName}さんがあなたに対する印象は最悪です。\nここまで来たら、これ以上嫌われることはないでしょう。\n大胆に行動してみても良いでしょう。`
                        }
                    } else if (array[0][0] === 'contempt') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんはあなたの事を軽蔑し、怒っている可能性があります。\n何か誤解があるのかもしれません。\n誤解させるような行動が無かったか振り返りましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんはあなたの事を下に見ているでしょう。\n人としてまずい行動をした可能性が高いです。\n少し怖いかもしれませんが、何が原因か聞いてみましょう。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんは、なぜそのような態度をとってのか不思議でいます。\n自己中心的な態度を取りませんでしたか？\n次から改善していきましょう！`
                        } else {
                            resultText = `${this.friendName}さんはあなたに対して失望しています。\nひとまず、謝って何が悪かったのか聞いてみましょう。\n早く！手遅れにならないうちに！`
                        }
                    } else if (array[0][0] === 'disgust') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんがあなたに対する印象は最悪かも。\n先ほどのあなたの言動は相手にとってタブーだったのかもしれません。\n誰にでも間違いはあります。謝りましょう。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんがあなたに対する印象は良いものではないと思われます！\n相手が嫌がる行動をしている可能性が高いです！\n何を話したか、思い返しましょう！`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたの事を苦手だと感じています。\nもしかしたら、怖いと感じているのかもしれません。\n笑顔で接して関係を良い方向に持っていきましょう。`
                        } else {
                            resultText = `間違いなく、嫌われています！\nどうしたらこの段階までいけるのでしょうか！\n地道に好感度を上げていきましょう。焦りは禁物ですよ。`
                        }
                    } else if (array[0][0] === 'fear') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんがあなたに対して恐怖しており、\n言いたいことがあるが、言い出せずにいるように感じます。\n笑顔で話すことを心掛けると良いかもしれませんね。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対してかなり苦手意識があるようです。\n相手の事を考えて行動していますか？\n自分の言動を振り返ってみましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんがあなたに対する印象は悪いかも。\n印象をよくする方法はたくさんあります！まずは元気よく挨拶！\nおはよう！こんにちは！こんばんわ！`
                        } else {
                            resultText = `${this.friendName}さんがあなたに対する印象は悪いかも。\n相手と同じ目線で物事を考えてみるといいかも。\n自分がされて嫌なことを、相手にしてはいけませんよ？`
                        }
                    } else {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんは悲しんでいます。\n相手がなぜ悲しんでいるかしっかり考えましょう。\nそれを改善しない限り良好な関係は築けません。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対して呆れています。\nここまでくると、関係の回復は難しいです。\nもう一度やり直せないか聞いてみましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんは悲しんでいます。\n手遅れになる前に謝ることをお勧めいたします。\nまた、先ほど話した話題は今後しない方がいいかもしれませんね。`
                        } else {
                            resultText = `あなたは嫌われています！\n今後、関係を続けたいのであれば、まず謝りましょう！\nまた原因を聞き今後同じ過ちを繰り返さないと〇〇さんに誓いましょう！`
                        }
                    }
                } else {
                    if (array[0][0] === 'anger') {
                        if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}は憤怒で燃える目をしている。\n気づかないうちに蔑むようなことを言ってしまったかも。\n今一度会話を見直してみよう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんがあなたに対する印象は最悪かも。\n何か気に障ることでもしてしまったかな？ひとまず、距離をおこう。\n他の人に原因を聞いてもいいかも。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたに対して少し怒っているかも。\nまた恐怖も見え隠れしています。まだ心を開いていないのかもしれません。\nこれから関係を良くしていきましょう`
                        } else {
                            resultText = `少し怒っているように感じます。\nまた悲しんでいるようにも感じます。\nまだ間に合います！次の行動を大切にしていきましょう！`
                        }
                    } else if (array[0][0] === 'contempt') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんはあなたの事を下に見ているかも知れません。\n何が原因かしっかりと考えましょう。\nこれから気を付けていけば大丈夫です！`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `少し嫌われているかもしれません。\n何が原因か本人に聞くのもいいですが、聞き辛い場合は周りの人に聞くのもいいでしょう。\n早く改善に努めるように。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `あなたの行動に不安を表しています。\n今後、あなたと関係を続けていいものか迷っているように感じます。\n次の行動が大切ですよ！`
                        } else {
                            resultText = `${this.friendName}さんはあなたに対して失望しているかも。\n今一度振り返り、自分のおかしな点がなかったのか考えましょう。\n改善しないと他の人からも失望されるかもしれません。`
                        }
                    } else if (array[0][0] === 'disgust') {
                        if (array[1][0] === 'anger') {
                            resultText = `少しあなたに対して、不満を表しています。\nまだ、大丈夫だとは思いますが、\n次の行動で相手を本気で怒らせることになるかも。慎重に！`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `良い感情でない事は間違いないと思います。\n話した話題が良くなかったのかもしれません。\n一度話題を変えて話してみるといいと思います。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたの事を少し苦手と感じているかも？\n${this.friendName}さんに合った接し方をしていますか？\nもう一度接し方について考え直すのもいいと思いますよ。`
                        } else {
                            resultText = `嫌われている可能性が高いです。しかし、まだ間に合います。\n良い関係にしたいのであれば、しっかりと話し合い、\n自分の悪いところは直していきましょう。`
                        }
                    } else if (array[0][0] === 'fear') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんは、あなたに対して怯えているかも。\nまた、少し怒っているようにも感じます。\nまずは怯えさせないように対等な関係にするところから。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対して苦手意識があるかも。\n何が原因なのか、直接聞くのは話しづらいと思うので、\n他の人に聞いてみるといいかも知れませんね。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `あなたに対する印象は悪いかも。\n何を話したかは分からないですが、適切な内容でしたか？\n内容の問題でなければ、言い方や行動に合ったのかもしれません。`
                        } else {
                            resultText = `${this.friendName}さんにとって、あまりいい話題ではなかったのかもしれません。\n悪気がないのであれば、話題を変更することをおすすめします。`
                        }
                    } else {
                        if (array[1][0] === 'anger') {
                            resultText = `少し悲しんでいるように見えます。\nまた、怒っているようにも見えます。\n何か呆れられるような事をしませんでしたか？\n振り返りましょう。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対して呆れているかも。\nまずは謝って、今後同じことをしないと誓いましょう。\nこの行動一つで今後の関係が変わります。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `あなたに対して、嫌な感情を持っています。\n時には、時間が解決してくれることもあります。\n少し、時間を置くと嫌な感情がなくなるかも？`
                        } else {
                            resultText = `${this.friendName}さんは悲しんでいるかも？\nなぜ、悲しませてしまったのか考えましょう。\nそれが分からないと、また悲しませてしまうことになりますよ。`
                        }
                    }
                }
                return resultText
            },
            confirmSave(event) {
                event.returnValue = "本当に遷移してもよろしいですか？"
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
    display: inline-block;
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
