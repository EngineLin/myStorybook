import {storiesOf} from '@storybook/vue'
import UserChatCardWithTailwindComponent from './UserChatCardWithTailwind'
import ContactsListComponent from './ContactsList'

const PaddedLayout = () => `<div class="p-5"><story /></div>`

export default {
  title: 'Tailwind Demo',
  decorators: [PaddedLayout]
}

export const CardWithAvatar = () => ({
  components: {UserChatCardWithTailwindComponent},
  template: `
    <UserChatCardWithTailwindComponent />
  `
})

export const ContactsList = () => ({
  components: {ContactsListComponent},
  template: `
    <ContactsListComponent />
  `
})
