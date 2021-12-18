import { useEcharts } from './useEcharts';

export type BloodPressureRecordData = [string, number, number][];

export const useBloodPressureCurve = (record: BloodPressureRecordData) => {
  return useEcharts({
    title: {
      text: '血压监测记录',
      subtext: '收缩压 90 ~ 139, 舒张压 60 ~ 89',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: record.map((item) => item[0]),
    },
    yAxis: {
      type: 'value',
      min: 60,
    },
    series: [
      {
        name: '收缩压',
        type: 'line',
        data: record.map((item) => item[1]),
        lineStyle: { color: 'rgb(255,165,0)' },
        itemStyle: { color: 'rgb(255,165,0)' },
        markPoint: {
          data: [
            {
              type: 'max',
              name: 'Max',
              itemStyle: { color: 'rgba(255,165,0,0.75)' },
            },
            {
              type: 'min',
              name: 'Min',
              itemStyle: { color: 'rgba(255,165,0,0.75)' },
            },
          ],
        },
        markArea: {
          data: [
            [
              {
                name: '收缩压正常范围',
                yAxis: 89,
                itemStyle: { color: 'rgba(255,165,0,0.1)' },
                label: { position: 'inside' },
              },
              {
                yAxis: 139,
              },
            ],
            [
              {
                name: '舒张压正常范围',
                itemStyle: { color: 'rgba(84,112,198,0.1)' },
                yAxis: 59,
                label: { position: 'inside' },
              },
              {
                yAxis: 89,
              },
            ],
          ],
        },
        markLine: {
          data: [
            {
              type: 'average',
              lineStyle: {
                color: 'rgb(255,165,0)',
                type: 'line',
              },
            },
            {
              yAxis: 139,
              lineStyle: {
                color: 'red',
              },
            },
            {
              yAxis: 114,
              lineStyle: {
                color: 'rgba(0,128,0,0.3)',
              },
            },
          ],
        },
      },
      {
        name: '舒张压',
        type: 'line',
        lineStyle: { color: 'rgb(84,112,198)' },
        itemStyle: { color: 'rgb(84,112,198)' },
        data: record.map((item) => item[2]),
        markPoint: {
          data: [
            {
              type: 'max',
              name: 'Max',
              itemStyle: { color: 'rgba(84,112,198,0.75)' },
            },
            {
              type: 'min',
              name: 'Min',
              itemStyle: { color: 'rgba(84,112,198,0.75)' },
            },
          ],
        },
        markLine: {
          data: [
            {
              type: 'average',
              lineStyle: {
                color: 'rgb(84,112,198)',
                type: 'line',
              },
            },
            {
              yAxis: 89,
              lineStyle: {
                color: 'red',
              },
            },
            {
              yAxis: 74,
              lineStyle: {
                color: 'rgba(0,128,0,0.3)',
              },
            },
          ],
        },
      },
    ],
  });
};
