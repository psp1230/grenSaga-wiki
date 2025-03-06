<script>
import '@/js/firebase'
import { createUser,loginUser,logout } from '../js/firebase';

export default {
  data() {
    return {
      email:'',
      password:'',
      navList: [
        {
          title: '首頁',
          path: '/',
        },
        {
          title: '角色一覽',
          path: '/character',
        },
        {
          title: '格蘭武器',
          path: '/weapon',
        },
        {
          title: '神器',
          path: '/artifact',
        },
        {
          title: '魔道具',
          path: '/madougu',
        },
        {
          title: '耐性對策',
          path: '/taisei',
        },
      ],
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
  <header id="header">
    <div class="container">
      <div class="title-area">
        <h1>GranSaga WIKI</h1>
        <h2>格蘭騎士團日服攻略站</h2>
      </div>
    </div>
  </header>

  <nav class="nav">
    <div class="container">
      <ul>
        <li v-for="item in navList">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';


#header {
  width: 100%;
  height: 340px;
  background-image: url("/img/header/gransaga_banner.webp");
  background-position: top center;

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    .title-area{
      padding-top: 20px;
      @include flex(flex-end,flex-end);
      flex-direction: column;
      color: $white;
      h1{
        font-size: 40px;
        font-weight: 900;
        text-shadow: 0 0 10px rgb(112, 112, 112);
      }
      h2{
        font-size: 30px;
        font-weight: 500;
        text-shadow: 0 0 10px rgb(112, 112, 112);
      }
      
    }

  }

}

.nav {
  width: 100%;
  height: 45px;
  background-color: $maincolor;
  box-shadow: 0 5px 10px -5px rgb(196, 196, 196);

  .container {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;

    ul {
      width: 100%;
      height: 100%;
      @include flex;
      list-style: none;

      li {
        flex: 1;
        height: 100%;
        @include flex;

        &:hover {
          background-color: $white;
        }


        a {
          width: 100%;
          height: 100%;
          padding: 5px 0;
          color: $whitefont;
          text-align: center;
          @include flex;
          font-size: $h6;
          font-weight: 500;

        }

        &:hover a {
          color: $maincolor;
        }

      }
    }
  }
}
</style>
