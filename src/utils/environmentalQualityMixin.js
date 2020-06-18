import {
  getStructuralData,
  getScaleData,
  sectionNum,
  sectionProportion,
  sectionList
} from '@/api/environmentalQuality'
export const environmentalQualityMixin = {
  data() {
    return {
      typeLengthMax: 0,
      tableData: [],
      sideItem1_0: {
        name: '',
        chartType: 'line',
        color: '#ff5975',
        dataSource: '',
        result: '',
        data: {}
      },
      sideItem1_1: {
        name: '',
        chartType: 'bar',
        color: '#00976d',
        lightColor: '#00ffb8',
        dataSource: '',
        result: '',
        data: {}
      },
      sideItem1_2: {
        name: '',
        chartType: 'bar',
        dataSource: '',
        data: {}
      },
      sideItem1_3: {
        name: '',
        chartType: 'bar',
        color: '#b062ff',
        dataSource: '',
        data: {}
      },
      sideItem1_4: {
        name: '',
        chartType: 'bar',
        color: '#00afaf',
        dataSource: '',
        data: {}
      },
      sideItem1_5: {
        name: 'M2.5浓度（µg/m3）',
        chartType: 'line',
        color: '#b062ff',
        data: {}
      },
      sideItem1_6: {
        name1: 'Ⅲ类以上数量',
        name2: '省控断面数量',
        chartType: 'bar',
        color1: '#ffba00',
        color2: '#498eff',
        dataSource: '',
        data: {}
      },
      sideItem1_7: {
        name: 'Ⅲ以上水质断面比例（省控断面）%',
        chartType: 'bar',
        color: '#008e66',
        dataSource: '',
        data: {}
      },
      sideItem1_8: {
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        name6: '',
        chartType: 'bar',
        color1: '#ff9f7f',
        color2: '#67e0e3',
        color3: '#37a2da',
        color4: '#e062ae',
        color5: '#a44bff',
        color6: '#ffdb5c',
        dataSource: '',
        data: {}
      }
    }
  },
  mounted() {
    // 获取空气质量达到优良天数比例变化数据并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: 'AQI优良率'
    }).then(res => {
      let data = res.data[0]
      this.sideItem1_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem1_0.dataSource = data.yAxis.source
      this.sideItem1_0.data.xAxis = data.xAxis
      this.sideItem1_0.data.yAxis = data.yAxis.list
      this.sideItem1_0Chart('sideItem1_0', this.sideItem1_0)


      let aaa = this.returnArrLast(this.sideItem1_0.data.xAxis)
      let bbb = this.returnArrLast(this.sideItem1_0.data.yAxis)
      let ccc = this.returnArrFirst(this.sideItem1_0.data.xAxis)
      let ddd = this.returnDiff(this.returnArrFirst(this.sideItem1_0.data.yAxis), this.returnArrLast(this.sideItem1_0.data.yAxis))
      let eee = ddd >= 0 ? '增长' : '减少'
      this.sideItem1_0.result = `${aaa}年，台州市空气质量达到优良天数比例达到<span class="light">${bbb}%</span>，与${ccc}年相比${eee}了<span class="light">${Math.abs(ddd)}%</span> `
      
      
      

    })
    // 获取各地市空气质量达到优良天数比例对比并绘制图表
    getScaleData({
      area: '浙江省',
      zb: 'AQI优良率'
    }).then(res => {      
      let data = res.data
      this.sideItem1_1.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem1_1.dataSource = data.yAxis.source
      this.sideItem1_1.data.xAxis = data.xAxis
      this.sideItem1_1.data.yAxis = data.yAxis.list
      this.sideItem1_1.data.avg = this.returnArrAvg(data.yAxis.list)
      let i = data.xAxis.findIndex(function (value) {
        return value === '台州市'
      })
      this.sideItem1_1Chart('sideItem1_1', this.sideItem1_1)


      let aaa = this.returnDiff(this.returnArrAvg(data.yAxis.list), data.yAxis.list[i]) >= 0 ? '高于' : '低于'
      this.sideItem1_1.result = `<p>2018年，台州市空气质量达到优良天数的比例<span class="light">${aaa}</span>全市平均水平，排名上升<span class="light">${3}</span>位</p>`

    })
    // 获取管辖各县级城市空气质量达到优良天数比例并绘制图表
    getScaleData({
      area: '台州市',
      zb: 'AQI优良率'
    }).then(res => {
      let data = res.data
      this.sideItem1_2.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem1_2.dataSource = data.yAxis.source
      this.sideItem1_2.data.xAxis = data.xAxis
      this.sideItem1_2.data.yAxis = data.yAxis.list
      this.sideItem1_2Chart('sideItem1_2', this.sideItem1_2)
    })

    // 获取市管辖各县级城市PM2.5年均浓度（µg/m3）对比并绘制图表
    getScaleData({
      area: '台州市',
      zb: 'PM2.5浓度'
    }).then(res => {
      let data = res.data
      this.sideItem1_3.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem1_3.dataSource = data.yAxis.source
      this.sideItem1_3.data.xAxis = data.xAxis
      this.sideItem1_3.data.yAxis = data.yAxis.list
      this.sideItem1_3Chart('sideItem1_3', this.sideItem1_3)
    })

    // 获取年各地市PM2.5年均浓度（µg/m3）对比并绘制图表
    getScaleData({
      area: '浙江省',
      zb: 'PM2.5浓度'
    }).then(res => {
      let data = res.data
      this.sideItem1_4.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem1_4.data.xAxis = data.xAxis
      this.sideItem1_4.dataSource = data.yAxis.source
      this.sideItem1_4.data.yAxis = data.yAxis.list
      this.sideItem1_4Chart('sideItem1_4', this.sideItem1_4)
    })

    // 获取年台州市管辖各县级城市PM2.5年均浓度（µg/m3）对比并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: 'PM2.5浓度'
    }).then(res => {
      let data = res.data[0]
      this.sideItem1_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem1_5.dataSource = data.yAxis.source
      this.sideItem1_5.data.xAxis = data.xAxis
      this.sideItem1_5.data.yAxis = data.yAxis.list
      this.sideItem1_5Chart('sideItem1_5', this.sideItem1_5)
    })

    // 市省控断面水质类型变化
    sectionNum({
      area: '台州市'
    }).then(res => {
      let data = res.data
      this.sideItem1_6.dataSource = '省生态环境厅'
      this.sideItem1_6.data.xAxis = data.xAxis
      this.sideItem1_6.data.yAxis1 = data.yAxis.threeList
      this.sideItem1_6.data.yAxis2 = data.yAxis.numList
      this.sideItem1_6Chart('sideItem1_6', this.sideItem1_6)
    })
    // 获取全省各地市III类以上水质断面占比数据并绘制图表
    sectionProportion({
      area: '浙江省'
    }).then(res => {
      let data = res.data
      this.sideItem1_7.dataSource = '省生态环境厅'
      this.sideItem1_7.data.xAxis = data.xAxis
      this.sideItem1_7.data.yAxis = data.yAxis.ratelist
      this.sideItem1_7Chart('sideItem1_7', this.sideItem1_7)
    })
    // 获取年台州市省控断面水质类型变化数据并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: 'I类,II类,III类,IV类,V类,劣V类'
    }).then(res => {
      let data = res.data
      this.sideItem1_8.name1 = data[0].yAxis.name
      this.sideItem1_8.name2 = data[1].yAxis.name
      this.sideItem1_8.name3 = data[2].yAxis.name
      this.sideItem1_8.name4 = data[3].yAxis.name
      this.sideItem1_8.name5 = data[4].yAxis.name
      this.sideItem1_8.name6 = data[5].yAxis.name
      this.sideItem1_8.dataSource = data[0].yAxis.source
      this.sideItem1_8.data.xAxis = data[0].xAxis
      this.sideItem1_8.data.yAxis1 = data[0].yAxis.list
      this.sideItem1_8.data.yAxis2 = data[1].yAxis.list
      this.sideItem1_8.data.yAxis3 = data[2].yAxis.list
      this.sideItem1_8.data.yAxis4 = data[3].yAxis.list
      this.sideItem1_8.data.yAxis5 = data[4].yAxis.list
      this.sideItem1_8.data.yAxis6 = data[5].yAxis.list
      this.sideItem1_8Chart('sideItem1_8', this.sideItem1_8)
    })
    // 市省控断面水质类型变化
    sectionList({
      area: '台州市'
    }).then(res => {
      let data = res.data
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
      window.open('http://192.168.13.251:8083/section/exportSection?area=台州市', '_self')
    },
    // 空气质量达到优良天数比例变化图表
    sideItem1_0Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 各地市空气质量达到优良天数比例对比图表
    sideItem1_1Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: data.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
                color: '#ff5975' // 这儿设置安全基线颜色
              }
            },
            data: [{
              yAxis: data.data.avg //这儿定义基准线的数值为多少
            }],
            label: {
              normal: {
                formatter: '全省平均值', // 这儿设置安全基线
                position: 'middle'
              }
            }
          },
          itemStyle: {
            normal: {
              color: function (params) {
                if (params.name === '台州市') {
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 管辖各县级城市空气质量达到优良天数比例图表
    sideItem1_2Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
              color: '#e19605'
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 市管辖各县级城市PM2.5年均浓度（µg/m3）对比图表
    sideItem1_3Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
                color: '#fff45c' // 这儿设置安全基线颜色
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 各地市PM2.5年均浓度（µg/m3）对比图表
    sideItem1_4Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: ['#00afaf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
                if (params.name === '台州市') {
                  return '#00ffff'
                } else {
                  return '#00afaf'
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 市PM2.5年平均浓度（µg/m3）变化图表
    sideItem1_5Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
                color: '#fff45c' // 这儿设置安全基线颜色
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 市各县（市、区）III类以上水质断面数量
    sideItem1_6Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
            data: data.data.yAxis1
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
            data: data.data.yAxis2
          }
        ]
      }
      chart.setOption(option)
    },
    // 全省各地市III类以上水质断面占比图表
    sideItem1_7Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
              // color: function(params) {
              //   if (params.name === '台州市') {
              //     return '#00ffb8'
              //   } else {
              //     return '#00976d'
              //   }
              // }
              color: '#00976d'
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
          data: data.data.yAxis
        }]
      }
      chart.setOption(option)
    },
    // 市省控断面水质类型变化比例图表
    sideItem1_8Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            // axisLine:坐标轴轴线相关设置
            lineStyle: {
              color: '#6291fb' // 底边线的颜色
            }
          },
          data: data.data.xAxis
        }],
        yAxis: [{
          axisTick: {
            show: false // y轴刻度
          },
          axisLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: this.chartColor.textColor // 左边线的颜色
            }
          },
          splitLine: {
            show: true, // y轴分隔线
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
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 12,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.data.yAxis1
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
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.data.yAxis2
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
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.data.yAxis3
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
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.data.yAxis4
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
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.data.yAxis5
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
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.data.yAxis6
          }
        ]
      }
      chart.setOption(option)
    }
  }
}