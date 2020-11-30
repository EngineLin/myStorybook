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
           :value="value"
           @input="onInput"
           placeholder="Search teams or members"
           class="search-input
                  w-full h-full bg-transparent
                  focus:outline-none">
  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

  @Component
  export default class SearchWithMagnifierIcon extends Vue {
    @Prop({
      type: String,
      default: ''
    })
    value

    @Emit('change')
    change(value) {
      return value
    }

    onInput(e) {
      const {value} = e.target
      this.change(value)
    }
  }
</script>
