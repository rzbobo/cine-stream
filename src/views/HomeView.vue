<!-- components에 있는 렌더링 파일들을 이 곳에서 종합 -->
<template>
  <div class="home">
    <HeaderVue></HeaderVue>
    <TodoVue></TodoVue>
    <AdContentVue></AdContentVue>
    <ContentsVue1></ContentsVue1>
    <ContentsVue2></ContentsVue2>
    <ForMoreContents></ForMoreContents>
    <ContentsVue3></ContentsVue3>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/home/main-components/HeaderVue.vue';
import TodoVue from '@/components/home/main-components/TodoVue.vue';
import AdContentVue from '@/components/home/main-components/AdContentVue.vue';
import ContentsVue1 from '@/components/home/main-components/ContentsVue1.vue';
import ContentsVue2 from '@/components/home/main-components/ContentsVue2.vue';
import ForMoreContents from '@/components/home/main-components/ForMoreContents.vue';
import ContentsVue3 from '@/components/home/main-components/ContentsVue3.vue';
import FooterVue from '@/components/home/main-components/FooterVue.vue';

export default {
  components: {
    HeaderVue,
    TodoVue,
    AdContentVue,
    ContentsVue1,
    ContentsVue2,
    ForMoreContents,
    ContentsVue3,
    FooterVue
  },
}
</script>
