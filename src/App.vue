<template>
  <div id="app">
    <router-view/>
    <nav class="menu">
      <div class="NavBar_Container">
        <ul>
          <router-link id="link1" to="/"><li>홈</li></router-link>
          <router-link id="link2" to="/find"><li>탐색</li></router-link>
          <router-link id="link3" to="/community"><li>커뮤니티</li></router-link>
          <router-link id="link4" to="/login"><li>마이페이지</li></router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    refreshPage() {
      this.$router.go(0);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: auto;
  background-color: #161d27;
}
.menu {
  width: 100%;
  height: 70px;
  background-color: #0c0e11; /*#263343*/
  position: fixed;
  bottom: 0;
  left: 0;
  color: white;
}
.NavBar_Container ul {
  text-align: center;
  margin-bottom: 10px;
}
.NavBar_Container li{
  width: 200px; /* 홈, 검색, 커뮤니티, 마이페이지 버튼 크기*/
  height: 70px; /* 홈, 검색, 커뮤니티, 마이페이지 버튼 높이*/
  list-style: none;
  display: inline-block;
  text-align: center; /* 버튼 중앙 정렬 */

  padding: 25px 10px 15px 15px;
  background-color: #0c0e11;
  transition-property: all;
  transition-duration: 1s;
}
.NavBar_Container li:hover{
  width: 250px;
  background-color: red;
  cursor: pointer;
  color: white;
  text-align: center; /* 버튼 중앙 정렬 */
}

#link1, #link2, #link3, #link4 {
  text-decoration: none;
  color: white;
}
</style>
