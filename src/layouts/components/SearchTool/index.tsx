import { FC, useState, useRef } from 'react';
import { AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useClickAway } from 'ahooks';
import classNames from 'classnames';
import styles from './styles.module.scss';
const mockVal = (str: string, repeat: number = 1) => {
  return {
    value: str.repeat(repeat)
  };
};

const SearchTool: FC<{
  placeholder?: string;
}> = ({ placeholder }) => {
  const [showIpt, setShowIpt] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const iptRef = useRef<any>(null);
  useClickAway(() => {
    setShowIpt(false);
    setInputValue('');
  }, ref);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setInputValue(data);
  };
  return (
    <div
      ref={ref}
      className={['antd-admin-header-right-action-item', styles.site_search_wrapper].join(' ')}
      onClick={() => {
        setShowIpt(true);
        iptRef.current.focus();
      }}
    >
      <SearchOutlined className={styles.search_icon} />
      <div
        className={classNames(styles.site_search_ipt_wrapper, {
          [styles.is_show]: showIpt
        })}
      >
        <AutoComplete
          ref={iptRef}
          value={inputValue}
          className={styles.site_search_ipt}
          options={options}
          onSelect={onSelect}
          onChange={onChange}
          onSearch={onSearch}
          getPopupContainer={() => ref.current || document.body}
          placeholder={placeholder || '输入关键字搜索'}
          bordered={false}
          size="small"
        />
      </div>
    </div>
  );
};

export default SearchTool;
