<template>
  <div class="col my-4">
    <div class="container-fluid p-0">
      <div class="image-container">
        <img
          class="img-fluid"
          :src="require(`../../assets/img/${card.imgUrl}-480x298.jpg`)"
          :alt="card.imgUrl"
        >
      </div>
      <div class="container mt-4">
        <h2 class="text-green fw-bold fs-6">
          <span class="fs-5">${{ card.price }}</span>.{{ card.priceCents }}
        </h2>
        <h3 class="fw-bold fs-6 my-3">
          {{ card.title }}
        </h3>
      </div>
      <div class="container d-flex gap-3 text-green">
        <div class="info">
          <i class="far fa-file-alt me-2 align-middle" />
          <span class="align-middle">{{ card.lessons }} Lessons</span>
        </div>
        <div class="info">
          <i class="far fa-user me-2 align-middle" />
          <span class="align-middle">{{ card.students }} Students</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/style';
.container-fluid {
  height: 450px;
  &:hover {
    border-radius: $b-radius;
    box-shadow: 0 0 10px #585858a6;
    img {
        transition: 1s linear;
        transform: scale(1.1);
    }
  }
  .info {
      height: 30px;
      i {
          line-height: 20px;
      }
      span {
          font-size: 0.8em;
          line-height: 30px;
      }
  }
}

</style>
