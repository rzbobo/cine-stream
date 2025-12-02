<template>
  <div class="find">
    <HeaderVue></HeaderVue>
    <SearchVue></SearchVue>
    <SearchHeader></SearchHeader>
    <SearchContent></SearchContent>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/home/main-components/HeaderVue.vue';
import SearchVue from '@/components/find/SearchVue.vue';
import SearchHeader from '@/components/find/SearchHeader.vue';
import SearchContent from '@/components/find/SearchContent.vue'
import FooterVue from '@/components/home/main-components/FooterVue.vue';

export default{
  components: {
    HeaderVue,
    SearchVue,
    SearchHeader,
    SearchContent,
    FooterVue
  },
  data() {
    return {
    };
  },
};
</script>
