import {storiesOf} from '@storybook/vue'


storiesOf('Css secrets', module)
  .add('demo', () => ({
    template: `<div>demo</div>`,
  }), {
    notes: 'demo notes',
  })
