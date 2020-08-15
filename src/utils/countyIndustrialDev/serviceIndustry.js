import {
  apiGet,
  axiosAll
}
from '@/api/api'
export const serviceIndustryMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年某地服务业分行业增加值规模并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.countyName,
        zb: '服务业规模排名'
      }).then(res => {
      this.chartArr.sideItem3_0.title = `2018年${this.countyName}服务业分行业增加值规模`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem3_0.chartArr[0].name = `服务业务增加值（万元）`
        this.chartArr.sideItem3_0.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem3_0.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.barLineChart('sideItem3_0', this.chartArr.sideItem3_0)
        this.chartArr.sideItem3_0.result = `2018年${this.countyName}服务业规模前5产业分别为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem3_0.isValue = true
        this.chartArr.sideItem3_0.result = `暂无结论`
      }
    })
    // 1、 获取某年某地服务业分行业占比变化并绘制图表
    apiGet(
      '/industry/getIncreaseData', {
        startYear: 2015,
        endYear: 2018,
        area: this.countyName,
        zb: '服务业增加值占比变化'
      }).then(res => {
      this.chartArr.sideItem3_1.title = `2018年${this.countyName}服务业分行业占比变化`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem3_1.chartArr[0].name = `服务业占比提示（%）`
        this.chartArr.sideItem3_1.xAxis = data.xData
        this.chartArr.sideItem3_1.chartArr[0].yAxis = data.yData
        this.barLineChart('sideItem3_1', this.chartArr.sideItem3_1)
        this.chartArr.sideItem3_1.result = `2018年${this.countyName}近五年占比提升排名分别为<span class="light">${data.xData.join('、')}</span>。`
      } else {
        this.chartArr.sideItem3_1.isValue = true
        this.chartArr.sideItem3_1.dataSource = `暂无来源`
        this.chartArr.sideItem3_1.result = `暂无结论`
      }
    })
    // 2、 获取某年某地服务业分行业工商注册企业数量并绘制图表
    // 3、 获取某年某地服务业分行业工商注册企业新增数量并绘制图表
    axiosAll([this.serviceIndustryIAll1(), this.serviceIndustryIAll2()]).then(res => {
      this.chartArr.sideItem3_3.title = `2018年${this.countyName}服务业分行业工商注册企业数量`
      this.chartArr.sideItem3_4.title = `2018年${this.countyName}服务业分行业工商注册企业新增数量`
      let aaa = ''
      let bbb = ''
      if (res[0].code === '0') {
        let data0 = res[0].data
        this.chartArr.sideItem3_3.chartArr[0].name = `制造业规模`
        this.chartArr.sideItem3_3.xAxis = data0.xData.slice(0, 10)
        this.chartArr.sideItem3_3.chartArr[0].yAxis = data0.yData.slice(0, 10)
        this.barLineChart('sideItem3_3', this.chartArr.sideItem3_3)
        let sum = 0
        for (var i = 0; i < data0.yData.length; i++) {
          sum += data0.yData[i]
        }
        aaa = `2018年${this.countyName}共有服务业工商注册企业<span class="light">${sum}</span>万家，主要分布在<span class="light">${data0.xData.slice(0,5).join('、')}</span>等行业。`
      } else {
        this.chartArr.sideItem3_3.isValue = true
        this.chartArr.sideItem3_3.dataSource = `暂无来源`
        aaa = ''
      }

      if (res[1].code === '0') {
        let data1 = res[1].data
        this.chartArr.sideItem3_4.chartArr[0].name = `近五年新增工商注册企业新增数量（家）`
        this.chartArr.sideItem3_4.xAxis = data1.xData.slice(0, 10)
        this.chartArr.sideItem3_4.chartArr[0].yAxis = data1.yData.slice(0, 10)
        this.barLineChart('sideItem3_4', this.chartArr.sideItem3_4)

        let sum1 = 0
        for (var k = 0; k < data1.yData.length; k++) {
          sum1 += data1.yData[k]
        }
        bbb = `近5年服务业市场主体总量增长<span class="light">${sum1}</span>家，主要分布在<span class="light">${data1.xData.slice(0,5).join('、')}</span>等行业。`
      } else {
        this.chartArr.sideItem3_4.isValue = true
        this.chartArr.sideItem3_4.dataSource = `暂无来源`
        bbb = ''
      }

      let ccc = ''
      if(!aaa && !bbb){
        ccc = '暂无结论'
      } else {
        ccc = `${aaa}${bbb}`
      }

      this.chartArr.sideItem3_2.result = `${ccc}`
    })
  },
  methods: {
    serviceIndustryIAll1() {
      return apiGet(
        '/industry/getData', {
          year: 2018,
          area: this.countyName,
          zb: '服务业分行业工商注册企业数量'
        })
    },
    serviceIndustryIAll2() {
      return apiGet(
        '/industry/getIncreaseData', {
          startYear: 2015,
          endYear: 2018,
          area: this.countyName,
          zb: '服务业分行业工商注册企业数量近5年增速'
        })
    }
  }
}