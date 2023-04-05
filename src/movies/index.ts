import { Base } from "../base";
import { BaseResponse, Movie, Quote } from "./types";

const entity = "movie";

export class Movies extends Base {
    getMovies(): Promise<BaseResponse<Movie>> {
        return this.request(`/${entity}`)
    }

    getMovieById(id: string): Promise<BaseResponse<Movie>> {
        return this.request(`/${entity}/${id}`)
    }

    getQuotesByMovieId(id: string): Promise<BaseResponse<Quote>> {
        return this.request(`/${entity}/${id}/quote`)
    }
}