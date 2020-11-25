import { action } from '@storybook/addon-actions'
import XYAxisTableComponent from './XYAxisTable'

export default {
    title: 'Table/Mobile XYAxis Table',
    component: XYAxisTableComponent,
    parameters: {
        controls: { expanded: true },
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'iphonex',
        }
    },
    argTypes: {
        hasTotal: {
            control: {
                type: 'boolean',
                default: false,
            }
        },
        hasFixed: {
            control: {
                type: 'boolean',
                default: false
            }
        },
    }
}

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

const actions = {
    onClick: action('Cell Clicked')
}

export const Default = (args = {}) => ({
    components: { XYAxisTableComponent },
    template: `
      <XYAxisTableComponent 
        v-bind="$props"
        @click="onClick"
      />
    `,
    props: Object.keys(args),
    methods: actions,
})
Default.args = {
    data: initData(),
    headers: initHeaders(),
    hasFixed: false,
    hasTotal: false
}

export const OperationScope = (args = {}) => ({
    components: { XYAxisTableComponent },
    template: `
      <XYAxisTableComponent 
        v-bind="$props"
        @click="onClick"
      >
        <template v-slot:operation="{ scope }">
          <p>❤️ {{scope.row.game}}</p>
          </template>
      </XYAxisTableComponent>
    `,
    props: Object.keys(args),
    methods: actions,
})
OperationScope.args = {
    data: initData(),
    headers: initHeaders([
        { key: 'operation', label: '客製化操作欄位', width: 200 },
    ]),
    hasFixed: false,
    hasTotal: false
}

export const InfinityLoading = (args = {}) => ({
    components: { XYAxisTableComponent },
    template: `
      <XYAxisTableComponent
        v-bind="$props"
        ref="table"
        :data="localData"
        @click="onClick"
        has-load
        @load="onLoad"
      />
    `,
    props: Object.keys(args),
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
                  action('Infinity Loading')(initData())
                  this.count += 1
                  this.$refs.table.setLoad(this.count >= 3)
              }, 1000)
        },
        ...actions
    },
})
InfinityLoading.args = {
    data: initData(),
    headers: initHeaders(),
    hasFixed: false,
    hasTotal: false,
}
