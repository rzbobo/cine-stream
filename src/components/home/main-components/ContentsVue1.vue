<template>
  <div class="Content">
    <ContentHeaderVue></ContentHeaderVue>
    <ContentBodyVue></ContentBodyVue>
  </div>
</template>

<script>
import ContentBodyVue from '../main-contents/ContentBodyVue1.vue';
import ContentHeaderVue from '../main-contents/ContentHeaderVue1.vue';

export default {
  components: {
    ContentHeaderVue,
    ContentBodyVue
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.Content {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: auto;
}
</style>

