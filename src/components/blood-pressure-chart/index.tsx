import React from 'react';

import { BloodPressureRecordData, useBloodPressureCurve } from '../../hooks';
import { Chart } from './index.style';

export interface BloodPressureChart {
  data: BloodPressureRecordData;
}
export const BloodPressureChart: React.FC<BloodPressureChart> = ({ data }) => {
  const [ref, loading] = useBloodPressureCurve(data);
  return <Chart ref={ref} />;
};
