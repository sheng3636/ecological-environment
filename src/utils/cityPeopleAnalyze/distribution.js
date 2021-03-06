import {
  getSubStructuralData1,
  getIncrementData,
  axiosAll
}
from '@/api/api'

export const distributionMixin = {
  data() {
    return {}
  },
  mounted() {

    let funcArr = []
    funcArr.push(this.getDistData1())
    funcArr.push(this.getDistData2())
    funcArr.push(this.getDistData3())
    funcArr.push(this.getDistData4())
    funcArr.push(this.getDistData5())
    axiosAll(funcArr).then(res => {
      let maxYearArr = []
      let obj1 = res[0].data.yAxis.data
      let yearArr1 = []
      for (let key in obj1) {
        yearArr1.push(key)
      }
      yearArr1 = yearArr1.sort()
      let startYear1 = yearArr1[0]
      let endYear1 = yearArr1[yearArr1.length - 1]
      maxYearArr.push(endYear1)

      if (startYear1 == endYear1) {
        startYear1 = ""
      } else {
        startYear1 = startYear1 + "年-"
      }

      this.chartArr.sideItem3_0.title = `${startYear1}${endYear1}年${this.cityName}各县（市、区）常住人口分布情况`
      this.chartArr.sideItem3_0.dataSource = res[0].data.yAxis.source
      this.chartArr.sideItem3_0.listObj.unit = '单位：人'
      this.chartArr.sideItem3_0.listObj.data = obj1
      this.createTimeMap('sideItem3_0', this.chartArr.sideItem3_0)

      let obj2 = res[1].data.yAxis.data
      let yearArr2 = []
      for (let key in obj2) {
        yearArr2.push(key)
      }
      yearArr2 = yearArr2.sort()
      let startYear2 = yearArr2[0]
      let endYear2 = yearArr2[yearArr2.length - 1]
      maxYearArr.push(endYear2)

      if (startYear2 == endYear2) {
        startYear2 = ""
      } else {
        startYear2 = startYear2 + "年-"
      }

      this.chartArr.sideItem3_1.title = `${startYear2}${endYear2}年${this.cityName}各县（市、区）户籍人口分布情况`
      this.chartArr.sideItem3_1.dataSource = res[1].data.yAxis.source
      this.chartArr.sideItem3_1.listObj.unit = '单位：人'
      this.chartArr.sideItem3_1.listObj.data = obj2
      this.createTimeMap('sideItem3_1', this.chartArr.sideItem3_1)


      let obj3 = res[2].data.yAxis.data
      let yearArr3 = []
      for (let key in obj3) {
        yearArr3.push(key)
      }
      yearArr3 = yearArr3.sort()
      let startYear3 = yearArr3[0]
      let endYear3 = yearArr3[yearArr3.length - 1]
      maxYearArr.push(endYear3)


      if (startYear3 == endYear3) {
        startYear3 = ""
      } else {
        startYear3 = startYear3 + "年-"
      }

      this.chartArr.sideItem3_2.title = `${startYear3}${endYear3}年${this.cityName}各县（市、区）常驻人口分布情况`
      this.chartArr.sideItem3_2.dataSource = res[2].data.yAxis.source
      this.chartArr.sideItem3_2.listObj.unit = '单位：人'
      this.chartArr.sideItem3_2.listObj.data = obj3
      this.createTimeMap('sideItem3_2', this.chartArr.sideItem3_2)


      let obj4 = res[3].data.yAxis.data
      let yearArr4 = []
      for (let key in obj4) {
        yearArr4.push(key)
      }
      yearArr4 = yearArr4.sort()
      let startYear4 = yearArr4[0]
      let endYear4 = yearArr4[yearArr4.length - 1]

      maxYearArr.push(endYear4)

      if (startYear4 == endYear4) {
        startYear4 = ""
      } else {
        startYear4 = startYear4 + "年-"
      }

      this.chartArr.sideItem3_4.title = `${startYear4}${endYear4}年${this.cityName}各县（市、区）户籍人口每年增量情况`
      this.chartArr.sideItem3_4.dataSource = res[3].data.yAxis.source
      this.chartArr.sideItem3_4.listObj.unit = '单位：人'
      this.chartArr.sideItem3_4.listObj.data = obj4
      this.createTimeMap('sideItem3_4', this.chartArr.sideItem3_4)


      let obj5 = res[4].data.yAxis.data
      let yearArr5 = []
      for (let key in obj5) {
        yearArr5.push(key)
      }
      yearArr5 = yearArr5.sort()
      let startYear5 = yearArr5[0]
      let endYear5 = yearArr5[yearArr5.length - 1]

      maxYearArr.push(endYear5)

      if (startYear5 == endYear5) {
        startYear5 = ""
      } else {
        startYear5 = startYear5 + "年-"
      }

      this.chartArr.sideItem3_3.title = `${startYear5}${endYear5}年${this.cityName}各县（市、区）常住人口每年增量情况`
      this.chartArr.sideItem3_3.dataSource = res[4].data.yAxis.source
      this.chartArr.sideItem3_3.listObj.unit = '单位：人'
      this.chartArr.sideItem3_3.listObj.data = obj5
      this.createTimeMap('sideItem3_3', this.chartArr.sideItem3_3)

      let maxYear = maxYearArr.sort((a, b) => b - a)[0]

      let peopleNum1 = 0;
      let peopleNum2 = 0;
      let peopleNum3 = 0;
      let peopleNum4 = 0;
      let peopleNum5 = 0;
      let peopleNum6 = 0;
      let peopleNum7 = ''

      let yData1 = obj1[maxYear];
      let yData2 = obj2[maxYear];
      let yData3 = obj3[maxYear];

      let sum1 = 0
      let sum2 = 0
      let sum3 = 0


      yData1.forEach((v, i) => {
        sum1 += v.value
        let str = v.name[v.name.length - 1];
        if (str === "市" || str === "区") {
          peopleNum1 += v.value
        }
      })
      yData2.forEach((v, i) => {
        sum2 += v.value
        let str = v.name[v.name.length - 1];
        if (str === "市" || str === "区") {
          peopleNum2 += v.value
        }
      })
      yData3.forEach((v, i) => {
        sum3 += v.value
        let str = v.name[v.name.length - 1];
        if (str === "市" || str === "区") {
          peopleNum3 += v.value
        }
      })
      peopleNum1 =
        Math.floor(peopleNum1 * 100) / 100;
      peopleNum2 =
        Math.floor(peopleNum2 * 100) / 100;
      peopleNum3 =
        Math.floor(peopleNum3 / 100) / 100;


      sum3 = sum3 / 10000;
      peopleNum4 =
        Math.floor((peopleNum1 / sum1) * 10000) / 100;
      peopleNum5 =
        Math.floor((peopleNum2 / sum2) * 10000) / 100;

      peopleNum6 =
        Math.floor((peopleNum3 / sum3) * 10000) / 100;

      let zone =
        peopleNum1 / (sum1 - peopleNum1);
      if (zone > 2) {
        peopleNum7 = "较高";
      } else {
        peopleNum7 = "较低";
      }

      let yData4 = obj4[maxYear]

      yData4.sort((a, b) => {
        return b.value - a.value;
      });
      let cityslist1 = yData4.slice(0, 3);

      let citys1 = cityslist1.map(function (obj) {
        return obj.name;
      }).join("、");


      let yData5 = obj5[maxYear]

      yData5.sort((a, b) => {
        return b.value - a.value;
      });
      let cityslist2 = yData5.slice(0, 3);
      let citys2 = cityslist2.map(function (obj) {
        return obj.name;
      }).join("、");

      this.chartArr.sideItem3_0.result = `${maxYear}年，${this.cityName}区的常住、户籍和常驻人口总量分别为<span class="light">${peopleNum1}</span>万人、<span class="light">${peopleNum2}</span>万人和<span class="light">${peopleNum3}</span>万人，分别占<span class="light">${this.cityName}</span>总人口的<span class="light">${peopleNum4}</span>%、<span class="light">${peopleNum5}</span>%和<span class="light">${peopleNum6}</span>%，中心城区的人口首位度相对<span class="light">${peopleNum7}</span>。${maxYear}年，${this.cityName}<span class="light">${citys2}</span>的常住人口增量排名前三；<span class="light">${citys1}</span>的户籍人口增量排名前三。`
    })

    // 0、 获取某年年末常住人口数据并绘制地图
    // 1、 获取某年户籍人口数据并绘制地图
    // 2、 获取某年常驻总人口数据并绘制地图
    // 3、 获取某年某地与全省户籍人口人口增量动态比较数据并绘制地图
    // 4、 获取某年某地与全省常住人口增量动态比较数据并绘制地图
  },
  methods: {
    getDistData1() {
      return getSubStructuralData1({
        area: this.cityName,
        zb: '年末常住人口'
      })
    },
    getDistData2() {
      return getSubStructuralData1({
        area: this.cityName,
        zb: '户籍人口'
      })
    },
    getDistData3() {
      return getSubStructuralData1({
        area: this.cityName,
        zb: '常驻总人口'
      })
    },
    getDistData4() {
      return getIncrementData({
        area: this.cityName,
        zb: '户籍人口'
      })
    },
    getDistData5() {
      return getIncrementData({
        area: this.cityName,
        zb: '年末常住人口'
      })
    },


  }
}