import "isomorphic-fetch";

export default class Api {
    constructor(query) {
        this.query = Api.jsonToQueryString({...query, limit: 1000});
    }

    static host = 'http://react-cdp-api.herokuapp.com/movies/';

    static jsonToQueryString(json) {
        return `?${Object.keys(json).map(key => 
            `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`).join('&')}`;
    }

    fetchJSON() {
        const url = Api.host + this.query;
        return fetch(url).then(response => {
            return response.json()
        });
    }
}