<template>
  <div>
    <HeaderVue></HeaderVue>
    <RegisterVue></RegisterVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/home/main-components/HeaderVue.vue';
import RegisterVue from '@/components/my/RegisterVue.vue';
import FooterVue from '@/components/home/main-components/FooterVue.vue';

export default {
  components: {
    HeaderVue,
    RegisterVue,
    FooterVue
  }
}
</script>

<style>

</style>