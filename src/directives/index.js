import {useIntersectionObserver} from '@vueuse/core'


export const lazyPludin={
    install(app){
        app.directive('img-lazy',{
            mounted(el,binding){
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}])=>{
                        if(isIntersecting){
                            el.src=binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}