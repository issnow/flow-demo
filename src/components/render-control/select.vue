<template>
  <el-form-item :label="control.caption">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="(item, i) in control.options"
        :key="i"
        :label="item.text"
        :value="item.text"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  components: {},
  props: {
    control: {}
  },
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus"></style>
