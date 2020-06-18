import {
  getSubStructuralData,
  getEIList
}
from '@/api/environmentalQuality'
import geoJson from '../../public/js/zheJiang1.json'
export const environmentStateMixin = {
  data() {
    return {
      geoJson: geoJson,
      EIList: [],
      seriesArr0: [],
      seriesArr1: [],
      sideItem4_0: {
        name: '',
        chartType: 'bar',
        color: '#ff5975',
        dataSource: '',
        data: {
          legend: [],
          yAxisArr: []
        }
      },
      sideItem4_1: {
        name: '',
        chartType: 'bar',
        color: '#ff5975',
        dataSource: '',
        data: {
          legend: [],
          yAxisArr: []
        }
      }
    }
  },
  mounted() {
    this.initMap(this.geoJson)
    // this.initMap1()
    // 获取年台州市各县市区生态环境状况等级和省内排名表格数据
    getEIList({
      area: '台州市'
    }).then(res => {
      this.EIList = res.data
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].class = this.classSwitch(res.data[i].value)
      }
    })
    // 获取各地市生态环境状况指数数据并绘制图表
    getSubStructuralData({
      area: '浙江省',
      zbs: '生态环境指数'
    }).then(res => {
      let data = res.data
      this.sideItem4_0.name = data.yAxis.name
      this.sideItem4_0.dataSource = data.yAxis.source
      this.sideItem4_0.data.xAxis = data.xAxis
      let item = data.yAxis.data
      for (let i = 0; i < item.length; i++) {
        this.sideItem4_0.data.legend.push('E1' + data.yAxis.data[i].name)
        this.sideItem4_0.data.yAxisArr.push(data.yAxis.data[i].list)
      }
      this.sideItem4_0Chart('sideItem4_0', this.sideItem4_0)
    })
    // 获取各地市生态环境状况指数数据并绘制图表
    getSubStructuralData({
      area: '台州市',
      zbs: '生态环境指数'
    }).then(res => {
      let data = res.data
      this.sideItem4_1.name = data.yAxis.name
      this.sideItem4_1.dataSource = data.yAxis.source
      this.sideItem4_1.data.xAxis = data.xAxis
      let item = data.yAxis.data
      for (let i = 0; i < item.length; i++) {
        this.sideItem4_1.data.legend.push('E1' + data.yAxis.data[i].name)
        this.sideItem4_1.data.yAxisArr.push(data.yAxis.data[i].list)
      }
      this.sideItem4_1Chart('sideItem4_1', this.sideItem4_1)
    })
  },
  methods: {
    initMap(geoJson) {
      let myChart = this.$echarts.init(document.getElementById('sideItem4_3'))
      myChart.showLoading()
      this.$echarts.registerMap('zheJiang', geoJson)
      myChart.hideLoading()
      let option = {
        backgroundColor: 'rgba(5,12,37,1)',
        tooltip: {

        },
        visualMap: {
          show: false,
          min: 0,
          max: 1,
          left: '0%',
          top: '75%',
          text: ['高', '低'], // 文本，默认为数值文本
          itemWidth: 40,
          itemHeight: 200,
          calculable: false,
          textStyle: {
            color: '#000',
            fontSize: 40
          },
          inRange: {
            /*低-高*/
            color: ['#2AAAE6', '#ED8117']
          }
        },
        grid: {
          height: '100%',
          width: '100%'
        },
        xAxis: {
          type: 'category',
          show: false
        },
        yAxis: {
          position: 'right',
          axisLabel: {
            show: true
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        geo: {
          map: 'zheJiang',
          label: {
            show: false
          },
          top: '9%',
          left: '19%',
          width: '70%',
          height: '84%',
          roam: false,
          zoom: 1,
          itemStyle: {
            areaColor: '#4985BB',
            borderColor: '#4985BB',
            shadowColor: '#4985BB',
            shadowBlur: 0,
            borderWidth: 3,
          }
        },
        series: [{
          name: '浙江',
          type: 'map',
          mapType: 'zheJiang',
          width: '70%',
          height: '84%',
          left: '20%',
          right: '5%',
          label: {
            normal: {
              show: true,
              position: 'inner',
              formatter: function (param) {
                if (param.name == '邯山区') {
                  return '{a|邯郸}';
                } else if (param.name == '裕华区') {
                  return '{a|石家庄}';
                }
                if (param.name == '北市区') {
                  return '{a|保定}';
                }
                if (param.name == '桃城区') {
                  return '{a|衡水}';
                }
                if (param.name == '运河区') {
                  return '{a|沧州}';
                }
                if (param.name == '南和县') {
                  return '{a|邢台}';
                }
                if (param.name == '雄县') {
                  return '{a|雄安}';
                }
                return '';
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: 20,
                  padding: 20,
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderRadius: 15
                }
              },
              textStyle: {
                color: '#fff',
                fontSize: 50,
                padding: 20,
                backgroundColor: 'rgba(0,0,0,0)',
                borderRadius: 15
              }
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            areaColor: '#15AAF2',
            emphasis: {
              areaColor: 'green '

            }
          },
          emphasis: {
            itemStyle: {
              areaColor: '#3FA7DC'
            }
          },

        }, {
          "name": "",
          "type": "scatter",
          "coordinateSystem": "geo",
          symbolSize: 15,
          "data": [{
            name: '石家庄平山营里乡桃元村',
            "value": [114.207094, 38.255970]
          }, {
            name: '保定市：阜平县',
            "value": [114.18, 38.85, 1]
          }, {
            name: '保定市：顺平县',
            "value": [115.13, 38.93, 1]
          }, {
            name: '保定市：涞源县',
            "value": [114.68, 39.35, 1]
          }, {
            name: '保定市：易县',
            "value": [115.50, 39.35, 1]
          }, {
            name: '保定市：曲阳县',
            "value": [114.80, 38.62, 1]
          }, {
            name: '保定市：涞水县',
            "value": [115.75, 39.50, 1]
          }, {
            name: '保定市：望都县',
            "value": [115.25, 38.72, 1]
          }, {
            name: '衡水市：武强县',
            "value": [115.99, 38.08, 1]
          }, {
            name: '衡水市：饶阳县',
            "value": [115.73, 38.23, 1]
          }, {
            name: '衡水市：武邑县',
            "value": [115.98, 37.82, 1]
          }, {
            name: '衡水市：阜城县',
            "value": [116.25, 37.87, 1]
          }, {
            name: ' 衡水市：故城县',
            "value": [115.97, 37.35, 1]
          }, {
            name: '衡水市：枣强县',
            "value": [115.72, 37.52, 1]
          }, {
            name: '保定：曲阳县',
            "value": [114.80, 38.62, 1]
          }, {
            name: '保定：曲阳县',
            "value": [114.80, 38.62, 1]
          }, {
            name: '保定：曲阳县',
            "value": [114.80, 38.62, 1]
          }, ]
        }]
      }
      myChart.setOption(option)
    },
    initMap1() {
      //到 mapbox 官网注册并创建下面的access token都是免费的，不过有5w次的浏览限制
      var url = 'http://139.196.226.113:6080/arcgis/rest/services/industry/aiPage/MapServer/';
      //初始化 地图
      var leafletMap = L.map('sideItem4_3').setView([41, 123], 5);
      //将图层加载到地图上，并设置最大的聚焦还有map样式
      L.tileLayer(url, {
        maxZoom: 18,
        id: 'mapbox.streets'
      }).addTo(leafletMap);
      //增加一个marker ，地图上的标记，并绑定了一个popup，默认打开
      L.marker([41, 123]).addTo(leafletMap)
        .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
      //增加一个圈，设置圆心、半径、样式
      L.circle([41, 123], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(leafletMap).bindPopup("I am a circle.");
      //增加多边形
      L.polygon([
        [41, 123],
        [39, 121],
        [41, 126]
      ]).addTo(leafletMap).bindPopup("I am a polygon.");
    },
    // 导出市各县市区生态环境状况等级和省内排名表格
    exportExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['县（市、区）', 'EI值', '等级', '省内排名']
        const filterVal = ['name', 'value', 'class', 'rank']
        const list = this.EIList
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '各县市区生态环境状况等级',
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
    // 各地市生态环境状况指数图表
    sideItem4_0Chart(id, data) {
      this.seriesArr0 = []
      this.seriesArr1 = []
      let colorList = [
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
      ]
      let val = data.data
      for (let i = 0; i < val.yAxisArr.length; i++) {
        this.seriesArr0.push({
          name: data.data.legend[i],
          type: data.chartType,
          barWidth: '15px',
          barGap: '0%',
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#00ff7d' // 这儿设置安全基线颜色
              }
            },
            data: [{
              yAxis: 75 //这儿定义基准线的数值为多少
            }],
            label: {
              normal: {
                formatter: '优', // 这儿设置安全基线
                position: 'middle'
              }
            }
          },

          itemStyle: {
            normal: {
              color: colorList[i]
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
          data: val.yAxisArr[i]
        })
      }
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
          data: data.data.legend
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
        series: this.seriesArr0
      }
      chart.setOption(option)
    },
    // 各县市区生态环境状况指数图表
    sideItem4_1Chart(id, data) {
      this.seriesArr0 = []
      this.seriesArr1 = []
      let colorList = [
        '#00ffb8',
        '#7f6f00',
        '#ff7070',
        '#00a8ff',
        '#2a885c',
        '#d0fbff',
        '#fed700',
        '#96ff00',
        '#ff89e5',
        '#ffb0b0',
        '#e8395d'
      ]
      let val = data.data
      for (let i = 0; i < val.yAxisArr.length; i++) {
        this.seriesArr1.push({
          name: data.data.legend[i],
          type: data.chartType,
          barWidth: '15px',
          barGap: '0%',
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#00ff7d' // 这儿设置安全基线颜色
              }
            },
            data: [{
              yAxis: 75 //这儿定义基准线的数值为多少
            }],
            label: {
              normal: {
                formatter: '优', // 这儿设置安全基线
                position: 'middle'
              }
            }
          },

          itemStyle: {
            normal: {
              color: colorList[i]
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
          data: val.yAxisArr[i]
        })
      }
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
          data: data.data.legend
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
        series: this.seriesArr1
      }
      chart.setOption(option)
    }
  }
}