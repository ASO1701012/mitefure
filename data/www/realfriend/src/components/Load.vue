<template>
  <div>
    <div class="img-size">
      <img src="/static/mitefure.png" class="img-style">
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
                if (this.goodSum + this.badSum === 0) {
                    this.$store.dispatch("Favo/changeEmotionPoint", -1)
                } else if (neutral >= 3.5) {
                    this.$store.dispatch("Favo/changeEmotionPoint", 50)
                    this.resultText = `${this.friendName}さんからは、何の感情も感じ取れません。一度、楽しい話題を振る方が良いかもしれません。決して、悪い感情を持っているわけではないので慎重に！`
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
                        resultText = `これまでに無いぐらい幸せな感情で溢れています！${this.friendName}はあなたとのいることに全く抵抗は無さそう！自信を持って親友と言えるでしょう。`
                    } else {
                        resultText = `${this.friendName}さんはとても驚いています！サプライズ効果があったみたいです。この時間でより友情を深めることができました。親友になれたのではないでしょうか。`
                    }
                } else {
                    if (array[0][0] === 'happiness') {
                        resultText = `${this.friendName}さんは喜んでいるかも。あなたに対して、まんざらでもない反応を示しています。一押しするだけでお願い事を聞いてくれるかも？ 色々頼んでみよう！`
                    } else {
                        resultText = `${this.friendName}さんは驚いています。何かびっくりさせるようなことでもいいましたか？たまには驚かせるだけではなく、純粋な笑顔も見てみたいですよね。もっとお話しして色々な表情を見てみましょう。`
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
                            resultText = `${this.friendName}さんはとても怒っています。何か失礼なことでもいいましたか？親しき仲にも礼儀あり、相手が怒るようなことはあまり言わないほうがいいかもしれせんね。お互いに冷静になりましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `あなたは嫌われています！${this.friendName}さんはあなたとはもうかかわりたくないみたい。今までの自分の行動を振り返って改善していきましょう。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたに対して怒っているかも。また、あなたの事が怖くてそれを言い出せずにいるような気がします。付き合い方を見直した方がいいかも。`
                        } else {
                            resultText = `${this.friendName}さんがあなたに対する印象は最悪です。ここまで来たら、これ以上嫌われることはないでしょう。大胆に行動してみても良いでしょう。`
                        }
                    } else if (array[0][0] === 'contempt') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんはあなたの事を軽蔑し、怒っている可能性があります。何か誤解があるのかもしれません。誤解させるような行動が無かったか振り返りましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんはあなたの事を下に見ているでしょう。人としてまずい行動をした可能性が高いです。少し怖いかもしれませんが、何が原因か聞いてみましょう。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんは、なぜそのような態度をとってのか不思議でいます。自己中心的な態度を取りませんでしたか？次から改善していきましょう！`
                        } else {
                            resultText = `${this.friendName}さんはあなたに対して失望しています。ひとまず、謝って何が悪かったのか聞いてみましょう。早く！手遅れにならないうちに！`
                        }
                    } else if (array[0][0] === 'disgust') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんがあなたに対する印象は最悪かも。先ほどのあなたの言動は相手にとってタブーだったのかもしれません。誰にでも間違いはあります。謝りましょう。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんがあなたに対する印象は良いものではないと思われます！相手が嫌がる行動をしている可能性が高いです！何を話したか、思い返しましょう！`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたの事を苦手だと感じています。もしかしたら、怖いと感じているのかもしれません。笑顔で接して関係を良い方向に持っていきましょう。`
                        } else {
                            resultText = `間違いなく、嫌われています！どうしたらこの段階までいけるのでしょうか！地道に好感度を上げていきましょう。焦りは禁物ですよ。`
                        }
                    } else if (array[0][0] === 'fear') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんがあなたに対して恐怖しており、言いたいことがあるが、言い出せずにいるように感じます。笑顔で話すことを心掛けると良いかもしれませんね。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対してかなり苦手意識があるようです。相手の事を考えて行動していますか？自分の言動を振り返ってみましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんがあなたに対する印象は悪いかも。印象をよくする方法はたくさんあります！まずは元気よく挨拶！おはよう！こんにちは！こんばんわ！`
                        } else {
                            resultText = `${this.friendName}さんがあなたに対する印象は悪いかも。相手と同じ目線で物事を考えてみるといいかも。自分がされて嫌なことを、相手にしてはいけませんよ？`
                        }
                    } else {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんは悲しんでいます。相手がなぜ悲しんでいるかしっかり考えましょう。それを改善しない限り良好な関係は築けません。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対して呆れています。ここまでくると、関係の回復は難しいです。もう一度やり直せないか聞いてみましょう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんは悲しんでいます。手遅れになる前に謝ることをお勧めいたします。また、先ほど話した話題は今後しない方がいいかもしれませんね。`
                        } else {
                            resultText = `あなたは嫌われています！今後、関係を続けたいのであれば、まず謝りましょう！また原因を聞き今後同じ過ちを繰り返さないと〇〇さんに誓いましょう！`
                        }
                    }
                } else {
                    if (array[0][0] === 'anger') {
                        if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}は憤怒で燃える目をしている。気づかないうちに蔑むようなことを言ってしまったかも。今一度会話を見直してみよう。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `${this.friendName}さんがあなたに対する印象は最悪かも。何か気に障ることでもしてしまったかな？ひとまず、距離をおこう。他の人に原因を聞いてもいいかも。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたに対して少し怒っているかも。また恐怖も見え隠れしています。まだ心を開いていないのかもしれません。これから関係を良くしていきましょう`
                        } else {
                            resultText = `少し怒っているように感じます。また悲しんでいるようにも感じます。まだ間に合います！次の行動を大切にしていきましょう！`
                        }
                    } else if (array[0][0] === 'contempt') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんはあなたの事を下に見ているかも知れません。何が原因かしっかりと考えましょう。これから気を付けていけば大丈夫です！`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `少し嫌われているかもしれません。何が原因か本人に聞くのもいいですが、聞き辛い場合は周りの人に聞くのもいいでしょう。早く改善に努めるように。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `あなたの行動に不安を表しています。今後、あなたと関係を続けていいものか迷っているように感じます。次の行動が大切ですよ！`
                        } else {
                            resultText = `${this.friendName}さんはあなたに対して失望しているかも。今一度振り返り、自分のおかしな点がなかったのか考えましょう。改善しないと他の人からも失望されるかもしれません。`
                        }
                    } else if (array[0][0] === 'disgust') {
                        if (array[1][0] === 'anger') {
                            resultText = `少しあなたに対して、不満を表しています。まだ、大丈夫だとは思いますが、次の行動で相手を本気で怒らせることになるかも。慎重に！`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `良い感情でない事は間違いないと思います。話した話題が良くなかったのかもしれません。一度話題を変えて話してみるといいと思います。`
                        } else if (array[1][0] === 'fear') {
                            resultText = `${this.friendName}さんはあなたの事を少し苦手と感じているかも？${this.friendName}さんに合った接し方をしていますか？もう一度接し方について考え直すのもいいと思いますよ。`
                        } else {
                            resultText = `嫌われている可能性が高いです。しかし、まだ間に合います。良い関係にしたいのであれば、しっかりと話し合い、自分の悪いところは直していきましょう。`
                        }
                    } else if (array[0][0] === 'fear') {
                        if (array[1][0] === 'anger') {
                            resultText = `${this.friendName}さんは、あなたに対して怯えているかも。また、少し怒っているようにも感じます。まずは怯えさせないように対等な関係にするところから。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対して苦手意識があるかも。何が原因なのか、直接聞くのは話しづらいと思うので、他の人に聞いてみるといいかも知れませんね。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `あなたに対する印象は悪いかも。何を話したかは分からないですが、適切な内容でしたか？内容の問題でなければ、言い方や行動に合ったのかもしれません。`
                        } else {
                            resultText = `${this.friendName}さんにとって、あまりいい話題ではなかったのかもしれません。悪気がないのであれば、話題を変更することをおすすめします。`
                        }
                    } else {
                        if (array[1][0] === 'anger') {
                            resultText = `少し悲しんでいるように見えます。また、怒っているようにも見えます。何か呆れられるような事をしませんでしたか？振り返りましょう。`
                        } else if (array[1][0] === 'contempt') {
                            resultText = `${this.friendName}さんはあなたに対して呆れているかも。まずは謝って、今後同じことをしないと誓いましょう。この行動一つで今後の関係が変わります。`
                        } else if (array[1][0] === 'disgust') {
                            resultText = `あなたに対して、嫌な感情を持っています。時には、時間が解決してくれることもあります。少し、時間を置くと嫌な感情がなくなるかも？`
                        } else {
                            resultText = `${this.friendName}さんは悲しんでいるかも？なぜ、悲しませてしまったのか考えましょう。それが分からないと、また悲しませてしまうことになりますよ。`
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
@media screen and (max-width: 480px) {
  .img-style {
    width: 50%;
  }
}

/*スマホサイズでない場合に反映される*/
@media screen and (min-width: 481px) {
  .img-style {
    width: 20%;
  }
}

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
