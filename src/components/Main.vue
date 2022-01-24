<template>
  <main class="py-5">
    <div class="container py-5">
      <SectionNumber />
      <SectionAbout />
      <SectionLatestcourse />
    <!-- Section-BookStore -->
    <!-- /Section-BookStore -->
    <!-- Section-Ico -->
    <!-- /Section-Ico -->
    <!-- Section-Testimonial -->
    <!-- /Section-Testimonial -->
    <!-- Section-Articles -->
    <!-- /Section-Articles -->
    </div>
  </main>
</template>

<script>
import SectionNumber from './Main_subcomponent/SectionNumber.vue';
import SectionAbout from './Main_subcomponent/SectionAbout.vue';
import SectionLatestcourse from './Main_subcomponent/SectionLatestcourse.vue';

export default {
  name: 'Main',
  components: {
    SectionNumber,
    SectionAbout,
    SectionLatestcourse,
  },
};
</script>

<style scoped lang="scss">

</style>
