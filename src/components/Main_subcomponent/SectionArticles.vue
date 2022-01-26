<template>
  <section>
    <h2 class="subtitle fs-6">
      Blog Update
    </h2>
    <h1 class="title fs-1">
      Interesting <span class="text-green">articles updated</span> daily
    </h1>
    <div class="row row-cols-4 mt-5">
      <div
        v-for="(post,index) in BlogPosts"
        :key="index"
        class="col"
      >
        <div class="image-container">
          <img
            class="img-fluid image-rounded image"
            :src="require(`../../assets/img/${post.image}-480x325.jpg`)"
            :alt="post.image"
          >
        </div>
        <div class="text-green mt-4">
          <i class="far fa-calendar" />
          <span class="date">{{ post.date }}</span>
        </div>
        <h1 class="fw-bold my-4 article_title">
          {{ post.title }}
        </h1>
        <p class="text-secondary">
          {{ post.text }}
        </p>
      </div>
    </div>
    <div class="text-center mt-3">
      <h3 class="subtitle text-green fs-6 text-decoration-underline">
        View all posts
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionArticles',
  data() {
    return {
      BlogPosts: [
        {
          title: 'How to Stay True to Your Personal Brand',
          text: 'When it comes to your business or career, you want ...',
          date: 'May 13,2020',
          image: 'motivation-blog-04',
        },
        {
          title: '5 Viral Lessons in 5 Years of Freelancing',
          text: 'Being self-employed and working from home, it\' easy to get ...',
          date: 'May 13,2020',
          image: 'motivation-blog-03',
        },
        {
          title: '11 Super Userful Tips for Small-Business Owners',
          text: 'Being a small-business owner poses a ton of challenges. We ...',
          date: 'May 13,2020',
          image: 'motivation-blog-02',
        },
        {
          title: 'How to Give Yourself Grace to Start Again',
          text: 'Forgive yourself for bad habits you may have started or ...',
          date: 'May 13,2020',
          image: 'motivation-blog-01',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style';
.col {
    &:hover .image {
      transition: 1s linear;
      transform: scale(1.1);
    }

    .date {
        font-size: 0.8em;
        margin-left: 1em
    }
    h1 {
        font-size: 1rem;
        &:hover {
          color: $green-color;
          cursor: pointer;
        }
    }
    p {
        font-size: 0.9rem;
    }
}
</style>
