<template>
  <div class="logo">
    <div class="Header_Container">
      <img src="@/assets/logo/logo.png" alt="KPP팀 로고">
      <span id="alarm">
        <a href="https://www.youtube.com/"><i id="i1" class="fa-brands fa-youtube fa-lg"></i></a> |
        <a href="https://www.instagram.com"><i id="i2" class="fa-brands fa-instagram fa-lg"></i></a> |
        <a href="https://www.facebook.com/"><i id="i3" class="fa-brands fa-facebook fa-lg"></i></a> |
        <a href="https://x.com/?lang=ko"><i id="i4" class="fa-brands fa-twitter fa-lg"></i></a> |
        <i id="i5" class="fa-solid fa-bell fa-lg"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo {
  width: 750px;
  height: 100px;
  background-color: #1f2936;
  margin-left: auto; /* Header 중앙 정렬*/
  margin-right: auto; /* Header 중앙 정렬*/
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
.Header_Container {
  width: 750px; /* Header 너비 */
  height: 100px; /* Header 높이 */
  background-color: #1f2936;
  border-bottom-left-radius: 40px; /*Header 하단 좌측 Radius(둥굴게)*/
  border-bottom-right-radius: 40px; /*Header 하단 우측 Radius(둥굴게)*/

  display: flex; /* Flex 컨테이너 */
  justify-content: space-between; /*로고와 SNS 간격 "space-between"*/
  align-items: center;
}
.Header_Container img {
  width: 132px;
  height: 100px;

  margin-left: 40px;
}
#alarm {
  color: white;
  margin-right: 20px;
}
#alarm i{
  width: 32px;
  height: 32px;
  color: white;
  margin-right: 10px; /*아이콘 끼리 간격 우측 10 */
  margin-left: 10px; /*아이콘 끼리 간격 좌측 10 */
  padding: 10px;
}
#alarm #i1:hover {
  transition-property: all;
  transition-duration: 1s;
  color: red;
}
#alarm #i2:hover {
  transition-property: all;
  transition-duration: 1s;
  color: #E1306C;
}
#alarm #i3:hover {
  transition-property: all;
  transition-duration: 1s;
  color: rgb(71, 71, 206);
}
#alarm #i4:hover {
  transition-property: all;
  transition-duration: 1s;
  color: #00acee;
}
#alarm #i5:hover {
  transition-property: all;
  transition-duration: 1s;
  color: gold;
}
</style>