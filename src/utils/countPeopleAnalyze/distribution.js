import {
  getSubStructuralData1,
  getIncrementData
}
from '@/api/api'
export const distributionMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年年末常住人口数据并绘制地图
    getSubStructuralData1({
      area: this.cityName,
      zb: '年末常住人口'
    }).then(res => {
      let data = res.data
      
      this.chartArr.sideItem3_0.title = '2015-2018年常住人口'
      this.chartArr.sideItem3_0.listObj.unit = '单位：人'
      this.chartArr.sideItem3_0.listObj.data = data.yAxis.data
      this.createTimeMap('sideItem3_0', this.chartArr.sideItem3_0.listObj)
    })
    //  1、 获取某年户籍人口数据并绘制地图
    getSubStructuralData1({
      area: this.cityName,
      zb: '户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_1.title = '2015-2018年户籍人口'
      this.chartArr.sideItem3_1.listObj.unit = '单位：人'
      this.chartArr.sideItem3_1.listObj.data = data.yAxis.data
      this.createTimeMap('sideItem3_1', this.chartArr.sideItem3_1.listObj)
    })
    // 2、 获取某年常驻总人口数据并绘制地图
    getSubStructuralData1({
      area: this.cityName,
      zb: '常驻总人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_2.title = '2015-2018年常驻人口'
      this.chartArr.sideItem3_2.listObj.unit = '单位：人'
      this.chartArr.sideItem3_2.listObj.data = data.yAxis.data
      this.createTimeMap('sideItem3_2', this.chartArr.sideItem3_2.listObj)
    })
    // 3、 获取某年某地与全省户籍人口人口增量动态比较数据并绘制地图
    getIncrementData({
      area: this.cityName,
      zb: '户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_3.title = `2015-2018年${this.cityName}与全省户籍人口人口增量动态比较`
      this.chartArr.sideItem3_3.listObj.unit = '单位：人'
      this.chartArr.sideItem3_3.listObj.data = data.yAxis.data
      this.createTimeMap('sideItem3_3', this.chartArr.sideItem3_3.listObj)
    })
    // 4、 获取某年某地与全省常住人口增量动态比较数据并绘制地图
    getIncrementData({
      area: this.cityName,
      zb: '年末常住人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_4.title = `2015-2018年${this.cityName}与全省常住人口增量动态比较`
      this.chartArr.sideItem3_4.listObj.unit = '单位：人'
      this.chartArr.sideItem3_4.listObj.data = data.yAxis.data
      this.createTimeMap('sideItem3_4', this.chartArr.sideItem3_4.listObj)
    })
  },
  methods: {

  }
}