import {beforeEach, describe, expect, jest, test} from '@jest/globals';
import LOTR from '../src/index';

const sdk = new LOTR("API KEY")

describe("movies endpoints", () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve('success') }),
    ) as any;

    const spy = jest.spyOn(global, 'fetch');

    jest.mock('../src/base', () => {
        return {
            Client: jest.fn().mockImplementation(() => {
                {
                    request: jest.fn()
                }
            })
        };
    });

    test('get all movies', async () => {
        await sdk.getMovies()
        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie",
            {
                "headers": {
                    "Authorization": "Bearer API KEY",
                    "Content-Type": "application/json",
                }
            }
        )
    });

    test('get movies by id', async () => {
        await sdk.getMovieById("5cd95395de30eff6ebccde59")
        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde59",
            {
                "headers": {
                    "Authorization": "Bearer API KEY",
                    "Content-Type": "application/json",
                }
            }
        )
    });
    test('get quotes by movie id', async () => {
        sdk.getQuotesByMovieId("5cd95395de30eff6ebccde5b")
        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b/quote",
            {
                "headers": {
                    "Authorization": "Bearer API KEY",
                    "Content-Type": "application/json",
                }
            }
        )
    })
})