import request from '../utils/request'
// get请求封装
export function apiGet(url, params) {
  return request.service({
    url: url,
    params
  })
}
// axios.all()解决并发请求
export const axiosAll = (fnArr) => {
  return new Promise((resolve, reject) => {
    request.sendAll(fnArr).then(resArr => {
      return resolve(resArr)
    })
  })
}
// 获取某地区的上一级行政区域
export function getSuperior(params) {
  return request.service({
    url: 'zone/getSuperior',
    params
  })
}
// 保存反馈意见
export function feedbackSave(data) {
  return request.service({
    url: 'feedback/save',
    method: 'post',
    data
  })
}
export function getStructuralData(params) {
  return request.service({
    url: 'ecological/getStructuralData',
    params
  })
}
export function getRankDiff(params) {
  return request.service({
    url: 'ecological/getRankDiff',
    params
  })
}
export function getStrengthVerdict(params) {
  return request.service({
    url: 'verdict/getStrengthVerdict',
    params
  })
}
export function getSubStructuralData(params) {
  return request.service({
    url: 'ecological/getSubStructuralData',
    params
  })
}
export function getScaleData(params) {
  return request.service({
    url: 'ecological/getScaleData',
    params
  })
}
export function getScaleDataWithName(params) {
  return request.service({
    url: 'ecological/getScaleDataWithName',
    params
  })
}
export function getStrength(params) {
  return request.service({
    url: 'ecological/getStrength',
    params
  })
}
export function countySectionList(params) {
  return request.service({
    url: 'section/countySectionList',
    params
  })
}
// 市各县市区生态环境状况等级和省内排名
export function getEIList(params) {
  return request.service({
    url: 'ecological/getEIList',
    params
  })
}
export function sectionNum(params) {
  return request.service({
    url: 'section/sectionNum',
    params
  })
}
export function sectionProportion(params) {
  return request.service({
    url: 'section/sectionProportion',
    params
  })
}
export function sectionList(params) {
  return request.service({
    url: 'section/sectionList',
    params
  })
}
export function savePic(data) {
  return request.service({
    url: 'section/savePic',
    method: 'post',
    data
  })
}
export function getEIWithName(params) {
  return request.service({
    url: 'ecological/getEIWithName',
    params
  })
}
export function exportWord(data) {
  return request.service({
    url: 'section/exportWord',
    method: 'post',
    responseType: 'blob',
    data
  })
}


export function getStructuralData1(params) {
  return request.service({
    url: 'people/getStructuralData',
    params
  })
}
export function getScaleDataWithName1(params) {
  return request.service({
    url: 'people/getScaleDataWithName',
    params
  })
}
export function getScaleDataMultiZb(params) {
  return request.service({
    url: 'people/getScaleDataMultiZb',
    params
  })
}
export function getScaleData1(params) {
  return request.service({
    url: 'people/getScaleData',
    params
  })
}
export function getMultiZoneData(params) {
  return request.service({
    url: 'people/getMultiZoneData',
    params
  })
}
export function getPopulationData(params) {
  return request.service({
    url: 'people/getPopulationData',
    params
  })
}
export function getIncrementMultiZb(params) {
  return request.service({
    url: 'people/getIncrementMultiZb',
    params
  })
}
export function getSubStructuralData1(params) {
  return request.service({
    url: 'people/getSubStructuralData',
    params
  })
}
export function getIncrementData(params) {
  return request.service({
    url: 'people/getIncrementData',
    params
  })
}