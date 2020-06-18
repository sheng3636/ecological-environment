import request from '../utils/request'
export function getStructuralData(params) {
  return request({
    url: 'ecological/getStructuralData',
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