<template>
  <main class="py-5">
    <div class="container py-5">
      <SectionNumber />
      <SectionAbout />
      <SectionLatestcourse />
      <SectionBook />
      <SectionIco />
    </div>
    <div class="container-fluid p-0">
      <SectionTestimonial />
    </div>
    <div class="container py-5">
      <SectionArticles />
    </div>
  </main>
</template>

<script>
import SectionNumber from './Main_subcomponent/SectionNumber.vue';
import SectionAbout from './Main_subcomponent/SectionAbout.vue';
import SectionLatestcourse from './Main_subcomponent/SectionLatestcourse.vue';
import SectionBook from './Main_subcomponent/SectionBook.vue';
import SectionIco from './Main_subcomponent/SectionIco.vue';
import SectionTestimonial from './Main_subcomponent/SectionTestimonial.vue';
import SectionArticles from './Main_subcomponent/SectionArticles.vue';

export default {
  name: 'Main',
  components: {
    SectionNumber,
    SectionAbout,
    SectionLatestcourse,
    SectionBook,
    SectionIco,
    SectionTestimonial,
    SectionArticles,
  },
};
</script>

<style scoped lang="scss">

</style>
