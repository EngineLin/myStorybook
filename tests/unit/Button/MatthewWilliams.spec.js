import { shallowMount } from '@vue/test-utils'

import MatthewWilliamsComponent from '@/stories/Button/MatthewWilliams.vue';

describe('Matthew Williams', () => {
    it('renders props.label when passed', () => {
        const label = 'new message'
        const data = {label, value: true}
        const wrapper = shallowMount(MatthewWilliamsComponent, {
            propsData: { data }
        })
        expect(wrapper.text()).toMatch(label)
    })
})
