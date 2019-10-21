<template>
  <div class="render">
    <div class="main">
      <el-form ref="form" :model="form" label-width="163px" class="render-form">
        <template v-for="(e, i) in treeList">
          <component :is="'bs-' + e.xtype" :control="e" :key="i"></component>
        </template>
      </el-form>
    </div>
    <div class="btns">
      <el-button type="primary" @click="toApproval">提交</el-button>
      <el-button @click="back">上一步</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { listToTree } from "@/utils/tree-to-list";
import bsInput from "@/components/render-control/input.vue";
import bsCheckbox from "@/components/render-control/checkbox.vue";
import bsNumber from "@/components/render-control/number.vue";
import bsRadio from "@/components/render-control/radio.vue";
import bsSelect from "@/components/render-control/select.vue";
import bsTextarea from "@/components/render-control/textarea.vue";
import bsTwoColumns from "@/components/render-control/twoColumns.vue";
import bsCardGroup from "@/components/render-control/cardGroup.vue";
export default {
  components: {
    bsInput,
    bsCheckbox,
    bsNumber,
    bsRadio,
    bsSelect,
    bsTextarea,
    bsTwoColumns,
    bsCardGroup
  },
  props: {},
  data() {
    return {
      treeList: [],
      form: {}
    };
  },
  computed: {
    ...mapState(["controlList"])
  },
  watch: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      this.treeList = listToTree(this.controlList);
      console.log(this.treeList, "treelist");
    },
    toApproval() {
      this.$router.push("/approval");
    },
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="stylus">
.render
  position relative
  .main
    width 1000px
  .btns
    position absolute
    bottom 50px
    width 100%
    .el-button
      float right
      margin-right 50px
</style>
