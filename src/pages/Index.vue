<template>
  <Layout>
    <template slot="header">
      <section id="banner">
        <div class="inner">
          <div class="logo">
            <span class="icon fa-diamond"></span>
          </div>
        </div>
        <Hero
          title="Hello, world!"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores"
        />
      </section>
    </template>

    <!-- One -->
    <section id="one" class="wrapper spotlight style1">
      <div class="inner">
        <a href="#" class="image">
          <img src="images/pic01.jpg" alt>
        </a>
        <div class="content">
          <h2 class="major">Magna arcu feugiat</h2>
          <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
          <a href="#" class="special">Learn more</a>
        </div>
      </div>
    </section>

    <!-- Two -->
    <section id="two" class="wrapper alt spotlight style2">
      <div class="inner">
        <a href="#" class="image">
          <img src="images/pic02.jpg" alt>
        </a>
        <div class="content">
          <h2 class="major">Tempus adipiscing</h2>
          <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
          <a href="#" class="special">Learn more</a>
        </div>
      </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper spotlight style3">
      <div class="inner">
        <a href="#" class="image">
          <img src="images/pic03.jpg" alt>
        </a>
        <div class="content">
          <h2 class="major">Nullam dignissim</h2>
          <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
          <a href="#" class="special">Learn more</a>
        </div>
      </div>
    </section>

    <div class="inner">
      <section class="features">
        <Feature
          title="Feature Component"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."
          link="#"
          img="/images/pic04.jpg"
        />
        <Feature
          title="Second Feature"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."
          link="#"
          img="/images/pic05.jpg"
        />
      </section>

      <hr>
      <h3>Example of fetching JSON data from and API</h3>
      <ul class="alt">
        <li v-for="edge in $page.jokes.edges" :key="edge.node.id">
          {{ edge.node.title }}
          <g-link :to="edge.node.path" class="button small">Read more</g-link>
        </li>
      </ul>
      <div class="pagination">
        <Pager :info="$page.jokes.pageInfo"/>
      </div>
    </div>
    <!-- end inner -->

    <template slot="footer">
      <h2 class="major">Get in touch</h2>
      <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
    </template>
  </Layout>
</template>

<page-query>
query Jokes ($page: Int) {
  jokes: allNorisJoke (perPage: 10, page: $page, sortBy: "title", order: ASC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Feature from "~/components/Feature.vue";

export default {
  components: {
    Pager,
    Feature
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
