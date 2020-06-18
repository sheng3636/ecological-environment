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
    }
  }
}