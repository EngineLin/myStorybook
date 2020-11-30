import { shallowMount } from '@vue/test-utils'

import CreditCard from '@/stories/Payment/CreditCard/CreditCard';

const initData = () => ({
    bankName: 'VISA',
    cardNumber: '1233232194890398',
    userName: 'Engine Lin',
    deadline: '01/01'
})

it('Match snapshot', () => {
    const wrapper = shallowMount(CreditCard, {
        propsData: initData()
    })
    expect(wrapper.html()).toMatchSnapshot()
})

it('Renders props.bankName with passed', () => {
    const data = initData()
    const wrapper = shallowMount(CreditCard, {
        propsData: {...data}
    })
    expect(wrapper.find('.header-text').text()).toEqual(data.bankName)

    const cardNumberWrapper = wrapper.findAll('.card-number')
    const cardNumbers = ['1233', '2321', '9489', '0398']

    expect(cardNumberWrapper.at(0).text()).toEqual(cardNumbers[0])
    expect(cardNumberWrapper.at(1).text()).toEqual(cardNumbers[1])
    expect(cardNumberWrapper.at(2).text()).toEqual(cardNumbers[2])
    expect(cardNumberWrapper.at(3).text()).toEqual(cardNumbers[3])

    expect(wrapper.find('.user-name p').text()).toEqual(data.userName)
    expect(wrapper.find('.deadline p').text()).toEqual(data.deadline)
})

it('Calculate computed cardNumberArray correctly.', async () => {
    const data = initData()
    const wrapper = shallowMount(CreditCard, {
        propsData: {...data}
    })
    await wrapper.setProps({ cardNumber: '1111222233334444' })
    expect(wrapper.vm.cardNumberArray).toEqual(['1111', '2222', '3333', '4444'])
})


