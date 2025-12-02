<template>
  <div class="Content">
    <ContentHeaderVue3></ContentHeaderVue3>
    <ContentBodyVue3></ContentBodyVue3>
  </div>
</template>

<script>
import ContentHeaderVue3 from '../main-contents/ContentHeaderVue3.vue';
import ContentBodyVue3 from '../main-contents/ContentBodyVue3.vue';

export default {
  components: {
    ContentHeaderVue3,
    ContentBodyVue3
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.Content {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: auto;
}
</style>