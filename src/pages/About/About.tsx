import React from 'react';
import { Button } from 'antd';
import { history, Link } from 'umi';

import styles from './About.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page About/About</h1>
      <Button onClick={() => { history.push('/more')}}>跳转more</Button>
      <Link to="/more">link跳转more</Link>
    </div>
  );
}
