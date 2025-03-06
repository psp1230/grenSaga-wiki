<script setup>
import SideNav from '@/components/SideNav.vue'
</script>


<script>

export default {
  data() {
    return {

    }
  },

  methods: {

  },

  created() {

  },

  mounted() {

  },



}

</script>

<template>
  <main id="main">
    <section class="side-nav">
      <SideNav />
    </section>
    <section class="container">
      <router-view></router-view>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

#main {
  width: 100%;
  max-width: 1024px;
  padding: 20px 10px;
  min-height: 100vh;
  margin: 0 auto;
  @include flex(flex-start, flex-start);

  @include bkpt(1024px) {
    flex-direction: column;
  }

  .side-nav {
    width: 250px;

    @include bkpt(1024px) {
      display: none;
    }
  }

  .container {
    flex: 1;
    min-height: 100vh;
    border: 1px solid $maincolor;
    padding: 20px 20px;

    @include bkpt(1024px) {
      flex: none;
      width: 100%;
    }
  }
}
</style>
