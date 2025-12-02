<template>
  <div class="Footer">
    <button class="Footer_clear" @click="clearAll">초기화</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    clearAll() {
      this.$store.commit('clearAllItems');
    }
  }
};
</script>

<style scoped>
.Footer {
  width: 200px;
  margin-left: 400px;
}
.Footer .Footer_clear {
  width: 200px;
  color: white;
  background-color: #ED3C2D;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  border-radius: 40px;
  border: 2px outset #8a2424;
  font-weight: bold;
}
</style>