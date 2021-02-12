/*
 * @Author: WangLibin
 * @Date: 2021-02-07 09:50:41
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-02-07 16:39:50
 * @Description: PageHeaderContent
 */
import { FC } from 'react';
import { PageHeader, Avatar, Statistic, Tag, Divider } from 'antd';
import styles from './style.module.scss';
import defaultAvatarImg from '@/assets/images/default-avatar-img.png';
const { REACT_APP_RUNTIME_ENV = 'production' } = process.env;
console.log(REACT_APP_RUNTIME_ENV);
const PageHeaderContent: FC<{}> = () => {
  return (
    <PageHeader
      ghost={false}
      title="React Antd Admin"
      tags={
        REACT_APP_RUNTIME_ENV !== 'production' ? (
          <Tag color="#f50">当前环境: {REACT_APP_RUNTIME_ENV}</Tag>
        ) : undefined
      }
      className={styles.page_header_content}
    >
      <div className={styles.page_header_content_details}>
        <div className={styles.left}>
          <Avatar size={72} src={defaultAvatarImg} />
          <div className={styles.user_info}>
            <div className={styles.title}>早安，Serati Ma，祝你开心每一天！</div>
            <div>职位名称 | 某某平台部－某某技术部－FED</div>
          </div>
        </div>
        <ul className={styles.right}>
          <li>
            <Statistic title="待办事项" value={1234} />
          </li>
          <Divider type="vertical" />
          <li>
            <Statistic title="哈哈哈" value={112893} />
          </li>

          <Divider type="vertical" />

          <li>
            <Statistic title="啦啦啦啦" value={7793} />
          </li>
        </ul>
      </div>
    </PageHeader>
  );
};
export default PageHeaderContent;
