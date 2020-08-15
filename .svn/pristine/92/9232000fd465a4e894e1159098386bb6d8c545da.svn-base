import cityTown from '@/utils/cityTown'
import {
  apiGet,
  axiosAll
}
from '@/api/api'
export const manufacturingMixin = {
  data() {
    return {
      manufacturingList: [
        "通用设备制造业",
        "橡胶和塑料制品业",
        "专用设备制造业",
        "汽车制造业",
        "电气机械和器材制造业",
        "皮革、毛皮、羽毛及其制品和制鞋业",
        "文教、工美、体育和娱乐用品制造业",
        "金属制品业",
        "纺织服装、服饰业",
        "其他制造业",
        "铁路、船舶、航空航天和其他运输设备制造业",
        "造纸和纸制品业",
        "纺织业",
        "非金属矿物制品业",
        "印刷和记录媒介复制业",
        "家具制造业",
        "化学原料和化学制品制造业",
        "仪器仪表制造业",
        "木材加工和木、竹、藤、棕、草制品业",
        "农副食品加工业",
        "电力、热力的生产和供应业",
        "计算机、通信和其他电子设备制造业",
        "食品制造业",
        "酒、饮料和精制茶制造业",
        "医药制造业",
        "水的生产和供应业",
        "金属制品、机械和设备修理业",
        "废弃资源综合利用业",
        "燃气生产和供应业",
        "非金属矿采选业",
        "化学纤维制造业",
        "石油加工、炼焦和核燃料加工业",
        "黑色金属冶炼和压延加工业",
        "有色金属矿采选业"
      ],
      resultData: []
    }
  },
  watch: {
    resultData(newData) {
      if (newData.length > 0) {
        let tab = {}
        this.manufacturingList.forEach((hy) => {
          let ob = {}
          this.$set(ob, 'val1', hy)
          this.$set(tab, hy, ob)
        })
        for (var y = 0; y < newData.length; y++) {
          var obj = {}
          newData[y].value.forEach((name, i) => {
            var index
            if (newData[y].ydata[i] == newData[y].ydata[i - 1]) {
              index = obj[i - 1]
            } else {
              switch (i) {
                case 0:
                  index = 5
                  break
                case 1:
                  index = 4
                  break
                case 2:
                  index = 3
                  break
                case 3:
                  index = 2
                  break
                case 4:
                  index = 1
                  break
              }
            }
            this.$set(obj, i, index)
            if (tab[name] != null) {
              this.$set(tab[name], newData[y].key, index)
            }
          })
        }
        var table = []
        for (let v in tab) {
          table.push(tab[v])
        }
        table.forEach((t) => {
          let num = 0
          for (let key in t) {
            if (key != 'no' && key != 'val1') {
              num += parseInt(t[key])
            }
          }
          this.$set(t, 'val9', num)
        })

        table.sort((a, b) => {
          return parseInt(b['val9']) - parseInt(a['val9'])
        })
        let tempData = table.splice(0, 10)
        this.chartArr.sideItem2_13.list = tempData.map((tm, i) => {
          tm['no'] = i + 1
          return tm
        })
        var table1 = JSON.parse(JSON.stringify(table))
        var ta = table1.splice(0, 5)
        var str = []
        ta.forEach((t) => {
          str.push(t['val1'])
        })
        this.chartArr.sideItem2_13.result = `综合来看，建议${this.cityName}重点发展<span class="light">${str.join('，')}</span>等产业，分值根据排名高低赋分， 对排名第一至第五的产业分别赋分5分至1分。`
      }
    }
  },
  mounted() {
    let map = new AMap.Map('aaa', {
      resizeEnable: true,
      center: [120.200268, 30.241793],
      zoom: 7
    })
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
      let districtExplorer = (window.districtExplorer = new DistrictExplorer({
        eventSupport: true, // 打开事件支持
        map: map
      }))
      // 创建一个实例
      districtExplorer.loadAreaNode(
        cityTown[this.$route.query.cityName].code,
        (error, areaNode) => {
          if (error) {
            console.error(error)
            return
          }
          // 特别注意这里哦，如果查看过正常的geojson文件，都会发现，文件都是以features 字段开头的，所以这里要记得加上
          this.chartArr.sideItem2_7.geoJson.features = areaNode.getSubFeatures()
        }
      )
    })
    // 0、 获取某年某地制造业规模前10产业并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.cityName,
        zb: '制造业规模前10产业'
      }).then(res => {
      this.chartArr.sideItem2_0.title = `2018年${this.cityName}制造业规模前10产业`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_0.chartArr[0].name = `制造业数量(${data.unit})`
        this.chartArr.sideItem2_0.xAxis = data.xData
        this.chartArr.sideItem2_0.chartArr[0].yAxis = data.yData
        this.resultData.push({
          key:'val2',
          value:data.xData.slice(0, 5),
          ydata:data.yData.slice(0, 5),
        })
        this.textTopHorizontalChart('sideItem2_0', this.chartArr.sideItem2_0)
        this.chartArr.sideItem2_0.result = `2018年${this.cityName}制造业规模前10产业分别为<span class="light">${data.xData.slice(0,10).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_0.isValue = true
        this.chartArr.sideItem2_0.dataSource = `暂无来源`
        this.chartArr.sideItem2_0.result = `暂无结论`
      }
    })
    // 1、获取某年限内某地区快速发展前10位行业并绘制图表
    axiosAll([this.manufacturingAll1(), this.manufacturingAll2()]).then(res => {
      if (res.code === '0') {} else {
        this.chartArr.sideItem1_0.isValue = true
        this.chartArr.sideItem1_0.dataSource = `暂无来源`
        this.chartArr.sideItem1_0.result = `暂无结论`
      }
      this.chartArr.sideItem2_1.title = `2015-2018年${this.cityName}快速发展前10位行业`
      if (res[0].code === '0' && res[1].code === '0') {
        let data0 = res[0].data
        let data1 = res[1].data
        let data = []
        data1.xData.forEach((x, i) => {
          let index = data0.xData.indexOf(x)
          let num = data0.yData[index]
          let dalY = data1.yData[i] - num
          data.push({
            x: x, // 横轴  
            y1: num, // 15年数值      
            y2: data1.yData[i], // 18年数值
            dalY: dalY.toFixed(2) // 差值
          })
        })
        data.sort((a, b) => {
          return b.dalY - a.dalY
        })
        data = data.slice(0, 10)
        for (let i = 0; i < data.length; i++) {
          this.chartArr.sideItem2_1.chartArr[0].yAxis.push(data[i].y1)
          this.chartArr.sideItem2_1.chartArr[1].yAxis.push(data[i].dalY)
          this.chartArr.sideItem2_1.xAxis.push(data[i].x)
        }
        this.resultData.push({
          key: 'val3',
          value: this.chartArr.sideItem2_1.chartArr[0].yAxis.slice(0, 5),
          ydata: this.chartArr.sideItem2_1.xAxis,
        })
        this.barLineChart('sideItem2_1', this.chartArr.sideItem2_1)
        this.chartArr.sideItem2_1.result = `2015-2018年${this.cityName}制造业增速前10产业为<span class="light">${this.chartArr.sideItem2_1.xAxis.join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_1.isValue = true
        this.chartArr.sideItem2_1.dataSource = `暂无来源`
        this.chartArr.sideItem2_1.result = `暂无结论`
      }
    })
    // 2、 获取某年某地区制造业区位商前10产业并绘制图表
    apiGet(
      '/industry/getCountData', {
        type: '地市',
        year: 2018,
        area: this.cityName,
        zb: '制造业区位商前10产业'
      }).then(res => {
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_2.title = `2018年${this.cityName}制造业区位商前10产业`
        this.chartArr.sideItem2_2.chartArr[0].name = `区位商(${data.unit})`
        this.chartArr.sideItem2_2.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_2.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val4',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_2', this.chartArr.sideItem2_2)
        this.chartArr.sideItem2_2.result = `2018年，${this.cityName}制造业区位商排名前三的产业为<span class="light">${data.xData.slice(0, 10).slice(0,3)}</span>。`
      } else {
        this.chartArr.sideItem2_2.isValue = true
        this.chartArr.sideItem2_2.dataSource = `暂无来源`
        this.chartArr.sideItem2_2.result = `暂无结论`
      }

    })
    // 3、 获取某年全省各地市有色金属矿采选业占比并绘制图表
    apiGet(
      '/industry/getCountData2', {
        year: 2018,
        area: '浙江省',
        tradeNames: '有色金属矿采选业',
        zb: '制造业区位商前10产业'

      }).then(res => {
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_3.title = `2018年全省各地市有色金属矿采选业占比`
        this.chartArr.sideItem2_3.chartArr[0].name = `${data.yData[0].name}`
        let sum = 0
        for (let i = 0; i < data.yData[0].value.length; i++) {
          sum += data.yData[0].value[i]
        }
        for (let i = 0; i < data.xData.length; i++) {
          this.chartArr.sideItem2_3.chartArr[0].list.push({
            name: data.xData[i],
            value: ((data.yData[0].value[i] / sum) * 100).toFixed(2)
          })
        }
        this.pieChart('sideItem2_3', this.chartArr.sideItem2_3)
      } else {
        this.chartArr.sideItem2_3.isValue = true
        this.chartArr.sideItem2_3.dataSource = `暂无来源`
        this.chartArr.sideItem2_3.result = `暂无结论`
      }
    })
    // 4、 获取某年全省各地市燃气生产和供应业占比并绘制图表
    apiGet(
      '/industry/getCountData2', {
        year: 2018,
        area: '浙江省',
        tradeNames: '燃气生产和供应业',
        zb: '制造业区位商前10产业'

      }).then(res => {
      this.chartArr.sideItem2_4.title = `2018年全省各地市燃气生产和供应业占比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_4.chartArr[0].name = `${data.yData[0].name}`
        let sum = 0
        for (let i = 0; i < data.yData[0].value.length; i++) {
          sum += data.yData[0].value[i]
        }
        for (let i = 0; i < data.xData.length; i++) {
          this.chartArr.sideItem2_4.chartArr[0].list.push({
            name: data.xData[i],
            value: ((data.yData[0].value[i] / sum) * 100).toFixed(2)
          })
        }
        this.pieChart('sideItem2_4', this.chartArr.sideItem2_4)
      } else {
        this.chartArr.sideItem2_4.isValue = true
        this.chartArr.sideItem2_4.dataSource = `暂无来源`
        this.chartArr.sideItem2_4.result = `暂无结论`
      }
    })
    // 5、 获取某年全省各地市燃气生产和供应业占比并绘制图表
    apiGet(
      '/industry/getCountData2', {
        year: 2018,
        area: '浙江省',
        tradeNames: '酒、饮料和精制茶制造业',
        zb: '制造业区位商前10产业'

      }).then(res => {
      this.chartArr.sideItem2_5.title = `2018年全省各地市酒、饮料和精制茶制造业占比`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_5.chartArr[0].name = `${data.yData[0].name}`
        let sum = 0
        for (let i = 0; i < data.yData[0].value.length; i++) {
          sum += data.yData[0].value[i]
        }
        for (let i = 0; i < data.xData.length; i++) {
          this.chartArr.sideItem2_5.chartArr[0].list.push({
            name: data.xData[i],
            value: ((data.yData[0].value[i] / sum) * 100).toFixed(2)
          })
        }
        this.pieChart('sideItem2_5', this.chartArr.sideItem2_5)
      } else {
        this.chartArr.sideItem2_5.isValue = true
        this.chartArr.sideItem2_5.dataSource = `暂无来源`
        this.chartArr.sideItem2_5.result = `暂无结论`
      }
    })
    // 6、 获取某年某地区分行业上市企业数量并绘制图表
    apiGet(
      '/industry/getEnterpriseData', {
        type: '地市',
        year: 2018,
        area: this.cityName,
        zb: '分行业上市企业数量'
      }).then(res => {
      this.chartArr.sideItem2_6.title = `2018年${this.cityName}分行业上市企业数量`
      this.chartArr.sideItem2_8.title = `2018年${this.cityName}上市企业列表`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_6.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_6.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val5',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_6', this.chartArr.sideItem2_6)
        this.chartArr.sideItem2_6.result = `2018年${this.cityName}上市企业数量较多的行业为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`


        let tableObj = data.eData
        this.chartArr.sideItem2_7.title = `2018年${this.cityName}上市企业布局图`
        let tableList = []
        let l = data.xData.length >= 10 ? 10 : data.xData.length
        for (let i = 0; i < l; i++) {
          let companyList = tableObj[data.xData[i]]
          let companyNameList = []
          for (let index = 0; index < companyList.length; index++) {
            companyNameList.push(companyList[index].securitiesName)
          }
          tableList.push({
            name: data.xData[i],
            number: companyList.length,
            nameList: companyNameList.join('，')
          })
        }
        this.chartArr.sideItem2_8.list = tableList


        let aaa = data.xData.slice(0, 3)
        for (let j = 0; j < aaa.length; j++) {
          for (let i = 0; i < tableObj[aaa[j]].length; i++) {
            this.chartArr.sideItem2_7['mapList' + j].push({
              companyName: tableObj[aaa[j]][i].companyName,
              IndustryCategories: tableObj[aaa[j]][i].tradeName,
              address: tableObj[aaa[j]][i].officeArea,
              value: [tableObj[aaa[j]][i].longitude, tableObj[aaa[j]][i].latitude, tableObj[aaa[j]][i].total],
            })
          }
        }
        this.drawEchartMap('sideItem2_7', this.chartArr.sideItem2_7)
      } else {
        this.chartArr.sideItem2_6.isValue = true
        this.chartArr.sideItem2_6.dataSource = `暂无来源`
        this.chartArr.sideItem2_6.result = `暂无结论`
        this.chartArr.sideItem2_7.isValue = true
        this.chartArr.sideItem2_7.dataSource = `暂无来源`
        this.chartArr.sideItem2_7.result = `暂无结论`
      }
    })
    // 9、 获取某年某地制造业分行业工商注册企业数量并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.cityName,
        zb: '制造业分行业工商注册企业数量'
      }).then(res => {
      this.chartArr.sideItem2_9.title = `2018年${this.cityName}制造业分行业工商注册企业数量`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_9.chartArr[0].name = `制造业规模(家)`
        this.chartArr.sideItem2_9.xAxis = data.xData
        this.chartArr.sideItem2_9.chartArr[0].yAxis = data.yData
        this.textTopHorizontalChart('sideItem2_9', this.chartArr.sideItem2_9)
        let sum = 0
        for (var i = 0; i < data.yData.length; i++) {
          sum += data.yData[i]
        }
        this.chartArr.sideItem2_9.result = `2018年${this.cityName}共有制造业工商注册企业<span class="light">${sum}</span>家，主要分布在<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_9.isValue = true
        this.chartArr.sideItem2_9.dataSource = `暂无来源`
        this.chartArr.sideItem2_9.result = `暂无结论`
      }
    })
    // 10、 获取某年某地制造业分行业新增工商注册企业数量排名并绘制图表
    apiGet(
      '/industry/getIncreaseData', {
        startYear: 2014,
        endYear: 2018,
        area: this.cityName,
        zb: '制造业分行业工商注册企业数量近5年增速'
      }).then(res => {
      this.chartArr.sideItem2_10.title = `2018年${this.cityName}制造业分行业新增工商注册企业数量排名`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_10.chartArr[0].name = `近五年新增工商注册企业数量(家)`
        this.chartArr.sideItem2_10.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_10.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val6',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_10', this.chartArr.sideItem2_10)
        let sum = 0
        for (var i = 0; i < data.yData.length; i++) {
          sum += data.yData[i]
        }
        this.chartArr.sideItem2_10.result = `近5年制造业市场主体总量增长<span class="light">${sum}</span>家， 主要分布在<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_10.isValue = true
        this.chartArr.sideItem2_10.dataSource = `暂无来源`
        this.chartArr.sideItem2_10.result = `暂无结论`
      }
    })
    // 11、 获取某年某地分行业高新技术企业数量并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.cityName,
        zb: '分行业高新技术企业数'
      }).then(res => {
      this.chartArr.sideItem2_11.title = `2018年${this.cityName}分行业高新技术企业数量`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_11.chartArr[0].name = `分行业高新技术企业数量（家）`
        this.chartArr.sideItem2_11.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_11.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val7',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_11', this.chartArr.sideItem2_11)
        this.chartArr.sideItem2_11.result = `2018年${this.cityName}高新技术企业数量最多的5个产业为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_11.isValue = true
        this.chartArr.sideItem2_11.dataSource = `暂无来源`
        this.chartArr.sideItem2_11.result = `暂无结论`
      }
    })
    // 12、 获取某年某地分行业发明专利授权数量并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.cityName,
        zb: '分行业发明专利授权数'
      }).then(res => {
      this.chartArr.sideItem2_12.title = `2018年${this.cityName}分行业发明专利授权数量`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_12.chartArr[0].name = `分行业发明专利授权数（项）`
        this.chartArr.sideItem2_12.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_12.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val8',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_12', this.chartArr.sideItem2_12)
        this.chartArr.sideItem2_12.result = `2018年${this.cityName}专利授权数量最多的5个产业为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_12.isValue = true
        this.chartArr.sideItem2_12.dataSource = `暂无来源`
        this.chartArr.sideItem2_12.result = `暂无结论`
      }
    })
  },
  methods: {
    manufacturingAll1() {
      return apiGet(
        '/industry/getData', {
          year: 2015,
          area: this.cityName,
          zb: '近5年制造业增速前10产业'
        })
    },
    manufacturingAll2() {
      return apiGet(
        '/industry/getData', {
          year: 2018,
          area: this.cityName,
          zb: '近5年制造业增速前10产业'
        })
    },
    //  获取所选地区geoJson并绘制地图
    drawEchartMap(id, data) {
      this.echartsMap = this.$echarts.init(document.getElementById(id))
      this.echartsMap.showLoading()
      this.$echarts.registerMap(this.$route.query.cityName, data.geoJson)
      this.echartsMap.hideLoading()
      // 图标
      let iconGD0 = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC1UlEQVRYR9WWX2hOcRjHPw+vNheShZBQ2s55bZOVErnYm+RCYbIbF0hEU1zgglq0m92gcDE2NW4oMn8mIjEXi5S0Mu85Wi40raXF1XYx26P3OFt73/d33nPOi5Zz957f832ez/v9/Z7nd4RpfmSa6/P/AajLDpQqhBqUdeD9iXdAD0qaUZ7Iar5HdTayA9rDUkq4BmwJSZ5GaZQkd6NARAJQlz0oN6IknBLTIjYNYZpQAHXZhPI8LJFxXbksSY4W0hYE0F7KmMlQUcUnREpKknQF5SgM4NKOsu8PAfpIsEHK+WbKEwigLnUoHcbiwiBCAwm6GWUMxUK4ilIZAHtObE7GBTiDcjZPJPSKRVXmvaapRZnFMN2ylmF1eAnUGgo9E9vcPcEOpOlAqDMAbBWLx1nFlPckOILQzxifUEqzdMqgJFkU14E+lJV5olKWMEI1wtOcIs2S5LQ6uEBFnm6M5VLJl9z3wQ443qGZb3BgAcJmxrmZtSa0isUhdXnjT8hs6TjVsooP0QFc2lAOGGzbyAi9zPb2e83kut9u6nhtW5YD1ycW5fG2wGEXcMcg6hKblHcAhXqEBEKnVPBIHW4D9QbXzovFiXgAPSykhK9AwiC8QilNsoKByXnjYu6a3wHbxeZhLACvzRweANsCZsEI8BllHFgGzA2YAf2ZQys1/CgGIAW8CEgc7bVwXCwuBAWHX0YOLcDhaNXyot5isV7EcynAyJDM6mChvEaYFxtC2S1JbhXShTrgn4VGoCkmwH2xDZM0J0lUgDm+C0GXTT6bUitJXoVBRwLwXEizF+F6WEJ//ZLYHIsSGxnA34o2ME7HqbU+MUClpPj59wE+spgZXlvagcmFnWJxL0rxTEwsB3wXMqM2M3JNT7vY7I9avCgAH+Ii5H1sDoltuD1DaGI7MJFPXVpRDvq/O8UOGNn/CsDvjGbPxiSn4tg+NbZoB4otmKubdoBfPHDPIfLsWHgAAAAASUVORK5CYII="
      let iconGD1 = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADSklEQVRYR9WWXYgNYRjH/89rrL1Btpn3LIkL+Si2fMzsRtSeJBfKV/bGBRIRxQUuKJEbNyhcYFfhhiLfIpKPsujMkZRNtLkQy/ues1m1sR1n59E5HG3nzJyZWRebuZma5/n/n9888z7vO4QhvmiI6+P/A0hLuRxEM5h5FgNNAiBmfsHAKxbiTa6v786Cb9++Ru1s5A48r6sbLwzjNAGLq5ozvwHRXkfry1EgIgG4Uq4BcC6KYSmHgRONWm8J04QCpBKJhcR8P8zIN0503FFqWzVtVYCno0bVDa+t7R5U8ZLI85JONvsoyKMqQFrKMwys+ycAoHOYEPNmf/mS8fMJBHgh5QoPuBJQXAlgy0+g3TCMfs7npwI4BWB6QJFDtta7YgG4Uu4DsN9H1OFoPaPw3DXNZggxnAyj3e7q+u5a1kMQNZdrCLhna+07PYEdSEl5hYAVFQDMS5xM5nZZsZfDgK35fP4jGcY7ALVlOuVoXR+3A50AJlW8jeeNgxANDNwdGCOig7ZSe1wp3wKYUqEzjIl2V9cHn+74f2VXysKiMX2MLO7vXwTm82WxVkfrTa6UzwE0VbgSNThKvY4MkLasNiba4IM338jlOvI1NQ8BzPwb/zNuKSm7Cagr03U6Wk+O9wksaxWILvmsgUdOJpMsLEAWooUAQxDdnKPULTeRuAjmlnINA4cbtd4ZC6A9kZA1zJ8AGD7Ck+R5B+xs9nMpVmVqAKJljlI3YgEUx0zK6wCWBuwFPwC8B+ABmABgdEDex95criHZ09MTGyBdX59kz3sQYBzpMQE7bK2PBCWHHkaulCcAbI5UrTIpZWs9l353yfcKBzDNqSB6BqIxcSE8otVNSl2opgsFKIjTUu5l4EBMgGuO1pU7aZlJJIAnpjlyhBDPgg4bPzD2vObGbPZxGHQkgGIXLGstE50NMyzEieiYrdT2SLlRkko5KctqI//dcaDNu16tpyeBfBTvyB0odsE0xzLRAxBNCzIXwMo5Wl+NUrzYraiJpby0ZbUw0UX/maIzjlLr43jGBiiYpyzrKBGV/2x2O1pXnJ5hMIMC+DOarQxsLBZgvulkMkFbdlWGQQMUIRKJg4W7rdTusDcNiv8TwGCLDtQNOcAvWqwSMOHt+3AAAAAASUVORK5CYII="
      let iconGD2 = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADYklEQVRYR9WWXWgUVxTH/2eymwZExNCWKqIPJcaZyc5sRBC/9gORPgjalObFh1akpSWF+mB9aCEovviigvrgJ6gvFSKmrRHFIsnexGApleSu7mwqoQ8lpQSJ7YNEYrL3yG4SSGZnd2YSIXhfBu49/3N+99xzzx3CEg9a4vh4+wBSTvZjQDUxqBnAZlBpE4+YWYI5rwo1dx9Y1n9BMxs4Aykp16gILhPho6rOGXmlob1Pt28GgQgEkHDkZwRcC+Jwjs05YdhtfhpfgB05uVMj3Pdz5LnOfFaY8W+raasCbMnl6mtpamxBwWdEVFDpTKw5U8lHVYBkPnsFzPsXAwDmYVWrtvY1bHzm5aciQNIZbAGo0zs4jTJRW3QK/YWJiQLV1TQqTbsAwPSyZ8KJXt0+HAogkZdHiHHUQ5QTht1UnE89HkhxDaIvxgv9jzZtGk862R6AU2Uaol+FbnnenmoZ6ASoxe2MQbt7DeuOK9gAiL7hKI3QJD8Fc908HWNUmPYHoTKQdOQwgA/dIoXoaqJXMWK65wpyXJj2D0lH/glgvVs3xZF1/ab5t3u+SgZksWjeLROMT77Hy6K7wPhxPgBfFGb8q4Qjf6Nih3QNAmIZw34SBuASgC/cAk2p7TyJHL+j9QCIz67PXreEI8cIqJ+vo2FhWA2hjiCVk58y4Ua5iDLCsNLTBai1gjlCWk1XRo/dTuZlBxitZbtknMyY9nehALZK+X40in8ARMoKkfk8U+2xPsP4d3atyq0BM/b2mvatUABF42Re/gLGHs9eQHgJxl8AFIC1AFZ42jFG6JWKZZqb/w8P8GQwDY26vZtRwFmiQ0K3TlWy9n2MEo48R8DXAcO5zX4XurUFRMUsVUikj+f0kGxUBTwEYWVoCIV9osm+Xk3nm4FSLTjZdoCPhQPgn4URL+ukgfvAXMNtQ0PLI2riYaXHxgtMUSHVp28UftCBMlB0ksjLz4lx1c9haZ1wRuj2wSC2gQGmj0J6dkdXoKc0+tzMpNNTbxxgh/PHKo2j3SBsqOycPxFG/KcgwaeTFXIkc9lWEHd43ym6InTrQBiXoQFKR5GXp8Fw/2yOCcMuez39YBYEMFMPFwF8OVN0XUK3vVu2D8GCAUo3I5c9Xvz2mtb3fjuttL4ogIUGnatbcoDXg54rMPir0SYAAAAASUVORK5CYII="
      let mapList = []
      if (data.mapList0.length > 0) {
        mapList.push(data.mapList0)
      }
      if (data.mapList1.length > 0) {
        mapList.push(data.mapList1)
      }
      if (data.mapList2.length > 0) {
        mapList.push(data.mapList2)
      }
      let legends = []
      let seriesArr = [{
        name: '',
        type: 'map',
        mapType: '浙江省',
        geoIndex: 0,
        roam: false, // 是否开启平游或缩放
        aspectScale: 0.9, // 长宽比
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
            areaColor: '#00c0ff',
            borderColor: '#0488b6',
            borderWidth: 0.5,
            label: {
              show: true,
              textStyle: {
                color: 'rgb(249, 249, 249)'
              }
            }
          },
          emphasis: {
            // 鼠标经过区域样式
            areaColor: '#00394c',
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
        }
      }]
      for (let i = 0; i < mapList.length; i++) {
        let icon = i === 0 ? iconGD0 : (i === 1 ? iconGD1 : iconGD2)
        legends.push({
          name: mapList[i][0].IndustryCategories,
          icon: icon
        })
        seriesArr.push({
          name: mapList[i][0].IndustryCategories,
          type: 'scatter',
          coordinateSystem: 'geo',
          data: mapList[i],
          symbol: icon,
          symbolSize: 25,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#4bbbb2',
              borderWidth: 2,
              borderColor: '#b4dccd'
            }
          }
        })
      }

      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          show: true,
          formatter(params) {
            if (params.seriesType === 'map') {
              return
            } else {
              return '公司名称: ' + params.data.companyName + '<br/>' +
                '行业类别: ' + params.data.IndustryCategories + '<br/>' +
                '办公地址: ' + params.data.address + '<br/>' +
                '总市值(元): ' + params.data.value[2];
            }
          }
        },
        legend: {
          orient: 'vertical',
          id: 1,
          y: 'bottom',
          right: '2%',
          itemWidth: 15,
          data: legends,
          textStyle: {
            color: this.chartColor.textColor
          }
        },
        geo: {
          show: true,
          map: this.$route.query.cityName,
          scaleLimit: { // 滚轮缩放的极限控制
            min: 0,
            max: 20
          },
          roam: false, // 是否开启平游或缩放
          aspectScale: 0.95, // scale 地图的长宽比。
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
              areaColor: '#00c0ff',
              borderColor: '#0488b6',
              borderWidth: 0.5,
              label: {
                show: true,
                textStyle: {
                  color: 'rgb(249, 249, 249)'
                }
              }
            },
            emphasis: {
              // 鼠标经过区域样式
              areaColor: '#00394c',
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
          }
        },
        series: seriesArr
      }
      this.echartsMap.clear()
      this.echartsMap.setOption(option)
    },
  }
}