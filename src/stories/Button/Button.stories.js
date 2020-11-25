import {storiesOf} from '@storybook/vue'
import {withKnobs, text} from '@storybook/addon-knobs'

import MatthewWilliams from './MatthewWilliams'

/*
storiesOf('Button', module)

  .addDecorator(withKnobs)

  .add('', () => ({
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
*/

export const MatthewWilliamsButton = () => ({
    components: {MatthewWilliams},
    template: `
      <div class="m-8">
        <MatthewWilliams />
      </div>  
    `,
})
