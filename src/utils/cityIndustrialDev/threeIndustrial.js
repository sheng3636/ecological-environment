import cityTown from '@/utils/cityTown'
import {
  apiGet,
  axiosAll
}
from '@/api/api'
import {
  getArrFirst,
  getArrLast,
  getArrAvg
}
from '@/utils/mUtils.js'
export const threeIndustrialMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年限内某地区三次产业结构并绘制图表
    apiGet(
      '/statistics/getStructuralData', {
        startYear: 2009,
        endYear: 2018,
        area: this.cityName,
        zbs: '第一产业占比,第二产业占比,第三产业占比'
      }).then(res => {
      this.chartArr.sideItem1_0.title = `近10年杭州市三次产业结构分析`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_0.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem1_0.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem1_0.chartArr[2].name = `${data.yAxis[2].name}(${data.yAxis[2].unit})`
        this.chartArr.sideItem1_0.xAxis = data.xAxis
        this.chartArr.sideItem1_0.chartArr[0].yAxis = data.yAxis[0].list
        this.chartArr.sideItem1_0.chartArr[1].yAxis = data.yAxis[1].list
        this.chartArr.sideItem1_0.chartArr[2].yAxis = data.yAxis[2].list
        this.barLineChart('sideItem1_0', this.chartArr.sideItem1_0)
        let aaa = (getArrLast(data.yAxis[2].list) - getArrFirst(data.yAxis[2].list)).toFixed(2)
        let bbb = (data.yAxis[2].list[4] - data.yAxis[2].list[0]).toFixed(2)
        let ccc = aaa > 0 ? `逐步提升` : (aaa < 0 ? `逐步下降` : '维持不变')
        let ddd = bbb > 0 ? `提升<span class="light">${Math.abs(bbb)}</span> 个百分点` : (bbb < 0 ? `下降<span class="light">${Math.abs(bbb)}</span> 个百分点` : '维持不变')
        let eee = (getArrLast(data.yAxis[2].list) - data.yAxis[2].list[5]).toFixed(2)
        let fff = eee > 0 ? `提升<span class="light">${Math.abs(eee)}</span> 个百分点` : (eee < 0 ? `下降<span class="light">${Math.abs(eee)}</span> 个百分点` : '维持不变')
        this.chartArr.sideItem1_0.result = `从三次产业结构变化趋势来看，杭州市第三产业占比${ccc}，${getArrFirst(data.xAxis)}－${getArrFirst(data.xAxis) +4}年，第三产业占比${ddd}，${getArrFirst(data.xAxis) + 5}－${getArrLast(data.xAxis)}年第三产业占比${fff}。`
      } else {
        this.chartArr.sideItem1_0.isValue = true
        this.chartArr.sideItem1_0.dataSource = `暂无来源`
        this.chartArr.sideItem1_0.result = `暂无结论`
      }
    })
    // 1、获取某年某地区三次产业结构并绘制图表
    // 2、获取某年某地区三次产业结构与全省对比
    // 3、 获取某年全省各地市第二产业占比对比并绘制图表
    // 4、 获取某年全省各地市第三产业占比对比并绘制图表
    axiosAll([this.threeIndustrialAll1(), this.threeIndustrialAll2(), this.threeIndustrialAll3(), this.threeIndustrialAll4()]).then(res => {
      this.chartArr.sideItem1_3.title = `2018年全省各地市第二产业占比对比`
      this.chartArr.sideItem1_1.title = `2018年${this.cityName}三次产业结构`
      this.chartArr.sideItem1_2.title = `2018年${this.cityName}三次产业结构与全省对比`
      if (res[0].code === '0' && res[1].code === '0' && res[2].code === '0' && res[3].code === '0') {
        let data0 = res[0].data.yAxis
        for (let i = 0; i < data0.length; i++) {
          this.chartArr.sideItem1_1.chartArr[0].list.push({
            name: data0[i].name,
            value: data0[i].list[0]
          })
          this.chartArr.sideItem1_2.chartArr[1].yAxis.push(data0[i].list[0])
        }
        this.chartArr.sideItem1_1.chartArr[0].name = `三次产业结构`
        this.pieChart('sideItem1_1', this.chartArr.sideItem1_1)
        this.chartArr.sideItem1_1.result = `从三次产业结构现状来看，2018年${this.cityName}三次产业结构（三产:二产:一产）为<span class="light">${data0[2].list[0]}:${data0[1].list[0]}:${data0[0].list[0]}</span>，已形成三二一结构。`


        let data1 = res[1].data.yAxis
        for (let i = 0; i < data1.length; i++) {
          this.chartArr.sideItem1_2.xAxis.push(data1[i].name)
          this.chartArr.sideItem1_2.chartArr[0].yAxis.push(data1[i].list[0])
        }
        this.chartArr.sideItem1_2.chartArr[0].name = `浙江省（%）`
        this.chartArr.sideItem1_2.chartArr[1].name = `${this.cityName}（%）`
        this.barLineChart('sideItem1_2', this.chartArr.sideItem1_2)
        let aaa = (this.chartArr.sideItem1_2.chartArr[1].yAxis[1] - this.chartArr.sideItem1_2.chartArr[0].yAxis[1]).toFixed(2)
        let bbb = ''
        if (aaa > 0) {
          bbb = `高于全省<span class="light">${Math.abs(aaa)}</span>个百分点`
        } else if (aaa < 0) {
          bbb = `低于全省<span class="light">${Math.abs(aaa)}</span>个百分点`
        } else {
          bbb = `与全省平均水平<span class="light">持平</span>`
        }
        let ccc = (this.chartArr.sideItem1_2.chartArr[1].yAxis[2] - this.chartArr.sideItem1_2.chartArr[0].yAxis[2]).toFixed(2)
        let ddd = ''
        if (ccc > 0) {
          ddd = `高于全省<span class="light">${Math.abs(ccc)}</span>个百分点`
        } else if (ccc < 0) {
          ddd = `低于全省<span class="light">${Math.abs(ccc)}</span>个百分点`
        } else {
          ddd = `与全省平均水平<span class="light">持平</span>`
        }
        this.chartArr.sideItem1_2.result = `${this.cityName}第二产业比重${bbb}，第三产业比重${ddd}。`

        let data2 = res[2].data
        this.chartArr.sideItem1_3.chartArr[0].name = `${data2.yAxis[0].name}(${data2.yAxis[0].unit})`
        this.chartArr.sideItem1_3.xAxis = data2.xAxis
        this.chartArr.sideItem1_3.chartArr[0].yAxis = data2.yAxis[0].list
        let avg = this.chartArr.sideItem1_2.chartArr[0].yAxis[1]
        this.chartArr.sideItem1_3.chartArr[1].markLine.data[0].yAxis = avg
        this.chartArr.sideItem1_3.chartArr[1].name = `全省平均值(${avg}${data2.yAxis[0].unit})`
        this.barLineChart('sideItem1_3', this.chartArr.sideItem1_3)
        let eee = data2.xAxis.indexOf(this.cityName)
        this.chartArr.sideItem1_3.result = `${this.cityName}第二产业占比<span class="light">${data2.yAxis[0].list[eee]}</span>，居全省第<span class="light">${eee + 1}</span>位。`

        let data3 = res[3].data
        this.chartArr.sideItem1_4.title = `2018年全省各地市第三产业占比对比`
        this.chartArr.sideItem1_4.chartArr[0].name = `${data3.yAxis[0].name}(${data3.yAxis[0].unit})`
        this.chartArr.sideItem1_4.xAxis = data3.xAxis
        this.chartArr.sideItem1_4.chartArr[0].yAxis = data3.yAxis[0].list
        let avg1 = this.chartArr.sideItem1_2.chartArr[0].yAxis[2]
        this.chartArr.sideItem1_4.chartArr[1].markLine.data[0].yAxis = avg
        this.chartArr.sideItem1_4.chartArr[1].name = `全省平均值(${avg1}${data3.yAxis[0].unit})`
        this.barLineChart('sideItem1_4', this.chartArr.sideItem1_4)
        let fff = data3.xAxis.indexOf(this.cityName)
        this.chartArr.sideItem1_4.result = `${this.cityName}第三产业占比<span class="light">${data3.yAxis[0].list[fff]}</span>，居全省第<span class="light">${fff + 1}</span>位。`
      } else {
        this.chartArr.sideItem1_1.isValue = true
        this.chartArr.sideItem1_1.dataSource = `暂无来源`
        this.chartArr.sideItem1_1.result = `暂无结论`
        this.chartArr.sideItem1_2.isValue = true
        this.chartArr.sideItem1_2.dataSource = `暂无来源`
        this.chartArr.sideItem1_2.result = `暂无结论`
        this.chartArr.sideItem1_3.isValue = true
        this.chartArr.sideItem1_3.dataSource = `暂无来源`
        this.chartArr.sideItem1_3.result = `暂无结论`
        this.chartArr.sideItem1_4.dataSource = `暂无来源`
        this.chartArr.sideItem1_4.result = `暂无结论`
      }
    })
    // 5、 获取某年全省各地市第一产业规模与增速对比并绘制图表
    apiGet(
      '/statistics/getScaleDataMultiZb', {
        year: 2018,
        area: '浙江省',
        zbs: '第一产业增加值,第一产业增加值增长率'
      }).then(res => {
      this.chartArr.sideItem1_5.title = `2018年全省各地市第一产业规模与增速对比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_5.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem1_5.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem1_5.xAxis = data.xAxis
        for (let i = 0; i < data.yAxis[0].list.length; i++) {
          this.chartArr.sideItem1_5.chartArr[0].yAxis.push((data.yAxis[0].list[i] / 10000).toFixed(2))
        }
        this.chartArr.sideItem1_5.chartArr[1].yAxis = data.yAxis[1].list
        this.bothWayBarLineChart('sideItem1_5', this.chartArr.sideItem1_5)
        let aaa = data.xAxis.indexOf(this.cityName)
        let bbb = []
        for (let i = 0; i < data.xAxis.length; i++) {
          bbb.push({
            name: data.xAxis[i],
            value: data.yAxis[1].list[i]
          })
        }
        let ccc = bbb.sort(function (a, b) {
          return b.value - a.value
        })
        let ddd = ccc.findIndex(item => {
          return item.name === this.cityName
        })
        let eee = (data.yAxis[1].list[aaa] - getArrAvg(data.yAxis[1].list)).toFixed(2)
        let fff = ''
        if (eee > 0) {
          fff = `高于全省<span class="light">${Math.abs(eee)}</span>个百分点`
        } else if (eee < 0) {
          fff = `低于全省<span class="light">${Math.abs(eee)}</span>个百分点`
        } else {
          fff = `与全省平均水平<span class="light">持平</span>`
        }
        this.chartArr.sideItem1_5.result = `${this.cityName}第一产业规模居全省第<span class="light">${aaa + 1}</span>位，2018年增速居全省第<span class="light">${ddd + 1}</span>位，增速${fff}。`
      } else {
        this.chartArr.sideItem1_0.isValue = true
        this.chartArr.sideItem1_0.dataSource = `暂无来源`
        this.chartArr.sideItem1_0.result = `暂无结论`
      }
    })
    // 6、 获取某年全省各地市第二产业规模与增速对比并绘制图表
    apiGet(
      '/statistics/getScaleDataMultiZb', {
        year: 2018,
        area: '浙江省',
        zbs: '第二产业增加值,第二产业增加值增长率'
      }).then(res => {
      this.chartArr.sideItem1_6.title = `2018年全省各地市第二产业规模与增速对比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_6.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem1_6.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem1_6.xAxis = data.xAxis
        for (let i = 0; i < data.yAxis[0].list.length; i++) {
          this.chartArr.sideItem1_6.chartArr[0].yAxis.push((data.yAxis[0].list[i] / 10000).toFixed(2))
        }
        this.chartArr.sideItem1_6.chartArr[1].yAxis = data.yAxis[1].list
        this.bothWayBarLineChart('sideItem1_6', this.chartArr.sideItem1_6)
        let aaa = data.xAxis.indexOf(this.cityName)
        let bbb = []
        for (let i = 0; i < data.xAxis.length; i++) {
          bbb.push({
            name: data.xAxis[i],
            value: data.yAxis[1].list[i]
          })
        }
        let ccc = bbb.sort(function (a, b) {
          return b.value - a.value
        })
        let ddd = ccc.findIndex(item => {
          return item.name === this.cityName
        })
        let eee = (data.yAxis[1].list[aaa] - getArrAvg(data.yAxis[1].list)).toFixed(2)
        let fff = ''
        if (eee > 0) {
          fff = `高于全省<span class="light">${Math.abs(eee)}</span>个百分点`
        } else if (eee < 0) {
          fff = `低于全省<span class="light">${Math.abs(eee)}</span>个百分点`
        } else {
          fff = `与全省平均水平<span class="light">持平</span>`
        }
        this.chartArr.sideItem1_6.result = `${this.cityName}第二产业规模居全省第<span class="light">${aaa + 1}</span>位，2018年增速居全省第<span class="light">${ddd + 1}</span>位，增速${fff}。`
      } else {
        this.chartArr.sideItem1_6.isValue = true
        this.chartArr.sideItem1_6.dataSource = `暂无来源`
        this.chartArr.sideItem1_6.result = `暂无结论`
      }
    })
    // 7、 获取某年全省各地市第三产业规模与增速对比并绘制图表
    apiGet(
      '/statistics/getScaleDataMultiZb', {
        year: 2018,
        area: '浙江省',
        zbs: '第三产业增加值,第三产业增加值增长率'
      }).then(res => {
      this.chartArr.sideItem1_7.title = `2018年全省各地市第三产业规模与增速对比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem1_7.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem1_7.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem1_7.xAxis = data.xAxis
        for (let i = 0; i < data.yAxis[0].list.length; i++) {
          this.chartArr.sideItem1_7.chartArr[0].yAxis.push((data.yAxis[0].list[i] / 10000).toFixed(2))
        }
        this.chartArr.sideItem1_7.chartArr[1].yAxis = data.yAxis[1].list
        this.bothWayBarLineChart('sideItem1_7', this.chartArr.sideItem1_7)
        let aaa = data.xAxis.indexOf(this.cityName)
        let bbb = []
        for (let i = 0; i < data.xAxis.length; i++) {
          bbb.push({
            name: data.xAxis[i],
            value: data.yAxis[1].list[i]
          })
        }
        let ccc = bbb.sort(function (a, b) {
          return b.value - a.value
        })
        let ddd = ccc.findIndex(item => {
          return item.name === this.cityName
        })
        let eee = (data.yAxis[1].list[aaa] - getArrAvg(data.yAxis[1].list)).toFixed(2)
        let fff = ''
        if (eee > 0) {
          fff = `高于全省<span class="light">${Math.abs(eee)}</span>个百分点`
        } else if (eee < 0) {
          fff = `低于全省<span class="light">${Math.abs(eee)}</span>个百分点`
        } else {
          fff = `与全省平均水平<span class="light">持平</span>`
        }
        this.chartArr.sideItem1_7.result = `${this.cityName}第三产业规模居全省第<span class="light">${aaa + 1}</span>位，2018年增速居全省第<span class="light">${ddd + 1}</span>位，增速${fff}。`
      } else {
        this.chartArr.sideItem1_7.isValue = true
        this.chartArr.sideItem1_7.dataSource = `暂无来源`
        this.chartArr.sideItem1_7.result = `暂无结论`
      }
    })
  },
  methods: {
    threeIndustrialAll1() {
      return apiGet(
        '/statistics/getStructuralData', {
          startYear: 2018,
          endYear: 2018,
          area: this.cityName,
          zbs: '第一产业占比,第二产业占比,第三产业占比'
        })
    },
    threeIndustrialAll2() {
      return apiGet(
        '/statistics/getStructuralData', {
          startYear: 2018,
          endYear: 2018,
          area: '浙江省',
          zbs: '第一产业占比,第二产业占比,第三产业占比'
        })
    },
    threeIndustrialAll3() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: '浙江省',
          zb: '第二产业占比'
        })
    },
    threeIndustrialAll4() {
      return apiGet(
        '/statistics/getScaleData', {
          year: 2018,
          area: '浙江省',
          zb: '第三产业占比'
        })
    },
    threeIndustrialAll5() {
      return apiGet(
        '/industry/getData', {
          year: 2015,
          area: this.cityName,
          zb: '近5年制造业增速前10产业'
        })
    },
    threeIndustrialAll6() {
      return apiGet(
        '/industry/getData', {
          year: 2018,
          area: this.cityName,
          zb: '近5年制造业增速前10产业'
        })
    },

  }
}