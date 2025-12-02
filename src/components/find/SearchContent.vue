<template>
  <div>
    <!-- 첫 번째 스와이퍼: 1번부터 9번까지의 이미지 -->
    <swiper class="swiper" ref="mySwiper1" :options="swiperOptions">
      <SwiperSlide :key="index" v-for="(movie, index) in firstMovies">
        <router-link :to="{name: 'clicked', params: {id: movie.id}}"> <!-- 라우터로 name clicked에 각자의 영화 id 경로를 타기-->
          <img :src="getImage(movie.image)" />
        </router-link>
      </SwiperSlide>
    </swiper>

    <!-- 두 번째 스와이퍼: 10번부터 19번까지의 이미지 -->
    <swiper class="swiper" ref="mySwiper2" :options="swiperOptions">
      <SwiperSlide :key="index" v-for="(movie, index) in tenToMovies">
        <router-link :to="{name: 'clicked', params: {id: movie.id}}"> <!-- 라우터로 name clicked에 각자의 영화 id 경로를 타기-->
          <img :src="getImage(movie.image)" />
        </router-link>
      </SwiperSlide>
    </swiper>

    <!-- 세 번째 스와이퍼: 20번부터 29번까지의 이미지 -->
    <swiper class="swiper" ref="mySwiper3" :options="swiperOptions">
      <SwiperSlide :key="index" v-for="(movie, index) in twentyMovies">
        <router-link :to="{name: 'clicked', params: {id: movie.id}}"> <!-- 라우터로 name clicked에 각자의 영화 id 경로를 타기-->
          <img :src="getImage(movie.image)" />
        </router-link>
      </SwiperSlide>
    </swiper>

    <!-- 네 번째 스와이퍼: 30번부터 39번까지의 이미지 -->
    <swiper class="swiper" ref="mySwiper4" :options="swiperOptions">
      <SwiperSlide :key="index" v-for="(movie, index) in thirtyMovies">
        <router-link :to="{name: 'clicked', params: {id: movie.id}}"> <!-- 라우터로 name clicked에 각자의 영화 id 경로를 타기-->
          <img :src="getImage(movie.image)" />
        </router-link>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper, { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import "swiper/css/swiper.css";
import data from '../../assets/data/movie.json';

Vue.use(VueAwesomeSwiper);

export default {
  name: 'ListItem',
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getImage(imagePath) {
      return require(`@/assets/content-movies/${imagePath}`);
    }
  },
  data() {
    return {
      movieList: data,
      swiperOptions: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
    }
  },
  computed: {
    firstMovies() {
      return this.movieList.slice(0, 9); // 0 ~ 9
    },
    tenToMovies() {
      return this.movieList.slice(9, 19); // 9 ~ 19
    },
    twentyMovies() {
      return this.movieList.slice(19, 29); // 0 ~ 9
    },
    thirtyMovies() {
      return this.movieList.slice(29, 39); // 9 ~ 19
    },


    swiper1() {
      return this.$refs.mySwiper1.$swiper;
    },
    swiper2() {
      return this.$refs.mySwiper2.$swiper;
    },
    swiper3() {
      return this.$refs.mySwiper3.$swiper;
    },
    swiper4() {
      return this.$refs.mySwiper4.$swiper;
    }
  }
}
</script>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  position: relative;
}

.swiper {
  width: 700px;
  height: 255px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  z-index: 0;
  position: relative;
}

.swiper img {
  width: 193px;
  height: 255px;
  z-index: 0;
  transition: all 0.2s linear;
  cursor: pointer;
}
.swiper img:hover {
  transform: scale(1.2);
}
</style>

