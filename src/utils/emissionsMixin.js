import {
  getStructuralData,
  getScaleData,
  getScaleDataWithName,
  getStrength,
  getStrengthVerdict
}
from '@/api/environmentalQuality'
export const emissionsMixin = {
  data() {
    return {}
  },
  mounted() {
    getStrengthVerdict({
      area: this.cityName,
      zb: '化学需氧量排放总量'
    }).then(res => {
      console.log(res)
      let data = res.data
      let diffTxt = data.diff >= 0 ? '增加' : '减少'
      let aaa = ((res.data.value / res.data.total) * 100).toFixed(2)
      let bbb = (((res.data.strength - res.data.avgStrength) / res.data.avgStrength) * 100).toFixed(2)
      let ggg = bbb > 0 ? '需加大减排力度' : bbb === 0 ? '与上次相比维持不变' : '减排成效较好'
      let hhh = bbb > 0 ? '高于' : bbb === 0 ? '等于' : '低于'
      this.chartArr.sideItem3_0.result = `${data.endYear}年${this.cityName}化学需氧量排放量比${data.startYear}年${diffTxt}<span class="light">${Math.abs(data.diff)}</span>吨，排放总量占全省的<span class="light">${aaa}</span>%，排放强度${hhh}全省平均水平<span class="light">${Math.abs(bbb)}</span>%，${ggg}。`
    })
    getStrengthVerdict({
      area: this.cityName,
      zb: '氨氮排放总量'
    }).then(res => {
      let data = res.data
      let diffTxt = data.diff >= 0 ? '增加' : '减少'
      let aaa = ((res.data.value / res.data.total) * 100).toFixed(2)
      let bbb = (((res.data.strength - res.data.avgStrength) / res.data.avgStrength) * 100).toFixed(2)
      let ggg = bbb > 0 ? '需加大减排力度' : bbb === 0 ? '与上次相比维持不变' : '减排成效较好'
      let hhh = bbb > 0 ? '高于' : bbb === 0 ? '等于' : '低于'
      this.chartArr.sideItem3_1.result = `${data.endYear}年${this.cityName}氨氮排放量比${data.startYear}年${diffTxt}<span class="light">${Math.abs(data.diff)}</span>吨，排放总量占全省的<span class="light">${aaa}</span>%，排放强度${hhh}全省平均水平<span class="light">${Math.abs(bbb)}</span>%，${ggg}。`
    })
    getStrengthVerdict({
      area: this.cityName,
      zb: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      let diffTxt = data.diff >= 0 ? '增加' : '减少'
      let aaa = ((res.data.value / res.data.total) * 100).toFixed(2)
      let bbb = (((res.data.strength - res.data.avgStrength) / res.data.avgStrength) * 100).toFixed(2)
      let ggg = bbb > 0 ? '需加大减排力度' : bbb === 0 ? '与上次相比维持不变' : '减排成效较好'
      let hhh = bbb > 0 ? '高于' : bbb === 0 ? '等于' : '低于'
      this.chartArr.sideItem3_2.result = `${data.endYear}年${this.cityName}二氧化硫区排放量比${data.startYear}年${diffTxt}<span class="light">${Math.abs(data.diff)}</span>吨，排放总量占全省的<span class="light">${aaa}</span>%，排放强度${hhh}全省平均水平<span class="light">${Math.abs(bbb)}</span>%，${ggg}。`
    })
    getStrengthVerdict({
      area: this.cityName,
      zb: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      let diffTxt = data.diff >= 0 ? '增加' : '减少'
      let aaa = ((res.data.value / res.data.total) * 100).toFixed(2)
      let bbb = (((res.data.strength - res.data.avgStrength) / res.data.avgStrength) * 100).toFixed(2)
      let ggg = bbb > 0 ? '需加大减排力度' : bbb === 0 ? '与上次相比维持不变' : '减排成效较好'
      let hhh = bbb > 0 ? '高于' : bbb === 0 ? '等于' : '低于'
      this.chartArr.sideItem3_3.result = `${data.endYear}年${this.cityName}氮氧化物排放量比${data.startYear}年${diffTxt}<span class="light">${Math.abs(data.diff)}</span>吨，排放总量占全省的<span class="light">${aaa}</span>%，排放强度${hhh}全省平均水平<span class="light">${Math.abs(bbb)}</span>%，${ggg}。`
    })
    // 0、获取市化学需氧量排放总量变化并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_0.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}化学需氧量排放总量变化`
      this.chartArr.sideItem3_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_0.dataSource = data.yAxis.source
      this.chartArr.sideItem3_0.xAxis = data.xAxis
      this.chartArr.sideItem3_0.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_0', this.chartArr.sideItem3_0)
    })
    // 1、获取年全省各地市化学需氧量排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_1.title = `${data.yAxis.year}年全省各地市化学需氧量排放总量`
      this.chartArr.sideItem3_1.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_1.dataSource = data.yAxis.source
      this.chartArr.sideItem3_1.xAxis = data.xAxis
      this.chartArr.sideItem3_1.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_1', this.chartArr.sideItem3_1)
    })
    // 2、年全省各地市化学需氧量排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data[0]
      let list = data.list

      this.chartArr.sideItem3_2.list = list
      this.chartArr.sideItem3_2.unit = data.unit
      this.chartArr.sideItem3_2.title = `${data.year}年全省各地市化学需氧量排放总量占比`
      this.chartArr.sideItem3_2.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_2.dataSource = data.source
      for (let i = 0; i < list.length; i++) {
        this.chartArr.sideItem3_2.legends.push(list[i].name)
      }
      this.pieChart('sideItem3_2', this.chartArr.sideItem3_2)
    })
    // 3、获取年全省各地市化学需氧量排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_3.title = `${data.yAxis.year}年全省各地市化学需氧量排放强度`
      this.chartArr.sideItem3_3.xAxis = data.xAxis
      this.chartArr.sideItem3_3.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_3', this.chartArr.sideItem3_3)
    })

    // 4、获取全省各地市氨氮排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '氨氮排放总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_4.title = `${data.yAxis.year}年全省各地市氨氮排放总量`
      this.chartArr.sideItem3_4.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_4.dataSource = data.yAxis.source
      this.chartArr.sideItem3_4.xAxis = data.xAxis
      this.chartArr.sideItem3_4.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_4', this.chartArr.sideItem3_4)
    })
    // 5、获取市化学需氧量排放总量变化并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '氨氮排放总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_5.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}氨氮排放总量变化`
      this.chartArr.sideItem3_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_5.dataSource = data.yAxis.source
      this.chartArr.sideItem3_5.xAxis = data.xAxis
      this.chartArr.sideItem3_5.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_5', this.chartArr.sideItem3_5)
    })
    // 6、年全省各地市氨氮排放总量占比
    getScaleDataWithName({
      area: '浙江省',
      zbs: '氨氮排放总量'
    }).then(res => {
      let data = res.data[0]
      let list = data.list
      this.chartArr.sideItem3_6.list = list
      this.chartArr.sideItem3_6.unit = data.unit
      this.chartArr.sideItem3_6.title = `${data.year}年全省各地市氨氮排放总量占比`
      this.chartArr.sideItem3_6.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_6.dataSource = data.source
      for (let i = 0; i < list.length; i++) {
        this.chartArr.sideItem3_6.legends.push(list[i].name)
      }
      this.pieChart('sideItem3_6', this.chartArr.sideItem3_6)
    })
    // 7、获取年全省各地市氨氮排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '氨氮排放总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_7.title = `${data.yAxis.year}年全省各地市氨氮排放强度`
      this.chartArr.sideItem3_7.xAxis = data.xAxis
      this.chartArr.sideItem3_7.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_7', this.chartArr.sideItem3_7)
    })

    // 8、获取年全省各地市二氧化硫排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_8.title = `${data.yAxis.year}年全省各地市二氧化硫排放总量`
      this.chartArr.sideItem3_8.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_8.dataSource = data.yAxis.source
      this.chartArr.sideItem3_8.xAxis = data.xAxis
      this.chartArr.sideItem3_8.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_8', this.chartArr.sideItem3_8)
    })
    // 9、获取市二氧化硫排放总量变化并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_9.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}二氧化硫排放总量变化`
      this.chartArr.sideItem3_9.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_9.dataSource = data.yAxis.source
      this.chartArr.sideItem3_9.xAxis = data.xAxis
      this.chartArr.sideItem3_9.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_9', this.chartArr.sideItem3_9)
    })
    // 10、年全省各地市二氧化硫排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data[0]
      let list = data.list
      this.chartArr.sideItem3_10.list = list
      this.chartArr.sideItem3_10.unit = data.unit
      this.chartArr.sideItem3_10.title = `${data.year}年全省各地市二氧化硫排放总量占比`
      this.chartArr.sideItem3_10.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_10.dataSource = data.source
      for (let i = 0; i < list.length; i++) {
        this.chartArr.sideItem3_10.legends.push(list[i].name)
      }
      this.pieChart('sideItem3_10', this.chartArr.sideItem3_10)
    })
    // 11、获取年全省各地市二氧化硫排放并绘制图表
    getStrength({
      area: '浙江省',
      zb: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_11.title = `${data.yAxis.year}年全省各地市二氧化硫排放强度`
      this.chartArr.sideItem3_11.xAxis = data.xAxis
      this.chartArr.sideItem3_11.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_11', this.chartArr.sideItem3_11)
    })


    // 12、获取年全省各地市化学需氧量排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_12.title = `${data.yAxis.year}全省各地市氮氧化物排放总量`
      this.chartArr.sideItem3_12.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_12.dataSource = data.yAxis.source
      this.chartArr.sideItem3_12.xAxis = data.xAxis
      this.chartArr.sideItem3_12.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_12', this.chartArr.sideItem3_12)
    })
    // 13、获取年全省各地市氮氧化物排放总量并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_13.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}氮氧化物排放总量变化`
      this.chartArr.sideItem3_13.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_13.dataSource = data.yAxis.source
      this.chartArr.sideItem3_13.xAxis = data.xAxis
      this.chartArr.sideItem3_13.yAxis = data.yAxis.list
      this.chartArr.sideItem3_13.unit = data.unit
      this.singleBarLineChart('sideItem3_13', this.chartArr.sideItem3_13)
    })
    // 14、年全省各地市氮氧化物排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_14.list = data.list
      this.chartArr.sideItem3_14.unit = data.unit
      this.chartArr.sideItem3_14.title = `${data.year}年全省各地市氮氧化物排放总量占比`
      this.chartArr.sideItem3_14.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_14.dataSource = data.source
      for (let i = 0; i < data.list.length; i++) {
        this.chartArr.sideItem3_14.legends.push(data.list[i].name)
      }
      this.pieChart('sideItem3_14', this.chartArr.sideItem3_14)
    })
    // 16、获取年全省各地市氮氧化物排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_15.title = `${data.yAxis.year}年全省各地市氮氧化物排放强度`
      this.chartArr.sideItem3_15.xAxis = data.xAxis
      this.chartArr.sideItem3_15.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem3_15', this.chartArr.sideItem3_15)
    })
  },
  methods: {}
}