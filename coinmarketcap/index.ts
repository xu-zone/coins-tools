import Conf from './src/config';

function start() {
  console.log('starting....');
  console.log(process.env.NODE_ENV, Conf.key, Conf.credits);
}

start();
