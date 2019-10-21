<template>
  <div class="two-column">
    <div class="left">
      <component
        v-if="control.children[0].children[0]"
        :is="'bs-' + control.children[0].children[0].xtype"
        :control="control.children[0].children[0]"
      ></component>
    </div>
    <div class="right">
      <component
        v-if="control.children[1].children[0]"
        :is="'bs-' + control.children[1].children[0].xtype"
        :control="control.children[1].children[0]"
      ></component>
    </div>
  </div>
</template>

<script>
import bsInput from "@/components/render-control/input.vue";
import bsCheckbox from "@/components/render-control/checkbox.vue";
import bsNumber from "@/components/render-control/number.vue";
import bsRadio from "@/components/render-control/radio.vue";
import bsSelect from "@/components/render-control/select.vue";
import bsTextarea from "@/components/render-control/textarea.vue";
export default {
  components: {
    bsInput,
    bsCheckbox,
    bsNumber,
    bsRadio,
    bsSelect,
    bsTextarea
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
.two-column
  display flex
  >div
    flex 1
</style>
