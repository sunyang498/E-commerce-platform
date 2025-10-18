<script setup>
import { getBannerAPI } from '@/apis/home';
import {onMounted, ref} from 'vue'
const bannerList=ref([])
const props=defineProps({
    parametric:String
})
const getBanner=async()=>{
    const res = await getBannerAPI({
        distributionSite:props.parametric
    })
    bannerList.value=res.result
}

onMounted(()=>{
    getBanner()
})

</script>



<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>



<style scoped lang='scss'>
.home-banner {
    width: 1240px;
    height: 500px;
    img {
        width: 100%;
        height: 500px;
    }
}
</style>