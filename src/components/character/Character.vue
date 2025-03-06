<script setup>
import LinkArea from '@/components/character/ChaLinkArea.vue';
import CommonTitle from '@/components/CommonTitle.vue'
import RankTable from '@/components/RankTable.vue'
import KyaraJson from '@/json/kyara.json'
import '@/js/firebase'
</script>

<script>
export default {
  data() {
    return {
      pveKyaraRank:[],
      pvpKyaraRank:[],
    }
  },
  head:{
    title:'角色一覽 - 格蘭日服攻略站'
  },

  methods: {
    addTier(){
      //reset pveKyaraRank
      this.pveKyaraRank=[
        {
          rank: 'Tier 1',
          content: []
        },
        {
          rank: 'Tier 2',
          content: []
        },
        {
          rank: 'Tier 3',
          content: []
        },
      ];

      //reset pvpKyaraRank
      this.pvpKyaraRank=[
        {
          rank: 'Tier 1',
          content: []
        },
        {
          rank: 'Tier 2',
          content: []
        },
        {
          rank: 'Tier 3',
          content: []
        },
      ];

      KyaraJson.forEach(kyara =>{
        if(kyara.pveRank == 'Tier 1'){
          this.pveKyaraRank[0].content.push(kyara)
        }else if(kyara.pveRank == 'Tier 2'){
          this.pveKyaraRank[1].content.push(kyara)
        }else if(kyara.pveRank == 'Tier 3'){
          this.pveKyaraRank[2].content.push(kyara)
        };

        if(kyara.pvpRank == 'Tier 1'){
          this.pvpKyaraRank[0].content.push(kyara)
        }else if(kyara.pvpRank == 'Tier 2'){
          this.pvpKyaraRank[1].content.push(kyara)
        }else if(kyara.pvpRank == 'Tier 3'){
          this.pvpKyaraRank[2].content.push(kyara)
        };
      })

    }
  },

  created() {

  },

  mounted() {
    this.addTier();
    document.title = '角色一覽 - 格蘭日服攻略站'
  },



}



</script>

<template>

  <section id="character">
    <CommonTitle title="角色一覽" />
    <LinkArea />

    <CommonTitle title="PVE 角色排行" />
    <div class="note">
      <p>
        <span>P.S. </span>
        此排行不代表絕對的角色強度，僅代表該角色在主線通關以及面對副本戰時的泛用程度。
      </p>
    </div>
    <RankTable :rankList="pveKyaraRank" link="https://altema.jp/gransaga/saikyo#03" linkname="グランサガ攻略wiki"/>
    

    <CommonTitle title="PVP 角色排行"/>
    <div class="note">
      <p>
        <span>P.S. </span>
        此排行不代表絕對的角色強度，僅為角色在競技場時的生存、控制、輸出能力等等綜合評比。
      </p>
    </div>
    <RankTable :rankList="pvpKyaraRank"  link="https://altema.jp/gransaga/saikyo#05" linkname="グランサガ攻略wiki"/>

  </section>



</template>

<style lang="scss" scoped>
@import '../../sass/mixin';
@import '../../sass/reset';
@import '../../sass/variable';

#character {
  width: 100%;

  .note{
    width: 100%;
    padding: 20px 20px 0px;
    color: $lightfontcolor;
    p{
      span{
        color: $warningcolor;
        font-weight: 700;
      }
    }

  }


}
</style>
