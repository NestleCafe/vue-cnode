import Vue from 'vue'

export default function timeToNow(date){
    return Vue.prototype.$dayjs(date).toNow().replace('内', '前')
}