import {storiesOf} from '@storybook/vue'

import FlashShadowButton from './FlashShadowButton'
import MatthewWilliamsButton from './MatthewWilliamsButton'

storiesOf('Buttons', module)

  .add('flash shadow', () => {
    const data = {label: 'click me', value: '0'}
    return {
      components: {FlashShadowButton},
      data: () => ({
        data: {label: 'click me', value: '0'},
      }),
      template: `
        <div class="m-8">
          <FlashShadowButton></FlashShadowButton>
        </div>
    `,
    }
  })

  .add('Matthew Williams button', () => ({
    components: {MatthewWilliamsButton},
    template: `
      <div class="m-8">
        <MatthewWilliamsButton></MatthewWilliamsButton>
      </div>  
    `,
  }), {
    notes: 'learn from Matthew Williams\'s personal website: http://findmatthew.com/',
    backgrounds: [{name: 'space', value: '#252934', default: true}],
  })
