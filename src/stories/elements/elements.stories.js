import {storiesOf} from '@storybook/vue'

import Terminal from './Terminal'

storiesOf('Elements', module)

  .add('terminal', () => ({
    components: {Terminal},
    template: `
      <div>
        <Terminal></Terminal> 
      </div>
    `,
  }))
