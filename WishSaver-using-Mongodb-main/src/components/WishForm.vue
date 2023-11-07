<template>
  <div>
    <label for="name">Name:</label>
    <input v-model="name" type="text" id="name" />

    <label for="wish">Wish:</label>
    <input v-model="wish" type="text" id="wish" />

    <button @click="saveWish">Save</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      wish: '',
    };
  },
  methods: {
    saveWish() {
      const data = {
        name: this.name,
        wish: this.wish,
      };

      axios.post('http://localhost:3000/api/wishes', data)

        .then(response => {
          console.log('Wish saved successfully:', response.data);
        })
        .catch(error => {
          console.error('Error saving wish:', error);
        });
    },
  },
};
</script>

<style>
/* Add any desired styles here */
</style>
