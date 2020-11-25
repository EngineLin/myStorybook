import { shallowMount } from '@vue/test-utils';

import MatthewWilliamsComponent from '@/stories/Button/MatthewWilliams';

describe('Matthew Williams', () => {
    it('Renders component correctly', () => {
        const wrapper  = shallowMount(MatthewWilliamsComponent)
        expect(wrapper.text()).toBe('123')
    })
})
