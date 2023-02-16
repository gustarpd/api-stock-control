declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
    };
  }
  export interface RequestParams {}

  export interface ResponseBody {}

  export interface RequestBody {}

  export interface RequestQuery {
    foo: string;
  }
}
