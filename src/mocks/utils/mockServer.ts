import Mock, { Random } from 'better-mock';
export const baseURL =
  process.env.NODE_ENV === 'development' ? '/api/' : `${process.env.REACT_APP_AXIOS_BASE_URL}/api/`;
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
  Mock.mock(baseURL + params.url, params.type, params.template);
}
export default mockServer;
export { Random };
