<template>
  <div class="contacts-list
              font-mono
              max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden">
    <h3 class="title
               px-8 py-5 text-lg">
      Contacts
    </h3>

    <div class="middle-container
                px-3">

      <SearchWithMagnifierIcon @change="handleSearchInputSubmit"></SearchWithMagnifierIcon>

      <div class="list-container
                  mt-4 mb-4">
        <div v-for="(account, index) in filteredAccounts"
             class="list
                    flex justify-between items-center
                    py-1 mt-2 mb-2 rounded
                    hover:bg-blue-100 cursor-pointer"
             :key="index">

          <div class="light-point-container
                      w-10 h-8 ml-1 flex justify-center items-center">
            <div class="light-point
                        w-2 h-2 rounded-full"
                 :class="takeLightPointClass(account.isOnline)"></div>
          </div>

          <p class="name w-auto flex-1">
            {{account.name}}
          </p>

          <p class="group
                    text-sm text-gray-600 mr-4">
            {{account.group}}
          </p>
        </div>
      </div>
    </div>

    <div class="footer
                flex justify-end
                bg-gray-200 py-3 px-4">

      <button class="cancel-button
                     w-20 h-10 bg-transparent mr-1 ml-1
                     active:text-white focus:outline-none">
        Cancel
      </button>

      <button class="invite-button
                     w-20 h-10 rounded shadow-lg mr-1 ml-1
                     text-white bg-blue-700
                     active:bg-blue-800 focus:outline-none">
        Invite
      </button>
    </div>
  </div>
</template>

<script>
  import {Component, Vue, Emit} from 'vue-property-decorator'
  import SearchWithMagnifierIcon from '../search/SearchWithMagnifierIcon'

  @Component({components: {SearchWithMagnifierIcon}})
  export default class ContactsList extends Vue {
    @Emit('invite')
    invite(userData) {
      return userData
    }

    accounts = [
      {
        name: 'Tighten Co.',
        group: 'Team',
        isOnline: false,
      },
      {
        name: 'Taylor Otwell',
        group: 'Member',
        isOnline: true,
      },
      {
        name: 'Adam Wathan',
        group: 'Member',
        isOnline: false,
      },
      {
        name: 'Duke Street Studio Inc.',
        group: 'Team',
        isOnline: false,
      },
      {
        name: 'Jeffrey Way',
        group: 'Member',
        isOnline: true,
      },
    ]

    searchValue = ''

    get filteredAccounts() {
      if (!this.searchValue) {
        return this.accounts
      }

      return this.accounts.filter(account => {

        const search = this.searchValue.toLowerCase()
        const group = account.group.toLowerCase()
        const name = account.name.toLowerCase()

        return group === search || name.indexOf(search) !== -1;
      })
    }

    takeLightPointClass(isOnline) {
      if (isOnline) {
        return 'bg-green-500'
      } else {
        return 'bg-gray-300'
      }
    }

    handleSearchInputSubmit(searchValue) {
      console.log('searchValue', searchValue)
      this.searchValue = searchValue
    }
  }
</script>

<style scoped>

</style>
