<template>
  <div id="wrapper">
    <el-menu
      id="navbar"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>

    <el-carousel id="carousel" height="75vh">
      <el-carousel-item v-for="image in images" :key="image">
        <div class="hero" :style="buildBackground(image)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
  #wrapper {
    position: relative;
  }

  #navbar {
    position:absolute;
    top:0;
    z-index: 1;
    background: rgb(255, 255, 255); opacity: 0.75;
    width:100%;
    height: 7.5vh;
  }

  #carousel {
    top:0;
    z-index: 0;
  }

  .hero {
    height:75vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .flex-grow {
    flex-grow: 1;
  }
</style>

<script setup lang="ts">
  import { ref } from 'vue';
  import { homepageNavCarouselStorage } from '../firebaseInit';
  import { listAll, getDownloadURL } from 'firebase/storage';

  const activeIndex = ref('1')
  const handleSelect = {key: "", keyPath: []} 

  let images: string[] = [];

  const fileSnap = await listAll(homepageNavCarouselStorage);

  for (const item of fileSnap.items) {
    const url = await getDownloadURL(item);
    images.push(url);
  }

  function buildBackground(image: string): string {
    return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${ image }");`;
  }
</script>