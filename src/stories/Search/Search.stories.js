import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'

import SearchWithMagnifierIcon from './SearchWithMagnifierIcon'

storiesOf('Search', module)

  .add('with magnifier icon', () => ({
    components: {SearchWithMagnifierIcon},
    methods: {action() {return action}},
    template: `
     <div class="m-8">
       <SearchWithMagnifierIcon @submit="action('input submit')"></SearchWithMagnifierIcon>
     </div> 
  `,
  }))
