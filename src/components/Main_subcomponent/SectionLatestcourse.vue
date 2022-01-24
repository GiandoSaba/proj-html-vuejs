<template>
  <section>
    <div class="text-center">
      <h2 class="subtitle text-green fs-6">
        Begin your Journay at MaxCoach
      </h2>
      <h1 class="title mt-3">
        Latest <span class="text-green">Online Courses</span>
      </h1>
    </div>
    <div class="row row-cols-3 my-5">
      <Card
        v-for="(card,index) in CardList"
        :key="index"
        :card="card"
      />
    </div>
    <div class="container text-center">
      <button class="my_btn">
        View all courses
        <i class="fas fa-arrow-right" />
      </button>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'SectionLatestcourse',
  components: {
    Card,
  },
  data() {
    return {
      CardList: [
        {
          imgUrl: 'motivation-course-06',
          title: 'How to be Successfull: Create A Growth Mindset for Success',
          price: 30,
          priceCents: '00',
          lessons: 3,
          students: 50,
        },
        {
          imgUrl: 'motivation-course-05',
          title: 'How to Build Confidence in Your Abilities',
          price: 30,
          priceCents: '00',
          lessons: 11,
          students: 50,
        },
        {
          imgUrl: 'motivation-course-04',
          title: 'Productivity Machine - Focus in a Distracted World',
          price: 20,
          priceCents: '00',
          lessons: 5,
          students: 50,
        },
        {
          imgUrl: 'motivation-course-03',
          title: 'Effective Time Management Mastery - Complete Guide',
          price: 20,
          priceCents: '00',
          lessons: 18,
          students: 50,
        },
        {
          imgUrl: 'motivation-course-02',
          title: 'Body Language Secrets for Entrepreneurs',
          price: 25,
          priceCents: '99',
          lessons: 19,
          students: 50,
        },
        {
          imgUrl: 'motivation-course-01',
          title: 'Management Skills: The Science of Leadership',
          price: 19,
          priceCents: '99',
          lessons: 17,
          students: 50,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

</style>
