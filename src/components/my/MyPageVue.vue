<template>
  <div class="mypage_container">
    <div class="mypage_buttons_list">
      <h2>마이페이지</h2>
      <div class="buttons_list">
        <button class="mypage_button" data-target="my">내정보</button>
        <button class="mypage_button" data-target="like">좋아요 표시한 영화</button>
        <button class="mypage_button" data-target="post">내 게시글</button>
      </div>
    </div>
    <div class="mypage_info">
      <!-- 내정보 -->
      <!--section_my-->
      <div id="section_my" class="section">
        <h2>내정보</h2>
        <p>아이디</p>
        <input type="text" placeholder="아이디를 입력 (6~20자)"/>
        <p>비밀번호</p>
        <input type="password" placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)"/>
        <p>이메일</p>
        <div class="input_group_email">
          <input type="text" placeholder="이메일 주소"/>
          <span>@</span>
          <input type="text" placeholder="Email.com"/>
        </div>
        <div class="fix_container">
          <button id="fix">수정하기</button>
        </div>
      </div>
      <!-- 좋아요 표시한 영화 -->
      <!--section_like-->
      <div id="section_like" class="section">
        <h2>좋아요</h2>
        <table>
          <thead>
          <tr>
            <th>영화제목</th>
            <th>장르</th>
            <th>러닝타임</th>
            <th>감독</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- 내 게시글 -->
      <!--section_post-->
      <div id="section_post" class="section">
        <h2>게시글</h2>
        <table>
          <thead>
          <tr>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  mounted () {
    const buttons = document.querySelectorAll('.mypage_button');
    const sections = document.querySelectorAll('.section');

    buttons.forEach(button => {
      button.addEventListener('click', ()=> {
        buttons.forEach(btn => {
          btn.classList.remove('active');
        });

        sections.forEach(section => section.classList.remove('active'));

        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(`section_${targetId}`);

        if(targetSection != null){
          targetSection.classList.add('active');
        }
        button.classList.add('active');
      });
    });
    if(buttons.length > 0){
      buttons[0].click();
    }
  },
};
</script>

<style>
/* 전체 컨테이너 */
.mypage_container {
  display: flex;
  width: 800px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 30px;
  background-color: #1f2936;
  border-radius: 8px;
}
h2, p, span {
  color: white;
  font-weight: bold;
}
/* 버튼 */
.mypage_buttons_list {
  width: 200px;
  height: 500px;
  padding: 10px;
}
.mypage_buttons_list .buttons_list {
  margin-top: 30px;
}
.mypage_button {
  display: block;
  width: 180px;
  height: 70px;
  margin-top: 10px;
  border-style: none;
  border-radius: 8px;
  color: #98A4B7;
  background-color: #283546;
  cursor: pointer;
}
.mypage_button.active {
  background-color: #0CA678;
  color: white;
}
/* 정보 전체구조 */
.mypage_info {
  width: 500px;
  height: 500px;
  margin-left: 50px;
}
.section {
  width: 500px;
  height: 100%;
  display: none;
  padding: 10px;
}
.section p {
  margin-top: 20px;
}
.section.active {
  display: block;
}

/* 내정보 */
.section input {
  width: 500px;
  height: 30px;
  outline: none;
  padding: 10px;
}
.input_group_email input {
  width: 220px;
  padding: 10px;
  outline: none;
}

/*수정 버튼*/
.fix_container {
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.fix_container #fix {
  width: 400px;
  height: 30px;
  border-style: none;
  border-radius: 8px;
  color: white;
  background-color: #283546;
  cursor: pointer;
}

/*테이블 */
table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  padding: 10px;
  border: 1px solid black;
  color: #98A4B7;
  background-color: #1d2733;
  text-align: left;
}

table thead {
  background-color: #444;
}
</style>