import { configure } from '@storybook/vue'

// css reset and normalize
import 'css-reset-and-normalize/css/reset-and-normalize.min.css'

// import tailwindcss for atom style design
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'
import 'tailwindcss/dist/utilities.min.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
