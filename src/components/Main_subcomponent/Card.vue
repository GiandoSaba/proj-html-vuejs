<template>
  <div class="col my-4">
    <div class="image-container">
      <img
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
      <div class="d-flex gap-3 text-green">
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

</style>
