<template>
  <div @click="handleClick"
       :class="coinClass"
       class="coin
              w-20 h-20 relative cursor-pointer">

    <div class="add-side
                w-full h-full rounded-full bg-teal-500 shadow-2xl
                flex justify-center items-center">
      <i class="icon ion-md-add
                text-white text-2xl"></i>
    </div>

    <div class="close-side
                w-full h-full rounded-full bg-red-500 shadow-2xl
                flex justify-center items-center">
      <i class="icon ion-md-close
                text-white text-2xl"></i>
    </div>

  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

  @Component
  export default class FlipCoinToggle extends Vue {
    @Emit('click')
    coinClick(value) {
      return value
    }

    isFlip = null

    get coinClass() {

      const classAdapter = {
        true: 'active',
        false: 'no-active',
        null: '',

        default: '',
      }

      return classAdapter[this.isFlip] || classAdapter.default
    }

    handleClick() {
      // null 在第一次轉換會被當成 false
      // 所以第一次點擊時 !this.isFlop === true
      this.isFlip = !this.isFlip

      this.coinClick(this.isFlip)
    }
  }
</script>

<style lang="scss" scoped>
  .coin {
    transition: transform 1s ease-in;
    transform-style: preserve-3d;

    &:hover {
      .add-side {
        background-color: #319795;
      }

      .close-side {
        background-color: #e53e3e;
      }
    }

    &.active {
      animation: clockwise 700ms ease-out forwards;
    }

    &.no-active {
      animation: counterclockwise 700ms ease-out forwards;
    }
  }

  .add-side {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close-side {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateY(-180deg);
  }

  @keyframes clockwise {
    from {
      transform: rotateY(0)
    }
    to {
      transform: rotateY(540deg)
    }
  }

  @keyframes counterclockwise {
    from {
      transform: rotateY(540deg)
    }
    to {
      transform: rotateY(0)
    }
  }
</style>
