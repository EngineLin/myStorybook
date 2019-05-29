import {storiesOf} from '@storybook/vue'

import GridCard01 from './GridCard01'

storiesOf('Cards', module)

.add('grid card 1 and 2 x 2', () => ({
  components: {GridCard01},
  template: `
    <div class="max-w-lg h-64">
      <GridCard01></GridCard01>
    </div>
  `
}))
