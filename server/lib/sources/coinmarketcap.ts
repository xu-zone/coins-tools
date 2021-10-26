const calls: ICalls = {
  list: {
    url: 'cryptocurrency/listings/latest',
    query: {
      start: 1,
      limit: 5000,
    },
  },
  singe: {
    url: 'cryptocurrency/listings/latest',
    query: {
      start: 1,
      limit: 5000,
    },
  },
};

export default calls;
