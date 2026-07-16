const axiosBaseQuery = (apiInstance) => async (args) => {
  try {
    const url = typeof args === 'string' ? args : args.url;
    const method = typeof args === 'string' ? 'GET' : args.method || 'GET';
    const data = typeof args === 'string' ? undefined : args.data || args.body;
    const params = typeof args === 'string' ? undefined : args.params;
    const headers = typeof args === 'string' ? undefined : args.headers;

    const result = await apiInstance({
      url,
      method,
      data,
      params,
      headers,
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || { message: err.message },
      },
    };
  }
};

export default axiosBaseQuery;
