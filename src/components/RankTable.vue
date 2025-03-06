<script>
export default {
  data() {
    return {


    }
  },
  props: ['rankList','link','linkname'], //格式參照Kyara.vue
}

</script>

<template>
  <table>
    <tr v-for="item in rankList">
      <td class="rankTitle">
        <h3>{{ item.rank }}</h3>
      </td>
      <td class="rankContent">
        <router-link v-for="card in item.content" :to="card.path" :key="card.kyaraCode" >
          <img :src="card.smallImg" :alt="card.kyaraCode">
        </router-link>
      </td>
    </tr>
  </table>
  <div class="refer">
    參考來源：
    <a :href="link" target="_blank">{{linkname}}</a>
  </div>
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

table {
  width: 100%;
  margin: 20px 0 0px;

  tr {
    border: 1px solid $lightfontcolor;

    .rankTitle {
      width: 150px;
      background-color: $maincolor;
      text-align: center;

      h3 {
        color: $white;
        font-size: $h5;
        font-weight: 700;
        
      }
    }

    .rankContent {
      a {
        width: 80px;
        height: 80px;
        display: inline-block;
        padding: 5px;
      }
    }
  }
}

.refer{
  width: 100%;
  padding: 5px 0 50px;
  @include flex(flex-end,center);
  color: $darkfontcolor;
  a{
    color: $linkcolor;
  }
}
</style>
