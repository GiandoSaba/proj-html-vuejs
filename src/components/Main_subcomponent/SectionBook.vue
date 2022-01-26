<template>
  <section>
    <div class="row my-5">
      <div class="col-4">
        <h2 class="subtitle fs-6 mb-4">
          Book Store Online
        </h2>
        <h1 class="title mt-3">
          Be Alpha With <span class="text-green">Wingman's Book</span>
        </h1>
        <ul class="text-green mt-4 list-checked">
          <li>Help you understand yourself better</li>
          <li>Revealing mature tips</li>
          <li>Give the right advice</li>
          <li>Fascinating examples of alpha man</li>
        </ul>
        <button class="my_btn">
          Get Free Ebook
        </button>
      </div>
      <div class="col-7 offset-1">
        <div class="row row-cols-2 text-center">
          <div
            v-for="(book,index) in BookList"
            :key="index"
            class="col p-0"
          >
            <div class="container-fluid book-container">
              <div class="button-list">
                <ul>
                  <li><i class="fas fa-search" /></li>
                  <li><i class="fas fa-shopping-cart" /></li>
                  <li><i class="far fa-heart" /></li>
                  <li><i class="fas fa-signal" /></li>
                </ul>
              </div>
              <img
                class="img-fluid"
                :src="require(`../../assets/img/${book.imgUrl}-400x400.jpg`)"
                :alt="book.imgUrl"
              >
              <h1 class="fs-5 fw-bold mt-4 mb-3">
                {{ book.title }}
              </h1>
              <h2 class="text-green fw-bold fs-6">
                <span class="fs-5">${{ book.price }}</span>.00
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBook',
  data() {
    return {
      BookList: [
        {
          title: 'Alpha man by Maxcoach',
          price: 29,
          imgUrl: 'product-book-11',
        },
        {
          title: 'Real man 4.0 by MaxCoach',
          price: 39,
          imgUrl: 'product-book-10',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/style';
ul.list-checked {
    position: relative;
    list-style: none;
    margin-left: 0;
    padding-left: 1.2em;

    li {
        font-size: 0.8em;
        line-height: 3em;
        &:before {
            content: "\2713";
            position: absolute;
            left: 0;
        }
    }
}
.book-container {
  position: relative;
  ul {
    list-style: none;
    padding: 0;
    position: absolute;
    top: 10%;
    right: 12%;
    display: none;
    li {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: white;
      border-radius: 50%;
      margin: 1em;
      box-shadow: 0 0 10px #585858a6;
    }
  }
  &:hover {
    ul {
      display: block;
    }
  }
}
</style>
