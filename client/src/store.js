import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allBooks:[],
    title:'',
    author:'',
    publisher:'',
    picurl:'',
    userid:''
  },
  mutations: {
    getBooks(state,payload){
      state.allBooks=payload
    },
    postBook(state,payload){
     
    }
  },
  actions: {
    getAllBooks({commit}){
      axios.get('http://localhost:5000/books/')
      .then(({data})=>{
        commit('getBooks',data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    newBook({commit},payload){
      axios.post('http://localhost:5000/books/add',{
        userId:req.body.userid,
        title:req.body.title,
        author:req.body.author,
        publisher:req.body.publisher,
        pic_url:req.body.pic_url
      })
      .then(({data})=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
})
