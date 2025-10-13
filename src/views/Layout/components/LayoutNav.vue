<script>

// import { useRoute } from 'vue-router';
// const router=useRoute()
// const console=()=>{
//     console.log("用户退出")
//     router.path('/login')
// }


</script>


<template>
    <nav class="nav">
        <div class="container">
            <div>
                <ul>
                    <li>
                        <a href="#"><i>周杰伦</i></a>
                    </li>
                    <li>
                        <a href="#" ><i>退出登录</i></a>
                    </li>
                    <li>
                        <a href="#"><i>我的订单</i></a>
                    </li>
                    <li>
                        <a href="#"><i>会员中心</i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>



<style scoped lang="scss">
.nav{
    background-color: #333;
    ul{
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: end;
        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover {
                    color: $xtxColor;
                }
            }
            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>