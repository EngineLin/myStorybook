import {storiesOf} from '@storybook/vue'

import SlideLeftTitle from './SlideLeftTitle'

storiesOf('Title', module)

  .add('slide left', () => ({
    components: {SlideLeftTitle},
    template: `
    <SlideLeftTitle title="Title is Me"></SlideLeftTitle>
  `,
  }), {
    notes: 'learn from Matthew Williams\'s personal website: http://findmatthew.com/',
  })
