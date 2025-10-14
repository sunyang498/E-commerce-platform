<script setup>

import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFlex from './components/LayoutFlex.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore=useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>

<template>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <LayoutFooter></LayoutFooter>
    <RouterView></RouterView>
    <LayoutFlex></LayoutFlex>
</template>