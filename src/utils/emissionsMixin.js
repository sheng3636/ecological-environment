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
    }
  },
  mounted() {
    // 0、获取市化学需氧量排放总量变化并绘制图表
    getStructuralData({      
      area: this.cityName,
      zbs: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_0.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}化学需氧量排放总量变化`
      this.chartArr.sideItem3_0.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_0.dataSource = data.yAxis.source
      this.chartArr.sideItem3_0.xAxis = data.xAxis
      this.chartArr.sideItem3_0.yAxis = data.yAxis.list
      this.sideItem3_0Chart('sideItem3_0', this.chartArr.sideItem3_0)
    })
    // 1、获取年全省各地市化学需氧量排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data      
      this.chartArr.sideItem3_1.title = `${data.yAxis.year}年全省各地市化学需氧量排放总量`
      this.chartArr.sideItem3_1.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_1.dataSource = data.yAxis.source
      this.chartArr.sideItem3_1.xAxis = data.xAxis
      this.chartArr.sideItem3_1.yAxis = data.yAxis.list
      this.sideItem3_1Chart('sideItem3_1', this.chartArr.sideItem3_1)
    })
    // 2、年全省各地市化学需氧量排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data[0]
      let list = data.list
      this.chartArr.sideItem3_2.list = list
      this.chartArr.sideItem3_2.title = `${data.year}年全省各地市化学需氧量排放总量占比`
      this.chartArr.sideItem3_2.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_2.dataSource = data.source
      for (let i = 0; i < list.length; i++) {
        this.chartArr.sideItem3_2.legends.push(list[i].name)
      }
      this.sideItem3_2Chart('sideItem3_2', this.chartArr.sideItem3_2)
    })
    // 3、获取年全省各地市化学需氧量排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '化学需氧量排放总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_3.title = `${data.yAxis.year}年全省各地市化学需氧量排放强度`
      this.chartArr.sideItem3_3.xAxis = data.xAxis
      this.chartArr.sideItem3_3.yAxis = data.yAxis.list
      this.sideItem3_3Chart('sideItem3_3', this.chartArr.sideItem3_3)
    })

    // 4、获取全省各地市氨氮排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '氨氮排放总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_4.title = `${data.yAxis.year}年全省各地市氨氮排放总量`
      this.chartArr.sideItem3_4.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_4.dataSource = data.yAxis.source
      this.chartArr.sideItem3_4.xAxis = data.xAxis
      this.chartArr.sideItem3_4.yAxis = data.yAxis.list
      this.sideItem3_4Chart('sideItem3_4', this.chartArr.sideItem3_4)
    })
    // 5、获取市化学需氧量排放总量变化并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '氨氮排放总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_5.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}氨氮排放总量变化`
      this.chartArr.sideItem3_5.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_5.dataSource = data.yAxis.source
      this.chartArr.sideItem3_5.xAxis = data.xAxis
      this.chartArr.sideItem3_5.yAxis = data.yAxis.list
      this.sideItem3_5Chart('sideItem3_5', this.chartArr.sideItem3_5)
    })
    // 6、年全省各地市氨氮排放总量占比
    getScaleDataWithName({
      area: '浙江省',
      zbs: '氨氮排放总量'
    }).then(res => {
      let data = res.data[0]
      let list = data.list
      this.chartArr.sideItem3_6.list = list
      this.chartArr.sideItem3_6.title = `${data.year}年全省各地市氨氮排放总量占比`
      this.chartArr.sideItem3_6.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_6.dataSource = data.source
      for (let i = 0; i < list.length; i++) {
        this.chartArr.sideItem3_6.legends.push(list[i].name)
      }
      this.sideItem3_6Chart('sideItem3_6', this.chartArr.sideItem3_6)
     })
    // 7、获取年全省各地市氨氮排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '氨氮排放总量'
    }).then(res => {      
      let data = res.data
      this.chartArr.sideItem3_7.title = `${data.yAxis.year}年全省各地市氨氮排放强度`
      this.chartArr.sideItem3_7.xAxis = data.xAxis
      this.chartArr.sideItem3_7.yAxis = data.yAxis.list
      this.sideItem3_7Chart('sideItem3_7', this.chartArr.sideItem3_7)
    })

    // 8、获取年全省各地市二氧化硫排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_8.title = `${data.yAxis.year}年全省各地市二氧化硫排放总量`
      this.chartArr.sideItem3_8.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_8.dataSource = data.yAxis.source
      this.chartArr.sideItem3_8.xAxis = data.xAxis
      this.chartArr.sideItem3_8.yAxis = data.yAxis.list
      this.sideItem3_8Chart('sideItem3_8', this.chartArr.sideItem3_8)
    })
    // 9、获取市二氧化硫排放总量变化并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_5.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}二氧化硫排放总量变化`
      this.chartArr.sideItem3_9.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_9.dataSource = data.yAxis.source
      this.chartArr.sideItem3_9.xAxis = data.xAxis
      this.chartArr.sideItem3_9.yAxis = data.yAxis.list
      this.sideItem3_9Chart('sideItem3_9', this.chartArr.sideItem3_9)
    })
    // 10、年全省各地市二氧化硫排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data[0]
      let list = data.list
      this.chartArr.sideItem3_10.list = list
      this.chartArr.sideItem3_10.title = `${data.year}年全省各地市二氧化硫排放总量占比`
      this.chartArr.sideItem3_10.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_10.dataSource = data.source
      for (let i = 0; i < list.length; i++) {
        this.chartArr.sideItem3_10.legends.push(list[i].name)
      }
      this.sideItem3_10Chart('sideItem3_10', this.chartArr.sideItem3_10)
    })
    // 11、获取年全省各地市二氧化硫排放并绘制图表
    getStrength({
      area: '浙江省',
      zb: '二氧化硫区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_11.title = `${data.yAxis.year}年全省各地市二氧化硫排放强度`
      this.chartArr.sideItem3_11.xAxis = data.xAxis
      this.chartArr.sideItem3_11.yAxis = data.yAxis.list
      this.sideItem3_11Chart('sideItem3_11', this.chartArr.sideItem3_11)      
    })

    // 12、获取年全省各地市化学需氧量排放总量并绘制图表
    getScaleData({
      area: '浙江省',
      zb: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_12.title = `${data.yAxis.year}全省各地市氮氧化物排放总量`
      this.chartArr.sideItem3_12.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_12.dataSource = data.yAxis.source
      this.chartArr.sideItem3_12.xAxis = data.xAxis
      this.chartArr.sideItem3_12.yAxis = data.yAxis.list
      this.sideItem3_12Chart('sideItem3_12', this.chartArr.sideItem3_12)
    })
    // 13、获取年全省各地市氮氧化物排放总量并绘制图表
    getStructuralData({
      area: this.cityName,
      zbs: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem3_13.title = `${this.returnArrFirst(data.xAxis)}年-${this.returnArrLast(data.xAxis)}年${this.cityName}氮氧化物排放总量变化`
      this.chartArr.sideItem3_13.name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem3_13.dataSource = data.yAxis.source
      this.chartArr.sideItem3_13.xAxis = data.xAxis
      this.chartArr.sideItem3_13.yAxis = data.yAxis.list
      this.sideItem3_13Chart('sideItem3_13', this.chartArr.sideItem3_13)
    })
    // 14、年全省各地市氮氧化物排放总量占比并绘制图表
    getScaleDataWithName({
      area: '浙江省',
      zbs: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data[0]      
      this.chartArr.sideItem3_14.list = data.list
      this.chartArr.sideItem3_14.title = `${data.year}年全省各地市氮氧化物排放总量占比`
      this.chartArr.sideItem3_14.name = `${data.name}(${data.unit})`
      this.chartArr.sideItem3_14.dataSource = data.source
      for (let i = 0; i < data.list.length; i++) {
        this.chartArr.sideItem3_14.legends.push(data.list[i].name)
      }
      this.sideItem3_14Chart('sideItem3_14', this.chartArr.sideItem3_14)
    })
    // 16、获取年全省各地市氮氧化物排放强度并绘制图表
    getStrength({
      area: '浙江省',
      zb: '氮氧化物区域总量'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem3_15.title = `${data.yAxis.year}年全省各地市氮氧化物排放强度`
      this.chartArr.sideItem3_15.xAxis = data.xAxis
      this.chartArr.sideItem3_15.yAxis = data.yAxis.list
      this.sideItem3_15Chart('sideItem3_15', this.chartArr.sideItem3_15)
    })
  },
  methods: {
    // 0、市化学需氧量排放总量变化图表
    sideItem3_0Chart(id, data) {
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
    // 1、全省各地市化学需氧量排放总量对比图表
    sideItem3_1Chart(id, data) {
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
    // 2、年全省各地市化学需氧量排放总量占比图表
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
          data: data.list
        }]
      }
      chart.setOption(option)

      this.pieSelected(chart, data.list, this.cityName)
    },
    // 3、年全省各地市化学需氧量排放强度图表
    sideItem3_3Chart(id, data) {
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
                if (params.name === '台州市') {
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

    // 4、全省各地市二氧化硫排放总量占比图表
    sideItem3_4Chart(id, data) {
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
    // 5、市化学需氧量排放总量变化变化图表
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
    // 6、全省各地市氨氮排放总量占比
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
          data: data.legends
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
          data: data.list
        }]
      }
      chart.setOption(option)

      this.pieSelected(chart, data.list, this.cityName)
    },
    // 7、年全省各地市氨氮排放强度图表
    sideItem3_7Chart(id, data) {
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

    // 8、年全省各地市二氧化硫排放总量
    sideItem3_8Chart(id, data) {
      let cityName = this.cityName
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color:data.color,
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
    // 9、全省各地市二氧化硫排放总量占比图表
    sideItem3_9Chart(id, data) {
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
    // 10、年全省各地市二氧化硫排放总量占比
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
          data: data.legends
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
          data: data.list
        }]
      }
      chart.setOption(option)

      this.pieSelected(chart, data.list, this.cityName)
    },
    // 11、年全省各地市氨氮排放强度
    sideItem3_11Chart(id, data) {
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

    // 12、年全省各地市氮氧化物排放总量
    sideItem3_12Chart(id, data) {
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
    // 13、年全省各地市氮氧化物排放总量图表
    sideItem3_13Chart(id, data) {
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
    // 14、年全省各地市氮氧化物排放总量占比
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
          data: data.list
        }]
      }
      chart.setOption(option)

      this.pieSelected(chart, data.list, this.cityName)
    },
    // 15、年全省各地市氮氧化物排放强度图表
    sideItem3_15Chart(id, data) {
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
    }
  }
}