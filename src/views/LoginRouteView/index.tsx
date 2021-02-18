import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Tooltip } from 'antd';
import { UserOutlined, SafetyOutlined } from '@ant-design/icons';
import { useLockFn } from 'ahooks';
import styled, { keyframes } from 'styled-components';
import userInfoActions from '@/store/modules/user-info/actions';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@/store/types';
import UniverseBackground from './UniverseBackground';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyleWrapper = styled.div<{}>`
  height: 100vh;
  min-height: 720px;
  position: relative;
  padding: 10px;
  animation: 1s ${fadeIn};
  .login-form-wrapper {
    position: relative;
    z-index: 10;
    align-items: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 480px;
    margin: 200px auto 0px;
    background: rgba(204, 204, 204, 0.25);
    border-radius: 4px;
    padding: 20px 15px 30px;
    .title-wrapper {
      color: #eeeeee;
      text-align: center;
      line-height: 48px;
      margin-bottom: 20px;
    }
    .ant-form {
      width: 360px;
    }
  }
  .account-list {
    color: #cccccc;
    p {
      margin-bottom: 4px;
      span {
        display: inline-block;
      }
      .label {
        width: 80px;
      }
      .value {
        cursor: pointer;
      }
    }
  }
`;
const accountList = [
  {
    label: '管理员账号',
    username: 'admin',
    password: '123456'
  },
  {
    label: '访客账号',
    username: 'guest',
    password: '123456'
  }
];
const LoginRouteView: FC<{}> = () => {
  const history = useHistory();
  const dispatch = useDispatch<(action: AnyAction) => Promise<any>>();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const validateLoginForm = (): Promise<[any, any]> => {
    setLoading(true);
    return new Promise((resolve) => {
      form
        .validateFields()
        .then((values) => {
          resolve([values, null]);
        })
        .catch((error) => {
          setLoading(false);
          resolve([null, error]);
        });
    });
  };

  const submitLogin = useLockFn(async () => {
    const [values, error] = await validateLoginForm();
    console.log(values, error);
    if (values) {
      dispatch(
        userInfoActions.login({
          username: values.username,
          password: values.password
        })
      )
        .then(() => {
          history.replace('/');
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
    }
  });
  return (
    <StyleWrapper>
      <UniverseBackground />
      <div className="login-form-wrapper">
        <h1 className="title-wrapper">ReactAntdAdmin</h1>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          form={form}
          size="large"
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, whitespace: true, message: '请输入账号！' }]}
          >
            <Input prefix={<UserOutlined />} allowClear placeholder="请输入账号" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, whitespace: true, message: '请输入密码！' }]}
          >
            <Input.Password prefix={<SafetyOutlined />} allowClear placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" block onClick={submitLogin}>
              登录
            </Button>
          </Form.Item>
          <div className="text-a-l account-list">
            {accountList.map((account) => (
              <p key={account.username}>
                <span className="label">{account.label}</span>
                <Tooltip title="点击自动填充" placement="right">
                  <span
                    className="value"
                    onClick={() => {
                      form.setFieldsValue({
                        username: account.username,
                        password: account.password
                      });
                    }}
                  >
                    {account.username}/{account.password}
                  </span>
                </Tooltip>
              </p>
            ))}
          </div>
        </Form>
      </div>
    </StyleWrapper>
  );
};
export default LoginRouteView;
