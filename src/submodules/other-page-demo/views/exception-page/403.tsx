import { FC } from 'react';
import { Result, Button } from 'antd';
const ExceptionPage_403: FC<{}> = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
export default ExceptionPage_403;
