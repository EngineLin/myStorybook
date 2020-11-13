<template>
  <div>
    <slot />
    <infinite-loading
      :identifier="infiniteId"
      @infinite="onInfinite"
    >
      <div slot="no-more" class="api-no-data">- 已經全部加載完畢 -</div>
      <div slot="no-results">
        <div class="record-item-container">
          <div class="record-item">
            <span>{{ text }}</span>
          </div>
        </div>
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'InfiniteLoadingWrapper',
  components: {
    InfiniteLoading
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    infiniteId: {
      type: [Number, String],
      default: null
    },
    infiniteStateType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      infiniteState: {}
    }
  },
  watch: {
    infiniteStateType(value) {
      if (value.indexOf('loaded') > -1) {
        this.infiniteState.loaded()
      }
      if (value.indexOf('noResult') > -1) {
        this.infiniteState.complete()
      }
      if (value.indexOf('complete') > -1) {
        this.infiniteState.loaded()
        this.infiniteState.complete()
      }
    }
  },
  methods: {
    onInfinite($state) {
      this.infiniteState = $state
      this.$emit('getListApi')
    }
  }
}
</script>

<style lang="scss" scoped>
.api-no-data {
  font-size: 15px;
  line-height: 3;
  color: #6f6a76;
}

.record-item-container {
  padding: 0 16px;
  height: 100vh;
}

.record-item-container .record-item {
  padding-top: 180px;
  display: flex;
  flex-direction: column;
}

.record-item-container .record-item .svg-icon {
  margin: 0 auto;
  width: 200px;
  height: 130px;
}

.record-item-container .record-item span {
  color: #6f6a76;
  font-size: 15px;
  margin-top: 8px;
}
</style>
