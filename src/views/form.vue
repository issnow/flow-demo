<template>
  <div class="my-form">
    <el-row class="create-form" :gutter="20">
      <el-col :span="6">
        <div class="left-drag drag">
          <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="布局控件" name="first">
              <draggable
                class="layout-control"
                :list="panelLayouts"
                :group="{ name: 'shared', pull: 'clone', put: false }"
                :animation="150"
                :clone="cloneDOM2"
                :sort="false"
              >
                <div
                  class="control-item"
                  v-for="(e, i) in panelLayouts"
                  :key="i"
                >
                  <div>
                    <label for="">{{ e.name }}</label>
                    <img :src="e.img" alt="" />
                  </div>
                </div>
              </draggable>
            </el-tab-pane>
            <el-tab-pane label="基础控件" name="second">
              <draggable
                class="base-control"
                :list="panelControls"
                :group="{ name: 'shared', pull: 'clone', put: false }"
                :animation="150"
                :clone="cloneDOM"
                :sort="false"
              >
                <div
                  class="control-item"
                  v-for="(e, i) in panelControls"
                  :key="i"
                >
                  <div>
                    <label for="">{{ e.name }}</label>
                    <img :src="e.img" alt="" />
                  </div>
                </div>
              </draggable>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="right-drag drag">
          <draggable
            class="controls-lists"
            :list="inPageControls"
            @change="dragEnd"
            group="shared"
            :animation="150"
          >
            <all-control
              class="inpagecontent"
              :inPageControls="inPageControls"
              v-for="(e, i) in inPageControls"
              :key="i"
              :xtype="e.xtype"
              :control="e"
              :index="i"
              @deleteItem="deleteItem"
            ></all-control>
          </draggable>
        </div>
      </el-col>
    </el-row>
    <div class="btns">
      <el-button type="primary" @click="toRender">下一步</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { getlayouts } from "@/service/layout-control.js";
import { getbases } from "@/service/base-control.js";
import { GenNonDuplicateID } from "@/utils/index.js";
import allControl from "@/components/design-control/allControl.vue";
import { treeToList, listToTree } from "@/utils/tree-to-list";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    draggable,
    allControl
  },
  props: {},
  data() {
    return {
      activeName: "second",
      panelLayouts: [],
      panelControls: [],
      inPageControls: []
    };
  },
  computed: {
    ...mapState(["controlList"])
  },
  created() {
    if (this.controlList.length) {
      this.inPageControls = listToTree(this.controlList);
    }
    console.log(this.inPageControls, "回显");
  },
  watch: {},
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(["setList"]),
    clear() {
      // 去除空的布局控件
      for (let i = 0; i < this.inPageControls.length; i++) {
        let e = this.inPageControls[i];
        if (e.xtype === "cardGroup") {
          if (e.children.length == 0) {
            this.inPageControls.splice(i, 1);
            i--;
          } else {
            for (let j = 0; j < e.children.length; j++) {
              let o = e.children[j];
              if (
                o.xtype === "twoColumns" &&
                o.children[0].children.length == 0 &&
                o.children[1].children.length == 0
              ) {
                e.children.splice(j, 1);
                j--;
                e.children.length == 0 && i--;
              }
            }
          }
        }
        if (
          e.xtype === "twoColumns" &&
          e.children[0].children.length == 0 &&
          e.children[1].children.length == 0
        ) {
          this.inPageControls.splice(i, 1);
          i--;
        }
      }
    },
    toRender() {
      // console.log(this.inPageControls, "inPageControls");
      this.clear();
      // 第一步，加pid
      let inPageControlsCopy = JSON.parse(JSON.stringify(this.inPageControls));
      inPageControlsCopy.forEach(e => {
        e.pid = 0;
        if (e.controlType == "grid") {
          this.addPid(e, inPageControlsCopy);
        }
      });
      // 第二步，tree-to-list
      let flatList = treeToList(inPageControlsCopy);
      console.log(flatList, "flatList");
      this.setList(flatList);
      this.$router.push("/render");
    },
    addPid(e, list) {
      if (!e.children) return;
      e.children.forEach(o => {
        this.itemAddPid(o, list);
        if (o.children) {
          this.addPid(o, list);
        }
      });
    },
    itemAddPid(target, list, space = []) {
      for (var i = 0; i < list.length; i++) {
        var cur = list[i];
        var temp = space.concat();
        temp.push(cur.id);
        if (target.id == cur.id) {
          target.pid = temp[temp.length - 2];
        }
        if (cur.children) {
          this.itemAddPid(target, cur.children, temp);
        }
      }
    },
    init() {
      this.panelLayouts = getlayouts();
      this.panelControls = getbases();
      console.log(this.panelLayouts, "panelLayouts");
    },
    cloneDOM2(item) {
      let newItem = JSON.parse(JSON.stringify(item));
      newItem.id = GenNonDuplicateID();
      newItem.actived = false;
      this.$delete(newItem, "img");
      switch (newItem.xtype) {
        case "cardGroup":
          newItem.children = [];
          break;
        case "twoColumns":
          newItem.children = [
            {
              name: "一行两列左侧",
              xtype: "div",
              id: GenNonDuplicateID(),
              children: [],
              required: true,
              actived: false
            },
            {
              name: "一行两列右侧",
              xtype: "div",
              id: GenNonDuplicateID(),
              children: [],
              required: true,
              actived: false
            }
          ];
          break;
        default:
          break;
      }
      return newItem;
    },
    cloneDOM(item) {
      let newItem = JSON.parse(JSON.stringify(item));
      newItem.id = GenNonDuplicateID();
      newItem.actived = false;
      this.$delete(newItem, "img");
      return newItem;
    },
    dragEnd() {},
    deleteItem(i) {
      this.inPageControls.splice(i, 1);
    }
  }
};
</script>

<style scoped lang="stylus">
.my-form
  position relative
  .create-form
    .drag
      height 500px
      border 1px solid #000
      border-radius 2px
      &.left-drag
        .layout-control
        .base-control
          width 90%
          margin 0 auto
          img
            width 20px
            height 20px
        .control-item
          border 1px solid #ccc
          border-radius 2px
          height 40px
          margin-bottom 10px
          >div
            height 100%
            display flex
            align-items center
            justify-content space-around
      &.right-drag
        overflow auto
        .controls-lists
          min-height 100%
          // height 600px
          // background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
          //   linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
          //   linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  .btns
    position absolute
    bottom 50px
    width 100%
    .el-button
      float right
      margin-right 50px
</style>
