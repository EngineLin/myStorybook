import {storiesOf} from '@storybook/vue'
import {number, text, withKnobs} from '@storybook/addon-knobs'

import Terminal from './Terminal'
import TypingText from './TypingText'
import ButtonGroup from './ButtonGroup'

storiesOf('Elements', module)

  .addDecorator(withKnobs)

  .add('terminal', () => ({
    components: {Terminal},
    template: `
      <div>
        <Terminal></Terminal> 
      </div>
    `,
  }))

  .add('typing text', () => ({
    components: {TypingText},
    props: {
      text: {
        default: text('text', 'This is testing text...'),
      },
      duration: {
        default: number('duration (ms)', 2000),
      },
    },
    methods: {
      handleClick() {
        this.$refs.typingText.typing()
      },
    },
    mounted() {
      this.$refs.typingText.typing()
    },
    template: `
      <div class="m-8 wax-w-xl">
        <TypingText ref="typingText" :text="text" :duration="duration"></TypingText>
        <button @click="handleClick">click me</button>
      </div>
    `,
  }), {
    backgrounds: [{name: 'terminal', value: '#4a5568', default: true}],
  })

  .add('button group', () => ({
    components: {ButtonGroup},
    data: () => ({
      buttons: [
        {label: 'button1', fn: () => console.log('click button 1')},
        {label: 'button2', fn: () => console.log('click button 2')},
        {label: 'button3', fn: () => console.log('click button 3')},
      ],
    }),
    mounted() {
      this.$refs.buttonGroup.show()
    },
    template: `
      <div>
        <ButtonGroup ref="buttonGroup" :data="buttons"></ButtonGroup>
      </div>
    `,
  }), {
    backgrounds: [{name: 'terminal', value: '#4a5568', default: true}],
  })
