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

// learn from Matthew Williams's personal website: http://findmatthew.com/
export const MatthewWilliamsButton = () => ({
    components: {MatthewWilliamsComponent},
    template: `<MatthewWilliamsComponent />`
})
