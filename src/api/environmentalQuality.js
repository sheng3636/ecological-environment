import request from '../utils/request'
export function getStructuralData(params) {
  return request({
    url: 'ecological/getStructuralData',
    method: 'get',
    params
  })
}
export function getRankDiff(params) {
  return request({
    url: 'ecological/getRankDiff',
    method: 'get',
    params
  })
}
export function getStrengthVerdict(params) {
  return request({
    url: 'verdict/getStrengthVerdict',
    method: 'get',
    params
  })
}
export function getSubStructuralData(params) {
  return request({
    url: 'ecological/getSubStructuralData',
    method: 'get',
    params
  })
}
export function getScaleData(params) {
  return request({
    url: 'ecological/getScaleData',
    method: 'get',
    params
  })
}
export function getScaleDataWithName(params) {
  return request({
    url: 'ecological/getScaleDataWithName',
    method: 'get',
    params
  })
}
export function getStrength(params) {
  return request({
    url: 'ecological/getStrength',
    method: 'get',
    params
  })
}
export function countySectionList(params) {
  return request({
    url: 'section/countySectionList',
    method: 'get',
    params
  })
}
// 市各县市区生态环境状况等级和省内排名
export function getEIList(params) {
  return request({
    url: 'ecological/getEIList',
    method: 'get',
    params
  })
}
export function sectionNum(params) {
  return request({
    url: 'section/sectionNum',
    method: 'get',
    params
  })
}
export function sectionProportion(params) {
  return request({
    url: 'section/sectionProportion',
    method: 'get',
    params
  })
}
export function sectionList(params) {
  return request({
    url: 'section/sectionList',
    method: 'get',
    params
  })
}
export function savePic(data) {
  return request({
    url: 'section/savePic',
    method: 'post',
    data
  })
}
export function getEIWithName(params) {
  return request({
    url: 'ecological/getEIWithName',
    method: 'get',
    params
  })
}
export function exportWord(data) {
  return request({
    url: 'section/exportWord',
    method: 'post',
    responseType: 'blob',
    data
  })
}
export function feedbackSave(data) {
  return request({
    url: 'feedback/save',
    method: 'post',
    data
  })
}


export function getStructuralData1(params) {
  return request({
    url: 'people/getStructuralData',
    method: 'get',
    params
  })
}
export function getScaleDataWithName1(params) {
  return request({
    url: 'people/getScaleDataWithName',
    method: 'get',
    params
  })
}
export function getScaleDataMultiZb(params) {
  return request({
    url: 'people/getScaleDataMultiZb',
    method: 'get',
    params
  })
}
export function getScaleData1(params) {
  return request({
    url: 'people/getScaleData',
    method: 'get',
    params
  })
}
export function getMultiZoneData(params) {
  return request({
    url: 'people/getMultiZoneData',
    method: 'get',
    params
  })
}
export function getPopulationData(params) {
  return request({
    url: 'people/getPopulationData',
    method: 'get',
    params
  })
}
export function getIncrementMultiZb(params) {
  return request({
    url: 'people/getIncrementMultiZb',
    method: 'get',
    params
  })
}


