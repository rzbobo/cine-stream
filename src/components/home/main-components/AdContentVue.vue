<template>
  <div class="Ad">
    <img src="@/assets/ad/main-ad.jpeg" alt="광고 배너"/>
    <span class="Ad_name">원맨</span>
    <i class="fa-solid fa-rectangle-ad fa-lg"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Ad {
  width: 700px;
  height: 80px;
  background-color: red;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  position: relative; /* 여기에 추가 */
}
.Ad img {
  width: 100%;
  height: 100%;
}
.Ad i {
  color: white;
  width: 26px;
  height: 18px;
  position: absolute;
  z-index: 1;
  right: 10px; /* 오른쪽에 위치하게 설정 */
  bottom: 1px; /* 아래쪽에 위치하게 설정 */
}
.Ad .Ad_name {
  color: white;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  z-index: 1;
  left: 10px; /* 왼쪽에 위치하게 설정 */
  bottom: 10px; /* 아래쪽에 위치하게 설정 */
}
</style>