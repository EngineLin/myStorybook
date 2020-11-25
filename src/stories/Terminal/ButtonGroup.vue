<template>
  <div :class="linerClass" class="liner flex items-center m-4 py-1">
    <button v-for="item in data"
            @click="handleClick(item.fn)"
            class="button
                   h-10 px-2 py-1 mr-2 ml-2 rounded
                   border-2 border-black
                   shadow bg-gray-300 hover:bg-gray-200
                   focus:outline-none">{{item.label}}
    </button>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator'

  @Component({props: ['data']})
  export default class ButtonGroup extends Vue {
    linerClass = ''

    handleClick(fn) {
      fn()
    }

    show() {
      this.linerClass = 'show'
    }

    hide() {
      this.linerClass = 'show'
    }
  }
</script>

<style lang="scss" scoped>
  .liner {
    transition: 600ms ease-in-out;
    opacity: 0;
    transform: translateY(20px);

    &.show {
      opacity: 1;
      transform: translateY(0);
    }

    &.hide {
      display: none
    }
  }
</style>
