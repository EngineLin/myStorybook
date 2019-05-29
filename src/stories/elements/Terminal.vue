<template>
  <div class="terminal max-w-4xl rounded overflow-hidden">

    <div class="header
                w-full h-6 px-1 bg-gray-900">

      <div class="points-container
                  w-16 h-full
                  flex justify-around items-center">
        <div class="close-point w-3 h-3 bg-red-600 rounded-full"></div>
        <div class="narrow-point w-3 h-3 bg-yellow-600 rounded-full"></div>
        <div class="extend-point w-3 h-3 bg-green-600 rounded-full"></div>
      </div>

    </div>

    <div class="body
                w-full bg-gray-700 opacity-50
                px-2 py-4">
    </div>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

  @Component
  export default class Terminal extends Vue {

  }
</script>

<style scoped>
  .body {
    min-height: 30rem;
  }
</style>
