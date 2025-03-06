<script setup>
import CommonTitle from '@/components/CommonTitle.vue'
import SubTitle from '@/components/SubTitle.vue'
import KyaraJson from '@/json/kyara.json'
import pvpTaiseiJson from '@/json/pvptaisei.json'
</script>

<script>
export default {
  data() {
    return {
      choosenKyara: {},
      lightBoxAct: false,
    }
  },

  head: {
    title: 'PVP控制一覽 - 格蘭日服攻略站'
  },

  methods: {
    KyaraChoosen() {
      this.choosenKyara = pvpTaiseiJson[0]
    },
  },

  created() {

  },

  mounted() {
    document.title = 'PVP控制一覽 - 格蘭日服攻略站';
    this.KyaraChoosen()
  },

}



</script>

<template>
  <section id="pvpTaisei">
    <CommonTitle title="PVP控制一覽與對策" />

    <table class="kyaraTable">
      <thead class="titleBox">
        <tr>
          <th>角色</th>
          <th>控制武器</th>
          <th>控制技能</th>
          <th>對策角色</th>
          <th>對策武器</th>
        </tr>
      </thead>
      <div class="containerBox">
        <div class="kyaraBox">
          <router-link class="KyaraCard" :to="choosenKyara.path" v-if="choosenKyara.path">
            <img :src="choosenKyara.smallImg" alt="">
            {{ choosenKyara.fullname }}
          </router-link>
        </div>
        <div class="WeaponDataBox">
        </div>
      </div>

    </table>

  </section>
</template>

<style lang="scss" scoped>
@import '../../sass/mixin';
@import '../../sass/reset';
@import '../../sass/variable';

table,th,td{
  border: 1px solid $darkfontcolor;
  border-collapse: collapse;
}

table {
  width: 100%;
  margin-top: 10px;

  thead {
    tr {
      th {
        padding: 10px;
        background-color: $lightfontcolor;
        color: white;
      }
    }
  }
}
</style>
