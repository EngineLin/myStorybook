import {storiesOf} from '@storybook/vue'
import {withKnobs, text} from '@storybook/addon-knobs'

import Default from './Default'

storiesOf('Payment/CreditCard', module)

  .add('Default', () => ({
    components: {Default},
    props: {
      bankName: {
        default: text('bank name', 'VISA'),
      },
      cardNumber: {
        default: text('card number', '1233232194890398'),
      },
      userName: {
        default: text('user name', 'Engine Lin'),
      },
      deadline: {
        default: text('deadline', '01/01'),
      },
    },
    template: `
      <Default 
          :bankName="bankName" 
          :cardNumber="cardNumber" 
          :userName="userName" 
          :deadline="deadline"
      />
    `,
  }))

