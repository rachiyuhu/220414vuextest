<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다.</h1>
    <input v-model="title" type="text" size="40">
    <br>
    
    <textarea v-model="memo" cols="42" rows="10"></textarea>
    <br>
    <!-- 완료를 눌렀을 때 id, title과 memo 둘다 저장하도록 -->
    <button @click="addtext">완료</button> 
    

  </div>
</template>

<script>
export default {
  data : function(){
    return {
      title : "",
      memo : "",
    }; // 여기까지 함수니까 ;
  },
  methods : { 
      addtext : function(){
      const id = this.$store.state.board.length + 1; 
      this.$store.state.board.push({id : id, title : this.title, memo:this.memo});


    },

    addtextMu : function(){
      this.$store.commit('addtext', this.title);
      this.$store.commit('addtext', this.memo);
      this.$router.push('/');
    }


    /*
    addtitle : function(){
      const id = this.$store.state.board.length+1;

      this.$store.state.board.push({id : id, title : this.title});
    },
    addmemo : function(){
      const id = this.$store.state.board.length+1;
      this.$store.state.board.push({id : id, memo : this.memo});

    },

    addtitleMu : function(){
      this.$store.commit('addtitle',this.title);
      this.$router.push('/');
    },

    addmemoMu : function(){
      this.$store.commit('addmemo',this.memo);
      this.$router.push('/');
    }*/
  },
}
</script>