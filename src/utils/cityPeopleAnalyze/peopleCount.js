import {
  getStructuralData1,
  getScaleData1,
  getScaleDataWithName1,
  getScaleDataMultiZb,
  getMultiZoneData,
  axiosAll
}
from '@/api/api'
import {
  getArrFirst,
  getArrLast,
  getMinIndex,
  getDiff,
  getMaxIndex
}
from '@/utils/mUtils.js'
export const peopleCountMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、获取某年段某地区常住和户籍人口数量数据并绘制图表
    getStructuralData1({
      area: this.cityName,
      zbs: '年末常住人口,户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_0.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem1_0.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem1_0.dataSource = data.yAxis[0].source
      // this.chartArr.sideItem1_0.dataSource = '中国知网、公安厅、公安年报、浙江统计年鉴、各地市/县（市、区）统计年鉴、各地市/县（市、区）统计公报'
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
      let ggg = (eee / this.chartArr.sideItem1_0.xAxis.length).toFixed(1)
      let hhh = getArrLast(this.chartArr.sideItem1_0.chartArr[1].yAxis)
      let iii = getArrFirst(this.chartArr.sideItem1_0.chartArr[1].yAxis)
      let jjj = hhh - iii
      let kkk = jjj >= 0 ? '增加' : '减少'
      let lll = (jjj / this.chartArr.sideItem1_0.xAxis.length).toFixed(1)
      this.chartArr.sideItem1_0.title = `${ccc}年-${aaa}年${this.cityName}常住和户籍人口数量`


      this.chartArr.sideItem1_0.result = `${aaa}年末，${this.cityName}常住人口总量为<span class="light">${bbb}</span>万人，与${ccc}年相比${fff}<span class="light">${Math.abs(eee.toFixed(1))}</span>万人，年均人口增量为<span class="light">${ggg}</span>万人；${this.cityName}户籍人口总量为<span class="light">${hhh}</span>万人，与${ccc}年相比${kkk}<span class="light">${jjj.toFixed(1)}</span>万人，年均人口增量为<span class="light">${lll}</span>万人。`
    })
    // 1、获取某年某地区常驻人口分布情数据并绘制图表
    getScaleDataWithName1({
      area: this.cityName,
      zbs: '常驻总人口'
    }).then(res => {
      let data = res.data[0]
      this.chartArr.sideItem1_1.listObj.unit = '单位：' + data.unit
      this.chartArr.sideItem1_1.listObj.data[data.year] = data.list
      let aaa = (data.total / 10000).toFixed(1)
      this.chartArr.sideItem1_1.title = `${data.year}年${this.cityName}各县（市、区）常驻人口分布情况`
      this.chartArr.sideItem1_1.dataSource = data.source
      this.chartArr.sideItem1_1.result = `${data.year}年12月，${this.cityName}常驻人口为<span class="light">${aaa}</span>万人。`
      this.createTimeMap('sideItem1_1', this.chartArr.sideItem1_1)
    })
    // 2、获取某年某地区与全省常住人口增长率比较数据并绘制图表
    getMultiZoneData({
      areas: this.cityName + ',浙江省',
      zb: '常住人口增长率'
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
      this.chartArr.sideItem1_2.title = `${ccc}年-${aaa}年${this.cityName}与全省常住人口增长率比较`

      let index16 = data.xAxis.indexOf(2016)
      let arr1 = data.yAxis[0].list.slice(index16)
      let arr2 = data.yAxis[1].list.slice(index16)

      let index = getMinIndex(arr1)

      let dd = 2016 + index

      let v1 = arr1[index];
      let v2 = arr2[index] || 0;
      let ee = (v2 - v1).toFixed(2);

      let ff = getDiff(arr1, arr2);

      this.chartArr.sideItem1_2.result = `<span class="light">${dd}</span> 年，${this.cityName}的常住人口增长率最小，与浙江省相差<span class="light"> ${ Math.abs(ee)}</span>个千分点；“十三五”以来，${this.cityName}常住人口增长率整体增幅<span class="light">${ff}</span>全省平均水平。`

    })
    // 3、获取某年某地区与全省户籍人口人口规模比较数据并绘制图表
    getMultiZoneData({
      areas: this.cityName + ',浙江省',
      zb: '户籍人口增长率'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_3.chartArr[0].name = `${data.yAxis[0].area}${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem1_3.chartArr[1].name = `${data.yAxis[1].area}${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem1_3.dataSource = data.yAxis[0].source
      this.chartArr.sideItem1_3.xAxis = data.xAxis
      this.chartArr.sideItem1_3.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem1_3.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem1_3', this.chartArr.sideItem1_3)
      let aaa = getArrLast(this.chartArr.sideItem1_3.xAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_3.xAxis)
      this.chartArr.sideItem1_3.title = `${ccc}年-${aaa}年${this.cityName}与全省户籍人口增长率比较`

      let index16 = data.xAxis.indexOf(2016)
      let arr1 = data.yAxis[0].list.slice(index16)
      let arr2 = data.yAxis[1].list.slice(index16)

      let index = getMinIndex(arr1)

      let dd = 2016 + index

      let v1 = arr1[index];
      let v2 = arr2[index] || 0;
      let ee = (v2 - v1).toFixed(2);

      let ff = getDiff(arr1, arr2);

      this.chartArr.sideItem1_3.result = `<span class="light">${dd}</span> 年，${this.cityName}的户籍人口增长率最小，与浙江省相差<span class="light"> ${ Math.abs(ee) }</span>个千分点；“十三五”以来，${this.cityName}户籍人口增长率整体增幅<span class="light">${ff}</span>全省平均水平。`
    })
    // 4、获取某年段某地区与全省常住人口人口比较数据并绘制图表
    getStructuralData1({
      area: this.cityName,
      zbs: '年末常住人口,户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_4.chartArr[0].name = `常住人口/户籍人口`
      this.chartArr.sideItem1_4.dataSource = data.yAxis[0].source
      // this.chartArr.sideItem1_4.dataSource = '中国知网、公安厅、公安年报、浙江统计年鉴、各地市/县（市、区）统计年鉴、各地市/县(市、区)统计公报'
      this.chartArr.sideItem1_4.xAxis = data.xAxis
      let objArr = []
      for (let i = 0; i < data.xAxis.length; i++) {
        objArr.push({
          name: data.xAxis[i],
          value: (data.yAxis[0].list[i] / data.yAxis[1].list[i]).toFixed(2)
        })
      }
      for (let i = 0; i < objArr.length; i++) {
        this.chartArr.sideItem1_4.chartArr[0].yAxis.push(objArr[i].value)
      }

      this.barLineChart('sideItem1_4', this.chartArr.sideItem1_4)

      let aaa = getArrLast(this.chartArr.sideItem1_4.xAxis)
      let ccc = getArrFirst(this.chartArr.sideItem1_4.xAxis)
      this.chartArr.sideItem1_4.title = `${ccc}年-${aaa}年${this.cityName}常住人口与户籍人口比值情况`

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
        str1 = `${years1.join("年、")}年，${this.cityName}常住人口总量大于户籍人口总量,说明人口呈流入状态`
      };
      if (years2.length > 0) {
        str2 = `${years2.join("年、")}年，${this.cityName}常住人口总量小于户籍人口总量,说明人口呈流出状态`
      };
      if (str1 == "" && str2 != "") {
        this.chartArr.sideItem1_4.result = `${str2}。`
      } else if (str2 == "" && str1 != "") {
        this.chartArr.sideItem1_4.result = `${str1}。`
      } else if (str1 != "" && str2 != "") {
        this.chartArr.sideItem1_4.result = `${str1}；${str2}。`
      };

    })
    // 5、获取某年段各地市常住人口与户籍人口比值比较数据并绘制图表
    getScaleDataMultiZb({
      area: '浙江省',
      zbs: '年末常住人口,户籍人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem1_5.chartArr[0].name = `常住人口/户籍人口`
      this.chartArr.sideItem1_5.dataSource = data.yAxis[0].source
      // this.chartArr.sideItem1_5.dataSource = '中国知网、公安厅、公安年报、浙江统计年鉴、各地市/县（市、区）统计年鉴、各地市/县（市、区）统计公报'

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
        this.chartArr.sideItem1_5.chartArr[0].yAxis.push(objArr[i].value)
        xData.push(objArr[i].name);
      }
      this.chartArr.sideItem1_5.xAxis = xData

      this.barLineChart('sideItem1_5', this.chartArr.sideItem1_5)
      this.chartArr.sideItem1_5.title = `${data.yAxis[0].year}年全省各地市常住人口与户籍人口比值比较`

      let aa = xData.indexOf(this.cityName) + 1;

      this.chartArr.sideItem1_5.result = `${data.yAxis[0].year}年，${this.cityName}常住与户籍人口比值在全省排名第<span class="light">${aa}</span>位。`
    })

    // 6、获取某年各地市各地市常住人口数量及占比数据并绘制图表
    // 7、获取某年户籍人口人口及占比数据并绘制图表
    // 8、获取某年各地市常驻人口数量及占比数据并绘制图表
    let datarrFn = []
    datarrFn.push(this.getCountData1())
    datarrFn.push(this.getCountData2())
    datarrFn.push(this.getCountData3())
    axiosAll(datarrFn).then(res => {
      let rankArr = []
      let data1 = res[0].data
      this.chartArr.sideItem1_6.chartArr[0].name = `年末常住人口(${data1.yAxis[0].unit})`
      this.chartArr.sideItem1_6.chartArr[1].name = `年末常住人口占比(%)`
      this.chartArr.sideItem1_6.dataSource = data1.yAxis[0].source
      this.chartArr.sideItem1_6.xAxis = data1.xAxis
      this.chartArr.sideItem1_6.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem1_6.title = `${data1.yAxis[0].year}年全省各地市常住人口总量及占比`

      let index1 = data1.xAxis.indexOf(this.cityName);
      let aaa1 = 0;

      rankArr.push({
        title: "年末常住人口",
        no: index1
      })

      for (let i = 0; i < data1.yAxis[0].list.length; i++) {
        let value = ((data1.yAxis[0].list[i] / data1.yAxis[0].total) * 100).toFixed(1)
        this.chartArr.sideItem1_6.chartArr[1].yAxis.push(value)
        if (i == index1) {
          aaa1 = value
        }
      }
      this.barLineChart('sideItem1_6', this.chartArr.sideItem1_6)
      this.chartArr.sideItem1_6.result = `${data1.yAxis[0].year}年，${this.cityName}常住人口占全省总人口比重为<span class="light">${aaa1}</span>%， 居全省第<span class="light">${index1+1}</span>位。`


      let data2 = res[1].data
      this.chartArr.sideItem1_7.chartArr[0].name = `户籍人口(${data2.yAxis[0].unit})`
      this.chartArr.sideItem1_7.chartArr[1].name = `户籍人口占比(%)`
      this.chartArr.sideItem1_7.dataSource = data2.yAxis[0].source
      this.chartArr.sideItem1_7.xAxis = data2.xAxis
      this.chartArr.sideItem1_7.chartArr[0].yAxis = data2.yAxis[0].list
      this.chartArr.sideItem1_7.title = `${data2.yAxis[0].year}年全省各地市户籍人口总量及占比`

      let index2 = data2.xAxis.indexOf(this.cityName);
      let aaa2 = 0;

      rankArr.push({
        title: "户籍人口",
        no: index2
      })

      for (let i = 0; i < data2.yAxis[0].list.length; i++) {
        let value = ((data2.yAxis[0].list[i] / data2.yAxis[0].total) * 100).toFixed(1)
        this.chartArr.sideItem1_7.chartArr[1].yAxis.push(value)
        if (i == index2) {
          aaa2 = value
        }
      }
      this.barLineChart('sideItem1_7', this.chartArr.sideItem1_7)

      this.chartArr.sideItem1_7.result = `${data2.yAxis[0].year}年,${this.cityName}户籍人口占比为<span class="light">${aaa2}</span>%， 居全省第<span class="light">${index2+1}</span>位。`


      let data3 = res[2].data

      this.chartArr.sideItem1_8.chartArr[0].name = `常驻总人口(${data3.yAxis[0].unit})`
      this.chartArr.sideItem1_8.chartArr[1].name = `常驻总人口占比(%)`
      this.chartArr.sideItem1_8.dataSource = data3.yAxis[0].source
      this.chartArr.sideItem1_8.xAxis = data3.xAxis
      this.chartArr.sideItem1_8.chartArr[0].yAxis = data3.yAxis[0].list
      this.chartArr.sideItem1_8.title = `${data3.yAxis[0].year}年全省各地市常驻人口总量及占比`

      let index3 = data3.xAxis.indexOf(this.cityName);
      let aaa3 = 0;

      rankArr.push({
        title: "常驻总人口",
        no: index3
      })

      for (let i = 0; i < data3.yAxis[0].list.length; i++) {
        let value = ((data3.yAxis[0].list[i] / data3.yAxis[0].total) * 100).toFixed(1)
        this.chartArr.sideItem1_8.chartArr[1].yAxis.push(value)
        if (i == index3) {
          aaa3 = value
        }
      }
      this.barLineChart('sideItem1_8', this.chartArr.sideItem1_8)

      var arr = [];
      rankArr.forEach(v => {
        arr.push(v.no);
      });
      var min = getMinIndex(arr);
      var max = getMaxIndex(arr);
      let peopleNum21 = rankArr[max].title;
      let peopleNum20 = rankArr[min].title;


      this.chartArr.sideItem1_8.result = `${data3.yAxis[0].year}年，${this.cityName}常驻人口占比为<span class="light">${aaa3}</span>%， 居全省第<span class="light">${index3+1}</span>位。其中，${peopleNum20}所占比重排名最高；${peopleNum21}比重排名最低。`

    })
  },
  methods: {
    getCountData1() {
      return getScaleData1({
        area: '浙江省',
        zb: '年末常住人口'
      })
    },
    getCountData2() {
      return getScaleData1({
        area: '浙江省',
        zb: '户籍人口'
      })
    },
    getCountData3() {
      return getScaleData1({
        area: '浙江省',
        zb: '常驻总人口'
      })
    }
  }
}