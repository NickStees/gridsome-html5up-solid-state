<template>
  <div id="page-wrapper" class="layout">
    <header id="header" class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <section id="wrapper">
      <header v-if="$slots.header">
        <slot name="header"/>
        <!-- header slot  -->
      </header>
      <div class="wrapper">
        <div class="inner">
          <slot/>
        </div>
      </div>
    </section>
    <section id="footer" v-if="$slots.footer">
      <div class="inner">
        <slot name="footer"/>
      </div>
    </section>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
</script>

<style>
</style>
