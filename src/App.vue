<template lang="html">
  <div id='app'>
    <h1>{{title}}</h1>

    <form @submit.prevent="formSubmitted()">
      <label for="searchTerm">Search Term</label>
      <input v-model="searchTerm" class="u-full-width"
      type="text" id="searchTerm" name="searchTerm">
      <button class="button-primary" type="submit">Search</button>
    </form>

  </div>
</template>

<script>
import Api from './Api';

export default {
  name: 'app',
  data() {
    return {
      title: 'Vue Image Search',
      searchTerm: '',
      images: [],
    };
  },
  methods: {
    formSubmitted() {
      Api.search(this.searchTerm)
        .then((images) => {
          // console.log(images);
          this.images = images;
        });
    },
  },
};
</script>

<style lang="css">
body {
  width: 80%;
  margin: 2em auto 0 auto;
}
</style>
