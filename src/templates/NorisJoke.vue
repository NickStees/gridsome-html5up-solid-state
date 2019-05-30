<template>
  <Layout :title="$page.joke.title">
    <template slot="header">
      <Hero :title="$page.joke.title"/>
    </template>
    <div class="joke inner">
      <div v-html="$page.joke.content"></div>
      <p>source: https://api.chucknorris.io/{{$page.joke.title.replace("Joke ", "jokes/")}}</p>
    </div>
  </Layout>
</template>

<page-query>
query Joke ($path: String!) {
  joke: norisJoke (path: $path) {
    title
    content
    path
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  metaInfo() {
    return {
      title: this.$page.joke.title
    };
  }
};
</script>

<style lang="scss">
.joke {
  padding: 1.5rem;
  font-size: 125%;
}
</style>