<template>
  <div class="button">
    <div class="black-block bg-black py-2 px-6">
      <p class="title text-5xl text-white tracking-widest">{{title}}</p>
    </div>

    <div class="red-block"></div>

    <div class="subtitle-container
                bg-black py-1 px-1">
      <p class="subtitle text-xl text-white tracking-widest">{{subtitle}}</p>
    </div>

  </div>
</template>

<script>
  import {Component, Vue, Prop} from 'vue-property-decorator'

  @Component({props: ['title', 'subtitle']})
  export default class PersonaButton01 extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

  .button {
    position: relative;
    display: inline-block;
    transform: rotate(15deg);
  }

  .black-block {
    display: inline-block;
    position: relative;
    transform: skew(-20deg, -10deg);

    .title {
      display: inline-block;
      font-family: 'Anton', sans-serif;
      transform: skewX(20deg);
    }

    &::before {
      content: '';
      background: black;
      width: 5rem;
      height: 5rem;

      position: absolute;
      top: 50%;
      left: 5%;
      transform: translate(-50%, -50%) rotate(45deg) skewY(-30deg);
    }
  }

  .red-block {
    background: red;
    width: 100%;
    height: 4rem;

    position: absolute;
    top: 30%;
    left: -20%;
    transform: skewX(-25deg);
    z-index: -1;
  }

  .subtitle-container {
    position: absolute;
    transform: translate(-50%, -50%) skewX(10deg);
    top: 120%;
    left: 40%;
    z-index: -1;

    .subtitle {
      font-family: 'Anton', sans-serif;
      transform: translate(10%, 30%);
      color: white;
    }
  }
</style>

