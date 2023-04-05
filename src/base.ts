
import 'isomorphic-fetch';

export abstract class Base {
    private apiKey: string;

    constructor(apiKey: string){
        this.apiKey = apiKey
    }

    protected async request<T>(endpoint: string): Promise<T> {
        const url = `https://the-one-api.dev/v2${endpoint}`

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
        }

        return fetch(url, {headers}).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText)
            }
        })
    }
}