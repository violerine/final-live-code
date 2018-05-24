<template>
<div class ="eachbook">
<!-- <div class="column">
     -->
    <div class="ui card" v-for="(book,index) in allBooks" :key="index" >
        <div class="image">
            <img src="../assets/spongebook.png">
        </div>
        <div class="content">
            <a class="header">{{book.title}}</a>
            <div class="meta">
            <span class="date">{{book.publisher}}</span>
            </div>
            <div class="description">
            <b>Author</b> : {{book.author}}
            </div>
        </div>
        <div class="extra content">
            <a>
            <i class="user icon"></i>
            {{book.createdAt}}
            </a>
        </div>
    <!-- </div> -->
</div>

</div>
</template>

<script>

import { mapState, mapActions} from 'vuex';

export default {
      created:function(){
        console.log("ni this get",this.getAllBooks())
        this.getAllBooks()
      },
      computed: {
    ...mapState([
        'allBooks'
    ])
  },
  methods:{
    ...mapActions([
      'getAllBooks'
      
    ])
  }
}

</script>