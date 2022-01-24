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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
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
