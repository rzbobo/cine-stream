<template>
  <div class="Review_container">
    <div class="rate_star">
      <div class="star" :key="index" v-for="index in 5" @click="check(index)">
        <img v-if="index < score" src="@/assets/review_star/star_true.png" />
        <img v-if="index >= score" src="@/assets/review_star/star_false.png" />
      </div>
    </div>
    <div>
      <textarea rows="15" placeholder="리뷰를 작성해주세요"></textarea>
    </div>
    <div><button>리뷰 작성</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0
    };
  },
  methods: {
    check (index) {
      this.score = index + 1;
    },
  }
};
</script>

<style scoped>
.Review_container {
  margin-top: 10px;
}
textarea {
 width: 600px;
 height: 200px;
 background-color: #1d2733;
 color: #98A4B7;
 border: 0.5px;
 border-radius: 8px;
 font-weight: bold;
 outline: none;
 resize: none;
 font-size: 16px;
}
button {
  background-color: #1d2733;
  border-style: none;
  border-radius: 8px;
  color: #98A4B7;
  width: 200px;
  height: 30px;
  cursor: pointer;
}

/* 별점 */
.Review_container .rate_star {
  width: 600px;
  height: 40px;
  border: 1px solid #1d2733;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
}
.star {
  width: 30px;
  height: 30px;
}
.rate_star .star img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>