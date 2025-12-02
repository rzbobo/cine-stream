import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                try {
                    const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    if (item && typeof item === 'object' && 'item' in item) {
                        arr.push(item);
                    }
                } catch (e) {
                    console.error('Error parsing JSON from localStorage:', e);
                }
            }
            arr.sort((a, b) => {
                if (a.item > b.item) {
                    return 1;
                } else if (a.item < b.item) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneTodo(state, todoInput) {
            if (state.todoItems.length >= 5) {
                window.alert("더 이상 추가할 수 없습니다.");
                return;
            }
            if (todoInput) { // 유효성 검사 추가
                var object = { completed: false, item: todoInput };
                localStorage.setItem(todoInput, JSON.stringify(object));
                state.todoItems.push(object);
            } else {
                console.error('Invalid todo input:', todoInput);
            }
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed =
                !state.todoItems[payload.index].completed;
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});
