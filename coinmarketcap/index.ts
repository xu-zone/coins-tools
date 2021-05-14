import Conf from './src/config';
import Api from 'api';
import calls from './src/api';

function start() {
  console.log('starting....');
  console.log(process.env.NODE_ENV, Conf.key, Conf.credits);
  const fetcher = new Api({
    url: 'https://pro-api.coinmarketcap.com/v1/',
    context: {
      headers: {
        Accept: 'application/json',
        'X-CMC_PRO_API_KEY': Conf.key,
      },
    },
    calls,
  });
  fetcher.list();
}

start();
