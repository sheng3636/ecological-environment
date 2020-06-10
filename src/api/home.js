import request from '../utils/request'
// 获取文档上传下拉框数据
export function matchImgList() {
  return request({
    url: 'matchImgList',
    method: 'get'
  })
}
