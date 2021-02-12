import React, { useState, useEffect } from 'react';
import { TinyColumn } from '@ant-design/charts';
const TinyColumnChart: React.FC = () => {
  var data = [274, 337, 81, 497, 666, 219, 269];
  var config = {
    data: data,
    tooltip: {
      customContent: function customContent(x, data) {
        var _data$, _data$$data;
        return 'NO.'
          .concat(x, ': ')
          .concat(
            (_data$ = data[0]) === null || _data$ === void 0
              ? void 0
              : (_data$$data = _data$.data) === null || _data$$data === void 0
              ? void 0
              : _data$$data.y.toFixed(2)
          );
      }
    }
  };
  return <TinyColumn {...config} />;
};
export default TinyColumnChart;
