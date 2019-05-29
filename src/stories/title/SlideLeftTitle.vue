<template>
  <div class="slide-title-container
              max-w-full h-24 font-bold font-mono text-gray-700
              relative">
    <h2 :class="{active: isActive}"
        class="slide-title
               text-4xl absolute">{{title}}</h2>
    <div :class="{active: isActive}"
         class="slide-line
                w-24 h-1 mt-1 bg-gray-700 absolute"></div>
  </div>
</template>

<script>
  import {Component, Vue, Prop} from 'vue-property-decorator'

  @Component({props: ['title']})
  export default class SlideLeftTitle extends Vue {

    isActive = false

    start() {
      const timer = setTimeout(() => {
        this.isActive = true
        clearTimeout(timer)
      }, 1000)
    }

    mounted() {
      this.start()
    }
  }
</script>

<style lang="scss" scoped>
  .slide-title {
    transition: all 200ms linear;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);

    &.active {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .slide-line {
    transition: all 300ms linear;
    transition-delay: 400ms;
    left: 0;
    top: 80%;
    transform: translate(-100%, -50%);

    &.active {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
