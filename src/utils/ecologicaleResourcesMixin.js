import {
  getScaleData,
  getScaleDataWithName
}
from '@/api/environmentalQuality'
export const ecologicaleResourcesMixin = {
  data() {
    return {
      sideItem2_0: {
        name: '',
        chartType: 'bar',
        color: '#5c2700',
        dataSource: '',
        data: {}
      },
      sideItem2_1: {
        name: '',
        chartType: 'bar',
        dataSource: '',
        data: {
          legends: []
        }
      },
      sideItem2_2: {
        name: '',
        chartType: 'bar',
        dataSource: '',
        data: {
          legends: []
        }
      },
      sideItem2_3: {
        name: '',
        chartType: 'bar',
        dataSource: '',
        data: {}
      },
      sideItem2_4: {
        name: '',
        chartType: 'bar',
        dataSource: '',
        data: {}
      },
      sideItem2_5: {
        name: 'M2.5浓度（µg/m3）',
        chartType: 'bar',
        dataSource: '',
        data: {}
      }
    }
  },
  mounted() {
    // 全省各地市森林覆盖率
    getScaleData({
      area: '浙江省',
      zb: '森林覆盖率'
    }).then(res => {
      let data = res.data
      this.sideItem2_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem2_0.dataSource = data.yAxis.source
      this.sideItem2_0.data.xAxis = data.xAxis
      this.sideItem2_0.data.yAxis = data.yAxis.list

      this.sideItem2_0Chart('sideItem2_0', this.sideItem2_0)
    })
    // 全省各地市活立木蓄积量占比
    getScaleDataWithName({ area: '浙江省', zbs: '活立木蓄积量' }).then(res => {
      let data = res.data
      let list = data[0].list
      this.sideItem2_1.data.list = list
      this.sideItem2_1.name = `${data[0].name}(${data[0].unit})`
      this.sideItem2_1.dataSource = data[0].source
      for (let i = 0; i < list.length; i++) {
        this.sideItem2_1.data.legends.push(list[i].name)
      }
      this.sideItem2_1Chart('sideItem2_1', this.sideItem2_1)
    })
    // 全省各地市林地面积占比
    getScaleDataWithName({
      area: '浙江省',
      zbs: '林地面积'
    }).then(res => {
      let data = res.data
      let list = data[0].list
      this.sideItem2_2.data.list = list
      this.sideItem2_2.name = `${data[0].name}(${data[0].unit})`
      this.sideItem2_2.dataSource = data[0].source
      for (let i = 0; i < list.length; i++) {
        this.sideItem2_2.data.legends.push(list[i].name)
      }
      this.sideItem2_2Chart('sideItem2_2', this.sideItem2_2)
    })
    // 全省各地市单位面积森林蓄积量
    getScaleData({
      area: '浙江省',
      zb: '单位面积森林蓄积量'
    }).then(res => {
      let data = res.data
      this.sideItem2_3.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem2_3.dataSource = data.yAxis.source
      this.sideItem2_3.data.xAxis = data.xAxis
      this.sideItem2_3.data.yAxis = data.yAxis.list
      this.sideItem2_3Chart('sideItem2_3', this.sideItem2_3)
    })
    // 获取市各县、市森林覆盖率并绘制图表
    getScaleData({
      area: '台州市',
      zb: '森林覆盖率'
    }).then(res => {
      let data = res.data
      // this.sideItem2_4.name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.sideItem2_4.data.xAxis = data.xAxis
      this.sideItem2_4.data.yAxis = data.yAxis.list
      this.sideItem2_4Chart('sideItem2_4', this.sideItem2_4)
    })
    // 获取各县、市单位面积森林蓄积量并绘制图表
    getScaleData({
      area: '台州市',
      zb: '单位面积森林蓄积量'
    }).then(res => {
      let data = res.data
      this.sideItem2_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem2_5.dataSource = data.yAxis.source
      this.sideItem2_5.data.xAxis = data.xAxis
      this.sideItem2_5.data.yAxis = data.yAxis.list
      this.sideItem2_5Chart('sideItem2_5', this.sideItem2_5)
    })
    // countyUnitTreeApi().then(res => {
    //   let data = res.data
    //   let xAxis = []
    //   let yAxis = []
    //   for (let i = 0; i < data.length; i++) {
    //     this.sideItem2_5.data.xAxis.push(data[i].name)
    //     this.sideItem2_5.data.yAxis.push(data[i].value)
    //   }
    //   this.sideItem2_5Chart('sideItem2_5', this.sideItem2_5)
    // })
  },
  methods: {
    // 全省各地市森林覆盖率
    sideItem2_0Chart(id, data) {
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
    // 全省各地市活立木蓄积量占比图表
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
          data: data.data.legends
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
          data: data.data.list
        }]
      }
      chart.setOption(option)

      this.pieSelected(chart, data.data.list,'台州市')
    },
    // 全省各地市林地面积占比图表
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
          data: data.data.legends
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
          data: data.data.list
        }]
      }
      chart.setOption(option)
      this.pieSelected(chart, data.data.list, '台州市')
    },
    // 全省各地市单位面积森林蓄积量图表
    sideItem2_3Chart(id, data) {
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
              color: '#007621'
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
    // 市各县、市森林覆盖率图表
    sideItem2_4Chart(id, data) {
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
              color: '#ff00ff'
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
    sideItem2_5Chart(id, data) {
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
              color: '#00f6ff'
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
    }
  }
}