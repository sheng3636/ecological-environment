import Vue from 'vue'
import echarts from 'echarts'
// 存储localStorage
const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
// 获取localStorage
const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
// 删除localStorage
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
// 通过getDataURL()获取图片的base64编码字符；字符解码， 并转换成Blob对象；
const base64ToBlob = code => {
  let parts = code.split(';base64,')
  let contentType = parts[0].split(':')[1]
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;

  let uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], {
    type: contentType
  })
}
// 通过getDataURL将echarts图表导出为图片
const saveAsImage = (chart) => {
  let content = chart.getDataURL()
  let aLink = document.createElement('a')
  let blob = base64ToBlob(content)
  let evt = document.createEvent("HTMLEvents")
  evt.initEvent("click", true, true)
  aLink.download = "mapChart.png"
  aLink.href = URL.createObjectURL(blob)
  aLink.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  }))
}
export default {
  setStore,
  getStore,
  removeStore,
  base64ToBlob,
  saveAsImage
}
