import {
  getScaleData,
  getScaleDataWithName
}
from '@/api/environmentalQuality'
export const ecologicaleResourcesMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、全省各地市森林覆盖率
    getScaleData({
      area: '浙江省',
      zb: '森林覆盖率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem2_0.title = `${data.yAxis.year}年全省各地市森林覆盖率`
      this.chartArr.sideItem2_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem2_0.dataSource = data.yAxis.source
      this.chartArr.sideItem2_0.xAxis = data.xAxis
      this.chartArr.sideItem2_0.yAxis = data.yAxis.list

      this.sideItem2_0Chart('sideItem2_0', this.chartArr.sideItem2_0)
    })
    // 1、全省各地市活立木蓄积量占比
    getScaleDataWithName({
      area: '浙江省',
      zbs: '活立木蓄积量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem2_1.list = data.list
      this.chartArr.sideItem2_1.title = `${data.year}年全省各地市活立木蓄积量占比`
      this.chartArr.sideItem2_1.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem2_1.dataSource = data.source
      for (let i = 0; i < data.list.length; i++) {
        this.chartArr.sideItem2_1.legends.push(data.list[i].name)
      }
      this.sideItem2_1Chart('sideItem2_1', this.chartArr.sideItem2_1)
    })
    // 2、全省各地市林地面积占比
    getScaleDataWithName({
      area: '浙江省',
      zbs: '林地面积'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem2_2.list = data.list
      this.chartArr.sideItem2_2.title = `${data.year}年全省各地市林地面积占比`
      this.chartArr.sideItem2_2.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem2_2.dataSource = data.source
      for (let i = 0; i < data.list.length; i++) {
        this.chartArr.sideItem2_2.legends.push(data.list[i].name)
      }
      this.sideItem2_2Chart('sideItem2_2', this.chartArr.sideItem2_2)
    })
    // 3、全省各地市单位面积森林蓄积量
    getScaleData({
      area: '浙江省',
      zb: '单位面积森林蓄积量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem2_3.title = `${data.yAxis.year}年全省各地市单位面积森林蓄积量`
      this.chartArr.sideItem2_3.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem2_3.dataSource = data.yAxis.source
      this.chartArr.sideItem2_3.xAxis = data.xAxis
      this.chartArr.sideItem2_3.yAxis = data.yAxis.list
      this.sideItem2_3Chart('sideItem2_3', this.chartArr.sideItem2_3)
    })
    // 4、获取市各县、市森林覆盖率并绘制图表
    getScaleData({
      area: this.cityName,
      zb: '森林覆盖率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem2_4.title = `${data.yAxis.year}年${this.cityName}各县、市森林覆盖率`
      this.chartArr.sideItem2_4.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem2_4.dataSource = data.yAxis.source
      this.chartArr.sideItem2_4.xAxis = data.xAxis
      this.chartArr.sideItem2_4.yAxis = data.yAxis.list
      this.sideItem2_4Chart('sideItem2_4', this.chartArr.sideItem2_4)
    })
    // 5、获取各县、市单位面积森林蓄积量并绘制图表
    getScaleData({
      area: this.cityName,
      zb: '单位面积森林蓄积量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem2_5.title = `${data.yAxis.year}${this.cityName}年各县、市单位面积森林蓄积量`
      this.chartArr.sideItem2_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem2_5.dataSource = data.yAxis.source
      this.chartArr.sideItem2_5.xAxis = data.xAxis
      this.chartArr.sideItem2_5.yAxis = data.yAxis.list
      this.sideItem2_5Chart('sideItem2_5', this.chartArr.sideItem2_5)
    })
  },
  methods: {
    // 0、全省各地市森林覆盖率
    sideItem2_0Chart(id, data) {
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
    // 1、全省各地市活立木蓄积量占比图表
    sideItem2_1Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '15%',
          itemWidth: 35,
          itemHeight: 9,
          itemGap: 25,
          textStyle: {
            fontSize: '14',
            color: '#fff'
          },
          data: data.legends
        },
        series: [{
          name: '活力木蓄积量（万立方米）',
          type: 'pie',
          selectedMode: 'single',
          radius: [120, 170],
          center: ['35%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{b|{b}}\n{c|{c}万立方米}',
              rich: {
                b: {
                  fontSize: 28,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                c: {
                  fontSize: 28,
                  padding: [8, 0],
                  color: '#00d7e9'
                }
              }
            },
            emphasis: {
              show: true //文字至于中间时，这里需为true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              color: function (params) {
                //自定义颜色
                var colorList = [
                  '#2072ed',
                  '#ff7723',
                  '#8e30ff',
                  '#23fddc',
                  '#2a885c',
                  '#d0fbff',
                  '#fed700',
                  '#96ff00',
                  '#ff89e5',
                  '#ffb0b0',
                  '#e8395d'
                ]
                return colorList[params.dataIndex]
              }
            }
          },
          data: data.list
        }]
      }
      chart.setOption(option)

      this.pieSelected(chart, data.list, '台州市')
    },
    // 2、全省各地市林地面积占比图表
    sideItem2_2Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '15%',
          itemWidth: 35,
          itemHeight: 9,
          itemGap: 25,
          textStyle: {
            fontSize: '14',
            color: '#fff'
          },
          data: data.legends
        },
        series: [{
          name: '活力木蓄积量（万立方米）',
          type: 'pie',
          selectedMode: 'single',
          radius: [120, 170],
          center: ['35%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{b|{b}}\n{c|{c}万立方米}',
              rich: {
                b: {
                  fontSize: 28,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                c: {
                  fontSize: 28,
                  padding: [8, 0],
                  color: '#00d7e9'
                }
              }
            },
            emphasis: {
              show: true //文字至于中间时，这里需为true
            }
          },
          emphasis: {
            label: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              color: function (params) {
                //自定义颜色
                var colorList = [
                  '#2072ed',
                  '#ff7723',
                  '#8e30ff',
                  '#23fddc',
                  '#2a885c',
                  '#d0fbff',
                  '#fed700',
                  '#96ff00',
                  '#ff89e5',
                  '#ffb0b0',
                  '#e8395d'
                ]
                return colorList[params.dataIndex]
              }
            }
          },
          data: data.list
        }]
      }
      chart.setOption(option)
      this.pieSelected(chart, data.list, '台州市')
    },
    // 3、全省各地市单位面积森林蓄积量图表
    sideItem2_3Chart(id, data) {
      let cityName = this.cityName
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
    // 4、市各县、市森林覆盖率图表
    sideItem2_4Chart(id, data) {
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
    // 5、市PM2.5年平均浓度（µg/m3）变化图表
    sideItem2_5Chart(id, data) {
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
    }
  }
}