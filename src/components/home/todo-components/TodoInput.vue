<template>
  <div class="Input">
    <div class="Input_container">
      <div class="Todo_input_container">
        <input class="Todo_input1" type="text"
               placeholder="Enter the movie title"
               v-model="todoInput" v-on:keyup.enter="addTodo"/>
      </div>
      <div class="Todo_btn_Container">
        <button class="Todo_btn1" type="button" @click="addTodo">목록에 추가</button>
        <ModalVue v-if="showModal" @close="showModal = false">
          <h3 slot="header">오류</h3>
          <h3 slot="body">관심있는 영화를 메모해주세요!</h3>
          <h3 slot="footer">
            <button class="modal-default-button" @click="modalOn">확인</button>
          </h3>
        </ModalVue>
      </div>
    </div>
  </div>
</template>

<script>
import ModalVue from '@/components/common/ModalVue.vue';

export default {
  components: { ModalVue },
  data() {
    return {
      todoInput: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if(this.todoInput !== ''){
        this.$store.commit('addOneTodo', this.todoInput);
        this.clearInput();
      }
      else {
        this.modalOn();
      }
    },
    clearInput() {
      this.todoInput = '';
    },
    modalOn() {
      this.showModal = !this.showModal
    }
  }
};
</script>

<style scoped>
.Input {
  width: 700px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Input_container {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Todo_input_container,
.Todo_btn_Container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.Todo_btn_Container {
  margin-top: 10px;
}

.Todo_input1{
  width: 600px;
  height: 45px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid;
  outline: none;
  text-align: center;
}
.Todo_btn1 {
  width: 450px;
  height: 35px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: bold;
  border-radius: 40px;
  border-style: none;
  background-color: #2D72ED;
  border: 2px outset #19085e;
}
</style>