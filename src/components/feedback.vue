<template>
  <el-dialog title="反馈意见" :visible.sync="feedbackVisi" :before-close="feedbackDialog" custom-class="feedbackWrap" center
    :close-on-click-modal="false" :close-on-press-escape="false">
    <div class="feedbackModalBody">
      <h3 class="feedbackTitle">{{feedForm.title}}</h3>
      <el-form ref="feedbackForm" :model="feedForm" label-width="120px" class="feedForm">
        <el-form-item label="反馈建议：">
          <el-input type="textarea" v-model="feedForm.textarea" :rows="12" maxlength="300"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveSubmit">提 交</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { feedbackSave } from '@/api/environmentalQuality'
export default {
  props: {
    feedbackVisi: {
      type: Boolean,
      defalut: false
    },
    feedForm: {
      type: Object,
      defalut: {}
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    // 关闭弹窗时向父组件发送一个事件
    feedbackDialog() {
      this.$emit('feedbackDialog')
    },
    // 保存反馈
    saveSubmit(){
      feedbackSave(this.feedForm).then(res => {
        const code = res.code
        const message = res.message
        const type = code == '0' ? 'success' : 'warning'
        this.$message({
          message: message,
          type: type
        })
        this.feedbackDialog()
        this.feedForm.textarea = ''
      })
    }
  }
}
</script>