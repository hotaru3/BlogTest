<template lang="pug">
.categoryArea
  h3.linkTitle CATEGORY
  .linkContainer
    ul.linkUl
      li.linkText(v-for="data in data.contents" :key="data.id")
        router-link(:to="'/'") {{ data.name }}
</template>


<script setup lang="ts">
const { data } = await useMicroCMSGetList({
   endpoint: "categories",
   queries: {limit:100},
  },
);


// const { totalCount } = data.totalCount;

</script>
    
<style lang="sass" scoped>
.categoryArea
  margin-top: 30px
  border-radius: 5px
  background-color: #fff
.linkTitle
  font-family: 'Dancing Script', cursive
  text-align: center
  margin: 10px
  border-bottom: 1px solid #77A88D
  color: #77A88D
  padding-bottom: 10px
.linkContainer
  padding-bottom: 10px
  padding-top: 5px
.linkText
  font-size: 13px
  list-style: none
.linkUl
  padding-left: 30px
.contentsName
  padding-left: 15px
</style>
