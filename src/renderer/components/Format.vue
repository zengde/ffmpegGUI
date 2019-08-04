<template>
  <div class="format">
    <el-select v-model="computedFormat" placeholder="请选择格式">
      <el-option
        v-for="item in formatOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    formatValue: {
      type: String
    },
    formatOptions: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    computedFormat: {
      get() {
        return this.formatValue;
      },
      set(val) {
        this.$emit("update:formatValue", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.format {
  width: 100px;
}
</style>