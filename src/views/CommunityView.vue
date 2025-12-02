<template>
  <div>
    <HeaderVue></HeaderVue>
    <CommunityVue></CommunityVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/home/main-components/HeaderVue.vue';
import CommunityVue from '@/components/community/CommunityVue.vue';
import FooterVue from '@/components/home/main-components/FooterVue.vue';

export default {
  components: {
    HeaderVue,
    CommunityVue,
    FooterVue
  }
}
</script>

<style>

</style>