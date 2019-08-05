<template>
  <el-form :inline="true" :model="settingFormInline" class="setting-form-inline" size="small">
    <el-form-item
      label="分辨率"
      v-if="activeTab === 'video' || activeTab === 'merge' ||  activeTab === 'cutVideo' ||  activeTab === 'gif'"
    >
      <Size :width.sync="settingFormInline.width" :height.sync="settingFormInline.height" />
    </el-form-item>
    <el-form-item
      label="格式"
      v-if="activeTab === 'video' || activeTab === 'merge' ||  activeTab === 'cutVideo'"
    >
      <Format :format.sync="settingFormInline.format" :formatOptions="formatOptions" />
    </el-form-item>
    <el-form-item label="FPS" v-if="activeTab === 'gif'">
      <Fps :fps.sync="settingFormInline.fps" />
    </el-form-item>
    <el-form-item label="硬件加速" v-if="activeTab === 'video'">
      <Hardware :hardware.sync="settingFormInline.hardware" />
    </el-form-item>
    <el-form-item style="float: right">
      <div class="footer">
        <el-button type="primary" @click="startCommand()">Start</el-button>
        <el-button type="primary" @click="stopCommand()">Stop</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import Size from "./components/Size";
import Format from "./components/Format";
import Fps from "./components/Fps";
import Hardware from "./components/Hardware";

export default {
  props: ["activeTab"],
  data() {
    return {
      settingFormInline: {
        width: "1920",
        height: "1080",
        fps: "15",
        hardware: false,
        format: "mp4"
      },
      formatOptions: [
        {
          value: "mp4",
          label: "mp4"
        },
        {
          value: "mkv",
          label: "mkv"
        }
      ]
    };
  },
  methods: {
    startCommand() {
      this.$emit("updateStartCommand", this.settingFormInline);
    },
    stopCommand() {
      this.$emit("updateStopCommand");
    }
  },
  watch: {
    activeTab(val, oldVal) {
      if (val === "audio") {
        console.log(val);
      }
    }
  },
  components: {
    Size,
    Format,
    Fps,
    Hardware
  }
};
</script>

<style lang="scss" scoped>
.footer {
  float: right;
}
</style>

