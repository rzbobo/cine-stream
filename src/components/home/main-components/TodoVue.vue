<template>
  <div class="Todo">
    <div class="Todo_Container">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from '../todo-components/TodoHeader.vue';
import TodoInput from '../todo-components/TodoInput.vue';
import TodoList from '../todo-components/TodoList.vue';
import TodoFooter from '../todo-components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.Todo {
  border-radius: 40px;
  margin-top: 50px; /*Header와의 간격*/
  margin-left: auto; /* Todo 중앙 정렬*/
  margin-right: auto; /* Todo 중앙 정렬*/
  background-color: #1f2936;
  width: 750px;
  height: auto;
  box-shadow: 5px 5px 5px 5px rgb(27, 27, 27);
}
.Todo_Container {
  width: 750px;
  height: auto;
}
</style>