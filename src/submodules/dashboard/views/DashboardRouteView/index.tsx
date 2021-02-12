/*
 * @Author: WangLibin
 * @Date: 2021-01-29 10:24:35
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-29 10:25:14
 * @Description: DashboardRouteView
 */
import React from 'react';
import { Row, Col, Card, Radio, DatePicker, Space, Progress } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import ResizeObserver from 'rc-resize-observer';
import PageHeaderContent from './PageHeaderContent';
import StatisticCard from './StatisticCard';
import BarCharts from './charts-demo/BarCharts';
import ColumnChart from './charts-demo/ColumnChart';
import LineChart from './charts-demo/LineChart';
import PieChart from './charts-demo/PieChart';
import RoseChart from './charts-demo/RoseChart';
import LiquidChart from './charts-demo/LiquidChart';
import TinyAreaChart from './charts-demo/TinyAreaChart';
import TinyColumnChart from './charts-demo/TinyColumnChart';
import styles from './style.module.scss';
const contentListNoTitle = {
  '1': <ColumnChart />,
  '2': <LineChart />
};
class DashboardRouteView extends React.Component {
  state = {
    activeTabKey: '1'
  };
  render() {
    return (
      <>
        <PageHeaderContent />
        <div className={styles.card_content_wrapper}>
          <Row gutter={[16, 16]}>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card bordered={false} bodyStyle={{ padding: '12px 24px' }}>
                <StatisticCard desc="哈哈哈哈" footer="日销售额 ￥12,423">
                  <div style={{ height: '48px', display: 'flex', alignItems: 'flex-end' }}>
                    <div className="margin-r-20">
                      <span className="margin-r-8">周同比 12%</span>
                      <CaretUpOutlined style={{ color: '#f5222d' }} />
                    </div>
                    <div>
                      <span className="margin-r-8">日同比 11%</span>
                      <CaretDownOutlined style={{ color: '#52c41a' }} />
                    </div>
                  </div>
                </StatisticCard>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card bordered={false} bodyStyle={{ padding: '12px 24px' }}>
                <StatisticCard footer="日访问量1,234">
                  <div style={{ height: '48px' }}>
                    <TinyAreaChart />
                  </div>
                </StatisticCard>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card bordered={false} bodyStyle={{ padding: '12px 24px' }}>
                <StatisticCard desc="说明文字说明文字说明文字说明文字" footer="日销售额 ￥12,423">
                  <div style={{ height: '48px' }}>
                    <TinyColumnChart />
                  </div>
                </StatisticCard>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Card bordered={false} bodyStyle={{ padding: '12px 24px' }}>
                <StatisticCard footer="日销售额 ￥12,423">
                  <div style={{ height: '48px', display: 'flex', alignItems: 'flex-end' }}>
                    <Progress
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068'
                      }}
                      showInfo={false}
                      percent={76}
                    />
                  </div>
                </StatisticCard>
              </Card>
            </Col>
            <Col span={24}>
              <Card
                style={{ width: '100%' }}
                tabList={[
                  {
                    key: '1',
                    tab: '销售额'
                  },
                  {
                    key: '2',
                    tab: '访问量'
                  }
                ]}
                activeTabKey={this.state.activeTabKey}
                tabBarExtraContent={
                  <Space size={12}>
                    <Radio.Group defaultValue="a" size="small">
                      <Radio.Button value="a">今日</Radio.Button>
                      <Radio.Button value="b">本周</Radio.Button>
                      <Radio.Button value="c">本月</Radio.Button>
                      <Radio.Button value="d">全年</Radio.Button>
                    </Radio.Group>
                    <DatePicker.RangePicker size="small" />
                  </Space>
                }
                onTabChange={(key) => {
                  this.setState({
                    activeTabKey: key
                  });
                }}
              >
                {contentListNoTitle[this.state.activeTabKey]}
              </Card>
            </Col>
            <Col span={24}>
              <Card title="基础条形图 - 转化率" bordered={false}>
                <BarCharts />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Card title="饼图" bordered={false}>
                <PieChart />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Card title="玫瑰图" bordered={false}>
                <RoseChart />
              </Card>
            </Col>

            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card title="水波图" bordered={false}>
                <LiquidChart />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Card title="水波图" bordered={false}>
                <LiquidChart />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <ResizeObserver
                onResize={(e) => {
                  console.log(e);
                }}
              >
                <Card title="水波图" bordered={false}>
                  <LiquidChart />
                </Card>
              </ResizeObserver>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default DashboardRouteView;
