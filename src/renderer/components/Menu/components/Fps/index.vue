<template>
  <div class="fps">
    <!-- disabled -->
    <el-radio-group v-model="computedFps">
      <el-radio-button label="15"></el-radio-button>
      <el-radio-button label="30"></el-radio-button>
      <el-radio-button label="60"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    fps: {
      type: String
    }
  },
  data() {
    return {
      radio1: "15",
      radio2: "30",
      radio3: "60"
    };
  },
  computed: {
    computedFps: {
      get() {
        return this.fps;
      },
      set(val) {
        this.$emit("update:fps", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fps {
  width: auto;
}
</style>