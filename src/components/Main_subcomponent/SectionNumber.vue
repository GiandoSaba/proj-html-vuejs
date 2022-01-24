<template>
  <section class="pt-5">
    <div class="row row-cols-4 justify-content-center">
      <div
        v-for="item in numberList"
        :key="item.id"
        class="col text-center number-container"
      >
        <h1> {{ item.number }} </h1>
        <h2 class="text-uppercase subtitle fs-5">
          {{ item.title }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionNumber',
  data() {
    return {
      numberList: [
        {
          id: 1,
          title: 'Finished Session',
          number: '1.926',
        },
        {
          id: 2,
          title: 'Satisfaction Rate',
          number: '100%',
        },
        {
          id: 3,
          title: 'Enrolled Learners',
          number: '3092+',
        },
        {
          id: 4,
          title: 'Online Instructors',
          number: '200',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/style';
.number-container {
    background-image: url('../../assets/img/background-pattern-grid-line-06.png');
    background-size: cover;
    h1 {
        color: $green-color;
        font-weight: bolder;
        font-size: 2.5em;
    }
    h2 {
        font-size: 1.3em;
    }
}
</style>
