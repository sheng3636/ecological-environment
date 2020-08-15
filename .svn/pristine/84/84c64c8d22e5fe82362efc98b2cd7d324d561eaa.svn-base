<template>
  <div class="bodyMain">
    <nav class="navTopArea">
      <div class="navLeft">
        <img src="@/assets/images/nav/logo.png">
        <span v-show="routerActive === 1">{{this.$route.query.cityName}}三次产业结构分析</span>
        <span v-show="routerActive === 2">{{this.$route.query.cityName}}制造业结构分析</span>
        <span v-show="routerActive === 3">{{this.$route.query.cityName}}服务业结构分析</span>
      </div>
      <ul class="navRight">
        <li :class="{navActive:routerActive === 1}" @click="routerFn(1)">
          <el-tooltip class="item" effect="dark" content=" 三次产业结构" placement="top">
            <div>
              <img src="@/assets/images/cityIndustrialDev/navTopIcon1.png">
              <span v-if="routerActive === 1"> 三次产业结构</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 2}" @click="routerFn(2)">
          <el-tooltip class="item" effect="dark" content=" 制造业结构" placement="top">
            <div>
              <img src="@/assets/images/cityIndustrialDev/navTopIcon2.png">
              <span v-if="routerActive === 2"> 制造业结构</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 3}" @click="routerFn(3)">
          <el-tooltip class="item" effect="dark" content="服务业结构" placement="top">
            <div>
              <img src="@/assets/images/cityIndustrialDev/navTopIcon3.png">
              <span v-if="routerActive === 3">服务业结构</span>
            </div>
          </el-tooltip>
        </li>
        <p class="navGap"></p>
        <li class="optionNav" @click="downloadDoc">
          <el-tooltip class="item" effect="dark" content="导出文档" placement="top">
            <div>
              <img src="@/assets/images/nav/navExportImg.png">
              <span>导出文档</span>
            </div>
          </el-tooltip>
        </li>
        <li class="optionNav" @click="feedbackClick">
          <el-tooltip class="item" effect="dark" content="意见反馈" placement="top">
            <div>
              <img src="@/assets/images/nav/navFeedBackImg.png">
              <span>意见反馈</span>
            </div>
          </el-tooltip>
        </li>
        <li class="optionNav" @click="junpLink('http://118.190.204.249:8989/aiPage?tag=home&cityName=' + cityName)">
          <el-tooltip class="item" effect="dark" content="回到总览" placement="top">
            <div>
              <img src="@/assets/images/nav/navOverviwImg.png">
              <span>回到总览</span>
            </div>
          </el-tooltip>
        </li>
        <li class="optionNav" @click="junpLink('http://118.190.204.249:8989/aiPage')">
          <el-tooltip class="item" effect="dark" content="返回首页" placement="top">
            <div>
              <img src="@/assets/images/nav/navBackHomeImg.png">
              <span>返回首页</span>
            </div>
          </el-tooltip>
        </li>
      </ul>
    </nav>
    <div class="bottomMain">
      <div class="mainWrap" v-show="routerActive === 1">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">三次产业结构分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width1080 sideItem1_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem1_0',chartArr.sideItem1_0.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0',['bar','bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0',['line','line','line'],barLineChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1080" id="sideItem1_0">
            <span v-if="chartArr.sideItem1_0.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width740 sideItem1_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_1.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem1_1',chartArr.sideItem1_1.title,pieChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width740" id="sideItem1_1">
            <span v-if="chartArr.sideItem1_1.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_1.result"></p>
            </div>
          </div>
        </div>
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">三次产业结构对比</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="twoWrap">
          <div class="sideItem width600 sideItem1_2">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_2.title}}</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem1_2',chartArr.sideItem1_2.title,barLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_2',['bar','bar'],barLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_2',['line','line'],barLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem1_2">
              <span v-if="chartArr.sideItem1_2.isValue" class="noData">暂无数据</span>
            </div>
            <div class="resultWrap">
              <h5>数据来源：{{chartArr.sideItem1_2.dataSource}}</h5>
              <div class="content">
                <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
                <p v-html="chartArr.sideItem1_2.result"></p>
              </div>
            </div>
          </div>
          <div class="sideItem width600 sideItem1_3">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_3.title}}</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem1_3',chartArr.sideItem1_3.title,barLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_3',['bar','bar'],barLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_3',['line','line'],barLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem1_3">
              <span v-if="chartArr.sideItem1_3.isValue" class="noData">暂无数据</span>
            </div>
            <div class="resultWrap">
              <h5>数据来源：{{chartArr.sideItem1_3.dataSource}}</h5>
              <div class="content">
                <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
                <p v-html="chartArr.sideItem1_3.result"></p>
              </div>
            </div>
          </div>
          <div class="sideItem width600 sideItem1_4">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_4.title}}</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem1_4',chartArr.sideItem1_4.title,barLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_4',['bar','bar'],barLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_4',['line','line'],barLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem1_4">
              <span v-if="chartArr.sideItem1_4.isValue" class="noData">暂无数据</span>
            </div>
            <div class="resultWrap">
              <h5>数据来源：{{chartArr.sideItem1_4.dataSource}}</h5>
              <div class="content">
                <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
                <p v-html="chartArr.sideItem1_4.result"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">三次产业规模与增速对比</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="twoWrap">
          <div class="sideItem width600 sideItem1_5">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_5.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesLoadOpenFn('sideItem1_5',chartArr.sideItem1_5.title,bothWayBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_5',['bar','bar'],bothWayBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_5',['line','line'],bothWayBarLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem1_5">
              <span v-if="chartArr.sideItem1_5.isValue" class="noData">暂无数据</span>
            </div>
            <div class="resultWrap">
              <h5>数据来源：{{chartArr.sideItem1_5.dataSource}}</h5>
              <div class="content">
                <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
                <p v-html="chartArr.sideItem1_5.result"></p>
              </div>
            </div>
          </div>
          <div class="sideItem width600 sideItem1_6">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_6.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesLoadOpenFn('sideItem1_6',chartArr.sideItem1_6.title,bothWayBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_6',['bar','bar'],bothWayBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_6',['line','line'],bothWayBarLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem1_6">
              <span v-if="chartArr.sideItem1_6.isValue" class="noData">暂无数据</span>
            </div>
            <div class="resultWrap">
              <h5>数据来源：{{chartArr.sideItem1_6.dataSource}}</h5>
              <div class="content">
                <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
                <p v-html="chartArr.sideItem1_6.result"></p>
              </div>
            </div>
          </div>
          <div class="sideItem width600 sideItem1_7">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_7.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesLoadOpenFn('sideItem1_7',chartArr.sideItem1_7.title,bothWayBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_7',['bar','bar'],bothWayBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_7',['line','line'],bothWayBarLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem1_7">
              <span v-if="chartArr.sideItem1_7.isValue" class="noData">暂无数据</span>
            </div>
            <div class="resultWrap">
              <h5>数据来源：{{chartArr.sideItem1_7.dataSource}}</h5>
              <div class="content">
                <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
                <p v-html="chartArr.sideItem1_7.result"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" v-show="routerActive === 2">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">制造业规模和增速分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width800 sideItem2_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesLoadOpenFn('sideItem2_0',chartArr.sideItem2_0.title,textTopHorizontalChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0',['bar'],textTopHorizontalChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0',['line'],textTopHorizontalChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width800" id="sideItem2_0">
            <span v-if="chartArr.sideItem2_0.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1020 sideItem2_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_1',chartArr.sideItem2_1.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_1',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_1',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1020" id="sideItem2_1">
            <span v-if="chartArr.sideItem2_1.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_1.result"></p>
            </div>
          </div>
        </div>

        <div class="twoWrap">
          <div class="CuttingLine">
            <p class="txtWrap">
              <img src="@/assets/images/cuttingLine1.png">
              <span class="txt">制造业区位商分析</span>
              <img src="@/assets/images/cuttingLine2.png">
            </p>
          </div>
          <div class="rightResultWrap" style="height: 525px;">
            <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
            <p>区位商是指一个地区特定行业产值在地区工业总产值中所占比重与区域该行业产值在区域工业总产值中所占比重之间的比值，
              地市级区位商体现该地区某行业在全省的专业化程度，县（市、区）区位商体现该县（市、区）某行业在设区市的专业化程度。 如果区位商大于1，可以认为该产业是地区的专业化部门；区位商越大，专业化水平越高；
              如果区位商小于或等于1，则认为该产业是自给性部门。</p>
          </div>
          <div class="sideItem width1340 sideItem2_2">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem2_2.title}}</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_2',chartArr.sideItem2_2.title,barLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem2_2',['bar'],barLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem2_2',['line'],barLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1340" id="sideItem2_2">
              <span v-if="chartArr.sideItem2_2.isValue" class="noData">暂无数据</span>
            </div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem2_2.dataSource}}</h5>
          </div>
        </div>
        <div class="twoWrap">
          <div class="sideItem width600 sideItem2_3">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem2_3.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_3',chartArr.sideItem2_3.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem2_3">
              <span v-if="chartArr.sideItem2_2.isValue" class="noData">暂无数据</span>
            </div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem2_3.dataSource}}</h5>
          </div>
          <div class="sideItem width600 sideItem2_4">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem2_4.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_4',chartArr.sideItem2_4.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem2_4">
              <span v-if="chartArr.sideItem2_4.isValue" class="noData">暂无数据</span>
            </div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem2_4.dataSource}}</h5>
          </div>
          <div class="sideItem width600 sideItem2_5">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem2_5.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_5',chartArr.sideItem2_5.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width600" id="sideItem2_5">
              <span v-if="chartArr.sideItem2_5.isValue" class="noData">暂无数据</span>
            </div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem2_5.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_2.result"></p>
            </div>
          </div>
        </div>
        <div class="twoWrap">
          <div class="CuttingLine">
            <p class="txtWrap">
              <img src="@/assets/images/cuttingLine1.png">
              <span class="txt">上市企业分析</span>
              <img src="@/assets/images/cuttingLine2.png">
            </p>
          </div>
          <div class="sideItem width910 sideItem2_6">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem2_6.title}}</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_6',chartArr.sideItem2_6.title,barLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem2_6',['bar','bar','bar'],barLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem2_6',['line','line','line'],barLineChart)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width910" id="sideItem2_6">
              <span v-if="chartArr.sideItem2_6.isValue" class="noData">暂无数据</span>
            </div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem2_6.dataSource}}</h5>
          </div>
          <div class="sideItem width910 sideItem2_7">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem2_7.title}}</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_7',chartArr.sideItem2_7.title,drawEchartMap)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem2_7',['bar','bar','bar'],drawEchartMap)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem2_7',['line','line','line'],drawEchartMap)"
                      divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width910" id="sideItem2_7">
              <span v-if="chartArr.sideItem2_7.isValue" class="noData">暂无数据</span>
            </div>
            <div id="aaa"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem2_7.dataSource}}</h5>
          </div>
        </div>

        <div class="sideItem width1845 sideItem2_8">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_8.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img class="optionImg" src="@/assets/images/exportIcon.png"
                @click="exportExce(chartArr.sideItem2_8.title,['行业名称', '上市企业数量', '上市企业名单'],['name', 'number', 'nameList'],chartArr.sideItem2_8.list)">
            </p>
          </h4>
          <div class="tableWrap">
            <el-table :data="chartArr.sideItem2_8.list" fit>
              <el-table-column type="index" width="55" label="序号" align="center" />
              <el-table-column width="400" prop="name" label="行业名称" align="center" />
              <el-table-column width="200" prop="number" label="上市企业数量	" align="center" />
              <el-table-column prop="nameList" label="上市企业名单" align="center" />
            </el-table>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_8.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_6.result"></p>
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
        <div class="sideItem width800 sideItem2_9">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_9.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesLoadOpenFn('sideItem2_9',chartArr.sideItem2_9.title,textTopHorizontalChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_9',['bar'],textTopHorizontalChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_9',['line'],textTopHorizontalChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width800" id="sideItem2_9">
            <span v-if="chartArr.sideItem2_9.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_9.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_9.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1020 sideItem2_10">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_10.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_10',chartArr.sideItem2_10.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_10',['bar','bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_10',['line','line','line'],barLineChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1020" id="sideItem2_10">
            <span v-if="chartArr.sideItem2_10.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_10.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_10.result"></p>
            </div>
          </div>
        </div>
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">产业创新能力分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width910 sideItem2_11">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_11.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_11',chartArr.sideItem2_11.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_11',['bar','bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_11',['line','line','line'],barLineChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_11">
            <span v-if="chartArr.sideItem2_11.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_11.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_11.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem2_12">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_12.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem2_12',chartArr.sideItem2_12.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_12',['bar','bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_12',['line','line','line'],barLineChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_12">
            <span v-if="chartArr.sideItem2_12.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_12.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_12.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1845 sideItem2_13">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_13.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img class="optionImg" src="@/assets/images/exportIcon.png">
            </p>
          </h4>
          <div class="tableWrap">
            <el-table :data="chartArr.sideItem2_13.list" fit>
              <el-table-column prop="no" label="序号" align="center" />
              <el-table-column prop="val1" label="制造业类别" align="center" />
              <el-table-column prop="val2" label="规模排名分值" align="center">
                <template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val2 > 0}">
                    {{ scope.row.val2 ? scope.row.val2 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val3" label="占比提升分值" align="center">
                <template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val3 > 0}">
                    {{ scope.row.val3 ? scope.row.val3 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val4" label="区位商分值" align="center"><template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val4 > 0}">
                    {{ scope.row.val4 ? scope.row.val4 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val5" label="上市企业数量分值" align="center"><template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val5 > 0}">
                    {{ scope.row.val5 ? scope.row.val5 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val6" label="行业活跃度分值" align="center"><template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val6 > 0}">
                    {{ scope.row.val6 ? scope.row.val6 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val7" label="高新企业数量分值" align="center"><template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val7 > 0}">
                    {{ scope.row.val7 ? scope.row.val7 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val8" label="专利授权数量分值" align="center"><template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val8 > 0}">
                    {{ scope.row.val8 ? scope.row.val8 : 0}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="val9" label="综合得分" align="center">
                <template slot-scope="scope">
                  <span :class="{lightColor:scope.row.val9 > 0}">
                    {{ scope.row.val9 ? scope.row.val9 : 0}}
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_13.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_13.result"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" v-show="routerActive === 3">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">服务业规模与增速分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width910 sideItem3_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem3_0',chartArr.sideItem3_0.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem3_0',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem3_0',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem3_0">
            <span v-if="chartArr.sideItem3_0.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem3_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem3_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesLoadOpenFn('sideItem3_1',chartArr.sideItem3_1.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem3_1',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem3_1',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem3_1">
            <span v-if="chartArr.sideItem3_1.isValue" class="noData">暂无数据</span>
          </div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem3_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_1.result"></p>
            </div>
          </div>
        </div>
        <div class="twoWrap">
          <div class="CuttingLine">
            <p class="txtWrap">
              <img src="@/assets/images/cuttingLine1.png">
              <span class="txt">工商注册企业分析</span>
              <img src="@/assets/images/cuttingLine2.png">
            </p>
          </div>
          <div class="sideItem width740 sideItem3_2">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_2.title}}</span>
            </h4>
            <div class="sideItemChart width740" id="sideItem3_2" style="height: calc(100% - 60px - 45px);"><span
                v-if="chartArr.sideItem3_2.isValue" class="noData">暂无数据</span></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_2.dataSource}}</h5>
          </div>
          <div>
            <div class="sideItem width1080 sideItem3_3">
              <h4 class="moudleTitle">
                <span class="left">{{chartArr.sideItem3_3.title}}</span>
                <p class="optionGroup">
                  <img class="optionImg"
                    @click="imagesLoadOpenFn('sideItem3_3',chartArr.sideItem3_3.title,barLineChart)"
                    src="@/assets/images/downImgIcon.png">
                  <el-dropdown @command="chartTypeClick">
                    <span class="el-dropdown-link">
                      <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item :command="beforeHandleCommand('sideItem3_3',['bar','bar'],barLineChart)">
                        <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                        <span class="txt">柱状图样式</span>
                      </el-dropdown-item>
                      <el-dropdown-item :command="beforeHandleCommand('sideItem3_3',['line','line'],barLineChart)"
                        divided>
                        <img class="chartIcon" src="@/assets/images/lineIcon.png">
                        <span class="txt">折线图样式</span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </p>
              </h4>
              <div class="sideItemChart width1080" id="sideItem3_3" style="height:300px;min-height:300px;">
                <span v-if="chartArr.sideItem3_3.isValue" class="noData">暂无数据</span>
              </div>
              <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_3.dataSource}}</h5>
            </div>
            <div class="sideItem width1080 sideItem3_4">
              <h4 class="moudleTitle">
                <span class="left">{{chartArr.sideItem3_4.title}}</span>
                <p class="optionGroup">
                  <img class="optionImg"
                    @click="imagesLoadOpenFn('sideItem3_4',chartArr.sideItem3_4.title,barLineChart)"
                    src="@/assets/images/downImgIcon.png">
                  <el-dropdown @command="chartTypeClick">
                    <span class="el-dropdown-link">
                      <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item :command="beforeHandleCommand('sideItem3_4',['bar','bar'],barLineChart)">
                        <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                        <span class="txt">柱状图样式</span>
                      </el-dropdown-item>
                      <el-dropdown-item :command="beforeHandleCommand('sideItem3_4',['line','line'],barLineChart)"
                        divided>
                        <img class="chartIcon" src="@/assets/images/lineIcon.png">
                        <span class="txt">折线图样式</span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </p>
              </h4>
              <div class="sideItemChart width1080" id="sideItem3_4" style="height:300px;min-height:300px;">
                <span v-if="chartArr.sideItem3_4.isValue" class="noData">暂无数据</span>
              </div>
              <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_4.dataSource}}</h5>
            </div>
          </div>

          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_2.result"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="navBottomArea">
      <li :class="{active:routerActive === 1}" @click="routerFn(1)">
        <img v-if="routerActive === 1" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 1" src="@/assets/images/peopleAnalyze/nav/navBottomIcon1-1.png">
        <img v-if="routerActive !== 1" src="@/assets/images/peopleAnalyze/nav/navBottomIcon1.png">
        <span> 三次产业结构</span>
      </li>
      <li :class="{active:routerActive === 2}" @click="routerFn(2)">
        <img v-if="routerActive === 2" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 2" src="@/assets/images/peopleAnalyze/nav/navBottomIcon2-1.png">
        <img v-if="routerActive !== 2" src="@/assets/images/peopleAnalyze/nav/navBottomIcon2.png">
        <span> 制造业结构</span>
      </li>
      <li :class="{active:routerActive === 3}" @click="routerFn(3)">
        <img v-if="routerActive === 3" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 3" src="@/assets/images/peopleAnalyze/nav/navBottomIcon3-1.png">
        <img v-if="routerActive !== 3" src="@/assets/images/peopleAnalyze/nav/navBottomIcon3.png">
        <span> 服务业结构</span>
      </li>
    </ul>
    <el-dialog title="图片下载" :visible.sync="imagesVisi" width="60%" custom-class="imagesWrap" center
      :close-on-click-modal="false" :close-on-press-escape="false" @close="imagesModalCloseFn">
      <div class="imgModalBody">
        <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
        <div class="sideItemChart" id="echartsWrap1"></div>
        <div class="colorArea">
          <p>
            <span class="txt">背景颜色：</span>
            <ColorPicker v-model="chartColor.backgroundColor" alpha :colors="predefineColors"
              @on-active-change="bgColorChange"></ColorPicker>
          </p>
          <p>
            <span class="txt">文字颜色：</span>
            <ColorPicker v-model="chartColor.textColor" alpha :colors="predefineColors"
              @on-active-change="txtColorChange"></ColorPicker>
          </p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="exportPic">保 存</el-button>
      </span>
    </el-dialog>
    <div class="fileLoadingModal" v-if="fullscreenLoading">
      <div class="progressWrap">
        <el-progress :text-inside="true" :stroke-width="15" :percentage="filePercentage"></el-progress>
        <span class="downTxt">文件导出中</span>
      </div>
    </div>
    <feedback :feedbackVisi="feedbackVisi" :feedForm="feedForm" @feedbackDialog="feedbackDialog"></feedback>
  </div>
</template>
<script>
import { savePic, axiosAll } from '@/api/api'
import { finishMixin } from '@/utils/finishMixin.js'
import { threeIndustrialMixin } from '@/utils/cityIndustrialDev/threeIndustrial.js'
import { manufacturingMixin } from '@/utils/cityIndustrialDev/manufacturing.js'
import { serviceIndustryMixin } from '@/utils/cityIndustrialDev/serviceIndustry.js'
import axios from 'axios'
export default {
  name: 'peopleCount',
  mixins: [
    finishMixin,
    threeIndustrialMixin,
    manufacturingMixin,
    serviceIndustryMixin,
  ],
  data() {
    return {
      cityName: this.$route.query.cityName,
      routerActive: 1,
      chartArr: {
        sideItem1_0: {
          id: 'sideItem1_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: '25px',
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#00fffc',
              yAxis: [],
            },
            {
              name: '',
              chartType: 'line',
              color: '#b956bd',
              yAxis: [],
            },
            {
              name: '',
              chartType: 'line',
              color: '#0e9cff',
              yAxis: [],
            },
          ],
        },
        sideItem1_1: {
          id: 'sideItem1_1',
          picNum: 2,
          infoNum: 2,
          titleNum: 2,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          chartArr: [
            {
              name: '',
              unit: '%',
              selectFan: '第一产业占比',
              list: [],
            },
          ],
        },
        sideItem1_2: {
          id: 'sideItem1_2',
          picNum: 3,
          infoNum: 3,
          titleNum: 3,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: '30px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#0af',
              yAxis: [],
            },
            {
              name: '',
              chartType: 'bar',
              color: '#ffab09',
              yAxis: [],
            },
          ],
        },
        sideItem1_3: {
          id: 'sideItem1_3',
          picNum: 4,
          infoNum: 4,
          titleNum: 4,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: '20px',
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#e2c706',
              yAxis: [],
            },
            {
              name: '',
              type: 'line',
              symbol: 'circle',
              symbolSize: 8,
              color: '#ff5975',
              yAxisIndex: 0,
              markLine: {
                data: [
                  {
                    name: '',
                    itemStyle: {
                      normal: {
                        color: '#ff5975',
                      },
                    },
                    label: {
                      normal: {
                        formatter: '',
                        position: 'end',
                      },
                    },
                    yAxis: null,
                  },
                ],
              },
            },
          ],
        },
        sideItem1_4: {
          id: 'sideItem1_4',
          picNum: 5,
          infoNum: 5,
          titleNum: 5,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: 20,
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#e2c706',
              yAxis: [],
            },
            {
              name: '',
              type: 'line',
              symbol: 'circle',
              symbolSize: 8,
              color: '#ff5975',
              yAxisIndex: 0,
              markLine: {
                data: [
                  {
                    name: '',
                    itemStyle: {
                      normal: {
                        color: '#ff5975',
                      },
                    },
                    label: {
                      normal: {
                        formatter: '',
                        position: 'end',
                      },
                    },
                    yAxis: null,
                  },
                ],
              },
            },
          ],
        },
        sideItem1_5: {
          id: 'sideItem1_5',
          picNum: 6,
          infoNum: 6,
          titleNum: 6,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: 10,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#014d89',
              lightColor: '#0391ff',
              labelPosition: 'left',
              yAxis: [],
            },
            {
              name: '',
              chartType: 'bar',
              color: '#864f00',
              lightColor: '#e88800',
              labelPosition: 'right',
              xAxisIndex: 2,
              yAxisIndex: 2,
              yAxis: [],
            },
          ],
        },
        sideItem1_6: {
          id: 'sideItem1_6',
          picNum: 7,
          infoNum: 7,
          titleNum: 7,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: '10',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#017397',
              lightColor: '#33cdff',
              labelPosition: 'left',
              yAxis: [],
            },
            {
              name: '',
              chartType: 'bar',
              color: '#853500',
              lightColor: '#db5800',
              labelPosition: 'right',
              xAxisIndex: 2,
              yAxisIndex: 2,
              yAxis: [],
            },
          ],
        },
        sideItem1_7: {
          id: 'sideItem1_7',
          picNum: 8,
          infoNum: 8,
          titleNum: 8,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: 10,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#05ab93',
              lightColor: '#34ffe1',
              labelPosition: 'left',
              yAxis: [],
            },
            {
              name: '',
              chartType: 'bar',
              color: '#890081',
              lightColor: '#ff71f7',
              labelPosition: 'right',
              xAxisIndex: 2,
              yAxisIndex: 2,
              yAxis: [],
            },
          ],
        },
        sideItem2_0: {
          id: 'sideItem2_0',
          picNum: 9,
          infoNum: 9,
          titleNum: 9,
          title: '',
          isValue: false,
          dataSource: '统计年鉴、四经普',
          result: '',
          xAxis: [],
          barWidth: 20,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#fea700',
              yAxis: [],
            },
          ],
        },
        sideItem2_1: {
          id: 'sideItem2_1',
          picNum: 10,
          infoNum: 10,
          titleNum: 10,
          title: '',
          isValue: false,
          dataSource: '统计年鉴、四经普',
          result: '',
          xAxis: [],
          barWidth: 40,
          stack: true,
          chartArr: [
            {
              name: '2015年占比（%）',
              chartType: 'bar',
              color: '#f113cc',
              yAxis: [],
            },
            {
              name: '2018比2015年占比提高（%）',
              chartType: 'bar',
              color: '#2ee3e3',
              yAxis: [],
            },
          ],
        },
        sideItem2_2: {
          id: 'sideItem2_2',
          picNum: 11,
          infoNum: 11,
          titleNum: 11,
          title: '',
          isValue: false,
          dataSource: '统计年鉴、四经普',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00fffc',
              yAxis: [],
            },
          ],
        },
        sideItem2_3: {
          id: 'sideItem2_3',
          picNum: 12,
          titleNum: 12,
          title: '',
          isValue: false,
          dataSource: '统计年鉴、四经普',
          result: '',
          chartArr: [
            {
              name: '',
              unit: '%',
              selectFan: this.$route.query.cityName,
              list: [],
            },
          ],
        },
        sideItem2_4: {
          id: 'sideItem2_4',
          picNum: 13,
          titleNum: 13,
          title: '',
          isValue: false,
          dataSource: '统计年鉴、四经普',
          chartArr: [
            {
              name: '产业占比',
              unit: '%',
              selectFan: this.$route.query.cityName,
              list: [],
            },
          ],
        },
        sideItem2_5: {
          id: 'sideItem2_5',
          picNum: 14,
          titleNum: 14,
          title: '',
          isValue: false,
          dataSource: '统计年鉴、四经普',
          chartArr: [
            {
              name: '',
              unit: '%',
              selectFan: this.$route.query.cityName,
              list: [],
            },
          ],
        },
        sideItem2_6: {
          id: 'sideItem2_6',
          picNum: 15,
          infoNum: 12,
          titleNum: 15,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '企业数量（家）',
              chartType: 'bar',
              color: '#c230ff',
              yAxis: [],
            },
          ],
        },
        sideItem2_7: {
          id: 'sideItem2_7',
          picNum: 16,
          titleNum: 16,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          geoJson: {},
          mapList0: [],
          mapList1: [],
          mapList2: [],
        },
        sideItem2_8: {
          id: 'sideItem2_8',
          picHidden: true,
          titleNum: 17,
          tableNum: 1,
          tableType: 'industrialDev1',
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          list: [],
        },
        sideItem2_9: {
          id: 'sideItem2_9',
          picNum: 17,
          infoNum: 13,
          titleNum: 18,
          title: '',
          isValue: false,
          dataSource: '企研数据',
          result: '',
          xAxis: [],
          barWidth: '25px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#02c7dd',
              yAxis: [],
            },
          ],
        },
        sideItem2_10: {
          id: 'sideItem2_10',
          picNum: 18,
          infoNum: 14,
          titleNum: 19,
          title: '',
          isValue: false,
          dataSource: '企研数据',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#ff6a5b',
              yAxis: [],
            },
          ],
        },
        sideItem2_11: {
          id: 'sideItem2_11',
          picNum: 19,
          infoNum: 15,
          titleNum: 20,
          title: '',
          isValue: false,
          dataSource: '企研数据',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00fffc',
              yAxis: [],
            },
          ],
        },
        sideItem2_12: {
          id: 'sideItem2_12',
          picNum: 20,
          infoNum: 16,
          titleNum: 21,
          title: '',
          isValue: false,
          dataSource: '企研数据',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#c178e1',
              yAxis: [],
            },
          ],
        },
        sideItem2_13: {
          id: 'sideItem2_13',
          picHidden: true,
          infoNum: 17,
          titleNum: 22,
          tableNum: 2,
          tableType: 'industrialDev2',
          isValue: false,
          title: `2018年${this.$route.query.cityName}研判结论`,
          dataSource: '统计年鉴',
          result:'',
          list: [],
        },
        sideItem3_0: {
          id: 'sideItem3_0',
          picNum: 21,
          infoNum: 18,
          titleNum: 23,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00fffc',
              yAxis: [],
            },
          ],
        },
        sideItem3_1: {
          id: 'sideItem3_1',
          picNum: 22,
          infoNum: 19,
          titleNum: 24,
          title: '',
          isValue: false,
          dataSource: '统计年鉴',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#cb62fb',
              yAxis: [],
            },
          ],
        },
        sideItem3_2: {
          id: 'sideItem3_2',
          picNum: 23,
          infoNum: 20,
          titleNum: 25,
          title:
            '2018年' +
            this.$route.query.cityName +
            '服务业分行业企业布局热力图',
          isValue: true,
          dataSource: '暂无来源',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#cb62fb',
              yAxis: [],
            },
          ],
        },
        sideItem3_3: {
          id: 'sideItem3_3',
          picNum: 24,
          titleNum: 26,
          title: '',
          isValue: false,
          dataSource: '企研数据',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#ffae01',
              yAxis: [],
            },
          ],
        },
        sideItem3_4: {
          id: 'sideItem3_4',
          picNum: 25,
          titleNum: 27,
          title: '',
          isValue: false,
          dataSource: '企研数据',
          result: '',
          xAxis: [],
          barWidth: 25,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#ff348f',
              yAxis: [],
            },
          ],
        },
      },
    }
  },
  created() {},
  mounted() {},
  methods: {
    initChart(color) {
      this.chartColor.textColor = color
      this.barLineChart('sideItem1_0', this.chartArr.sideItem1_0)
      this.pieChart('sideItem1_1', this.chartArr.sideItem1_1)
      this.barLineChart('sideItem1_2', this.chartArr.sideItem1_2)
      this.barLineChart('sideItem1_3', this.chartArr.sideItem1_3)
      this.barLineChart('sideItem1_4', this.chartArr.sideItem1_4)
      this.bothWayBarLineChart('sideItem1_5', this.chartArr.sideItem1_5)
      this.bothWayBarLineChart('sideItem1_6', this.chartArr.sideItem1_6)
      this.bothWayBarLineChart('sideItem1_7', this.chartArr.sideItem1_7)
      this.textTopHorizontalChart('sideItem2_0', this.chartArr.sideItem2_0)
      this.barLineChart('sideItem2_1', this.chartArr.sideItem2_1)
      this.barLineChart('sideItem2_2', this.chartArr.sideItem2_2)
      this.pieChart('sideItem2_3', this.chartArr.sideItem2_3)
      this.pieChart('sideItem2_4', this.chartArr.sideItem2_4)
      this.pieChart('sideItem2_5', this.chartArr.sideItem2_5)
      this.barLineChart('sideItem2_6', this.chartArr.sideItem2_6)
      this.drawEchartMap('sideItem2_7', this.chartArr.sideItem2_7)
      this.textTopHorizontalChart('sideItem2_9', this.chartArr.sideItem2_9)
      this.barLineChart('sideItem2_10', this.chartArr.sideItem2_10)
      this.barLineChart('sideItem2_11', this.chartArr.sideItem2_11)
      this.barLineChart('sideItem2_12', this.chartArr.sideItem2_12)
      this.barLineChart('sideItem3_0', this.chartArr.sideItem3_0)
      this.barLineChart('sideItem3_1', this.chartArr.sideItem3_1)
      this.barLineChart('sideItem3_3', this.chartArr.sideItem3_3)
      this.barLineChart('sideItem3_4', this.chartArr.sideItem3_4)
    },
    // 下载文档
    downloadDoc() {
      let _self = this
      _self.initChart('#000')
      _self.fullscreenLoading = true
      let baseURlArr = []
      let infoArr = []
      let picArrIndex = 0
      let picArrFn = []
      setTimeout(function () {
        for (let key in _self.chartArr) {
          if (!_self.chartArr[key].picHidden && !_self.chartArr[key].isValue) {
            console.log(_self.chartArr[key])

            let chart = _self.$echarts.init(
              document.getElementById(_self.chartArr[key].id)
            )
            baseURlArr[key] = chart.getDataURL()
            picArrFn[picArrIndex] = savePic({
              picInfo: baseURlArr[key],
              no: 'no' + _self.chartArr[key].picNum,
              type: 'industrialDev-city',
              area: _self.cityName,
            }).then(() => {})
            picArrIndex++
          }
          infoArr.push(
            {
              name: 'title' + _self.chartArr[key].titleNum,
              value: _self.chartArr[key].title,
            },
            {
              name: 'verdict' + _self.chartArr[key].infoNum,
              value: _self.chartArr[key].result,
            },
            {
              name: 'source' + _self.chartArr[key].titleNum,
              value: _self.chartArr[key].dataSource,
            },
            {
              name: 'table' + _self.chartArr[key].tableNum,
              value: _self.chartArr[key].list,
              type: _self.chartArr[key].tableType,
            }
          )
        }
        let aa = infoArr.filter((item) => {
          return item.value
        })

        axiosAll(picArrFn).then(() => {
          axios({
            url: _self.baseUrl + '/section/exportWord',
            method: 'post',
            data: {
              area: _self.cityName,
              type: 'industrialDev-city',
              condition: JSON.stringify(aa),
            },
            responseType: 'blob',
            onDownloadProgress(progress) {
              _self.filePercentage = Math.round(
                (progress.loaded / progress.total) * 100
              )
            },
          }).then((res) => {
            // new Blob([data])用来创建URL的file对象或者blob对象
            let url = window.URL.createObjectURL(new Blob([res.data]))
            let link = document.createElement('a') // 生成一个a标签
            link.style.display = 'none'
            link.href = url
            let fileName = `${_self.cityName}${
              _self.$route.meta.moudleSystem
            }报告${_self.returnDatetime()}`
            link.download = fileName + '.docx'
            document.body.appendChild(link)
            setTimeout(function () {
              link.click()
              _self.initChart('#fff')
              _self.filePercentage = 0
              _self.fullscreenLoading = false
            }, 1000)
          })
        })
      }, 1500)
    },
  },
}
</script>
<style lang="scss" scoped>
@import './cityIndustrialDev.scss';
</style>
