<template>
<div class="card
            flex h-full">
  <div class="left-container
              flex-1 m-5px">
    <IgCard></IgCard>
  </div>
  <div class="right-container
              flex-1 flex flex-wrap">
    <div class="size-1/2-10px m-5px">
      <IgCard></IgCard>
    </div>
    <div class="size-1/2-10px m-5px">
      <IgCard></IgCard>
    </div>
    <div class="size-1/2-10px m-5px">
      <IgCard></IgCard>
    </div>
    <div class="size-1/2-10px m-5px">
      <IgCard></IgCard>
    </div>
  </div>
</div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
  import IgCard from './IgCard'

  @Component({components: {IgCard}})
  export default class GridCard01 extends Vue {

    data = [
      {
        title: 'Kate Hudson',
        count: '123,322',
        imageUrl: 'http://placekitten.com/300/300'
      },
      {
        title: 'H&M',
        count: '122,333',
        imageUrl: 'http://placekitten.com/300/300'
      },
      {
        title: 'Xendsl Dlifd',
        count: '11,444',
        imageUrl: 'http://placekitten.com/300/300'
      },
      {
        title: 'Missguided',
        count: '11,893',
        imageUrl: 'http://placekitten.com/300/300'
      },
      {
        title: 'Fashionb Nova',
        count: '20,532',
        imageUrl: 'http://placekitten.com/300/300'
      },
      {
        title: 'overflow',
        count: '122,3332',
        imageUrl: 'http://placekitten.com/300/300'
      },
    ]

  }
</script>

<style lang="scss" scoped>
  .size-1\/2-10px {
    width: calc(50% - 10px);
    height: calc(50% - 10px);
  }

  .m-5px {
    margin: 5px;
  }
</style>
