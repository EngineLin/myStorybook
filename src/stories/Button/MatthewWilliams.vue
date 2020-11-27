<template>
  <button class="button px-5 py-3
                 flex items-center
                 border-2 border-white
                 hover:bg-teal-400 hover:border-teal-400 focus:outline-none"
          @click="handleClick"
  >

    <p class="text-xl text-white tracking-wide">
      {{data.label}}</p>

    <span class="icon-container
                 h-full ml-4 mr-2
                 flex justify-center items-center">
      <i class="icon ion-md-arrow-round-forward
                text-white text-lg"></i>
    </span>
  </button>
</template>

<script>
  import {Component, Vue, Prop, Emit, Watch} from 'vue-property-decorator'

  @Component
  export default class MatthewWilliamsButton extends Vue {
    @Emit('click')
    submit(value) {
      return value
    }

    @Prop({
        default: {
            label: 'View my work',
            value: true
        }
    })
    data

    handleClick() {
      this.submit(this.data.value)
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    transition: background-color 300ms ease-in;

    .icon-container i {
      transition: transform 300ms ease-in;
    }

    &:hover {
      .icon-container i {
        transform: rotate(90deg)
      }
    }
  }
</style>
