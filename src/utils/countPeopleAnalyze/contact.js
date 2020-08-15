import zhejiang from '../../../public/js/jsonData/zhejiangcity.json'
import hangzhou from '../../../public/js/jsonData/hangzhou.json'
import huzhou from '../../../public/js/jsonData/huzhou.json'
import jiaxing from '../../../public/js/jsonData/jiaxing.json'
import jinhua from '../../../public/js/jsonData/jinhua.json'
import lishui from '../../../public/js/jsonData/lishui.json'
import ningbo from '../../../public/js/jsonData/ningbo.json'
import quzhou from '../../../public/js/jsonData/quzhou.json'
import shaoxing from '../../../public/js/jsonData/shaoxing.json'
import taizhou from '../../../public/js/jsonData/taizhou.json'
import wenzhou from '../../../public/js/jsonData/wenzhou.json'
import zhoushan from '../../../public/js/jsonData/zhoushan.json'
import changsanjiao from '../../../public/js/jsonData/changsanjiao'
import csjPnt from '../../../public/js/jsonData/csj_pnt.json'
import {
  getJenksBreaks
}
from '@/utils/mUtils.js'
import {
  apiGet
}
from '@/api/api'
const cityName = '台州市'
const countyName = '仙居县'
export const contactMixin = {
  data() {
    return {
      cityName: cityName,
      countyName: countyName,
      flowMapVisi: false,
      migrationType: 0,
      whichMap: '',
      flowMapDiaTitle: '',
      aaa: [],
      flowMapTableList: [],
      mapConfig: {
        浙江省: zhejiang,
        杭州市: hangzhou,
        湖州市: huzhou,
        嘉兴市: jiaxing,
        金华市: jinhua,
        丽水市: lishui,
        宁波市: ningbo,
        衢州市: quzhou,
        绍兴市: shaoxing,
        台州市: taizhou,
        温州市: wenzhou,
        舟山市: zhoushan,
        长三角: changsanjiao,
        长三角中心点: csjPnt
      }
    }
  },
  mounted() {
    this.chartArr.sideItem5_0.title = `2018年基于手机信令数据的${this.cityName}内各县（市、区）黄金周人口联系情况`
    this.chartArr.sideItem5_1.title = `2018年基于手机信令数据的${this.cityName}内各县（市、区）普通周人口联系情况`
    this.chartArr.sideItem5_3.title = `2018年基于移动手机信令数据黄金周全省各县（市、区）人口流入${this.countyName}情况`
    this.chartArr.sideItem5_4.title = `2018年基于移动手机信令数据普通周全省各县（市、区）人口流入${this.countyName}情况`
    this.chartArr.sideItem5_6.title = `2018年基于移动手机信令数据黄金周全省各县（市、区）人口流出${this.countyName}情况`
    this.chartArr.sideItem5_7.title = `2018年基于移动手机信令数据普通周全省各县（市、区）人口流出${this.countyName}情况`
    this.chartArr.sideItem5_9.title = `2018年基于联通手机信令数据的${this.countyName}与长三角各区域黄金周人口联系情况`
    this.chartArr.sideItem5_10.title = `2018年基于联通手机信令数据的${this.countyName}与长三角各区域普通周人口联系情况`

    // 2、 某年基于手机信令数据的仙居县人口联系市内联系表格
    apiGet(
      '/people/getFlowTable', {
        year: 2018,
        area: this.cityName,
        type: 1,
        sign: '地市'
      }).then(res => {
      let data = res.data
      data.sort((a, b) => {
        return b.frequency1 - a.frequency1
      })
      this.chartArr.sideItem5_2.title = `2018年基于手机信令数据的${this.cityName}内各县（市、区）人口联系表`
      this.chartArr.sideItem5_2.list = data

      let aa = ''
      let bb = ''
      data.forEach(n => {
        if (n.area == this.countyName) {
          aa = n.frequency1;
          bb = n.frequency2;
        }
      })
      let cc = data.map(n => {
        return n.frequency2;
      })
      let dd = cc.indexOf(bb) + 1
      let ff = data[0].area
      this.chartArr.sideItem5_0.result = `2018年，在${this.cityName}内，<span class="light">${this.countyName}</span>人口流动总量排名<span class="light">${dd}</span>， 黄金周和普通周人口出行次数总量分别达到<span class="light">${aa}</span>万次和<span class="light">${bb}</span>万次； 其中，<span  class="light">${this.countyName}</spanclass=>与<span class="light">${ff}</span>的人口流动最为频繁。`
    })

    apiGet(
      '/people/getFlowTable', {
        year: 2018,
        area: this.countyName,
        type: 2,
        sign: '区县',
        way: '流入'
      }).then(res => {
      let data = res.data
      data.sort((a, b) => {
        return b.frequency1 - a.frequency1
      })
      this.chartArr.sideItem5_5.title = `2018年基于移动手机信令数据全省各县（市、区）人口流入${this.countyName}汇总占比表(%)`
      this.chartArr.sideItem5_5.list = data
      //流入流出结论
      apiGet(
        '/people/getFlowConclusion', {
          year: 2018,
          area: this.countyName
        }).then(resp => {
        let data1 = resp.data
        let aa = (data1.val1 / 10000).toFixed(2)
        let bb = data1.ratio1
        let cc = (data1.val2 / 10000).toFixed(2)
        let dd = data1.ratio2
        let ee = ''
        let ff = ''

        if (cc > aa) {
          ee = '提升';
        } else {
          ee = '下降';
        }
        if (dd > bb) {
          ff = '提升';
        } else {
          ff = '下降';
        }

        this.chartArr.sideItem5_1.result = `2018年，在浙江省内，<span class="light">${this.countyName}</span>省内的人口联系以${this.cityName}内为主。在普通周， ${this.countyName}与${this.cityName}其他区域的相互联系人次为<span class="light">${aa}</span> 万次，占与整个浙江省相互联系人次的<span class="light">${bb}</span>%；在黄金周， ${this.countyName}与${this.cityName}其他区域的相互联系人次略有<span class="light">${ee}</span>， 为${cc}万次，占比略有<span class="light">${ff}</span>，为${dd}%；除${this.cityName}外，${this.countyName}与<span class="light">${data[1].area}</span>的人口联系最为密切。`
      })
    })
    // 8、 2018年基于手机信令数据的各地市与仙居县人口联系汇总占比表(%)
    apiGet(
      '/people/getFlowTable', {
        year: 2018,
        area: this.countyName,
        type: 2,
        sign: '区县',
        way:'流出'
      }).then(res => {
      let data = res.data
      data.sort((a, b) => {
        return b.frequency1 - a.frequency1
      })
      this.chartArr.sideItem5_8.title = `2018年基于移动手机信令数据全省各县（市、区）人口流出${this.countyName}汇总占比表(%)`
      this.chartArr.sideItem5_8.list = data
    })
    // 10、 某年基于联通手机信令数据的长三角各地区（除浙江省外TOP5）与台州市人口联系汇总占比表（％）
    apiGet(
      '/people/getFlowTable', {
        year: 2018,
        area: this.countyName,
        type: 3,
        sign: '区县'
      }).then(res => {
      let data = res.data
      this.chartArr.sideItem5_11.title = `2018年基于联通手机信令数据的长三角各省与${this.countyName}人口联系汇总占比表（%）`
      data.sort((a, b) => {
        return b.frequency1 - a.frequency1;
      })
      this.chartArr.sideItem5_11.list = data.slice(0, 5)

      let aa = ''
      let bb = ''
      if (data[0].frequency1 - data[0].frequency2 > 0) {
        aa = data[0].frequency2
      } else {
        aa = data[0].frequency1
      }
      data.forEach(n => {
        if (n.area == "上海市") {
          bb = n.frequency2
        }
      })


      apiGet(
        '/people/getFlowTable', {
          year: 2018,
          area: this.countyName,
          type: 4,
          sign: '区县'
        }).then(resp => {
        let data1 = resp.data
        this.chartArr.sideItem5_12.title = `2018年基于联通手机信令数据的长三角各地区（除浙江省外TOP5）与${this.countyName}人口联系汇总占比表（%）`
        data1.sort((a, b) => {
          return b.frequency1 - a.frequency1;
        })
        this.chartArr.sideItem5_12.list = data1.slice(0, 5)

        let areas = data1.slice(0, 3).map(v => v.area).join("、")
        this.chartArr.sideItem5_2.result = `2018年，在长三角范围内，<span class="light">${this.countyName}</span>的人口联系以省内为主，在省内的人口相互联系次数占整个长三角区域的人口相互联系总次数的<span class="light">${aa}</span>%以上；与上海市的相互联系次数占比在普通周仅为<span class="light">${bb}</span>%；除浙江省外，${this.countyName}与<span class="light">${areas}</span>的人口联系最为密切。`
      })
    })
    this.lineintervalMap('sideItem5_0', this.chartArr.sideItem5_0)
    this.lineintervalMap('sideItem5_1', this.chartArr.sideItem5_1)
    this.lineintervalMap('sideItem5_3', this.chartArr.sideItem5_3)
    this.lineintervalMap('sideItem5_4', this.chartArr.sideItem5_4)
    this.lineintervalMap('sideItem5_6', this.chartArr.sideItem5_6)
    this.lineintervalMap('sideItem5_7', this.chartArr.sideItem5_7)
    this.lineintervalMap('sideItem5_9', this.chartArr.sideItem5_9)
    this.lineintervalMap('sideItem5_10', this.chartArr.sideItem5_10)
  },
  methods: {
    lineintervalMap(id, key) {
      let params = key.configObj.params
      let url = key.configObj.url
      apiGet(url, params).then(res => {
        key.flowMapList = res.data
        this.createContactMap(id, key.flowMapList, key.configObj.curCity)
      })
    },
    createContactMap(id, data, city) {
      let nameList = []
      let centerList = {}
      let chart = this.$echarts.init(document.getElementById(id))
      this.$echarts.registerMap(city, this.mapConfig[city])
      let geojson = this.mapConfig[city]
      let list = []
      // 区<->区的数据
      let listDirt = {}
      // 市<->市的数据
      for (let key in geojson) {
        list = geojson[key]
      }
      list.forEach(l => {
        nameList.push({
          name: l.properties.name,
          value: l.properties.center,
          symbolSize: 0
        })
        centerList[l.properties.name] = l.properties.center.slice(0, 2)
        listDirt[l.properties.name] = 0
      })
      let lineList = []
      data.forEach(d => {
        let name = d.leaveName
        let name1 = d.arriveName
        listDirt[name] += parseFloat(d.tripNumber)
        listDirt[name1] += parseFloat(d.tripNumber)
        if (centerList[name] && centerList[name1]) {
          lineList.push({
            fromName: name,
            toName: name1,
            coords: [centerList[name], centerList[name1]],
            num: d.tripFrequency,
            value: d.tripFrequency
          })
        }
      })

      lineList.sort((a, b) => {
        return a.num - b.num
      })
      let lineListFilter = lineList.filter(li => {
        return li.num !== 0
      })
      // 分级别区间范围
      let linePeace = getJenksBreaks(lineListFilter, 5)
      linePeace = linePeace.map(m => {
        let val = 0
        if (city == "长三角") {
          val = Math.ceil(m / 100) * 100
        } else {
          val = Math.ceil(m / 1000) * 1000
        }
        return val
      });
      // 区间值
      let linePeaces = this.classifyNumber(linePeace)
      let scattList = nameList.map(li => {
        let num = listDirt[li.name]
        li.value.push(num)
        li.num = num
        if (num / 50000 > 15) {
          li.symbolSize = 15
        } else {
          li.symbolSize = Math.ceil(num / 50000);
        }
        return li
      });
      scattList.sort((a, b) => {
        return a.num - b.num
      });
      let scattListFilter = scattList.filter(sca => {
        return sca.num !== 0
      });
      let min = scattListFilter[0].num
      let max = scattListFilter[scattListFilter.length - 1].num
      let scattPeace = getJenksBreaks(scattListFilter, 5)
      scattPeace = scattPeace.map(m => {
        let val = 0
        if (city == "长三角") {
          val = Math.ceil(m / 100) * 100
        } else {
          val = Math.ceil(m / 1000) * 1000
        }
        return val
      });
      let scattPeaces = this.classifyNumber(scattPeace)

      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        grid: {
          top: 10,
          bottom: 0,
          right: 0,
          left: 0
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (params.componentSubType == "scatter") {
              return (
                params.data.name + ":" + params.data.num / 10000 + "万人次"
              )
            } else {
              return `${params.data.fromName} -> ${params.data.toName}为${params.data.value}人次`
            }
          }
        },
        itemStyle: {
          opacity: 1,
          borderWidth: 1,
          borderColor: "#fff"
        },
        geo: {
          map: city,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#142233",
              borderWidth: 2,
              borderColor: "white"
            },
          }
        },
        visualMap: [{
            type: "piecewise",
            text: ["单位:人数（点）"],
            right: "3%",
            calculable: true,
            inRange: {
              color: ["green", "yellow", "orange", "red"]
            },
            textStyle: {
              color: this.chartColor.textColor
            },
            showLabel: true,
            seriesIndex: 0,
            pieces: scattPeaces
          },
          {
            type: "piecewise",
            text: ["单位:次数（线）"],
            left: "3%",
            pieces: linePeaces,
            calculable: true,
            inRange: {
              color: ["green", "yellow", "orange", "red"]
            },
            textStyle: {
              color: this.chartColor.textColor
            },
            showLabel: true,
            seriesIndex: 1
          }
        ],
        series: [{
            name: "地点",
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            symbolSize: (rawValue, params) => {
              let num = params.data.symbolSize;
              let index = Math.ceil(num / min);
              return 100;
            },
            label: {
              normal: {
                show: true,
                position: "right", //显示位置
                offset: [5, 0], //偏移设置
                formatter: function (params) {
                  //圆环显示文字
                  return params.data.name
                },
                fontSize: 10
              },
              emphasis: {
                show: true
              }
            },
            data: scattListFilter
          },
          {
            name: "线路",
            type: "lines",
            coordinateSystem: "geo",
            zlevel: 2,
            large: true,
            lineStyle: {
              normal: {
                width: 1.5,
                opacity: 0.6,
                curveness: 0.1
              }
            },
            data: lineListFilter
          }
        ]
      }
      chart.clear()
      chart.setOption(option, true)
      chart.on('click', (params) => {
        if (!this.whichMap) {
          return false
        }
        let aaa = JSON.parse(JSON.stringify(this.chartArr[this.whichMap]))
        let bbb = aaa.flowMapList.filter(item => {
          return (item.leaveName === params.name) || (item.arriveName === params.name)
        })
        if (bbb && bbb.length > 0) {
          chart.dispose()
          this.$nextTick(() => {
            this.aaa = bbb
            this.migrationType = 0
            this.flowMapTableListFn(this.migrationType)
            this.createContactMap('mapArea', bbb, this.chartArr[this.whichMap].configObj.curCity)
          })
        }
      })
    },
    classifyNumber(arr) {
      let list = []
      for (let i = 0; i < arr.length; i++) {
        let temp = {}
        switch (i) {
          case 0:
            temp = {
              lte: arr[0]
            }
            break
          default:
            temp = {
              gt: arr[i - 1],
              lte: arr[i]
            }
            break
        }
        list.push(temp)
      }
      return list
    },

    // 导出表格
    phone1Export() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['', '出行次数', '出行人数', '出行次数', '出行人数']
        const filterVal = ['area', 'frequency1', 'number1', 'frequency2', 'number2']
        const mHead = [
          ['县（市、区）', '黄金周', '', '普通周', '']
        ]
        const list = this.chartArr.sideItem5_2.list
        const data = this.formatJson(filterVal, list)

        excel.export_json_to_excel({
          header: tHeader,
          multiHeader: mHead,
          merges: ["A1:A2", "B1:C1", "D1:E1"],
          data,
          filename: `${this.chartArr.sideItem5_2.title}${this.returnDatetime()}`,
          autoWidth: true,
          bookType: 'xlsx'
        })
        this.downloadLoading = false
      })
    },
    phone2Export() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['', '出行次数', '出行人数', '出行次数', '出行人数']
        const filterVal = ['area', 'frequency1', 'number1', 'frequency2', 'number2']
        const mHead = [
          ['地市', '黄金周', '', '普通周', '']
        ]
        const list = this.chartArr.sideItem5_5.list
        const data = this.formatJson(filterVal, list)

        excel.export_json_to_excel({
          header: tHeader,
          multiHeader: mHead,
          merges: ["A1:A2", "B1:C1", "D1:E1"],
          data,
          filename: `${this.chartArr.sideItem5_5.title}${this.returnDatetime()}`,
          autoWidth: true,
          bookType: 'xlsx'
        })
        this.downloadLoading = false
      })
    },
    phone3Export() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['', '出行次数', '出行人数', '出行次数', '出行人数']
        const filterVal = ['area', 'frequency1', 'number1', 'frequency2', 'number2']
        const mHead = [
          ['省份', '黄金周', '', '普通周', '']
        ]
        const list = this.chartArr.sideItem5_8.list
        const data = this.formatJson(filterVal, list)

        excel.export_json_to_excel({
          header: tHeader,
          multiHeader: mHead,
          merges: ["A1:A2", "B1:C1", "D1:E1"],
          data,
          filename: `${this.chartArr.sideItem5_8.title}${this.returnDatetime()}`,
          autoWidth: true,
          bookType: 'xlsx'
        })
        this.downloadLoading = false
      })
    },
    phone4Export() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['', '出行次数', '出行人数', '出行次数', '出行人数']
        const filterVal = ['area', 'frequency1', 'number1', 'frequency2', 'number2']
        const mHead = [
          ['省份', '黄金周', '', '普通周', '']
        ]
        const list = this.chartArr.sideItem5_11.list
        const data = this.formatJson(filterVal, list)

        excel.export_json_to_excel({
          header: tHeader,
          multiHeader: mHead,
          merges: ["A1:A2", "B1:C1", "D1:E1"],
          data,
          filename: `${this.chartArr.sideItem5_11.title}${this.returnDatetime()}`,
          autoWidth: true,
          bookType: 'xlsx'
        })
        this.downloadLoading = false
      })
    },
    phone5Export() {
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['', '出行次数', '出行人数', '出行次数', '出行人数']
        const filterVal = ['area', 'frequency1', 'number1', 'frequency2', 'number2']
        const mHead = [
          ['省份', '黄金周', '', '普通周', '']
        ]
        const list = this.chartArr.sideItem5_12.list
        const data = this.formatJson(filterVal, list)

        excel.export_json_to_excel({
          header: tHeader,
          multiHeader: mHead,
          merges: ["A1:A2", "B1:C1", "D1:E1"],
          data,
          filename: `${this.chartArr.sideItem5_12.title}${this.returnDatetime()}`,
          autoWidth: true,
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
  }
}