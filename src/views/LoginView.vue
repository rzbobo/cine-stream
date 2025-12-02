<template>
  <div>
    <HeaderVue></HeaderVue>
    <LoginVue></LoginVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from '@/components/home/main-components/FooterVue.vue';
import HeaderVue from '@/components/home/main-components/HeaderVue.vue';
import LoginVue from '@/components/my/LoginVue.vue';

export default {
  components: {
    HeaderVue,
    LoginVue,
    FooterVue
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>