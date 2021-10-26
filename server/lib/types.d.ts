interface IContext {
  headers?: {
    [typeof string]?: string;
  };
}

interface ICall {
  url: string;
  query?: {
    [typeof string]: any;
  };
  context?: (
    config: any
  ) => {
    method?: string;
    headers: any;
  };
}

interface ICalls {
  list: ICall;
  singe: ICall;
}

interface ICoin {
  ticker: string;
  name: string;
  rawData: {
    dataFrom: string;
    [typeof string]: any;
  };
}
