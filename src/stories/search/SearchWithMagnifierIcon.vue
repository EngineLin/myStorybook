<template>
  <div class="search
              flex items-center w-auto bg-gray-200 rounded py-2">

    <div class="search-icon-container
                px-2 flex justify-center items-center">
      <img src="../../assets/images/icons/heroicons/icon-search.svg"
           class="search-icon
                  w-6 h-6 text-gray-200"
           alt="search icon">
    </div>

    <input type="text"
           v-model="inputValue"
           placeholder="Search teams or members"
           class="search-input
                  w-full h-full bg-transparent
                  focus:outline-none">
  </div>
</template>

<script>
  import {Component, Vue, Emit, Watch} from 'vue-property-decorator'

  @Component
  export default class SearchWithMagnifierIcon extends Vue {
    @Emit('change')
    change(value) {
      return value
    }

    @Watch('inputValue')
    watchInputValue(value) {
      this.change(value)
    }

    inputValue = ''
  }
</script>

<style scoped>

</style>
