import {storiesOf} from '@storybook/vue'
import UserChatCardWithTailwind from './UserChatCardWithTailwind'
import ContactsList from './ContactsList'

storiesOf('Users', module)

.add('card with avatar', () => ({
  components: {UserChatCardWithTailwind},
  template: `
    <UserChatCardWithTailwind></UserChatCardWithTailwind>
  `
}))

.add('contacts list', () => ({
  components: {ContactsList},
  template: `
    <div class="m-16">
      <ContactsList></ContactsList>
    </div>
  `
}))
