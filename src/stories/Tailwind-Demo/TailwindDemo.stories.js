import UserChatCardWithTailwindComponent from './UserChatCardWithTailwind'
import ContactsListComponent from './ContactsList'

export default {
  title: 'Tailwind Demo',
}

export const CardWithAvatar = () => ({
  components: {UserChatCardWithTailwindComponent},
  template: `<UserChatCardWithTailwindComponent />`
})

export const ContactsList = () => ({
  components: {ContactsListComponent},
  template: `<ContactsListComponent />`
})
