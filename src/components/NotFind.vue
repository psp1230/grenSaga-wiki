<script setup>
</script>

<script>
export default {
  data() {
    return {
      imgPath:'./img/robot.webp'
    }
  },

  computed: {
  },
  head:{
    title:'施工中 - 格蘭日服攻略站'
  },
  methods: {
  },
  created() {
  },
  watch: {
  },
  mounted() {
    document.title = '施工中 - 格蘭日服攻略站'
  },
  updated() {
  }
}

</script>

<template>
  <section id="notFind">
    <div class="title">
      此頁面目前尚未完成，緩慢進行中請見諒
    </div>
    <div class="imgArea">
      <img :src="imgPath" alt="">
    </div>
    <div class="content">
      如有熱心玩家願意協助完成網站，歡迎<a href="https://home.gamer.com.tw/homeindex.php?owner=wangch15" target="_blank">私訊</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

#notFind{
  width: 100%;
  .title{
    width: 100%;
    margin-top: 20px;
    font-size: $h3;
    font-weight: 700;
    color: $darkfontcolor;
    @include flex;
  }
  .imgArea{
    width: 100%;
    @include flex;
    margin-top: 50px;
    img{
      width: 300px;
    }

  }
  .content{
    width: 100%;
    margin-top: 50px;
    @include flex;
    font-size: $h5;
    color: $lightfontcolor;
    a{
      color: $warningcolor;
      font-weight: 500;
    }
  }
}
</style>
