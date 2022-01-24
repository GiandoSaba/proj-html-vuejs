<template>
  <section class="row pt-5">
    <div class="col-6 m-auto px-5">
      <h2 class="fs-5">
        I'M WINGMAN
      </h2>
      <h1 class="title my-4">
        Peace On Earth A Wonderful Wish But No Way
      </h1>
      <h3 class="fs-5">
        Success isn't overnight.
        It's when everyday you get a little better than the day before.
        It's all adds up.
      </h3>
      <button
        type="button"
        class="my_btn mt-4 py-3"
      >
        Get Started for Free
        <i class="fas fa-arrow-right" />
      </button>
    </div>
    <div class="col-6">
      <img
        src="../../assets/img/home-movation-hero-image.png"
        alt="home-movation-hero-image"
        class="hero"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 4em;
}

.hero {
  background-image: url('../../assets/img/home-movation-shape-face.png');
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
