<template>
  <div class="radio">
    <el-form label-width="116px">
      <el-form-item :label="control.caption">
        <el-radio-group v-model="value">
          <el-radio :label="e.text" :value='e.value' v-for="(e,i) in control.options" :key="i"></el-radio>
        </el-radio-group>
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
