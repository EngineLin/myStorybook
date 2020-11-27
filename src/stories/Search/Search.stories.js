import {action} from '@storybook/addon-actions'

import SearchWithMagnifierIcon from './SearchWithMagnifierIcon'

export default {
    title: 'Search',
}

const actions = {
    onChange: action('Input Value Changed')
}

export const WithMagnifierIcon = () => ({
    components: {SearchWithMagnifierIcon},
    template: `
      <SearchWithMagnifierIcon @change="onChange" />
    `,
    methods: actions
})

