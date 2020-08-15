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
export const evnvironmentalMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年限内某地区生态环境状况指数（EI）变化并绘制图表
    apiGet(
      '/statistics/getMultiZoneData', {
        startYear: 2015,
        endYear: 2018,
        areas: [this.countyName, this.cityName].join(','),
        zb: 'EI指数'
      }).then(res => {
      let data = res.data
      let aaa = getArrFirst(data.xAxis)
      let ccc = getArrLast(data.xAxis)

      this.chartArr.sideItem4_0.title = `${aaa}年-${ccc}年${this.countyName}生态环境状况指数（EI）变化`
      this.chartArr.sideItem4_0.chartArr[0].name = `${this.countyName}`
      this.chartArr.sideItem4_0.chartArr[1].name = `${this.cityName}`
      this.chartArr.sideItem4_0.xAxis = data.xAxis
      this.chartArr.sideItem4_0.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem4_0.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem4_0', this.chartArr.sideItem4_0)

      let list = data.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld).toFixed(1)

      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比增长<span class="light">${diff}</span>` : `同比下降<span class="light">${Math.abs(diff)}</span>`

      this.chartArr.sideItem4_0.result = `${ccc}年，${this.countyName}生态环境状况指数（EI）达到<span class="light">${value1}</span>，较上年${change1}。`
    })


    axiosAll([this.getCountyEnvData1(), this.getCountyEnvData2()]).then(res => {
      let data1 = res[0].data
      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)

      this.chartArr.sideItem4_1.title = `${year}年${this.cityName}各县（市、区）生态环境状况指数（EI）对比`
      this.chartArr.sideItem4_1.chartArr[0].name = `${data1.yAxis[0].name}`
      this.chartArr.sideItem4_1.xAxis = data1.xAxis
      this.chartArr.sideItem4_1.chartArr[0].yAxis = list
      this.barLineChart('sideItem4_1', this.chartArr.sideItem4_1)

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

      this.chartArr.sideItem4_1.result = `${year}年，${this.countyName}生态环境状况指数（EI）${avgStr}， 在全市排第<span class="light">${index + 1}</span>位， ${rankStr}。`
    })

    // 2、 获取某年生态环境状况指数（EI）对比并绘制图表

    axiosAll([this.getCountyEnvData3(), this.getCountyEnvData4()]).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem4_2.title = `2018年全省各县（市、区）生态环境状况指数（EI）对比`
      this.chartArr.sideItem4_2.xAxis = data1.xData
      this.chartArr.sideItem4_2.chartArr[0].yAxis = data1.yData
      this.chartArr.sideItem4_2.list = data1.yData
      this.chartArr.sideItem4_2.list = data1.Table
      this.dataZoomChart('sideItem4_2', this.chartArr.sideItem4_2)


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

      this.chartArr.sideItem4_2.result = `2018年，${this.countyName}生态环境状况指数（EI）${avgStr}，在全省排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })

    axiosAll([this.getCountyEnvData5(), this.getCountyEnvData6()]).then(res => {

      let data1 = res[0].data
      let aaa = getArrFirst(data1.xAxis)
      let ccc = getArrLast(data1.xAxis)
      this.chartArr.sideItem4_3.title = `${aaa}年-${ccc}年${this.countyName}空气质量达到优良天数比例变化`
      this.chartArr.sideItem4_3.chartArr[0].name = `${this.countyName}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem4_3.chartArr[1].name = `${this.cityName}(${data1.yAxis[1].unit})`
      this.chartArr.sideItem4_3.chartArr[2].name = `全省县级城市平均值(${data1.yAxis[2].unit})`
      this.chartArr.sideItem4_3.xAxis = data1.xAxis
      this.chartArr.sideItem4_3.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem4_3.chartArr[1].yAxis = data1.yAxis[1].list
      this.chartArr.sideItem4_3.chartArr[2].yAxis = data1.yAxis[2].list


      let list = data1.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld).toFixed(2)
      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比上升<span class="light">${diff}</span>个百分点` : `同比下降<span class="light">${Math.abs(diff)}</span>个百分点`


      let data2 = res[1].data
      for (const key in data2) {
        if (data2.hasOwnProperty(key)) {
          let value = isNaN(data2[key]) ? 0 : (data2[key] * 100 > 100 ? 100 : data2[key] * 100)
          this.chartArr.sideItem4_3.xAxis1.push(key)
          this.chartArr.sideItem4_3.yAxis1.push(value)
        }
      }
      this.horizontalBarLineChart('sideItem4_3', this.chartArr.sideItem4_3)

      let fff = (ccc - 2016 + 1) * 0.2 * 100
      let ggg = this.chartArr.sideItem4_3.yAxis1 >= fff ? '良好' : '滞后'

      this.chartArr.sideItem4_3.result = `${ccc}年，${this.countyName}空气质量达到优良天数比例达到<span class="light">${value1}</span>%， 较上年${change1}。“十三五”时期，${this.countyName}空气质量达到优良天数比例进度<span class="light">${ggg}</span>。`
    })

    axiosAll([this.getCountyEnvData7(), this.getCountyEnvData8()]).then(res => {
      let data1 = res[0].data
      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)

      this.chartArr.sideItem4_5.title = `${year}年${this.cityName}各县（市、区）空气质量达到优良天数比例对比`
      this.chartArr.sideItem4_5.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem4_5.xAxis = data1.xAxis
      this.chartArr.sideItem4_5.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem4_5.chartArr[1].name = `全市平均值(${avg}${data1.yAxis[0].unit})`
      this.chartArr.sideItem4_5.chartArr[1].markLine.data[0].yAxis = avg
      this.barLineChart('sideItem4_5', this.chartArr.sideItem4_5)

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

      this.chartArr.sideItem4_5.result = `${year}年，${this.countyName}空气质量达到优良天数的比例${avgStr}，在全市排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })


    axiosAll([this.getCountyEnvData9(),this.getCountyEnvData10()]).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem4_6.title = `2018年全省各县（市、区）空气质量达到优良天数比例对比`
      this.chartArr.sideItem4_6.xAxis = data1.xData
      this.chartArr.sideItem4_6.chartArr[0].yAxis = data1.yData
      this.chartArr.sideItem4_6.list = data1.yData
      this.chartArr.sideItem4_6.list = data1.Table
      this.dataZoomChart('sideItem4_6', this.chartArr.sideItem4_6)

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

      this.chartArr.sideItem4_6.result = `2018年，${this.countyName}空气质量达到优良天数比例${avgStr}，在全省排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })
  },
  methods: {
    // 1、 获取某年某地区全省各地市生态环境状况指数（EI）对比并绘制图表
    getCountyEnvData1() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '生态环境指数'
        })
    },
    getCountyEnvData2() {
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: '生态环境指数',
          model: 'town'
        })
    },
    getCountyEnvData3() {
      return apiGet(
        '/statistics/getAllRanking', {
          year: 2018,
          zb: '生态环境指数'
        })
    },
    getCountyEnvData4() {
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: '浙江省',
          area: this.countyName,
          zbs: '生态环境指数',
          model: 'town'
        })
    },
    // 3、 获取某年限内某地区空气质量达到优良天数比例并绘制图表
    getCountyEnvData5() {
      return  apiGet(
        '/statistics/getMultiZoneData', {
          startYear: 2015,
          endYear: 2018,
          areas: [this.countyName, this.cityName, '浙江省'].join(','),
          zb: '空气质量达到优良天数的比率'
        })
    },
    // 4、 获取某年某地区空气质量达到优良天数的比率进度评价图并绘制图表
    getCountyEnvData6() {
      return apiGet(
        '/statistics/getProgressStatusData', {
          year: 2018,
          area: this.countyName,
          zbs: '空气质量达到优良天数的比率'
        })
    },
    // 5、 获取某年某市各县（市、区）空气质量达到优良天数比例对比并绘制图表
    getCountyEnvData7() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '空气质量达到优良天数的比率'
        })
    },
    getCountyEnvData8() {
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: '空气质量达到优良天数的比率',
          model: 'town'
        })
    },

    // 6、 获取某年全省各县（市、区）空气质量达到优良天数比例对比并绘制图表
    getCountyEnvData9() {
      return  apiGet(
        '/statistics/getAllRanking', {
          year: 2018,
          zb: '空气质量达到优良天数的比率'
        })
    },
    getCountyEnvData10(){
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: '浙江省',
          area: this.countyName,
          zbs: '空气质量达到优良天数的比率',
          model: 'town'
        })
    }

  }
}