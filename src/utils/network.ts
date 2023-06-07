const errorStatus: { [key: number]: string } = {
  401: "Unauthorized",
  500: "Internal Server Error",
  400: "Bad request",
  404: "Not Found",
};

export enum METHODS {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}

type ResponseData<T = any> = {
  error: { message: string; code: number } | null;
  status: number;
  data: T;
};

const makeReq = async (
  method: METHODS,
  endPoint: string,
  data = {},
  headers = {}
) => {
  return fetch(endPoint, {
    method: METHODS[method],
    headers,
    mode: "cors",
    ...(data && Object.keys(data).length && { body: JSON.stringify(data) }),
  })
    .then(async (response: Response): Promise<ResponseData> => {
      if (!response.ok) {
        const res = await response.json();

        return {
          data: null,
          error: { message: errorStatus[response.status], code: 0 },
          status: response.status,
        };
      }
      return {
        data: await response.json(),
        error: null,
        status: response.status,
      };
    })
    .catch((error) => {
      console.log(error);
      return { error, data: null, status: 0 };
    });
};

export const Fetch = (
  baseURL: string,
  authHeader = {},
  globalHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain",
  },
  mock = false
) => ({
  post: async <T>(
    endPoint: string,
    body: object,
    headers = {}
  ): Promise<ResponseData<T>> => {
    if (!mock) {
      const { data, error, status } = await makeReq(
        METHODS.POST,
        baseURL + endPoint,
        body,
        mergedHeaders(headers, globalHeaders, authHeader)
      );
      return { data, error, status };
    } else {
      return {} as any;
    }
  },
  get: async <T>(endPoint: string, headers = {}): Promise<ResponseData<T>> => {
    if (!mock) {
      const { data, error, status } = await makeReq(
        METHODS.GET,
        baseURL + endPoint,
        {},
        mergedHeaders(headers, globalHeaders, authHeader)
      );
      return { data, error, status };
    } else {
      return {} as any;
    }
  },
  put: (endPoint: string, data: object, headers: object) => {
    return middleWare(
      METHODS.PUT,
      baseURL + endPoint,
      data,
      mergedHeaders(headers, globalHeaders, authHeader)
    );
  },
  patch: (endPoint: string, data: object, headers: object) => {
    return middleWare(
      METHODS.PATCH,
      baseURL + endPoint,
      data,
      mergedHeaders(headers, globalHeaders, authHeader)
    );
  },
  delete: (endPoint: string, data: object, headers: object) => {
    return middleWare(
      METHODS.DELETE,
      baseURL + endPoint,
      data,
      mergedHeaders(headers, globalHeaders, authHeader)
    );
  },
});

const middleWare = async (
  method: METHODS,
  path: string,
  body = {},
  headers = {}
) => {
  const { data, error } = await makeReq(method, path, body, headers);
  return { data, error };
};

const mergedHeaders = (headers = {}, globalHeaders = {}, authHeader = {}) => {
  return new Headers(
    Object.entries({ ...headers, ...globalHeaders, ...authHeader })
  );
};


