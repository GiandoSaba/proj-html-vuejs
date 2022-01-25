<template>
  <section>
    <div class="row">
      <div class="slider rounded-circle text-center d-flex">
        <div class="choice-container m-auto">
          <img
            class="d-inline-block arrow"
            src="../../assets/img/image.png"
            alt="arrow_up"
            @click="(active > 0) ? (active -= 1) : (active = testimonials.length -1)"
          >
          <span class="fw-bold d-block fs-6">{{ active + 1 }}/{{ testimonials.length }}</span>
          <img
            class="d-inline-block arrow"
            src="../../assets/img/image (1).png"
            alt="arrow_down"
            @click="(active < testimonials.length -1) ? active += 1 : active = 0"
          >
        </div>
      </div>
      <div class="col-6 background-wave d-flex">
        <div class="my_container m-auto text-center px-5">
          <h2 class="subtitle text-green fs-5 mb-5">
            Real Stories
          </h2>
          <p class="fs-4 mb-5 fw-bold">
            {{ testimonials[active].text }}
          </p>
          <img
            class="rounded-circle mb-4"
            :src="require(`../../assets/img/${testimonials[active].image}.jpg`)"
            :alt="testimonials[active].author"
          >
          <h3 class="fs-5 fw-bold mb-4">
            {{ testimonials[active].author }}
          </h3>
          <h4 class="text-green fs-6">
            / {{ testimonials[active].job }}
          </h4>
        </div>
      </div>
      <div class="col-6 m-0 p-0">
        <img
          class="img-fluid w-100"
          src="../../assets/img/home-movation-testimonial-image.jpg"
          alt="home-movation-testimonial"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTestimonial',
  data() {
    return {
      active: null,
      testimonials: [
        {
          author: 'Mina Hollace',
          job: 'Freelancer',
          text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me',
          image: 'testimonial-avata-02',
        },
        {
          author: 'Madley Pondor',
          job: 'IT Specialist',
          text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
          image: 'testimonial-avata-04',
        },
        {
          author: 'Luvic Dubble',
          job: 'Private Tutor',
          text: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners',
          image: 'testimonial-avata-01',
        },
        {
          author: 'Florence Themes',
          job: 'Multimedia Admin',
          text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          image: 'testimonial-avata-03',
        },
      ],
    };
  },
  created() {
    this.active = 0;
  },
};
</script>

<style scoped lang="scss">
.row {
    position: relative;
    .slider {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        background-color: white;
        cursor: pointer;
        .arrow {
            width: 10px;
        }
    }
    .background-wave{
        background-image: url('../../assets/img/background-pattern-wavify.png');
        background-color: #F7F7FB;
        .my_container {
            width: 70%;
            img{
                width: 100px;
            }
        }
    }
}
</style>
