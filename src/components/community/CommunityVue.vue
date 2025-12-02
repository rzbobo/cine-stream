<template>
  <div class="Community_container">
    <div class="Community-alarm"><h2>같이 소통해요!🎉</h2></div>
    <div class="Tab">
      <!-- 커뮤니티 -->
      <ul class="Tab-buttons">
        <li>
          <button class="Tab-button" data-target="info1">게시글</button>
        </li>
        <li>
          <button class="Tab-button" data-target="info2">영화리뷰</button>
        </li>
        <li>
          <button class="Tab-button" data-target="info3">인기영화</button>
        </li>
      </ul>
    </div>
    <div id="info1-content" class="Tab-content">
      <div class="post">
        <div class="post-header">
          <div class="post-wrapper">
            <table>
              <thead>
              <tr>
                <th>작성자</th>
                <th>게시글</th>
                <th>작성일</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="post-body">

        </div>
      </div>
    </div>
    <div id="info2-content" class="Tab-content">
      <div class="post">
        <div class="post-header">
          <div class="post-wrapper">
            <table>
              <thead>
              <tr>
                <th>작성자</th>
                <th>리뷰</th>
                <th>작성일</th>
              </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div class="post-body">

        </div>
      </div>
    </div>
    <div id="info3-content" class="Tab-content">
      <div class="post">
        <div class="post-header">
          <div class="post-wrapper">
            <table>
              <thead>
              <tr>
                <th>작성자</th>
                <th>영화명</th>
                <th>작성일</th>
              </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div class="post-body">

        </div>
      </div>
    </div>
    <div class="Write">
      <button>게시물 작성하기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    const buttons = document.querySelectorAll(".Tab-button");
    const contents = document.querySelectorAll(".Tab-content");

    buttons.forEach(function(button) {
      button.addEventListener('click', ()=>{ /*각각의 버튼들에 클릭 이벤트가 들어오면*/
        buttons.forEach(function(btn) {  btn.classList.remove('active'); /*css active 제거*/
          contents.forEach(function(content) { content.classList.remove('active');

            const targetId = button.getAttribute("data-target");
            document.getElementById(`${targetId}-content`).classList.add('active');
            button.classList.add('active');
          });
        });
      });
    });
    if(buttons.length > 0) {
      buttons[0].click();
    }
  },
};
</script>

<style scoped>
.Community-alarm {
  width: 700px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
h2 {
  font-size: 20px;
  color: white;
  background-color: #161d27;
}
.Community_container {
  width: 100%;
  height: auto;
}
.Tab {
  width: 700px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

}
.Tab li {
  list-style: none;
}
.Tab-buttons {
  display: flex;
}
.Tab-buttons button {
  width: 167px;
  height: 47px;
  border-style: none;
  border-radius: 8px;
  background-color: #1d2733;
  color: #98A4B7;
  margin-left: 2px;
  margin-right: 2px;
  cursor: pointer;
}
.Tab-content .post {
  width: 700px;
  height: auto;
  background-color: #1d2733;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.Tab-button.active {
  background-color: #0CA678;
  color: white;
}
.Tab-content {
  display: none;
}
.Tab-content.active {
  display: block;
}


/*게시판*/
table {
  width: 100%;
  border-collapse: collapse;
  color: #98A4B7;
  font-weight: bold;
  font-size: 13px;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #1d2733;
}

/*게시판 작성*/
.Write {
  width: 700px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.Write button {
  width: 167px;
  height: 47px;
  border-style: none;
  border-radius: 8px;
  background-color: #1d2733;
  color: #98A4B7;
  cursor: pointer;
  transition: all 1s;
}
.Write button:hover {
  background-color: #0CA678;
  color: white;

}
</style>