import {
  getPopulationData,
  getScaleDataMultiZb,
  getIncrementMultiZb
}
from '@/api/environmentalQuality'
export const distributionMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、获取某年各地市人口净流入情况（万人）数据并绘制图表
    getPopulationData({
      area: '浙江省',
      zb: '人口净流入'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem4_0.title = `${data.yAxis.year}年各地市人口净流入情况（万人）`
      this.chartArr.sideItem4_0.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem4_0.dataSource = data.yAxis.source
      this.chartArr.sideItem4_0.xAxis = data.xAxis
      this.chartArr.sideItem4_0.chartArr[0].yAxis = data.yAxis.list
      this.barLineChart('sideItem4_0', this.chartArr.sideItem4_0)
    })
    // 1、获取某年某地区各地市常住和户籍人口增量（万人）数据并绘制图表
    getIncrementMultiZb({
      area: '浙江省',
      zbs: '户籍人口,年末常住人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem4_1.title = `${data.yAxis[0].year}年各地市常住和户籍人口增量（万人）`
      this.chartArr.sideItem4_1.xAxis = data.xAxis
      this.chartArr.sideItem4_1.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem4_1.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem4_1.dataSource = data.yAxis[0].source
      this.chartArr.sideItem4_1.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem4_1.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem4_1', this.chartArr.sideItem4_1)
    })
    // 2、获取某年各地市人口机械变动数据并绘制图表
    getScaleDataMultiZb({
      area: '浙江省',
      zbs: '迁入人数,迁出人数,净迁入人数'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem4_2.title = `2018年各地市人口机械变动`
      this.chartArr.sideItem4_2.xAxis = data.xAxis
      this.chartArr.sideItem4_2.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem4_2.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem4_2.chartArr[2].name = `${data.yAxis[2].name}(${data.yAxis[2].unit})`
      this.chartArr.sideItem4_2.dataSource = data.yAxis[0].source
      this.chartArr.sideItem4_2.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem4_2.chartArr[1].yAxis = data.yAxis[1].list
      this.chartArr.sideItem4_2.chartArr[2].yAxis = data.yAxis[2].list
      this.barLineChart('sideItem4_2', this.chartArr.sideItem4_2)
    })
    // 3、获取某年各县（市，区）人口机械变动数据并绘制图表
    getScaleDataMultiZb({
      area: '浙江省',
      zbs: '迁入人数,迁出人数,净迁入人数'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem4_3.title = `${data.yAxis[0].year}${this.cityName}各县（市，区）人口机械变动`
      this.chartArr.sideItem4_3.xAxis = data.xAxis
      this.chartArr.sideItem4_3.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem4_3.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem4_3.chartArr[2].name = `${data.yAxis[2].name}(${data.yAxis[2].unit})`
      this.chartArr.sideItem4_3.dataSource = data.yAxis[0].source
      this.chartArr.sideItem4_3.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem4_3.chartArr[1].yAxis = data.yAxis[1].list
      this.chartArr.sideItem4_3.chartArr[2].yAxis = data.yAxis[2].list
      this.barLineChart('sideItem4_3', this.chartArr.sideItem4_3)
    })
  },
  methods: {

  }
}