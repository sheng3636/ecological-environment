import {
  getPopulationData,
  getScaleDataMultiZb,
  getIncrementMultiZb,
  axiosAll
}
from '@/api/api'
export const migrationMixin = {
  data() {
    return {}
  },
  mounted() {
    // 0、获取某年各地市人口净流入情况（万人）数据并绘制图表
    getPopulationData({
      area: '浙江省',
      zb: '人口净流入'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem4_0.title = `${data.yAxis.year}年全省各地市人口净流入情况（万人）`
      this.chartArr.sideItem4_0.chartArr[0].name = `${data.yAxis.name}(${data.yAxis.unit})`
      this.chartArr.sideItem4_0.dataSource = data.yAxis.source
      this.chartArr.sideItem4_0.xAxis = data.xAxis
      this.chartArr.sideItem4_0.chartArr[0].yAxis = data.yAxis.list
      this.barLineChart('sideItem4_0', this.chartArr.sideItem4_0)

      let index = data.xAxis.indexOf(this.cityName);

      let peopleNum1 = ''
      let peopleNum2 = ''
      let v = data.yAxis.list[index];
      if (v > 0) {
        peopleNum1 = "净流入"
        peopleNum2 = "流入"
      } else {
        peopleNum1 = "净流出"
        peopleNum2 = "流出"
      }
      let peopleNum3 = Math.abs(Number(v).toFixed(2))

      this.chartArr.sideItem4_0.result = `${data.yAxis.year}年，${this.cityName}常住人口为${peopleNum1}状态，${peopleNum1}常住人口<span class="light">${peopleNum3}</span>万人。`

    })
    // 1、获取某年某地区各地市常住和户籍人口增量（万人）数据并绘制图表
    getIncrementMultiZb({
      area: '浙江省',
      zbs: '户籍人口,年末常住人口'
    }).then(res => {
      let data = res.data
      this.chartArr.sideItem4_1.title = `2015年-2018年各地市常住和户籍人口增量（万人）`
      this.chartArr.sideItem4_1.xAxis = data.xAxis
      this.chartArr.sideItem4_1.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
      this.chartArr.sideItem4_1.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
      this.chartArr.sideItem4_1.dataSource = data.yAxis[0].source
      this.chartArr.sideItem4_1.chartArr[0].yAxis = data.yAxis[0].list
      this.chartArr.sideItem4_1.chartArr[1].yAxis = data.yAxis[1].list
      this.barLineChart('sideItem4_1', this.chartArr.sideItem4_1)

      let index = data.xAxis.indexOf(this.cityName)

      let peopleNum4 = data.yAxis[1].list[index];
      let peopleNum5 = data.yAxis[0].list[index];

      let arr1 = []
      data.yAxis[1].list.forEach((v, i) => {
        arr1.push({
          name: data.xAxis[i],
          value: v
        })
      });
      let arr0 = []
      data.yAxis[0].list.forEach((v, i) => {
        arr0.push({
          name: data.xAxis[i],
          value: v
        })
      });

      arr1.sort((a, b) => b.value - a.value)
      arr0.sort((a, b) => b.value - a.value)

      let peopleNum6 = arr1.findIndex(item => item.name === this.cityName) + 1
      let peopleNum7 = arr0.findIndex(item => item.name === this.cityName) + 1

      this.chartArr.sideItem4_1.result = `${this.cityName}“十三五”期间的常住和户籍人口增量为<span class="light">${peopleNum4}</span>万人和<span class="light">${peopleNum5}</span>万人， 分别居全省第<span class="light">${peopleNum6}</span>名和第<span class="light">${peopleNum7}</span>名。`
    })

    let datarrFn = []
    datarrFn.push(this.getPeopleChange1())
    datarrFn.push(this.getPeopleChange2())
    axiosAll(datarrFn).then(res => {
      let data1 = res[0].data
      this.chartArr.sideItem4_2.title = `${data1.yAxis[0].year}年各地市人口机械变动`
      this.chartArr.sideItem4_2.xAxis = data1.xAxis
      this.chartArr.sideItem4_2.chartArr[0].name = `${data1.yAxis[0].name}(${data1.yAxis[0].unit})`
      this.chartArr.sideItem4_2.chartArr[1].name = `${data1.yAxis[1].name}(${data1.yAxis[1].unit})`
      this.chartArr.sideItem4_2.chartArr[2].name = `${data1.yAxis[2].name}(${data1.yAxis[2].unit})`
      this.chartArr.sideItem4_2.dataSource = data1.yAxis[0].source
      this.chartArr.sideItem4_2.chartArr[0].yAxis = data1.yAxis[0].list
      this.chartArr.sideItem4_2.chartArr[1].yAxis = data1.yAxis[1].list
      this.chartArr.sideItem4_2.chartArr[2].yAxis = data1.yAxis[2].list
      this.barLineChart('sideItem4_2', this.chartArr.sideItem4_2)


      let data2 = res[1].data
      this.chartArr.sideItem4_3.title = `${data2.yAxis[0].year}年${this.cityName}各县（市，区）人口机械变动`
      this.chartArr.sideItem4_3.xAxis = data2.xAxis
      this.chartArr.sideItem4_3.chartArr[0].name = `${data2.yAxis[0].name}(${data2.yAxis[0].unit})`
      this.chartArr.sideItem4_3.chartArr[1].name = `${data2.yAxis[1].name}(${data2.yAxis[1].unit})`
      this.chartArr.sideItem4_3.chartArr[2].name = `${data2.yAxis[2].name}(${data2.yAxis[2].unit})`
      this.chartArr.sideItem4_3.dataSource = data2.yAxis[0].source
      this.chartArr.sideItem4_3.chartArr[0].yAxis = data2.yAxis[0].list
      this.chartArr.sideItem4_3.chartArr[1].yAxis = data2.yAxis[1].list
      this.chartArr.sideItem4_3.chartArr[2].yAxis = data2.yAxis[2].list
      this.barLineChart('sideItem4_3', this.chartArr.sideItem4_3)


      let index = data1.xAxis.indexOf(this.cityName)
      let v = data1.yAxis[2].list[index]
      let arr = JSON.parse(JSON.stringify(data1.yAxis[2].list))
      arr.sort(function (a, b) {
        return b - a;
      });

      let peopleNum11 = arr.indexOf(v) + 1

      let peopleNum8 = "";
      let peopleNum9 = "";
      let peopleNum10 = Math.abs(v);
      if (v > 0) {
        peopleNum8 = "净迁入";
        peopleNum9 = "迁入";
      } else {
        peopleNum8 = "净迁出";
        peopleNum9 = "迁出";
      }


      var arr1 = [];
      var arr2 = [];
      data2.yAxis[2].list.forEach((v, i) => {
        if (v > 0) {
          arr1.push(data2.xAxis[i])
        } else {
          arr2.push(data2.xAxis[i])
        }
      });
      let peopleNum12 = arr1.join("，")
      let peopleNum13 = arr2.join("，")

      this.chartArr.sideItem4_2.result = `${data1.yAxis[0].year}年，${this.cityName}为${peopleNum8}状态， ${peopleNum9}人数为<span class="light">${peopleNum10}</span>人，位居全省第<span class="light">${peopleNum11}</span>位。在${this.cityName}内， ${peopleNum12}为净迁入状态，${peopleNum13}为净迁出状态。`
    })

  },
  methods: {
    getPeopleChange1() {
      // 2、获取某年各地市人口机械变动数据并绘制图表
      return getScaleDataMultiZb({
        area: '浙江省',
        zbs: '迁入人数,迁出人数,净迁入人数'
      })
    },
    getPeopleChange2() {
      // 3、获取某年各县（市，区）人口机械变动数据并绘制图表
      return getScaleDataMultiZb({
        area: this.cityName,
        zbs: '迁入人数,迁出人数,净迁入人数'
      })
    }

  }
}