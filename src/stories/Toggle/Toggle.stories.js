import {storiesOf} from '@storybook/vue'

import FlipCoinToggle from './FlipCoinToggle'

export default {
    title: 'Toggle',

}

storiesOf('Toggles', module)

  .add('flip coin', () => ({
    components: {FlipCoinToggle},
    template: `
      <div class="m-8">
        <FlipCoinToggle></FlipCoinToggle>
      </div>
    `,
  }))
