/*
 * @Author: WangLibin
 * @Date: 2021-01-14 14:14:04
 * @LastEditors: WangLibin
 * @LastEditTime: 2021-01-27 10:28:52
 * @Description:
 */
import logoImg from './images/logo.svg';
import styles from './styles.module.scss';
import { getBaseName } from '@/utils/index';
const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <a href={getBaseName()}>
        <img src={logoImg} alt="logo" />
        <div className={styles.title_wrapper}>React Antd Admin</div>
      </a>
    </div>
  );
};

export default Logo;
