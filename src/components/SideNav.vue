<script >

export default {
  data() {
    return {
      sideMenuList: [
        //角色------------------------------
        {
          name: '角色',
          link: [
            {
              code: '',
              title: '角色一覽',
              path: '/character',
              active: false,
            },
            {
              code: 'las',
              title: '火主 - ラス',
              path: '/character/las',
              active: false,
            },
            {
              code: 'seriad',
              title: '水法 - セリアード',
              path: '/character/seriad',
              active: false,
            },
            {
              code: 'quyi',
              title: '火法 - キュイ',
              path: '/character/quyi',
              active: false,
            },
            {
              code: 'karte',
              title: '暗刺 - カルト',
              path: '/character/karte',
              active: false,
            },
            {
              code: 'namalie',
              title: '風槍 - ナマリエ',
              path: '/character/namalie',
              active: false,
            },
            {
              code: 'win',
              title: '土坦 - ウィン',
              path: '/character/win',
              active: false,
            },
            {
              code: 'oruta',
              title: '光法 - オルタ',
              path: '/character/oruta',
              active: false,
            },
            {
              code: 'jun',
              title: '暗法 - ジュン',
              path: '/character/jun',
              active: false,
            },
            {
              code: 'kaito',
              title: '水刀 - カイト',
              path: '/character/kaito',
              active: false,
            },
            {
              code: 'ruin',
              title: '土槍 - ルイン',
              path: '/character/ruin',
              active: false,
            },
            {
              code: 'yuna',
              title: '風法 - ユナ',
              path: '/character/yuna',
              active: false,
            },
            {
              code: 'carshion',
              title: '傳奇暗刺 - カルシオン',
              path: '/character/carshion',
              active: false,
            },
            {
              code: 'reon',
              title: '光坦 - レオン',
              path: '/character/reon',
              active: false,
            },
            {
              code: 'igu',
              title: '火傳 - イグノックス',
              path: '/character/igunokkus',
              active: false,
            },
          ],
        },
        //格蘭武器-----------------------------------
        {
          name:'格蘭武器',
          link:[
            {
              code:'weapon',
              title: '格蘭武器一覽',
              path: '/weapon',
              active:false,
            },
            // {
            //   code:'firstweapon',
            //   title: '首抽推薦',
            //   path: '/firstweapon',
            //   active:false,
            // },
            // {
            //   code:'r-weapon',
            //   title: 'R級武器推薦',
            //   path: '/r-weapon',
            //   active:false,
            // },
          ],
        },
        //神器-----------------------------
        // {
        //   name:'神器',
        //   link:[
        //     {
        //       code:'',
        //       title: '神器排行',
        //       path: '',
        //       active:false,
        //     },
        //   ],
        // },
        //裝備魔導具-----------------------
        // {
        //   name:'裝備 / 魔道具',
        //   link:[
        //     {
        //       code:'',
        //       title: '裝備相關',
        //       path: '',
        //       active:false,
        //     },
        //     {
        //       code:'',
        //       title: '魔道具排行',
        //       path: '',
        //       active:false,
        //     },
        //   ],
        // },
        //飾品--------------------------
        // {
        //   name:'飾品',
        //   link:[
        //     {
        //       code:'',
        //       title: '飾品排行',
        //       path: '',
        //       active:false,
        //     },

        //   ],
        // },
        //守護者-----------------------------
        // {
        //   name:'守護者',
        //   link:[
        //     {
        //       code:'',
        //       title: '守護者排行',
        //       path: '',
        //       active:false,
        //     },
        //   ],
        // },
        //其他支援----------------------------
        // {
        //   name:'其他支援',
        //   link:[
        //     {
        //       code:'',
        //       title: '日版課金方式',
        //       path: '',
        //       active:false,
        //     },
        //     {
        //       code:'',
        //       title: '帳號綁定與登入',
        //       path: '',
        //       active:false,
        //     },
        //   ],
        // },
        //耐性一覽----------------------------
        {
          name: '耐性對策',
          link: [
            {
              code: 'taiseiTable',
              title: '耐性對策一覽表',
              path: '/taisei',
              active: false,
            },
            // {
            //   code: 'PVPtaisei',
            //   title: 'PVP控制一覽與對策',
            //   path: '/pvptaisei',
            //   active: false,
            // }
          ],
        },
      ]
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

  <nav id="sideNav">
    <div class="menuList" v-for="listItem in sideMenuList">
      <div class="menuTitle">
        {{ listItem.name }}
      </div>
      <ul class="linkList">
        <li v-for="links in listItem.link" :key="links.code">
          <router-link :to="links.path">{{ links.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

#sideNav {
  width: 100%;
  // height: 100vh;
  padding-right: 20px;

  // overflow-y: scroll;
  // position: sticky;
  // top: 0;
  .menuList {
    width: 100%;
    margin-bottom: 20px;

    .menuTitle {
      width: 100%;
      padding: 7px 20px;
      background-color: $maincolor;
      font-size: $h5;
      font-weight: 700;
      color: $white;
    }

    .linkList {
      width: 100%;
      list-style: none;
      border: 1px solid $maincolor;

      li {
        width: 100%;
        height: 40px;
        padding: 0 20px;
        @include flex(flex-start, center);
        border-bottom: 1px solid $lightfontcolor;

        &:last-of-type {
          border-bottom: none
        }

        a {
          @include flex(flex-start, center);
          width: 100%;
          height: 100%;
          color: $lightfontcolor;
          font-size: $h6;

          &:hover {
            color: $darkfontcolor;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>