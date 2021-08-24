import { App } from 'vue'
import scaner from './scaner.vue'

scaner.install = (app: App)=> {
    app.component(scaner.name, scaner)
}

export default scaner