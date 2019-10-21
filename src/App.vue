<template>
  <div id="app">
    <el-container>
      <el-header>
        <myheader></myheader>
      </el-header>
      <el-main>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myheader from "@/components/common/header.vue";
export default {
  components: {
    myheader
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="stylus">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-bottom 24px
}

.el-main {
  // background-color: #E9EEF3;
  color: #333;
}

#app
  .el-container
    height: 100%
    .el-main
      padding 0 32px
</style>
<style scoped lang="stylus">
#app
  height: 100%
  .content
    // background-color #ccc
    height: 100%
    >div
      height 100%
</style>
