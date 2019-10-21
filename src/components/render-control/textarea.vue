<template>
  <el-form-item :label="control.caption">
    <el-input type="textarea" v-model="value"></el-input>
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
