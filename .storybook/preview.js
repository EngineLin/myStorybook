import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import 'css-reset-and-normalize/css/reset-and-normalize.min.css'

// Import tailwindcss for atom style design
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'
import 'tailwindcss/dist/utilities.min.css'

// Import ionicons css to use icons
import 'ionicons/dist/css/ionicons.min.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
}
