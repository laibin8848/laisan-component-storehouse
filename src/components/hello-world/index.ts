import { App } from 'vue'
import helloWorld from './hello-world.vue'

helloWorld.install = (app: App)=> {
    app.component(helloWorld.name, helloWorld)
}

export default helloWorld