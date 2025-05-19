<template lang="pug">
    .pageNation
        nuxt-link(v-if="page!='1'" :to= "'/' + name + '/' + prevPage(page)")
          label.prev.hover ←
        nuxt-link(v-if="page!='1'" :to="'/'") 
          label.hover 1
        label(v-if="page!='1' && page!='2'  && page!='3'  && page!='4' ") …
        nuxt-link(v-if="page!='1' && page!='2'  && page!='3' " :to="'/' + name + '/' + prevPage(page-1)")
          label.hover {{page-2}}
        nuxt-link(v-if="page!='1' && page!='2' " :to="'/' + name + '/' + prevPage(page)")
          label.hover {{page-1}}
        label.current {{page}}
        nuxt-link(v-if="Number(page)+1!=finalPage(count) && page!=finalPage(count)" :to="'/' + name + '/' + nextPage(page)")
          label.hover {{Number(page)+1}}
        label(v-if="Number(page)+1!=finalPage(count) && Number(page)+2!=finalPage(count) && page!=finalPage(count) && Number(page)+2!=finalPage(count)") …
        nuxt-link(v-if="page!=finalPage(count)" :to="'/' + name + '/' + finalPage(count)")
          label.hover {{finalPage(count)}}
        nuxt-link(v-if="page!=finalPage(count)" :to="'/' + name + '/' + nextPage(page)")
          label.next.hover →
    </template>
    
    <script>
    export default {
      name: "PageNation",
      props: {
        count: {
          type: Number,
          required: true,
            },
        page: {
          type: String,
          required: true,
            },
        name: {
          type: String,
          required: true,
            }
        },
        data(){
        return {
            }
        },
        methods: {
            prevPage(page){
                const data = Number(page) -1 
                return data
            },
            nextPage(page){
                const data = Number(page) +1 
                return data
            },
            //最終ページを抽出
            finalPage(count){
                var data = count
                data = data - 1
                data = data / 5
                data = Math.trunc(data) + 1
                String(data)
                //console.log(data)
                return data
            },
       }
    };
    </script>
    
<style lang="sass" scoped>
.pageNation
    display: flex
    color: #000
    background-color: #f3f28ba1
    font-size:20px
    width: 360px
    margin: 50px auto
    justify-content: space-evenly
    padding: 10px
    border-radius: 10px
.current
    background-color: #77A88D
    color: #fff
    padding: 0 15px
    border-radius: 10px
.hover
  padding: 0 15px
  transition: .3s
.hover:hover
  color: #fff
  padding: 0 15px
  border-radius: 10px
  background-color: #77A88D
  box-shadow: 6px 6px 3px #666666
</style>
