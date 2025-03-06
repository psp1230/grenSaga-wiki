<script>
export default {
  data() {
    return {
      chaList: [
        {
          code: 'las',
          name: 'ラス',
          path: '/character/las',
          imgPath: './img/char/las.webp',
        },
        {
          code: 'seriad',
          name: 'セリアード',
          path: '/character/seriad',
          imgPath: './img/char/seriad.webp',
        },
        {
          code: 'quyi',
          name: 'キュイ',
          path: '/character/quyi',
          imgPath: './img/char/quyi.webp',
        },
        {
          code: 'karte',
          name: 'カルト',
          path: '/character/karte',
          imgPath: './img/char/karte.webp',
        },
        {
          code: 'namalie',
          name: 'ナマリエ',
          path: '/character/namalie',
          imgPath: './img/char/namalie.webp',
        },
        {
          code: 'win',
          name: 'ウィン',
          path: '/character/win',
          imgPath: './img/char/win.webp',
        },
        {
          code: 'oruta',
          name: 'オルタ',
          path: '/character/oruta',
          imgPath: './img/char/oruta.webp',
        },
        {
          code: 'jun',
          name: 'ジュン',
          path: '/character/jun',
          imgPath: './img/char/jun.webp',
        },
        {
          code: 'kaito',
          name: 'ラス',
          path: '/character/kaito',
          imgPath: './img/char/kaito.webp',
        },
        {
          code: 'ruin',
          name: 'ルイン',
          path: '/character/ruin',
          imgPath: './img/char/ruin.webp',
        },
        {
          code: 'yuna',
          name: 'ユナ',
          path: '/character/yuna',
          imgPath: './img/char/yuna.webp',
        },
        {
          code: 'carshion',
          name: 'カルシオン',
          path: '/character/carshion',
          imgPath: './img/char/carshion.webp',
        },
        {
          code: 'reon',
          name: 'レオン',
          path: '/character/reon',
          imgPath: './img/char/reon.webp',
        },
        {
          code: 'igu',
          name: 'イグノックス',
          path: '/character/igunokkus',
          imgPath: './img/char/igunokkus.png',
        },
      ]
    }
  },

  methods: {
    scrollToTop(){
      window.scrollTo({
        top: 345,
        behavior: "smooth"
      })
    }
  },

  created() {

  },

  mounted() {

  },





}



</script>

<template>

  <section id="character">

    <div class="cha-photo-link">
      <div class="cha-card" v-for="item in chaList">
        <router-link :to="item.path" :code="item.code" @click="scrollToTop">
          <div class="img-box">
            <img :src="item.imgPath" :alt="item.name">
          </div>
          <div class="content">
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </div>
    
  </section>

</template>

<style lang="scss" scoped>
@import '../../sass/mixin';
@import '../../sass/reset';
@import '../../sass/variable';

.cha-photo-link {

  width: 100%;
  @include flex(flex-start, flex-start);
  flex-wrap: wrap;
  margin: 20px 0 50px;

  .cha-card {
    width: calc(100% / 7);
    padding: 10px;
    margin-bottom: 5px;

    .img-box {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .content {
      width: 100%;
      color: $lightfontcolor;
      @include flex;
      flex-direction: column;
      text-align: center;
      font-size: 13px;
    }
  }
}
</style>
