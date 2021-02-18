import mockServer, { Random, MockResponseType } from '../utils/mockServer';
import { getPostParams, createToken, analyticToken } from '../utils';
const adminName = Random.name();
const guestName = Random.name();
const userData = [
  {
    id: 1,
    username: 'admin',
    realName: adminName,
    password: '123456',
    avatar: Random.dataImage('60x60', adminName[0]),
    roleIds: [1, 2]
  },
  {
    id: 2,
    username: 'guest',
    realName: guestName,
    password: '123456',
    avatar: Random.dataImage('60x60', guestName[0]),
    roleIds: [2]
  }
];
const roleList = [
  {
    id: 1,
    name: '系统管理员',
    key: 'admin'
  },
  {
    id: 2,
    name: '访客',
    key: 'guest'
  }
];
mockServer({
  url: '/api/user/login',
  type: 'post',
  template: (options: any) => {
    const params = getPostParams(options.body);
    const responseBody: MockResponseType = {
      code: '200',
      message: '操作成功',
      data: null
    };
    if (params) {
      const userInfo = userData.find((user) => user.username === params.username);
      if (userInfo && userInfo.password === params.password) {
        responseBody.code = '200';
        responseBody.message = '操作成功！！！';
        responseBody.data = {
          access_token: createToken({
            id: userInfo.id,
            username: userInfo.username,
            roleIds: userInfo.roleIds
          })
        };
      } else {
        responseBody.code = '10000';
        responseBody.message = '用户名或密码错误，请重试。。。';
      }
      console.log(userInfo);
    } else {
      responseBody.code = '999';
      responseBody.message = '系统出错了，请稍后重试。。。';
    }

    return responseBody;
  }
});
mockServer({
  url: '/api/user/getUserInfo',
  type: 'get',
  template: (options: any) => {
    const responseBody: MockResponseType = {
      code: '200',
      message: '操作成功',
      data: null
    };
    try {
      const userInfo = analyticToken(options.headers?.Authorization);
      const currentUser = userData.find((user) => user.id === userInfo.id);
      responseBody.data = {
        userId: currentUser?.id,
        userName: currentUser?.username,
        realName: currentUser?.realName,
        avatar: currentUser?.avatar,
        roleList: roleList.filter((role) => currentUser?.roleIds?.includes(role.id))
      };
    } catch (error) {
      responseBody.code = '40001';
      responseBody.message = '登录已失效，请重新登录。。。';
    }

    return responseBody;
  }
});
