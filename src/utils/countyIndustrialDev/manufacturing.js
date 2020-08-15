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
        this.chartArr.sideItem2_8.list = tempData.map((tm, i) => {
          tm['no'] = i + 1
          return tm
        })
        var table1 = JSON.parse(JSON.stringify(table))
        var ta = table1.splice(0, 5)
        var str = []
        ta.forEach((t) => {
          str.push(t['val1'])
        })
        this.chartArr.sideItem2_8.result = `综合来看，建议${this.cityName}重点发展<span class="light">${str.join('，')}</span>等产业，分值根据排名高低赋分， 对排名第一至第五的产业分别赋分5分至1分。`
      }
    }
  },
  mounted() {
    // 0、 获取某年某地制造业规模前10产业并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.countyName,
        zb: '制造业规模前10产业'
      }).then(res => {
      this.chartArr.sideItem2_0.title = `2018年${this.countyName}制造业规模前10产业`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_0.chartArr[0].name = `工业总产值(${data.unit})`
        this.chartArr.sideItem2_0.xAxis = data.xData
        this.chartArr.sideItem2_0.chartArr[0].yAxis = data.yData
        this.resultData.push({
          key: 'val2',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.textTopHorizontalChart('sideItem2_0', this.chartArr.sideItem2_0)
        this.chartArr.sideItem2_0.result = `2018年${this.countyName}制造业规模前10产业分别为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_0.isValue = true
        this.chartArr.sideItem2_0.dataSource = `暂无来源`
        this.chartArr.sideItem2_0.result = `暂无结论`
      }
    })
    // 1、获取某年限内某地区快速发展前10位行业并绘制图表
    axiosAll([this.manufacturingAll1(), this.manufacturingAll2()]).then(res => {
      this.chartArr.sideItem2_1.title = `2015-2018年${this.countyName}快速发展前10位行业`
      if (res[0].code === '0' && res[0].code === '0') {
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
        this.chartArr.sideItem2_1.result = `2015-2018年${this.countyName}制造业增速前10产业为<span class="light">${this.chartArr.sideItem2_1.xAxis.join('、')}</span>。`
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
        area: this.countyName,
        zb: '制造业区位商前10产业'
      }).then(res => {
      this.chartArr.sideItem2_2.title = `2018年${this.countyName}制造业区位商前10产业`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_2.chartArr[0].name = `区位商(%)`
        this.chartArr.sideItem2_2.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_2.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val4',
          value: this.chartArr.sideItem2_1.chartArr[0].yAxis.slice(0, 5),
          ydata: this.chartArr.sideItem2_1.xAxis,
        })
        this.barLineChart('sideItem2_2', this.chartArr.sideItem2_2)
        this.chartArr.sideItem2_2.result = `2018年，${this.countyName}制造业区位商排名前三的产业为<span class="light">${data.xData.slice(0, 10).slice(0,3)}</span>。`
      } else {
        this.chartArr.sideItem2_2.isValue = true
        this.chartArr.sideItem2_2.dataSource = `暂无来源`
        this.chartArr.sideItem2_2.result = `暂无结论`
      }

    })
    // 3、 获取某年某地区上市企业列表
    apiGet(
      '/industry/getEnterpriseData', {
        type: '区县',
        year: 2018,
        area: this.countyName,
        zb: '分行业上市企业数量'
      }).then(res => {
      this.chartArr.sideItem2_3.title = `2018年${this.countyName}上市企业列表`
      if (res.code === '0') {
        let data = res.data
        let tableObj = data.eData
        this.resultData.push({
          key: 'val5',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        let tableList = []
        let l = data.xData.length >= 10 ? 10 : data.xData.length
        for (let i = 0; i < l; i++) {
          let companyList = tableObj[data.xData[i]]
          for (let index = 0; index < companyList.length; index++) {
            let item = companyList[index]
            tableList.push({
              securitiesCode: item.securitiesCode,
              shangshiBoard: item.shangshiBoard,
              securitiesName: item.securitiesName,
              companyName: item.companyName,
              productType: item.productType,
            })
          }
        }
        this.chartArr.sideItem2_3.list = tableList
        this.chartArr.sideItem2_3.result = `2018年${this.countyName}上市企业数量较多的行业为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_3.dataSource = `暂无来源`
        this.chartArr.sideItem2_3.result = `暂无结论`
      }
    })
    // 4、 获取某年某地制造业分行业工商注册企业数量并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.countyName,
        zb: '制造业分行业工商注册企业数量'
      }).then(res => {
      this.chartArr.sideItem2_4.title = `2018年${this.countyName}制造业分行业工商注册企业数量`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_4.chartArr[0].name = `制造业规模(家)`
        this.chartArr.sideItem2_4.xAxis = data.xData
        this.chartArr.sideItem2_4.chartArr[0].yAxis = data.yData
        this.textTopHorizontalChart('sideItem2_4', this.chartArr.sideItem2_4)
        let sum = 0
        for (var i = 0; i < data.yData.length; i++) {
          sum += data.yData[i]
        }
        this.chartArr.sideItem2_4.result = `2018年${this.countyName}共有制造业工商注册企业<span class="light">${sum}</span>家，主要分布在<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_4.isValue = true
        this.chartArr.sideItem2_4.dataSource = `暂无来源`
        this.chartArr.sideItem2_4.result = `暂无结论`
      }
    })
    // 5、 获取某年某地制造业分行业新增工商注册企业数量排名并绘制图表
    apiGet(
      '/industry/getIncreaseData', {
        startYear: 2014,
        endYear: 2018,
        area: this.countyName,
        zb: '制造业分行业工商注册企业数量近5年增速'
      }).then(res => {
      this.chartArr.sideItem2_5.title = `2018年${this.countyName}制造业分行业新增工商注册企业数量排名`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_5.chartArr[0].name = `近五年新增工商注册企业数量(家)`
        this.chartArr.sideItem2_5.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_5.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val6',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_5', this.chartArr.sideItem2_5)
        let sum = 0
        for (var i = 0; i < data.yData.length; i++) {
          sum += data.yData[i]
        }
        this.chartArr.sideItem2_5.result = `近5年制造业市场主体总量增长<span class="light">${sum}</span>家， 主要分布在<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_5.isValue = true
        this.chartArr.sideItem2_5.dataSource = `暂无来源`
        this.chartArr.sideItem2_5.result = `暂无结论`
      }
    })
    // 6、 获取某年某地分行业高新技术企业数量并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.countyName,
        zb: '分行业高新技术企业数'
      }).then(res => {
      this.chartArr.sideItem2_6.title = `2018年${this.countyName}分行业高新技术企业数量`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_6.chartArr[0].name = `分行业高新技术企业数量（家）`
        this.chartArr.sideItem2_6.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_6.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val7',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_6', this.chartArr.sideItem2_6)
        this.chartArr.sideItem2_6.result = `2018年${this.countyName}高新技术企业数量最多的5个产业为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_6.isValue = true
        this.chartArr.sideItem2_6.dataSource = `暂无来源`
        this.chartArr.sideItem2_6.result = `暂无结论`
      }
    })
    // 7、 获取某年某地分行业发明专利授权数量并绘制图表
    apiGet(
      '/industry/getData', {
        year: 2018,
        area: this.countyName,
        zb: '分行业发明专利授权数'
      }).then(res => {
      this.chartArr.sideItem2_7.title = `2018年${this.countyName}分行业发明专利授权数量`
      if (res.code === '0') {
        let data = res.data
        this.chartArr.sideItem2_7.chartArr[0].name = `分行业发明专利授权数（项）`
        this.chartArr.sideItem2_7.xAxis = data.xData.slice(0, 10)
        this.chartArr.sideItem2_7.chartArr[0].yAxis = data.yData.slice(0, 10)
        this.resultData.push({
          key: 'val8',
          value: data.xData.slice(0, 5),
          ydata: data.yData.slice(0, 5),
        })
        this.barLineChart('sideItem2_7', this.chartArr.sideItem2_7)
        this.chartArr.sideItem2_7.result = `2018年${this.countyName}专利授权数量最多的5个产业为<span class="light">${data.xData.slice(0,5).join('、')}</span>。`
      } else {
        this.chartArr.sideItem2_7.isValue = true
        this.chartArr.sideItem2_7.dataSource = `暂无来源`
        this.chartArr.sideItem2_7.result = `暂无结论`
      }
    })
  },
  methods: {
    manufacturingAll1() {
      return apiGet(
        '/industry/getData', {
          year: 2015,
          area: this.countyName,
          zb: '近5年制造业增速前10产业'
        })
    },
    manufacturingAll2() {
      return apiGet(
        '/industry/getData', {
          year: 2018,
          area: this.countyName,
          zb: '近5年制造业增速前10产业'
        })
    },
  }
}