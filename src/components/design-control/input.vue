<template>
  <div class="input">
    <el-form label-width="116px">
      <el-form-item :label="control.caption">
        <el-input v-model="value"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    control: {
      type: Object
    }
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
