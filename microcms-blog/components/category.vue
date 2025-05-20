<template>
<div class="categoryArea">
    <h3 class="linkTitle"> CATEGORY</h3>
    <div class="linkContainer">
        <ul class="linkUl">
            <li class="linkText" v-for="data in data?.contents" :key="data.id">
                <NuxtLink :to="`/${data.id}`">
                    {{ data?.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup lang="ts">

const { data } = await useMicroCMSGetList({
   endpoint: "categories",
   queries: {limit:100},
  },
);

</script>
    
<style lang="sass" scoped>
.categoryArea
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
  margin-right: 10px
.linkUl
  padding-left: 30px
  display: flex
.contentsName
  padding-left: 15px
</style>
