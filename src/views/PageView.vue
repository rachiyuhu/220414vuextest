<template>
    <div class="page">
        <h1>{{gettitle}}</h1>
        <p>{{getmemo}}</p>
    </div>
</template>


<script>
    export default {
        name : 'pageView',
        computed : { 
            gettitle : function(){
                return this.$store.state.board[this.$route.params.id-1].title;
                },
            getmemo: function(){
                return this.$store.state.board[this.$route.params.id-1].memo;
                }
            },
        
    }
</script>