import { App } from 'vue'
import scaner from './scaner.vue'

scaner.install = (app: App)=> {
    app.component('ls-' + scaner.name, scaner)
}

export default scaner