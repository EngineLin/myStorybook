import { shallowMount } from '@vue/test-utils'

import SearchWithMagnifierIcon from '@/stories/Search/SearchWithMagnifierIcon';

it('Match snapshot', () => {
    const wrapper = shallowMount(SearchWithMagnifierIcon, {
        propsData: { value: '' }
    })
    expect(wrapper.html()).toMatchSnapshot()
})

it('Renders props.value when passed', () => {
    const defaultValue = 'default input value'
    const wrapper = shallowMount(SearchWithMagnifierIcon, {
        propsData: {value: defaultValue}
    })
    expect(wrapper.find('.search-input').exists()).toBeTruthy()
    expect(wrapper.find('.search-input').element.value).toEqual(defaultValue)
})

it('Event change invoke when input typing', async () => {
    const inputValue = 'my input typing'
    const wrapper = shallowMount(SearchWithMagnifierIcon, {
        propsData: { value: '' }
    })
    await wrapper.find('.search-input').setValue(inputValue)
    expect(wrapper.emitted().change[0][0]).toEqual(inputValue)
})
