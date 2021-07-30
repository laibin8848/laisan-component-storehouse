import { BrowserQRCodeReader } from '@zxing/library'
const codeReader = new BrowserQRCodeReader()
let deviceID = null
const videowrapper = document.getElementById('videowrapper')

codeReader.getVideoInputDevices()
  .then(videoInputDevices => {
    if (videoInputDevices.length <= 0){
      throw Error('妹找到摄像头啊');
    }
    deviceID = videoInputDevices[0].deviceId
  })
  .catch(err => {
    console.log(err);
  })

  const decode = (codeReader, selectedDeviceId) => {
    videowrapper.style.display = "block"
    codeReader.decodeFromInputVideoDevice(selectedDeviceId, 'video')
    .then((result) => {
      document.getElementById("result").innerHTML = result.text
      codeReader.reset()
      videowrapper.style.display = "none"
    }).catch((err) => {
      document.getElementById("result").innerHTML = err.toString()
      codeReader.reset()
      videowrapper.style.display = "none"
    })
  }
  

  const clickme = document.getElementById('clickme')
  clickme.onclick = function() {
    decode(codeReader, deviceID)
  }

  const reset = document.getElementById('reset')
  reset.onclick = function() {
    codeReader.reset()
  }