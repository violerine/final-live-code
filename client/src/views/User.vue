<template>
    <div id="admin">
        <Navbar></Navbar>
    
        <form class="panel panel-default container col-sm-5" >
          <div class="form-group" align="center">
            <label for="inputsm">Book Title</label>
            <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title of your Book">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Author</label>
            <input v-model="author" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
          </div>
           <div class="form-group">
            <label for="exampleFormControlTextarea1">Publisher</label>
            <input v-model="publisher" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
          </div>
          <div class="custom-file">
            <input @change="previewFile" ref="myFiles" type="file" class="custom-file-input" id="validatedCustomFile" required>
            <button class="ui button" type="button" @click="uploadPic">Upload</button>
          </div><br><br>
          <button @click="addNewBook" type="button" class="ui button">Submit Item</button>
        </form>
  </div>

</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'home',
  components: {

    Navbar,

  },
  data:function(){
      return{
          formdata : new FormData(),
          title:'',
          author:'',
          publisher:'',
          pic_url:''
      }
  },
  methods:{
        previewFile(file){
            console.log(file)
            var filedata=file.target.files[0]
            this.formdata.append('image',filedata)
        },
        uploadPic(){
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            console.log(this.formdata)
            axios.post("http://localhost:5000/books/upload",this.formdata,config)
            .then(({data})=>{
                console.log("masukkkk ga disini")
                console.log("data",data)
                console.log(data.link)
                this.pic_url=data.link
                alert('picture uploaded, now you can submit your new book')
            })
            .catch(err=>{
                console.log('errorzzzz')
                console.log(err)
            })
        },
         addNewBook(){
             var userId=localStorage.getItem('userId')
            axios.post("http://localhost:5000/books/add",
            {
                userId:userId,
                title:this.title,
                author:this.author,
                publisher:this.publisher,
                pic_url:this.pic_url
            })
            .then(({data})=>{
                console.log(data)
                alert("New item added")
            })
            .catch(err=>{
                console.log(err)
            })
        },
  }
}
</script>


<style>

#admin{
    
}

</style>