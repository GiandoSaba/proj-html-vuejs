<template>
  <header>
    <div class="container">
      <Navbar />
      <Jumbotron />
    </div>
  </header>
</template>

<script>
import Navbar from './Header_subcomponent/Navbar.vue';
import Jumbotron from './Header_subcomponent/Jumbotron.vue';

export default {
  name: 'Header',
  components: {
    Navbar,
    Jumbotron,
  },
};
</script>

<style scoped lang="scss">
header {
    background-image: url('../assets/img/background-pattern-wavify.png');
    background-color: #43789d1f;
}
</style>
