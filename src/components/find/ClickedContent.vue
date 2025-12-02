<template>
  <div class="Clicked_container">
    <!-- Content_header -->
    <div class="Content_header">
      <div class="Content_background_img">
        <!-- Background_header -->
        <div class="Background_header">
          <span>
            <!-- 홈 버튼 -->
            <router-link to="/">
              <i class="fa-solid fa-chevron-left fa-lg"></i>
            </router-link>
          </span>
          <span>
            <!-- 탐색 버튼 -->
            <router-link to="/find">
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </router-link>
          </span>
        </div>
        <div class="Content_info">
          <!-- 영화 제목, 평점, 영화 포스터 -->
          <div class="Movie_header_area">
            <div class="Movie_info">
              <h2>{{ movie.name }}</h2>
              <p>{{ movie.english_name }}</p>
              <div class="movie_rating">
                <span>{{ movie.rate }}%</span>
              </div>
            </div>
            <div class="Movie_poster">
              <img :src="getImage(movie.image)"/>
            </div>
          </div>
          <div class="Rating_wrapper">
            <button class="dislike">별로에요</button>
            <button class="like">좋아요</button>
          </div>
          <ul class="Info3">
            <li>장르<span>{{ movie.genre }}</span></li>
            <li>연령등급<span>{{ movie.age }}</span></li>
            <li>개봉일<span>{{ movie.release }}</span></li>
            <li>러닝타임<span>{{ movie.time }}분</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 영화 정보 컨테이너 -->
    <div class="Info_container">
      <div class="Info_1">
        <ul class="Tab-buttons">
          <li>
            <button class="Tab-button" data-target="info1">작품정보</button>
          </li>
          <li>
            <button class="Tab-button" data-target="info2">리뷰</button>
          </li>
        </ul>
      </div>
      <div id="info1-content" class="Tab-content">
        <!-- 줄거리 -->
        <p>{{ movie.story }}</p>
      </div>
      <div id="info2-content" class="Tab-content">
        <!-- 리뷰 작성-->
        <ReviewVue></ReviewVue>
      </div>
    </div>
    <ClickedActorYT></ClickedActorYT>
    <!-- 리뷰 리스트 -->
    <div id="info2-content-review" class="Tab-content">
      <hr>
      <div class="review_header">
        <span>리뷰</span>
      </div>
      <div class="review_container">
        <!--아이디명, 날짜, 리뷰내용(70글자 제한), 별점-->
        <div class="review_content_container">
          <div class="user">
            <!-- 아이디명-->
            <div>qwer1234
              <!-- 리뷰 등록일 -->
              <div class="user_date">2024.10.23</div>
            </div>
              <!-- 별점 -->
              <div class="user_rate">
                <i class="fa-solid fa-star user_star"></i>
                <div>평점</div></div>
          </div>
          <!-- 라뷰 내용 -->
          <div class="user_review">개봉한지 10년이 지난 작품인데도 불구하고 지금봐도 전혀 어색하거나 그런거 없이 완벽한작품</div>
          <!-- 리뷰 좋아요 수 -->
          <div class="review_content_footer">
            <div class="user_like"><i class="fa-solid fa-heart"></i></div>
            <div>5</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ClickedActorYT from './find-contents/ClickedActorYT.vue';
import data from '@/assets/data/movie.json';
import ReviewVue from './find-contents/ReviewVue.vue';

export default {
  components: {
      ClickedActorYT,
      ReviewVue
  },
  mounted() {
    // 탭 버튼과 콘텐츠를 선택
    const buttons = document.querySelectorAll('.Tab-button'); //NodeList에 추가된다.
    const contents = document.querySelectorAll('.Tab-content'); //NodeList에 추가된다.
    const like = document.querySelector('.user_like');

    // 버튼 클릭 이벤트를 설정
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // 모든 버튼과 콘텐츠에서 active 클래스를 제거
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => {content.classList.remove('active')});
        
        // 클릭된 버튼에 active 클래스를 추가하고, 해당 콘텐츠를 표시
        // 버튼을 누르면, 해당 버튼의 속성값이 targetId로 전달
        const targetId = button.getAttribute('data-target');
        document.getElementById(`${targetId}-content`).classList.add('active'); // content에 active 추가 content가 보여진다.
        button.classList.add('active'); // 버튼에 active 추가 '초록색 백그라운드 색상'

        if(targetId === 'info2'){
          document.getElementById('info2-content-review').classList.add('active');
        }
      });
    });
    
    // 페이지 로드 시 첫 번째 버튼을 클릭하여 기본 탭을 표시
    if (buttons.length > 0) { // Node List (배열처럼)다룰 수 있다. const buttons의 길이
      buttons[0].click(); // 버튼의 0번방 클릭 상태
    }

    like.addEventListener('click', ()=> {
      like.style.color = 'red';
    });
  },
  data() {
    return {
      movieList: data,
      movie: {}
    }
  },
  methods: {
    findMovieById(id) {
      return this.movieList.find(movie => movie.id === parseInt(id)); /*movie == movieList의 각 데이터 요소들*/
    },
    getImage(imagePath) {
      return require(`@/assets/content-movies/${imagePath}`);
    }
  },
  created() {
    const id = this.$route.params.id;
    this.movie = this.findMovieById(id);
  }
}
</script>

<style scoped>
.Clicked_container {
  width: 100%;
  min-height: 100vh; /* 뷰포트 높이에 따라 최소 높이를 설정 */
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* 자식 요소들을 세로로 배치 */
}

/* Content_header */
.Content_background_img {
  width: 100%;
  height: 450px;
  margin: 0 auto;
  /* background-image:url('@/assets/content-movies/background.webp'); */
}
.Background_header {
  width: 700px;
  height: 56px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.Background_header i {
  cursor: pointer;
  padding: 10px;
  color: white;
}
/* Content_header */

/* Content_info */
.Content_info {
  width: 700px;
  height: 293px;
  margin: 50px auto;
}
.Movie_info {
  width: 350px;
  height: 111px;
  display: flex;
  flex-flow: column nowrap;
}
.Movie_poster {
  width: 100px;
  height: 140px;
  background-color: #0CA678;
  margin-right: 30px;
  border-radius: 5px;
}
.Movie_poster img {
  width: 100px;
  height: 140px;
}
.Movie_header_area {
  width: 668px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background-color:#1f2936 ;
  border-radius: 8px;
}

.Movie_info h2, p, span {
  margin-left: 15px;
  margin-top: 5px;
}

.Movie_info h2 {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.Movie_info p {
  font-size: 14px;
  color: #98A4B7;
  margin-bottom: 5px;
}
.Movie_info span {
  font-size: 20px;
  font-weight: bold;
  color: #0CA678;
}
/* Content_info */

/* Rating_wrapper */
.Rating_wrapper {
  width: 668px;
  height: 50px;
  margin: 30px auto;
  display: flex;
  justify-content: space-evenly;
}
.Rating_wrapper .like, .dislike {
  width: 329px;
  height: 48px;
  border-style: none;
  border-radius: 8px;
  background-color: #1d2733;
  color: #98A4B7;
  cursor: pointer;
}
/* Rating_wrapper */

/* Info_container */
.Info_container {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.Info_1 {
  width: 700px;
  height: 50px;
}

/*Info3 장르, 연령, 개봉, 러닝타임*/
.Info3 {
  display: flex;
  list-style: none;
  flex-flow: row wrap;
  align-items: center;
  text-align: center;
  border: 1px solid;
  border-radius: 8px;
  border-color: #1d2733;
}
.Info3 li {
  width: 320px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin-left: 6px;
  color: #98A4B7;
}
.Info3 li span {
  margin-top: 0;
}




/* Tab-buttons */
.Tab-buttons {
  list-style: none;
  padding: 0;
  margin-top: 50px;
  display: flex;
}

.Tab-button {
  width: 167px;
  height: 47px;
  text-align: center;
  color: #98A4B7;
  background-color: #1d2733;
  border: none;
  border-radius: 8px;
  margin-left: 2px;
  margin-right: 2px;
  cursor: pointer;
}
.Tab-content p {
  height: 250px;
  background-color: #1d2733;
  border-radius: 8px;
  margin-left: 3px;
  color: #98A4B7;
  padding: 10px;
  font-weight: bold;
}
.Tab-button.active {
  background-color: #0CA678;
  color: white;
}

/* Tab-content */
.Tab-content {
  display: none;
}

.Tab-content.active {
  display: block;
}

/* 리뷰 */
#info2-content-review {
  width: 668px;
  height: 400px;
  border-radius: 8px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
#info2-content-review hr{
  color: #98A4B7;
  border: 1px solid;
  margin-bottom: 10px;
}
#info2-content-review .review_header {
  width: 600px;
  height: 20px;
}
.review_header span {
  margin-left: 0px;
}
.review_container {
  width: 668px;
  height: 200px;
  margin-top: 25px;
  border-radius: 8px;
  background-color: #1d2733;
  padding: 16px 16px 8px;
}
/* 리뷰 내부 */
.review_content_container {
  width: 635px;
  height: 174px;
  color: #98A4B7;
}
/* 리뷰 내부 -> 유저 아이디, 평점 컨테이너 */
.user {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  
}
/* 리뷰 내부 -> 리뷰 등록일 */
.user_date {
  font-size: 12px;
  text-align: center;
  font-weight: bold;
}
.user_rate {
  display: flex;
  align-items: center;
}
.user_rate .user_star {
  margin-right: 5px;
}
/* 리뷰 내부 -> 유저 리뷰 내용 */
.user_review {
  margin-top: 10px;
  width: 635px;
  height: 100px;
  font-weight: bold;
}
/* 리뷰 내부 -> 유저 좋아요, 좋아요 수 */
.review_content_footer {
  display: flex;
  border-top: 1px solid #98A4B7;
  padding-top: 5px;
  font-weight: bold;
}
.review_content_footer .user_like{
  margin-right: 5px;
}
</style>
