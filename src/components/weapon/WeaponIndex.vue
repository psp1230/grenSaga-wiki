<script setup>
import LinkArea from '@/components/character/ChaLinkArea.vue';
import CommonTitle from '@/components/CommonTitle.vue'
import KyaraJson from '@/json/kyara.json'
import SubTitle from '@/components/SubTitle.vue'
</script>

<script>
export default {
  data() {
    return {
      KyaraList: [],
      choosenKyara: {},
      showingWeapon: {
        rank: '',
        list: []
      },
      choosenWeapon: {

      },
      imgPath: './img/robot.webp',
      noRdata: false
    }
  },
  head: {
    title: '格蘭武器 - 格蘭日服攻略站'
  },

  methods: {
    createKyaraList() {
      KyaraJson.forEach(element => {
        let kyara = new Object()
        kyara.name = element.jpname
        kyara.nickname = element.nickname
        kyara.fullname = element.fullname
        kyara.id = element.kyaraCode
        kyara.img = element.smallImg
        kyara.weapondata = element.weapondata

        this.KyaraList.push(kyara)
      });

    },
    kyaraChoose(id) {
      this.KyaraList.forEach(item => {
        if (id == item.id) {
          this.choosenKyara = item
        }
      });

      const Rdata = this.choosenKyara.weapondata.filter(item => item.rank == 'R')
      if(Rdata.length == 0){
        this.noRdata = true
      }else{
        this.noRdata = false
      }

      this.showWeaponPick('SSR')
    },
    showWeaponPick(rank) {
      this.showingWeapon =
      {
        rank: '',
        list: []
      }

      switch (rank) {
        case 'SSR': case 'SR': case 'R': {
          this.showingWeapon.rank = rank
          this.choosenKyara.weapondata.forEach(weapon => {
            if (weapon.rank == rank) {
              this.showingWeapon.list.push(weapon)
            }
          });
          break;
        };
      };

      this.weaponAct(this.showingWeapon.list[0].weaponId)

    },
    weaponAct(id) {
      this.choosenWeapon = {}

      this.showingWeapon.list.forEach(item => {
        if (item.weaponId == id) {
          this.choosenWeapon = item
        }
      })

    }
  },

  created() {

  },

  mounted() {
    document.title = '格蘭武器 - 格蘭日服攻略站';
    this.createKyaraList();
    this.kyaraChoose('las');
  },



}



</script>

<template>
  <section id="Weapon">
    <CommonTitle title="格蘭武器一覽" />

    <ul class="KyaraList">
      <li v-for="item in KyaraList" @click="kyaraChoose(item.id)" :class="{ act: item.id == choosenKyara.id }">{{
        item.fullname
      }}</li>
    </ul>

    <SubTitle :title="choosenKyara.fullname" />
    <ul class="RankList" :class="{noRdataStyle : noRdata}">
      <li @click="showWeaponPick('SSR')" :class="{ act: showingWeapon.rank == 'SSR' }">SSR</li>
      <li @click="showWeaponPick('SR')" :class="{ act: showingWeapon.rank == 'SR' }">SR</li>
      <li @click="showWeaponPick('R')" :class="{ act: showingWeapon.rank == 'R' }" v-if="!noRdata">R</li>
    </ul>

    <article class="weaponList">
      <div class="weaponCard" v-for="item in showingWeapon.list" @click="weaponAct(item.weaponId)"
        :class="{ act: choosenWeapon.weaponId == item.weaponId }">
        <img :src="item.weaponSmallImg" :alt="item.jpname">
      </div>
    </article>

    <article class="weaponfile">
      <div class="container">

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
        <img :src="choosenWeapon.weaponFullImg" alt="">

        <table class="skill-table" border="1">
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

        <table class="break-table" border="1">
          <tr class="title">
            <td colspan="2">極超越 (武器升星)</td>
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

        <table class="break-table" border="1" v-if="choosenWeapon.lvBreak">
          <tr class="title">
            <td colspan="2">限界突破 (等級突破)</td>
          </tr>
          <tr v-for="item in choosenWeapon.lvBreak">
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
    </article>

  </section>
</template>

<style lang="scss" scoped>
@import '../../sass/mixin';
@import '../../sass/reset';
@import '../../sass/variable';

.KyaraList {
  margin-top: 20px;
  width: 100%;
  @include flex(flex-start, center);
  list-style: none;
  flex-wrap: wrap;
  background-color: $bgcolor;
  margin-bottom: 20px;

  li {
    width: 25%;
    height: 100%;
    @include flex;
    padding: 8px 0;
    cursor: pointer;
    color: $lightfontcolor;


    &:hover {
      color: $darkfontcolor;
      font-weight: 700;
      background-color: $btnhovercolor;
    }
  }

  .act {
    background-color: $darkfontcolor !important;
    color: $whitefont !important;
    font-weight: 700 !important;
  }

}
.noRdataStyle{
  li{
    width: calc(100% / 2) !important;
  }
}
.RankList {
  width: 100%;
  @include flex(flex-start, center);
  list-style: none;
  flex-wrap: wrap;
  border: 1px solid $lightfontcolor;
  margin: 1px 0 20px;

  li {
    width: calc(100% / 3);
    height: 100%;
    font-size: $h5;
    color: $lightfontcolor;
    @include flex;
    padding: 8px 0;
    border-right: 1px solid $lightfontcolor;
    cursor: pointer;

    &:last-child {
      border-right: none
    }

    &:hover {
      background-color: $bgcolor;
    }
  }

  .act {
    background-color: $lightfontcolor !important;
    color: $whitefont !important;
  }
}

.weaponList {
  width: 100%;
  @include flex(flex-start, flex-start);
  flex-wrap: wrap;

  .weaponCard {
    padding: 0 2px;
    margin-bottom: 2px;
    width: 10%;
    opacity: 0.4;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .act {
    opacity: 1 !important;
  }
}

.weaponfile {
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;

  .container {
    width: 100%;

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
      width: 100%;

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
      width: 100%;

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


#notFind {
  width: 100%;

  .title {
    width: 100%;
    margin-top: 20px;
    font-size: $h4;
    font-weight: 700;
    color: $darkfontcolor;
    @include flex;
  }

  .imgArea {
    width: 100%;
    @include flex;
    margin-top: 50px;

    img {
      width: 300px;
    }

  }

  .content {
    width: 100%;
    margin-top: 50px;
    @include flex;
    font-size: $h5;
    color: $lightfontcolor;

    a {
      color: $warningcolor;
      font-weight: 500;
    }
  }
}
</style>
