import {
  apiGet,
  axiosAll
}
from '@/api/api'
import {
  getArrFirst,
  getArrLast,
  getArrAvg
}
from '@/utils/mUtils.js'
export const benefitMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年限内某地区规上工业亩均税收变化并绘制图表
    apiGet(
      '/statistics/getMultiZoneData', {
        startYear: 2017,
        endYear: 2018,
        areas: [this.countyName, this.cityName, '浙江省'].join(','),
        zb: '规上工业亩均税收（万元/亩）'
      }).then(res => {
      let data = res.data
      let aaa = getArrFirst(data.xAxis)
      let ccc = getArrLast(data.xAxis)
      this.chartArr.sideItem5_0.title = `${aaa}年-${ccc}年${this.cityName}规上工业亩均税收变化`
      this.chartArr.sideItem5_0.chartArr[0].name = `${this.countyName}（万元/亩）`
      this.chartArr.sideItem5_0.chartArr[1].name = `${this.cityName}（万元/亩）`
      this.chartArr.sideItem5_0.chartArr[2].name = `浙江省（万元/亩）`
      this.chartArr.sideItem5_0.xAxis = data.xAxis
      this.chartArr.sideItem5_0.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem5_0.chartArr[1].yAxis = data.yAxis[1].list
      this.chartArr.sideItem5_0.chartArr[2].yAxis = data.yAxis[2].list
      this.barLineChart('sideItem5_0', this.chartArr.sideItem5_0)

      let list = data.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld).toFixed(2)

      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比增长<span class="light">${diff}</span>（万元/亩）` : `同比下降<span class="light">${Math.abs(diff)}</span>（万元/亩）`

      this.chartArr.sideItem5_0.result = `${ccc}年，${this.countyName}规上工业亩均税收达到<span class="light">${value1}</span>（万元/亩）， 较上年${change1}。`
    })
    // 1、 获取某年某地区全省各地市市规上工业亩均税收对比并绘制图表
    let countyBenefitArr1 = []
    countyBenefitArr1.push(this.getCountyBenefit1())
    countyBenefitArr1.push(this.getCountyBenefit2())

    axiosAll(countyBenefitArr1).then(res => {
      let data1 = res[0].data
      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)
      this.chartArr.sideItem5_1.title = `${year}年${this.cityName}各县（市、区）规上工业亩均税收对比`
      this.chartArr.sideItem5_1.chartArr[0].name = `${data1.yAxis[0].name}`
      this.chartArr.sideItem5_1.xAxis = data1.xAxis
      this.chartArr.sideItem5_1.chartArr[0].yAxis = list
      this.chartArr.sideItem5_1.chartArr[1].name = `全市平均值(${avg}${data1.yAxis[0].unit})`
      this.chartArr.sideItem5_1.chartArr[1].markLine.data[0].yAxis = avg
      this.barLineChart('sideItem5_1', this.chartArr.sideItem5_1)


      let index = data1.xAxis.indexOf(this.countyName)
      let value = list[index]
      let diff = (value - avg).toFixed(2)
      let avgStr = (diff == 0) ? `与全市平均水平持平` : diff > 0 ? `高于全市平均水平` : `低于全市平均水平`

      let data2 = res[1].data
      let rank = data2.table[0]
      let rankStr = ''

      if(rank.changeVal === undefined){
        rankStr = `暂无上年排名数据`
      }else{
        rankStr = rank.changeVal == 0 ? `排名较上年<span class="light">维持不变</span>` : rank.changeVal > 0 ? `排名较上年上升<span class="light">${rank.changeVal}</span>位` : `排名较上年下降<span class="light">${Math.abs(rank.changeVal)}</span>位`
      }

      this.chartArr.sideItem5_1.result = `${year}年，${this.countyName}规上工业亩均税收${avgStr}，在全市排第<span class="light">${index + 1}</span>位， ${rankStr}。`
    })

    let countyBenefitArr2 = []
    countyBenefitArr2.push(this.getCountyBenefit3())
    countyBenefitArr2.push(this.getCountyBenefit4())

    // 2、 获取某年全省各县（市、区）空气质量达到优良天数比例对比并绘制图表
    axiosAll(countyBenefitArr2).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem5_2.title = `2018年全省各县（市、区）规上工业亩均税收对比`
      this.chartArr.sideItem5_2.xAxis = data1.xData
      this.chartArr.sideItem5_2.chartArr[0].yAxis = data1.yData
      this.chartArr.sideItem5_2.list = data1.yData
      this.chartArr.sideItem5_2.list = data1.Table
      this.dataZoomChart('sideItem5_2', this.chartArr.sideItem5_2)

      let list = data1.yData
      let index = data1.xData.indexOf(this.countyName)
      let value = list[index]
      let avg = getArrAvg(list)
      let diff = (value - avg).toFixed(2)
      let avgStr = (diff == 0) ? `与全省平均水平持平` : diff > 0 ? `高于全省平均水平` : `低于全省平均水平`

      let data2 = res[1].data
      let rank = data2.table[0]
      let rankStr = ''

      if(rank.changeVal === undefined){
        rankStr = `暂无上年排名数据`
      }else{
        rankStr = rank.changeVal == 0 ? `排名较上年<span class="light">维持不变</span>` : rank.changeVal > 0 ? `排名较上年上升<span class="light">${rank.changeVal}</span>位` : `排名较上年下降<span class="light">${Math.abs(rank.changeVal)}</span>位`
      }
      this.chartArr.sideItem5_2.result = `2018年，${this.countyName}规上工业亩均税收${avgStr}， 在全省排第<span class="light">${index + 1}</span>位， ${rankStr}。`
    })

    // 3、 获取某年限内某地区单位建设用地生产总值变化并绘制图表
    apiGet(
      '/statistics/getMultiZoneData', {
        startYear: 2017,
        endYear: 2018,
        areas: [this.countyName, this.cityName, '浙江省'].join(','),
        zb: '单位建设用地生产总值'
      }).then(res => {
      let data = res.data
      let aaa = getArrFirst(data.xAxis)
      let ccc = getArrLast(data.xAxis)
      this.chartArr.sideItem5_3.title = `${aaa}年-${ccc}年${this.countyName}单位建设用地生产总值变化`
      this.chartArr.sideItem5_3.chartArr[0].name = `${this.countyName}（万元/亩）`
      this.chartArr.sideItem5_3.chartArr[1].name = `${this.cityName}（万元/亩）`
      this.chartArr.sideItem5_3.chartArr[2].name = `浙江省（万元/亩）`
      this.chartArr.sideItem5_3.xAxis = data.xAxis
      this.chartArr.sideItem5_3.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem5_3.chartArr[1].yAxis = data.yAxis[1].list
      this.chartArr.sideItem5_3.chartArr[2].yAxis = data.yAxis[2].list
      this.barLineChart('sideItem5_3', this.chartArr.sideItem5_3)

      let list = data.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld).toFixed(2)

      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比上升<span class="light">${diff}</span>（万元/亩）` : `同比下降<span class="light">${Math.abs(diff)}</span>（万元/亩）`

      this.chartArr.sideItem5_3.result = `${ccc}年，${this.countyName}单位建设用地生产总值达到<span class="light">${value1}</span>（万元/亩）， 较上年${change1}。`
    })

    // 4、 获取某年某市各县（市、区）单位建设用地生产总值对并绘制图表
    let countyBenefitArr3 = []
    countyBenefitArr3.push(this.getCountyBenefit5())
    countyBenefitArr3.push(this.getCountyBenefit6())

    axiosAll(countyBenefitArr3).then(res => {
      let data1 = res[0].data
      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)

      this.chartArr.sideItem5_4.title = `${year}年${this.cityName}各县（市、区）单位建设用地生产总值对比`
      this.chartArr.sideItem5_4.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem5_4.xAxis = data1.xAxis
      this.chartArr.sideItem5_4.chartArr[0].yAxis = list
      this.chartArr.sideItem5_4.chartArr[1].name = `全市平均值(${avg}${data1.yAxis[0].unit})`
      this.chartArr.sideItem5_4.chartArr[1].markLine.data[0].yAxis = avg
      this.barLineChart('sideItem5_4', this.chartArr.sideItem5_4)


      let index = data1.xAxis.indexOf(this.countyName)
      let value = list[index]
      let diff = (value - avg).toFixed(2)
      let avgStr = (diff == 0) ? `与全市平均水平持平` : diff > 0 ? `高于全市平均水平` : `低于全市平均水平`


      let data2 = res[1].data
      let rank = data2.table[0]
      let rankStr = ''

      if(rank.changeVal === undefined){
        rankStr = `暂无上年排名数据`
      }else{
        rankStr = rank.changeVal == 0 ? `排名较上年<span class="light">维持不变</span>` : rank.changeVal > 0 ? `排名较上年上升<span class="light">${rank.changeVal}</span>位` : `排名较上年下降<span class="light">${Math.abs(rank.changeVal)}</span>位`
      }

      this.chartArr.sideItem5_4.result = `${year}年，${this.countyName}单位建设用地生产总值${avgStr}，在全市排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })

    // 2、 获取某年全省各县（市、区）单位建设用地生产总值并绘制图表

    let countyBenefitArr4 = []
    countyBenefitArr4.push(this.getCountyBenefit7())
    countyBenefitArr4.push(this.getCountyBenefit8())

    axiosAll(countyBenefitArr4).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem5_5.title = `2018年全省各县（市、区）单位建设用地生产总值对比`
      this.chartArr.sideItem5_5.xAxis = data1.xData
      this.chartArr.sideItem5_5.chartArr[0].yAxis = data1.yData
      this.chartArr.sideItem5_5.list = data1.yData
      this.chartArr.sideItem5_5.list = data1.Table
      this.dataZoomChart('sideItem5_5', this.chartArr.sideItem5_5)


      let list = data1.yData
      let index = data1.xData.indexOf(this.countyName)
      let value = list[index]
      let avg = getArrAvg(list)
      let diff = (value - avg).toFixed(2)
      let avgStr = (diff == 0) ? `与全省平均水平持平` : diff > 0 ? `高于全省平均水平` : `低于全省平均水平`

      let data2 = res[1].data
      let rank = data2.table[0]
      let rankStr = ''

      if(rank.changeVal === undefined){
        rankStr = `暂无上年排名数据`
      }else{
        rankStr = rank.changeVal == 0 ? `排名较上年<span class="light">维持不变</span>` : rank.changeVal > 0 ? `排名较上年上升<span class="light">${rank.changeVal}</span>位` : `排名较上年下降<span class="light">${Math.abs(rank.changeVal)}</span>位`
      }

      this.chartArr.sideItem5_5.result = `2018年，${this.countyName}单位建设用地生产总值${avgStr}， 在全省排第<span class="light">${index + 1}</span>位， ${rankStr}。`
    })
  },
  methods: {
    //规上工业亩均税收 市内比较
    getCountyBenefit1() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '规上工业亩均税收（万元/亩）'
        })
    },
    getCountyBenefit2() {
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: '规上工业亩均税收（万元/亩）',
          model: 'town'
        })
    },
    //规上工业亩均税收 全省比较
    getCountyBenefit3() {
      return apiGet(
        '/statistics/getAllRanking', {
          year: 2018,
          zb: '规上工业亩均税收（万元/亩）'
        })
    },
    getCountyBenefit4() {
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: '浙江省',
          area: this.countyName,
          zbs: '规上工业亩均税收（万元/亩）',
          model: 'town'
        })
    },

    //单位建设用地生产总值 市内比较
    getCountyBenefit5() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '单位建设用地生产总值'
        })
    },
    getCountyBenefit6() {
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: '单位建设用地生产总值',
          model: 'town'
        })
    },
    getCountyBenefit7() {
      return  apiGet(
        '/statistics/getAllRanking', {
          year: 2018,
          zb: '单位建设用地生产总值'
        })
    },
    getCountyBenefit8(){
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: '浙江省',
          area: this.countyName,
          zbs: '单位建设用地生产总值',
          model: 'town'
        })
    }
  }
}