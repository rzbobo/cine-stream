<template>
  <div class="Content">
    <ContentHeaderVue2></ContentHeaderVue2>
    <ContentBodyVue2></ContentBodyVue2>
  </div>
</template>

<script>
import ContentHeaderVue2 from '../main-contents/ContentHeaderVue2.vue';
import ContentBodyVue2 from '../main-contents/ContentBodyVue2.vue';

export default {
  components: {
    ContentHeaderVue2,
    ContentBodyVue2
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

