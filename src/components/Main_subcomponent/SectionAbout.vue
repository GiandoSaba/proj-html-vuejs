<template>
  <section class="py-5">
    <div class="row">
      <div class="col-12">
        <h2 class="subtitle text-green fs-5">
          About Me
        </h2>
      </div>
      <div class="col-4 mb-5 mt-3">
        <h1 class="title fs-1 pd-5 md-4 lh-base">
          How to Be an Alpha Male:
          The 15 Habits of True Alphas
        </h1>
      </div>
      <div class="offset-2 col-6 mb-5 mt-3">
        <h2 class="fs-6 fw-bold lh-lg">
          Want to learn how to be <span class="text-green">an alpha male</span>?
          How to be more masculine?
          <br>How to be the man you've always wanted to be?
        </h2>
        <p class="mt-3 lh-2 pe-1">
          Your goal is to show the consistency of business, core values, and customer care.
          Punctuality, responsibility, individuality, accuracy, enthusiasm - you have to clearly
          explain how these qualities are applicable to your work.
          And the important thing is you do love what you do.
        </p>
      </div>
      <div class="col-6 my-5 image-container p-0">
        <img
          src="../../assets/img/home-movation-video-poster-670x450.jpg"
          alt="home-movation-video-poster"
          class="img-fluid"
        >
        <img
          src="../../assets/img/icon-youtube-play.png"
          alt="icon-youtube-play"
          class="youtube-logo"
        >
      </div>
      <div class="col-4 m-auto pe-5">
        <h2 class="title fs-4 lh-lg">
          "Every morning you have two choices: continue
          to sleep with your dreams, or wake up and
          chase them."
        </h2>
        <img
          src="../../assets/img/home-movation-shape-01.png"
          alt="home-movation-shape"
          class="img-fluid mt-5 mb-2"
        >
        <h3 class="fw-bold fs-5 my-2 mt-3">
          Kaixa Stark
        </h3>
        <h4 class="subtitle text-green fs-6">
          WingMan
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAbout',
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/style';
.image-container {
  position: relative;
  .youtube-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}

</style>
