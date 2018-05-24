<template>
  <div class="home">
    <Navbar></Navbar>
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<h3 class="ui center aligned header">Doubling Stackable Grid</h3>
<div class="ui three column stackable grid container">
  <div class="column">
      <!--UI CARD-->
    <Card></Card>
  </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    Card
  }
}
</script>
