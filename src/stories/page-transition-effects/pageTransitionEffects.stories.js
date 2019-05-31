import {storiesOf} from '@storybook/vue'

import WipeTransitionEffect from './WipeTransitionEffect'
import WipeTransitionEffect2 from './WipeTransitionEffect2'

storiesOf('page transition effects', module)

  .add('wipe', () => ({
    components: {WipeTransitionEffect},
    template: `
      <div>
        <WipeTransitionEffect></WipeTransitionEffect>
      </div>
    `,
  }))

  .add('wipe2', () => ({
    components: {WipeTransitionEffect2},
    template: `
      <WipeTransitionEffect2></WipeTransitionEffect2>
    `,
  }))
