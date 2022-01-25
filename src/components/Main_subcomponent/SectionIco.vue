<template>
  <section class="py-5">
    <div class="row justify-content-center align-items-center mt-5">
      <div
        v-for="(sponsor, index) in Sponsors"
        :key="index"
        class="col"
      >
        <img
          :src="require(`../../assets/img/${sponsor.imgUrl}-primary.png`)"
          :alt="sponsor.imgAlt"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionIco',
  data() {
    return {
      Sponsors: [
        {
          imgUrl: 'client-logo-05',
          imgAlt: "It's Alive",
        },
        {
          imgUrl: 'client-logo-06',
          imgAlt: 'Sixbase',
        },
        {
          imgUrl: 'client-logo-07',
          imgAlt: 'Nowhere Famous',
        },
        {
          imgUrl: 'client-logo-04',
          imgAlt: 'Pencil',
        },
        {
          imgUrl: 'client-logo-03',
          imgAlt: 'Brook',
        },
        {
          imgUrl: 'client-logo-02',
          imgAlt: 'Tree',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.col {
    filter: opacity(0.3);
}
</style>
