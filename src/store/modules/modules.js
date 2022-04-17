export default {
   actions:{
     async fetchPosts(ctx , limit){
        const rel = await fetch('https://jsonplaceholder.typicode.com/posts?limit=' + limit) 
        const posts = rel.json()
        ctx.commit('updatePosts' , posts)
         }
   },
   mutations:{
         updatePosts(state , posts){
            state.posts = posts
         },
   },
    state:{
      posts:[]
    },
    getters:{
       allPosts(state){
          return state.posts
       },
       postsCount(state){
         return state.posts.length
       },
    },

}