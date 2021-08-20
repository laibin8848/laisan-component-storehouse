import vueScaner from './vue-scaner.vue'

const install = function(Vue) {
    Vue.component(vueScaner.name, vueScaner)
}

export default {
    install,
    vueScaner
}