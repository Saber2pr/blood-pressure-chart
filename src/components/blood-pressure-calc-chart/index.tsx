import React from 'react';

import { BloodPressureRecordData, useBloodPressureCalcCurve } from '../../hooks';
import { Chart } from '../blood-pressure-chart/index.style';

export interface BloodPressureCalcChart {
  data: BloodPressureRecordData;
}
export const BloodPressureCalcChart: React.FC<BloodPressureCalcChart> = ({ data }) => {
  const [ref, loading] = useBloodPressureCalcCurve(data);
  return <Chart ref={ref} />;
};
