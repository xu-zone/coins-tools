interface ICall {
  url: string;
  context?: RequestInit;
  query?: Object;
}

interface ICalls {
  [typeof string]: ICall;
}

// type Fetch=(any)=>any;
type Caller = {
  [typeof string]: (any) => any;
};
