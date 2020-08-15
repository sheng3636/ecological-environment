import {
  apiGet
}
from '@/api/api'
export const synthesisMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、 获取某年某地区主要指标排名对比并绘制图表
    apiGet(
      '/statistics/getRank', {
        startYear: 2015,
        endYear:2018,
        areas: '浙江省',
        area: this.cityName,
        model: 'city',
        zbs: '生产总值,生产总值增长率,一般公共预算收入,发明专利授权量,R&D经费投入占生产总值比重,城镇居民人均可支配收入,农村居民人均可支配收入,城乡居民收入比,常住城镇化率,EI指数,空气质量达到优良天数的比率,规上工业亩均税收（万元/亩）,单位建设用地生产总值'
      }).then(res => {
      let data = res.data.table
      data.sort((a, b) => {
        return a.endRank - b.endRank
      })
      for (let i = 0; i < data.length; i++) {
        this.chartArr.sideItem6_0.chartArr[0].indicator.push({
          name: data[i].title
        })
        this.chartArr.sideItem6_0.chartArr[0].seriesData.push(data[i].endRank)
      }

      this.chartArr.sideItem6_0.title = `2018年${this.cityName}主要指标排名对比`
      this.chartArr.sideItem6_0.list = data
      this.radarChart('sideItem6_0', this.chartArr.sideItem6_0)
      let aaa = data.slice(0, 2)
      let bbb = data.slice(-2)
      let ccc = []
      let ddd = []
      for (let i = 0; i < aaa.length; i++) {
        ccc.push(aaa[i].title)
      }
      for (let i = 0; i < bbb.length; i++) {
        ddd.push(bbb[i].title)
      }
      
      this.chartArr.sideItem6_0.result = `2018年${this.cityName}的优势指标有<span class="light">${ccc.join('，')}</span>，劣势指标有<span class="light">${ddd.join('，')}</span>。`
    })
    // 1、 获取某年某地区主要指标进度对比并绘制图表
    apiGet(
      '/statistics/getProgressStatusData', {
        year: 2018,
        area: this.cityName,
        zbs: ['生产总值', '发明专利授权量', 'R&D经费投入占生产总值比重', '常住城镇化率', '空气质量达到优良天数的比率'].join(',')
      }).then(res => {
      let data = res.data
      this.chartArr.sideItem6_1.title = `2018年${this.cityName}主要指标进度对比`
      let aaa = this.chartArr.sideItem6_1.chartArr[0].yAxis
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          let value = isNaN(data[key]) ? 0 : (data[key] * 100 > 100 ? 100 : data[key] * 100)
          this.chartArr.sideItem6_1.xAxis.push(key)
          aaa.push(value)
        }
      }
      aaa.sort((a, b) => {
        return b - a
      })
      this.horizontalChart('sideItem6_1', this.chartArr.sideItem6_1)
      let bbb = []
      let ccc = []
      for (let i = 0; i < aaa.length; i++) {
        if (aaa[i] >= (2018 - 2016 + 1) * 0.2 * 100) {
          bbb.push(i)
        } else {
          ccc.push(i)
        }
      }
      let ddd = []
      let eee = []
      for (let i = 0; i < bbb.length; i++) {
        ddd.push(this.chartArr.sideItem6_1.xAxis[bbb[i]])
      }
      for (let i = 0; i < ccc.length; i++) {
        eee.push(this.chartArr.sideItem6_1.xAxis[ccc[i]])
      }
      let fff = ddd.length > 0 ? `有<span class="light">${ddd.join('，')}</span>` : `<span class="light">无</span>`
      let ggg = eee.length > 0 ? `有<span class="light">${eee.join('，')}</span>` : `<span class="light">无</span>`
      this.chartArr.sideItem6_1.result = `2018年，${this.cityName}进度良好的指标${fff}， 进度滞后的指标${ggg}。`
    })
  },
  methods: {}
}