import Mock, { Random } from 'better-mock';

export interface MockResponseType {
  code: string;
  message: string;
  data: any;
}
interface MockServerParamsType {
  url: string;
  type: 'get' | 'post';
  template: (options: any) => MockResponseType;
}
function mockServer(params: MockServerParamsType) {
  Mock.mock(params.url, params.type, params.template);
}
export default mockServer;
export { Random };
