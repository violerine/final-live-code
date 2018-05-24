<template>
<!--NAVBAR-->
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="Home.vue">SpongeBook</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="this.userId!==null"><router-link to="/user">Add new Book</router-link></li>
        <ul class="nav navbar-nav">
       <li v-if="this.userId==null"><router-link to="/register">Register</router-link></li>
        </ul>
        <!-- <button type="button" class="btn btn-default navbar-btn">Sign in</button> -->
        <router-link to="/login" ><button v-if="this.userId!==null"  @click="signOut" type="button" class="btn btn-default navbar-btn">Sign Out</button></router-link>
        <router-link to="/login" ><button v-if="this.userId==null" type="button" class="btn btn-default navbar-btn">Sign In</button></router-link>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


</template>

<script>
export default{
  data:function(){
    return{
      userId : localStorage.getItem('userId')
    }
  },
  methods:{
    signOut(){
      localStorage.clear()
      this.$route.push("/login")
    }
  }
}
</script>