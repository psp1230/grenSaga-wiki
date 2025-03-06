<script>
export default {
  props:['title']
}

</script>

<template>
  <div class="title-area">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '../sass/mixin';
@import '../sass/reset';
@import '../sass/variable';

.title-area{
    width: 100%;
    padding: 10px;
    background-color: $maincolor;
    @include flex;
    h1{
      font-size: $h4;
      font-weight: 700;
      color: $white;
    }
  }

</style>
