<template>
  <div class="home">
    <h1>这是主页</h1>
  </div>
</template>
<script>
export default {
  name: "name",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.$utils);
    this.$utils.publicMethod("这是公共方法");
  },
  computed: {},
  watch: {},
  methods: {},
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
