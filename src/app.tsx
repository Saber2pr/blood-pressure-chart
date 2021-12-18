import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './app.style';
import { BloodPressureChart } from './components';
import { BloodPressureRecordData } from './hooks';

declare const BLOOD_RECORD: BloodPressureRecordData;

export const App = () => {
  return (
    <Container>
      <BloodPressureChart data={BLOOD_RECORD} />
      <a
        target="_blank"
        href="https://github.com/Saber2pr/blood-pressure-chart/edit/master/BLOOD_RECORD.csv"
      >
        提交数据
      </a>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
