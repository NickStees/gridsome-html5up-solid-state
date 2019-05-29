<template>
  <Layout>
    <template slot="header">
      <Hero
        title="Hello, world!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores"
      />
    </template>

    <h3 class="major">Lorem ipsum dolor</h3>
    <p>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>

    <p>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.</p>

    <h3 class="major">Vitae phasellus</h3>
    <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>

    <section class="features">
      <article>
        <a href="#" class="image">
          <!-- Learn how to use images here: https://gridsome.org/docs/images -->
          <g-image alt="Example image" src="../assets/images/pic04.jpg"/>
        </a>
        <h3 class="major">Sed feugiat lorem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
        <a href="#" class="special">Learn more</a>
      </article>
      <article>
        <a href="#" class="image">
          <!-- Learn how to use images here: https://gridsome.org/docs/images -->
          <g-image alt="Example image" src="../assets/images/pic05.jpg"/>
        </a>
        <h3 class="major">Nisl placerat</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
        <a href="#" class="special">Learn more</a>
      </article>
    </section>

    <hr>
    <p>Example of fetching JSON data from and API</p>
    <div v-for="edge in $page.jokes.edges" :key="edge.node.id">
      {{ edge.node.title }}
      <g-link :to="edge.node.path">Read more</g-link>
    </div>
    <div class="pagination">
      <Pager :info="$page.jokes.pageInfo"/>
    </div>

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

export default {
  components: {
    Pager
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
