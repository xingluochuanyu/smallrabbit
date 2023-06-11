import {computed, ref} from 'vue'
import dayjs from 'dayjs'
//封装倒计时逻辑函数

export const useCountDown = ()=>{
  //响应式数据
  const time = ref(0)
  //格式化时间
  const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时函数
  const start = (currentTime)=>{
    //开始倒计时的逻辑
    //核心逻辑编写  每隔1s就减一
    time.value = currentTime
    setInterval(()=>{
      time.value--
    },1000)

  }
  return{
    formatTime,
    start
  }
}