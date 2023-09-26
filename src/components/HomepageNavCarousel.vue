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
      <el-carousel-item v-for="(image, index) in images" :key="image">
        <div class="hero" :style="getStyle(index)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Img1 from '../assets/pexels-lukas-574071.jpg'
import Img2 from '../assets/pexels-fauxels-3184416.jpg'
import Img3 from '../assets/pexels-pixabay-416405.jpg'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

export default {
  data(){
    return{
      images: [Img1, Img2, Img3],
      activeIndex: '',
      handleSelect: ''
    }
  },
  methods: {
    getStyle(index: number): string {
      return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${ this.images[index] }");`;
    }
  }
}

</script>

<style scoped>

#wrapper {
  position: relative;
}

#navbar {
  position:absolute;
  top:0;
  z-index:-10;
  background: rgb(255, 255, 255); opacity: 0.75;
  width:100%;
  height: 7.5vh;
}

#carousel {
  top:0;
  z-index: -50;
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