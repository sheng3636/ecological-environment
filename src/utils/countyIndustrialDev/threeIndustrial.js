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
export const threeIndustrialMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年限内某地区三次产业结构并绘制图表
    apiGet(
      '/statistics/getStructuralData', {
        startYear: 2009,
        endYear: 2018,
        area: this.countyName,
        zbs: '第一产业占比,第二产业占比,第三产业占比'
      }).then(res => {
      this.chartArr.sideItem1_0.title = `近10年${this.countyName}三次产业结构分析`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_0.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem1_0.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem1_0.chartArr[2].name = `${data.yAxis[2].name}(${data.yAxis[2].unit})`
        this.chartArr.sideItem1_0.xAxis = data.xAxis
        this.chartArr.sideItem1_0.chartArr[0].yAxis = data.yAxis[0].list
        this.chartArr.sideItem1_0.chartArr[1].yAxis = data.yAxis[1].list
        this.chartArr.sideItem1_0.chartArr[2].yAxis = data.yAxis[2].list
        this.barLineChart('sideItem1_0', this.chartArr.sideItem1_0)
        let aaa = (getArrLast(data.yAxis[2].list) - getArrFirst(data.yAxis[2].list)).toFixed(2)
        let bbb = (data.yAxis[2].list[4] - data.yAxis[2].list[0]).toFixed(2)
        let ccc = aaa > 0 ? `逐步提升` : (aaa < 0 ? `逐步下降` : '维持不变')
        let ddd = bbb > 0 ? `提升<span class="light">${Math.abs(bbb)}</span> 个百分点` : (bbb < 0 ? `下降<span class="light">${Math.abs(bbb)}</span> 个百分点` : '维持不变')
        let eee = (getArrLast(data.yAxis[2].list) - data.yAxis[2].list[5]).toFixed(2)
        let fff = eee > 0 ? `提升<span class="light">${Math.abs(eee)}</span> 个百分点` : (eee < 0 ? `下降<span class="light">${Math.abs(eee)}</span> 个百分点` : '维持不变')
        this.chartArr.sideItem1_0.result = `从三次产业结构变化趋势来看，${this.countyName}第三产业占比${ccc}，${getArrFirst(data.xAxis)}－${getArrFirst(data.xAxis) +4}年，第三产业占比${ddd}，${getArrFirst(data.xAxis) + 5}－${getArrLast(data.xAxis)}年第三产业占比${fff}。`
      } else {
        this.chartArr.sideItem1_0.isValue = true
        this.chartArr.sideItem1_0.result = `暂无结论`
      }
    })
    // 1、获取某年某地区三次产业结构并绘制图表
    // 2、 获取某年某市各县（市、区）第二产业占比对比并绘制图表
    // 3、 获取某年某市各县（市、区）第三产业占比对比并绘制图表
    axiosAll([this.threeIndustrialAll1(), this.threeIndustrialAll2(), this.threeIndustrialAll3(), this.threeIndustrialAll4()]).then(res => {
      this.chartArr.sideItem1_1.title = `2018年${this.countyName}三次产业结构`
      this.chartArr.sideItem1_2.title = `2018年${this.cityName}各县（市、区）第二产业占比对比`
      this.chartArr.sideItem1_3.title = `2018年${this.cityName}各县（市、区）第三产业占比对比`
      if (res[0].code === '0' && res[1].code === '0' && res[2].code === '0' && res[3].code === '0') {
        let data0 = res[0].data.yAxis
        for (let i = 0; i < data0.length; i++) {
          this.chartArr.sideItem1_1.chartArr[0].list.push({
            name: data0[i].name,
            value: data0[i].list[0]
          })
        }
        this.chartArr.sideItem1_1.chartArr[0].name = `三次产业结构`
        this.pieChart('sideItem1_1', this.chartArr.sideItem1_1)
        this.chartArr.sideItem1_1.result = `从三次产业结构现状来看，2018年${this.countyName}三次产业结构（三产:二产:一产）为<span class="light">${data0[2].list[0]}:${data0[1].list[0]}:${data0[0].list[0]}</span>，已形成三二一结构。`


        let data1 = res[1].data.yAxis
        let cityData = []
        for (let i = 0; i < data1.length; i++) {
          cityData.push(data1[i].list[0])
        }

        let data2 = res[2].data
        this.chartArr.sideItem1_2.chartArr[0].name = `${data2.yAxis[0].name}(${data2.yAxis[0].unit})`
        this.chartArr.sideItem1_2.xAxis = data2.xAxis
        this.chartArr.sideItem1_2.chartArr[0].yAxis = data2.yAxis[0].list
        let avg = cityData[1]
        this.chartArr.sideItem1_2.chartArr[1].markLine.data[0].yAxis = avg
        this.chartArr.sideItem1_2.chartArr[1].name = `全市平均值(${avg}${data2.yAxis[0].unit})`
        this.barLineChart('sideItem1_2', this.chartArr.sideItem1_2)
        let eee = data2.xAxis.indexOf(this.countyName)
        this.chartArr.sideItem1_2.result = `${this.countyName}第二产业占比<span class="light">${data2.yAxis[0].list[eee]}</span>，居全市第<span class="light">${eee + 1}</span>位。`

        let data3 = res[3].data
        this.chartArr.sideItem1_3.chartArr[0].name = `${data3.yAxis[0].name}(${data3.yAxis[0].unit})`
        this.chartArr.sideItem1_3.xAxis = data3.xAxis
        this.chartArr.sideItem1_3.chartArr[0].yAxis = data3.yAxis[0].list
        let avg1 = cityData[2]
        this.chartArr.sideItem1_3.chartArr[1].markLine.data[0].yAxis = avg
        this.chartArr.sideItem1_3.chartArr[1].name = `全市平均值(${avg1}${data3.yAxis[0].unit})`
        this.barLineChart('sideItem1_3', this.chartArr.sideItem1_3)
        let fff = data3.xAxis.indexOf(this.countyName)
        this.chartArr.sideItem1_3.result = `${this.countyName}第三产业占比<span class="light">${data3.yAxis[0].list[fff]}</span>，居全市第<span class="light">${fff + 1}</span>位。`
      } else {
        this.chartArr.sideItem1_0.isValue = true
        this.chartArr.sideItem1_0.result = `暂无结论`
        this.chartArr.sideItem1_1.isValue = true
        this.chartArr.sideItem1_1.result = `暂无结论`
        this.chartArr.sideItem1_2.isValue = true
        this.chartArr.sideItem1_2.result = `暂无结论`
        this.chartArr.sideItem1_3.isValue = true
        this.chartArr.sideItem1_3.result = `暂无结论`
      }
    })
    // 4、 获取某年全省各县（市、区）生产总值规模对比并绘制图表
    apiGet(
      '/industry/getAllCountyData', {
        year: 2018,
        area: this.countyName,
        zbs: '生产总值,生产总值增长率'
      }).then(res => {
      this.chartArr.sideItem1_4.title = `2018年全省各县（市、区）生产总值规模对比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_4.chartArr[0].name = `${data.yData[0].name}(${data.yData[0].unit})`
        this.chartArr.sideItem1_4.chartArr[1].name = `${data.yData[1].name}(${data.yData[1].unit})`
        this.chartArr.sideItem1_4.xAxis = data.xData
        this.chartArr.sideItem1_4.chartArr[0].yAxis = data.yData[0].value
        this.chartArr.sideItem1_4.chartArr[1].yAxis = data.yData[1].value
        this.chartArr.sideItem1_4.list = data.Table
        this.barLineChart('sideItem1_4', this.chartArr.sideItem1_4)
        let aaa = data.Table.findIndex(item => {
          return item.area === this.countyName
        })
        this.chartArr.sideItem1_4.result = `2018年${this.countyName}GDP<span class="light">${data.Table[aaa].value1}</span>亿元，增速<span class="light">${data.Table[aaa].value2}</span>%， 在全省县（区市）中排名第<span class="light">${data.Table[aaa].value18}</span>位，比15年排名下降<span class="light">${data.Table[aaa].num}</span>名`
      } else {
        this.chartArr.sideItem1_4.isValue = true
        this.chartArr.sideItem1_4.result = `暂无结论`
      }
    })
    //5、 获取某年全省各县（市、区）第二产业规模对比并绘制图表
    apiGet(
      '/industry/getAllCountyData', {
        year: 2018,
        area: this.countyName,
        zbs: '第二产业增加值,第二产业增加值增长率'
      }).then(res => {
      this.chartArr.sideItem1_5.title = `2018年全省各县（市、区）第二产业规模对比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_5.chartArr[0].name = `${data.yData[0].name}(${data.yData[0].unit})`
        this.chartArr.sideItem1_5.chartArr[1].name = `${data.yData[1].name}(${data.yData[1].unit})`
        this.chartArr.sideItem1_5.xAxis = data.xData
        this.chartArr.sideItem1_5.chartArr[0].yAxis = data.yData[0].value
        this.chartArr.sideItem1_5.chartArr[1].yAxis = data.yData[1].value
        this.chartArr.sideItem1_5.list = data.Table
        this.barLineChart('sideItem1_5', this.chartArr.sideItem1_5)
        let aaa = data.Table.findIndex(item => {
          return item.area === this.countyName
        })
        this.chartArr.sideItem1_5.result = `2018年${this.countyName}第二产业增加值<span class="light">${data.Table[aaa].value1}</span>亿元，增速<span class="light">${data.Table[aaa].value2}</span>%， 在全省县（区市）中排名第<span class="light">${data.Table[aaa].value18}</span>位，比15年排名下降<span class="light">${data.Table[aaa].num}</span>名`
      } else {
        this.chartArr.sideItem1_5.isValue = true
        this.chartArr.sideItem1_5.result = `暂无结论`
      }
    })
    //6、 获取某年全省各县（市、区）GDP和第三产业规模并绘制图表
    apiGet(
      '/industry/getAllCountyData', {
        year: 2018,
        area: this.countyName,
        zbs: '第三产业增加值,第三产业增加值增长率'
      }).then(res => {
      this.chartArr.sideItem1_6.title = `2018年全省各县（市、区）第三产业规模对比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_6.chartArr[0].name = `${data.yData[0].name}(${data.yData[0].unit})`
        this.chartArr.sideItem1_6.chartArr[1].name = `${data.yData[1].name}(${data.yData[1].unit})`
        this.chartArr.sideItem1_6.xAxis = data.xData
        this.chartArr.sideItem1_6.chartArr[0].yAxis = data.yData[0].value
        this.chartArr.sideItem1_6.chartArr[1].yAxis = data.yData[1].value
        this.chartArr.sideItem1_6.list = data.Table
        this.barLineChart('sideItem1_6', this.chartArr.sideItem1_6)
        let aaa = data.Table.findIndex(item => {
          return item.area === this.countyName
        })
        this.chartArr.sideItem1_6.result = `2018年${this.countyName}第三产业增加值<span class="light">${data.Table[aaa].value1}</span>亿元，增速<span class="light">${data.Table[aaa].value2}</span>%， 在全省县（区市）中排名第<span class="light">${data.Table[aaa].value18}</span>位，比15年排名下降<span class="light">${data.Table[aaa].num}</span>名`

      } else {
        this.chartArr.sideItem1_6.isValue = true
        this.chartArr.sideItem1_6.result = `暂无结论`
      }
    })
    //7、 获取某年全省各县（市、区）GDP和第三产业规模并绘制图表
    apiGet(
      '/industry/getAllCountyData2', {
        year: 2018,
        area: this.countyName,
        zbs: '生产总值,第三产业增加值'
      }).then(res => {
      this.chartArr.sideItem1_7.title = `2018年全省各县（市、区）GDP和第三产业规模`
      if (res.code === '0') {
        let data = res.data.Table
        data.sort((a, b) => {
          return b.value2 - a.value2
        })
        for (let i = 0; i < data.length; i++) {
          this.chartArr.sideItem1_7.chartArr[0].yAxis.push([data[i].value2, data[i].value1, data[i].area])
        }

        let xData = []
        let yData = []
        data.forEach((te) => {
          xData.push(te.value2)
          yData.push(te.value1)
        })
        xData.sort((a, b) => {
          return a - b
        })
        yData.sort((a, b) => {
          return a - b
        })
        let index = Math.floor(data.length / 2)
        this.chartArr.sideItem1_7.chartArr[0].Median0 = yData[index]
        this.chartArr.sideItem1_7.chartArr[0].Median1 = xData[index]
        this.scatterChart('sideItem1_7', this.chartArr.sideItem1_7)

        
        let aaa = data.findIndex(item => {
          return item.area === this.countyName
        })
        let bbb = data.length / 2
        let ccc = aaa >= bbb ? '靠前' : '靠后'
        this.chartArr.sideItem1_7.result = `${this.countyName}整体经济规模在全省排名<span class="light">${ccc}</span>，产业结构以第三产业为主。`

      } else {
        this.chartArr.sideItem1_7.isValue = true
        this.chartArr.sideItem1_7.result = `暂无结论`
      }
    })
  },
  methods: {
    scatterChart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: data.chartArr[0].color,
        tooltip: {
          trigger: 'axis',
          formatter(params) {
            return '区划: ' + params[0].data[2] + '<br/>' +
              '第三产业增加值/GDP: ' + params[0].data[1] + '<br/>' +
              'GDP: ' + params[0].data[0] + '<br/>'
          },
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: 14,
            color: this.chartColor.textColor
          },
          data: ['2018']
        },
        grid: {
          left: '5%',
          right: '9%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)',
            },
          },
          axisLabel: {
            color: this.chartColor.textColor,
          },
          name: 'GDP（亿元）',
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)',
            },
          },
          axisLabel: {
            color: this.chartColor.textColor,
          },
          scale: true,
          name: '第三产业占比（%）',
        },
        series: [{
          name: '2018',
          data: data.chartArr[0].yAxis,
          type: 'scatter',
          symbolSize: 15,
          emphasis: {
            label: {
              show: true,
              formatter: function (param) {
                return param.data[2];
              },
              position: 'top'
            }
          },
          itemStyle: {
            color: (params) => {
              if (params.data[2] == this.countyName) {
                return data.chartArr[0].lightColor
              } else {
                return data.chartArr[0].color
              }
            }
          },
          markLine: {
            lineStyle: {
              type: 'solid',
              color: 'white',
            },
            label: {
              textStyle: {
                color: 'while',
                fontSize: 14,
              },
              formatter: function (param) {
                if (param.dataIndex == 1) {
                  return 'GDP中位线：' + param.value
                } else if (param.dataIndex == 0) {
                  return '服务业占比中位线：' + param.value
                }
              },
            },
            data: [{
              yAxis: data.chartArr[0].Median0
            }, {
              xAxis: data.chartArr[0].Median1
            }],
          },
        }]
      }
      chart.clear()
      chart.setOption(option)
    },
    threeIndustrialAll1() {
      return apiGet(
        '/statistics/getStructuralData', {
          startYear: 2018,
          endYear: 2018,
          area: this.countyName,
          zbs: '第一产业占比,第二产业占比,第三产业占比'
        })
    },
    threeIndustrialAll2() {
      return apiGet(
        '/statistics/getStructuralData', {
          startYear: 2018,
          endYear: 2018,
          area: this.cityName,
          zbs: '第一产业占比,第二产业占比,第三产业占比'
        })
    },
    threeIndustrialAll3() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '第二产业占比'
        })
    },
    threeIndustrialAll4() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: this.cityName,
          zb: '第三产业占比'
        })
    },
  }
}