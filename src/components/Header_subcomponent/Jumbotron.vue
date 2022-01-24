<template>
  <section class="row pt-5">
    <div class="vertical-menu d-flex flex-column gap-3">
      <img
        class="ico"
        src="../../assets/img/school_triangle.png"
        alt="school_triangle"
      >
      <img
        class="ico"
        src="../../assets/img/life_buoy.png"
        alt="life_buoy"
      >
      <img
        class="ico"
        src="../../assets/img/book_closed.png"
        alt="book_closed"
      >
      <img
        class="ico"
        src="../../assets/img/cart_icon.png"
        alt="cart_icon"
      >
    </div>
    <div class="col-6 m-auto px-5">
      <h2 class="fs-6 subtitle">
        I'M WINGMAN
      </h2>
      <h1 class="title my-4">
        Peace On Earth A Wonderful Wish But No Way
      </h1>
      <h3 class="fs-6 text-secondary">
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
      <div class="image">
        <img
          src="../../assets/img/home-movation-hero-image.png"
          alt="home-movation-hero-image"
          class="hero"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
};
</script>

<style lang="scss" scoped>
section {
  .vertical-menu{
    width: 50px;
    position: absolute;
    right: -5px;
    top: 20%;
    background-color: white;
    border-radius: 10px;
    padding: 1em;
    box-shadow: 0 1px 2px;
  }
  .title {
    font-size: 4em;
  }
  .image {
    background-image: url('../../assets/img/home-movation-shape-face.png');
    background-position-y: 12em;
    background-position-x: right;
    background-size: 90%;
    background-repeat: no-repeat;
  }
}

</style>
