<template>
  <div class="size">
    <div class="video-width">
      <el-input v-model="computedWidth" placeholder="width"></el-input>
    </div>
    <div class="video-height">
      <el-input v-model="computedHeight" placeholder="height"></el-input>
    </div>
  </div>
</template>

<script>
let ratio;
let originWidth;
let originHeight;

export default {
  props: {
    width: {},
    height: {}
  },
  data() {
    return {};
  },
  methods: {
    calculateWidth(height) {
      return parseInt(height / ratio);
    },
    calculateHeight(width) {
      return parseInt(width * ratio);
    }
  },
  computed: {
    computedWidth: {
      get() {
        return this.width;
      },
      set(val) {
        this.$emit("update:width", val);
        this.$emit("update:height", this.calculateHeight(val));
      }
    },
    computedHeight: {
      get() {
        return this.height;
      },
      set(val) {
        this.$emit("update:width", this.calculateWidth(val));
        this.$emit("update:height", val);
      }
    }
  },
  mounted() {
    originWidth = this.width;
    originHeight = this.height;
    ratio = this.height / this.width;
  }
};
</script>

<style lang="scss" scoped>
.size {
  .video-width,
  .video-height {
    display: inline-block;
    width: 70px;
  }
}
</style>