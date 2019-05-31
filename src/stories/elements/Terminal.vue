<template>
  <div class="terminal max-w-4xl rounded overflow-hidden relative">

    <div class="header
                w-full h-6 px-1 bg-gray-900">

      <div class="points-container
                  w-16 h-full
                  flex justify-around items-center">
        <div class="close-point
                    w-3 h-3 bg-red-600 rounded-full
                    flex justify-center items-center hover:bg-red-500">
          <i class="ion ion-md-close text-gray-900 text-sm"></i>
        </div>
        <div class="narrow-point
                    w-3 h-3 bg-yellow-600 rounded-full
                    flex justify-center items-center hover:bg-yellow-500">
          <i class="ion ion-md-remove text-gray-900 text-sm"></i>
        </div>
        <div class="extend-point
                    w-3 h-3 bg-green-600 rounded-full
                    flex justify-center items-center hover:bg-green-500">
          <i class="ion ion-md-sync text-gray-900 text-sm"></i>
        </div>
      </div>

    </div>

    <div class="body
                w-full bg-gray-700 opacity-50
                px-2 py-4">
    </div>

    <div class="body-display" ref="bodyDisplay"></div>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
  import TypingText from './TypingText'
  import ButtonGroup from './ButtonGroup'

  const scripts = [
    {type: 'typing', text: 'Hello, I\'m Engine lin.', duration: 1000, keep: false},
    {type: 'typing', text: 'nice to meet you, bro,', duration: 1000, keep: false},
    {type: 'typing', text: 'or we had a talk somewhere before?', duration: 1000, keep: true},
    {
      type: 'buttons', buttons: [
        {
          label: 'Yes', fn() {
            console.log(this)
          },
        },
        {
          label: 'No!!', fn() {
            console.log(this)
          },
        },
      ],
    },
  ]

  @Component()
  export default class Terminal extends Vue {

    typingText({text, duration, keep}) {
      const bodyDisplay = this.$refs.bodyDisplay
      const Constructor = Vue.extend(TypingText)
      const instance = new Constructor({el: document.createElement('div')})
      instance.text = text || ''
      instance.duration = duration || 1000
      instance.keep = keep || false

      bodyDisplay.appendChild(instance.$el)
      setTimeout(() => instance.typing(), 100)
    }

    buttonGroup({buttons}) {
      const bodyDisplay = this.$refs.bodyDisplay
      const Constructor = Vue.extend(ButtonGroup)
      const instance = new Constructor({el: document.createElement('div')})
      instance.data = buttons

      bodyDisplay.appendChild(instance.$el)
      setTimeout(() => instance.show(), 100)
    }

    talking(scripts) {
      let index = 0
      const length = scripts.length

      const timer = setInterval(() => {
        if (index < length) {
          const script = scripts[index]

          index += 1

          if (script.type === 'typing') {
            this.typingText(script)
            return
          }

          if (script.type === 'buttons') {
            this.buttonGroup(script)
            return
          }
        } else {
          clearInterval(timer)
        }
      }, 1000)
    }

    mounted() {
      this.talking(scripts)
    }
  }
</script>

<style lang="scss" scoped>
  .body {
    min-height: 30rem;
  }

  .points-container i {
    display: none;
  }

  .points-container:hover {
    i {
      display: inline-block;
    }
  }

  .body-display {
    position: absolute;
    width: 100%;
    height: calc(100% - 1.5rem);
    top: 1.5rem;
    left: 0;
  }
</style>
