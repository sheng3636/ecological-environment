import {
  getStructuralData1,
  getScaleData1,
  getScaleDataMultiZb,
  getMultiZoneData,
  axiosAll
}
from '@/api/api'
import {
  getArrFirst,
  getArrLast,
  getMinIndex,
  getDiff
}
from '@/utils/mUtils.js'

export const peopleCountMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、获取某年段某地区常住和户籍人口数量数据并绘制图表
    getStructuralData1({
      area: this.countyName,
      zbs: '年末常住人口,户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_0.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem1_0.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem1_0.dataSource = data.yAxis[0].source
      this.chartArr.sideItem1_0.xAxis = data.xAxis
      this.chartArr.sideItem1_0.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem1_0.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem1_0', this.chartArr.sideItem1_0)

      let aaa = getArrLast(this.chartArr.sideItem1_0.xAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_0.xAxis)
      let bbb = getArrLast(this.chartArr.sideItem1_0.chartArr[0].yAxis)
      let ddd = getArrFirst(this.chartArr.sideItem1_0.chartArr[0].yAxis)
      let eee = bbb - ddd
      let fff = eee >= 0 ? '增加' : '减少'
      let ggg = (eee / this.chartArr.sideItem1_0.xAxis.length).toFixed(2)
      let hhh = getArrLast(this.chartArr.sideItem1_0.chartArr[1].yAxis)
      let iii = getArrFirst(this.chartArr.sideItem1_0.chartArr[1].yAxis)
      let jjj = hhh - iii
      let kkk = jjj >= 0 ? '增加' : '减少'
      let lll = (jjj / this.chartArr.sideItem1_0.xAxis.length).toFixed(2)
      this.chartArr.sideItem1_0.title = `${ccc}年-${aaa}年${this.countyName}常住和户籍人口数量`

      let increStr
      if(ggg < 0){
        increStr = `平均每年人口减少<span class="light">${Math.abs(ggg)}</span>万人；`
      }else{
        increStr = `年均人口增量为<span class="light">${Math.abs(ggg)}</span>万人；`
      }

      this.chartArr.sideItem1_0.result = `${aaa}年末，${this.countyName}常住人口总量为<span class="light">${bbb}</span>万人，与${ccc}年相比${fff}<span class="light">${Math.abs(eee.toFixed(2))}</span>万人，${increStr}${this.countyName}户籍人口总量为<span class="light">${hhh}</span>万人，与${ccc}年相比${kkk}<span class="light">${jjj.toFixed(2)}</span>万人，年均人口增量为<span class="light">${lll}</span>万人。`
    })
    // 1、获取某年某地区与某市常住人口人口增长率比较数据并绘制图表
    getMultiZoneData({
      areas: [this.countyName, this.cityName].join(),
      zb: '常住人口增长率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_1.chartArr[0].name = `${data.yAxis[0].area}${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem1_1.chartArr[1].name = `${data.yAxis[1].area}${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem1_1.dataSource = data.yAxis[0].source
      this.chartArr.sideItem1_1.xAxis = data.xAxis
      this.chartArr.sideItem1_1.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem1_1.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem1_1', this.chartArr.sideItem1_1)
      let aaa = getArrLast(this.chartArr.sideItem1_1.xAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_1.xAxis)
      this.chartArr.sideItem1_1.title = `${ccc}年-${aaa}年${this.countyName}与${this.cityName}常住人口增长率比较`

      let index16 = data.xAxis.indexOf(2016)
      let arr1 = data.yAxis[0].list.slice(index16)
      let arr2 = data.yAxis[1].list.slice(index16)

      let index = getMinIndex(arr1)

      let dd = 2016 + index

      let v1 = arr1[index];
      let v2 = arr2[index] || 0;
      let ee = (v2 - v1).toFixed(2);
      let gg = ee < 0 ? "高" : "低"

      let ff = getDiff(arr1, arr2);
      this.chartArr.sideItem1_1.result = `<span class="light">${dd}</span> 年，${this.countyName}的常住人口增长率最小，比${this.cityName + gg}<span class="light"> ${Math.abs(ee)}</span>个千分点；“十三五”以来，${this.countyName}常住人口增长率整体增幅<span class="light">${ff}</span>全市平均水平。`
    })
    // 2、获取某年某地区与全市户籍人口增长率比较数据并绘制图表
    getMultiZoneData({
      areas: [this.countyName, this.cityName].join(),
      zb: '户籍人口增长率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_2.chartArr[0].name = `${data.yAxis[0].area}${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem1_2.chartArr[1].name = `${data.yAxis[1].area}${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem1_2.dataSource = data.yAxis[0].source
      this.chartArr.sideItem1_2.xAxis = data.xAxis
      this.chartArr.sideItem1_2.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem1_2.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem1_2', this.chartArr.sideItem1_2)
      let aaa = getArrLast(this.chartArr.sideItem1_2.xAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_2.xAxis)
      this.chartArr.sideItem1_2.title = `${ccc}年-${aaa}年${this.countyName}与${this.cityName}户籍人口增长率比较`


      let index16 = data.xAxis.indexOf(2016)
      let arr1 = data.yAxis[0].list.slice(index16)
      let arr2 = data.yAxis[1].list.slice(index16)

      let index = getMinIndex(arr1)

      let dd = 2016 + index

      let v1 = arr1[index];
      let v2 = arr2[index] || 0;
      let ee = (v2 - v1).toFixed(2);
      let gg = ee < 0 ? "高" : "低"

      let ff = getDiff(arr1, arr2);
      this.chartArr.sideItem1_2.result = `<span class="light">${dd}</span>年，${this.countyName}的户籍人口增长率最小，比${this.cityName + gg}<span class="light"> ${Math.abs(ee)}</span>个千分点；“十三五”以来，${this.countyName}户籍人口增长率整体增幅<span class="light">${ff}</span>全市平均水平。`
    })
    // 3、获取某年段某地区常住人口与户籍人口比值情况数据并绘制图表
    getStructuralData1({
      area: this.countyName,
      zbs: '年末常住人口,户籍人口'
    }).then(res => {
      
      let data = res.data
      this.chartArr.sideItem1_3.chartArr[0].name = `常住人口/户籍人口`
      this.chartArr.sideItem1_3.dataSource = data.yAxis[0].source
      this.chartArr.sideItem1_3.xAxis = data.xAxis
      let objArr = []
      for (let i = 0; i < data.xAxis.length; i++) {
        objArr.push({
          name: data.xAxis[i],
          value: (data.yAxis[0].list[i] / data.yAxis[1].list[i]).toFixed(2)
        })
      }
      for (let i = 0; i < objArr.length; i++) {
        this.chartArr.sideItem1_3.chartArr[0].yAxis.push(objArr[i].value)
      }

      this.barLineChart('sideItem1_3', this.chartArr.sideItem1_3)

      let aaa = getArrLast(this.chartArr.sideItem1_3.xAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_3.xAxis)
      this.chartArr.sideItem1_3.title = `${ccc}年-${aaa}年${this.countyName}常住人口与户籍人口比值情况`


      let years1 = [];
      let years2 = [];
      let str1 = "";
      let str2 = "";
      objArr.forEach((d, i) => {
        if ((d.value - 1) > 0) {
          years1.push(data.xAxis[i])
        } else {
          years2.push(data.xAxis[i])
        }
      });
      if (years1.length > 0) {
        str1 = `<span class="light">${years1.join("年、")}年</span>，${this.countyName}常住人口总量大于户籍人口总量，说明人口呈流入状态`
      };
      if (years2.length > 0) {
        str2 = `<span class="light">${years2.join("年、")}年</span>，${this.countyName}常住人口总量小于户籍人口总量，说明人口呈流出状态`
      };
      if (str1 == "" && str2 != "") {
        this.chartArr.sideItem1_3.result = `${str2}。`
      } else if (str2 == "" && str1 != "") {
        this.chartArr.sideItem1_3.result = `${str1}。`
      } else if (str1 != "" && str2 != "") {
        this.chartArr.sideItem1_3.result = `${str1}；${str2}。`
      };
    })
    // 4、获取某年段各地市常住人口与户籍人口比值比较数据并绘制图表
    getScaleDataMultiZb({
      area: this.cityName,
      zbs: '年末常住人口,户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_4.chartArr[0].name = `常住人口/户籍人口`
      this.chartArr.sideItem1_4.dataSource = data.yAxis[0].source
      let objArr = []
      for (let i = 0; i < data.xAxis.length; i++) {
        objArr.push({
          name: data.xAxis[i],
          value: (data.yAxis[0].list[i] / data.yAxis[1].list[i]).toFixed(2)
        })
      }
      objArr.sort(function (a, b) {
        return b.value - a.value
      })
      let xData = []

      for (let i = 0; i < objArr.length; i++) {
        this.chartArr.sideItem1_4.chartArr[0].yAxis.push(objArr[i].value)
        xData.push(objArr[i].name);
      }

      this.chartArr.sideItem1_4.xAxis = xData

      this.barLineChart('sideItem1_4', this.chartArr.sideItem1_4)
      this.chartArr.sideItem1_4.title = `${data.yAxis[0].year}年${this.cityName}各县（市、区）常住人口与户籍人口比值比较`

      let aa = xData.indexOf(this.countyName) + 1;

      this.chartArr.sideItem1_4.result = `${data.yAxis[0].year}年，${this.countyName}常住与户籍人口比值在全市排名第<span class="light">${aa}</span>位。`
    })

    // 5、获取某年各县（市、区）常住人口数量及占比数据并绘制图表
    // 6、获取某年户籍人口人口及占比数据并绘制图表
    // 7、获取某年各县（市、区）常驻人口总量及占比数据并绘制图表
    let datarrFn = []
    datarrFn.push(this.getCountyData1())
    datarrFn.push(this.getCountyData2())
    datarrFn.push(this.getCountyData3())
    axiosAll(datarrFn).then(res => {
      let rankArr = []
      let data1 = res[0].data
      this.chartArr.sideItem1_5.chartArr[0].name = `年末常住人口(${data1.yAxis[0].unit})`
      this.chartArr.sideItem1_5.chartArr[1].name = `年末常住人口占比(%)`
      this.chartArr.sideItem1_5.dataSource = data1.yAxis[0].source
      this.chartArr.sideItem1_5.xAxis = data1.xAxis
      this.chartArr.sideItem1_5.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem1_5.title = `${data1.yAxis[0].year}年${this.cityName}各县（市、区）常住人口总量及占比`

      let index1 = data1.xAxis.indexOf(this.countyName);
      let aaa1 = 0;

      rankArr.push({
        title: "年末常住人口",
        no: index1
      })

      for (let i = 0; i < data1.yAxis[0].list.length; i++) {
        let value = ((data1.yAxis[0].list[i] / data1.yAxis[0].total) * 100).toFixed(1)

        this.chartArr.sideItem1_5.chartArr[1].yAxis.push(value)
        if (i == index1) {
          aaa1 = value
        }
      }
      this.barLineChart('sideItem1_5', this.chartArr.sideItem1_5)

      this.chartArr.sideItem1_5.result = `${data1.yAxis[0].year}年，${this.countyName}常住人口占全市总人口比重为<span class="light">${aaa1}</span>%， 居全市第<span class="light">${index1+1}</span>位。`


      let data2 = res[1].data

      this.chartArr.sideItem1_6.chartArr[0].name = `户籍人口(${data2.yAxis[0].unit})`
      this.chartArr.sideItem1_6.chartArr[1].name = `户籍人口占比(%)`
      this.chartArr.sideItem1_6.dataSource = data2.yAxis[0].source
      this.chartArr.sideItem1_6.xAxis = data2.xAxis
      this.chartArr.sideItem1_6.chartArr[0].yAxis = data2.yAxis[0].list
      this.chartArr.sideItem1_6.title = `${data2.yAxis[0].year}年${this.cityName}各县（市、区）户籍人口总量及占比`


      let index2 = data2.xAxis.indexOf(this.countyName);
      let aaa2 = 0;

      rankArr.push({
        title: "户籍人口",
        no: index2
      })

      for (let i = 0; i < data2.yAxis[0].list.length; i++) {
        let value = ((data2.yAxis[0].list[i] / data2.yAxis[0].total) * 100).toFixed(1)
        this.chartArr.sideItem1_6.chartArr[1].yAxis.push(value)
        if (i == index2) {
          aaa2 = value
        }
      }
      this.barLineChart('sideItem1_6', this.chartArr.sideItem1_6)

      this.chartArr.sideItem1_6.result = `${data2.yAxis[0].year}年，${this.countyName}户籍人口占全市总人口比重为<span class="light">${aaa2}</span>%，居全市第<span class="light">${index2+1}</span>位。`


      let data3 = res[2].data

      this.chartArr.sideItem1_7.chartArr[0].name = `常驻总人口(${data3.yAxis[0].unit})`
      this.chartArr.sideItem1_7.chartArr[1].name = `常驻总人口占比(%)`
      this.chartArr.sideItem1_7.dataSource = data3.yAxis[0].source
      this.chartArr.sideItem1_7.xAxis = data3.xAxis
      this.chartArr.sideItem1_7.chartArr[0].yAxis = data3.yAxis[0].list
      this.chartArr.sideItem1_7.title = `${data3.yAxis[0].year}年${this.cityName}各县（市、区）常驻人口总量及占比`

      let index3 = data3.xAxis.indexOf(this.countyName);
      let aaa3 = 0;

      rankArr.push({
        title: "常驻总人口",
        no: index3
      })

      for (let i = 0; i < data3.yAxis[0].list.length; i++) {
        let value = ((data3.yAxis[0].list[i] / data3.yAxis[0].total) * 100).toFixed(1)
        this.chartArr.sideItem1_7.chartArr[1].yAxis.push(value)

        if (i == index3) {
          aaa3 = value
        }
      }
      this.barLineChart('sideItem1_7', this.chartArr.sideItem1_7)


      rankArr.sort((a, b) => a.no - b.no)

      let peopleNum21 = rankArr[rankArr.length - 1].title;
      let peopleNum20 = rankArr[0].title;

      this.chartArr.sideItem1_7.result = `${data3.yAxis[0].year}年，${this.countyName}常驻人口占全市总人口的比重为<span class="light">${aaa3}</span>%，居全市第<span class="light">${index3+1}</span>位。其中，${peopleNum20}所占比重排名最高；${peopleNum21}比重排名最低。`
    })

  },
  methods: {
    getCountyData1() {
      return getScaleData1({
        area: this.cityName,
        zb: '年末常住人口'
      })
    },
    getCountyData2() {
      return getScaleData1({
        area: this.cityName,
        zb: '户籍人口'
      })
    },
    getCountyData3() {
      return getScaleData1({
        area: this.cityName,
        zb: '常驻总人口'
      })
    }
  }
}