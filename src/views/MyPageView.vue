<template>
  <div>
    <HeaderVue></HeaderVue>
    <MyPageVue></MyPageVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/home/main-components/HeaderVue.vue';
import MyPageVue from '@/components/my/MyPageVue.vue';
import FooterVue from '@/components/home/main-components/FooterVue.vue';

export default {
  components: {
    HeaderVue,
    MyPageVue,
    FooterVue
  }
}
</script>

<style>

</style>