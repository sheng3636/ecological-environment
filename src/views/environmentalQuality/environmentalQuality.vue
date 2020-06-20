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
                @click="imagesModalOpenFn('sideItem1_0',chartArr.sideItem1_0.title,sideItem1_0Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0','bar',sideItem1_0Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0','line',sideItem1_0Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
                @click="imagesModalOpenFn('sideItem1_1',chartArr.sideItem1_1.title,sideItem1_1Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_1','bar',sideItem1_1Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_1','line',sideItem1_1Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1020" id="sideItem1_1"></div>
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
                @click="imagesModalOpenFn('sideItem1_2',chartArr.sideItem1_2.title,sideItem1_2Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_2','bar',sideItem1_2Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_2','line',sideItem1_2Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
                @click="imagesModalOpenFn('sideItem1_3',chartArr.sideItem1_3.title,sideItem1_3Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_3','bar',sideItem1_3Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_3','line',sideItem1_3Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
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
                @click="imagesModalOpenFn('sideItem1_4',chartArr.sideItem1_4.title,sideItem1_4Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_4','bar',sideItem1_4Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_4','line',sideItem1_4Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
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
                @click="imagesModalOpenFn('sideItem1_5',chartArr.sideItem1_5.title,sideItem1_5Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_5','bar',sideItem1_5Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_5','line',sideItem1_5Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
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
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_6','line',sideItem1_6Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
                  @click="imagesModalOpenFn('sideItem1_7',chartArr.sideItem1_7.title,sideItem1_7Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_7','bar',sideItem1_7Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_7','line',sideItem1_7Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width910" id="sideItem1_7"></div>
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
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem1_8','line',sideItem1_8Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width910" id="sideItem1_8"></div>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <h5>数据来源：{{chartArr.sideItem1_7.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_7.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1845">
          <h4 class="moudleTitle">
            <span class="left">台州市各省控断面水质类型</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img @click="exportType" class="optionImg" src="@/assets/images/exportIcon.png">
            </p>
          </h4>
          <ul class="tableWrap">
            <li v-for="(item,index) in tableData" :key="index + 'a'">
              <p class="th">{{item.name}}</p>
              <span v-for="(val,i) in item.list" :key="i + 'b'">{{val}}</span>
              <span v-for="k in typeLengthMax - item.list.length" :key="k + 'c'"></span>
            </li>
          </ul>
          <div class="resultWrap">
            <h5>数据来源：省生态环境厅</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="tableDataResult"></p>
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
                @click="imagesModalOpenFn('sideItem2_0',chartArr.sideItem2_0.title,sideItem2_0Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0','bar',sideItem2_0Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0','line',sideItem2_0Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem2_1',chartArr.sideItem2_1.title,sideItem2_1Chart)"
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
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2',chartArr.sideItem2_2.title,sideItem2Chart)"
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
                @click="imagesModalOpenFn('sideItem2_3',chartArr.sideItem2_3.title,sideItem2_3Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_3','bar',sideItem2_3Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_3','line',sideItem2_3Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
                @click="imagesModalOpenFn('sideItem2_4',chartArr.sideItem2_4.title,sideItem2_4Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_4','bar',sideItem2_4Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_4','line',sideItem2_4Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_5',chartArr.sideItem2_5.title,sideItem2_5Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_5','bar',sideItem2_5Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_5','line',sideItem2_5Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
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
          <div class="sideItem width1020 sideItem3_0">
            <h4 class="moudleTitle">
              <span class="left">2015-2018台州市化学需氧量排放总量变化</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_0','2015-2018台州市化学需氧量排放总量变化',sideItem3_0Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_0','bar',sideItem3_0Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_0','line',sideItem3_0Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_0"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_0.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_1">
            <h4 class="moudleTitle">
              <span class="left"> 2018年全省各地市化学需氧量排放总量</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_1',' 2018年全省各地市化学需氧量排放总量',sideItem3_1Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_1','bar',sideItem3_1Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_1','line',sideItem3_1Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_1"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_1.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_2">
            <h4 class="moudleTitle">
              <span class="left">2018年全省各地市化学需氧量排放总量占比</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_2','2018年全省各地市化学需氧量排放总量占比',sideItem3_2Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_2','bar',sideItem3_2Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_2','line',sideItem3_2Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_2"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_2.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_3">
            <h4 class="moudleTitle">
              <span class="left"> 2018年全省各地市化学需氧量排放强度</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_3',' 2018年全省各地市化学需氧量排放强度',sideItem3_3Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_3','bar',sideItem3_3Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_3','line',sideItem3_3Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_3"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_3.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p>2018年台州市化学需氧量排放量比2015年减少（增加）<span class="light">{{200}}%</span>吨，排放总量占全省的<span
                  class="light">{{10}}</span>%，排放强度高于全省平均水平<span
                  class="light">{{17.5}}</span>%，需加大减排力度（如果是“排放强度低于全省平均水平XX%”）。</p>
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
              <span class="left">2018年全省各地市氨氮排放总量</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_4','2018年全省各地市氨氮排放总量',sideItem3_4Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_4','bar',sideItem3_4Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_4','line',sideItem3_4Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_4"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_4.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_5">
            <h4 class="moudleTitle">
              <span class="left"> 2015-2018台州市氨氮排放总量变化</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_5',' 2015-2018台州市氨氮排放总量变化',sideItem3_5Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_5','bar',sideItem3_5Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_5','line',sideItem3_5Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_5"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_5.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_6">
            <h4 class="moudleTitle">
              <span class="left"> 2018年全省各地市氨氮排放总量占比</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_6',' 2018年全省各地市氨氮排放总量占比',sideItem3_6Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_6','bar',sideItem3_6Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_6','line',sideItem3_6Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_6"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_6.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_7">
            <h4 class="moudleTitle">
              <span class="left"> 2018年全省各地市氨氮排放强度</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_7',' 2018年全省各地市氨氮排放强度',sideItem3_7Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_7','bar',sideItem3_7Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_7','line',sideItem3_7Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_7"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_7.dataSource}}</h5>
          </div>
          <div class="resultWrap" style="width: 100%;">
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p>2018年台州市氨氮排放量比2015年减少（增加）<span class="light">{{200}}</span>吨，排放总量占全省的<span
                  class="light">{{10}}</span>%，排放强度高于全省平均水平<span
                  class="light">{{17.5}}</span>%，需加大减排力度（如果是“排放强度低于全省平均水平XX%”）。</p>
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
              <span class="left">2018年全省各地市二氧化硫排放总量</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_8','2018年全省各地市二氧化硫排放总量',sideItem3_8Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_8','bar',sideItem3_8Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_8','line',sideItem3_8Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_8"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_8.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_9">
            <h4 class="moudleTitle">
              <span class="left">2015-2018台州市二氧化硫排放总量变化</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_9','  2015-2018台州市二氧化硫排放总量变化',sideItem3_9Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_9','bar',sideItem3_9Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_9','line',sideItem3_9Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_9"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_9.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_10">
            <h4 class="moudleTitle">
              <span class="left">2018年全省各地市二氧化硫排放总量占比</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_10','  2018年全省各地市二氧化硫排放总量占比',sideItem3_10Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_10','bar',sideItem3_10Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_10','line',sideItem3_10Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_10"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_10.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_11">
            <h4 class="moudleTitle">
              <span class="left">2018年全省各地市二氧化硫排放强度</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_11','  2018年全省各地市二氧化硫排放强度',sideItem3_11Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_11','bar',sideItem3_11Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_11','line',sideItem3_11Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_11"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_11.dataSource}}</h5>
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
              <span class="left">2018年全省各地市氮氧化物排放总量</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_12','2018年全省各地市氮氧化物排放总量',sideItem3_12Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_12','bar',sideItem3_12Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_12','line',sideItem3_12Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_12"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_12.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_13">
            <h4 class="moudleTitle">
              <span class="left">2018年全省各地市氮氧化物排放总量</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_13','2018年全省各地市氮氧化物排放总量',sideItem3_13Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_13','bar',sideItem3_13Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_13','line',sideItem3_13Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_13"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_13.dataSource}}</h5>
          </div>
          <div class="sideItem width800 sideItem3_14">
            <h4 class="moudleTitle">
              <span class="left">2018年全省各地市氮氧化物排放总量占比</span>
              <p class="optionGroup">
                <img class="optionImg"
                  @click="imagesModalOpenFn('sideItem3_14','2018年全省各地市氮氧化物排放总量占比',sideItem3_14Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_14','bar',sideItem3_14Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_14','line',sideItem3_14Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width800" id="sideItem3_14"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_14.dataSource}}</h5>
          </div>
          <div class="sideItem width1020 sideItem3_15">
            <h4 class="moudleTitle">
              <span class="left">2018年全省各地市氮氧化物排放强度</span>
              <p class="optionGroup">
                <img class="optionImg" @click="imagesModalOpenFn('sideItem3_15','2018年全省各地市氮氧化物排放强度',sideItem3_15Chart)"
                  src="@/assets/images/downImgIcon.png">
                <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                  <span class="el-dropdown-link">
                    <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_15','bar',sideItem3_15Chart)">
                      <img class="chartIcon" src="@/assets/images/lineIcon.png">
                      <span class="txt">柱状图样式</span>
                    </el-dropdown-item>
                    <el-dropdown-item :command="beforeHandleCommand('sideItem3_15','line',sideItem3_15Chart)" divided>
                      <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                      <span class="txt">折线图样式</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </h4>
            <div class="sideItemChart width1020" id="sideItem3_15"></div>
            <h5 class="dataSourceTxt">数据来源：{{sideItem3_15.dataSource}}</h5>
          </div>
        </div>
      </div>
      <div class="mainWrap" style="margin-top: 30px;" v-show="routerActive === 4">
        <div class="sideItem width1845 sideItem4_0">
          <h4 class="moudleTitle">
            <span class="left">2015-2018各地市生态环境状况指数</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem4_0','2015-2018各地市生态环境状况指数',sideItem4_0Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_0','bar',sideItem4_0Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_0','line',sideItem4_0Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1845" id="sideItem4_0"></div>
          <div class="resultWrap">
            <h5>数据来源：{{sideItem4_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p>2018年台州市生态环境状况等级为<span class="light">优</span>，EI值在全省排第<span class="light">2</span>2位，较2015年下降<span
                  class="light">20</span>%。</p>
            </div>
          </div>
        </div>
        <div class="sideItem width1845 sideItem4_1">
          <h4 class="moudleTitle">
            <span class="left">2015-2018台州市各县市区生态环境状况指数</span>
            <p class="optionGroup">
              <img class="optionImg"
                @click="imagesModalOpenFn('sideItem4_1','2015-2018台州市各县市区生态环境状况指数',sideItem4_1Chart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown class="chartDropdown" trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_1','bar',sideItem4_1Chart)">
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_1','line',sideItem4_1Chart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1845" id="sideItem4_1"></div>
        </div>
        <div class="sideItem width1845 sideItem4_2">
          <h4 class="moudleTitle">
            <span class="left">2018年台州市各县市区生态环境状况等级和省内排名</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img @click="exportExcel" class="optionImg" src="@/assets/images/exportIcon.png">
            </p>
          </h4>
          <div class="tableWrap">
            <el-table :data="EIList" fit>
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
            </el-table>
          </div>
        </div>
        <div class="twoWrap">
          <div class="sideItem sideItem4_3">
            <h4 class="moudleTitle">
              <span class="left"> 2018年全省各县市区生态环境状况指数</span>
              <p class="optionGroup" style="justify-content: flex-end;">
                <img class="optionImg" src="@/assets/images/downImgIcon.png">
              </p>
            </h4>
            <div class="sideItemChart" id="sideItem4_3"></div>
          </div>
          <div class="rightResultWrap">
            <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
            2018年仙居县EI指数等级为优，EI指数值在台州市排第X位，在浙江省排第XX位。</div>
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

    <el-dialog title="图片下载" :visible.sync="imagesVisi" width="55%" custom-class="imagesWrap" center
      :close-on-click-modal="false" :close-on-press-escape="false">
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
  </div>
</template>

<script>
import { savePic, exportWord } from '@/api/environmentalQuality'
import mUtilsFn from '@/utils/mUtils.js'
import { finishMixin } from '@/utils/finishMixin.js'
import { environmentalQualityMixin } from '@/utils/environmentalQualityMixin.js'
import { ecologicaleResourcesMixin } from '@/utils/ecologicaleResourcesMixin.js'
import { emissionsMixin } from '@/utils/emissionsMixin.js'
import { environmentStateMixin } from '@/utils/environmentStateMixin.js'

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
      cityName: '台州市', // 被分析城市
      routerActive: 2, // 选中模块
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
          num: 1,
          title: '',
          name: '',
          chartType: 'line',
          color: '#ff5975',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_1: {
          id: 'sideItem1_1',
          num: 2,
          title: '2018年各地市空气质量达到优良天数比例对比',
          name: '',
          chartType: 'bar',
          color: '#00976d',
          lightColor: '#00ffb8',
          dataSource: '',
          result: '',
          avg: 0,
          xAxis: [],
          yAxis: []
        },
        sideItem1_2: {
          id: 'sideItem1_2',
          num: 3,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#e19605',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_3: {
          id: 'sideItem1_3',
          num: 4,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#b062ff',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_4: {
          id: 'sideItem1_4',
          num: 5,
          title: '',
          name: '',
          chartType: 'bar',
          lightColor: '#00ffff',
          color: '#00afaf',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_5: {
          id: 'sideItem1_5',
          num: 6,
          title: '',
          name: 'M2.5浓度（µg/m3）',
          chartType: 'line',
          color: '#b062ff',
          result: '',
          xAxis: [],
          yAxis: []
        },
        sideItem1_6: {
          id: 'sideItem1_6',
          num: 7,
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
          num: 8,
          title: '',
          name: 'Ⅲ以上水质断面比例（省控断面）%',
          chartType: 'bar',
          color: '#00ffb8',
          lightColor: '#00976d',
          dataSource: '',
          result: '',
          xAxis: [],
          yAxis1: []
        },
        sideItem1_8: {
          id: 'sideItem1_8',
          hidden: true,
          num: 9,
          title: '',
          name1: '',
          name2: '',
          name3: '',
          name4: '',
          name5: '',
          name6: '',
          chartType: 'bar',
          color1: '#ff9f7f',
          color2: '#67e0e3',
          color3: '#37a2da',
          color4: '#e062ae',
          color5: '#a44bff',
          color6: '#ffdb5c',
          xAxis: [],
          yAxis1: [],
          yAxis2: [],
          yAxis3: [],
          yAxis4: [],
          yAxis5: [],
          yAxis6: []
        },
        sideItem2_0: {
          id: 'sideItem2_0',
          num: 9,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#5c2700',
          dataSource: '',
          result: '根据2015年调查数据，台州市森林覆盖率<span class="light">59.89%</span>，在全省11地市中排第<span class="light">四</span>位，<span class="light">高于</span>全省平均水平。',
          xAxis: [],
          yAxis: []
        },
        sideItem2_1: {
          id: 'sideItem2_1',
          num: 10,
          title: '',
          name: '',
          chartType: 'bar',
          dataSource: '',
          result: '2015年台州市活立木蓄积量为<span class="light">2929</span>万立方米，占全省的<span class="light">9</span>%。',
          list: [],
          legends: []
        },
        sideItem2_2: {
          id: 'sideItem2_2',
          num: 11,
          title: '',
          name: '',
          chartType: 'bar',
          dataSource: '',
          result: '根据2015年调查数据，台州市林地面积为<span class="light">63.02</span>万公顷，占全省的<span class="light">9</span>%。',
          list: [],
          legends: []
        },
        sideItem2_3: {
          id: 'sideItem2_3',
          num: 12,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#007621',
          dataSource: '',
          result: '根据2015年调查数据，台州市单位面积森林蓄积量为<span class="light">47.6</span>（立方米/公顷），在全省11地市中排第<span class="light">四</span>位，<span class="light">高于</span>全省平均水平。',
          xAxis: [],
          yAxis: []
        },
        sideItem2_4: {
          id: 'sideItem2_4',
          num: 13,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#ff00ff',
          dataSource: '',
          result: '台州市下辖各县市中，仙居县森林覆盖率最高，达到<span class="light">79.54</span>%，温岭市最低，为<span class="light">31.04</span>%。',
          xAxis: [],
          yAxis: []
        },
        sideItem2_5: {
          id: 'sideItem2_5',
          num: 14,
          title: '',
          name: '',
          chartType: 'bar',
          color: '#00f6ff',
          dataSource: '',
          result: '台州市下辖各县市中，市区的单位面积森林蓄积量最高，达到<span class="light">71.76</span>立方米/公顷，玉环市最低，为<span class="light">35.94</span>立方米/公顷。',
          xAxis: [],
          yAxis: []
        }
      }
    }
  },
  mounted() {},
  methods: {
    // 颜色选择器背景颜色值发生变化
    backgroundColorChange(color) {
      this.chartColor.backgroundColor = color
      this.fnName('echartsWrap1', this.chartArr[this.whichEchart])
    },
    // 颜色选择器文字颜色值发生变化
    textColorChange(color) {
      this.chartColor.textColor = color
      this.fnName('echartsWrap1', this.chartArr[this.whichEchart])
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
      if (this.routerActive === 1) {
        this.chartArr[command.id].chartType = command.type
        command.fnName(command.id, this.chartArr[command.id])
      } else {
        this[command.id].chartType = command.type
        command.fnName(command.id, this[command.id])
      }
    },
    // 对command参数进行重新封装成一个对象
    beforeHandleCommand(command1, command2, command3) {
      return {
        id: command1,
        type: command2,
        fnName: command3
      }
    },
    // 打开保存图片弹窗并渲染图表
    imagesModalOpenFn(val, imagesName, fnName) {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesName = imagesName
      this.whichEchart = val
      this.imagesVisi = true
      this.fnName = fnName

      this.$nextTick(() => {
        fnName('echartsWrap1', this.chartArr[val])
      })
    },
    // 关闭保存图片弹窗
    imagesModalCloseFn() {
      this.chartColor.backgroundColor = 'rgba(0,0,0,0)'
      this.chartColor.textColor = '#fff'
      this.imagesVisi = false
    },
    // 下载文档
    downloadDoc() {
      let downloadArr1 = []
      let baseURlArr = []
      let aaa = []
      for (let i in this.chartArr) {
        let chart = this.$echarts.init(
          document.getElementById(this.chartArr[i].id)
        )
        baseURlArr[i] = chart.getDataURL()
        // downloadArr1.push({
        //   num: this.chartArr[i].num,
        //   title: this.chartArr[i].title,
        //   source: this.chartArr[i].dataSource,
        //   baseURl: baseURlArr[i]
        // })
        savePic({
          picInfo: baseURlArr[i],
          no: 'no' + this.chartArr[i].num,
          type: 'ecology-city',
          area: this.cityName
        }).then(res => {})
      }
      for (let k in this.chartArr) {
        if (!this.chartArr[k].hidden) {
          aaa.push(
            {
              name: 'title' + this.chartArr[k].num,
              value: this.chartArr[k].title
            },
            {
              name: 'verdict' + this.chartArr[k].num,
              value: this.chartArr[k].result
            },
            {
              name: 'source' + this.chartArr[k].num,
              value: this.chartArr[k].dataSource
            }
          )
        }
      }
      console.log(aaa);
      
      // window.open(
      //   'http://192.168.13.251:8083/section/exportWord?area=' +
      //     this.cityName +
      //     '&type=ecology-city&condition=' +
      //     encodeURIComponent(JSON.stringify(aaa)),
      //   '_self'
      // )
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
        k = e.dataIndex
        target.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: e.dataIndex
        })
      })
    },
    // 导航栏点击事件
    routerFn(index) {
      this.routerActive = index
      document.body.scrollTop = 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import './environmentalQuality.scss';
</style>
