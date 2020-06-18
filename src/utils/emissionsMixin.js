import {
  getStructuralData,
  getScaleData,
  getScaleDataWithName,
  getStrength
}
from '@/api/environmentalQuality'
export const emissionsMixin = {
  data() {
    return {
      sideItem3_0: {
        name: '',
        chartType: 'line',
        color: '#c90eff',
        dataSource: '',
        data: {}
      },
      sideItem3_1: {
        name: '',
        chartType: 'bar',
        color: '#00976d',
        lightColor: '#00ffb8',
        dataSource: '',
        data: {}
      },
      sideItem3_2: {
        name: '2018年全省各地市化学需氧量排放总量占比',
        data: {
          legends: []
        }
      },
      sideItem3_3: {
        name: '化学需氧量排放强度（千克/万元）',
        chartType: 'bar',
        color: '#b14400',
        lightColor: '#ff7723',
        dataSource: '',
        data: {}
      },
      sideItem3_4: {
        name: '',
        chartType: 'bar',
        color: '#a00062',
        lightColor: '#ff62c2',
        dataSource: '',
        data: {}
      },
      sideItem3_5: {
        name: '',
        chartType: 'line',
        color: '#ff7723',
        dataSource: '',
        data: {}
      },
      sideItem3_6: {
        name: '全省各地市氨氮排放总量占比',
        color: [
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
        ],
        dataSource: '',
        data: {
          legends: []
        }
      },
      sideItem3_7: {
        name: '氨氮排放强度（千克/万元）',
        chartType: 'bar',
        color: '#9d7700',
        lightColor: '#ffd85c',
        dataSource: '省生态环境厅',
        data: {}
      },
      sideItem3_8: {
        name: '',
        chartType: 'bar',
        color: '#00ffb8',
        lightColor: '#00976d',
        dataSource: '',
        data: {}
      },
      sideItem3_9: {
        name: '',
        chartType: 'line',
        color: '#00d8ff',
        dataSource: '',
        data: {}
      },
      sideItem3_10: {
        name: '二氧化硫排放总量占比',
        data: {
          legends: []
        }
      },
      sideItem3_11: {
        name: '二氧化硫（千克/万元）',
        chartType: 'bar',
        color: '#34249a',
        lightColor: '#917fff',
        dataSource: '省生态环境厅',
        data: {}
      },
      sideItem3_12: {
        name: '',
        chartType: 'bar',
        color: '#886000',
        lightColor: '#ffbe23',
        dataSource: '',
        data: {}
      },
      sideItem3_13: {
        name: '',
        chartType: 'line',
        color: '#00ffb8',
        dataSource: '',
        data: {}
      },
      sideItem3_14: {
        name: '全省各地市氮氧化物排放总量占比',
        data: {
          legends: []
        }
      },
      sideItem3_15: {
        name: '氮氧化物（千克/万元）',
        chartType: 'bar',
        color: '#00976d',
        lightColor: '#00ffb8',
        dataSource: '省生态环境厅',
        data: {}
      }
    }
  },
  mounted() {
    // 1、获取市化学需氧量排放总量变化并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data[0]
      this.sideItem3_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_0.dataSource = data.yAxis.source
      this.sideItem3_0.data.xAxis = data.xAxis
      this.sideItem3_0.data.yAxis = data.yAxis.list
      this.sideItem3_0Chart('sideItem3_0', this.sideItem3_0)
    })
    // 2、获取年全省各地市化学需氧量排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      this.sideItem3_1.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_1.dataSource = data.yAxis.source
      this.sideItem3_1.data.xAxis = data.xAxis
      this.sideItem3_1.data.yAxis = data.yAxis.list
      this.sideItem3_1Chart('sideItem3_1', this.sideItem3_1)
    })
    // 3、年全省各地市化学需氧量排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      let list = data[0].list
      this.sideItem3_2.data.list = list
      this.sideItem3_2.name = `${data[0].name}(${data[0].unit})`
      this.sideItem3_2.dataSource = data[0].source
      for (let i = 0; i < list.length; i++) {
        this.sideItem3_2.data.legends.push(list[i].name)
      }
      this.sideItem3_2Chart('sideItem3_2', this.sideItem3_2)
    })
    // 4、获取年全省各地市化学需氧量排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      // this.sideItem3_3.name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      // this.sideItem3_3.dataSource = data.yAxis[0].source
      this.sideItem3_3.data.xAxis = data.xAxis
      this.sideItem3_3.data.yAxis = data.yAxis.list
      this.sideItem3_3Chart('sideItem3_3', this.sideItem3_3)
    })
    // 5、获取全省各地市氨氮排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '氨氮排放总量'
    }).then(res => {
      let data = res.data
      this.sideItem3_4.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_4.dataSource = data.yAxis.source
      this.sideItem3_4.data.xAxis = data.xAxis
      this.sideItem3_4.data.yAxis = data.yAxis.list
      this.sideItem3_4Chart('sideItem3_4', this.sideItem3_4)
    })
    // 6、获取市化学需氧量排放总量变化并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: '氨氮排放总量'
    }).then(res => {
      let data = res.data[0]
      this.sideItem3_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_5.dataSource = data.yAxis.source
      this.sideItem3_5.data.xAxis = data.xAxis
      this.sideItem3_5.data.yAxis = data.yAxis.list
      this.sideItem3_5Chart('sideItem3_5', this.sideItem3_5)
    })
    // 7、年全省各地市氨氮排放总量占比
    getScaleDataWithName({
      area: '浙江省',
      zbs: '氨氮排放总量'
    }).then(res => {
      let data = res.data
      let list = data[0].list
      this.sideItem3_6.data.list = list
      this.sideItem3_6.name = `${data[0].name}(${data[0].unit})`
      this.sideItem3_6.dataSource = data[0].source
      for (let i = 0; i < list.length; i++) {
        this.sideItem3_6.data.legends.push(list[i].name)
      }
      this.sideItem3_6Chart('sideItem3_6', this.sideItem3_6)
    })
    // 8、获取年全省各地市氨氮排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      // this.sideItem3_7.name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      // this.sideItem3_7.dataSource = data.yAxis[0].source
      this.sideItem3_7.data.xAxis = data.xAxis
      this.sideItem3_7.data.yAxis = data.yAxis.list
      this.sideItem3_7Chart('sideItem3_7', this.sideItem3_7)
    })
    // 9、获取年全省各地市二氧化硫排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      this.sideItem3_8.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_8.dataSource = data.yAxis.source
      this.sideItem3_8.data.xAxis = data.xAxis
      this.sideItem3_8.data.yAxis = data.yAxis.list
      this.sideItem3_8Chart('sideItem3_8', this.sideItem3_8)
    })
    // 10、获取市二氧化硫排放总量变化并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data[0]
      this.sideItem3_9.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_9.dataSource = data.yAxis.source
      this.sideItem3_9.data.xAxis = data.xAxis
      this.sideItem3_9.data.yAxis = data.yAxis.list
      this.sideItem3_9Chart('sideItem3_9', this.sideItem3_9)
    })
    // 11、年全省各地市二氧化硫排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      let list = data[0].list
      this.sideItem3_10.data.list = list
      this.sideItem3_10.name = `${data[0].name}(${data[0].unit})`
      this.sideItem3_10.dataSource = data[0].source
      for (let i = 0; i < list.length; i++) {
        this.sideItem3_10.data.legends.push(list[i].name)
      }
      this.sideItem3_10Chart('sideItem3_10', this.sideItem3_10)
    })
    // 12、获取年全省各地市氨氮排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      // this.sideItem3_11.name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      // this.sideItem3_11.dataSource = data.yAxis[0].source
      this.sideItem3_11.data.xAxis = data.xAxis
      this.sideItem3_11.data.yAxis = data.yAxis.list
      this.sideItem3_11Chart('sideItem3_11', this.sideItem3_11)
    })
    // 13、获取年全省各地市化学需氧量排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      this.sideItem3_12.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_12.dataSource = data.yAxis.source
      this.sideItem3_12.data.xAxis = data.xAxis
      this.sideItem3_12.data.yAxis = data.yAxis.list
      this.sideItem3_12Chart('sideItem3_12', this.sideItem3_12)
    })
    // 14、获取年全省各地市氮氧化物排放总量并绘制图表
    getStructuralData({
      area: '台州市',
      zbs: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data[0]
      this.sideItem3_13.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.sideItem3_13.dataSource = data.yAxis.source
      this.sideItem3_13.data.xAxis = data.xAxis
      this.sideItem3_13.data.yAxis = data.yAxis.list
      this.sideItem3_13Chart('sideItem3_13', this.sideItem3_13)
    })
    // 15、年全省各地市氮氧化物排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      let list = data[0].list
      this.sideItem3_14.data.list = list
      this.sideItem3_14.name = `${data[0].name}(${data[0].unit})`
      this.sideItem3_14.dataSource = data[0].source
      for (let i = 0; i < list.length; i++) {
        this.sideItem3_14.data.legends.push(list[i].name)
      }
      this.sideItem3_14Chart('sideItem3_14', this.sideItem3_14)
    })
    // 16、获取年全省各地市氮氧化物排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      // this.sideItem3_15.name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      // this.sideItem3_15.dataSource = data.yAxis[0].source
      this.sideItem3_15.data.xAxis = data.xAxis
      this.sideItem3_15.data.yAxis = data.yAxis.list
      this.sideItem3_15Chart('sideItem3_15', this.sideItem3_15)
    })
  },
  methods: {
    // 市化学需氧量排放总量变化图表
    sideItem3_0Chart(id, data) {
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
    // 全省各地市化学需氧量排放总量对比图表
    sideItem3_1Chart(id, data) {
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
    // 年全省各地市化学需氧量排放总量占比图表
    sideItem3_2Chart(id, data) {
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
              formatter: '{b|{b}}\n{a|化学需氧量排放总量}\n{c|{c}万立方米}',
              rich: {
                a: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                b: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                c: {
                  fontSize: 22,
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

      this.pieSelected(chart, data.data.list, '台州市')
    },
    // 年全省各地市化学需氧量排放强度图表
    sideItem3_3Chart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: ['#9d7700'],
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
    // 全省各地市二氧化硫排放总量占比图表
    sideItem3_4Chart(id, data) {
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
    // 市化学需氧量排放总量变化变化图表
    sideItem3_5Chart(id, data) {
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
    // 全省各地市氨氮排放总量占比
    sideItem3_6Chart(id, data) {
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
          name: '氨氮排放总量',
          type: 'pie',
          selectedMode: 'single',
          radius: [120, 170],
          center: ['35%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{b|{b}}\n{a|氨氮排放总量}\n{c|{c}万立方米}',
              rich: {
                a: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                b: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                c: {
                  fontSize: 22,
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
                var colorList = data.color
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
    // 年全省各地市氨氮排放强度图表
    sideItem3_7Chart(id, data) {
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
    // 年全省各地市二氧化硫排放总量
    sideItem3_8Chart(id, data) {
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
              color: '#00825e'
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
    // 全省各地市二氧化硫排放总量占比图表
    sideItem3_9Chart(id, data) {
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
    // 年全省各地市二氧化硫排放总量占比
    sideItem3_10Chart(id, data) {
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
          name: '二氧化硫排放总量',
          type: 'pie',
          selectedMode: 'single',
          radius: [120, 170],
          center: ['35%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{b|{b}}\n{a|二氧化硫}\n{c|{c}万立方米}',
              rich: {
                a: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                b: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                c: {
                  fontSize: 22,
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

      this.pieSelected(chart, data.data.list, '台州市')
    },
    // 年全省各地市氨氮排放强度
    sideItem3_11Chart(id, data) {
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
    // 年全省各地市氮氧化物排放总量
    sideItem3_12Chart(id, data) {
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
    // 年全省各地市氮氧化物排放总量图表
    sideItem3_13Chart(id, data) {
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
    // 年全省各地市氮氧化物排放总量占比
    sideItem3_14Chart(id, data) {
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
              formatter: '{b|{b}}\n{a|化学需氧量排放总量}\n{c|{c}万立方米}',
              rich: {
                a: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                b: {
                  fontSize: 22,
                  lineHeight: 33,
                  color: '#00d7e9'
                },
                c: {
                  fontSize: 22,
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

      this.pieSelected(chart, data.data.list, '台州市')
    },
    // 年全省各地市氮氧化物排放强度图表
    sideItem3_15Chart(id, data) {
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
    }
  }
}