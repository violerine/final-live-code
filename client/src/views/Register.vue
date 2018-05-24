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
        Have an account? <a href="login.html">Log in Here</a>
      </div>
  </div>
</div>
</div>


</template>

<script>

export default {

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