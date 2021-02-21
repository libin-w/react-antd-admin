import { FC } from 'react';
import { PageHeader, Avatar, Statistic, Tag, Divider } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import { RootStateInterface } from '@/store';
import { UserInfoStateInterface } from '@/store/modules/user-info/reducer';
import styles from './style.module.scss';
import defaultAvatarImg from '@/assets/images/default-avatar-img.png';
const { REACT_APP_RUNTIME_ENV = 'production' } = process.env;
const PageHeaderContent: FC<{}> = () => {
  const userInfo = useSelector<RootStateInterface, UserInfoStateInterface>(
    (state) => state.userInfo,
    shallowEqual
  );
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
          <Avatar size={72} src={userInfo.avatar || defaultAvatarImg} />
          <div className={styles.user_info}>
            <div className={styles.title}>hello，{userInfo.realName}，祝你开心每一天。。。</div>
            <div>
              {userInfo.roleList.map((roleName) => (
                <span key={roleName.id} className={styles.role_name_item}>
                  {roleName.name}
                </span>
              ))}
              <Divider
                type="vertical"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.35)'
                }}
              />
              某某平台部－某某技术部－FED
            </div>
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
