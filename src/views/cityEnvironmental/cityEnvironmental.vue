<template>
  <div class="bodyMain">
    <nav class="navTopArea">
      <div class="navLeft">
        <img src="@/assets/images/nav/logo.png">
        <span v-if="routerActive === 1">{{cityName}}环境质量分析</span>
        <span v-if="routerActive === 2">{{cityName}}生态资源分析</span>
        <span v-if="routerActive === 3">{{cityName}}污染物排放分析</span>
        <span v-if="routerActive === 4">{{cityName}}生态资源状况分析</span>
      </div>
      <ul class="navRight">
        <li :class="{navActive:routerActive === 1}" @click="routerFn(1)">
          <el-tooltip class="item" effect="dark" content="环境质量" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon1.png">
              <span v-if="routerActive === 1">环境质量</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 2}" @click="routerFn(2)">
          <el-tooltip class="item" effect="dark" content="生态资源" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon2.png">
              <span v-if="routerActive === 2">生态资源</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 3}" @click="routerFn(3)">
          <el-tooltip class="item" effect="dark" content="污染物排放" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon3.png">
              <span v-if="routerActive === 3">污染物排放</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 4}" @click="routerFn(4)">
          <el-tooltip class="item" effect="dark" content="生态资源状况" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon4.png">
              <span v-if="routerActive === 4">生态资源状况</span>
            </div>
          </el-tooltip>
        </li>
        <li @click="downloadDoc">
          <el-tooltip class="item" effect="dark" content="导出文档" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon5.png">
            </div>
          </el-tooltip>
        </li>
        <li @click="feedbackClick">
          <el-tooltip class="item" effect="dark" content="意见反馈" placement="top">
            <div>
              <img src="@/assets/images/feedbackIcon.png">
            </div>
          </el-tooltip>
        </li>
        <li @click="junpLink('http://118.190.204.249:8989/aiPage?tag=home&cityName=' + cityName)">
          <el-tooltip class="item" effect="dark" content="回到总览" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon6.png">
            </div>
          </el-tooltip>
        </li>
        <li @click="junpLink('http://118.190.204.249:8989/aiPage')">
          <el-tooltip class="item" effect="dark" content="回到首页" placement="top">
            <div>
              <img src="@/assets/images/nav/navTopIcon7.png">
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
            <span class="txt">大气环境质量分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width800 sideItem1_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_0',chartArr.sideItem1_0.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width800" id="sideItem1_0"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1020 sideItem1_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_1',chartArr.sideItem1_1.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_1','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_1','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1020" id="sideItem1_1"></div>
          <p class="markLineArea">
            <span class="colorLine"></span>
            <span>全省平均值（{{chartArr.sideItem1_1.markLine.data[0].yAxis}}%）</span>
          </p>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_1.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem1_2">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_2.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_2',chartArr.sideItem1_2.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_2','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_2','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem1_2"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_2.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_2.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem1_3">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_3.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_3',chartArr.sideItem1_3.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_3','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_3','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <p class="markLineArea">
            <span class="colorLine" style="border-color: #fff;"></span>
            <span>国家空气质量二级标准要求（35µg/m³）</span>
          </p>
          <div class="sideItemChart width910" id="sideItem1_3"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_3.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_3.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem1_4">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_4.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_4',chartArr.sideItem1_4.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_4','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_4','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <p class="markLineArea">
            <span class="colorLine" style="border-color: #fff;"></span>
            <span>国家空气质量二级标准要求（35µg/m³）</span>
          </p>
          <div class="sideItemChart width910" id="sideItem1_4"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_4.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_4.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem1_5">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_5.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_5',chartArr.sideItem1_5.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_5','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_5','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <p class="markLineArea">
            <span class="colorLine" style="border-color: #fff45c;"></span>
            <span>国家空气质量二级标准要求（35µg/m³）</span>
          </p>
          <div class="sideItemChart width910" id="sideItem1_5"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_5.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_5.result"></p>
            </div>
          </div>
        </div>
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">水环境质量分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width1845 sideItem1_6">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_6.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem1_6',chartArr.sideItem1_6.title,sideItem1_6Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_6','bar',sideItem1_6Chart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_6','line',sideItem1_6Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1845" id="sideItem1_6"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_6.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_6.result"></p>
            </div>
          </div>
        </div>
        <div class="twoWrap">
          <div class="sideItem width910 sideItem1_7">
            <h4 class="moudleTitle">
              <span class="left"> {{chartArr.sideItem1_7.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem1_7',chartArr.sideItem1_7.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_7','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_7','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width910" id="sideItem1_7"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem1_7.dataSource}}</h5>
          </div>
          <div class="sideItem width910 sideItem1_8">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem1_8.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem1_8',chartArr.sideItem1_8.title,sideItem1_8Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_8','bar',sideItem1_8Chart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_8','line',sideItem1_8Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width910" id="sideItem1_8"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem1_8.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_7.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1845">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_9.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img @click="exportType" class="optionImg" src="@/assets/images/exportIcon.png">
            </p>
          </h4>
          <ul class="tableWrap">
            <li v-for="(item,index) in chartArr.sideItem1_9.list" :key="index + 'a'">
              <p class="th">{{item.name}}</p>
              <span v-for="(val,i) in item.list" :key="i + 'b'">{{val}}</span>
              <span v-for="k in typeLengthMax - item.list.length" :key="k + 'c'"></span>
            </li>
          </ul>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_9.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_9.result"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" style="margin-top: 30px;" v-show="routerActive === 2">
        <div class="sideItem width1080 sideItem2_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem2_0',chartArr.sideItem2_0.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1080" id="sideItem2_0"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width740 sideItem2_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_1.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_1',chartArr.sideItem2_1.title,pieChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width740" id="sideItem2_1"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_1.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width740 sideItem2_2">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_2.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_2',chartArr.sideItem2_2.title,pieChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width740" id="sideItem2_2"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_2.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_2.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1080 sideItem2_3">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_3.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem2_3',chartArr.sideItem2_3.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_3','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_3','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1080" id="sideItem2_3"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_3.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_3.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem2_4">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_4.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem2_4',chartArr.sideItem2_4.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_4','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_4','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_4"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_4.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_4.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem2_5">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_5.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem2_5',chartArr.sideItem2_5.title,singleBarLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_5','bar',singleBarLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_5','line',singleBarLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_5"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_5.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_5.result"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" v-show="routerActive === 3">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">化学需氧量排放总量和强度</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="twoWrap">
          <div class="sideItem width800 sideItem3_0">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_0.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_0',chartArr.sideItem3_0.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_0','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_0','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_0"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_0.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_1">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_1.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_1',chartArr.sideItem3_1.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_1','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_1','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_1"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_1.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_2">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_2.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_2',chartArr.sideItem3_2.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_2"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_2.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_3">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_3.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_3',chartArr.sideItem3_3.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_3','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_3','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_3"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_3.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_0.result"></p>
            </div>
          </div>
        </div>
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">氨氮排放总量和强度</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="twoWrap">
          <div class="sideItem width1020 sideItem3_4">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_4.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_4',chartArr.sideItem3_4.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_4','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_4','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_4"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_4.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_5">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_5.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_5',chartArr.sideItem3_5.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_5','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_5','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_5"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_5.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_6">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_6.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_6',chartArr.sideItem3_6.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_6"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_6.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_7">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_7.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_7',chartArr.sideItem3_7.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_7','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_7','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_7"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_2.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_1.result"></p>
            </div>
          </div>
        </div>
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">二氧化硫排放总量和强度</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="twoWrap">
          <div class="sideItem width1020 sideItem3_8">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_8.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_8',chartArr.sideItem3_8.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_8','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_8','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_8"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_8.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_9">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_5.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_9',chartArr.sideItem3_5.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_9','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_9','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_9"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_9.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_10">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_10.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_10',chartArr.sideItem3_10.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_10"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_10.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_11">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_11.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_11',chartArr.sideItem3_11.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_11','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_11','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_11"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_11.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_2.result"></p>
            </div>
          </div>
        </div>
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">氮氧化物排放总量和强度</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="twoWrap">
          <div class="sideItem width1020 sideItem3_12">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_12.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_12',chartArr.sideItem3_12.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_12','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_12','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_12"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_12.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_13">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_13.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_13',chartArr.sideItem3_13.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_13','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_13','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_13"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_13.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_14">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_14.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_14',chartArr.sideItem3_14.title,pieChart)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_14"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_14.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_15">
            <h4 class="moudleTitle">
              <span class="left">{{chartArr.sideItem3_15.title}}</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_15',chartArr.sideItem3_15.title,singleBarLineChart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_15','bar',singleBarLineChart)">
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_15','line',singleBarLineChart)" divided>
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_15"></div>
            <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem3_15.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem3_3.result"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" style="margin-top: 30px;" v-show="routerActive === 4">
        <div class="sideItem width1845 sideItem4_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem4_0',chartArr.sideItem4_0.title,sideItem4_0Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_0','bar',sideItem4_0Chart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_0','line',sideItem4_0Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <p class="markLineArea">
            <span class="colorLine" style="border-color:#00ff7d"></span>
            <span>优</span>
          </p>
          <div class="sideItemChart width1845" id="sideItem4_0"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem4_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem4_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1845 sideItem4_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem4_1',chartArr.sideItem4_1.title,sideItem4_1Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_1','bar',sideItem4_1Chart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_1','line',sideItem4_1Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <p class="markLineArea">
            <span class="colorLine" style="border-color:#00ff7d"></span>
            <span>优</span>
          </p>
          <div class="sideItemChart width1845" id="sideItem4_1"></div>
          <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem4_1.dataSource}}</h5>
        </div>
        <div class="sideItem width1845 sideItem4_2">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_2.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img @click="exportExcel" class="optionImg" src="@/assets/images/exportIcon.png">
            </p>
          </h4>
          <div class="tableWrap">
            <el-table :data="chartArr.sideItem4_2.list" fit>
              <el-table-column prop="name" label="县（市、区）" align="center" />
              <el-table-column prop="value" label="2018年EI值" align="center">
                <template slot-scope="scope">
                  <span style="color:#f09800">{{ scope.row.value }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="value" label="等级" align="center">
                <template slot-scope="scope">
                  <span :class="[classNameSwitch(scope.row.value)]">
                    {{ classSwitch(scope.row.value) }}
                  </span>
                </template>
              </el-table-column>

              <el-table-column prop="rank" label="省内排名" align="center" />
              <el-table-column prop="change" label="排名变化" align="center">
                <template slot-scope="scope">
                  <i v-if="scope.row.change === 'up'" class="el-icon-top" style="color:#00f082"></i>
                  <i v-if="scope.row.change === 'down'" class="el-icon-bottom" style="color:red"></i>
                  <i v-if="scope.row.change === 'const'">-</i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <h5 class="dataSourceTxt">数据来源：{{chartArr.sideItem4_2.dataSource}}</h5>
        </div>
        <div class="twoWrap">
          <div class="sideItem sideItem4_3">
            <h4 class="moudleTitle">
              <span class="left"> {{chartArr.sideItem4_3.title}}</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem4_3',chartArr.sideItem4_3.title,initMap)"
                  src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart" id="sideItem4_3"></div>
          </div>
          <div class="rightResultWrap">
            <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
            <p v-html="chartArr.sideItem4_3.result"></p>
          </div>
        </div>
      </div>
    </div>

    <ul class="navBottomArea">
      <li :class="{active:routerActive === 1}" @click="routerFn(1)">
        <img v-if="routerActive === 1" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 1" src="@/assets/images/nav/navBottomIcon1-1.png">
        <img v-if="routerActive !== 1" src="@/assets/images/nav/navBottomIcon1.png">
        <span>环境质量</span>
      </li>
      <li :class="{active:routerActive === 2}" @click="routerFn(2)">
        <img v-if="routerActive === 2" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 2" src="@/assets/images/nav/navBottomIcon2-1.png">
        <img v-if="routerActive !== 2" src="@/assets/images/nav/navBottomIcon2.png">
        <span>生态资源</span>
      </li>
      <li :class="{active:routerActive === 3}" @click="routerFn(3)">
        <img v-if="routerActive === 3" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 3" src="@/assets/images/nav/navBottomIcon3-1.png">
        <img v-if="routerActive !== 3" src="@/assets/images/nav/navBottomIcon3.png">
        <span>污染物排放</span>
      </li>
      <li :class="{active:routerActive === 4}" @click="routerFn(4)">
        <img v-if="routerActive === 4" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 4" src="@/assets/images/nav/navBottomIcon4-1.png">
        <img v-if="routerActive !== 4" src="@/assets/images/nav/navBottomIcon4.png">
        <span>生态环境状态</span>
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
              @on-active-change="backgroundColorChange"></ColorPicker>
          </p>
          <p>
            <span class="txt">文字颜色：</span>
            <ColorPicker v-model="chartColor.textColor" alpha :colors="predefineColors"
              @on-active-change="textColorChange"></ColorPicker>
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
import { savePic, exportWord } from '@/api/environmentalQuality'
import mUtilsFn from '@/utils/mUtils.js'
import { finishMixin } from '@/utils/finishMixin.js'
import { environmentalQualityMixin } from '@/utils/cityEnvironmental/environmentalQualityMixin.js'
import { ecologicaleResourcesMixin } from '@/utils/cityEnvironmental/ecologicaleResourcesMixin.js'
import { emissionsMixin } from '@/utils/cityEnvironmental/emissionsMixin.js'
import { environmentStateMixin } from '@/utils/cityEnvironmental/environmentStateMixin.js'
import axios from 'axios'

export default {
  name: 'Home',
  mixins: [
    finishMixin,
    environmentalQualityMixin,
    ecologicaleResourcesMixin,
    emissionsMixin,
    environmentStateMixin
  ],
  data() {
    return {
      // baseUrl: 'http://47.103.102.173:8881/ecologicalMap/', // 系统域名
      baseUrl: process.env.NODE_ENV === 'production' ? 'http://47.103.102.173:8881/ecologicalMap/' : 'http://192.168.13.251:8083/', // 系统域名
      cityName: '', // 被分析城市
      fullscreenLoading: false,
      filePercentage: 0,
      routerActive: 1, // 选中模块
      imagesVisi: false, // 是否显示保存图片弹窗
      whichEchart: null, // 要被下载图表对象id
      imagesName: '', // 图片名称
      fnName: null,
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
        'rgba(51, 100, 98)',
        'hsla(209, 100%, 56%, 0.73)',
        'rgba(0, 0, 0)'
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

      chartArr: {
        sideItem1_0: {
          id: 'sideItem1_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          name: '',
          chartType: 'line',
          barWidth: '55px',
          color: '#ff5975',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_1: {
          id: 'sideItem1_1',
          picNum: 2,
          infoNum: 2,
          titleNum: 2,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#00976d',
          lightColor: '#00ffb8',
          dataSource: '',
          result: '',
          avg: 0,
          xAxis: [],
          yAxis: [],
          markLine: {
            isShow:true,
            legendName:'',
            xAxis:[],
            yAxis:[],
            lineColor:'#ff5975',
            silent: true,
            lineStyle: {
              normal: {
                color: '#ff5975' // 这儿设置安全基线颜色
              }
            },
            data: [
              {
                yAxis: 0 //这儿定义基准线的数值为多少
              }
            ],
            label: {
              normal: {
                formatter: '', // 这儿设置安全基线
                position: 'insideStartBottom'
              }
            }
          }
        },
        sideItem1_2: {
          id: 'sideItem1_2',
          picNum: 3,
          infoNum: 3,
          titleNum: 3,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#e19605',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_3: {
          id: 'sideItem1_3',
          picNum: 4,
          infoNum: 4,
          titleNum: 4,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#b062ff',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: [],
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#fff'
              }
            },
            data: [
              {
                yAxis: 35
              }
            ],
            label: {
              normal: {
                formatter: '',
                position: 'middle'
              }
            }
          }
        },
        sideItem1_4: {
          id: 'sideItem1_4',
          picNum: 5,
          infoNum: 5,
          titleNum: 5,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          lightColor: '#00ffff',
          color: '#00afaf',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: [],
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#ff5975'
              }
            },
            data: [
              {
                yAxis: 35
              }
            ],
            label: {
              normal: {
                formatter: '',
                position: 'middle'
              }
            }
          }
        },
        sideItem1_5: {
          id: 'sideItem1_5',
          picNum: 6,
          infoNum: 6,
          titleNum: 6,
          title: '',
          name: 'M2.5浓度（µg/m³）',
          chartType: 'line',
          barWidth: '55px',
          color: '#b062ff',
          result: '',
          xAxis: [],
          yAxis: [],
          markLine: {
            silent: true,
            lineStyle: {
              normal: {
                color: '#fff45c'
              }
            },
            data: [
              {
                yAxis: 35
              }
            ],
            label: {
              normal: {
                formatter: '',
                position: 'middle'
              }
            }
          }
        },
        sideItem1_6: {
          id: 'sideItem1_6',
          picNum: 7,
          infoNum: 7,
          titleNum: 7,
          title: '',
          name1: 'Ⅲ类以上数量',
          name2: '省控断面数量',
          chartType: 'bar',
          color1: '#ffba00',
          color2: '#498eff',
          dataSource: '',
          color: '#b062ff',
          result: '',
          xAxis: [],
          yAxis1: [],
          yAxis2: []
        },
        sideItem1_7: {
          id: 'sideItem1_7',
          picNum: 8,
          infoNum: 8,
          titleNum: 8,
          title: '',
          name: 'Ⅲ以上水质断面比例（省控断面）%',
          chartType: 'bar',
          barWidth: '30px',
          color: '#00976d',
          lightColor: '#00ffb8',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis1: []
        },
        sideItem1_8: {
          id: 'sideItem1_8',
          picNum: 9,
          titleNum: 9,
          title: '',
          name1: '',
          name2: '',
          name3: '',
          name4: '',
          name5: '',
          name6: '',
          chartType: 'bar',
          barWidth: '30px',
          color1: '#ff9f7f',
          color2: '#67e0e3',
          color3: '#37a2da',
          color4: '#e062ae',
          color5: '#a44bff',
          color6: '#ffdb5c',
          dataSource: '',
          xAxis: [],
          yAxis1: [],
          yAxis2: [],
          yAxis3: [],
          yAxis4: [],
          yAxis5: [],
          yAxis6: []
        },
        sideItem1_9: {
          id: 'sideItem1_9',
          picHidden: true,
          infoNum: 9,
          titleNum: 10,
          title: '',
          result: ''
        },

        sideItem2_0: {
          id: 'sideItem2_0',
          picNum: 10,
          infoNum: 10,
          titleNum: 11,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#5c2700',
          lightColor: '#f19149',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem2_1: {
          id: 'sideItem2_1',
          picNum: 11,
          infoNum: 11,
          titleNum: 12,
          title: '',
          name: '',
          chartType: 'bar',
          unit: '',
          dataSource: '',
          result: '',
          list: [],
          legends: []
        },
        sideItem2_2: {
          id: 'sideItem2_2',
          picNum: 12,
          infoNum: 12,
          titleNum: 13,
          title: '',
          name: '',
          chartType: 'bar',
          unit: '万立方米',
          dataSource: '',
          result: '',
          list: [],
          legends: []
        },
        sideItem2_3: {
          id: 'sideItem2_3',
          picNum: 13,
          infoNum: 13,
          titleNum: 14,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#007621',
          lightColor: '#00e841',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem2_4: {
          id: 'sideItem2_4',
          picNum: 14,
          infoNum: 14,
          titleNum: 15,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#ff00ff',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem2_5: {
          id: 'sideItem2_5',
          picNum: 15,
          infoNum: 15,
          titleNum: 16,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#00f6ff',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },

        sideItem3_0: {
          id: 'sideItem3_0',
          picNum: 16,
          infoNum: 16,
          titleNum: 17,
          title: '',
          name: '',
          chartType: 'line',
          barWidth: '55px',
          color: '#c90eff',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_1: {
          id: 'sideItem3_1',
          picNum: 17,
          infoNum: 17,
          titleNum: 18,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#00976d',
          lightColor: '#00ffb8',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_2: {
          id: 'sideItem3_2',
          picNum: 18,
          infoNum: 18,
          titleNum: 19,
          title: '',
          name: '',
          dataSource: '',
          unit: '',
          result: '',
          list: [],
          legends: []
        },
        sideItem3_3: {
          id: 'sideItem3_3',
          picNum: 19,
          infoNum: 19,
          titleNum: 20,
          title: '',
          name: '化学需氧量排放强度（千克/万元）',
          chartType: 'bar',
          barWidth: '30px',
          color: '#b14400',
          lightColor: '#ff7723',
          dataSource: '省生态环境厅',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_4: {
          id: 'sideItem3_4',
          picNum: 20,
          titleNum: 21,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#a00062',
          lightColor: '#ff62c2',
          dataSource: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_5: {
          id: 'sideItem3_5',
          picNum: 21,
          titleNum: 22,
          title: '',
          name: '',
          chartType: 'line',
          barWidth: '55px',
          color: '#ff7723',
          dataSource: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_6: {
          id: 'sideItem3_6',
          picNum: 22,
          titleNum: 23,
          title: '',
          name: '全省各地市氨氮排放总量占比',
          dataSource: '',
          unit: '',
          list: [],
          legends: []
        },
        sideItem3_7: {
          id: 'sideItem3_7',
          picNum: 23,
          titleNum: 24,
          title: '',
          name: '氨氮排放强度（千克/万元）',
          chartType: 'bar',
          color: '#9d7700',
          lightColor: '#ffd85c',
          dataSource: '省生态环境厅',
          barWidth: '30px',
          xAxis: [],
          yAxis: []
        },
        sideItem3_8: {
          id: 'sideItem3_8',
          picNum: 24,
          titleNum: 25,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#00976d',
          lightColor: '#00ffb8',
          dataSource: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_9: {
          id: 'sideItem3_9',
          picNum: 25,
          titleNum: 26,
          title: '',
          name: '',
          chartType: 'line',
          barWidth: '55px',
          color: '#00d8ff',
          dataSource: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_10: {
          id: 'sideItem3_10',
          picNum: 26,
          titleNum: 27,
          title: '',
          name: '二氧化硫排放总量占比',
          dataSource: '',
          unti: '',
          list: [],
          legends: []
        },
        sideItem3_11: {
          id: 'sideItem3_11',
          picNum: 27,
          titleNum: 28,
          title: '',
          name: '二氧化硫（千克/万元）',
          chartType: 'bar',
          barWidth: '30px',
          color: '#34249a',
          lightColor: '#917fff',
          dataSource: '省生态环境厅',
          xAxis: [],
          yAxis: []
        },
        sideItem3_12: {
          id: 'sideItem3_12',
          picNum: 28,
          titleNum: 29,
          title: '',
          name: '',
          chartType: 'bar',
          barWidth: '30px',
          color: '#886000',
          lightColor: '#ffbe23',
          dataSource: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_13: {
          id: 'sideItem3_13',
          picNum: 29,
          titleNum: 30,
          title: '',
          name: '',
          chartType: 'line',
          barWidth: '55px',
          color: '#00ffb8',
          dataSource: '',
          unit: '',
          xAxis: [],
          yAxis: []
        },
        sideItem3_14: {
          id: 'sideItem3_14',
          picNum: 30,
          titleNum: 31,
          title: '',
          name: '全省各地市氮氧化物排放总量占比',
          unit: '',
          dataSource: '',
          list: [],
          legends: []
        },
        sideItem3_15: {
          id: 'sideItem3_15',
          picNum: 31,
          titleNum: 32,
          title: '',
          name: '氮氧化物（千克/万元）',
          chartType: 'bar',
          barWidth: '30px',
          color: '#00976d',
          lightColor: '#00ffb8',
          dataSource: '省生态环境厅',
          xAxis: [],
          yAxis: []
        },

        sideItem4_0: {
          id: 'sideItem4_0',
          picNum: 32,
          titleNum: 33,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#ff5975',
          dataSource: '',
          result: '',
          legend: [],
          yAxisArr: []
        },
        sideItem4_1: {
          id: 'sideItem4_1',
          picNum: 33,
          infoNum: 20,
          titleNum: 34,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#ff5975',
          dataSource: '',
          legend: [],
          yAxisArr: []
        },
        sideItem4_2: {
          picHidden: true,
          titleNum: 35,
          title: '',
          dataSource: '省生态环境厅',
          list: []
        },
        sideItem4_3: {
          id: 'sideItem4_3',
          picNum: 34,
          titleNum: 36,
          infoNum: 21,
          title: '2018年全省各县市区生态环境状况指数',
          dataSource: '省生态环境厅',
          result: '',
          list: []
        }
      }
    }
  },
  created() {
    this.cityName = this.$route.query.cityName
  },
  mounted() {},
  methods: {
    initQualityChart(color) {
      this.chartColor.textColor = color
      this.singleBarLineChart('sideItem1_0', this.chartArr.sideItem1_0)
      this.singleBarLineChart('sideItem1_1', this.chartArr.sideItem1_1)
      this.singleBarLineChart('sideItem1_2', this.chartArr.sideItem1_2)
      this.singleBarLineChart('sideItem1_3', this.chartArr.sideItem1_3)
      this.singleBarLineChart('sideItem1_4', this.chartArr.sideItem1_4)
      this.singleBarLineChart('sideItem1_5', this.chartArr.sideItem1_5)
      this.sideItem1_6Chart('sideItem1_6', this.chartArr.sideItem1_6)
      this.singleBarLineChart('sideItem1_7', this.chartArr.sideItem1_7)
      this.sideItem1_8Chart('sideItem1_8', this.chartArr.sideItem1_8)

      this.singleBarLineChart('sideItem2_0', this.chartArr.sideItem2_0)
      this.pieChart('sideItem2_1', this.chartArr.sideItem2_1)
      this.pieChart('sideItem2_2', this.chartArr.sideItem2_2)
      this.singleBarLineChart('sideItem2_3', this.chartArr.sideItem2_3)
      this.singleBarLineChart('sideItem2_4', this.chartArr.sideItem2_4)
      this.singleBarLineChart('sideItem2_5', this.chartArr.sideItem2_5)

      this.singleBarLineChart('sideItem3_0', this.chartArr.sideItem3_0)
      this.singleBarLineChart('sideItem3_1', this.chartArr.sideItem3_1)
      this.pieChart('sideItem3_2', this.chartArr.sideItem3_2)
      this.singleBarLineChart('sideItem3_3', this.chartArr.sideItem3_3)
      this.singleBarLineChart('sideItem3_4', this.chartArr.sideItem3_4)
      this.singleBarLineChart('sideItem3_5', this.chartArr.sideItem3_5)
      this.pieChart('sideItem3_6', this.chartArr.sideItem3_6)
      this.singleBarLineChart('sideItem3_7', this.chartArr.sideItem3_7)
      this.singleBarLineChart('sideItem3_8', this.chartArr.sideItem3_8)
      this.singleBarLineChart('sideItem3_9', this.chartArr.sideItem3_9)
      this.pieChart('sideItem3_10', this.chartArr.sideItem3_10)
      this.singleBarLineChart('sideItem3_11', this.chartArr.sideItem3_11)
      this.singleBarLineChart('sideItem3_12', this.chartArr.sideItem3_12)
      this.singleBarLineChart('sideItem3_13', this.chartArr.sideItem3_13)
      this.pieChart('sideItem3_14', this.chartArr.sideItem3_14)
      this.singleBarLineChart('sideItem3_15', this.chartArr.sideItem3_15)

      this.initMap('sideItem4_3', this.geoJson, this.chartArr.sideItem4_3)
      this.sideItem4_0Chart('sideItem4_0', this.chartArr.sideItem4_0)
      this.sideItem4_1Chart('sideItem4_1', this.chartArr.sideItem4_1)
    },
    // 颜色选择器背景颜色值发生变化
    backgroundColorChange(color) {
      this.chartColor.backgroundColor = color
      if (this.whichEchart === 'sideItem4_3') {
        this.$nextTick(() => {
          this.initMap(
            'echartsWrap1',
            this.geoJson,
            this.chartArr[this.whichEchart]
          )
        })
      } else {
        this.fnName('echartsWrap1', this.chartArr[this.whichEchart])
      }
    },
    // 颜色选择器文字颜色值发生变化
    textColorChange(color) {
      this.chartColor.textColor = color
      if (this.whichEchart === 'sideItem4_3') {
        this.$nextTick(() => {
          this.initMap(
            'echartsWrap1',
            this.geoJson,
            this.chartArr[this.whichEchart]
          )
        })
      } else {
        this.fnName('echartsWrap1', this.chartArr[this.whichEchart])
      }
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
      let minutes =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 获取当前分钟数(0-59)
      let seconds =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 获取当前秒数(0-59)

      aLink.download = `${this.imagesName}${year}${month}${day}${hours}${minutes}${seconds}.png`
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
    // 对command参数进行重新封装成一个对象
    beforeHandleCommand(command1, command2, command3, command4) {
      return {
        id: command1,
        type: command2,
        fnName: command3,
        light: command4
      }
    },
    // 图表柱状图折线图转换
    chartTypeClick(command) {
      this.chartArr[command.id].chartType = command.type
      command.fnName(command.id, this.chartArr[command.id], command.light)
    },
    // 打开保存图片弹窗并渲染图表
    imagesModalOpenFn(val, imagesName, fnName) {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesName = imagesName
      this.whichEchart = val
      this.imagesVisi = true
      this.fnName = fnName

      if (val === 'sideItem4_3') {
        this.$nextTick(() => {
          this.initMap('echartsWrap1', this.geoJson, this.chartArr[val])
        })
      } else {
        this.$nextTick(() => {
          fnName('echartsWrap1', this.chartArr[val])
        })
      }
    },
    // 关闭保存图片弹窗
    imagesModalCloseFn() {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesVisi = false
    },
    // 下载文档
    downloadDoc() {
      let _self = this
      _self.initQualityChart('#000')
      _self.fullscreenLoading = true
      let baseURlArr = []
      let infoArr = []
      let picArrIndex = 0
      let picArrFn = []

      setTimeout(function() {
        for (let key in _self.chartArr) {
          if (!_self.chartArr[key].picHidden) {
            let chart = _self.$echarts.init(
              document.getElementById(_self.chartArr[key].id)
            )
            baseURlArr[key] = chart.getDataURL()
            picArrFn[picArrIndex] = savePic({
              picInfo: baseURlArr[key],
              no: 'no' + _self.chartArr[key].picNum,
              type: 'ecology-city',
              area: _self.cityName
            }).then(res => {})
            picArrIndex++
          }
          infoArr.push(
            {
              name: 'title' + _self.chartArr[key].titleNum,
              value: _self.chartArr[key].title
            },
            {
              name: 'verdict' + _self.chartArr[key].infoNum,
              value: _self.chartArr[key].result
            },
            {
              name: 'source' + _self.chartArr[key].titleNum,
              value: _self.chartArr[key].dataSource
            }
          )
        }

        axios.all(picArrFn).then(
          axios.spread(() => {
            axios({
              url: _self.baseUrl + '/section/exportWord',
              method: 'post',
              data: {
                area: _self.cityName,
                type: 'ecology-city',
                condition: JSON.stringify(infoArr)
              },
              responseType: 'blob',
              onDownloadProgress(progress) {
                _self.filePercentage = Math.round(
                  (progress.loaded / progress.total) * 100
                )
              }
            }).then(res => {
              // new Blob([data])用来创建URL的file对象或者blob对象
              let url = window.URL.createObjectURL(new Blob([res.data]))
              // 生成一个a标签
              let link = document.createElement('a')
              link.style.display = 'none'
              link.href = url
              let date = new Date()
              let year = date.getFullYear() // 获取完整的年份(4位)
              let month =
                date.getMonth() < 10
                  ? '0' + (date.getMonth() + 1)
                  : date.getMonth() + 1 //获取当前月份(0-11,0代表1月)
              let day =
                date.getDate() < 10
                  ? '0' + date.getDate()
                  : date.getDate() + 1  // 获取当前日(1-31)
              let hours = date.getHours() < 10
                  ? '0' + date.getHours()
                  : date.getHours()
              let minutes =
                date.getMinutes() < 10
                  ? '0' + date.getMinutes()
                  : date.getMinutes() // 获取当前分钟数(0-59)
              let seconds =
                date.getSeconds() < 10
                  ? '0' + date.getSeconds()
                  : date.getSeconds() // 获取当前秒数(0-59)
              let fileName = `${_self.cityName}生态环境分析报告${year}${month}${day}${hours}${minutes}${seconds}`
              link.download = fileName + '.docx'
              document.body.appendChild(link)
              setTimeout(function() {
                link.click()
                _self.initQualityChart('#fff')
                _self.filePercentage = 0
                _self.fullscreenLoading = false
              }, 1000)
            })
          })
        )
      }, 1500)
    },
    // 单条柱状图折线图
    singleBarLineChart(id, data) {
      let cityName = this.cityName
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        color: data.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
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
              lineStyle: {
                color: '#6291fb'
              }
            },
            data: data.xAxis
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: this.chartColor.textColor
              }
            },
            splitLine: {
              show: true,
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
            type: data.chartType,
            barWidth: data.barWidth,
            barGap: '50%',
            itemStyle: {
              normal: {
                color: function(params) {
                  if (params.name === cityName) {
                    return data.lightColor
                  } else {
                    return data.color
                  }
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 16,
                  color: this.chartColor.textColor
                }
              }
            },
            markLine: data.markLine ? data.markLine : null,
            data: data.yAxis
          }
        ]
      }
      chart.clear()
      chart.setOption(option)
    },
    // 饼图
    pieChart(id, data) {
      let chart = this.$echarts.init(document.getElementById(id))
      let option = {
        backgroundColor: this.chartColor.backgroundColor,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: '15%',
          itemWidth: 35,
          itemHeight: 9,
          itemGap: 25,
          selectedMode: false,
          textStyle: {
            fontSize: '14',
            color: this.chartColor.textColor
          },
          data: data.legends
        },
        series: [
          {
            name: data.name,
            type: 'pie',
            // selectedMode: 'single',
            radius: [120, 170],
            center: ['35%', '50%'],
            label: {
              normal: {
                show: false,
                position: 'center',
                formatter: '{b|{b}}\n{c|{c}' + data.unit + '}',
                rich: {
                  b: {
                    fontSize: 28,
                    lineHeight: 33,
                    color: '#00d7e9'
                  },
                  c: {
                    fontSize: 28,
                    padding: [8, 0],
                    color: '#00d7e9'
                  }
                }
              },
              emphasis: {
                show: true //文字至于中间时，这里需为true
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                color: function(params) {
                  let colorList = [
                    '#2072ed',
                    '#ff7723',
                    '#8e30ff',
                    '#23fddc',
                    '#2a885c',
                    '#d0fbff',
                    '#fed700',
                    '#96ff00',
                    '#ff89e5',
                    '#ffb0b0',
                    '#e8395d'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            },
            data: data.list
          }
        ]
      }
      chart.clear()
      chart.setOption(option)
      this.pieSelected(chart, data.list, this.cityName)
    },
    // 饼图选中指定扇形区域
    pieSelected(target, data, cityName) {
      let k = data.findIndex(function(value, index, arr) {
        return value.name === cityName
      })
      target.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: k
      })
      target.on('mouseover', function(e) {
        if (e.dataIndex != k) {
          target.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: k
          })
        }
      })
      target.on('mouseout', function(e) {
        target.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: k
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './cityEnvironmental.scss';
</style>
