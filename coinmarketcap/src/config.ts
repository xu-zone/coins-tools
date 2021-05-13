const conf = require('dotenv-flow').config();

class Conf {
  #apiKey: string;
  #apiCredits: number;

  constructor() {
    const { parsed } = conf;
    this.#apiKey = parsed.COINMARKETCAP_API_KEY;
    this.#apiCredits = parseInt(parsed.COINMARKETCAP_API_CREDITS, 10) || 100;
  }

  get key() {
    return this.#apiKey;
  }

  get credits() {
    return this.#apiCredits;
  }
}

export default new Conf();
