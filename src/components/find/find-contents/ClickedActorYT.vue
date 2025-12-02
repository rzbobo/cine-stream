<template>
  <div class="Actor_container">
    <div class="Actor_header">
      <span>출연진</span>
    </div>
    <div class="Actor_body">
    <!-- 출연진 -->
        <ul>
            <li :key="index" v-for="(actor, index) in movie.actors">
                <div class="image"><img :src="getImage(actor.image)"></div>
                <div class="name">{{ actor.name }}</div>
            </li>
        </ul>
    </div>
    
    <hr>
    
    <!-- 감독 -->
    <div class="Director_footer">
        <span class="span1">감독</span>
        <span class="span2">{{ movie.director }}</span>
    </div>
    <div class="Trailer_container">
        <iframe 
          width="100%" height="315" 
          :src="movie.trailer" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/movie.json';

export default {
  data() {
    return {
      movieList: data,
      movie: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    this.movie = this.findMovieById(id);
  },
  methods: {
    findMovieById(id) {
      return this.movieList.find(movie => movie.id === parseInt(id));
    },
    getImage(imagePath) {
      return require(`@/assets/actors/${imagePath}`);
    },
  }
}
</script>

<style scoped>
.Actor_container {
    width: 668px;
    height: 550px;
    margin: 100px auto;
}
.Actor_header {
    width: 668px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    margin-top: 0;
    color: #98A4B7;
    font-weight: bold;
}
.Actor_body {
    margin-top: 10px;
    width: 668px;
    height: 125px;
}
.Actor_body ul {
  padding: 0;
  display: flex;
  overflow-x: auto; /* 수평 스크롤 가능 */
}
.Actor_body li {
    list-style: none;
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    color: #98A4B7;
    font-weight: bold;
}
.image, img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.name {
    width: 70px;
    height: 32px;
    text-align: center;
}
hr {
  color: #98A4B7;
  border: 1px solid;
}
.Director_footer {
    width: 668px;
    height: 24px;
    margin-top: 10px;
    font-weight: bold;
    color: #98A4B7;
}
.Trailer_container {
    width: 100%;
    margin-top: 50px;
}
</style>