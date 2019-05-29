<template>
  <div class="inner">
    <h2>{{title}}</h2>
    <p v-if="subtitle">{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style scoped lang="scss">
</style>