<script setup>
import SubTitle from '@/components/SubTitle.vue'

</script>

<script>
export default {
  data() {
    return {
      updateList:[
        {
          date:'2023 / 02 / 24',
          title:'更新',
          content:'新增土坦魔奇資料，修正風槍古代資料。'
        },
        {
          date:'2023 / 02 / 18',
          title:'更新',
          content:'新增格蘭武器一覽頁面。'
        },
        {
          date:'2023 / 02 / 15',
          title:'更新',
          content:'新增火傳角色資料。'
        },
        {
          date:'2023 / 01 / 26',
          title:'更新',
          content:'風法PVP評價變更，新增風法天使格蘭武器資料。'
        },
        {
          date:'2023 / 01 / 25',
          title:'更新',
          content:'修正部分角色資料錯誤，新增耐性對策頁面。'
        },
        {
          date:'2023 / 01 / 13',
          title:'網站上架',
          content:'網站上架，角色一覽頁面完成。( 截自 2023 / 1 / 13 為止的遊戲資料 )'
        }
      ]
    }
  },

  head:{
    title:'格蘭日服攻略站'
  },

  methods: {

  },

  created() {

  },

  mounted() {
    document.title = '格蘭日服攻略站'
  },



}



</script>

<template>
<SubTitle title="日服攻略站更新日誌"/>
<ul class="update-history">
  <li v-for="item in updateList">
    <div class="date">{{ item.date }}</div>
    <div class="content">{{ item.content }}</div>
  </li>
</ul>

</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

.update-history{
  width: 100%;
  list-style: none;
  margin-top: 20px;
  li{
    @include flex(flex-start,center);
    margin-bottom: 15px;
    .date{
      padding: 5px 10px;
      min-width: 120px;
      background-color: $maincolor;
      color: white;
      font-weight: 500;
      @include flex;
      margin-right: 10px;
    }

    .content{
       color: $lightfontcolor;
    }
  }
}

</style>
