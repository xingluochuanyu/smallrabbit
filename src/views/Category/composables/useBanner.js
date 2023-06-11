//封装banner轮播图相关的业务代码
import { getBannerAPI } from "@/apis/home"
import {ref,onMounted} from 'vue'
export function useBanner(){
    const bannerList = ref([])
    const getBanner = async () => {
      const res = await getBannerAPI({
        distributionSite: "2",
      })
      console.log(res)
      bannerList.value = res.data.result
    }
    onMounted(() => {
      getBanner()
    })
    return{
      bannerList
    }
}