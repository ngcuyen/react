import { useSelector } from "react-redux";
import { getMovieAction, getUpcomingAction, getGenresAction } from "../Redux/CounterReducer/CounterReducer";
import axios from "axios";

export const getMovieAPI = () => {

    return async (dispatch) => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = import.meta.env.VITE_DOMAIN_RATE;
            const bearer_token = `Bearer ${apiKey}`;
            const config = {
                headers: {
                    Authorization: bearer_token
                }
            };
            await axios.get(url, config).then((res) => {
                const data = res.data.results
                const action = getMovieAction(data)
                dispatch(action)

            }); // <== Here we use await keywords to get the result of the Promise
        } catch (err) {
            // here display a message to the user or something else
            console.error(err);
        }
    }
}

export const getUpcomingAPI = () => {
    return async (dispatch) => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = import.meta.env.VITE_DOMAIN_UPCOMING;
            const bearer_token = `Bearer ${apiKey}`;
            const config = {
                headers: {
                    Authorization: bearer_token
                }
            };
            await axios.get(url, config).then((res) => {
                const data = res.data.results
                const upAction = getUpcomingAction(data)
                dispatch(upAction)
            }); // <== Here we use await keywords to get the result of the Promise
        } catch (err) {
            // here display a message to the user or something else
            console.error(err);
        }
    }
}

export const getGenresAPI = () => {
    return async (dispatch) => {
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            // const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
            const url = import.meta.env.VITE_DOMAIN_GENRES;
            const bearer_token = `Bearer ${apiKey}`;
            const config = {
                headers: {
                    Authorization: bearer_token
                }
            };
            await axios.get(url, config).then((res) => {
                const data = res.data.genres
                const genresAction = getGenresAction(data)
                dispatch(genresAction)
            }); // <== Here we use await keywords to get the result of the Promise
        } catch (err) {
            // here display a message to the user or something else
            console.error(err);
        }
    }
}
