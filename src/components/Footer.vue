<template>
  <footer class="container-fluid px-0">
    <div class="container py-3 address">
      <div class="row pt-5">
        <div class="col-6">
          <h1 class="fs-6 fw-bold pb-3 text-light">
            Address
          </h1>
          <h2 class="text-address">
            382 NE 191st St # 87394 Miami, FL 33179-3899
          </h2>
          <h3 class="text-address">
            +1(305) 547-9909 (9am - 5pm EST, Monday - Friday)
          </h3>
          <h4 class="text-address">
            support@maxcoach.com
          </h4>
          <div class="social-ico d-flex mt-4 gap-5 fs-4">
            <i class="fab fa-twitter" />
            <i class="fab fa-facebook-f" />
            <i class="fab fa-instagram" />
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-4">
              <h1 class="fs-6 fw-bold pb-3 text-light">
                Explore
              </h1>
            </div>
            <div class="col-4 offset-4">
              <h1 class="fs-6 fw-bold pb-3 text-light">
                Information
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <ul>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Start here</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Blog</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >About Us</a>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <ul>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Success story</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Courses</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <ul>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Membership</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Purchase guide</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Privacy policy</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-reset text-decoration-none"
                  >Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 text-center mt-4">
          <p>&copy; 2020 Maxcoach. All Rights Reserved</p>
        </div>
        <div class="link_up">
          <a
            href="#app"
            class="text-decoration-none text-light"
          >
            <i class="fas fa-long-arrow-alt-up" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style';
footer {
    position: relative;
    background-color: #141423;
    color: lightgray;
  .address,
  .text-address{
    font-size: 0.9em;
    line-height: 2.5rem;
  }
  ul{
      list-style: none;
      padding: 0;
    }
  .link_up {
      position: absolute;
      bottom: 20px;
      right: 50px;
      width: 50px;
      height: 50px;
      background-color: $green-color;
      border-radius: 50%;
      font-size: 2em;
      text-align: center;
      line-height: 50px;
  }
}

</style>
