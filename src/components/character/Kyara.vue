<script setup>
import LinkArea from '@/components/character/ChaLinkArea.vue';
import CommonTitle from '@/components/CommonTitle.vue'
import SubTitle from '@/components/SubTitle.vue'
import WeaponRankTable from '@/components/WeaponRankTable.vue'
import KyaraJson from '@/json/kyara.json'

</script>

<script>
export default {
  data() {
    return {
      kyaraData: {},
      kyara: '',
      kyaraPvERank: [],
      kyaraPvPRank: [],
    }
  },
  computed: {
    kyaraCode() {
      return this.$route.params.KyaraCode
    }
  },

  head:{
    title:'角色詳情 - 格蘭日服攻略站'
  },

  methods: {
    loadJson() {
      // fetch('/json/kyara.json')
      //   .then(function (response) {
      //     return response.json();
      //   })
      //   .then(data => {
      //     data.forEach(item => {
      //       if(item.kyaraCode == this.kyara){
      //         this.kyaraData = item

      //       }
      //     });
      //   });

      KyaraJson.forEach(item => {
        if (item.kyaraCode == this.kyara) {
          this.kyaraData = item

        }
      });

    },
    inputRankData() {
      const weaponList = this.kyaraData.weapondata

      //reset kyaraPveRank array
      this.kyaraPvERank = [
        {
          "title": "./img/common/SS.png",
          "weaponList": [
          ]
        },
        {
          "title": "./img/common/S.webp",
          "weaponList": [
          ]
        },
        {
          "title": "./img/common/A.webp",
          "weaponList": [
          ]
        },
        {
          "title": "./img/common/B.webp",
          "weaponList": [
          ]
        }
      ];

      //reset kyaraPvPRank array
      this.kyaraPvPRank = [
        {
          "title": "./img/common/SS.png",
          "weaponList": [
          ]
        },
        {
          "title": "./img/common/S.webp",
          "weaponList": [
          ]
        },
        {
          "title": "./img/common/A.webp",
          "weaponList": [
          ]
        },
        {
          "title": "./img/common/B.webp",
          "weaponList": [
          ]
        }
      ];


      //add weapon data to kyaraPvERank array
      weaponList.forEach(weapon => {
        if (weapon.pveRank.includes('SS.png')) {
          this.kyaraPvERank.forEach((item) => {
            if (item.title.includes('SS.png')) {
              let PVEweaponList = item.weaponList;
              PVEweaponList.push(weapon)
            }
          })
        }
        else if (weapon.pveRank.includes('S.webp')) {
          this.kyaraPvERank.forEach((item) => {
            if (item.title.includes('S.webp')) {
              let PVEweaponList = item.weaponList;
              PVEweaponList.push(weapon)
            }
          })
        }
        else if (weapon.pveRank.includes('A.webp')) {
          this.kyaraPvERank.forEach((item) => {
            if (item.title.includes('A.webp')) {
              let PVEweaponList = item.weaponList;
              PVEweaponList.push(weapon)
            }
          })
        }
        else if (weapon.pveRank.includes('B.webp')) {
          this.kyaraPvERank.forEach((item) => {
            if (item.title.includes('B.webp')) {
              let PVEweaponList = item.weaponList;
              PVEweaponList.push(weapon)
            }
          })
        }
      })

      this.kyaraPvERank.forEach(rank => {
        let weaponAmount = rank.weaponList.length
        if (weaponAmount < 4) {
          let nullobj = {
            "rank": "-"
          };
          let count = 4 - weaponAmount;
          for (let i = 0; i < count; i++) {
            rank.weaponList.push(nullobj)
          }
        } else if (weaponAmount > 4) {
          let count = weaponAmount - 4
          for (let i = 1; i <= count; i++) {
            rank.weaponList.splice(weaponAmount - i, 1)
          }
        }
      })


      //add weapon data to kyaraPvPRank array
      weaponList.forEach(weapon => {
        if (weapon.pvpRank.includes('SS.png')) {
          this.kyaraPvPRank.forEach((item) => {
            if (item.title.includes('SS.png')) {
              let PVPweaponList = item.weaponList;
              PVPweaponList.push(weapon)
            }
          })
        }
        else if (weapon.pvpRank.includes('S.webp')) {
          this.kyaraPvPRank.forEach((item) => {
            if (item.title.includes('S.webp')) {
              let PVPweaponList = item.weaponList;
              PVPweaponList.push(weapon)
            }
          })
        }
        else if (weapon.pvpRank.includes('A.webp')) {
          this.kyaraPvPRank.forEach((item) => {
            if (item.title.includes('A.webp')) {
              let PVPweaponList = item.weaponList;
              PVPweaponList.push(weapon)
            }
          })
        }
        else if (weapon.pvpRank.includes('B.webp')) {
          this.kyaraPvPRank.forEach((item) => {
            if (item.title.includes('B.webp')) {
              let PVPweaponList = item.weaponList;
              PVPweaponList.push(weapon)
            }
          })
        }
      })

      this.kyaraPvPRank.forEach(rank => {
        let weaponAmount = rank.weaponList.length
        if (weaponAmount < 4) {
          let nullobj = {
            "rank": "-"
          };
          let count = 4 - weaponAmount;
          for (let i = 0; i < count; i++) {
            rank.weaponList.push(nullobj)
          }
        } else if (weaponAmount > 4) {
          let count = weaponAmount - 4
          for (let i = 1; i <= count; i++) {
            rank.weaponList.splice(weaponAmount - i, 1)
          }
        }
      })

    }
  },

  created() {
    this.loadJson()
  },

  watch: {
    kyara: function (value) {
      this.loadJson(),
        this.inputRankData()
    }
  },


  mounted() {
    this.kyara = this.kyaraCode
    document.title = '角色詳情 - 格蘭日服攻略站'
  },

  updated() {
    this.kyara = this.kyaraCode
  }



}



</script>

<template>

  <CommonTitle :title="kyaraData.fullname" />
  <div class="banner-area">
    <img :src="kyaraData.artImg" alt="">
  </div>

  <table class="dataTable" border>
    <tr>
      <td class="dataTableTd">
        <div class="title">屬性</div>
        <div class="content"><img :src="kyaraData.attrImg" alt=""></div>
      </td>
      <td class="dataTableTd">
        <div class="title">PVE評價</div>
        <div class="content">{{ kyaraData.pveRank }}</div>
      </td>
      <td class="dataTableTd">
        <div class="title">PVP評價</div>
        <div class="content">{{ kyaraData.pvpRank }}</div>
      </td>
      <td class="dataTableTd">
        <div class="title">傷害 / 裝備分類</div>
        <div class="smallcontent">{{ kyaraData.wear }}</div>
      </td>

    </tr>
  </table>


  <SubTitle title="格蘭武器 PvE 排行" />
  <WeaponRankTable :rankList="kyaraPvERank" :link="kyaraData.pveRefLink" linkname="グランサガ攻略wiki" />

  <SubTitle title="格蘭武器 PvP 排行" />
  <WeaponRankTable :rankList="kyaraPvPRank" :link="kyaraData.pvpRefLink" linkname="グランサガ攻略wiki" />

  <SubTitle title="選擇其他角色" />
  <LinkArea />
</template>

<style lang="scss" scoped>
@import '../../sass/mixin';
@import '../../sass/reset';
@import '../../sass/variable';

.banner-area {
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
    display: block;
  }
}

.dataTable {
  width: 100%;
  border: 1px solid $lightfontcolor;
  margin-bottom: 50px;

  .dataTableTd {
    font-size: $h6;
    font-weight: 400;
    padding: 10px;
    text-align: center;

    .title {
      color: $lightfontcolor;
    }

    .content {
      margin: 10px 0;
      color: $darkfontcolor;
      font-size: $h4;
      font-weight: 700;

      img {
        width: 35px;
      }
    }

    .smallcontent {
      margin: 10px 0;
      color: $darkfontcolor;
      font-size: $h5;
      font-weight: 700;
    }
  }
}
</style>
