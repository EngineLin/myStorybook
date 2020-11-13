<template>
  <div
    class="custom-table"
  >
    <div
      class="table-wrapper"
      @scroll="onWrapperScroll"
    >
      <!--Loading 畫面-->
      <div
        v-if="isLoading"
        class="table-loading"
      >
        <p>Loading...</p>
      </div>

      <!--無資料畫面-->
      <div
        v-else-if="!formatData.length"
        class="table-empty"
      >
        <h2>暂无数据</h2>
      </div>

      <!--Table 畫面-->
      <InfiniteLoadingWrapper
        v-else
        class="infinite-wrapper"
        :infinite-id="infiniteId"
        :infinite-state-type="infiniteStateType"
        @getListApi="onInfinite"
      >
        <div
          class="table-container"
        >
          <div
            v-if="hasFixed"
            class="left-wrapper"
            :class="{'border-right': isFixed}"
          >
            <!--Left Top-->
            <div
              class="table-item title-bg"
              :style="{ width: widths[0] + 'px' }"
              @click.stop="onTitleClick(headers[0])"
            >
              <p class="title">
                {{ headers[0].label }}
              </p>
              <svg-icon
                v-if="headers[0].sort"
                class="icon-switch"
                icon-class="switch"
              />
            </div>

            <!--Total-->
            <div
              v-if="hasTotal"
              class="table-item"
              :style="{ width: widths[0] + 'px' }"
            >
              <p class="label">
                汇总
              </p>
            </div>

            <!--Left Bottom-->
            <div
              v-for="(item, index) in formatData"
              :key="index"
              class="left-item table-item"
              :style="{ width: widths[0] + 'px' }"
              @click.stop="onClick({row: item, key: headers[0].key})"
            >
              <p
                class="label"
                :style="headers[0].style || '' "
              >
                {{ item[headers[0].key] }}
              </p>
            </div>
          </div>

          <div
            ref="rightWrapper"
            class="right-wrapper"
            @scroll="onRightWrapperScroll"
          >
            <!--Right Top-->
            <div>
              <div class="right-top">
                <template v-for="(header, index) in headers">
                  <div
                    v-if="!hasFixed || index !== 0"
                    :key="header.key"
                    class="table-item title-bg"
                    :style="{width: widths[index] + 'px'}"
                    @click.stop="onTitleClick(header)"
                  >
                    <p class="title">
                      {{ header.label }}
                    </p>
                    <svg-icon
                      v-if="header.sort"
                      class="icon-switch"
                      icon-class="switch"
                    />
                  </div>
                </template>
              </div>

              <!--Total-->
              <div
                v-if="hasTotal"
                class="right-top"
              >
                <template v-for="(header, index) in headers">
                  <div
                    v-if="!hasFixed || index !== 0"
                    :key="header.key"
                    class="table-item"
                    :style="{width: widths[index] + 'px'}"
                  >
                    <p
                      v-if="!hasFixed && index === 0"
                      class="label"
                    >
                      汇总
                    </p>
                    <p
                      v-if="index !== 0"
                      class="label"
                    >
                      {{ getTotal(header) }}
                    </p>
                  </div>
                </template>
              </div>
            </div>

            <!--Right Bottom-->
            <div
              v-for="(item, index) in formatData"
              :key="index"
              class="right-item"
            >
              <div
                v-for="(header, _index) in headers"
                :key="header.key"
              >
                <div
                  v-if="header.key === 'operation'"
                  class="table-item"
                  :style="{width: widths[_index] + 'px'}"
                >
                  <slot
                    name="operation"
                    :scope="{row: item, key: header.key}"
                  />
                </div>

                <div
                  v-else-if="header.key === 'registerDomain'"
                  class="table-item"
                  :style="{width: widths[_index] + 'px'}"
                >
                  <slot
                    name="registerDomain"
                    :scope="{row: item, key: header.key}"
                  />
                </div>

                <div
                  v-else-if="!hasFixed ||_index !== 0"
                  class="table-item"
                  :style="{width: widths[_index] + 'px'}"
                  @click.stop="onClick({row: item, key: header.key})"
                >
                  <p
                    class="label"
                    :class="header.currency ? getCurrencyClass(item[header.key]) : ''"
                    :style="{...header.style}"
                  >
                    {{ item[header.key] }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--Left Top Box-->
          <div
            v-if="hasFixed"
            ref="leftTop"
            class="fixed-left-top"
            :class="{'border-right': isFixed}"
          >
            <div
              class="table-item title-bg"
              :style="{width: widths[0] + 'px'}"
              @click.stop="onTitleClick(headers[0])"
            >
              <p class="title">
                {{ headers[0].label }}
              </p>
              <svg-icon
                v-if="headers[0].sort"
                class="icon-switch"
                icon-class="switch"
              />
            </div>

            <!--Total-->
            <div
              v-if="hasTotal"
              class="table-item"
              :style="{background: 'white', width: widths[0] + 'px'}"
            >
              <p class="label">
                汇总
              </p>
            </div>
          </div>

          <!--Right Top Box-->
          <div
            ref="rightTop"
            class="fixed-right-top-container"
          >
            <div
              class="fixed-right-top"
              :class="{'border-left': isFixed}"
            >
              <div
                v-for="(header, index) in headers"
                :key="header.key"
                class="table-item"
                :style="{width: widths[index] + 'px'}"
                @click.stop="onTitleClick(header)"
              >
                <p class="title title-bg">
                  {{ header.label }}
                </p>
                <svg-icon
                  v-if="header.sort"
                  class="icon-switch"
                  icon-class="switch"
                />
              </div>
            </div>

            <!--Total-->
            <div
              v-if="hasTotal"
              class="fixed-right-top"
              :class="{'border-left': isFixed}"
              :style="{background: 'white'}"
            >
              <div
                v-for="(header, index) in headers"
                :key="header.key"
                class="table-item"
                :style="{width: widths[index] + 'px'}"
              >
                <p
                  v-if="index ===0"
                  class="label"
                >
                  汇总
                </p>
                <p
                  v-else
                  class="label"
                >
                  {{ getTotal(header) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </InfiniteLoadingWrapper>
    </div>
  </div>
</template>

<script>
import InfiniteLoadingWrapper from './InfiniteLoadingWrapper'

export default {
  name: 'XYAxisTable',
  components: {
    InfiniteLoadingWrapper
  },
  props: {
    // { label: '', key: '', sort: false, type: 'float', style: {}, width: 100 }
    headers: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasFixed: {
      type: Boolean,
      default: false
    },
    hasTotal: {
      type: Boolean,
      default: false
    },
    hasLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      positionTop: 0,
      isStick: false,
      isFixed: false,
      sort: {
        key: null,
        y: 1
      },
      infiniteId: +new Date(),
      infiniteStateType: '',
    }
  },
  computed: {
    formatData() {
      // 利用 data.sort 當作基準在內部對資料進行排序
      const copy = JSON.parse(JSON.stringify(this.data))
      const _copy = copy.map(it => {
        const headerKeys = Object.keys(it)
        headerKeys.forEach(key => {
          if (typeof it[key] === 'number') {
            it[key] = parseFloat(it[key]).toFixed(2)
          }
        })
        return it
      })
      if (!this.sort.key) return _copy
      return _copy.sort((a, b) => {
        return (b[this.sort.key] - a[this.sort.key]) * this.sort.y
      })
    },
    // 用來計算 Column 的寬度
    widths() {
      const MARGIN = 30
      const FONT_SIZE = 14
      return this.headers.map(header => {
        if (header.width) {
          return header.width
        } else {
          const count = header.label.length
          return (count * FONT_SIZE) + (MARGIN * 2)
        }
      })
    }
  },
  watch: {
    isStick: {
      handler(value) {
        const right = this.$refs.rightTop
        if (value) {
          right.style.display = 'block'
          right.style.top = this.positionTop + 'px'
          right.style.left = `calc(-${Math.floor(this.$refs.rightWrapper.scrollLeft)}px)`
        } else {
          right.style.display = 'none'
        }

        if (this.hasFixed) {
          const left = this.$refs.leftTop
          if (value) {
            left.style.display = 'flex'
            left.style.top = this.positionTop + 'px'
          } else {
            left.style.display = 'none'
          }
        }
      }
    }
  },
  methods: {
    onClick(data) {
      this.$emit('click', data)
    },
    onTitleClick(header) {
      if (!header.sort) return
      if (this.sort.key === header.key) {
        this.sort.y = this.sort.y * -1
      } else {
        this.sort.key = header.key
        this.sort.y = 1
      }
    },
    onWrapperScroll(e) {
      this.isStick = e.target.scrollTop > 0
    },
    onRightWrapperScroll(e) {
      // 讓右下方 main table 與上方的 header 在 x-axis 可以同步滑動，看起來就像同一個 table
      this.isFixed = e.target.scrollLeft > 0
      if (this.isStick) {
        this.$refs.rightTop.style.left = `calc(-${Math.floor(e.target.scrollLeft)}px)`
      }
    },
    onInfinite() {
      console.log('load')
      if (!this.hasLoad) {
        this.infiniteStateType = 'complete' + new Date()
        return
      }
      this.$emit('load', true)
    },
    setLoad(value) {
      if (value) {
        this.infiniteStateType = 'complete' + new Date()
      } else {
        this.infiniteStateType = 'loaded' + new Date()
      }
    },
    getTotal(header) {
      if (!header.type) return ''
      if (this.formatData.length === 0) return ''
      const parseAdapter = {
        'int': {
          fn: parseInt,
          fixed: 0
        },
        'float': {
          fn: parseFloat,
          fixed: 2
        },
        default: {
          fn: parseFloat,
          fixed: 2
        }
      }
      const parse = parseAdapter[header.type] || parseAdapter.default
      const value = this.formatData
        .map(it => parse.fn(it[header.key]))
        .reduce((prev, curr) => prev + curr, 0)
        .toFixed(parse.fixed)

      return value === 'NaN' ? '' : value
    },
    getCurrencyClass(value) {
      if (value === 0) return ''
      return value > 0 ? 'win' : 'lose'
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-table {
  position: relative;
  height: 100vh;
  border-bottom: 1px solid #e7e8eb;
}

.table-wrapper {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.table-loading {
  padding-top: 100px;
}

.table-loading p {
  margin: 0;
  font-size: 14px;
}

.table-empty {
  padding-top: 100px;
}

.table-empty img {
  width: 150px;
  height: 100px;
}

.table-empty h2 {
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.25px;
}

.table-container {
  display: flex;
  background: #fff;
}

.table-container .right-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
}

.table-container .right-top {
  display: flex;
  display: -webkit-box;
  width: 100%;
}

.table-container .right-item {
  height: 40px;
  display: flex;
  align-items: center;
}

.table-container .fixed-left-top {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  background: #e9e9e9;
}

.table-container .fixed-right-top-container {
  display: none;
  position: absolute;
  z-index: 1;
  background: #e9e9e9;
}

.table-container .fixed-right-top {
  display: flex;
}

.table-container .table-item {
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e7e8eb;
}

.table-container .label {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: #000;
  white-space: nowrap;
}

.table-container .title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: #000;
  white-space: nowrap;
}

.table-container .title-bg {
  background: #e9e9e9;
}

.table-container .border-right {
  border-right: 1px solid #ccc;
}

.table-container .border-left {
  /*border left 為了讓第一行的寬度對齊主體的寬度*/
  border-left: 1px solid #e9e9e9;
}

.table-container .icon-switch {
  font-size: 12px;
  margin-left: 2.5px;
}

.table-container .win {
  color: #51b485 !important;
}

.table-container .lose {
  color: #f16b6b !important;
}
</style>
