import { FC } from 'react';
import { Result, Button } from 'antd';
const ExceptionPage_500: FC<{}> = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
export default ExceptionPage_500;
