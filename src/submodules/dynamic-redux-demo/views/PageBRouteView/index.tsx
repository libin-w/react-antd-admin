import { FC } from 'react';
import { PageContentWrapper, PageHeaderBlock, PageContentCard } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import BreadcrumbNav from '../../components/AutoBreadcrumbNav';
import actions from '../../store/actions';
const PageBRouteView: FC<{}> = () => {
  const dispatch = useDispatch();
  const messageCount = useSelector((state: any) => state.dynamicReduxDemo.messageCount);
  return (
    <>
      <PageHeaderBlock
        title="动态 Redux 测试页 B"
        breadcrumbRender={() => <BreadcrumbNav />}
      ></PageHeaderBlock>
      <PageContentWrapper>
        <PageContentCard allPadding style={{ minHeight: '360px' }}>
          <Space>
            当前messageCount值为: {messageCount}
            <Button
              type="primary"
              shape="circle"
              icon={<MinusOutlined />}
              onClick={() => {
                dispatch(actions.subtractMessageCount());
              }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => {
                dispatch(actions.increaseMessageCount());
              }}
            />
          </Space>
        </PageContentCard>
      </PageContentWrapper>
    </>
  );
};
export default PageBRouteView;
