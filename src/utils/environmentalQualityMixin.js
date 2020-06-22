import {
  getStructuralData,
  getScaleData,
  sectionNum,
  sectionProportion,
  sectionList,
  getRankDiff
} from '@/api/environmentalQuality'
export const environmentalQualityMixin = {
  data() {
    return {
      typeLengthMax: 0,
      tableData: [],
      tableDataResult: '',
    }
  },
  mounted() {
    // 0、获取空气质量达到优良天数比例变化数据并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: 'AQI优良率'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem1_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_0.dataSource = data.yAxis.source
      this.chartArr.sideItem1_0.xAxis = data.xAxis
      this.chartArr.sideItem1_0.yAxis = data.yAxis.list
      this.singleBarLineChart('sideItem1_0', this.chartArr.sideItem1_0)
      // this.singleBarLineChart('sideItem1_0', this.chartArr.sideItem1_0, 55, true)

      let aaa = this.returnArrLast(this.chartArr.sideItem1_0.xAxis)
      let bbb = this.returnArrLast(this.chartArr.sideItem1_0.yAxis)
      let ccc = this.returnArrFirst(this.chartArr.sideItem1_0.xAxis)
      let ddd = this.returnDiff(this.returnArrFirst(this.chartArr.sideItem1_0.yAxis), this.returnArrLast(this.chartArr.sideItem1_0.yAxis))
      let eee = ddd >= 0 ? '增长' : '减少'
      this.chartArr.sideItem1_0.title = `${ccc}年-${aaa}年${this.cityName}空气质量达到优良天数比例变化`
      this.chartArr.sideItem1_0.result = `${aaa}年，${this.cityName}空气质量达到优良天数比例达到<span class="light">${bbb}%</span>，与${ccc}年相比${eee}了<span class="light">${Math.abs(ddd)}%</span>。 `
    })
    // 1、获取各地市空气质量达到优良天数比例对比并绘制图表
    getScaleData({
      area: '浙江省',
      zb: 'AQI优良率'
    }).then(res => {
      let cityName = this.cityName
      let data = res.data
      this.chartArr.sideItem1_1.title = `${data.yAxis.year}年各地市空气质量达到优良天数比例对比`
      this.chartArr.sideItem1_1.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_1.dataSource = data.yAxis.source
      this.chartArr.sideItem1_1.xAxis = data.xAxis
      this.chartArr.sideItem1_1.yAxis = data.yAxis.list
      this.chartArr.sideItem1_1.avg = this.returnArrAvg(data.yAxis.list)
      let i = data.xAxis.findIndex(function (value) {
        return value === cityName
      })
      this.sideItem1_1Chart('sideItem1_1', this.chartArr.sideItem1_1)

      let aaa = this.returnDiff(this.returnArrAvg(data.yAxis.list), data.yAxis.list[i]) >= 0 ? '高于' : '低于'
      getRankDiff({
        area: cityName,
        zb: 'AQI优良率'
      }).then(res1 => {
        let rankDiff = this.returnDiff(res1.data.newRank, res1.data.oldRank)
        let bbb = rankDiff >= 0 ? '上升' : '下降'
        this.chartArr.sideItem1_1.result = `${data.yAxis.year}年，${this.cityName}空气质量达到优良天数的比例<span class="light">${aaa}</span>全市平均水平，排名${bbb}<span class="light">${Math.abs(rankDiff)}</span>位。`
      })
    })
    // 2、获取管辖各县级城市空气质量达到优良天数比例并绘制图表
    getScaleData({
      area: this.cityName,
      zb: 'AQI优良率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_2.title = `${data.yAxis.year}年${this.cityName}管辖各县级城市空气质量达到优良天数比例`
      this.chartArr.sideItem1_2.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_2.dataSource = data.yAxis.source
      this.chartArr.sideItem1_2.xAxis = data.xAxis
      this.chartArr.sideItem1_2.yAxis = data.yAxis.list
      this.sideItem1_2Chart('sideItem1_2', this.chartArr.sideItem1_2)


      let aaa = this.returnRepeatNumArr(this.chartArr.sideItem1_2.xAxis, this.chartArr.sideItem1_2.yAxis, this.chartArr.sideItem1_2.yAxis[this.chartArr.sideItem1_2.yAxis.length - 1], 'max')
      let bbb = this.returnRepeatNumArr(this.chartArr.sideItem1_2.xAxis, this.chartArr.sideItem1_2.yAxis, this.chartArr.sideItem1_2.yAxis[0], 'min')
      this.chartArr.sideItem1_2.result = `${data.yAxis.year}年，${this.cityName}管辖的各县级城市中，${aaa.join()}空气质量达到优良天数比例最低，达到<span class="light">${this.returnArrLast(this.chartArr.sideItem1_2.yAxis)}%</span>；${bbb.join()}最高，为<span class="light">${this.chartArr.sideItem1_2.yAxis[0]}%。</span>`
    })

    // 3、获取市管辖各县级城市PM2.5年均浓度（µg/m3）对比并绘制图表
    getScaleData({
      area: this.cityName,
      zb: 'PM2.5浓度'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_3.title = `${data.yAxis.year}年${this.cityName}管辖各县级城市PM2.5年均浓度（µg/m3）对比`
      this.chartArr.sideItem1_3.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_3.dataSource = data.yAxis.source
      this.chartArr.sideItem1_3.xAxis = data.xAxis
      this.chartArr.sideItem1_3.yAxis = data.yAxis.list
      this.sideItem1_3Chart('sideItem1_3', this.chartArr.sideItem1_3)

      let aaa = this.returnRepeatNumArr(this.chartArr.sideItem1_3.xAxis, this.chartArr.sideItem1_3.yAxis, this.chartArr.sideItem1_3.yAxis[this.chartArr.sideItem1_3.yAxis.length - 1], 'max')
      let bbb = this.returnRepeatNumArr(this.chartArr.sideItem1_3.xAxis, this.chartArr.sideItem1_3.yAxis, this.chartArr.sideItem1_3.yAxis[0], 'min')
      this.chartArr.sideItem1_3.result = `${data.yAxis.year}年，${this.cityName}管辖的各县级城市中，${bbb.join()}PM2.5年均浓度最高，达到<span class="light">${this.chartArr.sideItem1_3.yAxis[0]}</span>µg/m3；${aaa.join()}最低，达到<span class="light">${this.returnArrLast(this.chartArr.sideItem1_3.yAxis)}</span>µg/m3`
    })

    // 4、获取年各地市PM2.5年均浓度（µg/m3）对比并绘制图表
    getScaleData({
      area: '浙江省',
      zb: 'PM2.5浓度'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_4.title = `${data.yAxis.year}年各地市PM2.5年均浓度（µg/m3）对比`
      this.chartArr.sideItem1_4.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_4.xAxis = data.xAxis
      this.chartArr.sideItem1_4.dataSource = data.yAxis.source
      this.chartArr.sideItem1_4.yAxis = data.yAxis.list
      this.sideItem1_4Chart('sideItem1_4', this.chartArr.sideItem1_4)

      let rank = this.chartArr.sideItem1_4.xAxis.indexOf(this.cityName)
      this.chartArr.sideItem1_4.result = `${data.yAxis.year}年，${this.cityName}PM2.5年均浓度在全省排第<span class="light">${rank + 1}</span>位`
    })

    // 5、获取年市管辖各县级城市PM2.5年均浓度（µg/m3）对比并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: 'PM2.5浓度'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem1_5.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}PM2.5年平均浓度（µg/m3）变化`
      this.chartArr.sideItem1_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem1_5.dataSource = data.yAxis.source
      this.chartArr.sideItem1_5.xAxis = data.xAxis
      this.chartArr.sideItem1_5.yAxis = data.yAxis.list
      this.sideItem1_5Chart('sideItem1_5', this.chartArr.sideItem1_5)

      let aaa = this.chartArr.sideItem1_5.yAxis[this.chartArr.sideItem1_5.yAxis.length - 1]
      let qualified = this.returnDiff(aaa, 35) > 0 ? '达到' : '不达到'
      this.chartArr.sideItem1_5.result = `${this.returnArrLast(this.chartArr.sideItem1_5.xAxis)}年，${this.cityName}PM2.5浓度年均达到<span class="light">${aaa}</span>µg/m3，<span class="light">${qualified}</span>国家空气质量二级标准要求（35µg/m3）。`
    })

    // 6、各县（市、区）III类以上水质断面数量
    sectionNum({
      area: this.cityName
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_6.title = `${data.yAxis.year}${this.cityName}各县（市、区）III类以上水质断面数量`
      this.chartArr.sideItem1_6.dataSource = '省生态环境厅'
      this.chartArr.sideItem1_6.xAxis = data.xAxis
      this.chartArr.sideItem1_6.yAxis1 = data.yAxis.threeList
      this.chartArr.sideItem1_6.yAxis2 = data.yAxis.numList
      this.sideItem1_6Chart('sideItem1_6', this.chartArr.sideItem1_6)

      let dataArr = []
      let qualifiedNameArr = []
      let notQualifiedNameArr = []
      for (let i = 0; i < this.chartArr.sideItem1_6.xAxis.length; i++) {
        dataArr.push({
          name: this.chartArr.sideItem1_6.xAxis[i],
          value1: this.chartArr.sideItem1_6.yAxis1[i],
          value2: this.chartArr.sideItem1_6.yAxis2[i]
        })
      }
      let qualifiedArr = dataArr.filter(item => {
        if (item.value2 !== 0) {
          return item.value1 === item.value2
        }
      })
      let notQualifiedArr = dataArr.filter(item => {
        return item.value1 !== item.value2 || item.value2 === 0
      })

      for (let i = 0; i < qualifiedArr.length; i++) {
        qualifiedNameArr.push(qualifiedArr[i].name)
      }
      for (let i = 0; i < notQualifiedArr.length; i++) {
        notQualifiedNameArr.push(notQualifiedArr[i].name)
      }

      this.chartArr.sideItem1_6.result = `${data.yAxis.year}年，<span class="light">${this.cityName}${qualifiedNameArr.join()}</span>所有省控断面水质全部达到III类及以上。 <span class="light">${notQualifiedNameArr.join()}</span>所有省控断面水质均未达到III类。`

    })
    // 7、获取全省各地市III类以上水质断面占比数据并绘制图表
    sectionProportion({
      area: '浙江省'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_7.title = `${data.yAxis.year}全省各地市III类以上水质断面占比`
      this.chartArr.sideItem1_7.xAxis = data.xAxis
      this.chartArr.sideItem1_7.yAxis = data.yAxis.ratelist
      this.sideItem1_7Chart('sideItem1_7', this.chartArr.sideItem1_7)


      let i = this.chartArr.sideItem1_7.xAxis.indexOf(this.cityName)
      this.chartArr.sideItem1_7.result = `${data.yAxis.year}年，${this.cityName}<span class="light">27</span>个省控水质断面中，III类以上占比为<span class="light">${this.chartArr.sideItem1_7.yAxis[i]}</span>%，在全省11个地市中排第<span class="light">${i + 1}</span>名。`
    })
    // 8、获取年市省控断面水质类型变化数据并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: 'I类,II类,III类,IV类,V类,劣V类'
    }).then(res => {
      let data = res.data

      this.chartArr.sideItem1_8.title = `${this.returnArrFirst(data[0].xAxis)}年-${this.returnArrLast(data[0].xAxis)}年${this.cityName}省控断面水质类型变化`
      this.chartArr.sideItem1_8.name1 = data[0].yAxis.name
      this.chartArr.sideItem1_8.name2 = data[1].yAxis.name
      this.chartArr.sideItem1_8.name3 = data[2].yAxis.name
      this.chartArr.sideItem1_8.name4 = data[3].yAxis.name
      this.chartArr.sideItem1_8.name5 = data[4].yAxis.name
      this.chartArr.sideItem1_8.name6 = data[5].yAxis.name
      this.chartArr.sideItem1_7.dataSource = data[0].yAxis.source
      this.chartArr.sideItem1_8.xAxis = data[0].xAxis
      this.chartArr.sideItem1_8.yAxis1 = data[0].yAxis.list
      this.chartArr.sideItem1_8.yAxis2 = data[1].yAxis.list
      this.chartArr.sideItem1_8.yAxis3 = data[2].yAxis.list
      this.chartArr.sideItem1_8.yAxis4 = data[3].yAxis.list
      this.chartArr.sideItem1_8.yAxis5 = data[4].yAxis.list
      this.chartArr.sideItem1_8.yAxis6 = data[5].yAxis.list
      this.sideItem1_8Chart('sideItem1_8', this.chartArr.sideItem1_8)
      this.tableDataResult = `2019年，${this.cityName}<span class="light">27</span>个省控水质断面中，I类<span class="light">${this.returnArrLast(data[0].yAxis.list)}</span>个，II类<span class="light">${this.returnArrLast(data[1].yAxis.list)}</span>个，III类<span class="light">${this.returnArrLast(data[2].yAxis.list)}</span>个，IV类<span class="light">${this.returnArrLast(data[3].yAxis.list)}</span>个，V类<span class="light">${this.returnArrLast(data[4].yAxis.list)}</span>个，劣IV类<span class="light">${this.returnArrLast(data[5].yAxis.list)}</span>个。`
    })
    // 市省控断面水质类型
    sectionList({
      area: this.cityName
    }).then(res => {
      console.log(res);

      let data = res.data.data
      this.tableData = data
      let arr = []
      for (let i = 0; i < data.length; i++) {
        arr.push(data[i].list.length)
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > this.typeLengthMax) {
          this.typeLengthMax = arr[i]
        }
      }
    })
  },
  methods: {
    // 导出各省控断面水质类型
    exportType() {
      window.open('http://192.168.13.251:8083/section/exportSection?area=' + this.cityName, '_self')
    },
    // 0、空气质量达到优良天数比例变化图表
    sideItem1_0Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
          color: data.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '56px',
          barGap: '50%',
          itemStyle: {
            normal: {
              color: data.color
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 1、各地市空气质量达到优良天数比例对比图表
    sideItem1_1Chart(id, data) {
      let cityName = this.cityName
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: data.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '32px',
          barGap: '50%',
          animation: false,
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#ff5975'
              }
            },
            data: [{
              yAxis: data.avg
            }],
            label: {
              normal: {
                formatter: '全省平均值',
                position: 'middle'
              }
            }
          },
          itemStyle: {
            normal: {
              color: function (params) {
                if (params.name === cityName) {
                  return data.lightColor
                } else {
                  return data.color
                }
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 2、管辖各县级城市空气质量达到优良天数比例图表
    sideItem1_2Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '32px',
          barGap: '50%',
          itemStyle: {
            normal: {
              color: data.color
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 3、市管辖各县级城市PM2.5年均浓度（µg/m3）对比图表
    sideItem1_3Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '32px',
          barGap: '50%',
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#fff45c'
              }
            },
            data: [{
              yAxis: 35
            }],
            label: {
              normal: {
                formatter: '国家空气质量二级标准要求（35µg/m3）',
                position: 'middle'
              }
            }
          },
          itemStyle: {
            normal: {
              color: data.color
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 4、各地市PM2.5年均浓度（µg/m3）对比图表
    sideItem1_4Chart(id, data) {
      let cityName = this.cityName
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: ['#00afaf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '32px',
          barGap: '50%',
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#ff5975' // 这儿设置安全基线颜色
              }
            },
            data: [{
              yAxis: 35 //这儿定义基准线的数值为多少
            }],
            label: {
              normal: {
                formatter: '国家空气质量二级标准要求（35µg/m3）', // 这儿设置安全基线
                position: 'middle'
              }
            }
          },
          itemStyle: {
            normal: {
              color: function (params) {
                if (params.name === cityName) {
                  return data.lightColor
                } else {
                  return data.color
                }
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 5、市PM2.5年平均浓度（µg/m3）变化图表
    sideItem1_5Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '56px',
          barGap: '50%',
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#fff45c'
              }
            },
            data: [{
              yAxis: 35
            }],
            label: {
              normal: {
                formatter: '国家空气质量二级标准要求（35µg/m3）',
                position: 'middle'
              }
            }
          },
          itemStyle: {
            normal: {
              color: data.color
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 6、市各县（市、区）III类以上水质断面数量
    sideItem1_6Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name1, data.name2]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
            name: data.name1,
            type: data.chartType,
            barWidth: '30px',
            barGap: '0%',
            itemStyle: {
              normal: {
                color: data.color1
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.yAxis1
          },
          {
            name: data.name2,
            type: data.chartType,
            barWidth: '30px',
            itemStyle: {
              normal: {
                color: data.color2
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.yAxis2
          }
        ]
      }
      chart.setOption(option)
    },
    // 7、全省各地市III类以上水质断面占比图表
    sideItem1_7Chart(id, data) {
      let cityName = this.cityName
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: ['#00ffb8'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
          name: data.name,
          type: data.chartType,
          barWidth: '32px',
          barGap: '50%',
          itemStyle: {
            normal: {
              color: function (params) {
                if (params.name === cityName) {
                  return data.color
                } else {
                  return data.lightColor
                }
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 8、市省控断面水质类型变化比例图表
    sideItem1_8Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let labelConfig = {
        normal: {
          show: true,
          position: 'inside',
          textStyle: {
            fontSize: 12,
            color: this.chartColor.textColor
          }
        }
      }
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [
            data.name1,
            data.name2,
            data.name3,
            data.name4,
            data.name5,
            data.name6
          ]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#0124b3'
            }
          }
        }],
        series: [{
            name: data.name1,
            type: data.chartType,
            barWidth: '32px',
            barGap: '50%',
            stack: true,
            itemStyle: {
              normal: {
                color: data.color1
              }
            },
            label: labelConfig,
            data: data.yAxis1
          },
          {
            name: data.name2,
            type: data.chartType,
            barWidth: '32px',
            barGap: '50%',
            stack: true,
            itemStyle: {
              normal: {
                color: data.color2
              }
            },
            label: labelConfig,
            data: data.yAxis2
          },
          {
            name: data.name3,
            type: data.chartType,
            barWidth: '32px',
            barGap: '50%',
            stack: true,
            itemStyle: {
              normal: {
                color: data.color3
              }
            },
            label: labelConfig,
            data: data.yAxis3
          },
          {
            name: data.name4,
            type: data.chartType,
            barWidth: '32px',
            barGap: '50%',
            stack: true,
            itemStyle: {
              normal: {
                color: data.color4
              }
            },
            label: labelConfig,
            data: data.yAxis4
          },
          {
            name: data.name5,
            type: data.chartType,
            barWidth: '32px',
            barGap: '50%',
            stack: true,
            itemStyle: {
              normal: {
                color: data.color5
              }
            },
            label: labelConfig,
            data: data.yAxis5
          },
          {
            name: data.name6,
            type: data.chartType,
            barWidth: '32px',
            barGap: '50%',
            stack: true,
            itemStyle: {
              normal: {
                color: data.color6
              }
            },
            label: labelConfig,
            data: data.yAxis6
          }
        ]
      }
      chart.setOption(option)
    }
  }
}