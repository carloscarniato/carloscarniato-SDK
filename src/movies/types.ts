export declare type Movie = {
    _id: string;
    name: string;
    runtimneInMinutes: number;
    budgetInMillions: number,
    boxOfficeRevenueInMillions: number,
    academyAwardNominations: number,
    academyAwardWinds: number,
    rottenTomatoesScore: 94,
}

export declare type Quote = {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
}

export declare type BaseResponse<T> = {
    docs: T[],
    total: number,
    limit: number,
    offset: number,
    page: number,
    pages: number,
}