import { BloodPressureRecordData } from './useBloodPressureCurve';
import { useEcharts } from './useEcharts';

export const useBloodPressureCalcCurve = (record: BloodPressureRecordData) => {
  const color = [128, 0, 128];
  return useEcharts({
    title: {
      text: '血压差值图',
      subtext: '正常差值 20 ~ 60',
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
      min: 20,
    },
    series: [
      {
        name: '血压差',
        type: 'line',
        data: record.map((item) => item[1] - item[2]),
        lineStyle: { color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` },
        itemStyle: { color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` },
        markPoint: {
          data: [
            {
              type: 'max',
              name: 'Max',
              itemStyle: {
                color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.75)`,
              },
            },
            {
              type: 'min',
              name: 'Min',
              itemStyle: {
                color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.75)`,
              },
            },
          ],
        },
        markArea: {
          data: [
            [
              {
                name: '正常范围',
                yAxis: 20,
                itemStyle: {
                  color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.1)`,
                },
                label: { position: 'inside' },
              },
              {
                yAxis: 60,
              },
            ],
          ],
        },
        markLine: {
          data: [
            {
              type: 'average',
              lineStyle: {
                color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`,
                type: 'line',
              },
            },
            {
              yAxis: 60,
              lineStyle: {
                color: 'red',
              },
            },
            {
              yAxis: 40,
              lineStyle: {
                color: 'rgba(0,128,0,0.3)',
              },
            },
            {
              yAxis: 20,
              lineStyle: {
                color: 'red',
              },
            },
          ],
        },
      },
    ],
  });
};
