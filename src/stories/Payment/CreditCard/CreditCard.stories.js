import CreditCardComponent from './CreditCard'

export default {
    title: 'Payment/CreditCard',
    component: CreditCardComponent,
    argTypes: {
        bankName: {
            control: {
                type: 'text',
            },
        },
        cardNumber: {
            control: {
                type: 'text',
            },
        },
        userName: {
            control: {
                type: 'text',
            },
        },
        deadline: {
            control: {
                type: 'text',
            },
        },
    }
}

export const Default = (args = {}) => ({
    components: {CreditCardComponent},
    props: Object.keys(args),
    template: `
      <CreditCardComponent 
          :bankName="bankName" 
          :cardNumber="cardNumber" 
          :userName="userName" 
          :deadline="deadline"
      />
    `,
})
Default.args = {
    bankName: 'VISA',
    cardNumber: '1233232194890398',
    userName: 'Engine Lin',
    deadline: '01/01'
}
