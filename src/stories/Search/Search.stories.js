import {action} from '@storybook/addon-actions'
import { createPaddedDecorator } from '../../utils/storyDecorators'

import SearchWithMagnifierIcon from './SearchWithMagnifierIcon'

const paddedLayout = createPaddedDecorator('15px')

const actions = {
    onChange: action('Input Value Changed')
}

export default {
    title: 'Search',
    decorators: [paddedLayout]
}

export const WithMagnifierIcon = () => ({
    components: {SearchWithMagnifierIcon},
    template: `
      <SearchWithMagnifierIcon @change="onChange" />
    `,
    methods: actions
})

