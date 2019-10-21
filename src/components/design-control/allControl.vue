<template>
  <div class="all-control">
    <!-- 布局控件 -->
    <div v-if="control.controlType === 'grid'" class="layout">
      <!-- 一行两列 -->
      <div v-if="control.xtype == 'twoColumns'" class="two-columns">
        <div class="two-drag">
          <div class="fixed-width">
            <i class="el-icon-delete" @click="twoColumnsDel(0)"></i>
          </div>
          <draggable
            class="item-drag"
            :list="control.children[0].children"
            :group="{ name: 'shared', put: true }"
            @change="dragEnd(control.children[0].children[0], 0, control)"
          >
            <component
              v-if="control.children[0].children[0]"
              :is="'ba-' + control.children[0].children[0].xtype"
              :control="control.children[0].children[0]"
              class="mask xcomponent"
              :needBreak="true"
            />
          </draggable>
        </div>
        <div class="two-drag">
          <div class="fixed-width">
            <i class="el-icon-delete" @click="twoColumnsDel(1)"></i>
          </div>
          <draggable
            class="item-drag"
            :list="control.children[1].children"
            :group="{ name: 'shared', put: true }"
            @change="dragEnd(control.children[1].children[0], 1, control)"
          >
            <component
              v-if="control.children[1].children[0]"
              :is="'ba-' + control.children[1].children[0].xtype"
              :control="control.children[1].children[0]"
              class="mask xcomponent"
              :needBreak="true"
            />
          </draggable>
        </div>
        <div class="icon-del-width">
          <i class="el-icon-delete" @click="handleDelete"></i>
        </div>
      </div>
      <!-- 卡片分组 -->
      <div v-if="control.xtype == 'cardGroup'" class="card-group">
        <div class="title">{{ control.caption }}</div>
        <draggable
          class="card-drag"
          :group="{ name: 'shared' }"
          :list="control.children"
          @add="newOne"
        >
          <div v-for="(e, i) in control.children" :key="i">
            <!-- 卡片分组中的一行两列 -->
            <div v-if="e.xtype == 'twoColumns'" class="two-columns">
              <div class="two-drag">
                <div class="fixed-width">
                  <i class="el-icon-delete" @click="twoColumnsDel(0)"></i>
                </div>
                <draggable
                  class="item-drag"
                  :list="e.children[0].children"
                  :group="{ name: 'shared', put: true }"
                  @change="dragEnd(e.children[0].children[0], 0, e)"
                >
                  <component
                    v-if="e.children[0].children[0]"
                    :is="'ba-' + e.children[0].children[0].xtype"
                    :control="e.children[0].children[0]"
                    class="mask xcomponent"
                    :needBreak="true"
                  />
                </draggable>
              </div>
              <div class="two-drag">
                <div class="fixed-width">
                  <i class="el-icon-delete" @click="twoColumnsDel(1)"></i>
                </div>
                <draggable
                  class="item-drag"
                  :list="e.children[1].children"
                  :group="{ name: 'shared', put: true }"
                  @change="dragEnd(e.children[1].children[0], 1, e)"
                >
                  <component
                    v-if="e.children[1].children[0]"
                    :is="'ba-' + e.children[1].children[0].xtype"
                    :control="e.children[1].children[0]"
                    class="mask xcomponent"
                    :needBreak="true"
                  />
                </draggable>
              </div>
              <div class="icon-del-width">
                <i class="el-icon-delete" @click="handleDelete"></i>
              </div>
            </div>
            <!-- 卡片分组中的基础控件 -->
            <div v-else class="card-base-ctrl">
              <component
                :is="'ba-' + e.xtype"
                :control="e"
                class="all-control"
              />
              <div class="delete-item">
                <i
                  class="el-icon-delete"
                  @click="control.children.splice(i, 1)"
                ></i>
              </div>
            </div>
          </div>
        </draggable>
        <div class="icon-del-width">
          <i class="el-icon-delete" @click="handleDelete"></i>
        </div>
      </div>
    </div>
    <!-- 基础控件 -->
    <div v-else class="base">
      <component
        :is="`ba-${xtype}`"
        class="all-control"
        :control="control"
      ></component>
      <div class="delete-item">
        <i class="el-icon-delete" @click="handleDelete"></i>
      </div>
    </div>
  </div>
</template>

<script>
import baInput from "./input.vue";
import baTextarea from "./textarea.vue";
import baNumber from "./number.vue";
import baSelect from "./select.vue";
import baRadio from "./radio.vue";
import baCheckbox from "./checkbox.vue";

import draggable from "vuedraggable";

export default {
  components: {
    baInput,
    baTextarea,
    baNumber,
    baSelect,
    baRadio,
    baCheckbox,
    draggable
  },
  props: {
    control: {
      type: Object
    },
    xtype: {
      type: String
    },
    inPageControls: {
      type: Array
    },
    index: {}
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    handleDelete() {
      this.$emit("deleteItem", this.index);
    },
    dragEnd() {},
    twoColumnsDel() {},
    newOne() {}
  }
};
</script>
<style lang="stylus">
.all-control {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
<style scoped lang="stylus">
.all-control
  .layout
    .icon-del-width
        position: absolute;
        bottom: 0px;
        width: 22px;
        height: 22px;
        padding: 2px;
        right: 38px;
        background: #f27653;
        border-radius: 2px;
        z-index: 10;
        i
          font-size: 17px;
          cursor: pointer;
          color: #fff;
    .two-columns
      min-height  60px
      display flex
      align-items stretch
      margin-bottom 10px
      border: 1px solid #ffe8bd;
      position relative
      .two-drag
        width: calc(50% - 0.5px);
        padding: 10px 0;
        background-color: #fffaef;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row-reverse;
        align-items: center;
        &:first-of-type
          width: calc(50% + 0.5px);
          border-right: 1px solid #ffe8bd;
        .fixed-width
          width: 40px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          .el-icon-delete
            // display: none;
            font-size: 17px;
            cursor: pointer;
            color: #666666;
        .item-drag
          flex: 1;
          position: relative;
          height: 100%;
          display: flex;
          align-items: flex-start;
    .card-group
      display: flex;
      // align-items: stretch;
      flex-direction: column;
      min-height: 160px;
      position: relative;
      margin-bottom: 10px;
      border: 1px solid rgba(60, 140, 255, 0.6);
      background: #fff;
      padding-bottom: 23px;
      .title
        height: 41px;
        border-bottom: 1px solid rgba(60, 140, 255, 0.6);
        color: #3c8cff;
        font-size: 14px;
        padding-left: 12px;
        line-height: 40px;
        font-weight: 600;
        background-color: #f5f6fa;
      .card-drag
        flex: 1;
        display: flex;
        flex-direction: column;
  .base
  .card-base-ctrl
    display: flex;
    align-items: center;
    padding: 10px 0;
    .all-control
      flex: 1;
    .delete-item
      text-align: center;
      width: 40px;
      i
        cursor: pointer;
</style>
