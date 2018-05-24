<template>

<div id= "register">
<div class="ui middle aligned center aligned grid">
  <div class="column login">
    <h2 class="ui image header">
      <img src="../assets/cartoon-characters-spongebob-reading-book-png-0.png" class="image">
      <div class="content">
       Create New Account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input v-model='name' type="text" name="nama" placeholder="nama">
          </div>
        </div>

        <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input v-model="username" type="text" name="username" placeholder="username">
            </div>
          </div>

        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input  v-model='password' type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div @click='register' class="ui fluid large blue submit button">Sign Up</div>
      </div>

    </form>

    <div class="ui message">
        Have an account? <a href=""><router-link to="/login">Log in Here</router-link></a>
      </div>
  </div>
</div>
</div>


</template>

<script>

export default {
  data:{
    name:'',
    username:'',
    password:'',
  },
  methods:{
     register(){
            axios.post('http://localhost:5000/register',
            {
                name:this.name, 
                username:this.username, 
                password:this.password})
            .then(user=>{
                alert("successfully create new account")
                this.$router.push('/login')
                console.log(user)
            })
            .catch(err=>{
                alert("maaf terjadi kesalahan")
                console.log(err)
            })
        }
  }
}

</script>

<style type="text/css" scoped>
body {
  background-color: #cfcfcf;
}
body .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}

.image{
    background-color: transparent !important
}

.register{
    padding-top: 100px !important
}
</style>