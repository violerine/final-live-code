<template>

<div id="login">
<div class="ui middle aligned center aligned grid">
  <div class="column login">
    <h2 class="ui image header">
      <img src="../assets/cartoon-characters-spongebob-reading-book-png-0.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form" method="POST">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input v-model="username" type="text" name="username" placeholder="username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input v-model='password' type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large blue submit button" @click='login'>Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="/register.html">Sign Up</a>
    </div>
  </div>
</div>
</div>

</template>




  <style type="text/css" scoped>
    body {
      background-color: #cfcfcf;
    }
    body > .grid {
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

    .login{
        padding-top: 100px !important
    }
  </style>