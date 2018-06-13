import 'isomorphic-fetch';

export default class Api {
  constructor(query) {
    if (typeof query === 'string') {
      this.query = query;
    } else {
      this.query = Api.jsonToQueryString({ ...query, limit: 100 });
    }
  }

  static jsonToQueryString(json) {
    return `?${Object.keys(json).map(key =>
      `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`).join('&')}`;
  }

  fetchJSON() {
    const url = Api.host + this.query;
    return fetch(url).then(response => response.json());
  }
}

Api.host = 'http://react-cdp-api.herokuapp.com/movies/';
