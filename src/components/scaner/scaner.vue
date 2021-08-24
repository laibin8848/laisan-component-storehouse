<template>
  <div class="__scaner">
    <div class="__scaner_layer">
      <img src="@/assets/scaner/scan_bg.gif" width="200" />
    </div>
    <video id="video" class="video" />
  </div>
</template>
<script>
  import { BrowserQRCodeReader } from '@zxing/library'
  const codeReader = new BrowserQRCodeReader()
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'qr-code-scaner',
    data() {
      return {
        devices: [],
        deviceId: null
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    created() {
      codeReader.getVideoInputDevices().then(videoInputDevices => {
        this.devices = videoInputDevices
        if (videoInputDevices.length <= 0) {
          throw Error('没找到摄像头啊')
        }
        if (videoInputDevices.length == 1) {
          this.deviceId = videoInputDevices[0].deviceId
        } else if (videoInputDevices > 1) {
          this.deviceId = videoInputDevices[1].deviceId
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    methods: {
      startScan() {
        codeReader.decodeFromInputVideoDevice(this.deviceId, 'video').then(result=> {
          this.reset()
          this.$emit('update:modelValue', result.text)//for vue3
          this.$emit('scan-done', result.text)
        })
      },
      reset() {
        codeReader.reset()
      }
    }
  })
</script>
<style scoped>
  .__scaner {
    position: relative;
    background: #000;
  }
  .__scaner_layer {
    position: absolute;
    width: 100%;
    height: 100vh;
    text-align: center;
    padding-top: 130px;
    background: rgba(0, 0, 0, 0.4);
  }
</style>
