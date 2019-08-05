<template>
  <div class="hardware">
    <el-switch
      v-model="computedHardware"
      active-color="#13ce66"
      inactive-color="#ff4949"
      :disabled="disabled"
    ></el-switch>
    <el-popover placement="top" width="200" trigger="hover" :content="popoverContent">
      <i slot="reference" class="el-icon-info"></i>
    </el-popover>
  </div>
</template>

<script>
import ChildProcessFFmpeg from "@/utils/core";

export default {
  props: {
    hardware: {
      type: Boolean
    }
  },
  data() {
    return {
      disabled: false,
      popoverContent: ""
    };
  },
  methods: {
    async canBeHardware() {
      let ffmpeg = new ChildProcessFFmpeg();
      let hwaccels = await ffmpeg._getAvailableHwaccels();
      let hardwareStatus = hwaccels.length ? true : false;
      this.$emit("update:hardware", hardwareStatus);
      
      if (!hardwareStatus) {
        this.disabled = true;
        this.popoverContent = "您的电脑似乎不能开启硬件加速";
      }
    }
  },
  mounted() {
    this.canBeHardware();
  },
  watch: {
    hardware(val, oldVal) {
      if (val) {
        this.popoverContent = "您的电脑已经开启硬件加速";
      } else {
        this.popoverContent = "您的电脑已经关闭硬件加速";
      }
    }
  },
  computed: {
    computedHardware: {
      get() {
        return this.hardware;
      },
      set(val) {
        this.$emit("update:hardware", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hardware {
  width: auto;
}
</style>
