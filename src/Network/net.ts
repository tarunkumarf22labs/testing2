type pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
type Meta = {
  pagination: pagination;
}

export type FetchState<T> = {
  data: T | null;
  status?: number;
  error: { name: any; message: string; status: number } | null;
  refetch: (url?: string, options?: IRequest) => void;
  meta: Meta
};

export interface IRequest extends RequestInit {
  cacheTime?: number;
  defaultFetch?: boolean;
  enableCache?: boolean;
  retries?: number;
  requestInterceptor?: (options: RequestInit) => RequestInit;
}

const cacheMap = new Map();

export function Cache<T = any>(cacheTimeInSecs = 3600000) {
  function getCache(key: string): T {
    return cacheMap.get(key);
  }

  function setCache(key: string, value: T) {
    cacheMap.set(key, value);

    setTimeout(() => {
      cacheMap.delete(key);
    }, cacheTimeInSecs);
  }
  return { getCache, setCache };
}

export async function Net<T>(
  url: string,
  options: IRequest = {
    method: "GET",
    cacheTime: 3600000,
    enableCache: true,
    // Need to implement retries for get calls
    retries: 3,
  },
  base = ""
): Promise<FetchState<T>> {
  const cache = Cache(options.cacheTime);

  const invoke = (url: string, options: IRequest) => {
    if (
      options.enableCache &&
      options.method?.toLowerCase() === "get" &&
      cache.getCache(url)
    ) 
    {
      return cache.getCache(url);
    } else 
    {
      return fetch(base + url, options)
        .then(async (res) => {
          const result = (await res.json()) as T & { code: string };
          
          if (res.status >= 500 && res.status <= 599) {
            return {
              data: null,
              status: res.status,
              error: {
                data: result,
                message: res.statusText || "",
                status: res.status,
              },
            };
          }
          if (res.ok) {
            if (options.method?.toLowerCase() === "get") {
              const cachedData = {
                data: result,
                status: res.status,
                error: null,
              };
              cache.setCache(url, cachedData);
              return cachedData;
            } else {
              return {
                data: result,
                status: res.status,
                error: null,
              };
            }
          } else {
            return {
              data: null,
              status: res.status,
              error: {
                data: result,
                message: res.statusText || "",
                status: res.status,
              },
            };
          }
        })
        .catch((e) => {
          return {
            data: null,
            status: 0,
            error: { data: e, message: e.message || "", status: 0 },
          };
        });
    }
  };

  return invoke(url, options);
}