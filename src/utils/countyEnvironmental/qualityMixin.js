import {
  getStructuralData,
  getScaleData,
  sectionNum,
  countySectionList
}
from '@/api/api'
import {
  getArrFirst,
  getArrLast,
  getTwoDiff
}
from '@/utils/mUtils.js'
export const qualityMixin = {
  data() {
    return {
    }
  },
  mounted() {
    // 0、获取一段年限内某地区空气质量达到优良天数比例变化数据并绘制图表
    getStructuralData({
      area: this.countyName,
      zbs: 'AQI优良率'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem1_0.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_0.dataSource = data.yAxis.source
      this.chartArr.sideItem1_0.xAxis = data.xAxis
      this.chartArr.sideItem1_0.chartArr[0].yAxis = data.yAxis.list

      this.barLineChart('sideItem1_0', this.chartArr.sideItem1_0)

      let aaa = getArrLast(this.chartArr.sideItem1_0.xAxis)
      let bbb = getArrLast(this.chartArr.sideItem1_0.chartArr[0].yAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_0.xAxis)
      let ddd = getTwoDiff(getArrFirst(this.chartArr.sideItem1_0.chartArr[0].yAxis), getArrLast(this.chartArr.sideItem1_0.chartArr[0].yAxis))
      let eee = ddd >= 0 ? '增长' : '减少'
      this.chartArr.sideItem1_0.title = `${ccc}年-${aaa}年${this.countyName}空气质量达到优良天数比例变化`
      this.chartArr.sideItem1_0.result = `${aaa}年，${this.countyName}空气质量达到优良天数比例达到<span class="light">${bbb}</span>%，与${ccc}年相比${eee}了<span class="light">${Math.abs(ddd).toFixed(1)}</span>%。 `
    })
    // 1、获取某年某市各县（市、区）空气质量达到优良天数比例并绘制图表
    getScaleData({
      area: this.cityName,
      zb: 'AQI优良率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_1.title = `${data.yAxis.year}年${this.cityName}各县（市、区）空气质量达到优良天数比例`
      this.chartArr.sideItem1_1.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_1.dataSource = data.yAxis.source
      this.chartArr.sideItem1_1.xAxis = data.xAxis
      this.chartArr.sideItem1_1.chartArr[0].yAxis = data.yAxis.list
      this.barLineChart('sideItem1_1', this.chartArr.sideItem1_1)

      let aaa = this.returnRepeatNumArr(this.chartArr.sideItem1_1.xAxis, this.chartArr.sideItem1_1.chartArr[0].yAxis, this.chartArr.sideItem1_1.chartArr[0].yAxis[this.chartArr.sideItem1_1.chartArr[0].yAxis.length - 1], 'max')
      let bbb = this.returnRepeatNumArr(this.chartArr.sideItem1_1.xAxis, this.chartArr.sideItem1_1.chartArr[0].yAxis, this.chartArr.sideItem1_1.chartArr[0].yAxis[0], 'min')
      this.chartArr.sideItem1_1.result = `${data.yAxis.year}年，${this.cityName}管辖的各县级城市中，${aaa.join()}空气质量达到优良天数比例最低，达到<span class="light">${getArrLast(this.chartArr.sideItem1_1.chartArr[0].yAxis)}</span>%；${bbb.join()}最高，为<span class="light">${this.chartArr.sideItem1_1.chartArr[0].yAxis[0]}</span>%。`
    })
    // 2、获取一段年限内某地区PM2.5年平均浓度（µg/m³）变化并绘制图表
    getStructuralData({
      area: this.countyName,
      zbs: 'PM2.5浓度'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem1_2.title = `${getArrFirst(data.xAxis)}年-${getArrLast(data.xAxis)}年${this.countyName}PM2.5年平均浓度（µg/m³）变化`
      this.chartArr.sideItem1_2.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_2.dataSource = data.yAxis.source
      this.chartArr.sideItem1_2.xAxis = data.xAxis
      this.chartArr.sideItem1_2.chartArr[0].yAxis = data.yAxis.list
      this.barLineChart('sideItem1_2', this.chartArr.sideItem1_2)

      let aaa = this.chartArr.sideItem1_2.chartArr[0].yAxis[this.chartArr.sideItem1_2.chartArr[0].yAxis.length - 1]
      let qualified = getTwoDiff(aaa, 35) > 0 ? '达到' : '不达到'
      this.chartArr.sideItem1_2.result = `${getArrLast(this.chartArr.sideItem1_2.xAxis)}年，${this.countyName}PM2.5浓度年均达到<span class="light">${aaa}</span>µg/m³，<span class="light">${qualified}</span>国家空气质量二级标准要求（35µg/m³）。`
    })

    // 3、获取某市各县（市、区）PM2.5年均浓度（µg/m³）对比并绘制图表
    getScaleData({
      area: this.cityName,
      zb: 'PM2.5浓度'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_3.title = `${data.yAxis.year}年${this.cityName}各县（市、区）PM2.5年均浓度（µg/m³）对比`
      this.chartArr.sideItem1_3.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_3.dataSource = data.yAxis.source
      this.chartArr.sideItem1_3.xAxis = data.xAxis
      this.chartArr.sideItem1_3.chartArr[0].yAxis = data.yAxis.list
      this.barLineChart('sideItem1_3', this.chartArr.sideItem1_3)

      let aaa = this.returnRepeatNumArr(this.chartArr.sideItem1_3.xAxis, this.chartArr.sideItem1_3.chartArr[0].yAxis, this.chartArr.sideItem1_3.chartArr[0].yAxis[this.chartArr.sideItem1_3.chartArr[0].yAxis.length - 1], 'max')
      let bbb = this.returnRepeatNumArr(this.chartArr.sideItem1_3.xAxis, this.chartArr.sideItem1_3.chartArr[0].yAxis, this.chartArr.sideItem1_3.chartArr[0].yAxis[0], 'min')
      this.chartArr.sideItem1_3.result = `${data.yAxis.year}年，${this.cityName}管辖的各县级城市中，${bbb.join()}PM2.5年均浓度最高，达到<span class="light">${this.chartArr.sideItem1_3.chartArr[0].yAxis[0]}</span>µg/m³；${aaa.join()}最低，达到<span class="light">${getArrLast(this.chartArr.sideItem1_3.chartArr[0].yAxis)}</span>µg/m³。`
    })

    // 4、各县（市、区）III类以上水质断面数量
    sectionNum({
      area: this.cityName
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_4.title = `${data.yAxis.year}年${this.cityName}各县（市、区）III类以上水质断面数量`
      this.chartArr.sideItem1_4.dataSource = '省生态环境厅'
      this.chartArr.sideItem1_4.xAxis = data.xAxis
      this.chartArr.sideItem1_4.chartArr[0].yAxis = data.yAxis.threeList
      this.chartArr.sideItem1_4.chartArr[1].yAxis = data.yAxis.numList
      this.barLineChart('sideItem1_4', this.chartArr.sideItem1_4)
      })
    
    // 5、获取某段年限某县区省控断面水质类型变化列表数据
    countySectionList({
      area: this.countyName,
      zbs: '生态环境指数'
    }).then(res => {
      
      if (res.data === '该区域下无水质断面') {
        this.chartArr.sideItem1_5.title = `${this.countyName}省控断面水质类型变化`
        this.chartArr.sideItem1_4.result = `<span class="light">暂无数据</span>`
        this.chartArr.sideItem1_5.dataSource = '暂无数据'
        return
      }
      
      let data = res.data
      this.chartArr.sideItem1_5.title = `${data.yAxis.data[0].name}年-${getArrLast(data.yAxis.data).name}年${this.countyName}省控断面水质类型变化`
      this.chartArr.sideItem1_5.dataSource = '省生态环境厅'
      this.chartArr.sideItem1_5.headData = data.xAxis
      this.chartArr.sideItem1_5.bodyData = data.yAxis.data
      let aaa = data.yAxis.numList[0].value
      let bbb = data.yAxis.numList[1].value
      let ccc = data.yAxis.numList[2].value
      let ddd = data.yAxis.numList[3].value
      let eee = data.yAxis.numList[4].value
      let fff = data.yAxis.numList[5].value

      let ggg = 0
      for (var i = 0; i < data.yAxis.numList.length; i++) {
        ggg += data.yAxis.numList[i].value
      }
      this.chartArr.sideItem1_4.result = `${data.yAxis.year}年，${this.countyName}<span class="light">${ggg}</span>个省控水质断面中，I类<span class="light">${aaa}</span>个，II类<span class="light">${bbb}</span>个，III类<span class="light">${ccc}</span>个，IV类<span class="light">${ddd}</span>个，V类<span class="light">${eee}</span>个，劣IV类<span class="light">${fff}</span>个。`
    })
  },
  methods: {
    // 导出各省控断面水质类型
    exportType() {
      window.open(this.baseUrl + '/section/exportCountySection?area=' + this.countyName, '_self')
    }
  }
}