import feedback from '@/components/feedback'
import {
  getStore,
  base64ToBlob
} from '@/utils/mUtils'
export const finishMixin = {
  components: {
    feedback
  },
  data() {
    return {
      baseUrl: process.env.NODE_ENV === 'production' ? 'http://47.103.102.173:8881/ecologicalMap/' : 'http://192.168.0.102:8083/', // 系统域名
      // baseUrl: 'http://47.103.102.173:8881/ecologicalMap/',
      analyzeArea: getStore('analyzeArea'), // 被分析城市
      fullscreenLoading: false, // 是否显示导出文件模板进度条
      filePercentage: 0, // 导出模板进度体百分比数值
      imagesVisi: false, // 是否显示保存图片弹窗
      whichEchart: null, // 要被下载图表对象id
      imagesName: '', // 图片名称
      fnName: null,
      chartColor: {
        backgroundColor: 'rgba(0,0,0,0)',
        textColor: '#fff'
      }, // 下载图片各颜色值
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'rgba(51, 100, 98)',
        'hsla(209, 100%, 56%, 0.73)',
        'rgba(0, 0, 0)'
      ], // ColorPicker 颜色选择器背景颜色预定义颜色数组
      feedbackVisi: false, // 是否显示反馈意见弹窗
      feedForm: {
        userName: '',
        title: '',
        textarea: ''
      },
      aaaAlist: [{
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
        {
          zhiBiao: '城乡居民收入比',
          provinceRank: 5,
          provinceRank1: 10,
          rankChange: -5,
        },
      ],
    }
  },
  mounted() {

  },
  methods: {
    // 柱状图+折线图
    barLineChart(id, data) {
      let legends = []
      let barLineColors = []
      let seriesArr = []
      for (let i = 0; i < data.chartArr.length; i++) {
        legends.push(data.chartArr[i].name)
        barLineColors.push(data.chartArr[i].color)
        if (!data.chartArr[i].markLine) {
          seriesArr.push({
            name: data.chartArr[i].name,
            type: data.chartArr[i].chartType,
            symbol: 'circle',
            symbolSize: 8,

            barWidth: data.barWidth,
            barGap: '0%',
            itemStyle: {
              normal: {
                color: (params) => {
                  if (params.name === this.cityName || params.name === this.countyName) {
                    return data.chartArr[i].lightColor
                  } else {
                    return data.chartArr[i].color
                  }
                }
              }
            },
            label: {
              normal: {
                show: !data.chartArr[i].labelHide,
                position: data.stack ? 'inside' : 'top',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            // markLine: data.markLine ? data.markLine : null,
            data: data.chartArr[i].yAxis
          })
          if (data.chartArr[i].yAxisIndex) {
            seriesArr[i].yAxisIndex = data.chartArr[i].yAxisIndex
          }
          if (data.stack) {
            seriesArr[i].stack = data.stack
          }
        } else {
          seriesArr.push(data.chartArr[i])
        }
      }
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        color: barLineColors,
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
            fontSize: 14,
            color: this.chartColor.textColor
          },
          data: legends
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
            formatter: function (value) {
              var ret = ""; //拼接加\n返回的类目项 
              var maxLength = 6; //每项显示文字个数
              var valLength = value.length; //X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
              if (rowN > 1) //如果类目项的文字大于3,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = ""; //每次截取的字符串
                  var start = i * maxLength; //开始截取的位置
                  var end = start + maxLength; //结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              } else {
                return value;
              }
            },
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
          },
          {
            name: '',
            type: 'value',
            max: function (value) {
              return Math.ceil(value.max + 20)
            },
            axisTick: {
              // y轴刻度
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#fff' // 左边线的颜色
              }
            },
            splitLine: {
              show: false // y轴分隔线
            }
          }
        ],
        series: seriesArr
      }
      chart.clear()
      chart.setOption(option)
    },
    // 饼图
    pieChart(id, data) {
      let legends = []
      for (let i = 0; i < data.chartArr[0].list.length; i++) {
        legends.push(data.chartArr[0].list[i].name)
      }
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '2%',
          top: '15%',
          itemWidth: 35,
          itemHeight: 9,
          itemGap: 25,
          selectedMode: false,
          textStyle: {
            fontSize: '14',
            color: this.chartColor.textColor
          },
          data: legends
        },
        series: [{
          name: data.chartArr[0].name,
          type: 'pie',
          radius: [120, 170],
          center: ['35%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{b|{b}}\n{c|{c}' + data.chartArr[0].unit + '}',
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
              show: true
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
                let colorList = [
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
                  '#e8395d',
                  '#00fdad',
                  '#a0bdff',
                  '#cd8600',
                  '#ff856d',
                  '#980e7a',
                  '#00c669',
                ]
                return colorList[params.dataIndex]
              }
            }
          },
          data: data.chartArr[0].list
        }]
      }
      chart.clear()
      chart.setOption(option)
      pieSelected(chart, data.chartArr[0].list, data.chartArr[0].selectFan)

      function pieSelected(target, data, selecdFan) {
        let k = data.findIndex(function (value) {
          return value.name === selecdFan
        })
        target.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: k
        })
        target.on('mouseover', function (e) {
          if (e.dataIndex != k) {
            target.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: k
            })
          }
        })
        target.on('mouseout', function (e) {
          target.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: k
          })
        })
      }
    },
    // 横向柱状图
    horizontalChart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          formatter: '{b}:<br />{c}%',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max: 100,
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
          },
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              var ret = ""; //拼接加\n返回的类目项 
              var maxLength = data.rowMaxLength; //每项显示文字个数
              var valLength = value.length; //X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
              if (rowN > 1) //如果类目项的文字大于3,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = ""; //每次截取的字符串
                  var start = i * maxLength; //开始截取的位置
                  var end = start + maxLength; //结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              } else {
                return value;
              }
            },
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        },
        series: [{
          name: '',
          type: 'bar',
          barWidth: data.barWidth,
          itemStyle: {
            normal: {
              color: (params) => {
                if (params.value >= (2018 - 2016 + 1) * 0.2 * 100) {
                  return '#00ffb4'
                } else {
                  return '#c23531'
                }
              }
            }
          },
          label: {
            normal: {
              show: true,
              formatter: (params) => {
                return params.value + '%'
              },
              position: 'right',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.chartArr[0].yAxis
        }]
      }
      chart.clear()
      chart.setOption(option)
    },
    // 柱状图+折线图+横向柱状图
    horizontalBarLineChart(id, data) {
      let legends = []
      let barLineColors = []
      let seriesArr = []
      for (let i = 0; i < data.chartArr.length; i++) {
        legends.push(data.chartArr[i].name)
        barLineColors.push(data.chartArr[i].color)
        if (!data.chartArr[i].markLine) {
          seriesArr.push({
            name: data.chartArr[i].name,
            type: data.chartArr[i].chartType,
            barWidth: data.barWidth,
            barGap: '0%',
            symbol: 'circle',
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: (params) => {
                  if (params.name === this.cityName || params.name === this.countyName) {
                    return data.chartArr[i].lightColor
                  } else {
                    return data.chartArr[i].color
                  }
                }
              }
            },
            label: {
              normal: {
                show: !data.chartArr[i].labelHide,
                position: data.stack ? 'inside' : 'top',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            data: data.chartArr[i].yAxis
          })
          if (data.chartArr[i].yAxisIndex) {
            seriesArr[i].yAxisIndex = data.chartArr[i].yAxisIndex
          }
          if (data.stack) {
            seriesArr[i].stack = data.stack
          }
        } else {
          seriesArr.push(data.chartArr[i])
        }
      }
      seriesArr.push({
        name: '',
        type: 'bar',
        barWidth: data.barWidth,
        xAxisIndex: 1,
        yAxisIndex: 2,
        itemStyle: {
          normal: {
            color: (params) => {
              if (params.value >= (2018 - 2016 + 1) * 0.2 * 100) {
                return '#00ffb4'
              } else {
                return '#c23531'
              }
            }
          }
        },
        label: {
          normal: {
            show: true,
            formatter: (params) => {
              return params.value + '%'
            },
            position: 'right',
            textStyle: {
              fontSize: 16,
              color: this.chartColor.textColor
            }
          }
        },
        data: data.yAxis1
      })
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        color: barLineColors,
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
            fontSize: 14,
            color: this.chartColor.textColor
          },
          data: legends
        },
        grid: [{
          left: '5%',
          right: '5%',
          bottom: '25%',
          containLabel: true
        }, {
          top: '80%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        }],
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              var ret = ""; //拼接加\n返回的类目项 
              var maxLength = 6; //每项显示文字个数
              var valLength = value.length; //X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
              if (rowN > 1) //如果类目项的文字大于3,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = ""; //每次截取的字符串
                  var start = i * maxLength; //开始截取的位置
                  var end = start + maxLength; //结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              } else {
                return value;
              }
            },
            padding: [5, 0, 5, 0],
            color: this.chartColor.textColor
          },
          axisLine: {
            lineStyle: {
              color: '#6291fb'
            }
          },
          data: data.xAxis
        }, {
          type: 'value',
          max: 100,
          axisTick: {
            show: false
          },
          gridIndex: 1,
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
          },
          boundaryGap: [0, 0.01]
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
          },
          {
            name: '',
            type: 'value',
            max: function (value) {
              return Math.ceil(value.max + 20)
            },
            axisTick: {
              // y轴刻度
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#fff' // 左边线的颜色
              }
            },
            splitLine: {
              show: false // y轴分隔线
            }
          },
          {
            type: 'category',
            gridIndex: 1,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0,
              formatter: function (value) {
                var ret = ""; //拼接加\n返回的类目项 
                var maxLength = 4; //每项显示文字个数
                var valLength = value.length; //X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) //如果类目项的文字大于3,
                {
                  for (var i = 0; i < rowN; i++) {
                    var temp = ""; //每次截取的字符串
                    var start = i * maxLength; //开始截取的位置
                    var end = start + maxLength; //结束截取的位置
                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = value.substring(start, end) + "\n";
                    ret += temp; //凭借最终的字符串
                  }
                  return ret;
                } else {
                  return value;
                }
              },
              padding: [5, 0, 5, 0],
              color: this.chartColor.textColor
            },
            axisLine: {
              lineStyle: {
                color: '#6291fb'
              }
            },
            data: data.xAxis1
          }
        ],
        series: seriesArr
      }
      chart.clear()
      chart.setOption(option)
    },
    // 雷达图
    radarChart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: data.chartArr[0].color,
        tooltip: {},
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: 14,
            color: this.chartColor.textColor
          },
          data: data.chartArr[0].legends
        },
        radar: {
          center: ['50%', '50%'],
          radius: 140,
          name: {
            textStyle: {
              color: this.chartColor.textColor,
            }
          },
          axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
            lineStyle: {
              color: '#fff',
              // 坐标轴线线的颜色。
              width: 1,
              // 坐标轴线线宽。
              type: 'solid',
              // 坐标轴线线的类型。
            }
          },
          splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
            lineStyle: {
              color: '#0124b3',
              // 分隔线颜色
              width: 1,
              // 分隔线线宽
            }
          },
          indicator: data.chartArr[0].indicator
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          label: {
            show: true,
            color: this.chartColor.textColor,
            formatter: function (params) {
              return params.value
            }
          },
          data: [{
            value: data.chartArr[0].seriesData,
            name: data.name
          }]
        }]
      }
      chart.clear()
      chart.setOption(option)
    },
    // 区域缩放图
    dataZoomChart(id, data) {
      let cityIndex = data.xAxis.indexOf(this.countyName)
      let startVal = (cityIndex / data.xAxis.length) * 100
      let legends = []
      let barLineColors = []
      let seriesArr = []
      for (let i = 0; i < data.chartArr.length; i++) {
        legends.push(data.chartArr[i].name)
        barLineColors.push(data.chartArr[i].color)
        seriesArr.push({
          name: data.chartArr[i].name,
          type: data.chartArr[i].chartType,
          barWidth: data.barWidth,
          barGap: '0%',
          itemStyle: {
            normal: {
              color: (params) => {
                if (params.name === this.cityName || params.name === this.countyName) {
                  return data.chartArr[i].lightColor
                } else {
                  return data.chartArr[i].color
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
          data: data.chartArr[i].yAxis
        })
      }
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        color: barLineColors,
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        calculable: true,
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: 14,
            color: this.chartColor.textColor
          },
          data: legends
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              var ret = ""; //拼接加\n返回的类目项 
              var maxLength = 4; //每项显示文字个数
              var valLength = value.length; //X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
              if (rowN > 1) //如果类目项的文字大于3,
              {
                for (var i = 0; i < rowN; i++) {
                  var temp = ""; //每次截取的字符串
                  var start = i * maxLength; //开始截取的位置
                  var end = start + maxLength; //结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              } else {
                return value;
              }
            },
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
        dataZoom: [{
          show: true,
          start: startVal,
          end: startVal + 20,
          height: 20,
          textStyle: {
            fontSize: 14,
            color: this.chartColor.textColor
          },
        }, ],
        series: seriesArr
      }
      chart.clear()
      chart.setOption(option)
    },
    // 双向柱状图+双向折线图
    bothWayBarLineChart(id, data) {
      let legends = []
      let barLineColors = []
      let seriesArr = []
      for (let i = 0; i < data.chartArr.length; i++) {
        legends.push(data.chartArr[i].name)
        barLineColors.push(data.chartArr[i].color)
        seriesArr.push({
          name: data.chartArr[i].name,
          type: data.chartArr[i].chartType,
          barWidth: data.barWidth,
          barGap: '0%',
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            normal: {
              color: (params) => {
                if (params.name === this.cityName || params.name === this.countyName) {
                  return data.chartArr[i].lightColor
                } else {
                  return data.chartArr[i].color
                }
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: data.chartArr[i].labelPosition,
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.chartArr[i].yAxis
        })
        if (data.chartArr[i].yAxisIndex) {
          seriesArr[i].yAxisIndex = data.chartArr[i].yAxisIndex
        }
        if (data.chartArr[i].xAxisIndex) {
          seriesArr[i].xAxisIndex = data.chartArr[i].xAxisIndex
        }
      }
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        color: barLineColors,
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          left: 'center',
          top: 10,
          y: 'center',
          textStyle: {
            color: this.chartColor.textColor,
          },
          data: legends
        },
        grid: [{
          left: '8%',
          right: '55%',
          width: '34%',
          bottom: '5%',
          containLabel: false,
        }, {
          left: '49%',
          width: 0,
          bottom: '5%',
        }, {
          right: '5%',
          left: '55%',
          width: '37%',
          bottom: '5%',
          containLabel: false,
        }],
        xAxis: [{
          type: 'value',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: { // 左边刻度
            show: true,
            textStyle: {
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: false,
          },
        }, {
          show: false,
          gridIndex: 1
        }, {
          type: 'value',
          gridIndex: 2,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: { // 右边刻度
            show: true,
            textStyle: {
              color: this.chartColor.textColor
            }
          },
          splitLine: {
            show: false,
          },
        }],
        yAxis: [{
            type: 'category',
            position: 'right',
            axisLabel: {
              show: false
            },
            inverse: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: data.xAxis,
          },
          {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              margin: -25,
              fontSize: 16,
              color: this.chartColor.textColor
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: data.xAxis,
          },
          {
            type: 'category',
            gridIndex: 2,
            position: 'left',
            axisLabel: {
              show: false
            },
            inverse: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: data.xAxis,
          }
        ],
        series: seriesArr
      }
      chart.clear()
      chart.setOption(option)
    },
    // 多列横向文字在上方图
    textTopHorizontalChart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let legends = [data.chartArr[0].name]
      let option = {
        color: data.chartArr[0].color,
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: "2%",
          x: 'center',
          textStyle: {
            color: "#fff",
            fontSize: 14,
            color: this.chartColor.textColor
          },
          data: legends
        },
        grid: [{
            //左侧的柱状图grid
            width: "40%",
            left: '5%',
            right: '5%',
            bottom: '5%',
          },
          {
            //右侧的柱状图grid
            width: "40%",
            right: '5%',
            bottom: '5%',
          }
        ],
        xAxis: [{
            //左侧柱状图的X轴
            gridIndex: 0, //x 轴所在的 grid 的索引
            show: false
          },
          {
            //右侧柱状图的X轴
            gridIndex: 1, //x 轴所在的 grid 的索引
            show: false
          }
        ],
        yAxis: [{
            //左侧柱状图的Y轴  标注
            gridIndex: 0, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              verticalAlign: 'bottom',
              align: 'left',
              padding: [0, 0, 15, 15],
              textStyle: {
                color: '#befbff',
                fontSize: 16,
              }
            },
            data: data.xAxis.slice(0, 5),
            inverse: true,
          },
          {
            //左侧柱状图的Y轴
            gridIndex: 0, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
          },
          {
            //右侧柱状图的Y轴
            gridIndex: 1, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              verticalAlign: 'bottom',
              align: 'left',
              padding: [0, 0, 15, 15],
              textStyle: {
                color: '#befbff',
                fontSize: '16',
              }
            },
            data: data.xAxis.slice(5, 10),
            inverse: true
          },
          {
            //右侧柱状图的Y轴
            gridIndex: 1, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
          }
        ],
        series: [{
            name: legends[0],
            type: data.chartArr[0].chartType,
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data.chartArr[0].yAxis.slice(0, 5),
            barWidth: data.barWidth,
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: this.chartColor.textColor,
                fontSize: 14
              }
            },
            itemStyle: {
              normal: {
                color: data.chartArr[0].color
              }
            },
            z: 2
          },
          {
            name: legends[0],
            type: data.chartArr[0].chartType,
            xAxisIndex: 1,
            yAxisIndex: 2,
            data: data.chartArr[0].yAxis.slice(5, 10),
            barWidth: data.barWidth,
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: this.chartColor.textColor,
                fontSize: 14
              }
            },
            itemStyle: {
              normal: {
                color: data.chartArr[0].color
              }
            },
            z: 2
          }
        ]
      }
      chart.clear()
      chart.setOption(option)
    },
    // 地图1
    createTimeMap(id, val) {
      let chart = this.$echarts.init(document.getElementById(id))
      let data = val.listObj.data
      let areaName = val.listObj.province ? '浙江省' : this.cityName
      let options = []
      let timeAxis = []
      let max = 0
      let min = 1000

      for (let key in data) {
        timeAxis.unshift(key);
        let d = data[key]
        options.unshift({
          series: {
            data: d
          }
        })
        d.forEach(_d => {
          if (max - _d.value <= 0) {
            max = _d.value;
          }
          if (min - _d.value >= 0) {
            min = _d.value;
          }
        })
      }

      let self = this
      this.$echarts.registerMap(areaName, self.mapConfig[areaName])
      max = Math.round(max * 10000) / 10000
      min = Math.round(min * 10000) / 10000
      let option = {
        baseOption: {
          timeline: {
            show: !val.listObj.timeLine,
            // 坐标规则
            axisType: 'category',
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#98c98b' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#6065b3' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            controlStyle: {
              color: '#ACF8FD'
            },
            autoPlay: true,
            // 定时器
            playInterval: 5000,
            data: timeAxis,
            label: {
              formatter: function (s) {
                return s
              },
              textStyle: {
                color: this.chartColor.textColor
              }
            }
          },
          visualMap: [{
            type: 'continuous',
            text: [val.listObj.unit],
            left: '3%',
            min: min,
            max: max,
            range: [min, max],
            calculable: true,
            inRange: {
              color: ['#fffc83', '#fdd634', '#fea83a', '#fd8536', '#d55a5c', '#ae5b30', '#843237']
            },
            textStyle: {
              color: this.chartColor.textColor
            },
          }],
          calculable: true,
          grid: {
            top: 30,
            bottom: 30,
            left: 30,
            right: 30
          },
          series: [{
            name: areaName,
            type: 'map',
            map: areaName,
            label: {
              show: true,
              position: ['50%', '50%'],
              textStyle: {
                color: '#000',
                fontSize: 13,
                fontWeight: 'bold',
                opacity: 1,
                background: 'black'
              }
            }
          }]
        },
        options: options
      }
      chart.clear()
      chart.setOption(option)
    },
    // 打开保存图片弹窗并渲染图表
    imagesLoadOpenFn(val, imagesName, fnName) {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesName = imagesName
      this.whichEchart = val
      this.imagesVisi = true
      this.fnName = fnName
      this.$nextTick(() => {
        fnName('echartsWrap1', this.chartArr[val])
      })
    },
    // 关闭保存图片弹窗
    imagesModalCloseFn() {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesVisi = false
    },
    // 图片下载背景颜色值发生变化
    bgColorChange(color) {
      this.chartColor.backgroundColor = color
      this.fnName('echartsWrap1', this.chartArr[this.whichEchart])
    },
    //  图片下载文字颜色值发生变化
    txtColorChange(color) {
      this.chartColor.textColor = color
      this.fnName('echartsWrap1', this.chartArr[this.whichEchart])
    },
    // 对command参数进行重新封装成一个对象
    beforeHandleCommand(command1, command2, command3) {
      return {
        id: command1,
        type: command2,
        fnName: command3
      }
    },
    // 将图表转换成图片并下载
    exportPic() {
      let chart = this.$echarts.init(document.getElementById('echartsWrap1'))
      let content = chart.getDataURL()
      let aLink = document.createElement('a')
      let blob = base64ToBlob(content)
      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('click', true, true)

      aLink.download = `${this.imagesName}${this.returnDatetime()}.png`
      aLink.href = URL.createObjectURL(blob)
      aLink.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
      )
      this.imagesModalCloseFn()
    },
    // 图表柱状图折线图转换
    chartTypeClick(command) {
      for (let i = 0; i < command.type.length; i++) {
        this.chartArr[command.id].chartArr[i].chartType = command.type[i]
      }
      command.fnName(command.id, this.chartArr[command.id])
    },
    // 导航栏点击事件
    routerFn(index) {
      this.routerActive = index
      document.body.scrollTop = 0
    },
    // 打开意见反馈
    feedbackClick() {
      this.feedbackVisi = true
      this.feedForm.userName = window.atob(this.$route.query.username)
      if (this.countyName) {
        this.feedForm.title = this.countyName + this.$route.meta.moudleSystem + '意见箱'
      } else {
        this.feedForm.title = this.cityName + this.$route.meta.moudleSystem + '意见箱'
      }
    },
    // 关闭反馈弹窗
    feedbackDialog() {
      this.feedbackVisi = false
    },
    // 跳转外部链接
    junpLink(url) {
      window.open(url, '_self')
    },
    // 跳转路由
    jumpUrl(path, query) {
      this.$router.push({
        name: path,
        query
      })
    },
    // 根据当前时间转换成YYYYMMDDHHMMSS
    returnDatetime() {
      let date = new Date()
      let year = date.getFullYear() // 获取完整的年份(4位)
      let month =
        date.getMonth() < 10 ?
        '0' + (date.getMonth() + 1) :
        date.getMonth() + 1 //获取当前月份(0-11,0代表1月)
      let day =
        date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 获取当前日(1-31)
      let hours =
        date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      let minutes =
        date.getMinutes() < 10 ?
        '0' + date.getMinutes() :
        date.getMinutes() // 获取当前分钟数(0-59)
      let seconds =
        date.getSeconds() < 10 ?
        '0' + date.getSeconds() :
        date.getSeconds() // 获取当前秒数(0-59)
      return `${year}${month}${day}${hours}${minutes}${seconds}`
    },
    // 将表格导成excle
    exportExce(titele, tHeader, filterVal, list) {
      import('@/vendor/Export2Excel').then(excel => {
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: `${titele}${this.returnDatetime()}`,
          autoWidth: this.autoWidth,
          bookType: 'xlsx'
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    },

    returnRepeatNumArr(arr0, arr1, num, flag) {
      let dataArr = []
      let maxNameArr = []
      let minNameArr = []
      for (let i = 0; i < arr0.length; i++) {
        dataArr.push({
          name: arr0[i],
          value: arr1[i],
        })
      }

      let maxArr = dataArr.filter(function (item) {
        return item.value === num
      })
      let minArr = dataArr.filter(function (item) {
        return item.value === num
      })

      for (let i = 0; i < maxArr.length; i++) {
        maxNameArr.push(maxArr[i].name)
      }
      for (let i = 0; i < minArr.length; i++) {
        minNameArr.push(minArr[i].name)
      }

      if (flag === 'max') {
        return maxNameArr
      } else {
        return minNameArr
      }
    }
  }
}