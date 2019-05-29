<template>
  <div class="button-container">
    <button class="button
                 p-2
                 focus:outline-none">
      {{data.label}}
    </button>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

  @Component
  export default class FlashShadowButton extends Vue {
    @Emit('click')
    submit(value) {
      return value
    }

    data = {label: 'click me', value: '0'}

    handleClick() {
      this.submit(this.data.value)
    }
  }
</script>

<style lang="scss" scoped>
  .button-container {
    overflow: hidden;
    padding: 10px;
  }

  .button {
    position: relative;

    &::before {
      content: '';
      transform: skewX(-15deg);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 2px solid #e2e8f0;
      /*box-shadow: 0 0 1px 2px #cccccc;*/
    }

    &::after {
      content: '';
      transform: skewX(-15deg);
      background: linear-gradient(to right, #000000 60%, #444444);
      opacity: .6;
      width: 100%;
      height: 100%;

      transition: left 100ms ease-in;

      position: absolute;
      top: 3px;
      left: -130%;
    }

    &:hover {
      &::after {
        left: 3px;
      }
    }

    &:active {
      &::before {
        border: 2px solid #edf2f7;
      }
      &::after {
        background: linear-gradient(to right, #222222 60%, #666666);
      }
    }
  }
</style>
