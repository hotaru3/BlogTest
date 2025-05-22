<template>
  <template v-if="data">
    <h1 class="text-3xl font-semibold">
      {{ data.title }}
    </h1>
    <img
      :src="data.eyecatch?.url"
      :width="data.eyecatch?.width"
      :height="data.eyecatch?.height"
      alt=""
      class="mt-6 md:mt-10"
    />
    <div
      class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"
    >
      <div
        class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
      >
        {{ data.category?.name }}
      </div>
    </div>
    <div class="text-sm text-gray-700">
    </div>
    <div v-html="convert(data.content)" class="prose mt-6 md:mt-10"></div>
  </template>
  <input class="backBtn" type="button" @click="backPage()" value="前のページに戻る">
  </input>
</template>
<script setup lang="ts">
//import { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data)

function convert(body) {
  body = body.replace(/.png/g, ".png?fm=webp")
  body = body.replace(/.jpg/g, ".jpg?fm=webp")
  return body;
}
function backPage() {
      window.history.back()
}

</script>



<style>
.backBtn {
  margin: 30px auto;
  padding: 10px;
  border-radius: 10px ;
  color: #000;
  background-color:  #f3f28ba1;
  border-color: #77A88D;
  transition: .3s;
  display: block;
}

.backBtn:hover {
  background-color: #77A88D;
  border-color: #77A88D;
  color: #fff;
  box-shadow: 6px 6px 3px #666666;
}
</style>
