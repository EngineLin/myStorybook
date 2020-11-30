import {action} from '@storybook/addon-actions';

import MatthewWilliamsComponent from './MatthewWilliams'

export default {
    title: 'Button',
    component: MatthewWilliamsComponent,
    parameters: {
        backgrounds: {
            default: 'space',
            values: [
                {
                    name: 'space',
                    value: '#252934'
                }
            ]
        },
    },
}

/**
 * learn from Matthew Williams's personal website: http://findmatthew.com/
 */
export const MatthewWilliamsButton = (args = {}) => ({
    components: {MatthewWilliamsComponent},
    props: Object.keys(args),
    argTypes: {
      label: {
        control: {
          type: 'text'
        }
      }
    },
    template: `
      <MatthewWilliamsComponent 
        :data="{ label, value: true }"
        @click="onClick"
      />
    `,
    methods: {
        onClick(value) {
            action('Button Clicked')(value)
        }
    }
})

MatthewWilliamsButton.args = {
    label: 'Matthew Williams\'s Button'
}
MatthewWilliamsButton.parameters = {
    jest: ['MatthewWilliams.spec.js']
}
