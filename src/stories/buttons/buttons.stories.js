import {storiesOf} from '@storybook/vue'
import {withKnobs, text} from '@storybook/addon-knobs'

import FlashShadowButton from './FlashShadowButton'
import MatthewWilliamsButton from './MatthewWilliamsButton'
import PersonaButton01 from './PersonaButton01'
import PersonaButton02 from './PersonaButton02'


storiesOf('Buttons', module)

  .addDecorator(withKnobs)

  .add('flash shadow', () => {
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

  .add('persona5 01', () => ({
    components: {PersonaButton01},
    props: {
      title: {
        default: text('title', 'Persona5'),
      },
      subtitle: {
        default: text('subtitle', 'best game!?'),
      },
    },
    template: `
      <div class="m-24">
        <PersonaButton01 :title="title" :subtitle="subtitle"></PersonaButton01>
       </div>
      `,
  }), {
    notes: 'PS4 game: Persona5\'s battle UI: https://www.tumblr.com/search/persona%205%20battle%20ui',
  })

  .add('persona5 02', () => ({
    components: {PersonaButton02},
    props: {
      title: {
        default: text('title', 'Persona5'),
      },
      subtitle: {
        default: text('subtitle', 'best game!?'),
      },
    },
    template: `
      <div class="m-24">
        <PersonaButton02 :title="title" :subtitle="subtitle"></PersonaButton02>
       </div>
      `,
  }), {
    notes: 'PS4 game: Persona5\'s battle UI: https://www.tumblr.com/search/persona%205%20battle%20ui',
  })

  .add('persona5 buttons', () => ({
    components: {PersonaButton01, PersonaButton02},
    template: `
      <div class="m-24">
        <div class="mb-32">
          <PersonaButton01 title="Play Video Game" subtitle="hard cord player!?"></PersonaButton01>
        </div>
        <div>
          <PersonaButton02 title="Exercise" subtitle="move body!"></PersonaButton02>
        </div>
      </div>
    `
  }))
