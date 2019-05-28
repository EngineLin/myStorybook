import {storiesOf} from '@storybook/vue'
import {withKnobs, text} from '@storybook/addon-knobs'

import BasicCreditCard from './BasicCreditCard'

storiesOf('Payments', module)

  .addDecorator(withKnobs)

  .add('basic credit card', () => ({
    components: {BasicCreditCard},
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
      <BasicCreditCard :bankName="bankName"
                       :cardNumber="cardNumber"
                       :userName="userName"
                       :deadline="deadline"
      ></BasicCreditCard>
    `,
  }))

