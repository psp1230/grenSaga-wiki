<script>
export default {
  props:['title']
}

</script>

<template>
  <div class="sub-area">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

.sub-area{
    width: 100%;
    padding: 10px;
    background-color: $lightfontcolor;
    @include flex;
    h1{
      font-size: $h5;
      font-weight: 700;
      color: $white;
    }
  }

</style>
