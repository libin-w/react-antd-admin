import { FC } from 'react';
import { Card, CardProps } from 'antd';
import classNames from 'classnames';
import styles from './style.module.scss';
interface PropsType extends CardProps {
  allPadding?: boolean;
}
const PageContentCard: FC<PropsType> = ({ allPadding, children, ...args }) => {
  return (
    <Card
      bordered={false}
      {...args}
      className={classNames(styles.page_content_card, args.className, {
        'all-padding': allPadding === true
      })}
    >
      {children}
    </Card>
  );
};
export default PageContentCard;
