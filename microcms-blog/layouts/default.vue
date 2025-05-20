<template lang="pug">
    .wrapper
      Header
      main.main
        .mainContainer
          slot
          Category
      Footer.theFooter
    </template>
    

    <script>
export default {
    data () {
    return {
      page:  1
    }
  },
  name: "Index",
  computed: {},
  mounted() {
  },
  methods: {
    pageSelect(name){
      if(name != undefined){
        return 'blog/category/' + name + '/page'
      }else{
        return 'blog/page'
      }
    },
  }
};
</script>



    <style>
    html {
      height: 100%;
      /*font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
      */
      font-family: 'Kosugi Maru', sans-serif;
      font-size: 16px;
      word-spacing: 1px;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
    }
    
    ul {
      padding-left: 40px
    }
    
    button, input, select, textarea {
        background-color: white;
        border-style: solid;
    }
    
    body {
      height: 100%;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
    }
    
    .button--green {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #3b8070;
      color: #3b8070;
      text-decoration: none;
      padding: 10px 30px;
    }
    
    .button--green:hover {
      color: #fff;
      background-color: #3b8070;
    }
    
    .button--grey {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #35495e;
      color: #35495e;
      text-decoration: none;
      padding: 10px 30px;
      margin-left: 15px;
    }
    
    .button--grey:hover {
      color: #fff;
      background-color: #35495e;
    }
    
    .wrapper {
      min-height: 100vh; /* ←コンテンツの高さの最小値＝ブラウザの高さに指定 */
      position: relative; /* ←相対位置 */
      padding-bottom: 150px; /* ←フッターの高さを指定 */
      box-sizing: border-box;
      /* ↑ヘッダーやフッターを含むすべての要素の高さ＝min-height:100vhになるように指定 */
    }
    
    .topMenuContainer {
      padding: 50px 150px 30px 100px
    }
    
    /*アニメーション*/
    .page-enter-active, .page-leave-active {
      transition: opacity 0.3s
    }
    .page-enter, .page-leave-active {
      opacity: 0;
      transition: 0.3s
    }
    .main {
      
  background-image: url("../assets/images/home/background.png");
  background-repeat: repeat;
  line-height: 1.7;
}
    .mainContainer{
      color: #202122;
      padding: 20px 50px;
      padding-right: 100px;
      /*display: flex;
      justify-content: space-between;
      padding-bottom: 100px; /*フッターの高さと同じにする
      line-height: 2;*/
    }
    
    .subAreaContainer{
      display: flex;
      flex-flow: column;
    }
    
    .theFooter {
      text-align: center;
      width: 100%;
      height: 150px;
      position: absolute;
      bottom: 0;
    }
    
    .wrapper{
      min-width: 1000px;
    }
    
    .spArea {
      display: none;
    }
    
    @media screen and (max-width: 750px) {
      .mainContainer{
        padding: 3px;
        }
      .subAreaContainer{
        display: none;
        }
      .wrapper{
        min-width: 360px
    }
    .spArea {
      display: block;
      padding: 20px 50px;
    }
    .topMenuContainer {
      padding: 30px 
    }
    }
    
    </style>
    