<template lang="html">
  <div id='app'>
    <h1>{{title}}</h1>

    <form @submit.prevent="formSubmitted()">
      <label for="searchTerm">Search Term</label>
      <input v-model="searchTerm" class="u-full-width"
      type="text" id="searchTerm" name="searchTerm">
      <button class="button-primary" type="submit">Search</button>
    </form>

    <img v-if="loading" id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif">
    <!-- <section class="images">
      <img v-for="image in images" :key="image.id" :src="image.src.large2x">
    </section> -->
    <section class="images">
      <!-- <embed v-for="image in images" :key="image.id"
      :src="image.video_files[0].link" type="video/mp4"/> -->

      <video v-for="image in images" :key="image.id" width="320" height="240" controls>
  <source :src="image.video_files[0].link" type="video/mp4">
  Your browser does not support the video tag.
</video>

    </section>

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
      loading: false,
    };
  },
  methods: {
    formSubmitted() {
      this.loading = true;
      this.images = [];
      Api.search(this.searchTerm)
        .then((images) => {
          // console.log(images);
          this.images = images;
          this.loading = false;
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

img {
  width: 100%;
}

.images {
  column-count: 3;
}
</style>
