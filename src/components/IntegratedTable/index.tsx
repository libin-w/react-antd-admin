import React, { ReactNode } from 'react';
import {
  Checkbox,
  Dropdown,
  Empty,
  Menu,
  Popover,
  Space,
  Spin,
  Tooltip,
  Table,
  TableProps
} from 'antd';
import { ColumnHeightOutlined, SettingOutlined, ReloadOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { TablePaginationConfig, ColumnType } from 'antd/lib/table/interface';
import classNames from 'classnames';
import style from './style.module.scss';
type showIconBtnsNameType = 'size' | 'columns';
interface PropsTypes extends TableProps<any> {
  noPadding?: boolean;
  columns: ColumnType<any>[];
  tableTitle?: string | React.ReactNode;
  paginationConfig?: TablePaginationConfig | false;
  handleBtn?: ReactNode;
  customStyle?: React.CSSProperties;
  loading?: boolean;
  showIconBtns?: showIconBtnsNameType[];
  defaultSize?: SizeType;
  onRefresh?: () => void;
}
interface StateTypes {
  tableSize: SizeType;
  showColumns: any[];
  allColumnsKeys: Array<{ label: React.ReactNode; value: string }>;
  columnsIndeterminate: boolean;
  columnsCheckAll: boolean;
  checkedColumnsKeys: Array<string>;
}

const defaultPaginationConfig = {
  showSizeChanger: false,
  showQuickJumper: true,
  pageSizeOptions: ['10', '20', '30', '40'],
  showTotal: (total) => `共 ${total} 条`,
  total: 0,
  pageSize: 10
};
const getTableSize = (): SizeType => {
  const clientHeight = document.body.clientHeight;
  if (clientHeight < 720) {
    return 'small';
  } else if (clientHeight > 900) {
    return 'large';
  } else {
    return 'middle';
  }
};
class IntegratedTable extends React.Component<PropsTypes, StateTypes> {
  private readonly toolsListRef = React.createRef<HTMLDivElement>();
  constructor(props: PropsTypes) {
    super(props);
    const allColumnsKeys: Array<{ label: React.ReactNode; value: string }> = [];
    const checkedColumnsKeys: Array<string> = [];
    props.columns.forEach((col) => {
      const value = col.key || col.dataIndex ? String(col.dataIndex) : '';
      if (value) {
        allColumnsKeys.push({
          label: col.title,
          value: value
        });
        checkedColumnsKeys.push(value);
      }
    });
    this.state = {
      tableSize: props.defaultSize || getTableSize(),
      showColumns: this.computeShowColumns(checkedColumnsKeys),
      allColumnsKeys: allColumnsKeys,
      columnsIndeterminate: false,
      columnsCheckAll: true,
      checkedColumnsKeys: checkedColumnsKeys
    };
  }
  computeShowColumns = (showKeys: string[]): any[] => {
    return this.props.columns.filter((item) =>
      showKeys.includes(item.key || item.dataIndex ? String(item.dataIndex) : '')
    );
  };
  sizeMenuOnClick = ({ key }) => {
    if (key !== this.state.tableSize) {
      this.setState({
        tableSize: key
      });
    }
  };
  onCheckAllColumnsChange = (e) => {
    const checkedColumnsKeys = e.target.checked
      ? this.state.allColumnsKeys.map((item) => item.value)
      : [];
    this.setState({
      checkedColumnsKeys: checkedColumnsKeys,
      columnsIndeterminate: false,
      columnsCheckAll: e.target.checked,
      showColumns: this.computeShowColumns(checkedColumnsKeys)
    });
  };
  onCheckColumnsChange = (checkedList) => {
    this.setState({
      checkedColumnsKeys: checkedList,
      columnsIndeterminate:
        !!checkedList.length && checkedList.length < this.state.allColumnsKeys.length,
      columnsCheckAll: checkedList.length === this.state.allColumnsKeys.length,
      showColumns: this.computeShowColumns(checkedList)
    });
  };
  componentDidMount() {}
  render() {
    const {
      noPadding,
      paginationConfig,
      handleBtn,
      customStyle,
      scroll,
      loading,
      className,
      onRefresh
    } = this.props;
    const {
      tableSize,
      showColumns,
      allColumnsKeys,
      columnsIndeterminate,
      columnsCheckAll,
      checkedColumnsKeys
    } = this.state;
    const showIconBtns = this.props.showIconBtns || ['size', 'columns'];
    const noColumnsProps =
      checkedColumnsKeys.length > 0
        ? {}
        : {
            dataSource: [],
            locale: {
              emptyText: (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="请选择需要展示的列" />
              )
            }
          };
    return (
      <div
        className={classNames(style.list_page_table_wrapper, className, {
          'no-padding': noPadding === true
        })}
        style={customStyle}
      >
        <header className={style.table_tools_wrapper}>
          <span className={style.table_title}>{this.props.tableTitle}</span>
          <div className={style.tools_list} ref={this.toolsListRef}>
            {handleBtn}
            <Space size={10}>
              <span></span>
              {typeof onRefresh === 'function' && (
                <Tooltip title="刷新">
                  <span className={style.table_tools_icon} onClick={onRefresh}>
                    <ReloadOutlined />
                  </span>
                </Tooltip>
              )}
              {showIconBtns.includes('size') && (
                <Dropdown
                  overlay={
                    <Menu selectedKeys={[tableSize as string]} onClick={this.sizeMenuOnClick}>
                      <Menu.Item key="large">默认</Menu.Item>
                      <Menu.Item key="middle">中等</Menu.Item>
                      <Menu.Item key="small">紧凑</Menu.Item>
                    </Menu>
                  }
                  overlayClassName={style.dropdown_menu_wrapper}
                  placement="bottomCenter"
                  trigger={['click']}
                >
                  <Tooltip title="表格尺寸">
                    <span className={style.table_tools_icon}>
                      <ColumnHeightOutlined />
                    </span>
                  </Tooltip>
                </Dropdown>
              )}
              {showIconBtns.includes('columns') && (
                <Popover
                  title={
                    <Checkbox
                      indeterminate={columnsIndeterminate}
                      onChange={this.onCheckAllColumnsChange}
                      checked={columnsCheckAll}
                    >
                      全部展示
                    </Checkbox>
                  }
                  content={
                    <Checkbox.Group
                      className={style.columns_checkbox_group}
                      options={allColumnsKeys}
                      value={checkedColumnsKeys}
                      onChange={this.onCheckColumnsChange}
                    />
                  }
                  autoAdjustOverflow={false}
                  arrowPointAtCenter={true}
                  placement="bottomRight"
                  trigger="click"
                >
                  <Tooltip title="列设置">
                    <span className={style.table_tools_icon}>
                      <SettingOutlined />
                    </span>
                  </Tooltip>
                </Popover>
              )}
            </Space>
          </div>
        </header>
        <Table
          {...this.props}
          className={style.list_page_table}
          columns={showColumns}
          size={tableSize}
          scroll={
            scroll || {
              x: '100%'
            }
          }
          pagination={
            paginationConfig === false
              ? false
              : Object.assign(defaultPaginationConfig, paginationConfig || {})
          }
          loading={false}
          {...noColumnsProps}
        />
        {loading ? (
          <div className={style.loading_wrapper}>
            <Spin />
          </div>
        ) : null}
      </div>
    );
  }
}
export default IntegratedTable;
