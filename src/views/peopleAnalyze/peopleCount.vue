<template>
  <div class="bodyMain">
    <nav class="navTopArea">
      <div class="navLeft">
        <img src="@/assets/images/nav/logo.png">
        <span v-show="routerActive === 1">{{cityName}}人口总量分析</span>
        <span v-show="routerActive === 2">{{cityName}}人口结构分析</span>
        <span v-show="routerActive === 3">{{cityName}}人口分布分析</span>
        <span v-show="routerActive === 4">{{cityName}}人口迁移分析</span>
        <span v-show="routerActive === 5">{{cityName}}人口联系分析</span>
      </div>
      <ul class="navRight">
        <li :class="{navActive:routerActive === 1}" @click="routerFn(1)">
          <el-tooltip class="item" effect="dark" content="人口总量分析" placement="top">
            <div>
              <img src="@/assets/images/peopleAnalyze/nav/navTopIcon1.png">
              <span v-if="routerActive === 1">人口总量</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 2}" @click="routerFn(2)">
          <el-tooltip class="item" effect="dark" content="人口结构分析" placement="top">
            <div>
              <img src="@/assets/images/peopleAnalyze/nav/navTopIcon2.png">
              <span v-if="routerActive === 2">人口结构</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 3}" @click="routerFn(3)">
          <el-tooltip class="item" effect="dark" content="人口分布分析" placement="top">
            <div>
              <img src="@/assets/images/peopleAnalyze/nav/navTopIcon3.png">
              <span v-if="routerActive === 3">人口分布</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 4}" @click="routerFn(4)">
          <el-tooltip class="item" effect="dark" content="人口迁移分析" placement="top">
            <div>
              <img src="@/assets/images/peopleAnalyze/nav/navTopIcon4.png">
              <span v-if="routerActive === 4">人口迁移</span>
            </div>
          </el-tooltip>
        </li>
        <li :class="{navActive:routerActive === 5}" @click="routerFn(5)">
          <el-tooltip class="item" effect="dark" content="人口联系分析" placement="top">
            <div>
              <img src="@/assets/images/peopleAnalyze/nav/navTopIcon5.png">
              <span v-if="routerActive === 5">人口联系</span>
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
            <span class="txt">人口总量分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width1020 sideItem1_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_0',chartArr.sideItem1_0.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_0',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1020" id="sideItem1_0"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width800 sideItem1_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_1.title}}</span>
            <p class="optionGroup" style="justify-content: flex-end;">
              <img class="optionImg" src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width800" id="sideItem1_1"></div>
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">常驻人口定义：基于浙江省中国移动手机信令数据，以30天为窗口，每天滚动计算一次，<br />若职住模型识别的居住地连续6个月属于同一个地市/县（市，区）
              ，<br />则判断此人为该地市/县（市，区）的常驻人口，否则为流动人口。</div>
            <span class="peopleTip">常驻人口</span>
          </el-tooltip>
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_2',chartArr.sideItem1_2.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_2',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_2',['line','line'],barLineChart)" divided>
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_3',chartArr.sideItem1_3.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_3',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_3',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_4',chartArr.sideItem1_4.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_4',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_4',['line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_5',chartArr.sideItem1_5.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_5',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_5',['line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
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
        <div class="sideItem width910 sideItem1_6">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_6.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_6',chartArr.sideItem1_6.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_6',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_6',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_6',['bar','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon1.png">
                    <span class="txt">柱状图+折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem1_6"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_6.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_6.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem1_7">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_7.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_7',chartArr.sideItem1_7.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_7',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_7',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_7',['bar','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon1.png">
                    <span class="txt">柱状图+折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem1_7"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_7.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_7.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width1845 sideItem1_8">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem1_8.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem1_8',chartArr.sideItem1_8.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_8',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_8',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem1_8',['bar','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon1.png">
                    <span class="txt">柱状图+折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width1845" id="sideItem1_8"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem1_8.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem1_8.result"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" v-show="routerActive === 2">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">人口结构分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width600 sideItem2_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_0',chartArr.sideItem2_0.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_0',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem2_0"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width600 sideItem2_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_1',chartArr.sideItem2_1.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
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
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_1',['bar','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/barLineIcon1.png">
                    <span class="txt">柱状图+折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem2_1"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_1.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width600 sideItem2_2">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_2.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_2',chartArr.sideItem2_2.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_2',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_2',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem2_2"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_2.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_2.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem2_3">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_3.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_3',chartArr.sideItem2_3.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_3',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_3',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_3"></div>
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_4',chartArr.sideItem2_4.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_4',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_4',['line'],barLineChart)" divided>
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
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_5',chartArr.sideItem2_5.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_5',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_5',['line'],barLineChart)" divided>
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
        <div class="sideItem width910 sideItem2_6">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_6.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_6',chartArr.sideItem2_6.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_6',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_6',['line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_6"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_6.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_6.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem2_7">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_7.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_7',chartArr.sideItem2_7.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_7',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_7',['line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_7"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_7.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_7.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem2_8">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem2_8.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem2_8',chartArr.sideItem2_8.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_8',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem2_8',['line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem2_8"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem2_8.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem2_8.result"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="mainWrap" v-show="routerActive === 3">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">人口分布分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width600 sideItem3_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem3_0',chartArr.sideItem3_0.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem3_0"></div>
        </div>
        <div class="sideItem width600 sideItem3_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem3_1',chartArr.sideItem3_1.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem3_1"></div>
        </div>
        <div class="sideItem width600 sideItem3_2">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_2.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem3_2',chartArr.sideItem3_2.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem3_2"></div>
        </div>
        <div class="sideItem width600 sideItem3_3">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_3.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem3_3',chartArr.sideItem3_3.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem3_3"></div>
        </div>
        <div class="sideItem width600 sideItem3_4">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem3_4.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem3_4',chartArr.sideItem3_4.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
            </p>
          </h4>
          <div class="sideItemChart width600" id="sideItem3_4"></div>
        </div>
        <div class="sideItem width600">
          <div class="sideItemChart width600"></div>
        </div>
      </div>

      <div class="mainWrap" v-show="routerActive === 4">
        <div class="CuttingLine">
          <p class="txtWrap">
            <img src="@/assets/images/cuttingLine1.png">
            <span class="txt">人口迁移分析</span>
            <img src="@/assets/images/cuttingLine2.png">
          </p>
        </div>
        <div class="sideItem width910 sideItem4_0">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_0.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem4_0',chartArr.sideItem4_0.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_0',['bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_0',['line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem4_0"></div>
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">净流入或净允许由当年常住人口增量和自然增长人数获得，转换正数为“净流入”，负数为“净容许”。</div>
            <span class="peopleTip">人口净流入</span>
          </el-tooltip>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem4_0.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem4_0.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem4_1">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_1.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem4_1',chartArr.sideItem4_1.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_1',['bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_1',['line','line'],barLineChart)" divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem4_1"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem4_1.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem4_1.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem4_2">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_2.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem4_2',chartArr.sideItem4_2.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_2',['bar','bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_2',['line','line','line'],barLineChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem4_2"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem4_2.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem4_2.result"></p>
            </div>
          </div>
        </div>
        <div class="sideItem width910 sideItem4_3">
          <h4 class="moudleTitle">
            <span class="left">{{chartArr.sideItem4_3.title}}</span>
            <p class="optionGroup">
              <img class="optionImg" @click="imagesModalOpenFn('sideItem4_3',chartArr.sideItem4_3.title,barLineChart)"
                src="@/assets/images/downImgIcon.png">
              <el-dropdown trigger="click" @command="chartTypeClick">
                <span class="el-dropdown-link">
                  <img class="optionImg" src="@/assets/images/echartTypeIcon.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_3',['bar','bar','bar'],barLineChart)">
                    <img class="chartIcon" src="@/assets/images/barLineIcon.png">
                    <span class="txt">柱状图样式</span>
                  </el-dropdown-item>
                  <el-dropdown-item :command="beforeHandleCommand('sideItem4_3',['line','line','line'],barLineChart)"
                    divided>
                    <img class="chartIcon" src="@/assets/images/lineIcon.png">
                    <span class="txt">折线图样式</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </h4>
          <div class="sideItemChart width910" id="sideItem4_3"></div>
          <div class="resultWrap">
            <h5>数据来源：{{chartArr.sideItem4_3.dataSource}}</h5>
            <div class="content">
              <span class="fourIcon" v-for="(item,index) in 4" :key="index" :class="'fourIcon' + index"></span>
              <p v-html="chartArr.sideItem4_3.result"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="mainWrap" v-show="routerActive === 5">
        <div class="sideItemChart width910" id="people5Map1"></div>
        <div class="sideItemChart width910" id="people5Map2"></div>
        <div class="sideItemChart width910" id="people5Map3"></div>
        <div class="sideItemChart width910" id="people5Map4"></div>
        <div class="sideItemChart width910" id="people5Map5"></div>
        <div class="sideItemChart width910" id="people5Map6"></div>
      </div>
    </div>
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
    <ul class="navBottomArea">
      <li :class="{active:routerActive === 1}" @click="routerFn(1)">
        <img v-if="routerActive === 1" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 1" src="@/assets/images/peopleAnalyze/nav/navBottomIcon1-1.png">
        <img v-if="routerActive !== 1" src="@/assets/images/peopleAnalyze/nav/navBottomIcon1.png">
        <span>人口总量分析</span>
      </li>
      <li :class="{active:routerActive === 2}" @click="routerFn(2)">
        <img v-if="routerActive === 2" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 2" src="@/assets/images/peopleAnalyze/nav/navBottomIcon2-1.png">
        <img v-if="routerActive !== 2" src="@/assets/images/peopleAnalyze/nav/navBottomIcon2.png">
        <span>人口结构分析</span>
      </li>
      <li :class="{active:routerActive === 3}" @click="routerFn(3)">
        <img v-if="routerActive === 3" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 3" src="@/assets/images/peopleAnalyze/nav/navBottomIcon3-1.png">
        <img v-if="routerActive !== 3" src="@/assets/images/peopleAnalyze/nav/navBottomIcon3.png">
        <span>人口分布分析</span>
      </li>
      <li :class="{active:routerActive === 4}" @click="routerFn(4)">
        <img v-if="routerActive === 4" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 4" src="@/assets/images/peopleAnalyze/nav/navBottomIcon4-1.png">
        <img v-if="routerActive !== 4" src="@/assets/images/peopleAnalyze/nav/navBottomIcon4.png">
        <span>人口迁移分析</span>
      </li>
      <li :class="{active:routerActive === 5}" @click="routerFn(5)">
        <img v-if="routerActive === 5" class="activeImg" src="@/assets/images/nav/navBottomActiveIcon.png">
        <img v-if="routerActive === 5" src="@/assets/images/peopleAnalyze/nav/navBottomIcon4-1.png">
        <img v-if="routerActive !== 5" src="@/assets/images/peopleAnalyze/nav/navBottomIcon5.png">
        <span>人口联系分析</span>
      </li>
    </ul>
  </div>
</template>
<script>
import zhejiang from '../../../public/js/jsonData/zhejiang.json'
import hangzhou from '../../../public/js/jsonData/hangzhou.json'
import huzhou from '../../../public/js/jsonData/huzhou.json'
import jiaxing from '../../../public/js/jsonData/jiaxing.json'
import jinhua from '../../../public/js/jsonData/jinhua.json'
import lishui from '../../../public/js/jsonData/lishui.json'
import ningbo from '../../../public/js/jsonData/ningbo.json'
import quzhou from '../../../public/js/jsonData/quzhou.json'
import shaoxing from '../../../public/js/jsonData/shaoxing.json'
import taizhou from '../../../public/js/jsonData/taizhou.json'
import wenzhou from '../../../public/js/jsonData/wenzhou.json'
import zhoushan from '../../../public/js/jsonData/zhoushan.json'
import changsanjiao from '../../../public/js/jsonData/changsanjiao'
import csjPnt from '../../../public/js/jsonData/csj_pnt.json'
import mUtilsFn from '@/utils/mUtils.js'
import { finishMixin } from '@/utils/finishMixin.js'
import { peopleCountMixin } from '@/utils/peopleAnalyze/peopleCount.js'
import { structuraMixin } from '@/utils/peopleAnalyze/structura.js'
import { migrationMixin } from '@/utils/peopleAnalyze/migration.js'
import { distributionMixin } from '@/utils/peopleAnalyze/distribution.js'
import axios from 'axios'
import { getJenksBreaks } from '@/utils/mUtils.js'

export default {
  name: 'peopleCount',
  mixins: [
    finishMixin,
    peopleCountMixin,
    structuraMixin,
    distributionMixin,
    migrationMixin
  ],
  data() {
    return {
      cityName: '台州市',
      routerActive: 5,
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

      paramsBasic: {
        cityName1: null,
        cityName2: null,
        cityName3: null,
        cityName4: null,
        cityName5: null,
        parcent1: 'parcent1',
        parcent2: 'parcent2'
      },
      mapConfig: {
        浙江省: zhejiang,
        杭州市: hangzhou,
        湖州市: huzhou,
        嘉兴市: jiaxing,
        金华市: jinhua,
        丽水市: lishui,
        宁波市: ningbo,
        衢州市: quzhou,
        绍兴市: shaoxing,
        台州市: taizhou,
        温州市: wenzhou,
        舟山市: zhoushan,
        长三角: changsanjiao,
        长三角中心点: csjPnt
      },
      chartArr: {
        sideItem1_0: {
          id: 'sideItem1_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result: '',
          xAxis: [],
          barWidth: '40px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00baff',
              yAxis: [50, 20, 30, 40]
            },
            {
              name: '',
              chartType: 'bar',
              color: '#e3791b',
              yAxis: [30, 12, 40, 35]
            }
          ]
        },
        sideItem1_1: {
          id: 'sideItem1_1',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result: '',
          listObj: {
            timeLine: true,
            province: true,
            unit: '',
            data: {}
          }
        },
        sideItem1_2: {
          id: 'sideItem1_2',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result: '',
          xAxis: [],
          barWidth: '40px',
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#00c6ff',
              yAxis: [50, 20, 30, 40, 25]
            },
            {
              name: '',
              chartType: 'line',
              color: '#72ff00',
              yAxis: [30, 12, 40, 35, 40]
            }
          ]
        },
        sideItem1_3: {
          id: 'sideItem1_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '“十三五”以来，台州市常住人口增长率整体增幅小于全省平均水平,户籍人口增长率整体增幅小于全省平均水平。',
          xAxis: [],
          barWidth: '40px',
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#00c6ff',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#72ff00',
              yAxis: []
            }
          ]
        },
        sideItem1_4: {
          id: 'sideItem1_4',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年、2016年、2017年、2018年，台州市常住人口总量大于户籍人口总量,说明人口呈流入状态。',
          xAxis: [],
          barWidth: '40px',
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#ff3764',
              yAxis: []
            }
          ]
        },
        sideItem1_5: {
          id: 'sideItem1_5',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result: '2018年， 台州市常住与户籍人口比值在全省排名第9。',
          xAxis: [
            '宁波市',
            '嘉兴市',
            '台州市',
            '舟山市',
            '金华市',
            '湖州市',
            '绍兴市',
            '温州市',
            '台州市',
            '衢州市',
            '丽水市'
          ],
          barWidth: '30px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#8c0084',
              lightColor: '#ff28f2',
              yAxis: []
            }
          ]
        },
        sideItem1_6: {
          id: 'sideItem1_6',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年,台州市常住人口占全省总人口比重为10.7%， 居全省第4位。',
          xAxis: [],
          barWidth: '30px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#8c0084',
              lightColor: '#ff28f2',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#fffc00',
              lightColor: '#ff28f2',
              yAxis: []
            }
          ]
        },
        sideItem1_7: {
          id: 'sideItem1_7',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年,台州市常住人口占全省总人口比重为10.7%， 居全省第4位。',
          xAxis: [
            '宁波市',
            '嘉兴市',
            '台州市',
            '舟山市',
            '金华市',
            '湖州市',
            '绍兴市',
            '温州市',
            '台州市',
            '衢州市',
            '丽水市'
          ],
          barWidth: '30px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#732e00',
              lightColor: '#ff28f2',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#fffc00',
              lightColor: '#ff28f2',
              yAxis: []
            }
          ]
        },
        sideItem1_8: {
          id: 'sideItem1_8',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年,台州市常住人口占全省总人口比重为10.7%， 居全省第4位。',
          xAxis: [
            '宁波市',
            '嘉兴市',
            '台州市',
            '舟山市',
            '金华市',
            '湖州市',
            '绍兴市',
            '温州市',
            '台州市',
            '衢州市',
            '丽水市'
          ],
          barWidth: '30px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#732e00',
              lightColor: '#ff28f2',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#fffc00',
              lightColor: '#ff28f2',
              yAxis: []
            }
          ]
        },

        sideItem2_0: {
          id: 'sideItem2_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2016年“全面二孩”正式实施后，台州市的常住人口出生率有明显提高，但孕育高峰期很快于2017年到来，早于政策出台时的预期。2017年常住人口出生率0‰，比2015年年高0个千分点； 2018年常住人口出生率已明显回落，为0‰，比2017年低0个千分点。2015年-2018年台州市常住人口出生率每年平均0全省0个千分点。',
          xAxis: [],
          barWidth: '40px',
          chartArr: [
            {
              name: '',
              chartType: 'line',
              color: '#00ffff',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#fefb00',
              yAxis: []
            }
          ]
        },
        sideItem2_1: {
          id: 'sideItem2_1',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年，台州市的户籍劳动年龄人口（18-59岁）规模为0万人，占台州市户籍劳动人口总数0％，比2015年的劳动年龄人口规模0万人，占比0个人口。',
          xAxis: [],
          barWidth: '40px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00ff78',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#ff00f6',
              yAxis: []
            }
          ]
        },
        sideItem2_2: {
          id: 'sideItem2_2',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年，台州市的户籍劳动年龄人口（18-59岁）规模为0万人，占台州市户籍劳动人口总数0％，比2015年的劳动年龄人口规模0万人，占比0个人口。',
          xAxis: [],
          barWidth: '40px',
          stack: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#ef822b',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#55aeca',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#2b6cef',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#dabe00',
              yAxis: []
            }
          ]
        },
        sideItem2_3: {
          id: 'sideItem2_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年台州市60岁以上户籍老年人口为109.6729万人，到2018年已达到125.084万人， 2018年台州市60岁以上户籍老年人口占总人口的比重为20.66%， 进入中度老龄化阶段，比2015年增加了2.3个百分点， 较全省平均水平低1.8个百分点。 与全省各县（市、区）相比，台州市户籍老年人口规模和老龄化率分别排名第4位和第9位。',
          xAxis: ['2015', '2016', '2017', '2018'],
          barWidth: '40px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#2b6cef',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#f6ff00',
              yAxis: []
            }
          ]
        },
        sideItem2_4: {
          id: 'sideItem2_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年台州市60岁以上户籍老年人口为109.6729万人，到2018年已达到125.084万人， 2018年台州市60岁以上户籍老年人口占总人口的比重为20.66%， 进入中度老龄化阶段，比2015年增加了2.3个百分点， 较全省平均水平低1.8个百分点。 与全省各县（市、区）相比，台州市户籍老年人口规模和老龄化率分别排名第4位和第9位。',
          xAxis: [],
          barWidth: '40px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#83007b',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#f6ff00',
              yAxis: []
            }
          ]
        },
        sideItem2_5: {
          id: 'sideItem2_5',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年台州市60岁以上户籍老年人口为109.6729万人，到2018年已达到125.084万人， 2018年台州市60岁以上户籍老年人口占总人口的比重为20.66%， 进入中度老龄化阶段，比2015年增加了2.3个百分点， 较全省平均水平低1.8个百分点。 与全省各县（市、区）相比，台州市户籍老年人口规模和老龄化率分别排名第4位和第9位。',
          xAxis: [],
          barWidth: '40px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00eaff',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#f6ff00',
              yAxis: []
            }
          ]
        },
        sideItem2_6: {
          id: 'sideItem2_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年台州市60岁以上户籍老年人口为109.6729万人，到2018年已达到125.084万人， 2018年台州市60岁以上户籍老年人口占总人口的比重为20.66%， 进入中度老龄化阶段，比2015年增加了2.3个百分点， 较全省平均水平低1.8个百分点。 与全省各县（市、区）相比，台州市户籍老年人口规模和老龄化率分别排名第4位和第9位。',
          xAxis: [],
          barWidth: '40px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#fe9500',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#ff00b4',
              yAxis: []
            }
          ]
        },
        sideItem2_7: {
          id: 'sideItem2_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年台州市60岁以上户籍老年人口为109.6729万人，到2018年已达到125.084万人， 2018年台州市60岁以上户籍老年人口占总人口的比重为20.66%， 进入中度老龄化阶段，比2015年增加了2.3个百分点， 较全省平均水平低1.8个百分点。 与全省各县（市、区）相比，台州市户籍老年人口规模和老龄化率分别排名第4位和第9位。',
          xAxis: [],
          barWidth: '40px',
          doubleYxis: true,
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00ffb4',
              yAxis: []
            },
            {
              name: '',
              chartType: 'line',
              color: '#e3791b',
              yAxis: []
            }
          ]
        },
        sideItem2_8: {
          id: 'sideItem2_8',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2015年台州市60岁以上户籍老年人口为109.6729万人，到2018年已达到125.084万人， 2018年台州市60岁以上户籍老年人口占总人口的比重为20.66%， 进入中度老龄化阶段，比2015年增加了2.3个百分点， 较全省平均水平低1.8个百分点。 与全省各县（市、区）相比，台州市户籍老年人口规模和老龄化率分别排名第4位和第9位。',
          xAxis: [],
          barWidth: '40px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#e4007f',
              yAxis: []
            }
          ]
        },

        sideItem3_0: {
          id: 'sideItem3_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '2015-2018年常住人口',
          dataSource: '',
          listObj: {
            unit: '单位：万人',
            data: {
              '2015': [
                {
                  name: '温岭市',
                  value: '101.53'
                },
                {
                  name: '临海市',
                  value: '119.57'
                },
                {
                  name: '黄岩区',
                  value: '61.01'
                },
                {
                  name: '天台县',
                  value: '59.37'
                },
                {
                  name: '椒江区',
                  value: '52.99'
                },
                {
                  name: '仙居县',
                  value: '50.60'
                },
                {
                  name: '路桥区',
                  value: '45.30'
                },
                {
                  name: '三门县',
                  value: '44.11'
                },
                {
                  name: '玉环市',
                  value: '43.02'
                }
              ],
              '2016': [
                {
                  name: '温岭市',
                  value: '128.67'
                },
                {
                  name: '临海市',
                  value: '119.99'
                },
                {
                  name: '黄岩区',
                  value: '61.10'
                },
                {
                  name: '天台县',
                  value: '59.85'
                },
                {
                  name: '椒江区',
                  value: '53.51'
                },
                {
                  name: '仙居县',
                  value: '51.03'
                },
                {
                  name: '路桥区',
                  value: '45.49'
                },
                {
                  name: '三门县',
                  value: '44.36'
                },
                {
                  name: '玉环市',
                  value: '43.18'
                }
              ],
              '2017': [
                {
                  name: '温岭市',
                  value: '152.01'
                },
                {
                  name: '临海市',
                  value: '120.36'
                },
                {
                  name: '黄岩区',
                  value: '61.34'
                },
                {
                  name: '天台县',
                  value: '60.20'
                },
                {
                  name: '椒江区',
                  value: '54.28'
                },
                {
                  name: '仙居县',
                  value: '51.50'
                },
                {
                  name: '路桥区',
                  value: '45.81'
                },
                {
                  name: '三门县',
                  value: '44.66'
                },
                {
                  name: '玉环市',
                  value: '43.39'
                }
              ],
              '2018': [
                {
                  name: '温岭市',
                  value: '222.14'
                },
                {
                  name: '临海市',
                  value: '120.49'
                },
                {
                  name: '黄岩区',
                  value: '61.52'
                },
                {
                  name: '天台县',
                  value: '60.25'
                },
                {
                  name: '椒江区',
                  value: '54.97'
                },
                {
                  name: '仙居县',
                  value: '51.47'
                },
                {
                  name: '路桥区',
                  value: '46.01'
                },
                {
                  name: '三门县',
                  value: '44.75'
                },
                {
                  name: '玉环市',
                  value: '43.53'
                }
              ]
            }
          }
        },
        sideItem3_1: {
          id: 'sideItem3_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '2015-2018年户籍人口',
          dataSource: '',
          listObj: {
            unit: '单位：万人',
            data: {
              '2015': [
                {
                  name: '温岭市',
                  value: '101.53'
                },
                {
                  name: '临海市',
                  value: '119.57'
                },
                {
                  name: '黄岩区',
                  value: '61.01'
                },
                {
                  name: '天台县',
                  value: '59.37'
                },
                {
                  name: '椒江区',
                  value: '52.99'
                },
                {
                  name: '仙居县',
                  value: '50.60'
                },
                {
                  name: '路桥区',
                  value: '45.30'
                },
                {
                  name: '三门县',
                  value: '44.11'
                },
                {
                  name: '玉环市',
                  value: '43.02'
                }
              ],
              '2016': [
                {
                  name: '温岭市',
                  value: '128.67'
                },
                {
                  name: '临海市',
                  value: '119.99'
                },
                {
                  name: '黄岩区',
                  value: '61.10'
                },
                {
                  name: '天台县',
                  value: '59.85'
                },
                {
                  name: '椒江区',
                  value: '53.51'
                },
                {
                  name: '仙居县',
                  value: '51.03'
                },
                {
                  name: '路桥区',
                  value: '45.49'
                },
                {
                  name: '三门县',
                  value: '44.36'
                },
                {
                  name: '玉环市',
                  value: '43.18'
                }
              ],
              '2017': [
                {
                  name: '温岭市',
                  value: '152.01'
                },
                {
                  name: '临海市',
                  value: '120.36'
                },
                {
                  name: '黄岩区',
                  value: '61.34'
                },
                {
                  name: '天台县',
                  value: '60.20'
                },
                {
                  name: '椒江区',
                  value: '54.28'
                },
                {
                  name: '仙居县',
                  value: '51.50'
                },
                {
                  name: '路桥区',
                  value: '45.81'
                },
                {
                  name: '三门县',
                  value: '44.66'
                },
                {
                  name: '玉环市',
                  value: '43.39'
                }
              ],
              '2018': [
                {
                  name: '温岭市',
                  value: '222.14'
                },
                {
                  name: '临海市',
                  value: '120.49'
                },
                {
                  name: '黄岩区',
                  value: '61.52'
                },
                {
                  name: '天台县',
                  value: '60.25'
                },
                {
                  name: '椒江区',
                  value: '54.97'
                },
                {
                  name: '仙居县',
                  value: '51.47'
                },
                {
                  name: '路桥区',
                  value: '46.01'
                },
                {
                  name: '三门县',
                  value: '44.75'
                },
                {
                  name: '玉环市',
                  value: '43.53'
                }
              ]
            }
          }
        },
        sideItem3_2: {
          id: 'sideItem3_2',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          listObj: {
            unit: '单位：万人',
            data: {
              '2015': [
                {
                  name: '温岭市',
                  value: '101.53'
                },
                {
                  name: '临海市',
                  value: '119.57'
                },
                {
                  name: '黄岩区',
                  value: '61.01'
                },
                {
                  name: '天台县',
                  value: '59.37'
                },
                {
                  name: '椒江区',
                  value: '52.99'
                },
                {
                  name: '仙居县',
                  value: '50.60'
                },
                {
                  name: '路桥区',
                  value: '45.30'
                },
                {
                  name: '三门县',
                  value: '44.11'
                },
                {
                  name: '玉环市',
                  value: '43.02'
                }
              ],
              '2016': [
                {
                  name: '温岭市',
                  value: '128.67'
                },
                {
                  name: '临海市',
                  value: '119.99'
                },
                {
                  name: '黄岩区',
                  value: '61.10'
                },
                {
                  name: '天台县',
                  value: '59.85'
                },
                {
                  name: '椒江区',
                  value: '53.51'
                },
                {
                  name: '仙居县',
                  value: '51.03'
                },
                {
                  name: '路桥区',
                  value: '45.49'
                },
                {
                  name: '三门县',
                  value: '44.36'
                },
                {
                  name: '玉环市',
                  value: '43.18'
                }
              ],
              '2017': [
                {
                  name: '温岭市',
                  value: '152.01'
                },
                {
                  name: '临海市',
                  value: '120.36'
                },
                {
                  name: '黄岩区',
                  value: '61.34'
                },
                {
                  name: '天台县',
                  value: '60.20'
                },
                {
                  name: '椒江区',
                  value: '54.28'
                },
                {
                  name: '仙居县',
                  value: '51.50'
                },
                {
                  name: '路桥区',
                  value: '45.81'
                },
                {
                  name: '三门县',
                  value: '44.66'
                },
                {
                  name: '玉环市',
                  value: '43.39'
                }
              ],
              '2018': [
                {
                  name: '温岭市',
                  value: '222.14'
                },
                {
                  name: '临海市',
                  value: '120.49'
                },
                {
                  name: '黄岩区',
                  value: '61.52'
                },
                {
                  name: '天台县',
                  value: '60.25'
                },
                {
                  name: '椒江区',
                  value: '54.97'
                },
                {
                  name: '仙居县',
                  value: '51.47'
                },
                {
                  name: '路桥区',
                  value: '46.01'
                },
                {
                  name: '三门县',
                  value: '44.75'
                },
                {
                  name: '玉环市',
                  value: '43.53'
                }
              ]
            }
          }
        },
        sideItem3_3: {
          id: 'sideItem3_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '2016-2018年台州市与全省户籍人口人口增量动态比较',
          dataSource: '',
          listObj: {
            unit: '单位：万人',
            data: {
              '2015': [
                {
                  name: '温岭市',
                  value: '101.53'
                },
                {
                  name: '临海市',
                  value: '119.57'
                },
                {
                  name: '黄岩区',
                  value: '61.01'
                },
                {
                  name: '天台县',
                  value: '19.37'
                },
                {
                  name: '椒江区',
                  value: '522.99'
                },
                {
                  name: '仙居县',
                  value: '50.60'
                },
                {
                  name: '路桥区',
                  value: '45.30'
                },
                {
                  name: '三门县',
                  value: '44.11'
                },
                {
                  name: '玉环市',
                  value: '43.02'
                }
              ],
              '2016': [
                {
                  name: '温岭市',
                  value: '128.67'
                },
                {
                  name: '临海市',
                  value: '119.99'
                },
                {
                  name: '黄岩区',
                  value: '61.10'
                },
                {
                  name: '天台县',
                  value: '59.85'
                },
                {
                  name: '椒江区',
                  value: '53.51'
                },
                {
                  name: '仙居县',
                  value: '51.03'
                },
                {
                  name: '路桥区',
                  value: '45.49'
                },
                {
                  name: '三门县',
                  value: '44.36'
                },
                {
                  name: '玉环市',
                  value: '43.18'
                }
              ],
              '2017': [
                {
                  name: '温岭市',
                  value: '152.01'
                },
                {
                  name: '临海市',
                  value: '120.36'
                },
                {
                  name: '黄岩区',
                  value: '61.34'
                },
                {
                  name: '天台县',
                  value: '60.20'
                },
                {
                  name: '椒江区',
                  value: '54.28'
                },
                {
                  name: '仙居县',
                  value: '51.50'
                },
                {
                  name: '路桥区',
                  value: '45.81'
                },
                {
                  name: '三门县',
                  value: '44.66'
                },
                {
                  name: '玉环市',
                  value: '43.39'
                }
              ],
              '2018': [
                {
                  name: '温岭市',
                  value: '222.14'
                },
                {
                  name: '临海市',
                  value: '120.49'
                },
                {
                  name: '黄岩区',
                  value: '61.52'
                },
                {
                  name: '天台县',
                  value: '60.25'
                },
                {
                  name: '椒江区',
                  value: '54.97'
                },
                {
                  name: '仙居县',
                  value: '51.47'
                },
                {
                  name: '路桥区',
                  value: '46.01'
                },
                {
                  name: '三门县',
                  value: '44.75'
                },
                {
                  name: '玉环市',
                  value: '43.53'
                }
              ]
            }
          }
        },
        sideItem3_4: {
          id: 'sideItem3_4',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '2016-2018年台州市与全省常住人口增量动态比较',
          dataSource: '',
          listObj: {
            unit: '单位：万人',
            data: {
              '2015': [
                {
                  name: '温岭市',
                  value: '121.53'
                },
                {
                  name: '临海市',
                  value: '119.57'
                },
                {
                  name: '黄岩区',
                  value: '61.01'
                },
                {
                  name: '天台县',
                  value: '59.37'
                },
                {
                  name: '椒江区',
                  value: '520.99'
                },
                {
                  name: '仙居县',
                  value: '50.60'
                },
                {
                  name: '路桥区',
                  value: '45.30'
                },
                {
                  name: '三门县',
                  value: '44.11'
                },
                {
                  name: '玉环市',
                  value: '403.02'
                }
              ],
              '2016': [
                {
                  name: '温岭市',
                  value: '128.67'
                },
                {
                  name: '临海市',
                  value: '119.99'
                },
                {
                  name: '黄岩区',
                  value: '61.10'
                },
                {
                  name: '天台县',
                  value: '9.85'
                },
                {
                  name: '椒江区',
                  value: '53.51'
                },
                {
                  name: '仙居县',
                  value: '51.03'
                },
                {
                  name: '路桥区',
                  value: '450.49'
                },
                {
                  name: '三门县',
                  value: '44.36'
                },
                {
                  name: '玉环市',
                  value: '43.18'
                }
              ],
              '2017': [
                {
                  name: '温岭市',
                  value: '152.01'
                },
                {
                  name: '临海市',
                  value: '120.36'
                },
                {
                  name: '黄岩区',
                  value: '61.34'
                },
                {
                  name: '天台县',
                  value: '60.20'
                },
                {
                  name: '椒江区',
                  value: '54.28'
                },
                {
                  name: '仙居县',
                  value: '51.50'
                },
                {
                  name: '路桥区',
                  value: '45.81'
                },
                {
                  name: '三门县',
                  value: '44.66'
                },
                {
                  name: '玉环市',
                  value: '43.39'
                }
              ],
              '2018': [
                {
                  name: '温岭市',
                  value: '222.14'
                },
                {
                  name: '临海市',
                  value: '120.49'
                },
                {
                  name: '黄岩区',
                  value: '251.52'
                },
                {
                  name: '天台县',
                  value: '310.25'
                },
                {
                  name: '椒江区',
                  value: '54.97'
                },
                {
                  name: '仙居县',
                  value: '151.47'
                },
                {
                  name: '路桥区',
                  value: '46.01'
                },
                {
                  name: '三门县',
                  value: '44.75'
                },
                {
                  name: '玉环市',
                  value: '93.53'
                }
              ]
            }
          }
        },

        sideItem4_0: {
          id: 'sideItem4_0',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result: '2018年，台州市常住人口为0状态，0常住人口0万人。',
          xAxis: [],
          barWidth: '30px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#006a91',
              yAxis: []
            }
          ]
        },
        sideItem4_1: {
          id: 'sideItem4_1',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '“十三五”期间的常住和户籍人口增量为0万人和0万人，分别居全省第0名和第0名。',
          xAxis: [],
          barWidth: '30px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00ff7e',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#ffb400',
              yAxis: []
            }
          ]
        },
        sideItem4_2: {
          id: 'sideItem4_2',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年，杭州市为0状态，0人数为0人，位居全省第0位。在杭州市内，0为净迁入状态，0为净迁出状态。',
          xAxis: [],
          barWidth: '20px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00b4ff',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#e56af7',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#00ff7e',
              yAxis: []
            }
          ]
        },
        sideItem4_3: {
          id: 'sideItem4_3',
          picNum: 1,
          infoNum: 1,
          titleNum: 1,
          title: '',
          dataSource: '',
          result:
            '2018年，杭州市为0状态，0人数为0人，位居全省第0位。在杭州市内，0为净迁入状态，0为净迁出状态。',
          xAxis: [],
          barWidth: '20px',
          chartArr: [
            {
              name: '',
              chartType: 'bar',
              color: '#00b4ff',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#e56af7',
              yAxis: []
            },
            {
              name: '',
              chartType: 'bar',
              color: '#00ff7e',
              yAxis: []
            }
          ]
        }
      },

      cityLineData: [],
      cityLineData1: [],
      cityList: [
        '杭州市',
        '湖州市',
        '嘉兴市',
        '金华市',
        '丽水市',
        '宁波市',
        '衢州市',
        '绍兴市',
        '台州市',
        '温州市',
        '舟山市'
      ],
      maps: {
        people5Map1: {
          chart: null,
          url: '/statistics/getFlowDirectionData',
          params: {
            year: 2018,
            area: '台州市',
            week: 1,
            type: 1
          },
          result: {},
          interval: null,
          curCity: '台州市',
          no: 'no28'
        },
        people5Map2: {
          chart: null,
          url: '/statistics/getFlowDirectionData',
          params: {
            year: 2018,
            area: '台州市',
            week: 2,
            type: 1
          },
          result: {},
          interval: null,
          curCity: '台州市',
          no: 'no29'
        },
        people5Map3: {
          chart: null,
          url: '/statistics/getFlowDirectionData',
          params: {
            year: 2018,
            area: '台州市',
            week: 1,
            type: 2
          },
          result: {},
          interval: null,
          curCity: '浙江省',
          no: 'no30'
        },
        people5Map4: {
          chart: null,
          url: '/statistics/getFlowDirectionData',
          params: {
            year: 2018,
            area: '台州市',
            week: 2,
            type: 2
          },
          result: {},
          interval: null,
          curCity: '浙江省',
          no: 'no31'
        },
        people5Map5: {
          chart: null,
          url: '/statistics/getFlowDirectionData',
          params: {
            year: 2018,
            area: '台州市',
            week: 1,
            type: 3
          },
          result: {},
          interval: null,
          curCity: '长三角',
          no: 'no32'
        },
        people5Map6: {
          chart: null,
          url: '/statistics/getFlowDirectionData',
          params: {
            year: 2018,
            area: '台州市',
            week: 2,
            type: 3
          },
          result: {},
          interval: null,
          curCity: '长三角',
          no: 'no33'
        }
      }
    }
  },
  watch: {
    cityLineData: function(newData) {
      if (newData.length < 2) {
        return
      }
      let cData = newData[0]
      let cData1 = newData[1]
      let freqSum1 = this.getDirtSum(cData.data[1])
      let tripSum1 = this.getDirtSum(cData.data[0])
      let freqSum2 = this.getDirtSum(cData1.data[1])
      let tripSum2 = this.getDirtSum(cData1.data[0])
      this.cityList.forEach(c => {
        if (c === this.cityName) {
          return
        }
        let dirt = {}
        if (cData.week == 1) {
          dirt['city'] = c
          dirt['freq1'] =
            Math.floor((cData.data[1][c] / freqSum1) * 10000) / 100
          dirt['trip1'] =
            Math.floor((cData.data[0][c] / tripSum1) * 10000) / 100
          //cData.data[0][c];
          dirt['freq2'] =
            Math.floor((cData1.data[1][c] / freqSum2) * 10000) / 100
          // cData1.data[1][c];
          dirt['trip2'] =
            Math.floor((cData1.data[0][c] / tripSum2) * 10000) / 100
          // cData1.data[0][c];
        } else {
          dirt['city'] = c
          dirt['freq1'] =
            Math.floor((cData1.data[1][c] / freqSum1) * 10000) / 100
          dirt['trip1'] =
            Math.floor((cData1.data[0][c] / tripSum1) * 10000) / 100
          //cData.data[0][c];
          dirt['freq2'] =
            Math.floor((cData.data[1][c] / freqSum2) * 10000) / 100
          // cData1.data[1][c];
          dirt['trip2'] =
            Math.floor((cData.data[0][c] / tripSum2) * 10000) / 100
          // dirt["freq1"] = cData1.data[1][c];
          // dirt["trip1"] = cData1.data[0][c];
          // dirt["freq2"] = cData.data[1][c];
          // dirt["trip2"] = cData.data[0][c];
        }
        // this.tableData.push(dirt);
      })
      // cityLineData 城市分析 newData.data 0 出行人数, 1 出行频次
    }
  },
  created() {},
  mounted() {
    for (let key in this.maps) {
      this.lineintervalMap(key)
    }
  },
  methods: {
    getDirtSum(data) {
      let sum = 0
      for (let key in data) {
        if (key === this.cityName) {
          continue
        }
        sum += parseFloat(data[key])
      }
      return sum
    },
    lineintervalMap(key) {
      let params = JSON.parse(JSON.stringify(this.maps[key].params))
      let url = this.maps[key].url
      axios({
        url: 'http://118.190.204.249:8899/xboot' + url,
        method: 'get',
        params: params
      }).then(res => {
        let result = res.data.result
        console.log(result)

        let promise = new Promise((resolve, reject) => {
          this.maps[key].chart = this.$echarts.init(
            document.getElementById(key)
          )
          if (this.maps[key].curCity === '浙江省') {
            var option = this.createOption(
              result,
              this.maps[key].curCity,
              params
            )
          } else if (this.maps[key].curCity === '长三角') {
            var option = this.createOption(
              result,
              this.maps[key].curCity,
              params
            )
          } else {
            var option = this.createOption(
              result,
              this.maps[key].curCity,
              params
            )
          }
          this.maps[key].chart.on('finished', () => {
            resolve()
          })
          this.$nextTick(() => {
            this.maps[key].chart.setOption(option)
          })
        })
      })
    },
    initChartSize() {
      for (let key in this.maps) {
        this.maps[key].chart.resize()
      }
    },
    classifyNumber(arr) {
      let list = []
      for (let i = 0; i < arr.length; i++) {
        let temp = {}
        switch (i) {
          case 0:
            temp = {
              lte: arr[0]
              // label: `<=${arr[splitNumber].num}`
            }
            break
          // case arr.length:
          //   temp = {
          //     gt: arr[arr.length-1],
          //   };
          //   break;
          default:
            temp = {
              gt: arr[i - 1],
              lte: arr[i]
              // label: `${arr[index1].num}~${arr[index2].num}`
            }
            break
        }
        list.push(temp)
      }
      return list
    },
    createOption(data, city, params) {
      let nameList = []
      let centerList = {}
      let self = this
      this.$echarts.registerMap(city, self.mapConfig[city])
      let geojson = self.mapConfig[city]
      let list = []
      // 区<->区的数据
      let listDirt = {}
      // 市<->市的数据
      let listDirt2 = {}
      let listDirt3 = {}

      for (let key in geojson) {
        list = geojson[key]
      }
      list.forEach(l => {
        nameList.push({
          name: l.properties.name,
          value: l.properties.center,
          symbolSize: 0
        })
        centerList[l.properties.name] = l.properties.center.slice(0, 2)
        listDirt[l.properties.name] = 0
      })
      let lineList = []
      data.forEach(d => {
        let name = d.LEAVE_NAME
        let name1 = d.ARRIVE_NAME
        listDirt[name] += parseFloat(d.TRIP_NUMBER)
        listDirt[name1] += parseFloat(d.TRIP_NUMBER)
        if (centerList[name] != null && centerList[name1] != null) {
          lineList.push({
            fromName: name,
            toName: name1,
            coords: [centerList[name], centerList[name1]],
            num: d.TRIP_NUMBER,
            value: d.TRIP_NUMBER
          })

          if (listDirt2.hasOwnProperty(d.ARRIVE_CITY)) {
            listDirt2[d.ARRIVE_CITY] += parseFloat(d.TRIP_NUMBER)
            listDirt3[d.ARRIVE_CITY] += parseFloat(d.TRIP_FREQUENCY)
          } else {
            listDirt2[d.ARRIVE_CITY] = parseFloat(d.TRIP_NUMBER)
            listDirt3[d.ARRIVE_CITY] = parseFloat(d.TRIP_FREQUENCY)
          }
          if (listDirt2.hasOwnProperty(d.LEAVE_CITY)) {
            listDirt2[d.LEAVE_CITY] += parseFloat(d.TRIP_NUMBER)
            listDirt3[d.LEAVE_CITY] += parseFloat(d.TRIP_FREQUENCY)
          } else {
            listDirt2[d.LEAVE_CITY] = parseFloat(d.TRIP_NUMBER)
            listDirt3[d.LEAVE_CITY] = parseFloat(d.TRIP_FREQUENCY)
          }
        }
      })

      lineList.sort((a, b) => {
        return a.num - b.num
      })

      let lineListFilter = lineList.filter(li => {
        return li.num !== 0
      })
      let lineMin = lineListFilter[0].num
      let lineMax = lineListFilter[lineListFilter.length - 1].num
      // 分级别区间范围
      let linePeace = getJenksBreaks(lineListFilter, 5)
      linePeace = linePeace.map(m => {
        let val = 0
        if (city == '长三角') {
          val = Math.ceil(m / 100) * 100
        } else {
          val = Math.ceil(m / 1000) * 1000
        }
        return val
      })
      // 区间值
      let linePeaces = this.classifyNumber(linePeace)
      let scattList = nameList.map(li => {
        let num = listDirt[li.name]
        li.value.push(num)
        li.num = num
        if (num / 50000 > 15) {
          li.symbolSize = 15
        } else {
          li.symbolSize = Math.ceil(num / 50000)
        }
        return li
      })
      scattList.sort((a, b) => {
        return a.num - b.num
      })
      let scattListFilter = scattList.filter(sca => {
        return sca.num !== 0
      })
      let min = scattListFilter[0].num
      let max = scattListFilter[scattListFilter.length - 1].num
      let scattPeace = getJenksBreaks(scattListFilter, 5)
      scattPeace = scattPeace.map(m => {
        let val = 0
        if (city == '长三角') {
          val = Math.ceil(m / 100) * 100
        } else {
          val = Math.ceil(m / 1000) * 1000
        }
        return val
      })
      let scattPeaces = this.classifyNumber(scattPeace)
      if (city == '浙江省') {
        this.cityLineData.push({
          week: params.week,
          data: [listDirt2, listDirt3]
        })
      } else if (city == '长三角') {
        // this.cityLineData.push({
        //   week: params.week,
        //   data: [listDirt2, listDirt3]
        // });
      } else {
        this.paramsBasic.cityName1 =
          scattListFilter[scattListFilter.length - 1].name
        let lineParams = lineListFilter[lineListFilter.length - 1]
        this.paramsBasic.cityName2 = lineParams.fromName
        this.paramsBasic.cityName3 = lineParams.toName
      }
      let option = {
        grid: {
          top: 10,
          bottom: 0,
          right: 0,
          left: 0
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            if (params.componentSubType == 'scatter') {
              return params.data.name + ':\n' + params.data.num / 10000 + '万人'
            } else {
              return `${params.data.fromName} -> ${params.data.toName}为${params.data.value}次数`
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ["line", "bar"] },
            // restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        itemStyle: {
          opacity: 1,
          borderWidth: 1,
          borderColor: '#fff'
        },
        geo: {
          map: city,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#142233',
              borderWidth: 2,
              borderColor: 'white'
            },
            emphasis: {
              // areaColor: '#2a333d'
            }
          }
        },
        visualMap: [
          {
            // type: "continuous",
            type: 'piecewise',
            text: ['单位:人数（点）'],
            left: 'right',
            // splitNumber: 5,
            // max: max,
            // min: min,
            calculable: true,
            inRange: {
              color: ['green', 'yellow', 'orange', 'red']
            },
            textStyle: {
              color: '#acf8fd'
            },
            showLabel: true,
            seriesIndex: 0,
            pieces: scattPeaces
          },
          {
            type: 'piecewise',
            text: ['单位:次数（线）'],
            left: 'left',
            // max: lineMax,
            // min: lineMin,
            pieces: linePeaces,
            calculable: true,
            inRange: {
              color: ['green', 'yellow', 'orange', 'red']
            },
            textStyle: {
              color: '#acf8fd'
            },
            showLabel: true,
            seriesIndex: 1
          }
        ],
        series: [
          {
            name: '地点',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            symbolSize: (rawValue, params) => {
              let num = params.data.symbolSize
              let index = Math.ceil(num / min)
              return 100
            },
            label: {
              normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function(params) {
                  //圆环显示文字
                  return params.data.name
                },
                fontSize: 10
              },
              emphasis: {
                show: true
              }
            },
            // showEffectOn: "render",
            itemStyle: {
              normal: {
                color: params => {}
              }
            },
            data: scattListFilter
          },
          {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            // effect: {
            //   show: true,
            //   constantSpeed: 30,
            //   symbol: "pin",
            //   symbolSize: 0,
            //   trailLength: 0
            // },
            lineStyle: {
              normal: {
                width: 1.5,
                opacity: 0.6,
                curveness: 0.1
              }
            },
            data: lineListFilter
          }
        ]
      }
      return option
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
    // 图表柱状图折线图转换
    chartTypeClick(command) {
      this.chartArr[command.id].chartType = command.type
      command.fnName(command.id, this.chartArr[command.id])
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
    // 对command参数进行重新封装成一个对象
    beforeHandleCommand(command1, command2, command3) {
      return {
        id: command1,
        type: command2,
        fnName: command3
      }
    },
    // 图表柱状图折线图转换
    chartTypeClick(command) {
      for (let i = 0; i < command.type.length; i++) {
        this.chartArr[command.id].chartArr[i].chartType = command.type[i]
      }
      command.fnName(command.id, this.chartArr[command.id])
    }
  }
}
</script>
<style lang="scss" scoped>
@import './peopleCount.scss';
</style>
