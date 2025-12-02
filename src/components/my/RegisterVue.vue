<template>
  <div class="register_container">
    <div class="register">
      <h2>CineStream 회원가입</h2>
      <router-link to="/myPage">마이페이지</router-link>
      <h4>회원이 되어 다양한 혜택을 경험해보세요!</h4>
      <div>
        <form class="register_form">

          <p>아이디</p>
          <p id="warning_id">* 사용할 수 없는 아이디 입니다. (6~20자)</p> <!-- 유효성 검사 -->
          <div class="input_group_id">
            <input type="text" placeholder="아이디를 입력 (6~20자)" @input="hideWarning('warning_id')" v-model="userId"/>
            <button id="test">중복확인</button>
          </div>

          <p>비밀번호</p>
          <p id="warning_pw">* 비밀번호를 정확히 입력해주세요. (특수문자 포함 8~20자)</p> <!-- 유효성 검사 -->
          <input type="password" placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)" @input="hideWarning('warning_pw')" v-model="password"/>

          <p>비밀번호 확인</p>
          <p id="warning_confirmed_pw">* 입력하신 비밀번호와 일치하지 않습니다.</p> <!-- 유효성 검사 -->
          <input type="password" placeholder="비밀번호 재입력" @input="hideWarning('warning_confirmed_pw')" v-model="passwordConfirm"/>

          <p>이메일</p>
          <p id="warning_email">* 이메일을 정확히 입력해주세요.</p> <!-- 유효성 검사 -->
          <div class="input_group_email">
            <input type="text" placeholder="이메일 주소" @input="hideWarning('warning_email')" v-model="email"/>
            <span>@</span>
            <input type="text" placeholder="Email.com" @input="hideWarning('warning_email')" v-model="emailDomain"/>
          </div>

        </form>
      </div>
    </div>
    <div class="category">
      <h2>카테고리</h2>
      <h4>관심있는 장르를 담아보세요!</h4>
      <p id="warning_category">* 선택된 장르가 없습니다.</p>
      <div class="blocks">
        <div class="block">
          <h4>장르</h4>
          <div id="genre" class="list" @dragover.prevent="dragOver($event)">
            <div
                class="item"
                @dragstart="dragStart($event)"
                @dragend="dragEnd($event)"
                draggable="true"
                :id="item.id"
                :key="item.id" v-for="item in genreItems">
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="block">
          <h4>선택된 장르</h4>
          <div id="selectedGenre" class="list" @dragover.prevent="dragOver($event)">
            <div
                v-model="selectedGenres"
                class="item"
                @dragstart="dragStart($event)"
                @dragend="dragEnd($event)"
                draggable="true"
                :id="item.id"
                :key="item.id" v-for="item in selectedGenreItems">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="register_button">
      <button id="register" @click="register">회원가입</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      userId: '',
      password: '',
      passwordConfirm: '',
      email: '',
      emailDomain: '',
      emailFull: '',
      from: '',
      genreItems: [
        { id:1, text:'액션' },
        { id:2, text:'드라마' },
        { id:3, text:'애니메이션' },
        { id:4, text:'공포' },
        { id:5, text:'스릴러' },
        { id:6, text:'서스펜스' },
        { id:7, text:'다큐멘터리' },
        { id:8, text:'SF' },
      ],
      selectedGenreItems: [],
      selectedGenres: []
    };
  },
  methods: {
    hideWarning (warning_id) {
      const warningElement = document.querySelector(`#${warning_id}`);
      if(warningElement){
        warningElement.style.display = 'none';
      }
    },
    dragStart (event) {
      this.from = event.target.parentElement.id;
      this.to = this.from
    },
    dragEnd (event) {
      const id = Number(event.target.id);

      if(this.from === 'genre'){
        if(this.selectedGenreItems.length >= 2){
          window.alert('더 이상 추가 할 수 없습니다.');
          return;
        }
        /* genre 사용자가 선택한 장르 아이템 */
        const selectedItem = this.genreItems.find(list => list.id === id);
        if(selectedItem){
          /* 장르 => 선택된 장르 */
          this.genreItems = this.genreItems.filter(list => list.id !== id);
          this.selectedGenreItems.push(selectedItem);
        }
      }else if(this.from === 'selectedGenre'){
        /* selectedGenre 사용자가 선택한 장르 아이템 */
        const selectedItem = this.selectedGenreItems.find(list => list.id === id);
        if(selectedItem){
          /* 선택된 장르  => 장르 */
          this.selectedGenreItems = this.selectedGenreItems.filter(list => list.id !== id);
          this.genreItems.push(selectedItem);
        }
      }
    },
    dragOver () {
      /*비워두기*/
    },
    async register () {
      this.emailFull = `${this.email}@${this.emailDomain}`;
      this.selectedGenres = this.selectedGenreItems.map(item => item.text);
      // 회원가입 유효성 검사

      // 유저 아이디
      if(this.userId.length < 6 || this.userId.length > 20){
        const userId = document.querySelector('#warning_id');
        userId.style.display = 'block';
        return;
      }
      // 유저 비밀번호
      const specialKey = /[!@#$%^&*]/;
      if(this.password.length < 8 || this.password.length > 20 || !specialKey.test(this.password)){
        const password = document.querySelector('#warning_pw');
        password.style.display = 'block';
        return
      }
      // 유저 비밀번호 확인
      if(this.passwordConfirm.length < 8 || this.passwordConfirm.length > 20 || this.passwordConfirm !== this.password){
        const passwordConfirm = document.querySelector('#warning_confirmed_pw');
        passwordConfirm.style.display = 'block';
        return;
      }
      if(this.email === '' || this.emailDomain === ''){
        const email =  document.querySelector('#warning_email');
        email.style.display = 'block';
        return;
      }
      if(this.selectedGenres.length < 1){
        const category =  document.querySelector('#warning_category');
        category.style.display = 'block';
        return;
      }
      // SpringBoot api 연결
      try{
        await axios.post('/api/members/new', {
          userId: this.userId,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
          email: this.emailFull,
          genre: this.selectedGenres
        });
        window.alert('회원가입 성공');
        console.log('회원가입 성공');
      }catch(error){
        window.alert('회원가입 실패');
        console.error('회원가입 실패', error);
      }
    },
  },
};
</script>


<style>
/* 회원가입 폼 */
.register_container {
  width: 700px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #1f2936;
  border-radius: 8px;
  margin-top: 50px;
  padding: 30px;
}
h2, h4, p, span {
  color: white;
  font-weight: bold;
}
.register_form {
  width: 100%;
  height: 100%;
  margin-top: 50px;
}
.register_form input {
  width: 500px;
  height: 30px;
  outline: none;
  padding: 10px;
}
.register_form #warning_id, #warning_pw, #warning_confirmed_pw, #warning_email, #warning_category {
  display: none;
  color: red;
}
.register p {
  margin-top: 5px;
  margin-bottom: 5px;
}
.input_group_id {
  display: flex;
}
.input_group_id #test {
  width: 100px;
  height: 30px;
  border-style: none;
  margin-left: 5px;
}
.input_group_email input {
  width: 242px;
  padding: 10px;
}

/* 카테고리 */
.category {
  margin-top: 50px;
}
.blocks {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.list {
  width: 250px;
  height: 200px;
  background-color: #293648;
  margin-top: 10px;
}
.list .item {
  list-style: none;
  color: white;
  font-weight: bold;
  padding: 0.5px;
}

/*회원가입 버튼*/
.register_button {
  margin-top: 50px;
  width: 500px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
#register {
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  border-style: none;
  background-color: #10151d;
  cursor: pointer;
}
</style>