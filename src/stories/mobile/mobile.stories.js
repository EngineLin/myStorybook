import {storiesOf} from '@storybook/vue'

import XYAxisTable from './XYAxisTable'

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

const initHeaders = () => [
    { key: 'game', label: '游戏名称' },
    { key: 'betCount', label: '投注人数', sort: true, type: 'float', style: { color: '#32c5ff' }},
    { key: 'betTotal', label: '投注额', sort: true, type: 'float' },
    { key: 'effectiveBetTotal', label: '总有效投注数', sort: true, type: 'float' },
    { key: 'winTotal', label: '总输赢', sort: true, type: 'float' }
]

storiesOf('Mobile', module)
  .add('XYAxisTable', () => ({
    components: {
      XYAxisTable
    },
    props: {
      data: {
        default: initData()
      },
      headers: {
        default: initHeaders(),
      },
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
