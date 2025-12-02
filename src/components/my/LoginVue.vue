<template>
  <div class="Login">
    <div class="Login_container">
      <div class="Login_header">
        <h2>CineStream 로그인adfasdasb</h2>
      </div>
      <div class="Login_body">
        <form @submit.prevent="login">
          <input type="text" class="input1" placeholder="아이디">
          <input type="password" class="input2" placeholder="비밀번호">
          <button type="submit" class="login">로그dsads인accc</button>
        </form>
        <div class="Social_container">
          <button class="social1"><img src="@/assets/social_login/kakao.png"></button>
          <button class="social2"><img src="@/assets/social_login/google.png"></button>
        </div>
      </div>
      <div class="Login_footer">
        <router-link to="/register"><span>회원이 아니신가요adsad?</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
    };
  },
  methods: {
    async login () {
      try{
        await axios.post('/api/members/login');
        console.log('클릭');
      }catch(error){
        window.alert('로그인 실패');
        console.error('로그인 실패', error);
      }
    },
  },
};
</script>

<style scoped>
.Login {
  width: 100%;
  display: flex;
}
.Login_container {
  width: 700px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  background-color: #1f2936;
  border-radius: 10px;
}
h2 {
  margin-top: 25px;
  color: white;

}
.Login_header {
  width: 460px;
  margin-left: auto;
  margin-right: auto;
}
.Login_body {
  width: 500px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.Login_body input {
  width: 460px;
  height: 50px;
  padding: 18px 12px;
  outline: none;
}
.Login_body .input2 {
  margin-top: 2px;
  margin-bottom: 2px;
}
.Login_body .login {
  margin-top: 8px;
  width: 460px;
  height: 50px;
  color: white;
  background-color: #10151d;
  border-style: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.Login_body .social1 {
  margin-top: 4px;
  margin-left: 4px;
  width: 183px;
  height: 45px;
  border-style: none;
  border-radius: 12px;
  cursor: pointer;
}
.Login_body .social2 {
  margin-top: 4px;
  margin-left: 4px;
  width: 179px;
  height: 45px;
  border-style: none;
  border-radius: 12px;
  cursor: pointer;
}
.Login_body .social2 img {
  width: 183px;
  height: 45px;
}
.Social_container {
  width: 460px;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  justify-content: center;
}
.Login_footer {
  width: 460px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 13px;
  font-weight: bold;
  font-style: oblique;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: white;
}
</style>