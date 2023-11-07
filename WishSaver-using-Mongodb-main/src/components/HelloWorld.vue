<template>
  <input type="text" v-model="name" >
  <button @click="handle">submit</button>
</template>

<script>
import axios from 'axios';

export default {
  methods:{
    data(){
      return{
        name:""
     }
    },
    handle(){
      axios.post('https://jsonplaceholder.typicode.com/posts').then(response=>{
        console.log(JSON.stringify(response.data))
        console.log('posted')
      })
    }
  }
}
</script>