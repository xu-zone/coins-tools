import { deepMerge, getGetParamsAsString } from './utils';

class Api {
  #context: RequestInit;
  #baseUrl: string;
  get: Caller = {};
  post: Caller = {};
  delete: Caller = {};
  constructor(
    {
      url,
      calls,
      context = {},
    }: {
      url: string;
      calls: ICalls;
      context: RequestInit;
    },
    _fetch?: any
  ) {
    this.#baseUrl = url;
    this.#context = context;
    Object.keys(calls).forEach((key) => {
      const method = calls[key]?.context?.method || 'get';
      this[method.toLowerCase()][key] = this.call(calls[key]);
    });
    if (_fetch) {
      if (typeof global !== 'undefined' && !global.fetch) global.fetch = _fetch;
      if (typeof window !== 'undefined' && !window.fetch) window.fetch = _fetch;
    }
  }

  private call = (callData: ICall) => {
    const finalContext = deepMerge(this.#context, callData.context);
    const query = callData.query;
    const finalUrl = this.#baseUrl + callData.url + getGetParamsAsString(query);
    console.log('Calling::', finalUrl);
    return async function () {
      const result = await fetch(finalUrl, finalContext);
      console.log(result);
      if (result.status === 200) {
        const json = await result.json();
        return json;
      }
      console.log('returning wrong');
    };
  };
}

export default Api;
