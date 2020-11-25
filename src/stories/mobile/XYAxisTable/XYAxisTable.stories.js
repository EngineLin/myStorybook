import {storiesOf} from '@storybook/vue'
import {withKnobs} from '@storybook/addon-knobs';
import {withActions, action} from '@storybook/addon-actions'

import XYAxisTable from './index'

const initData = () => [
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
    {game: '真人直播', betCount: 10, betTotal: 30, effectiveBetTotal: 20, winTotal: -10},
]

const initHeaders = (overloads = []) => [
    { key: 'game', label: '游戏名称' },
    { key: 'betCount', label: '投注人数', sort: true, type: 'float', style: { color: '#32c5ff' }},
    { key: 'betTotal', label: '投注额', sort: true, type: 'float' },
    { key: 'effectiveBetTotal', label: '总有效投注数', sort: true, type: 'float' },
    { key: 'winTotal', label: '总输赢', sort: true, type: 'float' },
    ...overloads
]

storiesOf('Mobile/XYAxisTable', module)
  .addDecorator(withKnobs)

  .add('has-total(X) has-fixed(X)', () => ({
      components: {
          XYAxisTable
      },
      props: {
        data: {
            default: initData(),
        },
        headers: {
          default: initHeaders()
        }
      },
      template: `
      <div>
        <XYAxisTable
          :data="data"
          :headers="headers"
        />
      </div>
    `,
  }))
  .add('has-total(O) has-fixed(X)', () => ({
      components: {
          XYAxisTable
      },
      props: {
          data: {
              default: initData(),
          },
          headers: {
              default: initHeaders()
          }
      },
      template: `
        <div>
          <XYAxisTable
              has-total
              :data="data"
              :headers="headers"
          />
        </div>
      `,
  }))
  .add('has-total(X) has-fixed(O)', () => ({
      components: {
          XYAxisTable
      },
      props: {
          data: {
              default: initData(),
          },
          headers: {
              default: initHeaders()
          }
      },
      template: `
        <div>
          <XYAxisTable
              has-fixed
              :data="data"
              :headers="headers"
          />
        </div>
      `,
  }))
  .add('has-total(O) has-fixed(O)', () => ({
      components: {
          XYAxisTable
      },
      props: {
          data: {
              default: initData(),
          },
          headers: {
              default: initHeaders()
          }
      },
      template: `
        <div>
          <XYAxisTable
              has-total
              has-fixed
              :data="data"
              :headers="headers"
          />
        </div>
      `,
  }))
  .add('has infinity loading', () => ({
      components: {
          XYAxisTable
      },
      props: {
          data: {
              default: initData(),
          },
          headers: {
              default: initHeaders()
          },
      },
      data() {
          return {
              localData: initData(),
              count: 0
          }
      },
      methods: {
          onLoad() {
              setTimeout(() => {
                  this.localData = [...this.localData, ...initData()]
                  this.count += 1
                  this.$refs.table.setLoad(this.count >= 3)
              }, 1000)
          }
      },
      template: `
        <div>
          <XYAxisTable
              ref="table"
              has-total
              has-fixed
              has-load
              :data="localData"
              :headers="headers"
              @load="onLoad"
          />
        </div>
      `,
  }))

  .add('Cell\'s click event', () => ({
      components: {
          XYAxisTable
      },
      props: {
          data: {
              default: initData(),
          },
          headers: {
              default: initHeaders()
          },
      },
      methods: {
          onClick(data) {
              action('onCellClick')
              console.log('data', data)
          }
      },
      template: `
        <div>
          <XYAxisTable
              has-total
              has-fixed
              :data="data"
              :headers="headers"
              @click="onClick"
          />
        </div>
      `,
  }))
  .add('Operation scope', () => ({
      components: {
          XYAxisTable
      },
      props: {
          data: {
              default: initData(),
          },
          headers: {
              default: initHeaders([
                  { key: 'operation', label: '客製化操作欄位', width: 200 },
              ])
          },
      },
      template: `
        <div>
          <XYAxisTable
              has-total
              has-fixed
              :data="data"
              :headers="headers"
          >
            <template v-slot:operation="{ scope }">
              <p>❤️ {{scope.row.game}}</p>
            </template>
          </XYAxisTable>
        </div>
      `,
  }))
