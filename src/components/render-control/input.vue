<template>
  <el-form-item :label="control.caption">
    <el-input :placeholder="control.placeholder" v-model="model"></el-input>
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
      model: ""
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
