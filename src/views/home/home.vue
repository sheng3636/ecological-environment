<template>
  <div class="bodyMain">
    <nav class="navTopArea">
      <div class="navLeft">
        <img src="@/assets/images/logo.png">
        <span>台州市环境质量分析</span>
      </div>
      <ul class="navRight">
        <li class="navActive">
          <el-tooltip class="item" effect="dark" content="环境质量" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon1.png">
              <span>环境质量</span>
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="生态资源" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon2.png">
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="污染物排放" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon3.png">
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="生态资源状况" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon4.png">
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="导出文档" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon5.png">
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="回到总览" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon6.png">
            </div>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="回到首页" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon7.png">
            </div>
          </el-tooltip>
        </li>
      </ul>
    </nav>
    <div class="bottomMain">
      <div class="CuttingLine">
        <p class="txtWrap">
          <img src="@/assets/images/cuttingLine1.png">
          <span class="txt">大气环境质量分析</span>
          <img src="@/assets/images/cuttingLine2.png">
        </p>
      </div>
      <div class="main0">
        <div class="sideItem0">
          <h4 class="moudleTitle">
            <span class="left">2015年-2019年台州市空气质量达到优良天数比例变化</span>
            <p class="optionGroup">
              <img class="optionImg" src="@/assets/images/dataOverviewIcon.png">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem0','2015年-2019年台州市空气质量达到优良天数比例变化')"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem0','bar')">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">条形图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem0','line')" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图+折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div id="sideItem0"></div>
          <div class="resultWrap">
            <h5>数据来源：省生态环境厅</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p>2019年，台州市空气质量达到优良天数比例达到<span class="light">94%</span>，与2015年相比增长了<span class="light">24%</span></p>
            </div>
          </div>
        </div>
        <div class="sideItem1">
          <h4 class="moudleTitle">
            <span class="left">2018年各地市空气质量达到优良天数比例对比</span>
            <p class="optionGroup">
              <img class="optionImg" src="@/assets/images/dataOverviewIcon.png">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1','2018年各地市空气质量达到优良天数比例对比')"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1','bar')">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">条形图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1','line')" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图+折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div id="sideItem1"></div>
          <div class="resultWrap">
            <h5>数据来源：省生态环境厅</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p>2018年，台州空气质量达到优良天数的比例高于全市平均水平，在全省排第<span class="light">4</span>位，排名上升<span class="light">4</span>位</p>
            </div>
          </div>
        </div>
      </div>
      <div class="CuttingLine">
        <p class="txtWrap">
          <img src="@/assets/images/cuttingLine1.png">
          <span class="txt">工商注册企业分析</span>
          <img src="@/assets/images/cuttingLine2.png">
        </p>
      </div>
    </div>

    <ul class="navBottomArea">
      <li>
        <img src="@/assets/images/navBottomIcon1.png">
        <span>三次产业结构分析</span>
      </li>
      <li>
        <img src="@/assets/images/navBottomIcon2.png">
        <span>制作业结构分析</span>
      </li>
      <li class="active">
        <img class="activeImg" src="@/assets/images/navBottomActiveIcon.png">
        <img src="@/assets/images/navBottomIcon3-1.png">
        <span>服务业结构分析</span>
      </li>
    </ul>

    <el-dialog title="图片下载" :visible.sync="imagesVisi" width="45%" custom-class="imagesWrap" center
      :close-on-click-modal="false" :close-on-press-escape="false">
      <div class="imgModalBody">
        <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
        <div id="echartsWrap1"></div>
        <div class="colorArea">
          <p>
            <span class="txt">背景颜色：</span>
            <el-color-picker v-model="chartColor.backgroundColor" show-alpha :predefine="predefineColors"
              @active-change="backgroundColorChange"></el-color-picker>
          </p>
          <p>
            <span class="txt">文字颜色：</span>
            <el-color-picker v-model="chartColor.textColor" :predefine="predefineColors1"
              @active-change="textColorChange"></el-color-picker>
          </p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="exportPic">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { matchImgList } from '@/api/home'
import mUtilsFn from '@/utils/mUtils.js'

export default {
  name: 'Home',
  data() {
    return {
      chartColor: {
        backgroundColor: 'rgba(0,0,0,0)',
        textColor: '#fff'
      }, // 下载图片各颜色值
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(0, 0, 0, 0)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)'
      ], // ColorPicker 颜色选择器背景颜色预定义颜色数组
      predefineColors1: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        '#fff',
        '#000',
        '#666'
      ], // ColorPicker 颜色选择器文字颜色预定义颜色数组
      imagesVisi: false, // 是否显示保存图片弹窗
      whichEchart: null, // 要被下载图表对象id
      imagesName: '', // 图片名称
      sideItem0: {
        name: 'AQI优良率（%）',
        color: '#ff5975',
        xAxis: ['2015', '2016', '2017', '2018', '2019'],
        yAxis: [20, 50, 60, 75, 85]
      },
      chartType:'bar',
      sideItem1: {
        name: '2018年空气质量达到优良天数比例（%）',
        color: '#00ffb8',
        xAxis: [
          '温州市',
          '丽水市',
          '舟山市',
          '台州市',
          '衢州市',
          '宁波市',
          '金华市',
          '绍兴市',
          '嘉兴市',
          '杭州市',
          '湖州市'
        ],
        yAxis: [100, 120, 95, 89, 68, 45, 69, 95, 89, 62, 120]
      }
    }
  },
  mounted() {
    this.barEchartFn('sideItem0', 'line', this.sideItem0)
    this.barEchartFn('sideItem1', 'bar', this.sideItem1)
    matchImgList().then(res => {
      console.log(res)
    })
  },
  methods: {
    // 颜色选择器背景颜色值发生变化
    backgroundColorChange(color) {
      this.chartColor.backgroundColor = color
      this.barEchartFn('echartsWrap1', 'bar', this[this.whichEchart])
    },
    // 颜色选择器文字颜色值发生变化
    textColorChange(color) {
      this.chartColor.textColor = color
      this.barEchartFn('echartsWrap1', 'bar', this[this.whichEchart])
    },

    // 将图表转换成图片并下载
    exportPic() {
      let chart = this.$echarts.init(document.getElementById('echartsWrap1'))
      let content = chart.getDataURL()
      let aLink = document.createElement('a')
      let blob = mUtilsFn.base64ToBlob(content)
      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('click', true, true)

      let date = new Date()
      let year = date.getFullYear() // 获取完整的年份(4位)
      let month =
        date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 //获取当前月份(0-11,0代表1月)
      let day = date.getDate() // 获取当前日(1-31)
      let hours = date.getHours() // 获取当前小时数(0-23)
      let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取当前分钟数(0-59)
      let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取当前秒数(0-59)

      aLink.download = `${this.imagesName}${year}${month}${day}${hours}${minutes}${seconds}`
      aLink.href = URL.createObjectURL(blob)
      aLink.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
      )

      this.imagesModalCloseFn()
    },
    chartTypeClick(command) {
      this.barEchartFn(command.id, command.type, this[command.id])
    },
    // 对command参数进行重新封装成一个对象
    beforeHandleCommand(command1, command2) {
      return {
        id: command1,
        type: command2
      }
    },
    // 打开保存图片弹窗并渲染图表
    imagesModalOpenFn(val, name) {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesName = name
      this.whichEchart = val
      this.imagesVisi = true
      this.$nextTick(() => {
        this.barEchartFn('echartsWrap1', 'bar', this[val])
      })
    },
    // 关闭保存图片弹窗
    imagesModalCloseFn() {
      this.imagesVisi = false
    },
    // 柱状图
    barEchartFn(id, type, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: '2%',
          x: 'center',
          textStyle: {
            fontSize: '16px',
            color: this.chartColor.textColor
          },
          data: [data.name]
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0,
              padding: [5, 0, 5, 0],
              color: this.chartColor.textColor
            },
            axisLine: {
              // axisLine:坐标轴轴线相关设置
              lineStyle: {
                color: '#6291fb' // 底边线的颜色
              }
            },
            data: data.xAxis
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false // y轴刻度
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: this.chartColor.textColor // 左边线的颜色
              }
            },
            splitLine: {
              show: true, // y轴分隔线
              lineStyle: {
                type: 'dashed',
                color: '#0124b3'
              }
            }
          }
        ],
        series: [
          {
            name: data.name,
            type: type,
            barWidth: '56px',
            barGap: '50%',
            markLine: {
              silent: true,
              lineStyle: {
                normal: {
                  color: '#ff5975' // 这儿设置安全基线颜色
                }
              },
              data: [
                {
                  yAxis: 95 //这儿定义基准线的数值为多少
                }
              ],
              label: {
                normal: {
                  formatter: '全省平均值', // 这儿设置安全基线
                  position: 'middle'
                }
              }
            },
            itemStyle: {
              normal: {
                color: data.color
              }
            },
            data: data.yAxis
          }
        ]
      }
      chart.setOption(option)
    },
  }
}
</script>
<style lang="scss" scoped>
@import './home.scss';
</style>
