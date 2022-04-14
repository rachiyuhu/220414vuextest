<template>
  <div class="home">
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>클릭횟수(조회수)</td>
      </tr>
      <tr v-for="board in $store.state.board"
        :key="board">
        <td>{{board.id}}</td> <!--메모 추가하면 추가할수록 숫자 늘려주기 보드값에+1-->


<!--@click="clickcount(객체명, id)"-->
        <td @click="clickcount(state,id)">
        {{board.title}}</td> <!-- 클릭 시 라우터($router.push)로 글 내용 보여주기-->
        
        
        <td>{{$store.state.count}}</td><!--clickcount : 클릭한 페이지의 조회수 늘려주기(보드값에 추가하는거 아님)-->
      </tr>
  </div>
</template>

<script>
export default {

  name: 'HomeView',

  components: { 
  
  },
  methods : {
    clickcount : function(){
    this.$store.commit('clickcount')
    this.$router.push('`/board/${board.id}`')
    }
  },

  }

  
</script>
