<template>
  <div class="card">
    <div class="title">{{ control.caption }}</div>
    <template v-for="(e, i) in control.children">
      <component :is="'bs-' + e.xtype" :control="e" :key="i"></component>
    </template>
  </div>
</template>

<script>
import bsInput from "@/components/render-control/input.vue";
import bsCheckbox from "@/components/render-control/checkbox.vue";
import bsNumber from "@/components/render-control/number.vue";
import bsRadio from "@/components/render-control/radio.vue";
import bsSelect from "@/components/render-control/select.vue";
import bsTextarea from "@/components/render-control/textarea.vue";
import bsTwoColumns from "@/components/render-control/twoColumns.vue";
export default {
  components: {
    bsInput,
    bsCheckbox,
    bsNumber,
    bsRadio,
    bsSelect,
    bsTextarea,
    bsTwoColumns
  },
  props: {
    control: {}
  },
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

<style scoped lang="stylus">
.card
  // background-color #3c8cff
  margin-bottom 20px
  border 1px solid #3c8cff
  border-radius 2px
  .title
    font-size 20px
    line-height 1.5
    padding 20px
</style>
