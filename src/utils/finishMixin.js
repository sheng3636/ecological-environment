import feedback from '@/components/feedback'
export const finishMixin = {
  components: {
    feedback
  },
  data() {
    return {
      feedbackVisi: false,
      feedForm: {
        title:'',
        textarea: ''
      }
    }
  },
  mounted() {

  },
  methods: {
    // 柱状图+折线图
    barLineChart(id, data) {
      let cityName = this.cityName
      let legends = []
      let seriesArr = []
      for (let i = 0; i < data.chartArr.length; i++) {
        legends.push(data.chartArr[i].name)
        seriesArr.push({
          name: data.chartArr[i].name,
          type: data.chartArr[i].chartType,
          barWidth: data.barWidth,
          barGap: '0%',
          itemStyle: {
            normal: {
              color: data.chartArr[i].color
            }
          },
          label: {
            normal: {
              show: true,
              position: data.stack ? 'inside' : 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.chartArr[i].yAxis
        })
        if (data.doubleYxis) {
          seriesArr[i].yAxisIndex = i
        }
        if (data.stack) {
          seriesArr[i].stack = data.stack
        }
      }
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
    // 地图1
    createTimeMap(id, val) {
      let chart = this.$echarts.init(document.getElementById(id))
      let data = val.data
      let areaName = val.province ? '浙江省' : this.cityName
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
            show: !val.timeLine,
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
                color: '#ACF8FD'
              }
            }
          },
          visualMap: [{
            type: 'continuous',
            text: [val.unit],
            left: '3%',
            min: min,
            max: max,
            range: [min, max],
            calculable: true,
            inRange: {
              color: ['#fffc83', '#fdd634', '#fea83a', '#fd8536', '#d55a5c', '#ae5b30', '#843237']
            },
            textStyle: {
              color: '#ACF8FD'
            },
            calculable: true
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
      chart.setOption(option)
    },
    // 导航栏点击事件
    routerFn(index) {
      this.routerActive = index
      document.body.scrollTop = 0
    },
    // 意见反馈
    feedbackClick() {
      this.feedbackVisi = true
      if(this.countyName) {
        this.feedForm.title = this.countyName + '生态环境意见箱'
      } else {
        this.feedForm.title = this.cityName + '生态环境意见箱'
      }
    },
    // 点击跳转链接
    junpLink(url) {
      window.open(url,'_self')
    },
    // 关闭反馈弹窗
    feedbackDialog() {
      this.feedbackVisi = false
    },
    // 返回一个数组的最后一个元素
    returnArrLast(arr) {
      return arr[arr.length - 1]
    },
    // 返回一个数组的第一个元素
    returnArrFirst(arr) {
      return arr[0]
    },
    // 返回两个数之差
    returnDiff(arr1, arr2) {
      return arr2 - arr1
    },
    // 返回一个数组全部元素的平均值
    returnArrAvg(arr) {
      let sum = 0
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
      }
      return (sum / arr.length).toFixed(2)
    },
    
    returnRepeatNumArr(arr0,arr1,num,flag) {
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