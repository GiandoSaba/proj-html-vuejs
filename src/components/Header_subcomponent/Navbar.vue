<template>
  <nav class="row justify-content-between align-items-center py-3">
    <div class="logo col-2">
      <img
        class="img-fluid"
        src="../../assets/img/dark-logo.png"
        alt="Logo"
      >
    </div>
    <ul class="list-inline col-8 text-center m-0 fw-medium">
      <li
        v-for="(item,index) in navItems"
        :key="index"
        class="list-inline-item mx-3 align-middle"
      >
        <a
          class="text-reset text-decoration-none mx-1"
          :href="item.url"
        > {{ item.name }} </a>
        <i class="fas fa-angle-down" />
      </li>
    </ul>
    <div class="social-ico col-2 d-flex gap-3 fs-5">
      <i class="fab fa-twitter" />
      <i class="fab fa-facebook-f" />
      <i class="fab fa-instagram" />
      <i class="fab fa-linkedin" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navItems: [
        {
          name: 'Home',
          url: '#',
          current: false,
        },
        {
          name: 'Pages',
          url: '#',
          current: false,
        },
        {
          name: 'Courses',
          url: '#',
          current: false,
        },
        {
          name: 'Features',
          url: '#',
          current: false,
        },
        {
          name: 'Blog',
          url: '#',
          current: false,
        },
        {
          name: 'Shop',
          url: '#',
          current: false,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/style';
nav {
  color: #3F3A64;
}
</style>
