<template>
  <div>
    <div class="transition" :class="transitionClass"></div>

    <div class="content">

      <div v-if="contentId === 0">
        <h1>Heading title</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div v-if="contentId === 1">
        <h1>RUUUUUUUUUUUUNNNNNNNNN!</h1>
        <p>just kidding, man.</p>
      </div>

      <button class="cta" @click="handleClick">Click</button>
    </div>
  </div>
</template>

<script>
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class WipeTransitionEffect extends Vue {
    contentId = 0
    transitionClass = ''

    handleClick() {
      this.transitionClass = 'active1'

      const timer1 = setTimeout(() => {
        this.contentId = !!this.contentId ? 0 : 1
        this.transitionClass = 'active2'
        clearTimeout(timer1)
      }, 2000)

      const timer2 = setTimeout(() => {
        this.transitionClass = ''
        clearTimeout(timer2)
      }, 4000)
    }
  }
</script>

<style lang="scss" scoped>
  .transition {
    position: fixed;
    height: 200%;
    width: 200%;
    background: black;
    transform: translate(50%, 20%) rotate(-60deg);
    z-index: 11;

    &.active1 {
      animation: wipe-1 2000ms ease-in-out;
    }

    &.active2 {
      animation: wipe-2 2000ms ease-in-out;
    }
  }

  @keyframes wipe-1 {
    0% {
    }
    100% {
     transform: translate(-40%, -20%)
    }
  }

  @keyframes wipe-2 {
    0% {
      transform: translate(-40%, -20%)
    }
    100% {
      transform: translate(-40%, -180%) rotate(-45deg)
    }
  }

  .content {
    position: relative;
    padding: 200px 0 0 200px;
    color: #000;
    z-index: 10;
    height: 300px;
  }

  .cta {
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
    background: #202020;
    color: #eaeaea;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 10px 40px;
  }
</style>

