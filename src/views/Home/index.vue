<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduction from './components/HomeProduction.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <homeProduction></homeProduction>
</template>