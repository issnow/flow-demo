<template>
  <el-form-item :label="control.caption">
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        :value="e.text"
        :label="e.text"
        v-for="(e, i) in control.options"
        :key="i"
      ></el-checkbox>
    </el-checkbox-group>
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
      checkList: []
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
