export const finishMixin = {
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    // 返回一个数组的最后一个元素
    returnArrLast(arr) {
      return arr[arr.length - 1]
    },
    // 返回一个数组的第一个元素
    returnArrFirst(arr) {
      return arr[0]
    },
    // 返回两个数之差
    returnDiff(arr1, arr2) {
      return arr2 - arr1
    },

    // 返回一个数组全部元素的平均值
    returnArrAvg(arr) {
      let sum = 0
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
      }
      return (sum / arr.length).toFixed(2)
    },
    
    returnRepeatNumArr(arr0,arr1,num,flag) {
      let dataArr = []
      let maxNameArr = []
      let minNameArr = []
      for (let i = 0; i < arr0.length; i++) {
        dataArr.push({
          name: arr0[i],
          value: arr1[i],
        })
      }

      let maxArr = dataArr.filter(function (item) {
        return item.value === num
      })
      let minArr = dataArr.filter(function (item) {
        return item.value === num
      })

      for (let i = 0; i < maxArr.length; i++) {
        maxNameArr.push(maxArr[i].name)
      }
      for (let i = 0; i < minArr.length; i++) {
        minNameArr.push(minArr[i].name)
      }

      if (flag === 'max') {
        return maxNameArr
      } else {
        return minNameArr
      }
    }
  }
}