<template>
    <h1>Nuxt3 Jamstack Blogs</h1>
    <ul>
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`">
          <img
            :src="blog.eyecatch?.url"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            alt=""
          />
          <div>
            <div>
              {{ blog.category?.name }}
            </div>
            <div>
              {{ blog.title }}
            </div>
            <div>
              {{ blog.publishedAt ?? blog.createdAt }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </template>


<script setup lang="ts">
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
export type Blog = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
};
const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
console.log(data)
</script>