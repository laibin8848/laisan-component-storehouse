import { App } from 'vue'
import QrCodeScaner from './components/scaner'
import helloWorld from './components/hello-world'

const components = [
  QrCodeScaner,
  helloWorld
] 
const install = (app: App)=> {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
export {
  QrCodeScaner,
  helloWorld,
  install
}
export default { install }