import {
  getSubStructuralData,
  getEIList,
  getEIWithName
}
from '@/api/environmentalQuality'
import geoJson from '../../../public/js/zheJiang1.json'
export const environmentStateMixin = {
  data() {
    return {
      geoJson: geoJson,
      colorList: [
        '#00fcff',
        '#ffc000',
        '#e970ff',
        '#00a8ff',
        '#2a885c',
        '#d0fbff',
        '#fed700',
        '#96ff00',
        '#ff89e5',
        '#ffb0b0',
        '#e8395d'
      ],
      seriesArr0: []
    }
  },
  mounted() {
    getEIWithName({
      area: '浙江省',
    }).then(res => {
      this.chartArr.sideItem4_3.list = res.data.list
      this.initMap('sideItem4_3', this.geoJson, this.chartArr.sideItem4_3)
    })
    // 获取年台州市各县市区生态环境状况等级和省内排名表格数据
    getEIList({
      area: this.cityName
    }).then(res => {
      this.chartArr.sideItem4_1.title = `${res.data.year}年${this.cityName}各区县（市）生态环境状况等级和省内排名`
      this.chartArr.sideItem4_1.list = res.data.list
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].class = this.classSwitch(res.data[i].value)
      }

      let aaa = this.chartArr.sideItem4_1.list.filter(val => {
        return val.name === this.countyName
      })[0]
      let bbb = this.chartArr.sideItem4_1.list.findIndex(val => {
        return val.name === this.countyName
      })
      let ccc = this.chartArr.sideItem4_1.list.filter(val => {
        return val.name === this.countyName
      })[0]
      // 获取各地市生态环境状况指数数据并绘制图表
      getSubStructuralData({
        area: this.cityName,
        zbs: '生态环境指数'
      }).then(resp => {
        let data1 = resp.data
        let item = data1.yAxis.data
        this.chartArr.sideItem4_0.title = `${item[0].name}年-${item[item.length - 1].name}${this.cityName}各县市区生态环境状况指数`
        this.chartArr.sideItem4_0.name = data1.yAxis.name
        this.chartArr.sideItem4_0.dataSource = data1.yAxis.source
        this.chartArr.sideItem4_0.xAxis = data1.xAxis
        for (let i = 0; i < item.length; i++) {
          this.chartArr.sideItem4_0.legend.push('' + data1.yAxis.data[i].name)
          this.chartArr.sideItem4_0.yAxisArr.push(data1.yAxis.data[i].list)
        }
        this.sideItem4_0Chart('sideItem4_0', this.chartArr.sideItem4_0)
        this.chartArr.sideItem4_3.result = `${res.data.year}年${this.countyName}EI指数等级为<span class="light">${this.classSwitch(aaa.value)}</span>，EI指数值在${this.cityName}排第<span class="light">${bbb + 1}</span>，在浙江省排第<span class="light">${ccc.rank}</span>位。`
      })
    })

  },
  methods: {
    initMap(id, geoJson, data) {
      console.log(data);
      
      let chart = this.$echarts.init(document.getElementById(id))
      chart.showLoading()
      this.$echarts.registerMap('zheJiang', geoJson)
      chart.hideLoading()
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          show: true
        },
        visualMap: {
          min: data.list[0].value,
          max: data.list[data.list.length - 1].value,
          right: '0%',
          bottom: '5%',
          orient: 'vertical',
          itemWidth: 25,
          itemHeight: 15,
          showLabel: true,
          seriesIndex: [0],

          textStyle: {
            color: this.chartColor.textColor
          },
          pieces: [{
              lte: 95,
              lt: 91,
              label: "91<EI≤95",
              color: "#fa0006"
            },
            {
              lte: 86,
              lt: 90,
              label: "86<EI≤90",
              color: "#ff363b"
            },
            {
              lte: 81,
              lt: 85,
              label: "81<EI≤85",
              color: "#fc4d00"
            },
            {
              lte: 76,
              lt: 80,
              label: "76<EI≤80",
              color: "#f88400"
            },
            {
              lte: 71,
              lt: 75,
              label: "71<EI≤75",
              color: "#f9b004"
            },
            {
              lte: 66,
              lt: 70,
              label: "66<EI≤70",
              color: "#f9de02"
            },
            {
              lte: 61,
              lt: 65,
              label: "61<EI≤65",
              color: "#e1f401"
            },
            {
              lte: 56,
              lt: 60,
              label: "56<EI≤60",
              color: "#ff5428"
            },
            {
              lte: 51,
              lt: 55,
              label: "51<EI≤55",
              color: "#8af900"
            },
            {
              lte: 50,
              lt: 45,
              label: "45<EI≤50",
              color: "#00c302"
            }
          ],
        },
        series: [{
          name: '浙江',
          type: 'map',
          mapType: 'zheJiang',
          roam: false, // 是否开启平游或缩放
          aspectScale: 1, // 长宽比
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(16,72,133)',
              borderColor: 'yellow',
              borderWidth: 0.2,
              label: {
                show: true,
                textStyle: {
                  color: 'rgb(249, 249, 249)'
                }
              }
            },
            emphasis: {
              // 鼠标经过区域样式
              areaColor: 'rgba(11,55,98)',
              borderColor: 'rgba(11,234,235)',
              areaStyle: {
                color: 'rgba(11,55,98)'
              },
              label: {
                show: true,
                textStyle: {
                  color: 'rgb(249, 249, 249)'
                }
              }
            }
          },
          data: data.list
        }]
      }
      chart.clear()
      chart.setOption(option)
    },
    // 导出市各县市区生态环境状况等级和省内排名表格
    exportExcel() {
      console.log(this.chartArr.sideItem4_1.list);
      
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['县（市、区）', 'EI值', '等级', '省内排名']
        const filterVal = ['name', 'value', 'level', 'rank']
        const list = this.chartArr.sideItem4_1.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.chartArr.sideItem4_1.title,
          autoWidth: this.autoWidth,
          bookType: 'xlsx'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    },
    // 各县市区生态环境状况等级和省内排名表格等级转换
    classSwitch(val) {
      if (val >= 75) {
        return '优'
      } else if (75 > val && val >= 55) {
        return '良'
      } else if (55 > val && val >= 35) {
        return '一般'
      } else if (35 > val && val >= 20) {
        return '较差'
      } else {
        return '差'
      }
    },
    // 各县市区生态环境状况等级和省内排名表格等级颜色转换
    classNameSwitch(val) {
      if (val >= 75) {
        return 'classColor1'
      } else if (75 > val && val >= 55) {
        return 'classColor2'
      } else if (55 > val && val >= 35) {
        return 'classColor3'
      } else if (35 > val && val >= 20) {
        return 'classColor4'
      } else {
        return 'classColor5'
      }
    },
    // 各县市区生态环境状况指数图表
    sideItem4_0Chart(id, data) {
      this.seriesArr0 = []
      for (let i = 0; i < data.yAxisArr.length; i++) {
        this.seriesArr0.push({
          name: data.legend[i],
          type: data.chartType,
          barWidth: '15px',
          barGap: '0%',
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#00ff7d'
              }
            },
            data: [{
              yAxis: 75
            }],
            label: {
              normal: {
                formatter: '优',
                position: 'middle'
              }
            }
          },

          itemStyle: {
            normal: {
              color: this.colorList[i]
            }
          },
          label: {
            normal: {
              show: false,
              position: 'top',
              textStyle: {
                fontSize: 16,
                color: this.chartColor.textColor
              }
            }
          },
          data: data.yAxisArr[i]
        })
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
          data: data.legend
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
          min: 20, // 最小值
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
        series: this.seriesArr0
      }
      chart.clear()
      chart.setOption(option)
    }
  }
}