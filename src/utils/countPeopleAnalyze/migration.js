import {
  getScaleDataMultiZb,
  getIncrementMultiZb
}
from '@/api/api'
export const migrationMixin = {
  data() {
    return {}
  },
  mounted() {
      // 0、获取某年某地区各地市常住和户籍人口增量（万人）数据并绘制图表
      getIncrementMultiZb({
        area: this.cityName,
        zbs: '户籍人口,年末常住人口'
      }).then(res => {
        let data = res.data
        this.chartArr.sideItem3_0.title = `2015年-2018年${this.cityName}各县（市、区）常住和户籍人口增量（万人）`
        this.chartArr.sideItem3_0.xAxis = data.xAxis
        this.chartArr.sideItem3_0.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem3_0.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem3_0.dataSource = data.yAxis[0].source
        this.chartArr.sideItem3_0.chartArr[0].yAxis = data.yAxis[0].list
        this.chartArr.sideItem3_0.chartArr[1].yAxis = data.yAxis[1].list
        this.barLineChart('sideItem3_0', this.chartArr.sideItem3_0)

        let index = data.xAxis.indexOf(this.countyName)
        let peopleNum2 = data.yAxis[1].list[index]
        let peopleNum1 = ''
        let peopleNum3 = ''
        if ((peopleNum2 - 0) > 0) {
          peopleNum1 = "增加";
        } else {
          peopleNum1 = "减少";
        };

        let peopleNum4 = data.yAxis[0].list[index];
        if ((peopleNum4 - 0) > 0) {
          peopleNum3 = "增加";
        } else {
          peopleNum3 = "减少";
        }

        let arr1 = []
        data.yAxis[1].list.forEach((v, i) => {
          arr1.push({
            name:data.xAxis[i],
            value:v
          })
        })
        let arr0 = []
        data.yAxis[0].list.forEach((v, i) => {
          arr0.push({
            name:data.xAxis[i],
            value:v
          })
        })

        arr1.sort((a, b) =>b.value - a.value)
        arr0.sort((a, b) =>b.value - a.value)

        let peopleNum5 = arr1.findIndex(item => item.name===this.countyName) + 1
        let peopleNum6 = arr0.findIndex(item => item.name===this.countyName) + 1

        this.chartArr.sideItem3_0.result = `“十三五”期间，${this.countyName}常住人口${peopleNum1}<span class="light">${peopleNum2}</span>万人，户籍人口${peopleNum3}<span class="light">${Math.abs(peopleNum4)}</span>万人，分别居${this.cityName}第${peopleNum5}名和第${peopleNum6}名。`
      })
      // 1、获取某年各县（市，区）人口机械变动数据并绘制图表
      getScaleDataMultiZb({
        area: this.cityName,
        zbs: '迁入人数,迁出人数,净迁入人数'
      }).then(res => {
        let data = res.data
        this.chartArr.sideItem3_1.title = `${data.yAxis[0].year}年${this.cityName}各县（市，区）人口机械变动`
        this.chartArr.sideItem3_1.xAxis = data.xAxis
        this.chartArr.sideItem3_1.chartArr[0].name = `${data.yAxis[0].name}(${data.yAxis[0].unit})`
        this.chartArr.sideItem3_1.chartArr[1].name = `${data.yAxis[1].name}(${data.yAxis[1].unit})`
        this.chartArr.sideItem3_1.chartArr[2].name = `${data.yAxis[2].name}(${data.yAxis[2].unit})`
        this.chartArr.sideItem3_1.dataSource = data.yAxis[0].source
        this.chartArr.sideItem3_1.chartArr[0].yAxis = data.yAxis[0].list
        this.chartArr.sideItem3_1.chartArr[1].yAxis = data.yAxis[1].list
        this.chartArr.sideItem3_1.chartArr[2].yAxis = data.yAxis[2].list
        this.barLineChart('sideItem3_1', this.chartArr.sideItem3_1)

        let index = data.xAxis.indexOf(this.countyName);
        let arr = JSON.parse(JSON.stringify(data.yAxis[2].list));
        let value = arr[index];
        let peopleNum7 = ''
        let peopleNum8 = ''
        let peopleNum9 = ''
        let arr1 = []
        if (value > 0) {
            peopleNum7 = "净迁入";
            peopleNum8 = "迁入";
            peopleNum9 = value;
            arr1 = arr.sort((a, b) => {
              return b - a;
            });
        } else {
            peopleNum7 = "净迁出";
            peopleNum8 = "迁出";
            peopleNum9 = Math.abs(value);
            arr1 = arr.sort((a, b) => {
              return a - b;
            });
        }
        var c = arr1.indexOf(value)
        let peopleNum10 = c + 1;

        this.chartArr.sideItem3_1.result=`${data.yAxis[0].year}年，${this.countyName}为${peopleNum7}状态，${peopleNum8}人数为<span class="light">${peopleNum9}</span>人，${peopleNum8}量位居全市第<span class="light">${peopleNum10}</span>位。`
      })
  },
  methods: {
    
  }
}