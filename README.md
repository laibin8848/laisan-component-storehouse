# laisan-component-storehouse 一个私人的业务组件存放仓库

## 项目已发布至npmjs
```
执行命令将组件库依赖添加至项目中
npm install laisan-component-storehouse -S

组件引入方式
1，全局引入
1.1，在main.js添加如下代码组件全局组件
import lsComponents from 'laisan-component-storehouse';
import 'laisan-component-storehouse/dist/bundle.css';
app.use(lsComponents);

1.2，使用组件
<ls-qr-code-scaner v-show="!scanDone" ref="scanerRef" v-model="scanRes" style="width: 100%;height: 100vh;" />

2，局部引入及使用方式
<template>
<qr-code-scaner v-show="!scanDone" ref="scanerRef" v-model="scanRes" style="width: 100%;height: 100vh;" />
</template>
<script>
import { QrCodeScaner } from 'laisan-component-storehouse';
import 'laisan-component-storehouse/dist/bundle.css';

export default defineComponent({
  name: 'demo',
  components: {
      [QrCodeScaner.name]: QrCodeScaner
  },
  setup() {
    const scanerRef = ref(null)
    const scanRes = ref(null)
    const scanDone = ref(false)

    onMounted(()=> {
      setTimeout(()=> {
        scanerRef.value.startScan()
      },0)
    })

    onBeforeUnmount(()=> {
      scanerRef.value.reset()
    })

    watch(scanRes, ()=> {
      if(scanRes) {
        scanDone.value = true
      }
    })

    return {
      scanRes,
      scanDone,
      scanerRef
    }
  }
})
</script>


```

## 说明
```

仓库中暂时只添加了一个VUE3的组件，因此暂时只能在VUE3的项目中使用，现在只发布了一个二维码扫描组件，后续再继续添加。

```

## vue3，qrcode scaner，二维码扫描组件。使用方法

```
<template>
<qr-code-scaner v-show="!scanDone" ref="scanerRef" v-model="scanRes" style="width: 100%;height: 100vh;" />
</template>
<script>
import { QrCodeScaner } from 'laisan-component-storehouse';
import 'laisan-component-storehouse/dist/bundle.css';

export default defineComponent({
  name: 'demo',
  components: {
      [QrCodeScaner.name]: QrCodeScaner
  },
  setup() {
    const scanerRef = ref(null)
    const scanRes = ref(null)
    const scanDone = ref(false)

    onMounted(()=> {
      setTimeout(()=> {
        scanerRef.value.startScan()
      },0)
    })

    onBeforeUnmount(()=> {
      scanerRef.value.reset()
    })

    watch(scanRes, ()=> {
      if(scanRes) {
        scanDone.value = true
      }
    })

    return {
      scanRes,
      scanDone,
      scanerRef
    }
  }
})
</script>


```


