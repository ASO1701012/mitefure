<template>
  <div class="login" :style="{ 'background-image': 'url(' + backgroundImageSrc + ')' }">
    {{message}}
    <!-- アカウント登録の時-->
    <SignUp ref="signUp"></SignUp>
    <!-- ログインの時　-->
    <div class="input-text1">
    <p>
      <msg1>ユーザーIDを入力してください</msg1>
      <msg2>※必須</msg2>
      <br>
      <input type="text" ref="userThisId" placeholder="ユーザID"></p>
    <h2>{{ resultId }}</h2>
    <p>
      <msg1>パスワードを入力してください</msg1>
      <msg2>※必須</msg2>
      <br>
      <input type="password" ref="userThisPass" placeholder="パスワード"></p>
    <h2>{{ resultPass }}</h2>

    <div class="sign-button font-design" v-on:click="dataCheck">sign in</div>

    <br>
    <div class="account-button font-design" v-on:click="addAccountPage">sign up</div>
    </div>
  </div>


</template>

<script>
    import SignUp from "@/components/SignUp"
    import http from "../../../static/axios/axios"

    export default {
        name: "LogIn",
        components: {
            SignUp: SignUp,
        },
        data() {
            return {
                resultId: '',       /*エラーコメント表示用*/
                resultPass: '',     /*エラーコメント表示用*/
                userId: '',       /*ユーザID受け取り用*/
                userPass: null,     /*ユーザパス受け取り用*/
                message: '',
                apiUrl: 'https://abwp9ub4n8.execute-api.ap-northeast-1.amazonaws.com/realfriend/login',
                backgroundImageSrc: require("@/assets/op2.png"),
            }
        },
        created() {
            if (this.$store.getters["token/tokenGet"] !== '0' && this.$store.getters["token/firstFlagGet"] === true) {
                //一度ログインしてアクセスした場合
                //ここだけ自動ログイン
                // this.$store.dispatch("token/localStorageLoad")
                // console.log(this.$store.dispatch('token/localStorageLoad'))
                this.logInSuccess()
            } else if (this.$store.getters["token/tokenGet"] === "0") {
                // 一番最初にアクセスした場合
            } else if (this.$store.getters["token/tokenErrorGet"] === true) {
                //認証失敗などで遷移させられた場合
                this.$store.dispatch("token/setError", false)
                this.$store.dispatch("token/setToken", '0')
            }
        },
        beforeDestroy() {
            this.$store.dispatch("token/setLogin", false)
        },

        methods: {
            dataCheck: function () {
                /*初期化*/
                this.resultId = ''
                this.resultPass = ''
                this.message = ''

                /*受け取り*/
                this.userId = this.$refs.userThisId.value
                this.userPass = this.$refs.userThisPass.value

                /*正規表現パターン
                let paternid = new RegExp(/^([a-zA-Z0-9]{1,7})$/)
                let paternpass = new RegExp(/^([a-zA-Z0-9]{1,30})$/)*/

                /*if 内のコメントアウトは基本的に正規表現*/
                /*現在は入っているかだけの確認*/
                if (this.userId == ''　/*false == paternid.test(this.userid)*/) {
                    this.resultId = "入力してください"
                    if (this.userPass == ''　/*false == paternpass.test(this.userpass)*/) {
                        this.resultPass = "入力してください"
                    }
                } else {
                    if (this.userPass == ''/*false == paternpass.test(this.userpass)*/) {
                        this.resultPass = "入力してください"
                    } else {
                        /*すべて入っている場合*/
                        this.login()
                    }
                }
            },

            login: function () {
                const me = this
                this.axios.post(this.apiUrl, {
                    user_id: String(this.userId),
                    user_pass: String(this.userPass),
                }).then(function (response) {
                    me.$store.dispatch('token/setToken', response.data.token)
                    me.$store.dispatch('token/localStorageSave')
                    me.$store.dispatch('counter/increment', "login")
                    me.logInSuccess()
                }).catch(function (error) {
                    if (error.response.status === 401) {
                        me.message = 'パスワード、またはIDが間違っています'
                    }
                    console.log(error)
                })
            },
            logInSuccess() {
                this.$store.dispatch("token/setFirstFlag", false)
              //遷移先変えました。
              this.$router.push('/menu')
              // this.$router.push('/main/')
            }
            ,
            /*SignUpのモーダルを開く*/
            addAccountPage() {
                this.$refs.signUp.openSignUpModal()
            }

        }
        //メソッド外にかかれているため注意(thisを使用することができない？)

    }
</script>

<style scoped>
  h2 {
    color: red;
    font-size:2.5vmin;
  }

  msg2 {
    color: red;
    line-height: 7;
    margin-top: 7px;
    margin-bottom: 5px;
  }
  msg1{
    line-height: 7;
    margin-top: 7px;
    margin-bottom: 5px;
  }
  .font-design{
    line-height: 5;
    margin-top: 7px;
    margin-bottom: 5px;
  }
  .login{
    background: no-repeat center;
    background-size: cover;
    /*mainのサイズをちょうど画面と同じにする。*/
    height: 100vh;
  }
  .input-text1{
    box-sizing: content-box;
    position: absolute;
    right:5%;
    /*小さくした場合にはみ出すので現在は大きい画面の対しての配置をイメージしている*/
    font-size:2.5vmin;
  }
  .font-design:hover{
    animation: shake 2s infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(2px, 0px);
    }
    5% {
      transform: translate(-2px, 0px);
    }
    10% {
      transform: translate(2px, 0px);
    }
    15% {
      transform: translate(-2px, 0px);
    }
    20% {
      transform: translate(2px, 0px);
    }
    25% {
      transform: translate(-2px, 0px);
    }
    30% {
      transform: translate(0px, 0px);
    }
  }

</style>

