import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/charts';
const TinyAreaChart: React.FC = () => {
  var data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192
  ];
  var config = {
    data: data,
    smooth: true,
    areaStyle: { fill: '#d6e3fd' }
  };
  return <TinyArea {...config} />;
};
export default TinyAreaChart;
