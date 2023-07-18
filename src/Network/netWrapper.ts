import { IRequest, Net } from './net';
import { getErrorMessage } from './helper';

const NetWrapper = async <T>(
  url: string,
  options: IRequest = {
    method: 'GET',
    cacheTime: 3600000,
    enableCache: true,
    retries: 3
  },
  // injectAuth = true,
  base = process.env.NEXT_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL
) => {
  options.headers = options.headers || {
    'Content-Type': 'application/json'
  };
  if (options.method !== 'GET') {
    options.body = options.body || '';
  }

  const { data, error, status } = await Net<T>(url, options, base);
  let errorMessage;
  if (error) {
    errorMessage = getErrorMessage(error);
  }
  return {
    data,
    error: errorMessage || null,
    status
  };
};

export default NetWrapper;
