<template lang="html">
  <div id='app'>
    <h1>{{title}}</h1>

    <form>
      <label for="searchTerm">Search Term</label>
      <input class="u-full-width" type="text" id="searchTerm" name="searchTerm">
      <button class="button-primary" type="submit">Search</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Vue Image Search',
    };
  },
};
</script>

<style lang="css">
body {
  width: 80%;
  margin: 2em auto 0 auto;
}
</style>
