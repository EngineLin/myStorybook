<template>
  <div @click="handleClick"
       :style="cardStyle"
       class="card
              w-full h-full
              bg-center bg-no-repeat bg-cover
              flex flex-col justify-end">

    <p class="title">{{title}}</p>
    <div class="count-container
                flex">

      <div class="ig-icon-container">
        <img src=""
             class="ig-icon"
             alt="ig icon">
      </div>

      <p class="count">{{count}}</p>
    </div>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

  @Component
  export default class IgCard extends Vue {
    @Emit('click')
    click(data) {
      return data
    }

    // @Prop()
    data = {
      title: 'Kate Hudson',
      count: '123,322',
      imageUrl: 'http://placekitten.com/300/300',
    }

    get imageUrl() {
      console.log(this)
      return this.data.imageUrl
    }

    get title() {
      return this.data.title
    }

    get count() {
      return this.data.count
    }

    get cardStyle() {
      return {backgroundImage: `url(${this.imageUrl})`}
    }

    handleClick() {
      this.click(this.data)
    }
  }
</script>

<style scoped>
</style>
