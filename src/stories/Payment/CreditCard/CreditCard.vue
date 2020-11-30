<template>
  <div class="card
              w-auto max-w-sm
              flex flex-col justify-between
              px-8 py-4 border border-gray-500 rounded-lg"
  >
    <div class="header">
      <p class="header-text
                pb-3 pr-2
                font-bold tracking-wider text-right text-4xl text-blue-200">
        {{bankName}}</p>
    </div>

    <div class="chip-image-container
                relative h-12">
      <img src="../../../assets/images/icons/credit-card-chip.icon.png"
           class="chip-image
                  h-20 w-20"
           alt="chip">
    </div>

    <div class="card-number-container
                  flex justify-between align-center px-2 pt-5 pb-8">

      <!--v-for for 4 group of card number-->
      <p v-for="number in cardNumberArray"
         class="card-number text-outside-shadow text-2xl tracking-widest">
        {{ number }}</p>
    </div>

    <div class="footer
                flex justify-between align-center">
      <div class="user-name">
        <p class="text-xl text-white text-outside-shadow">
          {{userName}}</p>
      </div>

      <div class="deadline">
        <p class="text-lg text-white text-outside-shadow">
          {{deadline}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {Component, Vue, Prop} from 'vue-property-decorator'

  @Component({props: ['bankName', 'cardNumber', 'userName', 'deadline']})
  export default class BasicCreditCard extends Vue {
    @Prop()
    bankName

    @Prop()
    cardNumber

    @Prop()
    userName

    @Prop()
    deadline

    get cardNumberArray() {
      const array = this.cardNumber.split('')

      return array
        .reduce((prov, curr, index) => {
          const order = Math.floor(index / 4)
          if (prov[order]) {
            prov[order].push(curr)
          } else {
            prov[order] = [curr]
          }
          return prov
        }, [])
        .map(array => array.join(''))
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    background: linear-gradient(to right, #68a8ba, #347faa);
  }

  .chip-image-container {
    .chip-image {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translate(-50%, -50%);
    }
  }

  .text-outside-shadow {
    text-shadow: 0 -1px 2px #000000;
    color: #ffffff;
  }
</style>
