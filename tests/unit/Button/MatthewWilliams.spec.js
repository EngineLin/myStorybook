import { shallowMount } from '@vue/test-utils'

import MatthewWilliamsComponent from '@/stories/Button/MatthewWilliams.vue';

const initData = () => ({
    label: 'new message',
    value: 'value with string'
})

const defaultData = {
    label: 'View my work',
    value: true
}

it('Match snapshot', () => {
    const data = initData()
    const wrapper = shallowMount(MatthewWilliamsComponent, {
        propsData: { data }
    })
    expect(wrapper.html()).toMatchSnapshot()
})

it('Renders default props.label if no passed', () => {
    const wrapper = shallowMount(MatthewWilliamsComponent)
    expect(wrapper.text()).toEqual(defaultData.label)
})

it('Renders props.label when passed', () => {
    const data = initData()
    const wrapper = shallowMount(MatthewWilliamsComponent, {
        propsData: { data }
    })
    expect(wrapper.text()).toEqual(data.label)
})

it('Event click invoke with props.value if no passed', async () => {
    const wrapper = shallowMount(MatthewWilliamsComponent)
    await wrapper.trigger('click')
    expect(wrapper.emitted().click[0][0]).toEqual(defaultData.value)
})

it('Event click invoke with props.value', async () => {
    const data = initData()
    const wrapper = shallowMount(MatthewWilliamsComponent, {
        propsData: { data },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted().click[0][0]).toEqual(data.value)
})
