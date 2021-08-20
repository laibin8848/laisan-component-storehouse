import vueScaner from './vue-scaner.vue'

const install = function(Vue) {
    Vue.components(vueScaner.name, vueScaner)
}

export {
    install,
    vueScaner
}