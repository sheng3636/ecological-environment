import {
  getScaleData,
  axiosAll
}
from '@/api/api'
export const resourcesMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、获取某年某市各区县（市）森林覆盖率并绘制图表
    // 1、获取某年某市各区县（市）单位面积森林蓄积量并绘制图表
    let resourceFuncArr = [this.resourceAll1(), this.resourceAll2()]
    axiosAll(resourceFuncArr).then(res => {
      let data = res[0].data
      this.chartArr.sideItem2_0.title = `${data.yAxis.year}年${this.cityName}各县（市、区）森林覆盖率`
      this.chartArr.sideItem2_0.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem2_0.dataSource = data.yAxis.source
      this.chartArr.sideItem2_0.xAxis = data.xAxis
      this.chartArr.sideItem2_0.chartArr[0].yAxis = data.yAxis.list
      this.barLineChart('sideItem2_0', this.chartArr.sideItem2_0)

      let aaa = data.xAxis.indexOf(this.countyName)
      if (aaa < 0) {
        aaa = data.xAxis.indexOf(this.cityName + '区')
      }
      let data1 = res[1].data
      this.chartArr.sideItem2_1.title = `${data1.yAxis.year}年${this.cityName}各县（市、区）单位面积森林蓄积量`
      this.chartArr.sideItem2_1.chartArr[0].name = `${data1.yAxis.name}(${data1.yAxis.unit})`
      this.chartArr.sideItem2_1.dataSource = data1.yAxis.source
      this.chartArr.sideItem2_1.xAxis = data1.xAxis
      this.chartArr.sideItem2_1.chartArr[0].yAxis = data1.yAxis.list
      this.barLineChart('sideItem2_1', this.chartArr.sideItem2_1)

      let ccc = data1.xAxis.indexOf(this.countyName)
      if (ccc < 0) {
        ccc = data1.xAxis.indexOf(this.cityName + '区')
      }
      this.chartArr.sideItem2_0.result = `${this.countyName}森林覆盖率为<span class="light">${this.chartArr.sideItem2_0.chartArr[0].yAxis[aaa]}</span>%，单位面积森林蓄积量<span class="light">${data1.yAxis.list[ccc]}</span>立方米/公顷。`
    })
  },
  methods: {
    resourceAll1() {
      return getScaleData({
        area: this.cityName,
        zb: '森林覆盖率'
      })
    },
    resourceAll2() {
      return getScaleData({
        area: this.cityName,
        zb: '单位面积森林蓄积量'
      })
    }
  }
}