<template>
  <div class="liner flex items-center m-2 py-1">
    <p class="text-2xl text-white">
      {{context}}
    </p>
    <div :class="{display: isCursorDisplay}" class="cursor"></div>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator'

  @Component({props: ['text', 'duration', 'keep']})
  export default class TypingText extends Vue {
    context = ''

    isCursorDisplay = false

    cursorTimer = null

    get textArray() {
        return this.text ? [...this.text] : []
    }

    get textLength() {
      return this.textArray.length
    }

    get timePerSignalTyping() {
      return this.duration
        ? Math.floor(this.duration / this.textLength)
        : 100
    }

    typing() {
      // 打字過程中不閃爍 cursor
      this.isCursorDisplay = true

      this.context = ''

      let index = 0
      const timer = setInterval(() => {

        if (index < this.textLength) {
          this.context += this.textArray[index]
          index += 1

        } else {
          clearInterval(timer)

          if (this.keep) {
            this.openCursor()
          } else {
            this.isCursorDisplay = false
          }

        }

      }, this.timePerSignalTyping)
    }

    openCursor() {
      this.cursorTimer = setInterval(() => this.isCursorDisplay = !this.isCursorDisplay, 700)
    }

    closeCursor() {
      clearInterval(this.cursorTimer)
    }

    // mounted() {
    //   this.typing()
    // }

    // beforeDestroy() {
    //   console.log('destroy')
    //   this.closeCursor()
    // }
  }
</script>

<style lang="scss" scoped>
  .cursor {
    width: 2px;
    height: 18px;
    margin: auto 3px;
    background-color: #FFFFFF;
    opacity: 0;
    &.display {
      opacity: 1;
    }
  }
</style>
