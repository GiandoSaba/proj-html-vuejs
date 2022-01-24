<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

#app {
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap');
  font-family: 'Poppins', sans-serif;
  font-size: 100%;
  .title {
    font-family: 'Playfair Display', serif;
  }
  .my_btn {
    background-color: #26aa94;
    color: white;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    padding: 0 5em;
    &:hover,
    &:active {
      background-color: #4d4374;
    }
}
}
</style>
