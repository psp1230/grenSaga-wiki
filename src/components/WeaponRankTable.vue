<script setup>
import KyaraJson from '@/json/kyara.json'
</script>

<script>
export default {
  data() {
    return {
      lightBoxAct: false,
      kyara: '',
      kyaraData: {},
      choosenWeapon: {
      },

    }
  },
  props: ['rankList', 'link', 'linkname'], //格式參照Kyara.vue

  computed: {
    kyaraCode() {
      return this.$route.params.KyaraCode
    }
  },
  methods: {
    lightboxAct(e) {
      if (e) {
        this.lightBoxAct = true;
        this.kyaraData.weapondata.forEach(weapon => {
          if (weapon.weaponId == e) {
            return this.choosenWeapon = weapon
          }
        })

      }
    },

    closeLightBox(event) {
      const lightBoxList = Array.apply(null, document.querySelectorAll('.lightBox'))
      if (event.target == this.$refs.lightbox) {
        this.lightBoxAct = false;
        this.choosenWeapon = {}
      }
    },
    closeLightBoxESC() {
      console.log('keyup');
      if (this.lightBoxAct) {
        this.lightBoxAct = !lightBoxAct;
        this.choosenWeapon = {}
      }
    },

    loadJson() {
      KyaraJson.forEach(item => {
        if (item.kyaraCode == this.kyara) {
          this.kyaraData = item

        }
      });
    },


  },
  created() {
    this.loadJson()
  },
  watch: {
    kyara: function (value) {
      this.loadJson()
    }
  },
  mounted() {
  },
  updated() {
    this.kyara = this.kyaraCode
  }
}

</script>

<template>
  <table border="1">
    <tr v-for="item in rankList">
      <td class="rankTitle">
        <img :src="item.title" alt="">
      </td>
      <td class="rankContent" v-for="card in item.weaponList">
        <div class="card" :key="card.weaponId">
          <img :src="card.weaponSmallImg" alt="" @click="lightboxAct(card.weaponId)">
          <span class="title">{{ card.jpname }}</span>
          <span class="rank">{{ card.rank }}</span>
        </div>
      </td>
    </tr>
  </table>
  <div class="refer">
    排行參考來源：
    <a :href="link" target="_blank">{{ linkname }}</a>
  </div>

  <section class="lightBox" v-show="lightBoxAct" @click="closeLightBox($event)" @keyup.esc="closeLightBoxESC()"
    ref="lightbox">
    <div class="container">
      <img :src="choosenWeapon.weaponFullImg" alt="">
      <table border="1" class="kyara-table">
        <tr>
          <td>
            <div class="card">
              <span>角色：<span class="name">{{ choosenWeapon.jpname }}</span></span>
            </div>
          </td>
          <td>
            <div class="card">
              <span>類別：<span class="name">{{ choosenWeapon.type }}</span></span>
            </div>
          </td>
          <td>
            <div class="card">
              <span>PvE評價： </span><img :src="choosenWeapon.pveRank" alt="">
            </div>
          </td>
          <td>
            <div class="card">
              <span>PvP評價： </span><img :src="choosenWeapon.pvpRank" alt="">
            </div>
          </td>
        </tr>
      </table>

      <table class="skill-table">
        <tr>
          <td class="td-title">普通技能</td>
          <td class="td-content">
            <div>{{ choosenWeapon.normalSkill }}</div>
            <div>{{ choosenWeapon.normalSkill2 }}</div>
          </td>
        </tr>
        <tr>
          <td class="td-title">爆發技能</td>
          <td class="td-content">
            <div>{{ choosenWeapon.killSkill }}</div>
            <div v-if="choosenWeapon.killSkill2">{{ choosenWeapon.killSkill2 }}</div>
          </td>
        </tr>
        <tr>
          <td class="td-title">切換技能</td>
          <td class="td-content">
            <div>{{ choosenWeapon.changeSkill }}</div>
            <div v-if="choosenWeapon.changeSkill2">{{ choosenWeapon.changeSkill2 }}</div>
          </td>
        </tr>
        <tr>
          <td class="td-title">被動技能</td>
          <td class="td-content">
            <div>{{ choosenWeapon.passiveSkill }}</div>
            <div v-if="choosenWeapon.passiveSkill2">{{ choosenWeapon.passiveSkill2 }}</div>
          </td>
        </tr>
        <tr v-if="choosenWeapon.describe">
          <td class="td-title">備註</td>
          <td class="td-content">
            <div>{{ choosenWeapon.describe }}</div>
            <div v-if="choosenWeapon.describe2">{{ choosenWeapon.describe2 }}</div>
          </td>
        </tr>
      </table>

      <table class="break-table">
        <tr class="title">
          <td colspan="2">極超越</td>
        </tr>
        <tr v-for="item in choosenWeapon.break">
          <td class="td-title">{{ item.title }}</td>
          <td class="td-content">
            <div>
              {{ item.content }}
            </div>
            <div v-if="item.content2">
              {{ item.content2 }}
            </div>
          </td>
        </tr>

      </table>
      <div class="refer" v-if="!choosenWeapon.translateMyself">
        中文翻譯來源：
        <a href="https://docs.google.com/spreadsheets/d/16P7JqC5oa4PmJ_IGZJyfpXXZ-aVP9GsR/"
          target="_blank">七嵐小六、蘭茶茶編製圖鑑表格</a>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';


//rank table
table {
  width: 100%;
  // margin: 10px 0 0px;

  tr {
    border: 1px solid $lightfontcolor;

    .rankTitle {
      background-color: $rankTablebg;
      text-align: center;

      img {
        width: 60px;
      }
    }

    .rankContent {
      width: 20%;

      .card {
        padding: 10px 5px;
        @include flex;
        flex-direction: column;

        img {
          width: 70px;
          cursor: pointer;
        }

        .title {
          color: $maincolor;
          font-weight: 500;
        }

        .rank {
          color: $lightfontcolor;
        }

      }
    }
  }
}

//參考範例
.refer {
  width: 100%;
  padding: 5px 0 50px;
  @include flex(flex-end, center);
  color: $darkfontcolor;

  a {
    color: $linkcolor;
  }
}


$tdTitlecolor: #e9eaeb;

//燈箱
.lightBox {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  @include flex;
  padding: 20px;

  .container {
    padding: 20px;
    width: 775px;
    background-color: $lightboxbg;
    max-height: calc(100vh - 40px);
    overflow: auto;

    &::-webkit-scrollbar {
      background-color: #c2c2c2;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $maincolor;
    }

    img {
      width: 100%;
      display: block;
    }

    //燈箱表格
    .kyara-table {
      width: 100%;

      tr {
        height: 50px;

        td {
          width: 25%;

          .card {
            @include flex;
            padding: 5px 0;

            span {
              color: $darkfontcolor;

              .name {
                color: $blackfontcolor;
                font-weight: 700;
              }
            }

            img {
              width: 40px;
            }
          }
        }

      }
    }

    .skill-table {
      margin-top: 15px;

      tr {
        .td-title {
          width: 150px;
          text-align: center;
          background-color: $maincolor;
          color: $white;
          font-size: $h6;
          font-weight: 500;
          padding: 5px;
        }


        .td-content {
          padding: 5px 15px;
          font-size: $h6;
          font-weight: 500;
          color: $darkfontcolor;
        }

        &:nth-child(even) {
          .td-title {
            background-color: #596775;
          }
        }
      }

    }

    .break-table {
      margin-top: 15px;

      tr {
        .td-title {
          width: 150px;
          text-align: center;
          background-color: #99a4af;
          color: $white;
          font-size: $h6;
          font-weight: 500;
          padding: 5px;
        }


        .td-content {
          padding: 5px 15px;
          font-size: $h6;
          font-weight: 500;
          color: $darkfontcolor;
        }

        &:nth-child(even) {
          .td-title {
            background-color: #b0b7be;
          }
        }
      }

      .title {
        td {
          padding: 5px;
          text-align: center;
          background-color: $maincolor;
          color: $white;
          font-size: $h6;
          font-weight: 500;
        }
      }

    }
  }

  .refer {
    width: 100%;
    padding: 5px 0 0;
    @include flex(flex-end, center);
    color: $darkfontcolor;

    a {
      color: $linkcolor;
    }
  }

}
</style>
