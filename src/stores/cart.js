import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI,findNewCartListAPI } from '@/apis/cart'


export const useCartStore = defineStore('cart', () => {
    const userStore=useUserStore()
    const isLogin=computed(()=>userStore.userInfo.token)
    // 1. 定义state - cartList
    const cartList = ref([])
    // 2. 定义action - addCart
    const addCart = async(goods) => {
        const {skuId,count}=goods
        if(isLogin.value){
            await insertCartAPI(skuId,count)
            const res=await findNewCartListAPI()
            cartList.value=res.result
        }else{
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }
    }

    const delCart=(skuid)=>{
        const id=cartList.value.findIndex((it)=>it.id===skuid)
        cartList.value.splice(id,1)
    }

    const addCount=computed(()=>{
        return cartList.value.reduce((a,c)=>a+c.count,0)
    })

    const addPrice=computed(()=>{
        return cartList.value.reduce((a,c)=>a+c.count*c.price,0)
    })

    const isAll=computed(()=>cartList.value.every((item)=>item.selected))

    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    const checkAll=(selected)=>{
        cartList.value.forEach(item=>item.selected=selected)
    }

    const selectedCount = computed(
        () => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(
        () => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    
    const clearList=()=>{
        cartList.value=[]
    }

    return {
        cartList,
        addCart,
        delCart,
        addCount,
        addPrice,
        singleCheck,
        isAll,
        checkAll,
        selectedCount,
        selectedPrice,
        clearList
    }
}, {
        persist: true,
})