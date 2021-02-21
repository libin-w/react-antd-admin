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
