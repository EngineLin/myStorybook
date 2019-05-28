<template>
  <div :style="cardStyle" class="card-container">
    <div class="header">
      <p>{{bankName}}</p>
    </div>

    <div class="chip-container">
      <img src="../../assets/images/icons/credit-card-chip.icon.png" class="chip-image" alt="chip">
    </div>

    <div class="card-number-container">
      <div class="card-number">
        <p v-for="number in cardNumberArray">{{ number }}</p>
      </div>
    </div>

    <div class="footer">
      <div class="user-name">
        <p>{{userName}}</p>
      </div>
      <div class="deadline">
        <p>{{deadline}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'

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

    get cardStyle() {
      return {background: `linear-gradient(to right, #68a8ba, #347faa)`}
    }

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
  .card-container {
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 10px;
    border: 1px solid #cccccc;

    padding: 20px 25px;
  }

  .header {
    height: 40px;
    margin: 0 0 15px;
  }

  .header p {
    font-size: 32px;
    font-weight: bold;
    color: #9dc6d9;

    display: flex;
    justify-content: flex-end;
  }

  .chip-container {
    position: relative;
    height: 30px;
  }

  .chip-container .chip-image {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%);

    height: 70PX;
    width: 70px;
  }

  .card-number-container {
    height: 40px;
    margin: 10px 0 15px;
  }

  .card-number-container .card-number {
    height: 40px;

    font-size: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-number-container .card-number p {
    letter-spacing: 4px;
    text-shadow: 0 -1px 2px #000000;
    color: #ffffff;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer .user-name p {
    font-size: 18px;

    letter-spacing: 2px;
    text-shadow: 0 -1px 2px #000000;
    color: #ffffff;
  }

  .footer .deadline p {
    letter-spacing: 4px;
    text-shadow: 0 -1px 2px #000000;
    color: #ffffff;
  }
</style>
