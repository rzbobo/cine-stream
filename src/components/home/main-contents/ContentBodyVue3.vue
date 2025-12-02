<template>
  <div class="Content_Body">
    <!-- 영화 리스트 -->
    <div :key="index" v-for="(movie, index) in limitedMovies" class="Movie1">
      <div class="Movie_Poster">
        <router-link :to="{name:'clicked', params:{id: movie.id}}">
          <img :src="getImage(movie.image)"/>
        </router-link>
      </div>
      <div class="Movie_Info">
        <div class="Title_Info">
          <router-link :to="{name:'clicked', params:{id: movie.id}}">
            <span>{{ movie.name }}</span>
          </router-link>
        </div>
        <div class="Component_Info">
          <img src="@/assets/content-movies/light-green.svg">
          <span>{{ movie.rate }}%</span>
        </div>
      </div>
    </div>
    <!-- 영화 리스트 / -->
  </div>
</template>

<script>
import data from '@/assets/data/movie.json'

export default {
  data() {
    return {
      movieList: data
    };
  },
  methods: {
    getImage(imagePath) {
      return require(`@/assets/content-movies/${imagePath}`);
    }
  },
  computed: {
    limitedMovies() {
      return this.movieList.slice(8, 12);
    }
  }
};
</script>

<style scoped>
.Content_Body {
  margin-top: 20px;
  width: 658px;
  height: 255px;
  background-color: #161d27;
  display: flex;
  justify-content: space-between;
}
.Movie1 {
  width: 140px;
  height: 255px;
}
.Movie_Poster, .Movie_Poster > a >img {
  width: 140px;
  height: 200px;
  border-radius: 8px;

}
.Movie_Poster img { /*영화 포스터 속성 */
  transition: all 0.2s linear;
  cursor: pointer;
}
.Movie_Poster img:hover {  /* 커서 시 영화 포스터 속성 */
  transform: scale(1.4);
}

.Movie_Info {
  width: 140px;
  height: 55px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  background-color: #1f2936;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.Movie_Info span {
  margin-left: 0;
}
.Movie_Info a {
  text-decoration: none;
  color: white;
}
.Title_Info {
  padding: 2px;
  text-align: center;
}
.Component_Info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.Component_Info img { /* light-green 공*/
  margin-left: 2px;
}
.Component_Info span {
  margin-top: 3px;
  margin-left: 5px;
}
</style>