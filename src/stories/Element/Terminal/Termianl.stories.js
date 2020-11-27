import TerminalComponent from './Terminal'
import TypingTextComponent from './TypingText'
import {action} from '@storybook/addon-actions';

export default {
  title: 'Element/Terminal',
}

export const Terminal = () => ({
  components: {TerminalComponent},
  template: `<TerminalComponent />`
})

export const TypingText = (args = {}) => ({
  components: {TypingTextComponent},
  props: Object.keys(args),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    },
    duration: {
      control: {
        type: 'number'
      }
    }
  },
  methods: {
    onClick() {
      action('Button Clicked')()
      this.typing()
    },
    typing() {
      action('Typing')(this.text)
      this.$refs.typingText.typing()
    }
  },
  mounted() {
    this.typing()
  },
  template: `
      <div class="wax-w-xl">
        <TypingTextComponent 
          ref="typingText" 
          :text="text" 
          :duration="duration"
        />
        <button @click="onClick">
          click me
        </button>
      </div>
    `,
})
TypingText.args = {
  text: 'This is testing text...',
  duration: 2000
}

  // .add('typing text', () => ({
  //   components: {TypingText},
  //   props: {
  //     text: {
  //       default: text('text', 'This is testing text...'),
  //     },
  //     duration: {
  //       default: number('duration (ms)', 2000),
  //     },
  //   },
  //   methods: {
  //     handleClick() {
  //       this.$refs.typingText.typing()
  //     },
  //   },
  //   mounted() {
  //     this.$refs.typingText.typing()
  //   },
  //   template: `
  //     <div class="m-8 wax-w-xl">
  //       <TypingText ref="typingText" :text="text" :duration="duration"></TypingText>
  //       <button @click="handleClick">click me</button>
  //     </div>
  //   `,
  // }), {
  //   backgrounds: [{name: 'terminal', value: '#4a5568', default: true}],
  // })
  //
  // .add('button group', () => ({
  //   components: {ButtonGroup},
  //   data: () => ({
  //     buttons: [
  //       {label: 'button1', fn: () => console.log('click button 1')},
  //       {label: 'button2', fn: () => console.log('click button 2')},
  //       {label: 'button3', fn: () => console.log('click button 3')},
  //     ],
  //   }),
  //   mounted() {
  //     this.$refs.buttonGroup.show()
  //   },
  //   template: `
  //     <div>
  //       <ButtonGroup ref="buttonGroup" :data="buttons"></ButtonGroup>
  //     </div>
  //   `,
  // }), {
  //   backgrounds: [{name: 'terminal', value: '#4a5568', default: true}],
  // })
