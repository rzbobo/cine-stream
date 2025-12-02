<template>
  <div class="Search">
    <div class="Search_Container" ref="container">
      <!-- 검색 입력 필드 -->
      <input
          class="Search_input"
          type="text"
          placeholder="영화 제목을 입력해주세요"
          @input="searchGroup"
      />
      <!-- 필터링된 영화 목록 -->
      <ul v-if="showList && filteredMovies.length > 0">
        <li :key="index" v-for="(movie, index) in filteredMovies" class="movie-items">
            <span>
              <router-link :to="{name:'clicked', params:{id:movie.id}}">
                <img :src="getImage(movie.image)" />
              </router-link>
            </span>
          <span class="movie_name">
              <router-link :to="{name:'clicked', params:{id:movie.id}}">
              {{ movie.name }}
              </router-link>
            </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/movie.json'

export default {
  data() {
    return {
      movieList: data,  // JSON에서 가져온 영화 데이터
      searchQuery: '',  // 검색어
      showList: false,  // 리스트의 표시 여부
    };
  },
  computed: {
    filteredMovies() {
      if (this.searchQuery == null) {
        return [];  // 검색어가 비어있으면 빈 배열을 반환
      }
      const query = this.searchQuery.toLowerCase();
      return this.movieList.filter(movie =>
          movie.name.toLowerCase().includes(query)
      ); // 결과를 9개로 제한
    }
  },
  mounted() { // mounted Dom에 마운트된 후 즉, 렌더링이 된 후
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() { // vue 컴포넌트가 파괴되기 직전 호출
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    searchGroup(event) {
      this.searchQuery = event.target.value; // 입력 필드의 값을 searchQuery에 할당
      this.showList = !!this.searchQuery;  // 검색어가 있으면 리스트를 보여주기 true 반환
    },
    getImage(imagePath) {
      return require(`@/assets/content-movies/${imagePath}`);
    },
    handleClickOutside(event) {
      const container = this.$refs.container; // ref="container"
      if (container != null && !container.contains(event.target)) {
        // 컨테이너 영역이 null이 아니고 (컨테이너 유효성 확인)
        // 있는지 없는지 부터 확인
        // 클릭된 곳이 컨테이너 영역이 아니면
        this.showList = false; // 리스트를 숨기기
      }
    }
  },
};
</script>

<style scoped>
.Search {
  width: 100%;
  height: 100%;
}
.Search_Container {
  width: 700px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  z-index: 1;
  position: relative; /* 필요 시 추가 */
}

.Search_Container input {
  width: 100%;
  padding: 10px;
  z-index: 2;
}

.Search_Container ul {
  overflow-y: auto;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  padding: 0;
  margin: 0;
  list-style: none;
}

.Search_Container li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 205px;
  background-color: #263343;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 10px 0; /* 상하 패딩 추가 */
  box-sizing: border-box;
}
.Search_Container li .movie_name {
  margin-left: 20px;
}

.Search_Container li img {
  width: 140px;
  height: 200px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
