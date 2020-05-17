import React, { useEffect, FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Form, Input, Button, Table } from 'antd';
import { connect, ConnectProps, MoreModelState } from 'umi';

import styles from './More.less';

interface PageProps extends ConnectProps {
  more: MoreModelState;
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: 'city'
  },
]

const More: FC<PageProps> = (props) => {
  const { dispatch, more } = props;
  const [form] = Form.useForm();
  //校验失败执行
  const onFinishFailed = () => {
    // props.getMoreData()
    // console.log(err,"打印错误")
  }
  //校验成功执行
  const onFinish = () => {
    // props.getMoreData()
    // console.log(value,"打印成功")
  }
  useEffect(() => {
    // props.getMoreData()
    if (dispatch) {
      dispatch({
        type: 'more/getListdata'
      })
    }
  }, [])
  return (
    <PageHeaderWrapper className={styles.more}>
      <Card>
        <Form form={form} onFinishFailed={onFinishFailed} onFinish={onFinish}>
          <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
      </Card>
      <Card>
        <Table
          rowKey={(items) => items.id}
          columns={columns}
          dataSource={more.listData} />
      </Card>
    </PageHeaderWrapper >
  );
}

export default connect(({ more }: { more: MoreModelState }) => ({ more })
)(More)
