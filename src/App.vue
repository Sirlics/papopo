

<template>
    <div class="wrapper">
    <div class="content">
      <div class="item" v-for="post in allPosts" :key="post.id">
        <div class="title">
        {{ post.title}}
        </div>
        <div class="text">
         {{post.body}}
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['allPosts',])  ,
  components: {
  },
  methods:mapActions(['fetchPosts']) ,
  async mounted(){
       this.fetchPosts(3)
  }
}
</script>

<style>
*{
   padding:0;
  margin: 0;
  border: 0;
  }
  *,*:before,*:after{
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  
  :focus,:active{outline: none};
  a:focus,a:active{outline:none};
   
  nav,footer,header,aside{display:block};
  
  html,body{
    height: 100%;
    width: 100%; 
    line-height:1; 
    font-size: 100%;
    font-size:14px;
    -ms-text-size-adjust: 100%; 
    -webkit-text-size-adjust:100%; 
  }
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display:none;}
  button{cursor: pointer;}
  button::-moz-focus-inner{padding:0;border:0}
  a, a:visited{text-decoration:none;}
  a:hover{text-decoration:none;}
  ul li{list-style:none;}
  img{vertical-align:top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:400;};
   

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
min-height: 100%;
}
.content {
margin:0 auto;
height: 100%;
display: flex;
flex-direction: column;
}
.item {
width: 400px;
height: 300px;
margin-top: 50px;
border: 5px solid #333;
}
.title {
font-size: 20px;
}
.text {
font-size: 16px;
}


</style>
