<template>
  <div class="hardware">
    <el-switch v-model="computedHardware" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
  </div>
</template>

<script>
export default {
  props: {
    hardwareValue: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    computedHardware: {
      get() {
        return this.hardwareValue;
      },
      set(val) {
        this.$emit("update:hardwareValue", val);
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
