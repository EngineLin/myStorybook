<template>
  <div class="card
              max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="content
                sm:flex sm:items-center px-6 py-4">
      <img src="../../assets/images/avatars/woman.01.jpg"
           class="block
                  mx-auto sm:mx-0 ms:flex-shrink-0 h-16 sm:h-24 rounded-full"
           alt="woman avatar">

      <div class="context
                  mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p class="user-name
                  text-xl leading-tight">
          Erin Lindford
        </p>

        <p class="user-job-title
                  text-sm leading-tight text-gray-600">
          Customer Support Specialist
        </p>

        <div class="contact-button-container
                    mt-4">
          <button
            class="contact-button
                   text-purple-500 text-xs font-semibold
                   border border-purple-500 rounded-full px-4 py-1 leading-normal
                   hover:text-white hover:bg-purple-500
                   active:bg-purple-400
                   focus:outline-none">
            Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Component, Vue, Prop} from 'vue-property-decorator'

  @Component
  export default class UserChatCardWithTailwind extends Vue {

  }
</script>
