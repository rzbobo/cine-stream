<template>
  <div class="List">
    <div class="List_container">
      <ul>
        <li :key="index" v-for="(todoItem, index) in this.$store.state.todoItems">
          <span>
            <i class="fa-solid fa-check fa-lg"
               :class="{checkBtnCompleted: todoItem.completed}"
               @click="toggleItem(todoItem, index)"></i>
          </span>

          <span :class="{textCompleted: todoItem.completed}">
            {{ todoItem.item }}
          </span>

          <span>
            <button class="List_btn1" @click="removeItem(todoItem, index)">제외</button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeItem(todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index});
    },
    toggleItem(todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index});
    }
  },
}
</script>

<style>
.List {
  width: 500px;
  height: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  color: white;
}
.List_container ul li {
  width: 500px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: rgb(0, 0, 0); opacity : 0.8;
  border-radius: 8px;
  margin-left: -25px;
}
.List_btn1 {
  width: 60px;
  height: 30px;
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  background-color: #F25764;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>