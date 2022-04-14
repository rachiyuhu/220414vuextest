import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 0,
    board : [
      {id : 1, title : "첫번째 제목", memo : "첫번째 작성된 내용입니다.", },
      {id : 2, title : "두번째 제목", memo : "두번째 작성된 내용입니다.", },
    ], 
  },
  getters: {
  },

  mutations: {
    addtext : function(state, title){
      const id = state.board.length + 1;
      state.board.push({id:id, title:title});
    },
    clickcount : function(state){
      state.board.count++; //클릭한 id만 올라가야함
    }
    
  },

  actions: {},
  modules: {},
})
