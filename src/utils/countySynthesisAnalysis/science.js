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
export const scienceMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年限内某地区发明专利授权量变化并绘制图表
    // 1、 获取某年某地区发明专利授权量评价图并绘制图表
    axiosAll([this.getCountySciData1(), this.getCountySciData2()]).then(res => {
      let data1 = res[0].data
      let aaa = getArrFirst(data1.xAxis)
      let ccc = getArrLast(data1.xAxis) 

      this.chartArr.sideItem2_0.title = `${aaa}年-${ccc}年${this.countyName}发明专利授权量变化`
      this.chartArr.sideItem2_0.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_0.chartArr[1].name = `${this.countyName}${data1.yAxis[1].name}(${data1.yAxis[1].unit})`
      this.chartArr.sideItem2_0.xAxis = data1.xAxis
      this.chartArr.sideItem2_0.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem2_0.chartArr[1].yAxis = data1.yAxis[1].list

      let list = data1.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld)

      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比增长<span class="light">${diff}</span>项` : `同比下降<span class="light">${Math.abs(diff)}</span>项`


      let data2 = res[1].data
      for (const key in data2) {
        if (data2.hasOwnProperty(key)) {
          let value = isNaN(data2[key]) ? 0 : (data2[key] * 100 > 100 ? 100 : data2[key] * 100)
          this.chartArr.sideItem2_0.xAxis1.push(key)
          this.chartArr.sideItem2_0.yAxis1.push(value)
        }
      }
      this.horizontalBarLineChart('sideItem2_0', this.chartArr.sideItem2_0)

      let fff = (2018 - 2016 + 1) * 0.2 * 100
      let ggg = this.chartArr.sideItem2_0.yAxis1 >= fff ? '良好' : '滞后'

      this.chartArr.sideItem2_0.result = `${ccc}年，${this.countyName}发明专利授权量达到<span class="light">${value1}</span>项， 较上年${change1}。十三五”时期，${this.countyName}发明专利授权量进度<span class="light">${ggg}</span>。`
    })
    
 
    // 2、 获取某年某市各县（市、区）发明专利授权量对比并绘制图表
    axiosAll([this.getCountySciData3(), this.getCountySciData4()]).then(res => {
      let data1 = res[0].data
      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)

      this.chartArr.sideItem2_2.title = `${year}年${this.cityName}各县（市、区）发明专利授权量对比`
      this.chartArr.sideItem2_2.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_2.xAxis = data1.xAxis
      this.chartArr.sideItem2_2.chartArr[0].yAxis = list
      this.chartArr.sideItem2_2.chartArr[1].name = `全市平均值(${avg}${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_2.chartArr[1].markLine.data[0].yAxis = avg

      this.barLineChart('sideItem2_2', this.chartArr.sideItem2_2)


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

      this.chartArr.sideItem2_2.result = `${year}年，${this.countyName}发明专利授权量${avgStr}，在全市排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })

    // 3、 获取某年全省各县（市、区）生产总值对比并绘制图表
    axiosAll([this.getCountySciData5(), this.getCountySciData6()]).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem2_3.title = `2018年全省各县（市、区）发明专利授权量对比`
      this.chartArr.sideItem2_3.xAxis = data1.xData
      this.chartArr.sideItem2_3.chartArr[0].yAxis = data1.yData
      this.chartArr.sideItem2_3.list = data1.yData
      this.chartArr.sideItem2_3.list = data1.Table
      this.dataZoomChart('sideItem2_3', this.chartArr.sideItem2_3)

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

      this.chartArr.sideItem2_3.result = `2018年，${this.countyName}发明专利授权量${avgStr}，在全省排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })

    // 4、 获取某年限内某地区每万人发明专利授权量变化并绘制图表
    apiGet(
      '/statistics/getMultiZoneData', {
        startYear: 2015,
        endYear: 2018,
        areas: [this.countyName, this.cityName, '浙江省'].join(','),
        zb: '每万人发明专利授权量'
      }).then(res => {
      let data = res.data
      let aaa = getArrFirst(data.xAxis)
      let ccc = getArrLast(data.xAxis) 

      this.chartArr.sideItem2_4.title = `${aaa}年-${ccc}年${this.countyName}每万人发明专利授权量变化`
      this.chartArr.sideItem2_4.chartArr[0].name = `${this.countyName}`
      this.chartArr.sideItem2_4.chartArr[1].name = `${this.cityName}`
      this.chartArr.sideItem2_4.chartArr[2].name = `浙江省`
      this.chartArr.sideItem2_4.xAxis = data.xAxis
      this.chartArr.sideItem2_4.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem2_4.chartArr[1].yAxis = data.yAxis[1].list
      this.chartArr.sideItem2_4.chartArr[2].yAxis = data.yAxis[2].list
      this.barLineChart('sideItem2_4', this.chartArr.sideItem2_4)

      let list = data.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld).toFixed(2)

      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比增加<span class="light">${diff}</span>项` : `同比减少<span class="light">${Math.abs(diff)}</span>项`

      this.chartArr.sideItem2_4.result = `${ccc}年，${this.countyName}每万人发明专利授权量达到<span class="light">${value1}</span>项， 较上年${change1}。`
    })
    // 5、 获取某年某市各县（市、区）每万人发明专利授权量对比并绘制图表
    axiosAll([this.getCountySciData7(), this.getCountySciData8()]).then(res => {
      let data1 = res[0].data

      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)

      this.chartArr.sideItem2_5.title = `${year}年${this.cityName}各县（市、区）每万人发明专利授权量对比`
      this.chartArr.sideItem2_5.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_5.xAxis = data1.xAxis
      this.chartArr.sideItem2_5.chartArr[0].yAxis = list
      this.chartArr.sideItem2_5.chartArr[1].name = `全市平均值(${avg}${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_5.chartArr[1].markLine.data[0].yAxis = avg
      this.barLineChart('sideItem2_5', this.chartArr.sideItem2_5)

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

      this.chartArr.sideItem2_5.result = `${year}年，${this.countyName}每万人发明专利授权量${avgStr}，在全市排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })
    // 6、 获取某年限内某地区R&D经费投入占生产总值比重变化并绘制图表
    axiosAll([this.getCountySciData11(), this.getCountySciData12()]).then(res => {
      let data1 = res[0].data
      let aaa = getArrFirst(data1.xAxis)
      let ccc = getArrLast(data1.xAxis)
      this.chartArr.sideItem2_6.title = `${aaa}年-${ccc}年${this.countyName}R&D经费投入占生产总值比重变化`
      this.chartArr.sideItem2_6.chartArr[0].name = `${this.countyName}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_6.chartArr[1].name = `${this.cityName}(${data1.yAxis[1].unit})`
      this.chartArr.sideItem2_6.chartArr[2].name = `浙江省(${data1.yAxis[1].unit})`
      // this.chartArr.sideItem2_6.chartArr[3].name = `全国(${data1.yAxis[1].unit})`

      this.chartArr.sideItem2_6.xAxis = data1.xAxis
      this.chartArr.sideItem2_6.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem2_6.chartArr[1].yAxis = data1.yAxis[1].list
      this.chartArr.sideItem2_6.chartArr[2].yAxis = data1.yAxis[2].list


      let list = data1.yAxis[0].list
      let lastIndex = list.length - 1
      let value1 = list[lastIndex]
      let valueOld = list[lastIndex - 1]
      let diff = (value1 - valueOld).toFixed(2)
      let change1 = (diff == 0) ? `<span class="light">维持不变</span>` : diff > 0 ? `同比增加<span class="light">${diff}</span>个百分点` : `同比减少<span class="light">${Math.abs(diff)}</span>个百分点`

      let data2 = res[1].data
      for (const key in data2) {
        if (data2.hasOwnProperty(key)) {
          let value = isNaN(data2[key]) ? 0 : (data2[key] * 100 > 100 ? 100 : data2[key] * 100)
          this.chartArr.sideItem2_6.xAxis1.push(key)
          this.chartArr.sideItem2_6.yAxis1.push(value)
        }
      }
      this.horizontalBarLineChart('sideItem2_6', this.chartArr.sideItem2_6)

      let fff = (ccc - 2016 + 1) * 0.2 * 100
      let ggg = this.chartArr.sideItem2_6.yAxis1 >= fff ? '良好' : '滞后'

      this.chartArr.sideItem2_6.result = `${ccc}年，${this.countyName}R&D经费投入占生产总值比重达到<span class="light">${value1}</span>%，较上年${change1}。“十三五”时期，${this.countyName}R&D经费投入占生产总值比重进度<span class="light">${ggg}</span>`
    })

    // 7、 获取某年某市各县（市、区）R&D经费占生产总值比重对比并绘制图表
    axiosAll([this.getCountySciData13(), this.getCountySciData14()]).then(res => {
      let data1 = res[0].data
      let year = data1.yAxis[0].year
      let list = data1.yAxis[0].list
      let avg = getArrAvg(list)

      this.chartArr.sideItem2_7.title = `${year}年${this.cityName}各县（市、区）R&D经费投入占生产总值比重对比`
      this.chartArr.sideItem2_7.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_7.xAxis = data1.xAxis
      this.chartArr.sideItem2_7.chartArr[0].yAxis = list
      this.chartArr.sideItem2_7.chartArr[1].name = `全市平均值(${avg}${data1.yAxis[0].unit})`
      this.chartArr.sideItem2_7.chartArr[1].markLine.data[0].yAxis = avg
      this.barLineChart('sideItem2_7', this.chartArr.sideItem2_7)

      
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

      this.chartArr.sideItem2_7.result = `${year}年，${this.countyName}R&D经费投入占生产总值比重${avgStr}，在全市排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })

    // 8、 获取某年全省各县（市、区）R&D经费投入占生产总值比重对比并绘制图表
    axiosAll([this.getCountySciData9(), this.getCountySciData10()]).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem2_8.title = `2018年全省各县（市、区）R&D经费投入占生产总值比重对比`
      this.chartArr.sideItem2_8.xAxis = data1.xData
      this.chartArr.sideItem2_8.chartArr[0].yAxis = data1.yData
      this.chartArr.sideItem2_8.list = data1.yData
      this.chartArr.sideItem2_8.list = data1.Table
      this.dataZoomChart('sideItem2_8', this.chartArr.sideItem2_8)
      
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

      this.chartArr.sideItem2_8.result = `2018年，${this.countyName}R&D经费投入占生产总值比重${avgStr}，在全省排第<span class="light">${index + 1}</span>位，${rankStr}。`
    })
  },
  methods: {
    // 0、 获取某年限内某地区发明专利授权量变化并绘制图表
    getCountySciData1(){
      return  apiGet(
        '/statistics/getMultiZoneData', {
          startYear: 2015,
          endYear: 2018,
          areas: [this.countyName, this.cityName].join(','),
          zb: '发明专利授权量'
        })
    },
    // 1、 获取某年某地区发明专利授权量评价图并绘制图表
    getCountySciData2(){
      return  apiGet(
        '/statistics/getProgressStatusData', {
          year: 2018,
          area: this.countyName,
          zbs: '发明专利授权量'
        })
    },
    getCountySciData3(){
      return  apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '发明专利授权量'
        })
    },
    getCountySciData4(){
      return  apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: '发明专利授权量',
          model: 'town'
        })
    },
    getCountySciData5(){
      return  apiGet(
        '/statistics/getAllRanking', {
          year: 2018,
          zb: '发明专利授权量'
        })
    },
    getCountySciData6(){
      return  apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: '浙江省',
          area: this.countyName,
          zbs: '发明专利授权量',
          model: 'town'
        })
    },
    getCountySciData7(){
      return  apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '每万人发明专利授权量'
        })
    },
    getCountySciData8(){
      return  apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: '每万人发明专利授权量',
          model: 'town'
        })
    },
    getCountySciData9(){
      return   apiGet(
        '/statistics/getAllRanking', {
          year: 2018,
          zb: 'R&D经费投入占生产总值比重'
        })
    },
    getCountySciData10(){
      return   apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: '浙江省',
          area: this.countyName,
          zbs: 'R&D经费投入占生产总值比重',
          model: 'town'
        })
    },
    getCountySciData11(){
      return  apiGet(
        '/statistics/getMultiZoneData', {
          startYear: 2015,
          endYear: 2018,
          areas: [this.countyName, this.cityName,'浙江省','全国'].join(','),
          zb: 'R&D经费投入占生产总值比重'
        })
    },
    getCountySciData12(){
      return  apiGet(
        '/statistics/getProgressStatusData', {
          year: 2018,
          area: this.countyName,
          zbs: 'R&D经费投入占生产总值比重'
        })
    },
    getCountySciData13(){
      return  apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: 'R&D经费投入占生产总值比重'
        })
    },
    getCountySciData14(){
      return apiGet(
        '/statistics/getRank', {
          startYear: 2017,
          endYear: 2018,
          areas: this.cityName,
          area: this.countyName,
          zbs: 'R&D经费投入占生产总值比重',
          model: 'town'
        })
    }
  }
}