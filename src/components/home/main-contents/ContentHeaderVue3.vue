<template>
  <div class="Header">
    <h2>이건 어떨까요?</h2>
    <router-link to="/find"><i class="fa-solid fa-arrow-right fa-lg"></i></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Header {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
h2 {
  font-size: 20px;
  color: white;
  background-color: #161d27;
}
i {
  padding-top: 12px;
  padding-right: 5px;
  color: white;
}
</style>