export function getPostParams(body: any, key?: string): any {
  let params = null;
  let parseSuccess = false;
  try {
    params = JSON.parse(body);
    parseSuccess = true;
  } catch (error) {
    params = body;
  }
  if (params && typeof key === 'string' && parseSuccess) {
    return params[key] ?? null;
  } else {
    return params;
  }
}
export interface TokenDataType {
  id: number;
  username: string;
  roleIds: number[];
}
export function createToken(data: TokenDataType): string {
  return btoa(JSON.stringify(data));
}
export function analyticToken(token: string): TokenDataType {
  return JSON.parse(atob(token));
}
